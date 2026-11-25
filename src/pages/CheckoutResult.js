// src/pages/CheckoutResult.js
// Where Stitch sends the customer back after the hosted checkout. The browser
// redirect is not proof of payment — we always ask the backend to confirm the
// real status. The old Paystack path is kept as a fallback.
import React, { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { useAuth } from "../context/AuthContext";
import "../styles/Account.css";

const PENDING_KEY = "lt_pending_payment";

const CheckoutResult = () => {
    const [searchParams] = useSearchParams();
    const { signIn, isSignedIn } = useAuth();

    const [state, setState] = useState("checking"); // checking | success | failed | unknown
    const [detail, setDetail] = useState("");
    const [invoiceNumber, setInvoiceNumber] = useState(null);
    const doneRef = useRef(false);

    useEffect(() => {
        if (doneRef.current) return; // React 18 StrictMode double-run guard
        doneRef.current = true;

        let pending = null;
        try {
            pending = JSON.parse(localStorage.getItem(PENDING_KEY) || "null");
        } catch (_) {
            pending = null;
        }

        const reference =
            (pending && pending.ref) || searchParams.get("reference") || "";
        const provider =
            (pending && pending.provider) ||
            (searchParams.get("provider") === "stitch" ? "stitch" : "paystack");

        if (pending) {
            setInvoiceNumber(pending.invoiceNumber || null);
            if (pending.token) signIn(pending.token); // sign the buyer in
            localStorage.removeItem(PENDING_KEY);
        }

        if (!reference) {
            setState("unknown");
            return;
        }

        (async () => {
            try {
                if (provider === "stitch") {
                    const linkId =
                        (pending && pending.linkId) || searchParams.get("linkId") || "";
                    const qs = new URLSearchParams();
                    if (linkId) qs.set("linkId", linkId);
                    if (reference) qs.set("reference", reference);

                    const res = await fetch(`${BACKEND_URL}/api/stitch/status?${qs.toString()}`);
                    const data = await res.json().catch(() => ({}));

                    if (res.ok && data.paid) {
                        setState("success");
                        setDetail(
                            data.amount
                                ? `Paid ${(data.amount / 100).toLocaleString("en-ZA", { style: "currency", currency: "ZAR" })}`
                                : ""
                        );
                    } else {
                        setState("failed");
                        setDetail(
                            data.error ||
                                "We haven't received the payment yet. If you've just paid, refresh in a moment."
                        );
                    }
                    return;
                }

                // Parked Paystack path — kept intact in case it is ever approved.
                const res = await fetch(`${BACKEND_URL}/verify-payment/${reference}`);
                const data = await res.json().catch(() => ({}));
                if (res.ok && data.data && data.data.status === "success") {
                    setState("success");
                    setDetail(
                        data.data.amount
                            ? `Paid ${((data.data.amount / 100) || 0).toLocaleString("en-ZA", { style: "currency", currency: "ZAR" })}`
                            : ""
                    );
                } else {
                    setState("failed");
                    setDetail(
                        (data.data && data.data.message) ||
                            (data.error || "") ||
                            "The payment was not completed."
                    );
                }
            } catch (_) {
                setState("failed");
                setDetail(
                    "We couldn't confirm your payment right now. If money left your account, don't worry — we'll match it up. Email localtechza@gmail.com."
                );
            }
        })();
    }, [searchParams, signIn]);

    return (
        <div className="account-page">
            <div className="auth-card result-card">
                {state === "checking" && (
                    <>
                        <div className="spinner" />
                        <h1>Checking your payment…</h1>
                        <p className="auth-sub">This only takes a moment.</p>
                    </>
                )}

                {state === "success" && (
                    <>
                        <div className="result-icon ok">✓</div>
                        <h1>Payment confirmed</h1>
                        <p className="auth-sub">
                            Thank you! Your order
                            {invoiceNumber ? ` (#${invoiceNumber})` : ""} is on its way
                            to you soon.
                            {detail ? ` ${detail}.` : ""} Check your spam or junk
                            folder if the invoice email hasn't arrived yet.
                        </p>
                        <div className="result-actions">
                            {isSignedIn ? (
                                <Link to="/profile" className="primary-link">
                                    Track my order →
                                </Link>
                            ) : (
                                <Link to="/login" className="primary-link">
                                    Track my order →
                                </Link>
                            )}
                            <Link to="/products/all" className="secondary-link">
                                Continue shopping
                            </Link>
                        </div>
                    </>
                )}

                {state === "failed" && (
                    <>
                        <div className="result-icon bad">!</div>
                        <h1>Payment not completed</h1>
                        <p className="auth-sub">{detail}</p>
                        <div className="result-actions">
                            <Link to="/cart" className="primary-link">
                                Back to cart
                            </Link>
                            <Link to="/contact" className="secondary-link">
                                Need help? Contact us
                            </Link>
                        </div>
                    </>
                )}

                {state === "unknown" && (
                    <>
                        <h1>Payment status</h1>
                        <p className="auth-sub">
                            We don't have a payment reference to check. If you just paid,
                            your order will be confirmed as soon as your bank notifies us —
                            or email localtechza@gmail.com with your name and we'll check.
                        </p>
                        <div className="result-actions">
                            <Link to="/" className="primary-link">Back home</Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CheckoutResult;
