// src/utils/orderStatuses.js
// KEEP IN SYNC with backend/statuses.js — the backend is the source of
// truth (it validates admin updates against the same list).
export const ORDER_STATUSES = [
    "Awaiting payment",
    "Payment confirmed",
    "Packing",
    "Ready for pickup",
    "Shipped",
    "Delivered",
    "Cancelled",
];

// Progress bar steps for a normal order (Cancelled breaks out of the flow)
export const STATUS_FLOW = [
    "Awaiting payment",
    "Payment confirmed",
    "Packing",
    "Ready for pickup",
    "Shipped",
    "Delivered",
];

// Short friendly label for each step (shown under the progress dots)
export const STATUS_HINTS = {
    "Awaiting payment": "We're waiting for your payment to reach us",
    "Payment confirmed": "Payment received — thank you!",
    "Packing": "Your order is being prepared",
    "Ready for pickup": "Waiting for the courier to collect it",
    Shipped: "On its way to you",
    Delivered: "Delivered — enjoy!",
    Cancelled: "This order was cancelled",
};

export const formatDate = (value) => {
    if (!value) return "";
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-ZA", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
};

export const formatDateTime = (value) => {
    if (!value) return "";
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleString("en-ZA", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
};

export const rands = (amount) => `R${Number(amount || 0).toFixed(2)}`;
