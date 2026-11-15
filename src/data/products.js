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
        handle: "refurbished-hp-elitedesk-800-g6-sff-i5-10th-gen-16gb-ddr4-256gb-nvme-computer",
        title: "REFURBISHED - HP ELITEDESK 800 G6 SFF - I5 10TH GEN - 16GB DDR4 - 256GB NVME - COMPUTER",
        description: "The HP EliteDesk 800 G6 SFF is a powerful, business-class desktop designed to deliver excellent performance, security, and reliability in professional environments. Featuring a compact Small Form Factor design, it offers an ideal balance between performance and space efficiency, making it suitable for modern offices and demanding business workloads.\n\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\n\nMAKE:\nHP\n\nMODEL:\nEliteDesk 800 G6\n\nFORM FACTOR:\nSmall Form Factor\n\nCPU:\nIntel® Core™ i5-10500T\n\nCACHE:\n12 MB Intel® Smart Cache\n\nCPU SPEED:\n2.30GHz\n\nCORES – THREADS:\n6 Cores\n12 Threads\n\nRAM:\n16GB DDR4\n\nSSD:\n256GB NVMe Solid-State Drive\n\nGPU:\nIntel® UHD Graphics 630\n\nDISPLAY:\nNo Monitor\n\nOPTICAL DRIVE:\nNone\n\nDRIVE BAYS:\n1 x 3.5\"\n\nNETWORKING:\nEthernet LAN\n\nPORTS:\n4 x USB 2.0\n4 x USB 3.0\n1 x Headphone/Microphone combo port\n1 x LAN Port\n2 x DisplayPorts\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\n\nWhat's in the box?\nHP EliteDesk 800 G6\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 6450.00,
        images: {
            "REFURBISHED - HP ELITEDESK 800 G6 SFF - I5 10TH GEN - 16GB DDR4 - 256GB NVME - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1794757625/HPEliteDesk805G6SFFRefurbished3_c6c2b681-5340-4092-8911-65416a97bd24_1.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794757624/HPEliteDesk805G6SFFRefurbished2_f87b6ab1-9b6a-42cb-b8da-ddda7f642101_1.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794757623/HPEliteDesk805G6SFFRefurbished33_4f78ea96-0b93-4cab-8d37-7693288b38c0_1.jpg"
        ],
        options: [],
        category: "Desktop PCs"
    },

    {
        id: 1,
        handle: "refurbished-dell-optiplex-3080-sff-core-i5-10th-gen-16gb-ddr4-512gb-nvme-computer",
        title: "REFURBISHED - DELL OPTIPLEX 3080 SFF - CORE I5 10TH GEN - 16GB DDR4 - 512GB NVME - COMPUTER",
        description: "The Dell OptiPlex 3080 SFF is a reliable compact desktop that delivers solid business performance in a space-saving design. Perfect for offices, home workspaces, or any setup needing a dependable and efficient computer with modern connectivity. This refurbished unit offers great value for users seeking a capable Intel Core i5 system with fast storage and plenty of memory.\n\nCONDITION/GRADE: REFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nDell\n\nMODEL:\nOptiPlex 3080\n\nFORM FACTOR:\nSmall Form Factor\n\nCPU:\nIntel® Core™ i5-10500\n\nRAM:\n16GB DDR4\n\nSSD:\n512GB NVMe Solid-State Drive\n\nGPU:\nIntel® UHD Graphics 630\n\nDISPLAY:\nNo Monitor\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nPORTS:\n4 x USB 2.0\n4 x USB 3.2\n1 x LAN Port\n1 x HDMI\n1 x DisplayPort\nHeadphone & Microphone combo port\n\nNETWORKING:\nEthernet LAN\n10/100/1000Base-T(X)\n\nEXPANSION SLOTS:\n1 x PCI Express x1 (Gen 3.x) slots\n1 x PCI Express x16 (Gen 3.x) slots\n\nDRIVE BAYS:\n1 x 3.5\"\n\nWhat's in the box?\nDell Optiplex 3080\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 7950.00,
        images: {
            "REFURBISHED - DELL OPTIPLEX 3080 SFF - CORE I5 10TH GEN - 16GB DDR4 - 512GB NVME - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1794757467/REFURBISHED_-_DELL_OPTIPLEX_3080_SFF_-_CORE_I5_10TH_GEN_-_16GB_DDR4_-_512GB_NVME_-_COMPUTER3.jpg"
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
    {
        id: 4,
        handle: "refurbished-dell-latitude-5490-i5-8th-gen-8gb-ddr4-240gb-nvme-14-inch-laptop",
        title: "REFURBISHED - DELL LATITUDE 5490 - I5 8TH GEN - 8GB DDR4 - 240GB NVME - 14 INCH - LAPTOP",
        description: "Introducing the reliable and high-performance Dell Latitude 5490, a trusted laptop designed for professionals who need productivity and durability in their daily workflow. This refurbished unit offers excellent value for anyone seeking a capable machine for work, study, or home use.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nDell\n\nMODEL:\nLatitude 5490\n\nPROCESSOR:\nIntel® Core™ i5-8250U\n\nPROCESSOR SPEED:\n1.60GHz\n\nPROCESSOR CORES - THREADS:\n4 Cores - 8 Threads\n\nMEMORY:\n8GB DDR4\n\nSTORAGE:\n240GB NVMe Solid State Drive\n\nGRAPHICS:\nIntel® HD Graphics\n\nDISPLAY:\n14\"\nLED backlit\n16:9 Aspect Ratio\n\nOPTICAL DRIVE:\nNone\n\nAUDIO:\nRealtek ALC3246\n\nWEBCAM:\nYes\n\nNETWORKING:\nWi-Fi\nBluetooth\n\nPORTS:\n3 x USB 3.0\n1 x Type-C\n1 x LAN Port\n1 x HDMI\n1 x Headphone / Microphone combo port\n1 x VGA\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nDell Latitude 5490\nCharger & Power Cable\n\nWARRANTY:\n12 Months",
        price: 5950.00,
        images: {
            "REFURBISHED - DELL LATITUDE 5490 - I5 8TH GEN - 8GB DDR4 - 240GB NVME - 14 INCH - LAPTOP": "https://res.cloudinary.com/rmmufvrh/image/upload/v1794761338/DellLatitude5490LaptopRefurbished_e6734ce0-9e8b-4f1f-be9c-06b642f0ed8a_2.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794761350/Side_37fc8288-1865-4f21-9683-79241452d0f0.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794761348/77380780_8838026287_98d9a42e-35ff-4def-917f-1d96212be060.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794761338/77380780_7860899316_f095b96b-d25a-4478-85e9-6dfa128d5c87.jpg"
        ],
        options: [],
        category: "Laptops"
    },

    {
        id: 3,
        handle: "refurbished-hp-elitebook-840-g6-i7-8th-gen-16gb-ddr4-256gb-ssd-14-inch-laptop",
        title: "REFURBISHED - HP ELITEBOOK 840 G6 - I7 8TH GEN - 16GB DDR4 - 256GB SSD - 14 INCH - LAPTOP",
        description: "The HP EliteBook 840 G6 is a reliable refurbished laptop perfect for professionals who need a portable workhorse. This 14-inch business laptop features an Intel Core i7 processor and 16GB of DDR4 memory, making it ideal for everyday office tasks and remote working. With a fast 256GB SSD and Windows 11 Pro, it offers great performance and portability in a sleek aluminium chassis.\n\nCONDITION/GRADE: REFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nHP\n\nMODEL:\nEliteBook 840 G6\n\nPROCESSOR:\nIntel® Core™ I7 8550U\n\nPROCESSOR SPEED:\n1.80GHz\n\nPROCESSOR CORES - THREADS:\n4 Cores - 8 Threads\n\nMEMORY:\n16GB DDR4\n\nSTORAGE:\n256GB SSD\n\nGRAPHICS:\nIntel® UHD Graphics\n\nDISPLAY:\n14\"\nLED-backlit\n16:9 Aspect Ratio\n\nOPTICAL DRIVE:\nNone\n\nAUDIO:\nBang & Olufsen\n\nWEBCAM:\nHD webcam\n\nNETWORKING:\nWiFi\nBluetooth\n\nPORTS:\n2 x USB 3.2\n1 x Type-C\n1 x Headphone / Microphone Combo Jack\n1 x LAN Port\nHDMI 1.4\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nHP ELITEBOOK 840 G6\nCharger & Power Cable\n\nWARRANTY:\n12 Months",
        price: 7250.00,
        images: {
            "REFURBISHED - HP ELITEBOOK 840 G6 - I7 8TH GEN - 16GB DDR4 - 256GB SSD - 14 INCH - LAPTOP": "https://res.cloudinary.com/rmmufvrh/image/upload/v1794761117/HPEliteBook840G6LaptopRefurbished_1_0db8bd40-0f30-4dcc-8e80-df30f4af9675_1.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794761116/HPEliteBook840G5side_ffad6238-014a-4c41-bad0-99d2cc348922.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794761114/HPEliteBook840G5frontnew_ad53d51c-9aaa-4438-974f-0df55d2b5ca8.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794761115/HPEliteBook840G5Back_48e5982a-d863-4d6d-a79d-523b90df1296.jpg"
        ],
        options: [],
        category: "Laptops"
    },


    // =====================
    // Mini PCs
    // =====================
    {
        id: 6,
        handle: "refurbished-5-x-lenovo-thinkcentre-m910q-mini-pc-i5-6th-gen-8gb-ddr4-256gb-ssd-computer",
        title: "REFURBISHED - 5 X LENOVO THINKCENTRE M910Q MINI PC - I5 6TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER",
        description: "The Lenovo ThinkCentre M910q Tiny desktop PC delivers reliable performance and space-saving design for home offices and small businesses. This compact mini PC is perfect for everyday productivity, web browsing, and multitasking with its powerful Intel processor and fast SSD storage.\n\nCONDITION/GRADE: REFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nLenovo\n\nMODEL:\nThinkCentre M910Q\n\nFORM FACTOR:\nMini PC\n\nPROCESSOR:\nIntel® Core™ i5-6400T\n\nPROCESSOR SPEED:\n2.20GHz\n\nPROCESSOR CORES – THREADS:\n4 Cores – 4 Threads\n\nMEMORY:\n8GB DDR4\n\nSTORAGE:\n256GB SSD\n\nGRAPHICS:\nIntel® HD Graphics 630\n\nDISPLAY:\nNo Monitor\n\nOPTICAL DRIVE:\nNone\n\nNETWORKING:\nEthernet LAN\n\nPORTS:\n6 x USB 3.0\n2 x Display Ports\n1 x LAN Port\n1 x Headphone/Microphone combo port\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\n5 x Lenovo ThinkCentre M910Q\n5 x Power Unit & Power Cable\n\nWARRANTY:\n12 Months",
        price: 11000.00,
        images: {
            "REFURBISHED - 5 X LENOVO THINKCENTRE M910Q MINI PC - I5 6TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1794761740/LenovoThinkCentreM910qbulk.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794761744/Frontflat_42de9eb0-f662-4e0d-a4f3-187e22af572f.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794761746/Lenovothinkcentrem700front2_8202672a-76b1-498c-a03b-ae53b417d66d_1.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    {
        id: 5,
        handle: "refurbished-mecer-jupiter-h610-mini-pc-i3-12th-gen-8gb-ddr4-128gb-ssd-philips-20inch-computer-set",
        title: "REFURBISHED - MECER JUPITER H610 MINI PC - I3 12TH GEN - 8GB DDR4 - 128GB SSD - PHILIPS - 20INCH - COMPUTER SET",
        description: "The Mecer Jupiter H610 Mini PC offers a compact yet powerful desktop solution ideal for modern business and professional environments. Powered by Intel 12th Generation Core processors and featuring a space-saving design, it delivers excellent performance and flexibility for offices, workstations, and educational settings where desk space is limited.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nMECER\nMODEL:\nJupiter H610\nFORM FACTOR:\nMini PC\nPROCESSOR:\nIntel® Core™ i3-12100\nPROCESSOR SPEED:\n3.30GHz\nPROCESSOR CORES – THREADS:\n4 Cores – 8 Threads\nMEMORY:\n8GB DDR4\nSTORAGE:\n128GB Solid State Drive\nGRAPHICS:\nIntel® UHD Graphics 730\nOPTICAL DRIVE:\nNone\nNETWORKING:\nEthernet LAN\nWi-Fi\nPORTS:\n4 x USB 3.0\n2 x USB 2.0\n2 x Type-C\n1 x Headphone/Microphone\n1 x LAN Port\n2 x Display Port\n1 x HDMI\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nDISPLAY SPECIFICATIONS:\nPhilips Monitor\nSpecifications:\nScreen Size: 20\"\nResolution: 1600 x 900\nImage Brightness: 250 cd/m²\nColor Support: 16.7 Million Colors\n1 x VGA\n\nWhat's in the box?\nMEcer Jupiter H610\nDual Power Cable OR 2 X Single Power Cables\n20 Inch Screen\n1 x Display Cable\n1 x FREE Wired Keyboard\n1 x FREE Wired Mouse\n\nWARRANTY:\n12 Months",
        price: 5250.00,
        images: {
            "REFURBISHED - MECER JUPITER H610 MINI PC - I3 12TH GEN - 8GB DDR4 - 128GB SSD - PHILIPS - 20INCH - COMPUTER SET": "https://res.cloudinary.com/rmmufvrh/image/upload/v1794761507/Philips203V5LHSB273_3_set_b295504a-337c-4ca1-a528-c0eeb8f3c214.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794761512/MercerH610minipc1.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794761514/MercerH610.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794761509/Philipsscreen.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794761510/MercerH610minipc_edbbb5c7-d978-4b3d-92a1-0c461628584b.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    
    
    // =====================
    // Monitors
    // =====================
    {
        id: 7,
        handle: "refurbished-dell-p2319h-23inch-hd-computer-monitor-go-gadgets-sa",
        title: "REFURBISHED - DELL P2319H - 23INCH - HD - COMPUTER MONITOR - Go Gadgets SA",
        description: "Looking to upgrade your workspace with a reliable display? The Dell P2319H 23-inch monitor offers crisp Full HD visuals and a space-saving design, perfect for home offices or professional setups. This refurbished desktop PC monitor delivers excellent performance and connectivity, making it a smart choice for anyone needing a dependable screen.\n\nCONDITION/GRADE: REFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nDell\n\nMODEL:\nP2319H\n\nDISPLAY SIZE:\n23INCH\n\nDISPLAY RESOLUTION:\n1920 x 1080 pixels\n\nASPECT RATIO:\n16:9\n\nVIEWING ANGLE:\n178°\n\nCONNECTIVITY:\nHDMI Port\nDisplayPort\nVGA Connector\nUSB Upstream Port\nUSB Downstream Ports\n\nBUILT-IN USB HUB:\nUSB hub version: 3.2 Gen 1 (3.1 Gen 1)\n\nPRODUCT COLOUR:\nBlack\n\nRESPONSE TIME:\n8 ms\n\nNative aspect ratio: 16:9\n\nWhat's in the box?\nDell P Series P2319H\nPower Cable\nHDMI Cable\n\nWARRANTY:\n12 Months",
        price: 2750.00,
        images: {
            "REFURBISHED - DELL P2319H - 23INCH - HD - COMPUTER MONITOR - Go Gadgets SA": "https://res.cloudinary.com/rmmufvrh/image/upload/v1794762039/DellP2319H_686190d3-0dbb-4662-9821-e37446a4d3f6.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794762043/DellP2319H1.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1794762041/DellP2319H2.jpg"
        ],
        options: [],
        category: "Monitors"
    },

    
    
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
