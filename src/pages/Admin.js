// src/pages/Admin.js
// The owner's order desk — reached only by typing /admin (never linked
// from the site) and unlocked with the ADMIN_PIN set on Render.
//
// Two tabs: every order with a one-click status change, and the list of
// email addresses captured from checkout / contact / booking forms.
import React, { useState, useEffect, useCallback } from "react";
import { BACKEND_URL } from "../config";
import { ORDER_STATUSES, formatDate, formatDateTime, rands } from "../utils/orderStatuses";
import "../styles/Account.css";

const TOKEN_KEY = "lt_admin_token";

const Admin = () => {
    const [token, setToken] = useState(() => sessionStorage.getItem(TOKEN_KEY));
    const [pin, setPin] = useState("");
    const [pinError, setPinError] = useState("");
    const [busy, setBusy] = useState(false);

    const [tab, setTab] = useState("orders");
    const [orders, setOrders] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [statuses, setStatuses] = useState(ORDER_STATUSES);
    const [stored, setStored] = useState(true);
    const [loadError, setLoadError] = useState("");
    const [filter, setFilter] = useState("All");
    const [saving, setSaving] = useState(null); // invoice number being updated
    const [noteDraft, setNoteDraft] = useState({}); // invoice -> note text

    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const loadOrders = useCallback(async () => {
        setLoadError("");
        try {
            const res = await fetch(`${BACKEND_URL}/admin/orders`, { headers });
            if (res.status === 401) {
                sessionStorage.removeItem(TOKEN_KEY);
                setToken(null);
                return;
            }
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed");
            setOrders(data.orders || []);
            setStatuses(data.statuses || ORDER_STATUSES);
            setStored(data.stored !== false);
        } catch (err) {
            setLoadError(err.message || "Could not load orders");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    const loadCustomers = useCallback(async () => {
        try {
            const res = await fetch(`${BACKEND_URL}/admin/customers`, { headers });
            if (res.ok) {
                const data = await res.json();
                setCustomers(data.customers || []);
            }
        } catch (_) {
            /* shown via orders error state */
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (!token) return;
        loadOrders();
        loadCustomers();
    }, [token, loadOrders, loadCustomers]);

    const signIn = async (e) => {
        e.preventDefault();
        setBusy(true);
        setPinError("");
        try {
            const res = await fetch(`${BACKEND_URL}/admin/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ pin: pin.trim() }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                setPinError(data.error || "Sign-in failed");
                return;
            }
            sessionStorage.setItem(TOKEN_KEY, data.token);
            setToken(data.token);
            setPin("");
        } catch (_) {
            setPinError("Could not reach the server");
        } finally {
            setBusy(false);
        }
    };

    const updateStatus = async (order, status) => {
        if (!status || status === order.status) return;
        const note = (noteDraft[order.invoiceNumber] || "").trim();
        setSaving(order.invoiceNumber);
        try {
            const res = await fetch(
                `${BACKEND_URL}/admin/orders/${order.invoiceNumber}/status`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        ...headers,
                    },
                    body: JSON.stringify({ status, note }),
                }
            );
            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data.error || "Update failed");
            setOrders((prev) =>
                prev.map((o) =>
                    o.invoiceNumber === order.invoiceNumber
                        ? {
                              ...o,
                              status,
                              history: [
                                  ...(o.history || []),
                                  {
                                      status,
                                      at: new Date().toISOString(),
                                      by: "Admin",
                                      note,
                                  },
                              ],
                          }
                        : o
                )
            );
            setNoteDraft((prev) => ({ ...prev, [order.invoiceNumber]: "" }));
        } catch (err) {
            setLoadError(`#${order.invoiceNumber}: ${err.message}`);
        } finally {
            setSaving(null);
        }
    };

    // ---- PIN gate -------------------------------------------------------
    if (!token) {
        return (
            <div className="account-page">
                <div className="auth-card admin-card">
                    <h1>Order desk</h1>
                    <p className="auth-sub">Staff only — enter the admin PIN.</p>
                    <form onSubmit={signIn}>
                        <input
                            type="password"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            placeholder="PIN"
                            className="code-input"
                            inputMode="numeric"
                            autoFocus
                        />
                        <button type="submit" disabled={busy || !pin.trim()}>
                            {busy ? "Checking…" : "Open"}
                        </button>
                    </form>
                    {pinError && <p className="form-error">{pinError}</p>}
                </div>
            </div>
        );
    }

    const shown =
        filter === "All" ? orders : orders.filter((o) => o.status === filter);

    return (
        <div className="account-page admin-page">
            <div className="profile-top">
                <div>
                    <h1>Order desk</h1>
                    <p className="profile-email">
                        {orders.length} order{orders.length === 1 ? "" : "s"} stored
                        {stored ? "" : " — database not connected"}
                    </p>
                </div>
                <button
                    className="secondary-button"
                    onClick={() => {
                        sessionStorage.removeItem(TOKEN_KEY);
                        setToken(null);
                    }}
                >
                    Lock
                </button>
            </div>

            <div className="admin-tabs">
                <button
                    className={tab === "orders" ? "active" : ""}
                    onClick={() => setTab("orders")}
                >
                    Orders
                </button>
                <button
                    className={tab === "customers" ? "active" : ""}
                    onClick={() => setTab("customers")}
                >
                    Customer emails ({customers.length})
                </button>
            </div>

            {loadError && <p className="form-error">{loadError}</p>}

            {tab === "orders" && (
                <>
                    <div className="admin-filter">
                        <label htmlFor="status-filter">Show:</label>
                        <select
                            id="status-filter"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="All">All statuses</option>
                            {statuses.map((s) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>
                        <button className="link-button" onClick={loadOrders}>
                            Refresh
                        </button>
                    </div>

                    {shown.length === 0 && (
                        <p className="muted-text">No orders here yet.</p>
                    )}

                    {shown.map((order) => (
                        <article key={order.invoiceNumber} className="order-card admin-order">
                            <header className="order-head">
                                <div>
                                    <span className="order-no">#{order.invoiceNumber}</span>
                                    <span className="order-date">{formatDate(order.createdAt)}</span>
                                </div>
                                <span className={`status-badge status-${order.status.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                                    {order.status}
                                </span>
                            </header>

                            <div className="admin-grid">
                                <div>
                                    <p>
                                        <strong>{order.name}</strong>
                                    </p>
                                    <p className="muted-text">
                                        {order.email}
                                        {order.phone ? ` · ${order.phone}` : ""}
                                    </p>
                                    <p className="muted-text">
                                        {order.address}
                                        {order.shippingOption === "courier" ? " · Courier" : " · Pickup"}
                                        {order.paymentMethod === "EFT" ? " · EFT" : " · Card"}
                                    </p>
                                </div>
                                <div>
                                    <ul className="order-items">
                                        {(order.items || []).map((item, i) => (
                                            <li key={i}>
                                                <span className="item-title">
                                                    {item.title} × {item.quantity}
                                                </span>
                                                <span className="item-price">
                                                    {rands(item.price * item.quantity)}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="order-meta">
                                        <span>{formatDateTime(order.createdAt)}</span>
                                        <strong>Total {rands(order.total)}</strong>
                                    </p>
                                </div>
                            </div>

                            <div className="status-controls">
                                <select
                                    value={order.status}
                                    disabled={saving === order.invoiceNumber}
                                    onChange={(e) => updateStatus(order, e.target.value)}
                                >
                                    {statuses.map((s) => (
                                        <option key={s} value={s}>
                                            {s}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="text"
                                    placeholder="Optional note (e.g. courier booked, tracking number)"
                                    value={noteDraft[order.invoiceNumber] || ""}
                                    onChange={(e) =>
                                        setNoteDraft((prev) => ({
                                            ...prev,
                                            [order.invoiceNumber]: e.target.value,
                                        }))
                                    }
                                />
                                {saving === order.invoiceNumber && (
                                    <span className="muted-text">Saving…</span>
                                )}
                            </div>
                        </article>
                    ))}
                </>
            )}

            {tab === "customers" && (
                <div className="customers-list">
                    {customers.length === 0 && (
                        <p className="muted-text">
                            No email addresses captured yet (they arrive with checkouts,
                            contact messages and bookings).
                        </p>
                    )}
                    {customers.length > 0 && (
                        <table className="customers-table">
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Name</th>
                                    <th>From</th>
                                    <th>First seen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((c) => (
                                    <tr key={c.email}>
                                        <td>{c.email}</td>
                                        <td>{c.name || "—"}</td>
                                        <td>{(c.sources || []).join(", ") || "—"}</td>
                                        <td>{formatDate(c.createdAt)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            )}
        </div>
    );
};

export default Admin;
