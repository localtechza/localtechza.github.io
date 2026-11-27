// src/config.js
// Central configuration for the LocalTech website.

// Render backend for LocalTech (deployed from github.com/localtechza/backend)
export const BACKEND_URL = "https://localtech-backend.onrender.com";

// LocalTech's live domain (GitHub Pages + Resend + Stitch all use this).
export const SITE_DOMAIN = "https://localtechza.co.za";

// Card payments (Stitch Express) are live. EFT remains available alongside
// cards. The backend is in live mode (STITCH_MODE=live on Render); the old
// Paystack code is parked but no longer used.
export const CARD_PAYMENTS_ENABLED = true;
export const CARD_PROVIDER = "stitch";

// Google Analytics — parked until a real measurement ID is supplied.
// Replace both occurrences here and in public/index.html with the real
// G-XXXXXXXXXX id, or delete the gtag block and usePageTracking.js to switch
// it off. GA does not affect search visibility.
export const GA_ID = "G-XXXXXXXXXX";
