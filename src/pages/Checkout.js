import React, { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { useAuth } from "../context/AuthContext";
import "../styles/Checkout.css";
import acceptedImage from "../assets/accepted.webp";

// Where CheckoutResult picks the payment reference up after Paystack
const PENDING_KEY = "lt_pending_payment";

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const { signIn } = useAuth();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const [shippingOption, setShippingOption] = useState("pickup");
    const [paymentMethod, setPaymentMethod] = useState("paystack");
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

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
    const shippingFee = shippingOption === "courier" ? 120 : 0;
    const grandTotal = total + shippingFee;

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
        return "";
    };

    const saveSessionToken = (token) => {
        // Signs the buyer in on this browser (email-only account, no password)
        if (token) signIn(token);
    };

    // =========================
    // PAYSTACK
    // =========================
    const handlePaystackPayment = async () => {
        if (hasSubmittedRef.current) return;

        const problem = validateForm();
        if (problem) {
            setStatusMessage("Error: " + problem);
            return;
        }

        hasSubmittedRef.current = true;
        setLoading(true);

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
                headers: { "Content-Type": "application/json" },
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
            return;
        }

        hasSubmittedRef.current = true;
        setLoading(true);

        try {
            const res = await fetch(
                `${BACKEND_URL}/checkout`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
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
                    ? `Order #${data.invoiceNumber} placed! EFT instructions below — you're signed in, so track it any time from the account icon.`
                    : "Order placed successfully! EFT instructions below."
            );

            // 🔥 OLD BEHAVIOUR RESTORED: stay on page briefly then go home
            setTimeout(() => {
                navigate("/");
            }, 1500);

        } catch (err) {
            hasSubmittedRef.current = false;
            setStatusMessage("Error: " + err.message);
        } finally {
            setLoading(false);
        }
    };

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
                        <option value="courier">Courier (R120)</option>
                    </select>

                    <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                        <option value="paystack">Pay With Card</option>
                        <option value="eft">EFT</option>
                    </select>

                    <div className="total-summary">
                        <h3>Total: R{grandTotal.toFixed(2)}</h3>
                    </div>

                    {paymentMethod === "paystack" ? (
                        <button onClick={handlePaystackPayment} disabled={loading}>
                            {loading ? "Processing..." : "Pay with Card"}
                        </button>
                    ) : (
                        <button onClick={handleEFTPayment} disabled={loading}>
                            {loading ? "Processing..." : "Place Order (EFT)"}
                        </button>
                    )}

                    {/* ✅ EFT DISPLAY */}
                    {paymentMethod === "eft" && (
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

                    {statusMessage && <p className="status-message">{statusMessage}</p>}
                </div>

                {/* Payment badge always sits below the form, on every device */}
                <div className="secured-image">
                    <img src={acceptedImage} alt="Accepted payment methods" />
                </div>
            </div>
        </div>
    );
};

export default Checkout;