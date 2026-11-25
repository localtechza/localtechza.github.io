// src/config.js
// Central configuration for the LocalTech website.

// Render backend for LocalTech (deployed from github.com/localtechza/backend)
export const BACKEND_URL = "https://localtech-backend.onrender.com";

// LocalTech's live domain (GitHub Pages + Resend + Paystack all use this).
export const SITE_DOMAIN = "https://localtechza.co.za";

// Card payments (Paystack). Kept off until the merchant account is approved —
// the full Paystack flow stays in Checkout.js and backend/server.js, so
// switching this to true re-enables it with no other code changes.
export const CARD_PAYMENTS_ENABLED = false;

// Google Analytics — left as a placeholder until card payments are approved.
// Replace both occurrences with the real G-XXXXXXXXXX id, or delete the
// gtag block in public/index.html and usePageTracking.js to switch it off.
export const GA_ID = "G-XXXXXXXXXX";
