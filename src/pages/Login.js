// src/pages/Login.js
// Sign in with just your email address — no password.
//
//   1. Type your email  ->  we email you a 6-digit code
//   2. Enter the code   ->  you're in (and this browser stays signed in)
//
// Buyers from checkout are already signed in on the device they bought on;
// this page is for returning on a new device or verifying the account.
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { useAuth } from "../context/AuthContext";
import { useBackendWake, WAKE_MESSAGE } from "../utils/backendWake";
import "../styles/Account.css";

const Login = () => {
    useBackendWake();
    const { isSignedIn, verified, email: currentEmail, signIn, loading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [step, setStep] = useState("email"); // "email" | "code"
    const [email, setEmail] = useState(currentEmail || "");
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const [info, setInfo] = useState("");
    const [busy, setBusy] = useState(false);

    useEffect(() => {
        if (currentEmail && !email) setEmail(currentEmail);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentEmail]);

    // Signed in and verified already? Nothing to do here.
    useEffect(() => {
        if (!loading && isSignedIn && verified) {
            navigate("/profile", { replace: true });
        }
    }, [loading, isSignedIn, verified, navigate]);

    const requestCode = async (e) => {
        e && e.preventDefault();
        setError("");
        setInfo("");
        const clean = email.trim().toLowerCase();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) {
            setError("Enter a valid email address.");
            return;
        }
        setBusy(true);
        setInfo(WAKE_MESSAGE);
        try {
            const res = await fetch(`${BACKEND_URL}/auth/start`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: clean }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                setError(data.error || "Could not send the code — try again.");
                return;
            }
            setEmail(clean);
            setStep("code");
            if (data.devCode) {
                // Local development only (the backend strips this in production)
                setInfo(`Code sent. (Dev code: ${data.devCode})`);
            } else if (data.delivered === false) {
                setError(data.message || "We could not email the code — try again later.");
            } else {
                setInfo(`We emailed a 6-digit code to ${clean} — it expires in 10 minutes.`);
            }
        } catch (_) {
            setError("Could not reach the server — check your connection.");
        } finally {
            setBusy(false);
        }
    };

    const verifyCode = async (e) => {
        e && e.preventDefault();
        setError("");
        const cleanCode = code.trim();
        if (!/^\d{6}$/.test(cleanCode)) {
            setError("Enter the 6-digit code from your email.");
            return;
        }
        setBusy(true);
        setInfo(WAKE_MESSAGE);
        try {
            const res = await fetch(`${BACKEND_URL}/auth/verify`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, code: cleanCode }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                setError(data.error || "That code didn't work — try again.");
                return;
            }
            signIn(data.token); // AuthContext confirms it via /auth/me
            const from = location.state && location.state.from;
            navigate(from || "/profile", { replace: true });
        } catch (_) {
            setError("Could not reach the server — check your connection.");
        } finally {
            setBusy(false);
        }
    };

    return (
        <div className="account-page">
            <div className="auth-card">
                {step === "email" ? (
                    <>
                        <h1>Sign in</h1>
                        <p className="auth-sub">
                            No password needed — just your email address. If you bought
                            something recently, you're already signed in on that device.
                        </p>
                        <form onSubmit={requestCode}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                autoComplete="email"
                                autoFocus
                            />
                            <button type="submit" disabled={busy}>
                                {busy ? "Sending…" : "Email me a code"}
                            </button>
                        </form>
                        {error && <p className="form-error">{error}</p>}
                    </>
                ) : (
                    <>
                        <h1>Enter your code</h1>
                        <p className="auth-sub">
                            We sent a 6-digit code to <strong>{email}</strong>.
                        </p>
                        <form onSubmit={verifyCode}>
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="\d*"
                                maxLength={6}
                                value={code}
                                onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                                placeholder="123456"
                                className="code-input"
                                autoComplete="one-time-code"
                                autoFocus
                            />
                            <button type="submit" disabled={busy}>
                                {busy ? "Checking…" : "Sign in"}
                            </button>
                        </form>
                        {info && <p className="form-info">{info}</p>}
                        {error && <p className="form-error">{error}</p>}
                        <div className="auth-links">
                            <button type="button" className="link-button" onClick={() => { setError(""); setInfo(""); setStep("email"); }}>
                                ← Use a different email
                            </button>
                            <button type="button" className="link-button" onClick={requestCode} disabled={busy}>
                                Resend code
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Login;
