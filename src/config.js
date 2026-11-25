// src/config.js
// Central configuration for the LocalTech website.

// Render backend for LocalTech (deployed from github.com/localtechza/backend)
export const BACKEND_URL = "https://localtech-backend.onrender.com";

// LocalTech's live domain (GitHub Pages + Resend + Paystack all use this).
export const SITE_DOMAIN = "https://localtechza.co.za";

// Card payments (Stitch Express). Kept off until verification AND the test
// integration are approved — the flow is built in Checkout.js and
// backend/server.js, so switching this to true turns cards on with no other
// changes. The old Paystack code is parked but no longer used.
export const CARD_PAYMENTS_ENABLED = false;
export const CARD_PROVIDER = "stitch";

// Google Analytics — left as a placeholder until card payments are approved.
// Replace both occurrences with the real G-XXXXXXXXXX id, or delete the
// gtag block in public/index.html and usePageTracking.js to switch it off.
export const GA_ID = "G-XXXXXXXXXX";
