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
        id: 23,
        handle: "refurbished-dell-optiplex-3060-mini-tower-i5-8th-gen-8gb-ddr4-256gb-ssd-computer",
        title: "REFURBISHED - DELL OPTIPLEX 3060 MINI TOWER - I5 8TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER",
        description: "The Dell OptiPlex 3060 Mini Tower is a reliable and efficient desktop computer designed for everyday office work and productivity. Powered by an Intel Core i5 processor and equipped with 8GB of DDR4 memory and a 256GB SSD, it offers dependable performance for web browsing, spreadsheets, and general multitasking. Its compact tower design makes it a practical choice for home and business setups.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nDell\n\nMODEL:\nOptiPlex 3060\n\nFORM FACTOR:\nMini Tower\n\nCPU:\nIntel® Core™ i5-8400\n\nRAM:\n8GB DDR4\n\nSSD:\n256GB Solid-State Drive\n\nGPU:\nIntel® UHD Graphics 630\n\nNETWORKING:\nEthernet LAN\n\nCabling technology - 10/100/1000Base-T(X)\n\nPORTS:\n4 x USB 2.0\n4 x USB 3.0\nHeadphone/Microphone combo port\n1 x LAN Port\nHDMI 1.4\nDisplay Port\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nDell OptiPlex 3060\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 4950.00,
        images: {
            "REFURBISHED - DELL OPTIPLEX 3060 MINI TOWER - I5 8TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795357290/DellOptiPlex3060MiniTowerRefurbished1_1.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795357291/DellOptiPlex3060MiniTowerRefurbished2.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795357293/DellOptiPlex3060MiniTowerRefurbished3.jpg"
        ],
        options: [],
        category: "Desktop PCs"
    },

    {
        id: 21,
        handle: "refurbished-lenovo-thinkcentre-m720s-sff-i5-9th-gen-8gb-ddr4-256gb-ssd-computer",
        title: "REFURBISHED - LENOVO THINKCENTRE M720S SFF - I5 9TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER",
        description: "Introducing a reliable and efficient desktop PC perfect for home or office use. This refurbished Lenovo ThinkCentre delivers solid performance for everyday computing tasks, making it an excellent choice for users seeking value and dependability. With its compact design and powerful internals, it’s ready to handle your productivity needs right out of the box.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\n\nMAKE:\nLenovo\n\nMODEL:\nThinkCentre M720s\n\nFORM FACTOR:\nSmall Form Factor\n\nCPU:\nIntel® Core™ i5-9400\n\nCPU SPEED:\n2.90GHz\n\nCORES – THREADS:\n6 Cores – 6 Threads\n\nRAM:\n8GB DDR4\n\nSSD:\n256GB Solid-State Drive\n\nGPU:\nIntel® UHD Graphics 630\n\nDISPLAY:\nNo Monitor\n\nEXPANSION SLOTS:\n1 x PCIe x1\n1 x PCIe x16\n\nDRIVE BAYS:\n1 x 3.5''\n\nNETWORKING:\nEthernet LAN\n\nPORTS:\n4 x USB 2.0\n4 x USB 3.0\n1 x DisplayPort\n1 x LAN Port\n1 x Headphone/Microphone combo port\n1 x VGA\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nLenovo ThinkCentre M720s\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 4950.00,
        images: {
            "REFURBISHED - LENOVO THINKCENTRE M720S SFF - I5 9TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355861/LenovoThinkCentreM720S_75fee5a0-761d-4e9e-a505-50567e4efb36.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355863/LenovoThinkCentreM720S.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355865/LenovoThinkCentreM720SRear.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355867/LenovoThinkCentreM720Sside.jpg"
        ],
        options: [],
        category: "Desktop PCs"
    },

    {
        id: 20,
        handle: "refurbished-hp-prodesk-400-g5-sff-i5-8th-gen-8gb-ddr4-256gb-ssd-computer",
        title: "REFURBISHED - HP PRODESK 400 G5 SFF - I5 8TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER",
        description: "The HP ProDesk 400 G5 SFF is a reliable compact desktop perfect for home offices and small businesses. Powered by an Intel Core i5 processor and equipped with 8GB of RAM and a 256GB SSD, it delivers smooth everyday performance for browsing, documents, and light multitasking. This refurbished unit offers great value for anyone needing a dependable computer without the premium price.\n\nCONDITION/GRADE: REFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND: HP\n\nMODEL: ProDesk 400 G5\n\nFORM FACTOR: Small Form Factor\n\nCPU: Intel® Core™ i5-8400T\n\nPROCESSOR SPEED: 1.70GHz\n\nCORES – THREADS: 6 Cores – 6 Threads\n\nRAM: 8GB DDR4\n\nSSD: 256GB Solid State Drive\n\nGPU: Intel® UHD Graphics 630\n\nDISPLAY: No Monitor\n\nOPTICAL DRIVE: None\n\nEXPANSION SLOTS:\n1 x PCI Express x16\n\nDRIVE BAYS:\n1 x 3.5\"\n\nNETWORKING:\nEthernet LAN\n\nPORTS:\n4 x USB 2.0\n4 x USB 3.0\n1 x Headphone/Microphone combo port\n1 x VGA\n1 x LAN Port\n1 x DisplayPorts\n\nOPERATING SYSTEM: Windows 11 Pro 64 Bit\n\nWhat's in the box?\nHP ProDesk 400 G5\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 4950.00,
        images: {
            "REFURBISHED - HP PRODESK 400 G5 SFF - I5 8TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355706/HPProdesk400G5SFFRefurbishedDesktop_4a708cdd-e45a-4b8f-a3e9-64f0f5912c71.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355708/hp-prodesk-400-g4-sff-ohne-opt-laufwerk-2.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355709/76732177_7561750855.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355725/76732176_4017448670.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    {
        id: 18,
        handle: "refurbished-lenovo-v520-i5-7th-gen-8gb-ddr4-256gb-ssd-computer",
        title: "REFURBISHED - LENOVO V520 - I5 7TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER",
        description: "The Lenovo V520 is a reliable desktop PC built for business productivity. Powered by an Intel Core i5 processor and equipped with 8GB of DDR4 memory and a 256GB SSD, it offers smooth performance for everyday tasks, office work, and multitasking. This refurbished unit provides dependable computing at an accessible price point.\n\nCONDITION/GRADE: REFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS: \nBRAND: \nLenovo\n\nMODEL: \nV520\n\nFORM FACTOR: \nDesktop Tower\n\nPROCESSOR: \nIntel® Core™ i5-7400\n\nPROCESSOR SPEED: \n3.0GHz\n\nPROCESSOR CORES – THREADS: \n4 Cores – 4 Threads\n\nMEMORY: \n8GB DDR4\n\nSTORAGE: \n256GB Solid-State Drive\n\nGRAPHICS: \nIntel® UHD Graphics 630\n\nOPTICAL DRIVE: \nNone\n\nEXPANSION SLOTS: \n1 x PCIe 2.0\n\nDRIVE BAYS: \n1 x 3.5’’ SATA\n\nNETWORKING: \nEthernet LAN\n\nPORTS: \n4 x USB 3.0\n4 x USB 2.0\n1 x HDMI\n1 x VGA\nHeadphone & mic combo\n1 x RJ45\n\nOPERATING SYSTEM: \nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nLenovo V520\nPower cable\n\nWARRANTY:\n12 Months",
        price: 4250.00,
        images: {
            "REFURBISHED - LENOVO V520 - I5 7TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355401/LenovoV520DesktopRefurbished_c6cf54cf-b399-4936-8919-9baaf59d325d_1.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355403/LenovoV520DesktopRefurbished2_8daca896-4721-4178-8fbe-70c2522c4373.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355405/LenovoV520DesktopRefurbished1_ee3271b2-7313-418f-9728-4dc7dfe7efca.jpg"
        ],
        options: [],
        category: "Desktop PCs"
    },

    {
        id: 16,
        handle: "refurbished-dell-precision-3420-i5-6th-gen-8gb-ddr4-256gb-ssd-computer-autocad-workstation",
        title: "REFURBISHED - DELL PRECISION 3420 - I5 6TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER - AUTOCAD WORKSTATION",
        description: "Elevate your professional productivity with the reliable Dell Precision 3420 workstation. This compact Small Form Factor tower is engineered to deliver consistent performance for demanding tasks, making it an ideal choice for AutoCAD and other professional workloads. Featuring a powerful Intel Core i5 processor and speedy SSD storage, this refurbished desktop PC offers the reliability and power you need for your workspace.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nDell\n\nMODEL:\nPrecision 3420\n\nFORM FACTOR:\nTower Workstation\n\nPROCESSOR:\nIntel® Core™ i5-6500\n\nPROCESSOR SPEED:\n3.30GHz\n\nPROCESSOR CORES – THREADS:\n4 Cores – 4 Threads\n\nMEMORY:\n8GB DDR4\n\nSTORAGE:\n256GB SSD\n\nGRAPHICS:\nIntel® HD Graphics 530\n\nOPTICAL DRIVE:\nNONE\n\nEXPANSION SLOTS:\n1 x PCI Express x1 (Gen 2.x) slots\n1 x PCI Express x16 (Gen 3.x) slots\n\nDRIVE BAYS:\n1 x 3.5''\n\nNETWORKING:\nEthernet LAN\nCabling technology - 10/100/1000Base-T(X)\n\nPORTS:\nUSB 3.0: 6\nUSB 2.0: 2\nSerial: 1\nHDMI: 1\nDisplay Port: 2\n2 x PS2\nRJ-45\nHeadphone jack\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nDell Precision 3420\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 3950.00,
        images: {
            "REFURBISHED - DELL PRECISION 3420 - I5 6TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER - AUTOCAD WORKSTATION": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355125/DellPrecision3420i56thGenAutocadWorkstationComputerRefurbished_da97ce49-4765-478f-a948-4380cba36024.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355127/Dellprecision3420_e4831e36-91f1-49a0-95e0-0da127cc40cf.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355128/30371876_2299_28c2d870-2695-4434-9b34-df01576aa89b.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355130/Dellprecision3420rear_e18657e2-dfc6-4852-925b-264cef04e858.jpg"
        ],
        options: [],
        category: "Desktop PCs"
    },

    {
        id: 15,
        handle: "refurbished-lenovo-thinkcentre-m720s-sff-i3-8th-gen-8gb-ddr4-500gb-hdd-computer",
        title: "REFURBISHED - LENOVO THINKCENTRE M720S - SFF - I3 8TH GEN - 8GB DDR4 - 500GB HDD - COMPUTER",
        description: "The reliable Lenovo ThinkCentre M720s Small Form Factor desktop, perfect for everyday computing tasks and office productivity. This refurbished system offers a compact design with solid performance, making it an ideal choice for home offices or small business setups. With a focus on dependability and efficiency, it delivers the essential features users search for in a compact PC.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nLenovo\n\nMODEL:\nThinkCentre M720s\n\nFORM FACTOR:\nSmall Form Factor\n\nCPU:\nIntel® Core™ i3-8100\n\nGPU:\nIntel® HD Graphics\n\nRAM:\n8GB DDR4\n\nSSD:\n500GB Hard Drive\n\nCONNECTIVITY:\nEthernet LAN\n\nPORTS:\n4 x USB 2.0\n4 x USB 3.0\n1 x DisplayPorts\n1 x LAN Port\n1 x Headphone/Microphone combo port\n1 x VGA\n\nOPERATING SYSTEM:\nWindows 10 Pro 64 Bit\n\nWhat's in the box?\nLenovo ThinkCentre M720s\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 2250.00,
        images: {
            "REFURBISHED - LENOVO THINKCENTRE M720S - SFF - I3 8TH GEN - 8GB DDR4 - 500GB HDD - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354995/REFURBISHED-LENOVOTHINKCENTREM910S-SFF_2.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354997/46150620_5801834264.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354999/46150620_5721091954.jpg"
        ],
        options: [],
        category: "Desktop PCs"
    },

    {
        id: 14,
        handle: "refurbished-dell-optiplex-3080-sff-i5-10th-gen-16gb-ddr4-512gb-nvme-dell-p2319h-23inch-computer-set",
        title: "REFURBISHED - DELL OPTIPLEX 3080 SFF - I5 10TH GEN - 16GB DDR4 - 512GB NVME - DELL P2319H - 23INCH - COMPUTER SET",
        description: "The Dell OptiPlex 3080 Small Form Factor desktop delivers reliable performance for everyday office tasks, remote work, and home computing. Powered by a 10th generation Intel Core i5 processor with 16GB of fast DDR4 memory and a 512GB NVMe SSD, this system offers smooth multitasking and quick boot times. Perfect for students, professionals, or anyone needing a compact, capable desktop setup.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nDell\n\nMODEL:\nOptiPlex 3080\n\nFORM FACTOR:\nSmall Form Factor\n\nCPU:\nIntel® Core™ i5-10500\n\nRAM:\n16GB DDR4\n\nSSD:\n512GB NVMe Solid State Drive\n\nGPU:\nIntel® UHD Graphics 630\n\nNETWORKING:\nEthernet LAN\n\nPORTS:\n4 x USB 3.0\n2 x USB 2.0\nHeadphone/Microphone combo port\n1 x LAN Port\n1 x DisplayPort\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nDISPLAY:\n58.4 cm (23\")\n1920 x 1080 pixels\nFull HD LCD\n\nWhat's in the box?\nDell OptiPlex 3080\nDual Power Cable OR 2 X Single Power Cables\n23 Inch Screen\n1 x Display cable\n1 x FREE Wired Keyboard \n1 x FREE Wired Mouse \n\nWARRANTY:\n12 Months",
        price: 9960.00,
        images: {
            "REFURBISHED - DELL OPTIPLEX 3080 SFF - I5 10TH GEN - 16GB DDR4 - 512GB NVME - DELL P2319H - 23INCH - COMPUTER SET": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354824/DellOptiPlex3080ComputersetRefurbished_1_86b4e415-85d6-496a-8a65-67521fc31673.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354825/FrontView3resize.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354829/DellP2319H_686190d3-0dbb-4662-9821-e37446a4d3f6_2.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354827/RearView.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354830/DELL_P2419H_3cc5ffc0-f49a-4023-859c-da18a7b9f106.jpg"
        ],
        options: [],
        category: "Desktop PCs"
    },

    {
        id: 13,
        handle: "refurbished-lenovo-thinkcentre-m80s-sff-i5-10th-gen-16gb-ddr4-256gb-ssd-lenovo-thinkvision-s24-4e-23-8inch-computer-se",
        title: "REFURBISHED - LENOVO THINKCENTRE M80S SFF - I5 10TH GEN - 16GB DDR4 - 256GB SSD - LENOVO THINKVISION S24-4E - 23.8INCH - COMPUTER SE",
        description: "This refurbished Lenovo ThinkCentre M80s SFF desktop computer packs a 10th generation Intel Core i5 processor and 16GB of DDR4 memory, perfect for everyday productivity and multitasking. Paired with a 256GB solid state drive for fast boot times and application loading, it also includes a brand-new 23.8-inch ThinkVision S24-4e monitor, making it an ideal compact workstation for home or office use. Enjoy reliable performance and modern connectivity in a space-saving design.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nLenovo\n\nMODEL:\nThinkCentre M80s\n\nFORM FACTOR:\nSmall Form Factor\n\nPROCESSOR:\nIntel® Core™ i5-10400\n\nPROCESSOR SPEED:\nBase Frequency: 2.50GHz\nMax Turbo Frequency: 4.40GHz\n\nPROCESSOR CORES – THREADS:\n6 Cores\n12 Threads\n\nMEMORY:\n16GB DDR4\n\nSTORAGE:\n256GB Solid State Drive\n\nGRAPHICS:\nIntel® UHD Graphics 630\n\nNETWORKING:\nEthernet LAN\n\nCabling technology - 10/100/1000Base-T(X)\n\nPORTS:\n2 x USB 2.0\n6 x USB 3.0\n1 x LAN Port\n1 x Headphone/Microphone combo port\n2 x Display Port\n1 x HDMI\n1 x Type-C\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nDISPLAY SPECIFICATIONS:\nLenovo ThinkVision S24-4e 23.8\" FHD IPS Monitor (NEW)\n\nThe Lenovo ThinkVision S24-4e is a sleek and reliable 23.8-inch Full HD monitor designed for comfortable everyday productivity, business use and entertainment. Featuring an IPS panel, 100Hz refresh rate and 4ms response time, it delivers smooth visuals, vibrant colours and responsive performance.\n\nKey Features\n\nScreen Size: 23.8 inches\nResolution: 1920 × 1080 Full HD\nPanel Type: IPS\nAspect Ratio: 16:9\nRefresh Rate: 100Hz\nResponse Time: 4ms\nBacklight: WLED\nDisplay: Clear, vibrant images with wide viewing angles\nDesign: Slim, modern and professional\n\nPorts\n\n1x HDMI 1.4\n1x VGA\n\nWhat's in the box?\nLenovo ThinkCentre M80s\nLenovo ThinkVision S24-4e 23.8\"\nPower Cable\n1 x Display cable\n1 x FREE Wired Keyboard \n1 x FREE Wired Mouse \n\nWARRANTY:\n12 Month",
        price: 9950.00,
        images: {
            "REFURBISHED - LENOVO THINKCENTRE M80S SFF - I5 10TH GEN - 16GB DDR4 - 256GB SSD - LENOVO THINKVISION S24-4E - 23.8INCH - COMPUTER SE": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354631/LenovoThinkCentreM80I510TH_13a2cd0d-b16c-4feb-8636-b00098e7b650setupdate.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354633/LenovoThinkCentreM801_8cd64659-f3c3-41ca-87c3-df4176f9b636.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354632/LenovoThinkCentreM80I510TH_13a2cd0d-b16c-4feb-8636-b00098e7b650.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354635/LenovoThinkCentreM80sGen3_84b2f3b4-a8fd-4e8c-9930-81b1529dcaf3.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354637/LenovothinkVisions24-4ecomputermonitor1_9c6c64d2-62fe-47c4-bc0a-b6c385816ab1.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354636/LenovothinkVisions24-4ecomputermonitor2_7ead6459-90d3-4f30-879d-5d5be7665c35.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354639/LenovothinkVisions24-4ecomputermonitor3_41748be1-5312-4a10-a386-ee76d4250473.jpg"
        ],
        options: [],
        category: "Desktop PCs"
    },

    {
        id: 12,
        handle: "refurbished-hp-elitedesk-800-g6-sff-i5-10th-gen-16gb-ddr4-256gb-nvme-hp-p24-g5-24inch-computer-set",
        title: "REFURBISHED - HP ELITEDESK 800 G6 SFF - I5 10TH GEN - 16GB DDR4 - 256GB NVME - HP P24 G5 - 24INCH - COMPUTER SET",
        description: "The refurbished HP EliteDesk 800 G6 SFF delivers reliable business performance in a compact Small Form Factor design. Perfect for home offices or professional workspaces, this system offers excellent multitasking capability with its Intel processor and generous memory configuration. It includes a matching 24-inch display, making it a complete computer set ready to use.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nMAKE:\nHP\nMODEL:\nEliteDesk 800 G6\nFORM FACTOR:\nSmall Form Factor\nCPU:\nIntel® Core™ i5-10500T\n12 MB Intel® Smart Cache\nCPU SPEED:\n2.30GHz\nCORES – THREADS:\n6 Cores\n12 Threads\nRAM:\n16GB DDR4\nSSD:\n256GB NVMe Solid-State Drive\nGPU:\nIntel® UHD Graphics 630\nOPTICAL DRIVE:\nNone\nDRIVE BAYS:\n1 x 3.5\"\nNETWORKING:\nEthernet LAN\nPORTS:\n4 x USB 2.0\n4 x USB 3.0\n1 x Headphone/Microphone combo port\n1 x LAN Port\n2 x DisplayPorts\nDISPLAY SPECIFICATIONS:\nDisplay: NEW HP P24 G5 - 24INCH\nScreen Size: 23.8-inch\nPanel Type: IPS LCD\nResolution: Full HD (1920 x 1080)\nAspect Ratio: 16:9\nRefresh Rate: Up to 75Hz\nBrightness: 250 nits\nContrast Ratio: 1000:1\nResponse Time: 5ms GtG (with overdrive)\nViewing Angles: 178° horizontal / 178° vertical\nAnti-Glare Screen\n3-Sided Micro-Edge Bezel\nConnectivity\n1 x HDMI 1.4\n1 x DisplayPort 1.2\n1 x VGA\nHDCP Support\nVESA Mount Compatible (100 x 100mm)\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nHP EliteDesk 800 G6\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 8950.00,
        images: {
            "REFURBISHED - HP ELITEDESK 800 G6 SFF - I5 10TH GEN - 16GB DDR4 - 256GB NVME - HP P24 G5 - 24INCH - COMPUTER SET": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354451/HPEliteDesk805G6SFFRefurbished3set.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354452/HPEliteDesk805G6SFFRefurbished3_c6c2b681-5340-4092-8911-65416a97bd24.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354464/HPEliteDesk805G6SFFRefurbished.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354468/HPEliteDesk805G6SFFRefurbished33_35c04c80-d563-45fc-9667-3b78ce1b46c1.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354469/HPP24G5FHDMonitor1_8c7d7596-3667-4337-bca9-5b10d65cccc6.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354471/HPP24G5FHDMonitor5_ce80ea88-6b6f-4ac3-867f-015115a0fce7.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    {
        id: 11,
        handle: "refurbished-lenovo-v530s-sff-i7-8th-gen-16gb-ddr4-256gb-ssd-aoc-g2460vq6-24inch-computer-set",
        title: "REFURBISHED - LENOVO V530S SFF - I7 8TH GEN - 16GB DDR4 - 256GB SSD - AOC G2460VQ6 - 24INCH - COMPUTER SET",
        description: "This refurbished Lenovo V530S Small Form Factor desktop PC delivers solid performance for office and home use. Powered by an Intel Core i7 8th generation processor with 16GB of DDR4 memory and a 256GB solid-state drive, it offers responsive multitasking and fast boot times. Paired with the AOC G2460VQ6 24-inch Full HD monitor, this computer set is ready for work or play.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nLenovo\n\nMODEL:\nV530S\n\nFORM FACTOR:\nSmall Form Factor\n\nCPU:\nIntel® Core™ i7-8700\n\nGPU:\nIntel® UHD Graphics 630\n\nRAM:\n16GB DDR4\n\nSSD:\n256GB Solid-State Drive\n\nNETWORKING:\nEthernet LAN\n\nPORTS:\n4 x USB 3.0\n4 x USB 2.0\n1 x HDMI\n1 x VGA\nHeadphone & mic combo\n1 x LAN Port\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nDISPLAY:\nAOC G2460VQ6\n\n24 Inch\n1920 × 1080 resolution\n75Hz refresh rate\nAMD FreeSync technology\n16:9 widescreen aspect ratio\nDisplayPort connectivity\nHDMI connectivity\nVGA connectivity\n\nBOX CONTENTS:\nLenovo V530s SSF\nDual Power Cable OR 2 X Single Power Cables\n24 Inch Screen\n1 x Display cable\n1 x FREE Wired Keyboard \n1 x FREE Wired Mouse \n\nWARRANTY:\n12 Months",
        price: 7950.00,
        images: {
            "REFURBISHED - LENOVO V530S SFF - I7 8TH GEN - 16GB DDR4 - 256GB SSD - AOC G2460VQ6 - 24INCH - COMPUTER SET": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354268/LenovoV530sDesktopRefurbished1set_1_fb20b5cc-2930-490d-a65c-e16fe4985c08.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354269/LenovoV530sDesktopRefurbished3.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354273/aocg2460vq6-monitor.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354270/LenovoV530sDesktopRefurbished2.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354272/LenovoV530sDesktopRefurbished.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354266/aocg2460vq6-1l.jpg"
        ],
        options: [],
        category: "Desktop PCs"
    },

    {
        id: 9,
        handle: "refurbished-hp-elitedesk-705-g4-mini-pc-amd-ryzen-5-pro-8gb-ddr4-256gb-ssd-hp-prodisplay-p202-20inch-computer-set",
        title: "REFURBISHED - HP ELITEDESK 705 G4 MINI PC - AMD RYZEN 5 PRO - 8GB DDR4 - 256GB SSD - HP PRODISPLAY P202 - 20INCH - COMPUTER SET",
        description: "The HP EliteDesk 705 G4 Mini PC is a compact business-class desktop perfect for office productivity, home administration, and everyday computing. With its AMD PRO processor and space-saving Mini form factor, it delivers reliable performance without taking up much desk space.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\n\nMAKE:\nHP\n\nMODEL:\nEliteDesk 705 G4\n\nFORM FACTOR:\nMini PC\n\nCPU:\nAMD Ryzen 5 Pro 2400G\n\nRAM:\n8GB DDR4\n\nSSD:\n256GB Solid State Drive\n\nGPU:\nRadeon Vega 11 Graphics\n\nCONNECTIVITY:\nEthernet LAN\n\nPORTS:\n6 x USB 3.0\n1 x Type-C\n1 x Headphone/Microphone combo port\n1 x LAN Port\n2 x Display Port\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nSCREEN SIZE:\n20\"\n\nRESOLUTION:\n1600 x 900\n\nBRIGHTNESS:\n250 cd/m²\n\nCOLOR SUPPORT:\n16.7 Million Colors\n\nINPUTS:\n1 x VGA\n\nWhat's in the box?\n\nHP EliteDesk 705 G4 Mini PC\nDual Power Cable OR 2 X Single Power Cables\n20 Inch Screen\n1 x Display Cable\n1 x FREE Wired Keyboard\n1 x FREE Wired Mouse\n\nWARRANTY:\n12 Months",
        price: 4950.00,
        images: {
            "REFURBISHED - HP ELITEDESK 705 G4 MINI PC - AMD RYZEN 5 PRO - 8GB DDR4 - 256GB SSD - HP PRODISPLAY P202 - 20INCH - COMPUTER SET": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353855/HP705amd5.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353855/HPEliteDesk705G4RefurbishedMiniPc_a073c483-42d9-4d22-89cf-dd11a4fd691f.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353856/HPEliteDesk705G42_46564850-553c-4f5d-8a5e-06f89742ffea.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353857/HPEliteDesk705G41_b768e802-7c45-4881-8275-aaf4e33d6b19.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353858/411061__44411_26c2c37f-d4d9-4713-820a-2646c8b1fdb5.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    {
        id: 8,
        handle: "refurbished-mecer-jupiter-h610-mini-pc-i3-12th-gen-8gb-ddr4-128gb-ssd-philips-20inch-computer-set",
        title: "REFURBISHED - MECER JUPITER H610 MINI PC - I3 12TH GEN - 8GB DDR4 - 128GB SSD - PHILIPS - 20INCH - COMPUTER SET",
        description: "The Mecer Jupiter H610 Mini PC delivers reliable performance and space-saving design for home and office use. This compact desktop features an Intel Core i3 12th generation processor, 8GB of DDR4 memory, and a 128GB SSD for responsive multitasking. With multiple connectivity options and a compact footprint, it is an excellent choice for users seeking a dependable computer setup.\n\nCONDITION/GRADE: REFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nMecer\n\nMODEL:\nJupiter H610\n\nFORM FACTOR:\nMini PC\n\nPROCESSOR:\nIntel® Core™ i3-12100\n\nPROCESSOR SPEED:\n3.30GHz\n\nPROCESSOR CORES – THREADS:\n4 Cores – 8 Threads\n\nMEMORY:\n8GB DDR4\n\nSTORAGE:\n128GB Solid State Drive\n\nGRAPHICS:\nIntel® UHD Graphics 730\n\nOPTICAL DRIVE:\nNone\n\nNETWORKING:\nEthernet LAN\nWi-Fi\n\nPORTS:\n4 x USB 3.0\n2 x USB 2.0\n2 x Type-C\n1 x Headphone/Microphone\n1 x LAN Port\n2 x Display Port\n1 x HDMI\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nDISPLAY SPECIFICATIONS:\nPhilips Monitor\n\nSpecifications:\nScreen Size: 20\"\nResolution: 1600 x 900\nImage Brightness: 250 cd/m²\nColor Support: 16.7 Million Colors\n1 x VGA\n\nWhat's in the box?\nMecer Jupiter H610\nDual Power Cable OR 2 X Single Power Cables\n20 Inch Screen\n1 x Display Cable\n1 x FREE Wired Keyboard\n1 x FREE Wired Mouse\n\nWARRANTY:\n12 Months",
        price: 4950.00,
        images: {
            "REFURBISHED - MECER JUPITER H610 MINI PC - I3 12TH GEN - 8GB DDR4 - 128GB SSD - PHILIPS - 20INCH - COMPUTER SET": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353561/Philips203V5LHSB273_3_set_b295504a-337c-4ca1-a528-c0eeb8f3c214_1.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353562/MercerH610_1.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353562/MercerH610minipc1_1.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353563/MercerH610minipc_edbbb5c7-d978-4b3d-92a1-0c461628584b_1.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353564/Philipsscreen_1.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    
    
    
    
    
    
    
    // =====================
    // Laptops
    // =====================
    {
        id: 51,
        handle: "demo-dell-pro-14-plus-pb14250-ultra-5-235u-16gb-ddr5-512gb-nvme-14inch-laptop-demo",
        title: "DEMO DELL PRO 14 PLUS PB14250 - ULTRA 5 235U - 16GB DDR5 - 512GB NVME - 14INCH - LAPTOP - DEMO",
        description: "The Dell Pro 14 Plus PB14250 with Intel Core Ultra 5 235U is a mainstream commercial 14-inch business laptop designed for modern professionals and hybrid workers. It delivers AI-ready compute, robust security features, and a sleek design to support productivity and collaboration in busy work environments.\n\n\nREFURBISHED GRADE: DEMO no box\n\n\nSPECIFICATIONS:\nBRAND:\nDell\n\nMODEL:\nPro 14 Plus PB14250\n\nPROCESSOR:\nIntel® Core™ Ultra 5 235U\n\nCPU CORES:\n12 Total Cores\n14 Total Threads\n\nMEMORY:\n16GB DDR5\n\nSTORAGE:\n512GB NVMe Solid State Drive\n\nDISPLAY:\n14inch Full HD+ (1920 × 1200)\nIPS LCD\nAnti-Glare\n300nits Brightness\n45% NTSC\n\nGRAPHICS:\nIntel® Graphics\n\nCAMERA:\nYes\n\nCONNECTIVITY:\nWireless & Bluetooth\nWi-Fi 7\nBluetooth\n\nPORTS / EXPANSION:\n2 × Thunderbolt™ 4 (USB-C, DisplayPort Alt Mode + Power Delivery)\n2 × USB-A 3.2 Gen 1\n1 × HDMI 2.1\n1 × combo audio jack\n\nSECURITY & MANAGEMENT:\nTPM 2.0 security chip\n\nBATTERY & POWER:\n3-cell, ~45 Wh battery\n65 W USB-C power adapter (ExpressCharge™ capable)\nA 3-cell, 45 Wh battery paired with Dell’s USB-C ExpressCharge™ technology balances all-day productivity with rapid top-ups\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\n\nWhat's in the box?\nDELL PRO 14 Plus PB14250\nCharger & Power Cable\n\n\nWARRANTY:\nDell ProSupport (Until August 03, 2031)",
        price: 17950.00,
        images: {
            "DEMO DELL PRO 14 PLUS PB14250 - ULTRA 5 235U - 16GB DDR5 - 512GB NVME - 14INCH - LAPTOP - DEMO": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795363432/555.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795363456/99.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795363459/88.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795363459/77.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795363460/66.jpg"
        ],
        options: [],
        category: "Laptops"
    },

    {
        id: 50,
        handle: "refurbsihed-dell-latitude-7440-i7-13th-gen-16gb-lpddr5-512gb-nvme-14-inch-laptop",
        title: "REFURBSIHED - DELL LATITUDE 7440 - I7 13TH GEN - 16GB LPDDR5 - 512GB NVME - 14 INCH - LAPTOP",
        description: "The Dell Latitude 7440, a premium business-class laptop built for professionals who demand reliability and portability. This model features a 14-inch display and modern connectivity, making it ideal for office productivity, remote work, and everyday multitasking.\n\nCONDITION/GRADE: REFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\n\nBRAND:\nDell\n\nMODEL:\nLatitude 7440\n\nPROCESSOR:\nIntel® Core™ i7-1365U\n\nPROCESSOR SPEED:\n1.80GHz\n\nPROCESSOR CORES - THREADS:\n10 Cores - 12 Threads\n\nMEMORY:\n16GB LPDDR5\n\nSTORAGE:\n512GB NVME Solid-State Drive\n\nGRAPHICS:\nIntel Iris Xe Graphics\n\nDISPLAY:\n14\" Full HD\nLED-backlit\n16:9 Aspect Ratio\n\nOPTICAL DRIVE:\nNone\n\nAUDIO:\nMaxxAudio Pro\n\nWEBCAM:\nYes\n\nNETWORKING:\nBluetooth\nWi-Fi 6\n\nPORTS:\n2 x USB 3.2\n2 x Type-C\n1 x HDMI\n1 x Headphone/Microphone combo port\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nDell Latitude 7440\nCharger & Power Cable\n\nWARRANTY:\n12 Months",
        price: 16950.00,
        images: {
            "REFURBSIHED - DELL LATITUDE 7440 - I7 13TH GEN - 16GB LPDDR5 - 512GB NVME - 14 INCH - LAPTOP": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795363207/DellLatitude7440RefurbishedLaptop3.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795363206/DellLatitude7440RefurbishedLaptop.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795363204/DellLatitude7440LaptopRefurbished2_63b121a5-fd72-46ad-b75c-ceae4d4be1e0.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795363203/DellLatitude7440LaptopRefurbished1_06113905-4ed6-4317-a8f0-e7b5b498e2a7.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795363185/DellLatitude7440RefurbishedLaptop1.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795363184/DellLatitude7440RefurbishedLaptop2.jpg"
        ],
        options: [],
        category: "Laptops"
    },

    {
        id: 49,
        handle: "demo-dell-pro-14-plus-pb14250-ultra-5-236v-16gb-ddr5-512gb-nvme-14inch-laptop-demo",
        title: "DEMO DELL PRO 14 PLUS PB14250 - ULTRA 5 236V - 16GB DDR5 - 512GB NVME - 14INCH - LAPTOP - DEMO",
        description: "The Dell Pro 14 Plus PB14250 with Intel Core Ultra 5 236V is a modern commercial 14-inch laptop designed for today's professionals. It blends AI-ready performance, reliable security, and a sleek business look, making it perfect for hybrid work and everyday productivity tasks.\n\nCONDITION/GRADE: REFURBISHED GRADE: DEMO no box\n\nSPECIFICATIONS:\nBRAND:\nDell\n\nPROCESSOR:\nIntel Core Ultra 5 236V\n\nBASE CLOCK:\n~2.1 GHz\n\nMAX BOOST FREQUENCY:\nup to 4.7 GHz\n\nSMART CACHE:\n8 MB\n\nCORES & THREADS:\nTotal Cores: 8\nTotal Threads: 8\n\nMEMORY:\n16GB DDR5\n\nSTORAGE:\n512GB NVMe Solid State Drive\n\nDISPLAY:\n14inch Full HD+ (1920 × 1200)\nIPS LCD\nAnti-Glare\n300nits Brightness\n45% NTSC\n\nGRAPHICS CARD:\nIntel Arc 130V GPU\n\nCAMERA:\nYes\n\nCONNECTIVITY:\nWireless & Bluetooth\nWi-Fi 7\nBluetooth\n\nPorts / Expansion:\n2 × Thunderbolt 4 (USB-C, DisplayPort Alt Mode + Power Delivery)\n2 × USB-A 3.2 Gen 1\n1 × HDMI 2.1\n1 × combo audio jack\n\nSECURITY & MANAGEMENT:\nTPM 2.0 security chip\n\nBATTERY & POWER:\n3-cell, ~55 Wh battery\n65 W USB-C power adapter (ExpressCharge capable)\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nDELL PRO 14 Plus PB14250\nCharger & Power Cable\n\nWARRANTY:\nDell ProSupport (Until October 7, 2029)",
        price: 16950.00,
        images: {
            "DEMO DELL PRO 14 PLUS PB14250 - ULTRA 5 236V - 16GB DDR5 - 512GB NVME - 14INCH - LAPTOP - DEMO": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362978/DELLPRO14PLUS_2.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362907/11.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362908/22.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362916/33.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362893/44.jpg"
        ],
        options: [],
        category: "Laptops"
    },

    {
        id: 48,
        handle: "refurbished-hp-zbook-firefly-14-g9-i7-12th-gen-16gb-ddr5-512gb-nvme-nvidia-t550-14-inch-touch-screen-autocad-workstation-laptop",
        title: "REFURBISHED - HP ZBOOK FIREFLY 14 G9 - I7 12TH GEN - 16GB DDR5 - 512GB NVME - NVIDIA T550 - 14 INCH - TOUCH SCREEN - AUTOCAD WORKSTATION - LAPTOP",
        description: "The HP ZBook Firefly 14 G9 as a powerful and portable solution for professionals who need reliable performance on the go. This refurbished workstation combines the sleek portability of an EliteBook with the power required for demanding design, engineering and everyday business tasks. Perfect for users searching for a refurbished desktop PC alternative that delivers desktop-class performance in a compact laptop chassis.\n\nCONDITION/GRADE: REFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\n\nBRAND:\nHP\n\nMODEL:\nZbook Firefly 14 G9\n\nPROCESSOR:\nIntel Core i7 1255U\n\nPROCESSOR SPEED:\n1.70GHz\n\nPROCESSOR CORES - THREADS:\nCores: 10\nThreads: 12\n\nMEMORY:\n16GB DDR5\n\nSTORAGE:\n512GB NVME Solid-State Drive\n\nGRAPHICS:\nNVIDIA T550\n4GB GDDR6 on a 64-bit memory bus\nCUDA / Shading Cores: 1,024\nIntel Iris Xe Graphics eligible\n\nDISPLAY:\n14\" FHD\nTouch Screen\nLED-backlit\n16:9 Aspect Ratio\nOPTICAL DRIVE:\nNone\n\nAUDIO:\nBang & Olufsen\n\nWEBCAM:\nYes\n\nNETWORKING:\nBluetooth\nWi-Fi\n\nPORTS:\n2 x USB 3.2\n1 x HDMI\n2 x Type-C\n1 x Headphone/Microphone combo port\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nHP ZBOOK FIREFLY 14 G9\nCharger & Power Cable\n\nWARRANTY:\n12 Months",
        price: 15950.00,
        images: {
            "REFURBISHED - HP ZBOOK FIREFLY 14 G9 - I7 12TH GEN - 16GB DDR5 - 512GB NVME - NVIDIA T550 - 14 INCH - TOUCH SCREEN - AUTOCAD WORKSTATION - LAPTOP": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362636/HPZbook14G9_74e1481d-81f9-431a-acb3-fbd0640b0e11.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362637/HPZbook14G92.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362638/HPZbook14G91.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362640/HPZbook14G94.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362641/HPZbook14G93.jpg"
        ],
        options: [],
        category: "Laptops"
    },

    {
        id: 47,
        handle: "refurbished-dell-latitude-5450-ultra-7-165u-16gb-ddr5-512gb-nvme-14-inch-laptop",
        title: "REFURBISHED - DELL LATITUDE 5450 - ULTRA 7 165U - 16GB DDR5 - 512GB NVME - 14 INCH - LAPTOP",
        description: "The Dell Latitude 5450 delivers reliable performance and portability for professionals on the move. This refurbished laptop features a compact 14-inch design, modern connectivity, and the power you need for everyday tasks.\n\nCONDITION/GRADE: REFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nDell\n\nMODEL:\nLatitude 5450\n\nCPU:\nIntel® Core™ Ultra 7 Processor 165U\n\nRAM:\n16GB DDR5\n\nSSD:\n512GB NVMe Solid-State Drive\n\nGPU:\nIntel® Graphics\n\nDISPLAY:\n14\" HD\nLED-backlit\n16:9 Aspect Ratio\n\nOPTICAL DRIVE:\nNone\n\nAUDIO:\nMaxxAudio\n\nWEBCAM:\nYes HD\n\nNETWORKING:\nBluetooth\nWi-Fi 6\n\nPORTS:\n2 x USB 3.2\n1 x HDMI 2.0\n1 x Headphone/Microphone combo port\n2 x Type-C\nLAN Port\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nDell Latitude 5450\nPower Cable & Charger\n\nWARRANTY:\n12 Months",
        price: 15950.00,
        images: {
            "REFURBISHED - DELL LATITUDE 5450 - ULTRA 7 165U - 16GB DDR5 - 512GB NVME - 14 INCH - LAPTOP": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362501/DellLatitude5450_fde57c4a-4450-41f3-9590-7687868fd965.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362502/DellLatitude5440LaptopRefurbished2.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362503/DellLatitude5440LaptopRefurbished1.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362507/DellLatitude5440LaptopRefurbished3.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362508/DellLatitude5440LaptopRefurbished4.jpg"
        ],
        options: [],
        category: "Laptops"
    },

    {
        id: 46,
        handle: "refurbished-hp-elitebook-840-g10-i5-13th-gen-16gb-ddr5-265gb-nvme-14inch-laptop",
        title: "REFURBISHED - HP ELITEBOOK 840 G10 - I5 13TH GEN - 16GB DDR5 - 265GB NVMe - 14INCH - LAPTOP",
        description: "The HP EliteBook 840 G10, a premium refurbished laptop designed for the modern professional. This business-class machine offers reliable performance and portability, perfect for remote work or office tasks. With its 14-inch display and powerful internals, it delivers a seamless computing experience for everyday use.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nHP\n\nMODEL:\nEliteBook 840 G10\n\nPROCESSOR:\nIntel® Core™ i5-1345U\n\nPROCESSOR SPEED:\n1.60GHz\n\nPROCESSOR CORES - THREADS:\n10 Cores - 12 Threads\n\nMEMORY:\n16GB DDR5\n\nSTORAGE:\n256GB NVMe Solid-State Drive\n\nGRAPHICS:\nIntel® Iris® Xe Graphics eligible\n\nDISPLAY:\n14\" Full HD\nLED-backlit\n16:9 Aspect Ratio\nOPTICAL DRIVE:\nNone\n\nAUDIO:\nHD with Bang & Olufsen\nIntegrated stereo speakers\nWEBCAM:\nHD webcam\n\nNETWORKING:\nWi-Fi\nBluetooth 5.3\n\nPORTS:\n2 x USB 3.0\n2 x Type C\n1 x HDMI\n1 x Headphone / Microphone Combo Jack\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nHP ELITEBOOK 840 G10\nCharger & Power Cable\n\nWARRANTY:\n12 Months",
        price: 14950.00,
        images: {
            "REFURBISHED - HP ELITEBOOK 840 G10 - I5 13TH GEN - 16GB DDR5 - 265GB NVMe - 14INCH - LAPTOP": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362365/HPEliteBook840G10Laptop_82552f83-c195-4945-8c16-445e409c3543_2.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362366/72c24b5797591a08ad7d831fd60411cfbf3e3f75.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362381/03c2a60c534c07906a5e477890743dbfb664373d.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362382/16a26c511cb090cc9a008ea6946f75dad1a0323c.jpg"
        ],
        options: [],
        category: "Laptops"
    },

    {
        id: 45,
        handle: "refurbished-hp-zbook-firefly-15-g8-i7-11th-gen-32gb-ddr4-256gb-nvme-nvidia-t500-15-6-inch-laptop-autocad-workstation",
        title: "REFURBISHED - HP ZBOOK FIREFLY 15 G8 - I7 11TH GEN - 32GB DDR4 - 256GB NVME - NVIDIA T500 - 15.6 INCH - LAPTOP - AUTOCAD WORKSTATION",
        description: "The HP ZBook Firefly 15 G8 is a powerful refurbished laptop built for professionals who need reliable performance on the go. Perfect for running demanding software like AutoCAD, this workstation combines a fast Intel processor with plenty of memory and speedy storage. Its compact design makes it ideal for engineers, designers and business users who require a portable yet capable machine.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nHP\n\nMODEL:\nZbook Firefly 15 G8\n\nPROCESSOR:\nIntel® Core™ I7 1185G7\n12 MB Intel® Smart Cache\n\nPROCESSOR SPEED:\n3.00GHz\n\nPROCESSOR CORES - THREADS:\nCores: 4\nThreads: 8\n\nMEMORY:\n32GB DDR4\n\nSTORAGE:\n256GB NVME Solid-State Drive\n\nGRAPHICS:\nNVIDIA T500\n4GB GDDR6\n64-bit Memory Interface\nIntel® Iris® Xe Graphics\n\nDISPLAY:\n15.6\" HD\nLED-backlit\n16:9 Aspect Ratio\n\nOPTICAL DRIVE:\nNone\n\nAUDIO:\nBang & Olufsen\n\nWEBCAM:\nYes\n\nNETWORKING:\nBluetooth\nWi-Fi\n\nPORTS:\n2 x USB 3.2\n1 x HDMI\n2 x Type-C\n1 x Headphone/Microphone combo port\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nHP ZBOOK FIREFLY 15 G8\nCharger & Power Cable\n\nWARRANTY:\n12 Months",
        price: 14950.00,
        images: {
            "REFURBISHED - HP ZBOOK FIREFLY 15 G8 - I7 11TH GEN - 32GB DDR4 - 256GB NVME - NVIDIA T500 - 15.6 INCH - LAPTOP - AUTOCAD WORKSTATION": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362217/HPZBOOKFIREFLY15G8.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362232/87033247_6459387378.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362236/87033247_6856064271.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362236/87625921_8254744732.jpg"
        ],
        options: [],
        category: "Laptops"
    },

    {
        id: 44,
        handle: "refurbished-dell-pro-14-plus-pb14250-ultra-5-235u-16gb-ddr5-256gb-nvme-14inch-laptop",
        title: "REFURBISHED - DELL PRO 14 PLUS PB14250 - ULTRA 5 235U - 16GB DDR5 - 256GB NVME - 14INCH - LAPTOP",
        description: "The Dell Pro 14 Plus PB14250 with Intel Core Ultra 5 235U is a mainstream commercial 14-inch business laptop designed for modern professionals and hybrid workers. It delivers AI-ready performance and robust security features to support productivity in today's business environment.\n\n\nREFURBISHED GRADE: Good condition used\n\n\nSPECIFICATIONS:\nBRAND:\nDell\n\nMODEL:\nPro 14 Plus PB14250\n\nPROCESSOR:\nIntel Core Ultra 5 235U\n\nBASE CLOCK:\n~2.0 GHz\n\nMAX BOOST FREQUENCY:\nup to 4.9 GHz\n\nSMRT CACHE:\n12 MB\n\nCORES & THREADS:\nTotal Cores: 12\nTotal Threads: 14\n\nMEMORY:\n16GB DDR5\n\nSTORAGE:\n256GB NVMe Solid State Drive\n\nDISPLAY:\n14inch Full HD+ (1920 × 1200)\nIPS LCD\nAnti-Glare\n300nits Brightness\n45% NTSC\n\nGRAPHICS CARD:\nIntel Graphics\n\nCAMERA:\nYes\n\nCONNECTIVITY:\nWireless & Bluetooth\n\nWi-Fi 7\nBluetooth\n\nPORTS / EXPANSION:\n2 × Thunderbolt 4 (USB-C, DisplayPort Alt Mode + Power Delivery)\n2 × USB-A 3.2 Gen 1\n1 × HDMI 2.1\n1 × combo audio jack\n\nSECURITY & MANAGEMENT:\nTPM 2.0 security chip\n\nBATTERY & POWER:\n3-cell, ~45 Wh battery\n65 W USB-C power adapter (ExpressCharge capable)\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\n\nWhat's in the box?\nDELL PRO 14 Plus PB14250\nCharger & Power Cable\n\n\nWARRANTY:\n12 months",
        price: 14950.00,
        images: {
            "REFURBISHED - DELL PRO 14 PLUS PB14250 - ULTRA 5 235U - 16GB DDR5 - 256GB NVME - 14INCH - LAPTOP": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362091/DellPro14PC14250RefurbishedLaptop77.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362092/download_9.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362093/download_8.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362115/download_10.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795362116/download_11.jpg"
        ],
        options: [],
        category: "Laptops"
    },

    {
        id: 43,
        handle: "refurbished-dell-latitude-7420-i7-11th-gen-32gb-lpddr4-512gb-nvme-14-inch-laptop",
        title: "REFURBISHED - DELL LATITUDE 7420 - I7 11TH GEN - 32GB LPDDR4 - 512GB NVME - 14 INCH - LAPTOP",
        description: "The Dell Latitude 7420, a premium refurbished laptop built for business professionals who demand reliability and performance. This compact 14-inch machine features an 11th generation Intel Core i7 processor and 32GB of memory, making it perfect for office tasks, remote work, and everyday productivity.\n\n\nREFURBISHED GRADE: Good condition used\n\n\nSPECIFICATIONS:\n\nMAKE:\nDell\n\nMODEL:\nLatitude 7420\n\nCPU:\nIntel® Core™ i7-1185G7\n\n12 MB Intel® Smart Cache\n\n3.00GHz\n\n4 Cores 8 Threads\n\nRAM:\n32GB LPDDR4\n\nSSD:\n512GB NVMe Solid-State Drive\n\nGPU:\nIntel® Iris® Xe Graphics\n\nDISPLAY:\n14\"\n\nLED-backlit\n\n16:9 Aspect Ratio\n\nOPTICAL DRIVE:\nNone\n\nAUDIO:\nMaxxAudio Pro\n\nWaves\n\nWEBCAM:\nYes\n\nNETWORKING:\nBluetooth\n\nWi-Fi 6\n\nPORTS:\n1 x USB 3.2\n\n1 x Type-C\n\n1 x Type-C Charging\n\n1 x HDMI\n\n1 x Headphone/Microphone combo port\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\n\nWhat's in the box?\n\nDell Latitude 7420\nCharger & Power Cable\n\n\nWARRANTY:\n12 Months",
        price: 12950.00,
        images: {
            "REFURBISHED - DELL LATITUDE 7420 - I7 11TH GEN - 32GB LPDDR4 - 512GB NVME - 14 INCH - LAPTOP": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361937/DellLatitude7420_1_2_dca6dd30-ec73-427e-9121-44063aab7fff.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361938/DellLatitude74201.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361939/DellLatitude74203.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361940/DELLLATITUDE742077.jpg"
        ],
        options: [],
        category: "Laptops"
    },

    {
        id: 42,
        handle: "refurbished-dell-latitude-3540-i7-13th-gen-16gb-ddr4-512gb-nvme-15-6-inch-laptop",
        title: "REFURBISHED - DELL LATITUDE 3540 - I7 13TH GEN - 16GB DDR4 - 512GB NVME - 15.6 INCH - LAPTOP",
        description: "The Dell Latitude 3540 is a reliable and efficient laptop perfect for everyday productivity and business tasks. This refurbished desktop PC offers great value with a powerful processor, ample memory, and fast storage, making it an ideal choice for students and professionals alike.\n\nCONDITION/GRADE: REFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nDell\n\nMODEL:\nLatitude 3540\n\nPROCESSOR:\nIntel® Core™ i7-1355U\n\nPROCESSOR SPEED:\n1.70GHz\n\nPROCESSOR CORES - THREADS:\n10 Cores - 12 Threads\n\nMEMORY:\n16GB DDR4\n\nSTORAGE:\n512GB NVMe Solid-State Drive\n\nGRAPHICS:\nIntel® Iris® Xe Graphics\n\nDISPLAY:\n15.6\" HD\nLED-backlit\n16:9 Aspect Ratio\n\nOPTICAL DRIVE:\nNone\n\nAUDIO:\nYes HD\n\nWEBCAM:\nYes\n\nNETWORKING:\nBluetooth\nWi-Fi\n\nPORTS:\n3 x USB 3.1\n1 x HDMI\n1 x Type-C\n1 x Headphone/Microphone combo port\nLAN\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nDell Latitude 3540\nPower Cable & Charger\n\nWARRANTY:\n12 Months",
        price: 12950.00,
        images: {
            "REFURBISHED - DELL LATITUDE 3540 - I7 13TH GEN - 16GB DDR4 - 512GB NVME - 15.6 INCH - LAPTOP": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361784/DellLatitude3540LaptopRefurbished_9f79a447-a9e8-4f84-a37d-b95cd502b48_1_ae85be14-694c-4708-8634-c0762ddb84da.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361805/DellLatitude3540LaptopRefurbished1.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361806/DellLatitude3540LaptopRefurbished2.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361807/DellLatitude3540LaptopRefurbished5.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361808/DellLatitude3540LaptopRefurbished4.jpg"
        ],
        options: [],
        category: "Laptops"
    },

    {
        id: 41,
        handle: "refurbished-dell-15-dc15250-i5-13th-gen-16gb-ddr4-512gb-nvme-15-6-inch-laptop",
        title: "REFURBISHED - DELL 15 DC15250 - I5 13TH GEN - 16GB DDR4 - 512GB NVME - 15.6 INCH - LAPTOP",
        description: "The Dell 15 DC15250 laptop, a versatile machine built for everyday productivity and multitasking. This refurbished system features a powerful 13th Gen Intel Core i5 processor and 16GB of DDR4 memory, making it perfect for work, study, or home use.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\n\nMAKE:\nDell 15 DC15250\n\nCPU:\nIntel® Core™ i5-1334U\n\n12 MB Intel® Smart Cache\n\nCPU SPEED:\n1.30GHz\n\nCORES - THREADS:\n10 Cores\n12 Threads\n\nRAM:\n16GB DDR4\n\nSSD:\n512GB NVMe Solid-State Drive\n\nGPU:\nIntel® Iris® Xe Graphics\n\nSCREEN:\n15.6\"\n\nLED-backlit\n\n16:9 Aspect Ratio\n\nOPTICAL DRIVE:\nNone\n\nAUDIO:\nYes\n\nWEBCAM:\nYes\n\nNETWORKING:\nBluetooth\n\nWi-Fi\n\nPORTS:\n1 x USB 3.1\n1 x USB 2.0\n1 x Type-C\n1 x HDMI\n1 x Headphone/Microphone combo port\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nDell 15 DC15250\nCharger & Power Cable\n\nWARRANTY:\n12 Months",
        price: 9500.00,
        images: {
            "REFURBISHED - DELL 15 DC15250 - I5 13TH GEN - 16GB DDR4 - 512GB NVME - 15.6 INCH - LAPTOP": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361666/Dell15DC15250.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361666/Dell15DC152501.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361667/Dell15DC152502.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361668/Dell15DC152503.jpg"
        ],
        options: [],
        category: "Laptops"
    },

    {
        id: 40,
        handle: "refurbished-hp-probook-650-g8-i5-11th-gen-16gb-ddr4-256gb-nvme-15-6-inch-laptop",
        title: "REFURBISHED - HP PROBOOK 650 G8 - I5 11TH GEN - 16GB DDR4 - 256GB NVME - 15.6 INCH - LAPTOP",
        description: "A reliable and efficient laptop perfect for work, study, and everyday computing. This HP ProBook 650 G8 combines solid performance with a familiar design, making it a great choice for users who need a dependable machine for productivity tasks. With its Intel processor and ample memory, you can handle multiple applications smoothly, whether you are browsing the web, working on documents, or managing emails.\n\n\nREFURBISHED GRADE: Good condition used\n\n\nSPECIFICATIONS:\nBRAND:\nHP\n\nMODEL:\nProBook 650 G8\n\nPROCESSOR:\nIntel Core i5 1135G7\n\nPROCESSOR SPEED:\n2.40GHz\n\nPROCESSOR CORES - THREADS:\n4 Cores - 8 Threads\n\nMEMORY:\n16GB DDR4\n\nSTORAGE:\n256GB NVMe Solid-State Drive\n\nGRAPHICS:\nIntel Iris Xe Graphics\n\nDISPLAY:\n15.6\" HD\nLED-backlit\n16:9 Aspect Ratio\nOPTICAL DRIVE:\nNone\n\nAUDIO:\nYes\n\nWEBCAM:\nHD webcam\n\nNETWORKING:\nEthernet\nWi-Fi\nBluetooth\n\nPORTS:\n3 x USB 3.0\n1 x Type C\n1 x HDMI\n1 x Headphone / Microphone Combo Jack\nDC-in jack\n1 x LAN Port\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\n\nWhat's in the box?\nHP ProBook 650 G8\nCharger & Power Cable\n\nWARRANTY:\n12 Months",
        price: 9500.00,
        images: {
            "REFURBISHED - HP PROBOOK 650 G8 - I5 11TH GEN - 16GB DDR4 - 256GB NVME - 15.6 INCH - LAPTOP": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361510/HPProDesk650G8Laptoprefurbished_f23a523c-2990-4785-84d1-fa666bfc9ff1.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361510/95369892_7394487000.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361511/95369892_7362361086.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361512/95369892_8706816791.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361512/95369892_0732134195.jpg"
        ],
        options: [],
        category: "Laptops"
    },

    {
        id: 39,
        handle: "refurbished-hp-probook-450-g8-i5-11th-gen-16gb-ddr4-256gb-nvme-ssd-15-6-inch-laptop",
        title: "REFURBISHED - HP PROBOOK 450 G8 - I5 11TH GEN - 16GB DDR4 - 256GB NVME SSD - 15.6 INCH - LAPTOP",
        description: "The HP ProBook 450 G8 is a premium business laptop engineered for professionals who need reliable performance, modern security, and exceptional productivity. Powered by 11th Generation Intel® Core™ processors, fast DDR4 memory, and high-speed NVMe SSD storage, it effortlessly handles multitasking, Microsoft Office applications, web browsing, video conferencing, and demanding business workloads.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nHP\n\nMODEL:\nProBook 450 G8\n\nPROCESSOR:\nIntel® Core™ I5 1135G7\n\nPROCESSOR SPEED:\n2.40GHz\n8 MB Intel® Smart Cache\n\nPROCESSOR CORES - THREADS:\n4 Cores\n8 Threads\n\nMEMORY:\n16GB DDR4\n\nSTORAGE:\n256GB NVMe Solid-State Drive\n\nGRAPHICS:\nIntel® Iris® Xe Graphics\n\nDISPLAY:\n15.6\" HD\nLED-backlit\n\nOPTICAL DRIVE:\nNone\n\nAUDIO:\nHD Audio\nIntegrated stereo speakers\n\nWEBCAM:\nHD webcam\n\nNETWORKING:\nWi-Fi\nBluetooth\n\nPORTS:\n2 x USB 3.0\n1 x Headphone / Microphone Combo Jack\n1 x Type-C\nDC-in jack\nLAN Port\nHDMI\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nHP ProBook 450 G8\nCharger & Power Cable\n\nWARRANTY:\n12 Month",
        price: 8950.00,
        images: {
            "REFURBISHED - HP PROBOOK 450 G8 - I5 11TH GEN - 16GB DDR4 - 256GB NVME SSD - 15.6 INCH - LAPTOP": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361373/HPPROBOOK450G8_93839a7f-a9c6-48a5-a9b8-45307f7aade8.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361374/89135234_6725060400.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361374/87467129_6148639409.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795361387/100207288_7516789318.jpg"
        ],
        options: [],
        category: "Laptops"
    },

    {
        id: 38,
        handle: "refurbished-hp-elitebook-850-g8-i5-11th-gen-16gb-ddr4-256gb-nvme-15-6-inch-laptop",
        title: "REFURBISHED - HP ELITEBOOK 850 G8 - I5 11TH GEN - 16GB DDR4 - 256GB NVME - 15.6 INCH - LAPTOP",
        description: "Introducing a reliable and powerful laptop designed for business and everyday use. The HP EliteBook 850 G8 delivers solid performance with its latest generation processor, making it perfect for office tasks, multitasking and home computing. This refurbished unit offers great value for those seeking a dependable machine with modern features.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\n\nMAKE:\nHP\n\nMODEL:\nEliteBook 850 G8\n\nCPU:\nIntel® Core™ i5-1145G7\n\nRAM:\n16GB DDR4\n\nSSD:\n256GB NVMe Solid-State Drive\n\nGPU:\nIntel® Iris® Xe Graphics\n\nDISPLAY:\n15.6\" HD\nLED-backlit\n16:9 Aspect Ratio\n\nGRAPHICS:\nIntel® Iris® Xe Graphics\n\nAUDIO:\nBang & Olufsen\n\nWEBCAM:\nHD webcam\n\nNETWORKING:\nWiFi\nBluetooth\n\nPORTS:\n2 x USB 3.2\n1 x Headphone / Microphone Combo Jack\n2 x Type-C\nHDMI\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nHP EliteBook 850 G8\nCharger & Power Cable\n\nWARRANTY:\n12 Months",
        price: 8950.00,
        images: {
            "REFURBISHED - HP ELITEBOOK 850 G8 - I5 11TH GEN - 16GB DDR4 - 256GB NVME - 15.6 INCH - LAPTOP": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795360439/HPEliteBook850G8LaptopRefurbished_c0371cbd-3ad4-45b8-8434-ae29e515c242.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795360439/HPEliteBook850G8LaptopRefurbished2.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795360440/HPEliteBook850G8LaptopRefurbished1.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795360440/HPEliteBook850G8LaptopRefurbished3.jpg"
        ],
        options: [],
        category: "Laptops"
    },

    {
        id: 37,
        handle: "refurbished-hp-elitebook-840-g8-i5-11th-gen-16gb-ddr4-256gb-nvme-14-inch-laptop",
        title: "REFURBISHED - HP ELITEBOOK 840 G8 - I5 11TH GEN - 16GB DDR4 - 256GB NVME - 14 INCH - LAPTOP",
        description: "The HP EliteBook 840 G8 is a premium business-class laptop designed for professionals who demand performance, portability and reliability. Featuring an 11th Generation Intel Core processor, a sleek aluminium design and a 14-inch HD display, it delivers an excellent balance of productivity and mobility.\n\nCONDITION/GRADE: REFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nHP\n\nMODEL:\nEliteBook 840 G8\n\nPROCESSOR:\nIntel® Core™ i5-1145G7\n\nPROCESSOR SPEED:\n2.60GHz\n\nPROCESSOR CORES - THREADS:\n4 Cores - 8 Threads\n\nMEMORY:\n16GB DDR4\n\nSTORAGE:\n256GB NVMe Solid-State Drive\n\nGRAPHICS:\nIntel® Iris® Xe Graphics\n\nDISPLAY:\n14\" Full HD\nLED-backlit\n16:9 Aspect Ratio\nOPTICAL DRIVE:\nNone\n\nAUDIO:\nHD with Bang & Olufsen\nIntegrated stereo speakers\nWEBCAM:\nHD webcam\n\nNETWORKING:\nWi-Fi\nBluetooth\n\nPORTS:\n2 x USB 3.0\n2 x Type C\n1 x Headphone / Microphone Combo Jack\nDC-in jack\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nBOX CONTENTS:\nWhat's in the box?\nHP ELITEBOOK 840 G8\nCharger & Power Cable\n\nWARRANTY:\n12 Months",
        price: 8950.00,
        images: {
            "REFURBISHED - HP ELITEBOOK 840 G8 - I5 11TH GEN - 16GB DDR4 - 256GB NVME - 14 INCH - LAPTOP": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795360307/HPELITEBOOK840G8LaptopRefurbished_da20cfbc-26c7-41d1-9cc0-4ec1ccfd0493_1.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795360307/HPELITEBOOK840G8LaptopRefurbished2.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795360308/HPELITEBOOK840G8LaptopRefurbished1.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795360308/HPELITEBOOK840G8LaptopRefurbished3.jpg"
        ],
        options: [],
        category: "Laptops"
    },

    {
        id: 36,
        handle: "refurbished-hp-elitebook-830-g7-i7-10th-gen-16gb-ddr4-256gb-nvme-13-3inch-laptop",
        title: "REFURBISHED - HP ELITEBOOK 830 G7 - I7 10TH GEN - 16GB DDR4 - 256GB NVME - 13.3INCH - LAPTOP",
        description: "The HP EliteBook 830 G7 is a premium refurbished laptop built for business professionals who need reliable performance on the go. Featuring a powerful 10th generation Intel Core i7 processor and a compact 13.3-inch display, it delivers smooth multitasking and efficiency for everyday office tasks.\n\nCONDITION/GRADE: REFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nHP\n\nMODEL:\nEliteBook 830 G7\n\nPROCESSOR:\nIntel® Core™ I7 10610U\n\nPROCESSOR SPEED:\n1.80GHz\n8 MB Intel® Smart Cache\n\nPROCESSOR CORES - THREADS:\n4 Cores\n8 Threads\n\nMEMORY:\n16GB DDR4\n\nSTORAGE:\n256GB NVMe Solid-State Drive\n\nGRAPHICS:\nIntel® UHD Graphics\n\nDISPLAY:\n13.3\" HD\nLED-backlit\n\nOPTICAL DRIVE:\nNone\n\nAUDIO:\nHD Audio\nIntegrated stereo speakers\n\nWEBCAM:\nHD webcam\n\nNETWORKING:\nWi-Fi\nBluetooth\n\nPORTS:\n1 x USB 3.0\n1 x Headphone / Microphone Combo Jack\n1 x Type-C\nDC-in jack\nHDMI\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nHP ELITEBOOK 830 G7\nCharger & Power Cable\n\nWARRANTY:\n12 Months",
        price: 7950.00,
        images: {
            "REFURBISHED - HP ELITEBOOK 830 G7 - I7 10TH GEN - 16GB DDR4 - 256GB NVME - 13.3INCH - LAPTOP": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795360159/HPEliteBook840G7Laptop11.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795360160/89315830_9110769314.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795360160/87983584_4908456046.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795360160/89315830_8535641983.jpg"
        ],
        options: [],
        category: "Laptops"
    },

    {
        id: 35,
        handle: "refurbished-hp-probook-440-g9-i3-12th-gen-16gb-ddr4-256gb-nvme-14-inch-laptop",
        title: "REFURBISHED - HP PROBOOK 440 G9 - I3 12TH GEN - 16GB DDR4 - 256GB NVME - 14 INCH - LAPTOP",
        description: "A refurbished HP ProBook 440 G9 laptop offers the perfect blend of portability and performance for business and everyday use. Powered by an Intel Core i3 12th Gen processor with 16GB of DDR4 memory and a 256GB NVMe SSD, this 14-inch device delivers reliable speed and responsiveness for work, study, or home use.\n\nCONDITION/GRADE:\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\n\nMAKE:\nHP\n\nMODEL:\nProBook 440 G9\n\nCPU:\nIntel® Core™ I3 1215U\n\nRAM:\n16GB DDR4\n\nSSD:\n256GB NVMe Solid-State Drive\n\nGPU:\nIntel® UHD Graphics for 12th Gen\n\nSCREEN SIZE:\n14\"\n\nDISPLAY TYPE:\nHD LED-backlit\n\nOPTICAL DRIVE:\nNone\n\nAUDIO:\nHD Audio Integrated stereo speakers\n\nWEB CAMERA:\nHD webcam\n\nNETWORKING:\nWi-Fi Bluetooth 5.2\n\nPORTS:\n2 x USB 3.0\n1 x Headphone / Microphone Combo Jack\n1 x Type-C\n1 x LAN Port\nDC-in jack\nHDMI\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nBOX CONTENTS:\n\nWhat's in the box?\nHP ProBook 440 G9\nCharger & Power Cable\n\nWARRANTY:\n\n12 Months",
        price: 6950.00,
        images: {
            "REFURBISHED - HP PROBOOK 440 G9 - I3 12TH GEN - 16GB DDR4 - 256GB NVME - 14 INCH - LAPTOP": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795360000/1.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795360001/2.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795360002/3.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795360002/4.jpg"
        ],
        options: [],
        category: "Laptops"
    },

    
    

    // =====================
    // Mini PCs
    // =====================
    {
        id: 34,
        handle: "refurbished-lenovo-thinkcentre-m80s-gen-3-sff-i5-12th-gen-16gb-ddr5-256gb-ssd-computer",
        title: "REFURBISHED - LENOVO THINKCENTRE M80S GEN 3 SFF - I5 12TH GEN - 16GB DDR5 - 256GB SSD - COMPUTER",
        description: "The Lenovo ThinkCentre M80s Gen 3 is a compact, modern enterprise desktop that delivers solid performance for daily productivity and multitasking. With its small form factor design and reliable Intel processor, it's a dependable choice for home offices and professional setups.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\n\nMAKE:\nLenovo\n\nMODEL:\nThinkCentre M80s Gen 3\n\nFORM FACTOR:\nSmall Form Factor\n\nCPU:\nIntel® Core™ i5-12400\n18 MB Intel® Smart Cache\nBase Frequency: 2.50GHz\nMax Turbo Frequency: 4.40GHz\n6 Cores\n12 Threads\n\nRAM:\n16GB DDR5\n\nSSD:\n256GB Solid State Drive\n\nGPU:\nIntel® UHD Graphics 730\n\nDISPLAY:\nNo Monitor\n\nNETWORKING:\nEthernet LAN\nWi-Fi\nCabling technology - 10/100/1000Base-T(X)\n\nPORTS:\n2 x USB 2.0\n6 x USB 3.0\n1 x LAN Port\n1 x Headphone/Microphone combo port\n2 x Display Port\n1 x HDMI\n1 x Type-C\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nLenovo ThinkCentre M80s Gen 3\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 9950.00,
        images: {
            "REFURBISHED - LENOVO THINKCENTRE M80S GEN 3 SFF - I5 12TH GEN - 16GB DDR5 - 256GB SSD - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354632/LenovoThinkCentreM80I510TH_13a2cd0d-b16c-4feb-8636-b00098e7b650.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354633/LenovoThinkCentreM801_8cd64659-f3c3-41ca-87c3-df4176f9b636.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354635/LenovoThinkCentreM80sGen3_84b2f3b4-a8fd-4e8c-9930-81b1529dcaf3.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    {
        id: 33,
        handle: "refurbished-dell-optiplex-5000-sff-i5-12th-gen-16gb-ddr4-256gb-nvme-computer",
        title: "REFURBISHED - DELL OPTIPLEX 5000 SFF - I5 12TH GEN - 16GB DDR4 - 256GB NVME - COMPUTER",
        description: "The Dell OptiPlex 5000 Small Form Factor (SFF) is an excellent entry-level desktop PC perfect for home offices and general productivity tasks. This refurbished unit delivers reliable Intel performance in a compact chassis, ideal for users seeking a capable and space‑saving computer. With a powerful processor and fast storage, it handles everyday computing with ease.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nDell\n\nMODEL:\nOptiPlex 5000\n\nFORM FACTOR:\nSmall Form Factor\n\nCPU:\nIntel® Core™ i5-12500\n\n18 MB Intel® Smart Cache\n\nBase Frequency: 3.00GHz\nMax Turbo Frequency: 4.60GHz\n\n6 Cores – 12 Threads\n\nRAM:\n16GB DDR4\n\nSSD:\n256GB NVMe Solid State Drive\n\nGPU:\nIntel® UHD Graphics 770\n\nNone\n\nEthernet LAN\n\n5 x USB 3.0\n4 x USB 2.0\n1 x Type-C\nHeadphone/Microphone combo port\n1 x LAN Port\n2 x DisplayPorts\n\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nDell OptiPlex 5000\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 9950.00,
        images: {
            "REFURBISHED - DELL OPTIPLEX 5000 SFF - I5 12TH GEN - 16GB DDR4 - 256GB NVME - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795359518/DellOptiPlex5000RefurbishedDesktop2.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795359524/DellOptiPlex5000RefurbishedDesktop.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795359527/DellOptiPlex5000RefurbishedDesktop1.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795359530/DellOptiPlex5000RefurbishedDesktop3.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    {
        id: 32,
        handle: "dell-optiplex-3090-mini-tower-refurbished-grade-good-condition-used",
        title: "Dell OptiPlex 3090 Mini Tower REFURBISHED GRADE: Good condition used",
        description: "The Dell OptiPlex 3090 Mini Tower is a reliable business-class desktop built for everyday productivity and office tasks. Powered by Intel 10th Gen processors, it delivers dependable performance in a compact tower design that fits neatly under any desk.\n\nCONDITION/GRADE:\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nDell\n\nMODEL:\nOptiPlex 3090\n\nFORM FACTOR:\nMini Tower\n\nPROCESSOR:\nIntel® Core™ i5-10505\n\nPROCESSOR SPEED:\n3.30GHz\n\nPROCESSOR CORES – THREADS:\n6 Cores – 12 Threads\n\nMEMORY:\n16GB DDR4\n\nSTORAGE:\n256GB Solid State Drive\n\nGRAPHICS:\nIntel® UHD Graphics 630\n\nOPTICAL DRIVE:\nNone\n\nNETWORKING:\nEthernet LAN\n\nPORTS:\n4 x USB 3.0\n2 x USB 2.0\nHeadphone/Microphone combo port\n1 x LAN Port\n1 x DisplayPort\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nDell Optiplex 3090\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 8250.00,
        images: {
            "Dell OptiPlex 3090 Mini Tower REFURBISHED GRADE: Good condition used": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795359388/DellOptiPlex3090MT1.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795359390/DellOptiPlex3090MT.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795359393/DellOptiPlex3090MT2.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    {
        id: 31,
        handle: "refurbished-hp-elitedesk-800-g6-sff-i5-10th-gen-8gb-ddr4-256gb-nvme-computer",
        title: "REFURBISHED - HP ELITEDESK 800 G6 SFF - I5 10TH GEN - 8GB DDR4 - 256GB NVME - COMPUTER",
        description: "The HP EliteDesk 800 G6 SFF is a powerful, business-class desktop designed to deliver excellent performance, security, and reliability in professional environments. Featuring a compact Small Form Factor design, it offers an ideal balance between performance and space efficiency, making it suitable for modern offices and demanding business workloads.\n\nCONDITION/GRADE: REFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nHP\n\nMODEL:\nEliteDesk 800 G6\n\nFORM FACTOR:\nSmall Form Factor\n\nCPU:\nIntel® Core™ i5-10400\n\n12 MB Intel® Smart Cache\n\nCPU SPEED:\n2.90GHz\n\nCPU CORES – THREADS:\n6 Cores\n12 Threads\n\nRAM:\n8GB DDR4\n\nSSD:\n256GB NVMe Solid-State Drive\n\nGPU:\nIntel® UHD Graphics 630\n\nDISPLAY:\nNo Monitor\n\nOPTICAL DRIVE:\nNone\n\nDRIVE BAYS:\n1 x 3.5\"\n\nNETWORKING:\nEthernet LAN\n\nPORTS:\n4 x USB 2.0\n4 x USB 3.0\n1 x Headphone/Microphone combo port\n1 x LAN Port\n2 x DisplayPorts\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nHP EliteDesk 800 G6\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 6450.00,
        images: {
            "REFURBISHED - HP ELITEDESK 800 G6 SFF - I5 10TH GEN - 8GB DDR4 - 256GB NVME - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354452/HPEliteDesk805G6SFFRefurbished3_c6c2b681-5340-4092-8911-65416a97bd24.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354464/HPEliteDesk805G6SFFRefurbished.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354465/HPEliteDesk805G6SFFRefurbished2_f87b6ab1-9b6a-42cb-b8da-ddda7f642101.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354467/HPEliteDesk805G6SFFRefurbished1_b8364c35-cc3f-49af-a2ed-e8201198e356.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354468/HPEliteDesk805G6SFFRefurbished33_35c04c80-d563-45fc-9667-3b78ce1b46c1.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    {
        id: 30,
        handle: "refurbished-lenovo-thinkcentre-m920s-sff-i7-9th-gen-8gb-ddr4-256gb-ssd-computer",
        title: "REFURBISHED - LENOVO THINKCENTRE M920S SFF - I7 9TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER",
        description: "Elevate your home office or small business setup with this reliable Lenovo ThinkCentre M920S desktop PC. Featuring a powerful Intel Core i7 processor and fast SSD storage, it delivers the performance you need for everyday tasks and multitasking. This refurbished unit offers excellent value for money, combining quality business-class engineering with modern connectivity. Perfect for users seeking a compact yet capable computer that fits seamlessly into any workspace.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nLenovo\n\nMODEL:\nThinkCentre M920S\n\nFORM FACTOR:\nSmall Form Factor\n\nCPU:\nIntel® Core™ i7-9700\n\nCPU SPEED:\n3.00GHz\n\nCORES – THREADS:\n8 Cores – 8 Threads\n\nRAM:\n8GB DDR4\n\nSSD:\n256GB Solid State Drive\n\nGPU:\nIntel® UHD Graphics 630\n\nDISPLAY:\nNo Monitor\n\nNETWORKING:\nEthernet LAN\n\nCabling technology:\n10/100/1000Base-T(X)\n\nPORTS:\n2 x USB 2.0\n6 x USB 3.0\n1 x LAN Port\n1 x Headphone/Microphone combo port\n1 x VGA\n2 x Display Ports\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nLenovo ThinkCentre M920S SFF\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 5950.00,
        images: {
            "REFURBISHED - LENOVO THINKCENTRE M920S SFF - I7 9TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795358529/75793726_9310806540.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795358531/LenovoM920SSFF_1_51aab690-5811-4839-b7d9-d7f7a1e226b5.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795358534/LenovoM920SSFF1.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    {
        id: 29,
        handle: "refurbished-dell-vostro-3888-i5-10th-gen-8gb-ddr4-256gb-ssd-computer",
        title: "REFURBISHED - DELL VOSTRO 3888 - I5 10TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER",
        description: "The Dell Vostro 3888 is a dependable business desktop designed for office environments and everyday computing. Powered by 10th Generation Intel Core i5 processor, it delivers reliable performance for productivity, multitasking, and essential tasks.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nDell\n\nMODEL:\nVostro 3888\n\nFORM FACTOR:\nMini Tower\n\nCPU:\nIntel Core i5-10400\n\nSPEED:\n2.90GHz\n\nCORES – THREADS:\n6 Cores – 12 Threads\n\nRAM:\n8GB DDR4\n\nSSD:\n256GB Solid-State Drive\n\nGPU:\nIntel UHD Graphics 630\n\nDISPLAY:\nNo Monitor\n\nOPTICAL DRIVE:\nNo\n\nEXPANSION SLOTS:\n1 x PCI Express x1 (Gen 3.x) slots\n1 x PCI Express x16 (Gen 3.x) slots\n\nDRIVE BAYS:\n1 x 3.5\"\n\nNETWORKING:\nEthernet LAN\n\nPORTS:\n4 x USB 2.0\n4 x USB 3.2\n1 x RJ-45\n1 x HDMI\nHeadphone & Microphone combo port\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nDell Vostro 3888\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 5950.00,
        images: {
            "REFURBISHED - DELL VOSTRO 3888 - I5 10TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795358362/Dellvostro3888.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795358364/Dellvostro3888side.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795358367/Dellvostro3888side2.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    {
        id: 28,
        handle: "refurbished-dell-optiplex-3070-sff-i5-9th-gen-8gb-ddr4-256gb-ssd-computer",
        title: "REFURBISHED - DELL OPTIPLEX 3070 SFF - I5 9TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER",
        description: "The Dell OptiPlex 3070 Small Form Factor desktop is a reliable and efficient choice for everyday office work and home productivity. This compact PC delivers consistent performance with the Intel i5 processor and offers a space-saving design ideal for any workspace. Perfect for users seeking a refurbished desktop PC that balances performance and value.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nDell\n\nMODEL:\nOptiPlex 3070\n\nFORM FACTOR:\nSmall Form Factor\n\nCPU:\nIntel® Core™ i5-9400T\n\nRAM:\n8GB DDR4\n\nSSD:\n256GB Solid-State Drive\n\nGPU:\nIntel® UHD Graphics 630\n\nPorts:\n4 x USB 2.0\n4 x USB 3.0\nHeadphone/Microphone combo port\n1 x LAN Port\n1 x HDMI 1.4\n1 x Display Port\n\nNetworking:\nEthernet LAN\nCabling technology - 10/100/1000Base-T(X)\n\nOperating System:\nWindows 11 Pro 64 Bit\n\nBox Contents:\nDell OptiPlex 3070 SFF\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 5950.00,
        images: {
            "REFURBISHED - DELL OPTIPLEX 3070 SFF - I5 9TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795358188/DellOptiPlex3070SFFrefurbisheddesktop_740f53b4-6b96-4714-a352-913549d48ced.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795358192/72514638_0531016866.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795358195/72514638_7151331047.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    {
        id: 27,
        handle: "refurbished-hp-prodesk-400-g6-sff-i5-9th-gen-16gb-ddr4-256gb-ssd-computer",
        title: "REFURBISHED - HP PRODESK 400 G6 SFF - I5 9TH GEN - 16GB DDR4 - 256GB SSD - COMPUTER",
        description: "Small form factor desktops are the smart choice for home offices and compact workspaces. This refurbished HP ProDesk 400 G6 delivers reliable performance for everyday productivity, office tasks, and home use, making it an excellent value addition to any setup.\n\nCONDITION/GRADE:\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nHP\n\nMODEL:\nProDesk 400 G6\n\nFORM FACTOR:\nSmall Form Factor\n\nCPU:\nIntel® Core™ i5-9400T\n\nPROCESSOR SPEED:\n1.80GHz\n\nPROCESSOR CORES – THREADS:\n6 Cores – 6 Threads\n\nRAM:\n16GB DDR4\n\nSSD:\n256GB Solid State Drive\n\nGPU:\nIntel® UHD Graphics 630\n\nDISPLAY:\nNo Monitor\n\nOPTICAL DRIVE:\nNone\n\nNETWORKING:\nEthernet LAN\n\nPORTS:\n4 x USB 2.0\n4 x USB 3.0\n1 x Headphone/Microphone combo port\n1 x VGA\n1 x LAN Port\n1 x DisplayPorts\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nHP ProDesk 400 G6\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 5950.00,
        images: {
            "REFURBISHED - HP PRODESK 400 G6 SFF - I5 9TH GEN - 16GB DDR4 - 256GB SSD - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355709/76732177_7561750855.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355725/76732176_4017448670.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355706/HPProdesk400G5SFFRefurbishedDesktop_4a708cdd-e45a-4b8f-a3e9-64f0f5912c71.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    {
        id: 26,
        handle: "refurbished-dell-optiplex-xe3-sff-i7-8th-gen-8gb-ddr4-256gb-nvme-computer",
        title: "REFURBISHED - DELL OPTIPLEX XE3 SFF - I7 8TH GEN - 8GB DDR4 - 256GB NVME - COMPUTER",
        description: "The Dell OptiPlex XE3 SFF is a compact Small Form Factor desktop designed for reliable office productivity and business applications. Powered by an 8th Generation Intel Core i7 processor, it delivers solid multitasking performance with 8GB of DDR4 memory and 256GB of fast NVMe storage.\n\n\nREFURBISHED GRADE: Good condition used\n\n\nSPECIFICATIONS:\nBRAND:\nDell\n\nMODEL:\nOptiPlex XE3\n\nFORM FACTOR:\nSmall Form Factor\n\nCPU:\nIntel® Core™ i7-8700\n\nGPU:\nIntel® UHD Graphics 630\n\nRAM:\n8GB DDR4\n\nSSD:\n256GB NVMe Solid-State Drive\n\nDISPLAY:\nNo Monitor\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nPORTS:\n4 x USB 2.0\n4 x USB 3.0\nHeadphone/Microphone combo port\n1 x LAN Port\nDisplay Port\n\nNETWORKING:\nEthernet LAN\nCabling technology - 10/100/1000Base-T(X)\n\nEXPANSION SLOTS:\n1 x PCI Express x1 slots\n1 x PCI Express x16 slots\n\n\nWhat's in the box?\nDell OptiPlex XE3\nPower Cable\n\n\nWARRANTY:\n12 Months",
        price: 5950.00,
        images: {
            "REFURBISHED - DELL OPTIPLEX XE3 SFF - I7 8TH GEN - 8GB DDR4 - 256GB NVME - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795357876/71690081_1554169712.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795357878/71690081_2610380239.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795357880/71690081_0188276153.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795357857/7ac555f42a40f17d88b3566a80f6079d75fc80c3.jpg"
        ],
        options: [],
        category: "Desktop PCs"
    },

    {
        id: 25,
        handle: "refurbished-hp-elitedesk-800-g5-sff-i5-9th-gen-8gb-ddr4-256gb-ssd-computer",
        title: "REFURBISHED - HP ELITEDESK 800 G5 SFF - I5 9TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER",
        description: "A refurbished HP EliteDesk 800 G5 Small Form Factor desktop delivers the performance and reliability you need for everyday business tasks. Powered by an Intel Core i5 processor and equipped with 8GB of RAM and a 256GB SSD, this compact PC is perfect for office work, home use, or as a capable entry-level workstation. \n\nCONDITION/GRADE: \n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS: \n\nBRAND: \n\nHP\n\nMODEL: \n\nEliteDesk 800 G5\n\nFORM FACTOR: \n\nSmall Form Factor\n\nPROCESSOR: \n\nIntel® Core™ i5-9400\n\nPROCESSOR SPEED: \n\n2.90GHz\n\nPROCESSOR CORES – THREADS: \n\n6 Cores – 6 Threads\n\nMEMORY: \n\n8GB DDR4\n\nSTORAGE: \n\n256GB Solid State Drive\n\nGRAPHICS: \n\nIntel® UHD Graphics 630\n\nDISPLAY: \n\nNo Monitor\n\nNETWORKING: \n\nEthernet LAN\n\nPORTS: \n\n4 x USB 2.0\n\n6 x USB 3.2\n\n1 x Headphone/Microphone combo port\n\n1 x LAN Port\n\n1 x VGA\n\n2 x DisplayPorts\n\n1 x Type-C\n\nOPERATING SYSTEM: \n\nWindows 11 Pro 64 Bit\n\nBOX CONTENTS: \n\nWhat's in the box?\n\nHP EliteDesk 800 G5\n\nPower Cable\n\nWARRANTY: \n\n12 Months",
        price: 5500.00,
        images: {
            "REFURBISHED - HP ELITEDESK 800 G5 SFF - I5 9TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355706/HPProdesk400G5SFFRefurbishedDesktop_4a708cdd-e45a-4b8f-a3e9-64f0f5912c71.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355708/hp-prodesk-400-g4-sff-ohne-opt-laufwerk-2.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355725/76732176_4017448670.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355709/76732177_7561750855.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    {
        id: 24,
        handle: "refurbished-hp-prodesk-400-g6-sff-i5-9th-gen-8gb-ddr4-256gb-ssd-computer",
        title: "REFURBISHED - HP PRODESK 400 G6 SFF - I5 9TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER",
        description: "The HP ProDesk 400 G6 SFF delivers reliable business performance in a compact design. Perfect for home offices or small workspaces, this refurbished desktop PC features an Intel Core i5 processor and fast SSD storage for smooth day-to-day computing.\n\n\nCONDITION/GRADE\nREFURBISHED GRADE: Good condition used\n\n\nSPECIFICATIONS:\nBRAND:\nHP\n\nMODEL:\nProDesk 400 G6\n\nFORM FACTOR:\nSmall Form Factor\n\nCPU:\nIntel® Core™ i5-9400T\n\nCPU SPEED:\n1.70GHz\n\nCORES – THREADS:\n6 Cores – 6 Threads\n\nRAM:\n8GB DDR4\n\nSSD:\n256GB Solid State Drive\n\nGPU:\nIntel® UHD Graphics 630\n\nDISPLAY:\nNo Monitor\n\nOPTICAL DRIVE:\nNone\n\nNETWORKING:\nEthernet LAN\n\nPORTS:\n4 x USB 2.0\n4 x USB 3.0\n1 x Headphone/Microphone combo port\n1 x VGA\n1 x LAN Port\n1 x DisplayPorts\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\n\nWhat's in the box?\nHP ProDesk 400 G6\nPower Cable\n\n\nWARRANTY:\n12 Months",
        price: 5500.00,
        images: {
            "REFURBISHED - HP PRODESK 400 G6 SFF - I5 9TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355706/HPProdesk400G5SFFRefurbishedDesktop_4a708cdd-e45a-4b8f-a3e9-64f0f5912c71.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355708/hp-prodesk-400-g4-sff-ohne-opt-laufwerk-2.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355709/76732177_7561750855.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    {
        id: 22,
        handle: "refurbished-hp-elitedesk-800-g4-sff-i5-8th-gen-8gb-ddr4-256gb-ssd-computer",
        title: "REFURBISHED - HP ELITEDESK 800 G4 SFF - I5 8TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER",
        description: "The HP EliteDesk 800 G4 SFF, a dependable workhorse designed for professional environments and everyday office tasks. This compact desktop delivers solid performance for spreadsheets, web browsing and multitasking, making it an ideal choice for home offices and small businesses.\n\n\nREFURBISHED GRADE: Good condition used\n\n\nSPECIFICATIONS:\nMAKE:\nHP\nMODEL:\nEliteDesk 800 G4\nFORM FACTOR:\nSmall Form Factor\nCPU:\nIntel® Core™ i5-8400T\nSPEED:\n1.70GHz\nCORES – THREADS:\n6 Cores – 6 Threads\nRAM:\n8GB DDR4\nSSD:\n256GB Solid State Drive\nGPU:\nIntel® UHD Graphics 630\nDISPLAY:\nNo Monitor\nEXPANSION SLOTS:\n1 x PCI Express x16\nDRIVE BAYS:\n1 x 2.5\"\nNETWORKING:\nEthernet LAN\nPORTS:\n4 x USB 2.0\n6 x USB 3.2\n1 x Headphone/Microphone combo port\n1 x LAN Port\n2 x DisplayPorts\n1 x Type-C\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\n\nWhat's in the box?\nHP EliteDesk 800 G4\nPower Cable\n\n\nWARRANTY:\n12 Months",
        price: 4950.00,
        images: {
            "REFURBISHED - HP ELITEDESK 800 G4 SFF - I5 8TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795357059/HPEliteDesk800G4SFFRefurbished_2211afb5-c441-4502-baaa-bf407690604e.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795357060/HPEliteDesk800G5DesktopRefurbished_822833b6-fccc-4b4b-a4c1-9de033147611.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795357062/93072539_7655699842_1d32bee1-a5b8-4383-9f7a-e6186579e6f4.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795357064/HPEliteDesk800G5DesktopComputerRefurbished2_03fcb3b4-7735-45fb-b360-ff9c31ea1c3a.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    {
        id: 19,
        handle: "refurbished-dell-optiplex-3050-mini-tower-i5-7th-gen-8gb-ddr4-256gb-ssd-computer",
        title: "REFURBISHED - DELL OPTIPLEX 3050 MINI TOWER - I5 7TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER",
        description: "The Dell OptiPlex 3050 Mini Tower is a reliable business-class desktop computer designed for office environments and everyday productivity. Powered by a 7th Generation Intel Core processor, it offers practical performance, upgrade flexibility and a durable tower design.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nMAKE:\nDell\nMODEL:\nOptiPlex 3050\nFORM FACTOR:\nMicro Tower\nCPU:\nIntel® Core™ i5-7400\nRAM:\n8GB DDR4\nSSD:\n256GB\nGPU:\nIntel® HD Graphics 530\nCONNECTIVITY:\nEthernet LAN\n10/100/1000Base-T(X)\nPORTS:\n2 x Front USB 2.0\n2 x Rear USB 2.0\n2 x Front USB 3.0\n2 x Rear USB 3.0\n1 x LAN Port\n1 x Display Port\n1 x HDMI\nAudio Line-out\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nDell OptiPlex 3050\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 4250.00,
        images: {
            "REFURBISHED - DELL OPTIPLEX 3050 MINI TOWER - I5 7TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355563/3050.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355564/resized_684dd857-ae05-4211-a38a-79c9a4b2a7a7.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355565/DELLOptiPlex3050refurbisheddesktop.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    {
        id: 17,
        handle: "refurbished-hp-prodesk-600-g3-mini-pc-i5-7th-gen-8gb-ddr4-256gb-ssd-computer",
        title: "REFURBISHED - HP PRODESK 600 G3 MINI PC - I5 7TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER",
        description: "The HP ProDesk 600 G3 Mini PC is a compact and reliable desktop computer that delivers solid performance for everyday tasks. This refurbished business-class machine is perfect for home offices, students, or anyone needing a space-saving PC with a fast processor and SSD storage.\n\nCONDITION/GRADE: REFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nHP\n\nMODEL:\nProDesk 600 G3\n\nFORM FACTOR:\nMini PC\n\nCPU:\nIntel® Core™ i5-7400T\n\nCPU SPEED:\n2.40GHz\n\nCORES – THREADS:\n4 Cores – 4 Threads\n\nRAM:\n8GB DDR4\n\nSSD:\n256GB\n\nGPU:\nIntel® HD Graphics 630\n\nDISPLAY:\nNo Monitor\n\nOPTICAL DRIVE:\nNone\n\nNETWORKING:\nEthernet LAN\n\nPORTS:\n6 x USB 3.0\n1 x Headphone/Microphone combo port\n1 x LAN Port\n1 x Display Port\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nWhat's in the box?\nHP ProDesk 600 G3\nPower Unit & Power Cable\n\nWARRANTY:\n12 Months",
        price: 3950.00,
        images: {
            "REFURBISHED - HP PRODESK 600 G3 MINI PC - I5 7TH GEN - 8GB DDR4 - 256GB SSD - COMPUTER": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355248/38102601_9882600717.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355250/hp_800_g_mini_1_584e063e-8730-4108-a2c0-e03f960d6a47.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355252/HPProDesk600G3_e6d7374e-1cd6-46df-85dd-96d2d8092a69.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795355253/38102601_2163793443.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    {
        id: 10,
        handle: "refurbished-hp-elitedesk-800-g4-mini-pc-i5-8th-gen-8gb-ddr4-256gb-nvme-hp-le2202-lcd-computer-set",
        title: "REFURBISHED - HP ELITEDESK 800 G4 MINI PC - I5 8TH GEN - 8GB DDR4 - 256GB NVME - HP - LE2202 - LCD - COMPUTER SET",
        description: "A reliable and compact solution for your everyday computing needs. This refurbished HP EliteDesk 800 G4 Mini PC delivers efficient performance for office tasks, web browsing, and multimedia use. Its space-saving design makes it a versatile addition to any desk or entertainment setup, perfect for users seeking dependable performance in a small footprint.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\n\nMAKE:\nHP\n\nMODEL:\nEliteDesk 800 G4\n\nFORM FACTOR:\nMini PC\n\nCPU:\nIntel® Core™ i5-8400\n\nCPU SPEED:\n2.80GHz\n\nCORES – THREADS:\n6 Cores – 6 Threads\n\nRAM:\n8GB DDR4\n\nSSD:\n256GB NVMe Solid State Drive\n\nGPU:\nIntel® HD Graphics 630\n\nOPTICAL DRIVE:\nNone\n\nNETWORKING:\nEthernet LAN\n\nPORTS:\n6 x USB 3.0\n1 x Headphone/Microphone combo port\n1 x RJ-45\n1 x DisplayPorts\n\nOPERATING SYSTEM:\nWindows 11 Pro 64 Bit\n\nDISPLAY SPECIFICATIONS:\n\nDISPLAY:\nHP LE2202\nScreen Size: 22 inch\nContrast Ratio: 1,000:1\nImage Brightness: 250 cd/m²\nColor Support: 16.7 Million Colors\n1 x VGA\n\nWhat's in the box?\n\nHP EliteDesk 800 G4 Mini PC\n22 Inch Screen\nDual Power Cable OR 2 X Single Power Cables\n1 x Display Cable\n1 x FREE Wired Keyboard\n1 x FREE Wired Mouse\n\nWARRANTY:\n12 Months",
        price: 5500.00,
        images: {
            "REFURBISHED - HP ELITEDESK 800 G4 MINI PC - I5 8TH GEN - 8GB DDR4 - 256GB NVME - HP - LE2202 - LCD - COMPUTER SET": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354047/HP800G3Set.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354048/HPEliteDesk800G3MiniPCRefurbished1_e8180466-7bb0-41fe-824e-ad2f9d9d8d70.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354050/HPEliteDesk800G3MiniPCRefurbished1_ea061387-b5c1-43a7-9b54-0647055f13f4.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354051/HPEliteDesk800G3MiniPCRefurbished2_ec77774c-0e24-4fb2-9905-3965fa17f78b.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795354052/LE2202x.jpg"
        ],
        options: [],
        category: "Mini PCs"
    },

    
    
    
    
    // =====================
    // Monitors
    // =====================
    {
        id: 7,
        handle: "dell-p2724deb-27inch-wqhd-led-video-conferencing-computer-monitor-demo",
        title: "DELL P2724DEB - 27INCH - WQHD LED - VIDEO CONFERENCING - COMPUTER MONITOR - DEMO",
        description: "The Dell P2724DEB is a feature-packed 27-inch WQHD LED monitor designed for modern workspaces and video conferencing. With a built-in 2K webcam and premium audio, it delivers crystal-clear images and immersive sound for all your online meetings. This refurbished desktop monitor offers excellent connectivity and a sleek design, making it a smart choice for anyone seeking productivity and collaboration in one package.\n\nCONDITION/GRADE: REFURBISHED GRADE: DEMO no box\n\nSPECIFICATIONS:\nBRAND: Dell\nMODEL: P2724DEB\nFORM FACTOR: 27inch\nSCREEN SIZE: 27\"\nSCREEN MODE: WQHD\nSCREEN RESOLUTION: 2560 x 1440\nASPECT RATIO: 16:9\nPANEL TECHNOLOGY: In-plane Switching (IPS) Technology\nCONNECTIVITY: 1x HDMI (HDCP 1.4)\nCONNECTIVITY: 1x DP 1.4 (HDCP 1.4)\nCONNECTIVITY: 1x DP-out with MST\nCONNECTIVITY: 1x RJ45\nCONNECTIVITY: 1x 3.5mm combo headphone with microphone jack\nCONNECTIVITY: 1x USB 3.2 Gen1 Type-C (Alt mode with DP 1.4 upstream, up to 90W power delivery)\nCONNECTIVITY: 1x USB 3.2 Gen1 Type-B upstream\nCONNECTIVITY: 2x USB 3.2 Gen1 Type-A downstream\nCONNECTIVITY: 1x USB 3.2 Gen1 Type-C downstream with up to 15W power delivery\nCONNECTIVITY: 1x USB 3.2 Gen1 Type-A downstream with BC1.2 (2A max)\n\nBOX CONTENTS:\nWhat's in the box?\nDell P2724DEB Monitor\nPower Cable\n1 x HDMI Cable\n1 x Upstream Cable\n\nWARRANTY:\n12 Months",
        price: 4600.00,
        images: {
            "DELL P2724DEB - 27INCH - WQHD LED - VIDEO CONFERENCING - COMPUTER MONITOR - DEMO": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353234/DellP2724DEB_8379b82e-b338-4f70-87cf-efdf897e3c81_3.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353234/DellP2724DEB5.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353235/DellP2724DEB1.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353236/DellP2724DEB3.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353237/DellP2724DEB4.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353237/DellP2724DEB2.jpg"
        ],
        options: [],
        category: "Monitors"
    },

    {
        id: 6,
        handle: "dell-p2425h-24inch-fhd-led-100hz-computer-monitor-new",
        title: "DELL P2425H - 24INCH - FHD - LED - 100HZ - COMPUTER MONITOR - NEW",
        description: "The Dell P2425H is a professional 24-inch Full HD monitor that brings crisp, vibrant visuals to any modern workspace. With a smooth 100Hz refresh rate and an IPS panel, it delivers fluid on-screen movement and wide viewing angles, making it ideal for productivity tasks and business environments. This sleek LED-backlit display features a three-sided narrow bezel and versatile connectivity, perfect for enhancing your home office or workstation setup.\n\nCONDITION/GRADE: REFURBISHED GRADE: NEW\n\nSPECIFICATIONS:\nBRAND:\nDELL\n\nMODEL:\nP2425H\n\nDISPLAY SIZE:\n24INCH\n\nRESOLUTION:\nFHD\n\nREFRESH RATE:\n100HZ\n\nPANEL TYPE:\nIPS\n\nBRIGHTNESS:\n250 cd/m2 (typical)\n\nCONTRAST RATIO:\n1,500: 1 (typical)\n\nRESPONSE TIME:\n5ms grey-to-grey (Fast mode) ; 8ms grey-to-grey (Normal mode)\n\nASPECT RATIO:\n16:9\n\nVIEWING ANGLE, HORIZONTAL:\n178°\n\nVIEWING ANGLE, VERTICAL:\n178°\n\nVESA MOUNTING:\n100 mm x 100mm\n\nHEIGHT ADJUSTMENT:\nUp to 150 mm\n\nTILT:\n-5°/+21°\n\nSWIVEL:\n-45°/+45°\n\nPIVOT:\n-90°/+90°\n\nPRODUCT COLOUR:\nBlack and Silver\n\nWEIGHT (PANEL ONLY - FOR VESA MOUNT):\n3.12 kg\n\nUSB POWER DELIVERY:\nYes, up to 15W via USB-C downstream port\n\nCONNECTIVITY\n1x HDMI 1.4 (HDCP 1.4) (Supports up to FHD 1920 x 1080p 100Hz TMDS as per specified in HDMI 1.4)\n1x DP 1.2 (HDCP 1.4)\n1x VGA\n1x USB 3.2 Gen1 Type-B upstream\n3x USB 3.2 Gen1 Type-A downstream\n1x USB 3.2 Gen1 Type-C downstream with up to 15W PD (data only)\n\nBOX CONTENTS\nWhat's in the box?\nDell P2425H\nPower cable\nHDMI Cable\n\nWARRANTY:\n12 Months",
        price: 3300.00,
        images: {
            "DELL P2425H - 24INCH - FHD - LED - 100HZ - COMPUTER MONITOR - NEW": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353049/DellP2425H1_9b67715e-88c5-434f-af31-2ef9a97ef9ba.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353049/DellP2425H33_3b8240fa-e730-4abf-960e-f13c7943f4c1.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353049/DellP2425Hee.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353050/dell.png",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795353051/DellP2425H3_e23105a4-115d-491c-8382-5f03408e59bf.png"
        ],
        options: [],
        category: "Monitors"
    },

    {
        id: 5,
        handle: "refurbished-dell-se2416h-24inch-hd-computer-monitor",
        title: "REFURBISHED - DELL SE2416H - 24INCH - HD - COMPUTER MONITOR",
        description: "The Dell SE2416H, a reliable 24-inch Full HD monitor perfect for home offices and everyday computing. This refurbished unit features an IPS panel that delivers vibrant colours and wide viewing angles, making it ideal for productivity tasks and multimedia enjoyment.\n\nCONDITION/GRADE:\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nDELL\n\nMODEL:\nSE2416H\n\nSCREEN SIZE:\n24\"\n\nPANEL TYPE:\nIn-Plane Switching (IPS)\n\nRESOLUTION:\n1920 x 1080\n\nCONTRAST RATIO:\n1000:1\n\nBRIGHTNESS:\n250 cd/m²\n\nRESPONSE TIME:\n6 ms\n\nCOLOR SUPPORT:\n16.7 Million Colors\n\nHDMI CONNECTORS:\n1\n\nVGA CONNECTORS:\n1\n\nBOX CONTENTS:\nWhat's in the box?\nDell SE2416H\nPower Cable\nHDMI Cable\n\nWARRANTY:\n12 Months",
        price: 2600.00,
        images: {
            "REFURBISHED - DELL SE2416H - 24INCH - HD - COMPUTER MONITOR": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795352875/DellSE2216HTMonitor_1.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795352876/DellSE2216HTMonitor.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795352876/DellSE2216HTMonitor3.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795352875/DellSE2216HTMonitor2.jpg"
        ],
        options: [],
        category: "Monitors"
    },

    {
        id: 4,
        handle: "refurbished-dell-e2418hn-24inch-hd-computer-monitor",
        title: "REFURBISHED - DELL E2418HN - 24INCH - HD - COMPUTER MONITOR",
        description: "The Dell E2418HN is a reliable 24-inch monitor designed for everyday office work, business applications, and home use. Its Full HD 1920 x 1080 resolution and IPS display deliver clear images, consistent colours, and wide viewing angles, making it a great choice for office workstations and general productivity.\n\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nDELL\n\nMODEL:\nE2418HN\n\nSCREEN SIZE:\n24\"\n\nRESOLUTION:\n1920 x 1080\n\nCONTRAST RATIO:\n1000: 1\n\nBRIGHTNESS:\n250 cd/m²\n\nCOLOR SUPPORT:\n16.7 Million Colors\n\nVGA CONNECTOR:\n1\n\nHDMI CONNECTOR:\n1\n\n\nBOX CONTENTS:\nWhat's in the box?\nDell Monitor E2418HN\nPower cable\nHDMI Cable\n\nWARRANTY:\n12 Months",
        price: 2500.00,
        images: {
            "REFURBISHED - DELL E2418HN - 24INCH - HD - COMPUTER MONITOR": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795352735/DellE2418HN2.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795352734/DellE2418HN_255e84e8-1e56-4761-a15c-34a8fea39dbf.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795352734/DellE2418HN1.jpg"
        ],
        options: [],
        category: "Monitors"
    },

    {
        id: 3,
        handle: "refurbished-lg-23mp57hq-23inch-hd-computer-monitor",
        title: "REFURBISHED - LG 23MP57HQ - 23INCH - HD - COMPUTER MONITOR",
        description: "The LG 23MP57HQ 23\" Full HD IPS monitor, a reliable refurbished desktop PC display that delivers crisp visuals and vibrant colour. Its IPS panel ensures accurate colours and wide viewing angles, making it perfect for office productivity, web browsing, multimedia, and everyday computing. Enjoy a slim, modern design with Full HD 1920 × 1080 resolution for consistent, high-quality performance.\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\nBRAND:\nLG\n\nMODEL:\n23MP57HQ\n\nSCREEN SIZE:\n23\"\n\nCONTRAST RATIO:\n1000: 1\n\nBRIGHTNESS:\n200 cd/m²\n\nCOLOR SUPPORT:\n16.7 Million Colors\n\nVGA CONNECTOR:\n1\n\nHDMI CONNECTOR:\n1\n\n\nWhat's in the box?\nLG 23MP57HQ\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 1900.00,
        images: {
            "REFURBISHED - LG 23MP57HQ - 23INCH - HD - COMPUTER MONITOR": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795352300/81AkG-tvZ5L._AC_UF1000_1000_QL80_DpWeblab.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795352299/23MP55HQ-23.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795352300/HP23MP55HQ1.jpg"
        ],
        options: [],
        category: "Monitors"
    },

    {
        id: 2,
        handle: "refurbished-lg-22mp57hq-22inch-hd-computer-monitor",
        title: "REFURBISHED - LG 22MP57HQ - 22INCH - HD - COMPUTER MONITOR",
        description: "The LG 22MP57HQ 22-inch Full HD IPS monitor, perfect for anyone seeking crisp visuals and vibrant colour in a compact design. This refurbished desktop monitor delivers sharp imagery and wide viewing angles, making it ideal for office productivity, web browsing, and everyday computing tasks.\n\n\nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS:\n\nMAKE:\nLG\n\nMODEL:\n22MP57HQ\n\nSCREEN SIZE:\n22\"\n\nCONTRAST RATIO:\n1000: 1\n\nBRIGHTNESS:\n200 cd/m²\n\nCOLOR SUPPORT:\n16.7 Million Colors\n\nVGA CONNECTOR:\n1\n\nHDMI CONNECTOR:\n1\n\n\nWhat's in the box?\n\nLG 22MP57HQ\nPower Cable\n\nWARRANTY:\n12 Months",
        price: 1750.00,
        images: {
            "REFURBISHED - LG 22MP57HQ - 22INCH - HD - COMPUTER MONITOR": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795352300/81AkG-tvZ5L._AC_UF1000_1000_QL80_DpWeblab.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795352299/23MP55HQ-23.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795352300/HP23MP55HQ1.jpg"
        ],
        options: [],
        category: "Monitors"
    },

    {
        id: 1,
        handle: "refurbished-samsung-s22f350fha-21-5inch-led-computer-monitor",
        title: "REFURBISHED - SAMSUNG S22F350FHA - 21.5INCH - LED - COMPUTER MONITOR",
        description: "Find a reliable display for your home or office setup with this refurbished Samsung monitor. This 21.5-inch LED panel delivers crisp Full HD visuals and connects easily to most computers, making it a practical choice for everyday computing tasks. \n\nCONDITION/GRADE: \nREFURBISHED GRADE: Good condition used\n\nSPECIFICATIONS: \nBRAND: \nSAMSUNG\n\nMODEL: \nS22F350FHA\n\nPANEL SIZE: \n21.5\"\n\nPANEL TYPE: \nTN\n\nASPECT RATIO: \n16:9\n\nNATIVE RESOLUTION: \n1920 x 1080\n\nBRIGHTNESS: \n250 cd/m²\n\nRESPONSE TIME: \n5 ms\n\nCOLOUR SUPPORT: \n16.7 million colours\n\nINPUT CONNECTORS: \nVGA\nHDMI\n\nBLU TYPE: \nLED\n\nBOX CONTENTS: \nWhat's in the box?\nSamsung Monitor 21.5inch\nPower cable unit\nVGA Cable\n\nWARRANTY: \n12 Months",
        price: 1750.00,
        images: {
            "REFURBISHED - SAMSUNG S22F350FHA - 21.5INCH - LED - COMPUTER MONITOR": "https://res.cloudinary.com/rmmufvrh/image/upload/v1795352062/Samsung19InchmonitorRefurbished_71e28f17-9eb5-458e-9742-d7e2dcbcf534.jpg"
        },
        allImages: [
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795352062/Samsung19InchmonitorRefurbished2_e0c24406-9b9f-46d8-9079-6666fd10725d.jpg",
            "https://res.cloudinary.com/rmmufvrh/image/upload/v1795352062/Samsung19InchmonitorRefurbished1_4e12e39c-04e9-4573-818f-58ed0b11165f.jpg"
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
