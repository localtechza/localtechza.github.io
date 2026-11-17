// src/utils/viewed.js
// Recently viewed products.
//
// Always kept in this browser (works before sign-in, and instantly), and
// mirrored to the customer's account when they're verified, so their
// profile shows the same list on phone AND computer.
import { BACKEND_URL } from "../config";

const KEY = "lt_viewed";
const CAP = 20;

const entryFor = (product) => ({
    handle: product.handle,
    title: product.title,
    price: Number(product.price) || 0,
    image:
        product.image ||
        (product.images && Object.values(product.images)[0]) ||
        "",
});

export function recordView(product, token) {
    if (!product || !product.handle) return;
    const entry = { ...entryFor(product), at: Date.now() };
    try {
        const list = JSON.parse(localStorage.getItem(KEY) || "[]");
        const next = [entry, ...list.filter((p) => p.handle !== entry.handle)].slice(0, CAP);
        localStorage.setItem(KEY, JSON.stringify(next));
    } catch (_) {
        /* private mode / storage full — ignore */
    }

    // Mirror to the account (the API only accepts verified sessions; any
    // rejection is fine — the browser copy is already saved).
    if (token) {
        fetch(`${BACKEND_URL}/auth/viewed`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(entry),
        }).catch(() => {});
    }
}

export function localViewed() {
    try {
        const list = JSON.parse(localStorage.getItem(KEY) || "[]");
        return Array.isArray(list) ? list : [];
    } catch (_) {
        return [];
    }
}

// Account copy first, then anything viewed in this browser that the
// account hasn't seen yet (deduped by handle, capped).
export function mergeViewed(accountList, browserList) {
    const merged = [];
    const seen = new Set();
    for (const item of [...(accountList || []), ...(browserList || [])]) {
        if (!item || !item.handle || seen.has(item.handle)) continue;
        seen.add(item.handle);
        merged.push(item);
    }
    return merged.slice(0, CAP);
}
