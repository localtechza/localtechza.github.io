import React, { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import { BACKEND_URL, CARD_PAYMENTS_ENABLED, CARD_PROVIDER } from "../config";
import { useAuth } from "../context/AuthContext";
import { useBackendWake, wakeBackend, WAKE_MESSAGE } from "../utils/backendWake";
import products from "../data/products";
import { productStatus } from "../utils/productStatus";
import "../styles/Checkout.css";

// Where CheckoutResult picks the payment reference up after Paystack
const PENDING_KEY = "lt_pending_payment";

// Courier is FREE on every order. Set back to 120 to charge for it again —
// this must match COURIER_FEE in backend/server.js or the invoice will
// disagree with what the customer was shown at checkout.
const COURIER_FEE = 0;

// Stitch reviewers need to reach the card checkout while the site is still
// EFT-only for everyone else. Adding this token to the checkout URL turns the
// card option on for that visit only. Remove it after approval if you like.
const REVIEW_TOKEN = "stitch-review-7f3a9c";

// Stitch must receive this on the payment link itself — registering it in the
// dashboard is not enough. Stitch appends ?reference=...&payment_id=... on return.
const STITCH_REDIRECT_URL = "https://localtechza.co.za/checkout-result";

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const { signIn } = useAuth();
    // Warm the backend while the customer is still filling in the form.
    useBackendWake();

    // Card option is hidden from normal customers until approval, but a
    // review URL can turn it on for the gateway's end-to-end check.
    const cardsEnabled =
        CARD_PAYMENTS_ENABLED ||
        new URLSearchParams(location.search).get("review") === REVIEW_TOKEN;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const [shippingOption, setShippingOption] = useState("pickup");
    const [paymentMethod, setPaymentMethod] = useState(
        cardsEnabled ? "card" : "eft"
    );
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusTone, setStatusTone] = useState("info"); // info | success | error

    const hasSubmittedRef = useRef(false); // 🔥 prevents double checkout

    useEffect(() => {
        // Arriving from the booking page? Prefill with the booking details
        // and default to pickup — the R240 service charge already covers
        // the courier trips, so no extra shipping fee should be added.
        const booking = location.state;
        if (booking && booking.fromBooking) {
            setFormData({
                name: booking.name || "",
                email: booking.email || "",
                phone: booking.phone || "",
                address: booking.address || "",
            });
            setShippingOption("pickup");
            return;
        }

        const storedUserData = JSON.parse(localStorage.getItem("userData"));
        if (storedUserData) {
            setFormData({
                name: storedUserData.name || "",
                email: storedUserData.email || "",
                phone: storedUserData.phone || "",
                address: storedUserData.address || "",
            });
        }
    }, [location.state]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingFee = shippingOption === "courier" ? COURIER_FEE : 0;
    const grandTotal = total + shippingFee;

    // Items the shop has taken off sale since they went into the cart —
    // they must be removed before any payment can go through.
    const hasBlockedItems = cart.some((item) => {
        const product = products.find(
            (p) => p.id === item.id || (item.handle && p.handle === item.handle)
        );
        return product && productStatus(product) !== "live";
    });

    // =========================
    // Shared checks — the email is what links the order to the customer's
    // account (order tracking + invoice delivery), so it is required.
    // =========================
    const validateForm = () => {
        if (!formData.name.trim()) return "Enter your name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            return "Enter a valid email address — we use it to link this order to your account and email your invoice.";
        }
        if (!formData.address.trim()) return "Enter your delivery or pickup address.";
        if (cart.length === 0) return "Your cart is empty.";
        if (hasBlockedItems) {
            return "Your cart has items that are out of stock or no longer " +
                "available — open your cart and remove them first.";
        }
        return "";
    };

    const saveSessionToken = (token) => {
        // Signs the buyer in on this browser (email-only account, no password)
        if (token) signIn(token);
    };

    // Send the current session (if any) with checkout so a second order joins
    // the same account instead of being filed under a brand-new one — that is
    // what keeps a customer's orders stacking up in their profile.
    const authHeaders = () => {
        const token = localStorage.getItem("lt_token");
        return token ? { Authorization: `Bearer ${token}` } : {};
    };

    // =========================
    // PAYSTACK
    // =========================
    const handlePaystackPayment = async () => {
        if (hasSubmittedRef.current) return;

        const problem = validateForm();
        if (problem) {
            setStatusMessage("Error: " + problem);
            setStatusTone("error");
            return;
        }

        hasSubmittedRef.current = true;
        wakeBackend(); // covers tabs left open long enough for the server to sleep again
        setLoading(true);
        setStatusMessage(WAKE_MESSAGE);
        setStatusTone("info");

        // Our reference for this payment = the order's transaction id.
        // Created in memory so a failed attempt can never leave a stray order.
        const transactionId = `TXN-${Date.now()}`;

        try {
            // 1. Start Paystack FIRST — if this fails, no order exists yet
            const res = await fetch(
                `${BACKEND_URL}/initialize-payment`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: formData.email,
                        amount: grandTotal,
                        reference: transactionId,
                    }),
                }
            );

            const data = await res.json().catch(() => ({}));

            if (!res.ok || !data.data?.authorization_url) {
                throw new Error("Payment could not be started — you have not been charged. Please try again.");
            }

            // 2. Book the order: invoice number, emails, account sign-in
            const checkoutRes = await fetch(`${BACKEND_URL}/checkout`, {
                method: "POST",
                headers: { "Content-Type": "application/json", ...authHeaders() },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    cart,
                    total: grandTotal,
                    address: formData.address,
                    shippingOption,
                    paymentMethod: "paystack",
                    transactionId,
                }),
            });
            const checkoutData = await checkoutRes.json().catch(() => ({}));
            if (!checkoutRes.ok) {
                throw new Error(checkoutData.error || "Checkout failed — you have not been charged.");
            }

            saveSessionToken(checkoutData.token);

            // Where CheckoutResult resumes once Paystack sends the buyer back
            localStorage.setItem(
                PENDING_KEY,
                JSON.stringify({
                    ref: transactionId,
                    invoiceNumber: checkoutData.invoiceNumber,
                    token: checkoutData.token || null,
                })
            );

            clearCart();

            window.location.href = data.data.authorization_url;

        } catch (err) {
            hasSubmittedRef.current = false;
            setStatusMessage("Error: " + err.message);
            setStatusTone("error");
        } finally {
            setLoading(false);
        }
    };

    // =========================
    // STITCH EXPRESS (active card provider; Paystack above is parked)
    // =========================
    const handleStitchPayment = async () => {
        if (hasSubmittedRef.current) return;

        const problem = validateForm();
        if (problem) {
            setStatusMessage("Error: " + problem);
            setStatusTone("error");
            return;
        }

        hasSubmittedRef.current = true;
        wakeBackend();
        setLoading(true);
        setStatusMessage(WAKE_MESSAGE);
        setStatusTone("info");

        const transactionId = `TXN-${Date.now()}`;

        try {
            // 1. Ask the backend for a hosted Stitch checkout link. If this
            //    fails, no order is created and nobody has been charged.
            const res = await fetch(`${BACKEND_URL}/api/stitch/initialize`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: grandTotal,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    reference: transactionId,
                }),
            });
            const data = await res.json().catch(() => ({}));

            if (!res.ok || !data.link || !data.linkId) {
                throw new Error(
                    data.error ||
                        "Payment could not be started — you have not been charged. Please try again."
                );
            }

            // 2. Book the order: invoice number, emails, account sign-in.
            const checkoutRes = await fetch(`${BACKEND_URL}/checkout`, {
                method: "POST",
                headers: { "Content-Type": "application/json", ...authHeaders() },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    cart,
                    total: grandTotal,
                    address: formData.address,
                    shippingOption,
                    paymentMethod: "stitch",
                    transactionId,
                    paymentLinkId: data.linkId,
                }),
            });
            const checkoutData = await checkoutRes.json().catch(() => ({}));
            if (!checkoutRes.ok) {
                throw new Error(
                    checkoutData.error || "Checkout failed — you have not been charged."
                );
            }

            saveSessionToken(checkoutData.token);

            // CheckoutResult uses this to check the real status with Stitch.
            localStorage.setItem(
                PENDING_KEY,
                JSON.stringify({
                    ref: transactionId,
                    linkId: data.linkId,
                    provider: "stitch",
                    invoiceNumber: checkoutData.invoiceNumber,
                    token: checkoutData.token || null,
                })
            );

            clearCart();
            // Registering the redirect URL in the dashboard is only half the
            // job — it must also be appended to this specific payment link.
            const redirectParam = `redirect_url=${encodeURIComponent(STITCH_REDIRECT_URL)}`;
            window.location.href = data.link.includes("?")
                ? `${data.link}&${redirectParam}`
                : `${data.link}?${redirectParam}`;
        } catch (err) {
            hasSubmittedRef.current = false;
            setStatusMessage("Error: " + err.message);
            setStatusTone("error");
        } finally {
            setLoading(false);
        }
    };

    // =========================
    // EFT (RESTORED EXACT BEHAVIOUR)
    // =========================
    const handleEFTPayment = async () => {
        if (hasSubmittedRef.current) return;

        const problem = validateForm();
        if (problem) {
            setStatusMessage("Error: " + problem);
            setStatusTone("error");
            return;
        }

        hasSubmittedRef.current = true;
        wakeBackend(); // covers tabs left open long enough for the server to sleep again
        setLoading(true);
        setStatusMessage(WAKE_MESSAGE);
        setStatusTone("info");

        try {
            const res = await fetch(
                `${BACKEND_URL}/checkout`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json", ...authHeaders() },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        cart,
                        total: grandTotal,
                        address: formData.address,
                        shippingOption,
                        paymentMethod: "EFT",
                        transactionId: `TXN-${Date.now()}`,
                    }),
                }
            );

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                throw new Error(data.error || "Checkout failed");
            }

            saveSessionToken(data.token);

            clearCart();

            setStatusMessage(
                data.invoiceNumber
                    ? `Order #${data.invoiceNumber} placed! EFT instructions below — you're signed in, so track it any time from the account icon. If the invoice email doesn't arrive, check your spam or junk folder.`
                    : "Order placed successfully! EFT instructions below. Check your spam or junk folder if the invoice email doesn't arrive."
            );
            setStatusTone("success");

            // 🔥 OLD BEHAVIOUR RESTORED: stay on page briefly then go home
            setTimeout(() => {
                navigate("/");
            }, 1500);

        } catch (err) {
            hasSubmittedRef.current = false;
            setStatusMessage("Error: " + err.message);
            setStatusTone("error");
        } finally {
            setLoading(false);
        }
    };

    const cardHandler = CARD_PROVIDER === "stitch" ? handleStitchPayment : handlePaystackPayment;

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <h2>Checkout</h2>

                {/* Shows when arriving from the booking page */}
                {location.state && location.state.fromBooking && (
                    <div className="booking-payment-note">
                        <strong>Booking payment:</strong> courier collection &amp; return (2 trips)
                        for your PC service. Any further repair work will be quoted after we
                        inspect your PC.
                    </div>
                )}

                <div className="checkout-form">

                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                    <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                    <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
                    <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />

                    <select value={shippingOption} onChange={(e) => setShippingOption(e.target.value)}>
                        <option value="pickup">Pickup from our workshop</option>
                        <option value="courier">Courier — FREE on all orders</option>
                    </select>

                    {shippingOption === "courier" && (
                        <p className="checkout-free-shipping">
                            🚚 Free courier shipping — you pay nothing extra for delivery.
                        </p>
                    )}

                    {/* Cards are live; EFT stays available as an alternative. */}
                    {cardsEnabled ? (
                        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                            <option value="card">Pay With Card</option>
                            <option value="eft">EFT</option>
                        </select>
                    ) : (
                        <div className="payment-coming-soon">
                            <p><strong>Payment method: EFT (bank transfer)</strong></p>
                            <p>
                                Your invoice will show our bank details — just email us the
                                proof of payment.
                            </p>
                        </div>
                    )}

                    <div className="total-summary">
                        <h3>Total: R{grandTotal.toFixed(2)}</h3>
                    </div>

                    {hasBlockedItems && (
                        <div className="checkout-blocked">
                            Some items in your cart are out of stock or no longer
                            available. Open your cart and remove them to continue.
                        </div>
                    )}

                    {/* The flag guarantees EFT even if stale state says "card" */}
                    {!cardsEnabled || paymentMethod !== "card" ? (
                        <button onClick={handleEFTPayment} disabled={loading || hasBlockedItems}>
                            {loading ? "Just a moment…" : "Place Order (EFT)"}
                        </button>
                    ) : (
                        <button onClick={cardHandler} disabled={loading || hasBlockedItems}>
                            {loading ? "Just a moment…" : "Pay with Card"}
                        </button>
                    )}

                    {/* ✅ EFT DISPLAY */}
                    {(!cardsEnabled || paymentMethod === "eft") && (
                        <div className="eft-instructions">
                            <p>Please make an EFT payment to:</p>
                            <p><strong>Bank:</strong> Capitec</p>
                            <p><strong>Account Name:</strong> LocalTech</p>
                            <p><strong>Account Number:</strong> 1681446705</p>
                            <p><strong>Branch Code:</strong> 470010</p>
                            <p><strong>Reference:</strong> TXN- (from invoice email)</p>
                            <p>
                                <strong>Please Note:</strong> Email proof of payment to localtechza@gmail.com
                            </p>
                        </div>
                    )}

                    {statusMessage && (
                        <p className={statusTone === "error" ? "status-message" : statusTone === "success" ? "status-success" : "status-info"}>
                            {statusMessage}
                        </p>
                    )}
                </div>

                {/* Plain-text reassurance. No custom gateway badge — Stitch
                    has not published approved checkout artwork for us to use. */}
                <div className="secured-image">
                    <p>Pay securely by card (Stitch) or EFT.</p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;