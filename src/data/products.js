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
    {
        id: 2,
        handle: "refurbished-hp-elitedesk-800-g6-sff-i5-10th-gen",
        title: "Refurbished HP EliteDesk 800 G6 SFF i5 10th Gen",
        description: "This refurbished HP EliteDesk 800 G6 SFF delivers reliable business performance in a compact Small Form Factor chassis.\n\nEquipped with a 10th Generation Intel Core i5-10500T processor, 16GB DDR4 memory and a 256GB NVMe SSD, it handles everyday productivity and demanding applications with ease.\n\nThe system includes Windows 11 Pro 64 Bit and offers modern connectivity with USB 3.0, DisplayPort and Ethernet LAN.",
        price: 6450.00,
        images: {
            "Refurbished HP EliteDesk 800 G6 SFF i5 10th Gen": "https://res.cloudinary.com/rmmufvrh/image/upload/v1794757625/HPEliteDesk805G6SFFRefurbished3_c6c2b681-5340-4092-8911-65416a97bd24_1.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794757624/HPEliteDesk805G6SFFRefurbished2_f87b6ab1-9b6a-42cb-b8da-ddda7f642101_1.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794757622/HPEliteDesk805G6SFFRefurbished1_b8364c35-cc3f-49af-a2ed-e8201198e356_1.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794757623/HPEliteDesk805G6SFFRefurbished33_4f78ea96-0b93-4cab-8d37-7693288b38c0_1.jpg"
        ],
        options: [],
        category: "Desktop PCs"
    },

    {
        id: 1,
        handle: "dell-optiplex-3080-sff-desktop-core-i5-16gb-ram-512gb-nvme",
        title: "Dell OptiPlex 3080 SFF Desktop – Core i5, 16GB RAM, 512GB NVMe",
        description: "The Dell OptiPlex 3080 Small Form Factor is a compact, business-grade desktop built for reliable everyday performance. Powered by a 10th Gen Intel Core i5-10500 processor with 6 cores and 12 threads, 16GB DDR4 memory and a fast 512GB NVMe SSD, it handles office work, study and multitasking with ease.\n\nDespite its space-saving design, it offers plenty of connectivity with eight USB ports, HDMI, DisplayPort, Ethernet LAN and a headphone/microphone combo port, along with PCI Express expansion slots for future upgrades. This refurbished unit is in good condition and comes with Windows 11 Pro preinstalled, a power cable and a 12-month warranty. Please note that no monitor or optical drive is included.",
        price: 7950.00,
        images: {
            "Dell OptiPlex 3080 SFF Desktop – Core i5, 16GB RAM, 512GB NVMe": "https://res.cloudinary.com/rmmufvrh/image/upload/v1794757467/REFURBISHED_-_DELL_OPTIPLEX_3080_SFF_-_CORE_I5_10TH_GEN_-_16GB_DDR4_-_512GB_NVME_-_COMPUTER3.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794757466/REFURBISHED_-_DELL_OPTIPLEX_3080_SFF_-_CORE_I5_10TH_GEN_-_16GB_DDR4_-_512GB_NVME_-_COMPUTER2.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794757466/REFURBISHED_-_DELL_OPTIPLEX_3080_SFF_-_CORE_I5_10TH_GEN_-_16GB_DDR4_-_512GB_NVME_-_COMPUTER1.jpg"
        ],
        options: [],
        category: "Desktop PCs"
    },

    
    
    
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
