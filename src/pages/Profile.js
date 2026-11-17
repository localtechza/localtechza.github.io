// src/pages/Profile.js
// The customer's account: their orders with live status tracking, and the
// products they've viewed (their account's copy merged with this browser's).
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { useAuth } from "../context/AuthContext";
import { localViewed, mergeViewed } from "../utils/viewed";
import {
    STATUS_FLOW,
    STATUS_HINTS,
    formatDate,
    formatDateTime,
    rands,
} from "../utils/orderStatuses";
import ProductCard from "../components/ProductCard/ProductCard";
import products from "../data/products";
import "../styles/Account.css";

// Progress bar: shows where in the flow this order sits
const OrderSteps = ({ status }) => {
    const current = STATUS_FLOW.indexOf(status);
    if (current === -1) return null; // Cancelled — handled separately
    return (
        <div className="order-steps">
            {STATUS_FLOW.map((step, i) => (
                <div
                    key={step}
                    className={`order-step${i < current ? " is-done" : ""}${
                        i === current ? " is-current" : ""
                    }`}
                >
                    <span className="step-dot">{i < current ? "✓" : i + 1}</span>
                    <span className="step-label">{step}</span>
                </div>
            ))}
        </div>
    );
};

const OrderCard = ({ order }) => {
    const cancelled = order.status === "Cancelled";
    return (
        <article className={`order-card${cancelled ? " is-cancelled" : ""}`}>
            <header className="order-head">
                <div>
                    <span className="order-no">#{order.invoiceNumber}</span>
                    <span className="order-date">{formatDate(order.createdAt)}</span>
                </div>
                <span className={`status-badge status-${slug(order.status)}`}>
                    {order.status}
                </span>
            </header>

            {cancelled ? (
                <p className="cancelled-note">
                    {STATUS_HINTS.Cancelled}
                    {latestNote(order) ? ` — ${latestNote(order)}` : ""}
                </p>
            ) : (
                <>
                    <OrderSteps status={order.status} />
                    <p className="status-hint">{STATUS_HINTS[order.status] || ""}</p>
                </>
            )}

            <ul className="order-items">
                {(order.items || []).map((item, i) => (
                    <li key={i}>
                        <span className="item-title">
                            {item.title || "Item"} <span className="item-qty">× {item.quantity}</span>
                        </span>
                        <span className="item-price">{rands(item.price * item.quantity)}</span>
                    </li>
                ))}
            </ul>

            <div className="order-meta">
                <span>
                    {order.paymentMethod === "EFT" ? "EFT" : "Card"} ·{" "}
                    {order.shippingOption === "courier" ? "Courier" : "Pickup"}
                </span>
                <strong>Total {rands(order.total)}</strong>
            </div>

            {(order.history || []).length > 1 && (
                <details className="order-history">
                    <summary>Order history</summary>
                    <ul>
                        {[...order.history].reverse().map((h, i) => (
                            <li key={i}>
                                <span>{formatDateTime(h.at)}</span>
                                <span>
                                    {h.status}
                                    {h.note ? ` — ${h.note}` : ""}
                                </span>
                            </li>
                        ))}
                    </ul>
                </details>
            )}
        </article>
    );
};

const slug = (s) =>
    String(s || "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-");

const latestNote = (order) => {
    const h = (order.history || []).slice(-1)[0];
    return h && h.note ? h.note : "";
};

const Profile = () => {
    const { isSignedIn, loading: authLoading, email, verified, signOut } = useAuth();
    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);
    const [viewed, setViewed] = useState([]);
    const [loadState, setLoadState] = useState("loading"); // loading | ready | error
    const [viewedState, setViewedState] = useState("loading");

    const token = localStorage.getItem("lt_token");

    const loadOrders = useCallback(async () => {
        if (!token) return;
        setLoadState("loading");
        try {
            const res = await fetch(`${BACKEND_URL}/auth/orders`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!res.ok) throw new Error(String(res.status));
            const data = await res.json();
            setOrders(data.orders || []);
            setLoadState("ready");
        } catch (_) {
            setLoadState("error");
        }
    }, [token]);

    useEffect(() => {
        if (authLoading) return;
        if (!isSignedIn) {
            navigate("/login", { replace: true, state: { from: "/profile" } });
            return;
        }
        loadOrders();

        // Recently viewed: account copy + this browser's copy
        (async () => {
            let account = [];
            try {
                const res = await fetch(`${BACKEND_URL}/auth/viewed`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (res.ok) account = (await res.json()).viewed || [];
            } catch (_) {
                /* offline — browser copy still shows */
            }
            setViewed(mergeViewed(account, localViewed()));
            setViewedState("ready");
        })();
    }, [authLoading, isSignedIn, navigate, loadOrders, token]);

    const viewedProducts = viewed
        .map((v) => products.find((p) => p.handle === v.handle))
        .filter(Boolean);

    if (authLoading || (!isSignedIn && !authLoading)) {
        return (
            <div className="account-page">
                <div className="auth-card muted">Loading your account…</div>
            </div>
        );
    }

    return (
        <div className="account-page">
            <div className="profile-top">
                <div>
                    <h1>My account</h1>
                    <p className="profile-email">
                        {email}
                        {verified ? (
                            <span className="verified-pill">Verified ✓</span>
                        ) : (
                            <span className="unverified-pill">Not verified</span>
                        )}
                    </p>
                </div>
                <button className="secondary-button" onClick={() => { signOut(); navigate("/"); }}>
                    Sign out
                </button>
            </div>

            {!verified && (
                <div className="verify-banner">
                    <p>
                        <strong>Verify your email</strong> to see every order you've
                        placed on any device. We'll send a 6-digit code — it's still
                        just your email, no password.
                    </p>
                    <button onClick={() => navigate("/login")}>Email me a code</button>
                </div>
            )}

            <section className="profile-section">
                <h2>Your orders</h2>
                {loadState === "loading" && <p className="muted-text">Loading orders…</p>}
                {loadState === "error" && (
                    <p className="form-error">
                        We couldn't load your orders right now.{" "}
                        <button className="link-button" onClick={loadOrders}>Try again</button>
                    </p>
                )}
                {loadState === "ready" && orders.length === 0 && (
                    <div className="empty-state">
                        <p>No orders yet.</p>
                        <Link to="/products/all" className="primary-link">
                            Start shopping →
                        </Link>
                    </div>
                )}
                {loadState === "ready" &&
                    orders.map((order) => (
                        <OrderCard key={order.invoiceNumber} order={order} />
                    ))}
            </section>

            <section className="profile-section">
                <h2>Recently viewed</h2>
                {viewedState === "loading" && <p className="muted-text">Loading…</p>}
                {viewedState === "ready" && viewedProducts.length === 0 && (
                    <p className="muted-text">
                        Products you look at will appear here for next time.
                    </p>
                )}
                {viewedProducts.length > 0 && (
                    <div className="product-list viewed-grid">
                        {viewedProducts.map((product) => (
                            <ProductCard key={product.handle} product={product} />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Profile;
