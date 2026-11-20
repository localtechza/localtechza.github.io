import { useEffect } from "react";
import { BACKEND_URL } from "../config";

const KEY = "lt_backend_wake_at";
const COOLDOWN_MS = 5 * 60 * 1000;

// Shown while a request is in flight: explains a slow first load without
// promising a fixed time (Render cold starts vary).
export const WAKE_MESSAGE = "Please wait — our system may need a moment to wake up.";

// One tiny GET is enough to spin up a sleeping free Render service.
// CORS is enabled on the backend, so no special headers are needed.
export function wakeBackend() {
    try {
        const last = Number(sessionStorage.getItem(KEY) || 0);
        if (Date.now() - last < COOLDOWN_MS) return;
        sessionStorage.setItem(KEY, String(Date.now()));
        fetch(BACKEND_URL, { mode: "no-cors", keepalive: true }).catch(() => {
            // Waking is best-effort — the real request will still work.
        });
    } catch {
        // Storage/fetch unavailable (e.g. private browsing) — ignore.
    }
}

// Call at the top of any page that will talk to the backend.
export function useBackendWake() {
    useEffect(() => {
        wakeBackend();
    }, []);
}
