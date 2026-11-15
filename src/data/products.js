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
        id: 13,
        handle: "refurbished-hp-elitedesk-800-g6-sff-i5-10500t-16gb-256gb-nvme-win-11-pro",
        title: "Refurbished HP EliteDesk 800 G6 SFF i5-10500T 16GB 256GB NVMe Win 11 Pro",
        description: "This compact Small Form Factor desktop delivers reliable business performance with a 10th Gen Intel Core i5-10500T processor, 16 GB DDR4 memory and a fast 256 GB NVMe SSD. Intel UHD Graphics 630 drives dual DisplayPort outputs for multi-monitor setups, while four USB 3.0 and four USB 2.0 ports keep peripherals connected.\n\nThe unit ships with Windows 11 Pro 64-bit pre-installed, a power cable and a 12-month warranty. Refurbished to good condition, it’s ready for office productivity straight out of the box.",
        price: 6450.99,
        images: {
            "Refurbished HP EliteDesk 800 G6 SFF i5-10500T 16GB 256GB NVMe Win 11 Pro": "https://res.cloudinary.com/rmmufvrh/image/upload/v1794753987/HPEliteDesk805G6SFFRefurbished33_4f78ea96-0b93-4cab-8d37-7693288b38c0.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794753987/HPEliteDesk805G6SFFRefurbished1_b8364c35-cc3f-49af-a2ed-e8201198e356.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794753987/HPEliteDesk805G6SFFRefurbished2_f87b6ab1-9b6a-42cb-b8da-ddda7f642101.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794753986/HPEliteDesk805G6SFFRefurbished3_c6c2b681-5340-4092-8911-65416a97bd24.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794753986/HPEliteDesk805G6SFFRefurbished3_c6c2b681-5340-4092-8911-65416a97bd24.jpg"
        ],
        options: [],
        category: "Desktop PCs"
    },

    {
        id: 1,
        handle: "home-office-desktop",
        title: "LocalTech Home Office Desktop",
        description: "A reliable, everyday desktop built for work, study and home use. Powered by a modern Intel Core i5 processor with 16GB of RAM and a fast 512GB SSD, it boots in seconds and handles multitasking with ease.\n\nComes with Windows 11 installed, fully tested and backed by our local support team.",
        price: 6999.00,
        images: {
            "Home Office Desktop": "https://placehold.co/600x600/111827/f9fafb?text=Home+Office+Desktop"
        },
        allImages: [],
        options: [],
        category: "Desktop PCs"
    },

    {
        id: 2,
        handle: "business-desktop-pro",
        title: "LocalTech Business Desktop Pro",
        description: "A dependable business-class desktop designed for offices that need performance and longevity. Featuring an Intel Core i7 processor, 32GB of RAM and a 1TB SSD, with plenty of ports for all your peripherals.\n\nIdeal for accounting, design work and heavy multitasking.",
        price: 11499.00,
        images: {
            "Business Desktop Pro": "https://placehold.co/600x600/111827/f9fafb?text=Business+Desktop+Pro"
        },
        allImages: [],
        options: [],
        category: "Desktop PCs"
    },

    // =====================
    // Mini PCs
    // =====================
    {
        id: 3,
        handle: "compact-mini-pc",
        title: "Compact Mini PC",
        description: "Tiny but powerful — this mini PC quietly fits behind a monitor or on a shelf while still delivering smooth everyday performance.\n\nFeatures an Intel processor, 8GB of RAM and a 256GB SSD. Low power use, near-silent operation and Windows 11 ready. Perfect for home offices, students and kiosks.",
        price: 3999.00,
        images: {
            "Compact Mini PC": "https://placehold.co/600x600/111827/f9fafb?text=Compact+Mini+PC"
        },
        allImages: [],
        options: [],
        category: "Mini PCs"
    },

    {
        id: 4,
        handle: "home-media-mini-pc",
        title: "Home Media Mini PC",
        description: "Turn any TV into a smart hub with the Home Media Mini PC. Streams 4K content smoothly, plays music and handles light browsing — all from a device smaller than a paperback book.\n\nEquipped with 8GB of RAM and a 512GB SSD, with HDMI straight to your TV.",
        price: 5499.00,
        images: {
            "Home Media Mini PC": "https://placehold.co/600x600/111827/f9fafb?text=Home+Media+Mini+PC"
        },
        allImages: [],
        options: [],
        category: "Mini PCs"
    },

    // =====================
    // Monitors
    // =====================
    {
        id: 5,
        handle: "24-inch-full-hd-monitor",
        title: '24" Full HD IPS Monitor',
        description: "A crisp 24-inch Full HD monitor with a wide-viewing IPS panel — perfect for everyday work, study and streaming.\n\n75Hz refresh rate, HDMI and VGA inputs, plus VESA mount support so you can wall-mount it or fit it to an arm.",
        price: 2299.00,
        images: {
            "Black": "https://placehold.co/600x600/111827/f9fafb?text=24%22+Monitor+-+Black",
            "Silver": "https://placehold.co/600x600/6b7280/f9fafb?text=24%22+Monitor+-+Silver"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Black", "Silver"]
            }
        ],
        category: "Monitors"
    },

    {
        id: 6,
        handle: "27-inch-qhd-monitor",
        title: '27" QHD Professional Monitor',
        description: "Step up to a sharp 27-inch 1440p QHD display with an IPS panel for stunning detail and true-to-life colour.\n\nIdeal for design, coding and productivity, with HDMI and DisplayPort inputs, a slim bezel design and VESA mount support.",
        price: 4999.00,
        images: {
            "27 QHD Monitor": "https://placehold.co/600x600/111827/f9fafb?text=27%22+QHD+Monitor"
        },
        allImages: [],
        options: [],
        category: "Monitors"
    },

    // =====================
    // Gaming PCs
    // =====================
    {
        id: 7,
        handle: "starter-gaming-pc",
        title: "LocalTech Starter Gaming PC",
        description: "Your entry ticket to PC gaming. The Starter Gaming PC runs today's popular titles smoothly at 1080p with high settings.\n\nSpecs: AMD Ryzen 5 processor, 16GB RAM, RTX 4060 graphics card and a 1TB NVMe SSD for fast load times. Assembled, stress-tested and Windows-ready.",
        price: 13999.00,
        images: {
            "Starter Gaming PC": "https://placehold.co/600x600/111827/f9fafb?text=Starter+Gaming+PC"
        },
        allImages: [],
        options: [],
        category: "Gaming PCs"
    },

    {
        id: 8,
        handle: "elite-gaming-pc",
        title: "LocalTech Elite Gaming PC",
        description: "Built for gamers who want it all. The Elite Gaming PC tears through AAA games at high frame rates and is ready for 1440p and 4K gaming.\n\nSpecs: AMD Ryzen 7 processor, 32GB RAM, RTX 4070 Super graphics card and a 2TB NVMe SSD. Custom assembled, cable-managed and fully stress-tested.",
        price: 26999.00,
        images: {
            "Elite Gaming PC": "https://placehold.co/600x600/111827/f9fafb?text=Elite+Gaming+PC"
        },
        allImages: [],
        options: [],
        category: "Gaming PCs"
    },

    // =====================
    // PC Accessories
    // =====================
    {
        id: 9,
        handle: "mechanical-gaming-keyboard",
        title: "Mechanical Gaming Keyboard",
        description: "Feel every keystroke with a full-size mechanical gaming keyboard. Tactile switches, per-key RGB lighting, a braided cable and a rugged aluminium top plate.\n\nWorks straight out of the box — no software needed.",
        price: 1299.00,
        images: {
            "Black": "https://placehold.co/600x600/111827/f9fafb?text=Gaming+Keyboard+-+Black",
            "White": "https://placehold.co/600x600/e5e7eb/111827?text=Gaming+Keyboard+-+White"
        },
        allImages: [],
        options: [
            {
                name: "Color",
                values: ["Black", "White"]
            }
        ],
        category: "PC Accessories"
    },

    {
        id: 10,
        handle: "ergonomic-wireless-mouse",
        title: "Ergonomic Wireless Mouse",
        description: "Work comfortably for hours with an ergonomic wireless mouse shaped to support your hand naturally.\n\nSilent clicks, a precise adjustable-DPI sensor and a USB receiver that stores inside the mouse. Pairs with any PC or laptop.",
        price: 699.00,
        images: {
            "Ergonomic Wireless Mouse": "https://placehold.co/600x600/111827/f9fafb?text=Wireless+Mouse"
        },
        allImages: [],
        options: [],
        category: "PC Accessories"
    },

    // =====================
    // Other Tech
    // =====================
    {
        id: 11,
        handle: "usb-c-docking-station",
        title: "USB-C Docking Station",
        description: "Turn one USB-C port into a full workstation. This docking station adds dual HDMI output, USB 3.0 ports, an SD card reader and 100W power delivery to charge your laptop while you work.\n\nPlug in one cable and you're connected to everything.",
        price: 1499.00,
        images: {
            "USB-C Docking Station": "https://placehold.co/600x600/111827/f9fafb?text=USB-C+Docking+Station"
        },
        allImages: [],
        options: [],
        category: "Other Tech"
    },

    {
        id: 12,
        handle: "portable-ssd-1tb",
        title: "Portable SSD 1TB",
        description: "Carry your files everywhere on a drive that fits in your pocket. The Portable SSD 1TB is shockproof, silent and up to 5x faster than a normal portable hard drive.\n\nPerfect for backups, photo libraries and moving big files between machines.",
        price: 1899.00,
        images: {
            "Portable SSD 1TB": "https://placehold.co/600x600/111827/f9fafb?text=Portable+SSD+1TB"
        },
        allImages: [],
        options: [],
        category: "Other Tech"
    }
];

export default products;
