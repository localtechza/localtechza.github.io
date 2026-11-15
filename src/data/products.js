// src/data/products.js
// LocalTech product catalogue.
//
// TODO: Replace the placeholder image URLs below with your own Cloudinary
// URLs (one per colour/option value). Everything else can stay as-is.
//
// Product structure:
//   id          - unique number
//   handle      - URL slug (used in the address bar / product page link)
//   title       - product name shown on the site
//   description - product description (use \n\n for a new paragraph)
//   price       - base price in ZAR
//   prices      - OPTIONAL: map of option value -> price (for size variants)
//   images      - map of option value -> image URL (use the option value
//                 as the key, or a single label if there are no options)
//   allImages   - OPTIONAL: extra gallery images shown as thumbnails
//   options     - list of options, e.g. { name: "Color", values: [...] }
//   category    - must match a category page (see src/App.js routes)

const products = [
    // =====================
    // Desktop PCs
    // =====================
    
    
    
    // =====================
    // Laptops
    // =====================

    // =====================
    // Mini PCs
    // =====================
    
    
    // =====================
    // Monitors
    // =====================
    
    
    // =====================
    // Gaming PCs
    // =====================
    
    
    // =====================
    // PC Accessories
    // =====================
    
    
    // =====================
    // Other Tech
    // =====================
    
    ];

export default products;
