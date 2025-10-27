
👤 User Type 1: Airlines/MRO Technician

1. 🔧 Butuh sparepart urgent → search part number
2. 📋 Cek availability & lead time  
3. 🔍 Lihat certifications (FAA, EASA, dll)
4. 📞 Contact sales untuk pricing (karena harga rahasia)
5. 🚀 Place order emergency


👤 User Type 2: Procurement Manager Airlines

1. 📊 Cari supplier alternatif → research vendor
2. ✅ Verifikasi company credentials & certifications
3. 🛠️ Lihat product range & inventory
4. 👥 Cek company experience in aviation
5. 📩 Request untuk catalog & pricing list


👤 User Type 3: Aviation Company Owner
1. 🤝 Cari long-term partnership  
2. 🌐 Lihat global reach & logistics capability
3. 📜 Cek quality control & documentation
4. 💰 Negotiate contract pricing
5. 📅 Setup regular supply agreement


Phase 1: Part Search
HOME PAGE 
↓
PART SEARCH / CATALOG
↓ 
PART AVAILABILITY CHECK


Phase 2: Verification
CERTIFICATIONS PAGE (FAA, EASA, etc)
↓
QUALITY CONTROL PROCESS
↓  
INDUSTRY COMPLIANCE


Phase 3: Purchase Process
CONTACT SALES (Untuk harga rahasia)
↓  
REQUEST QUOTATION FORM
↓
NEGOTIATION & ORDER


🎨 UI/UX Khusus Aviation:

Homepage:

    # Hero: "Aircraft Parts Supplier - Certified & Reliable"

    # Quick part number search

    # Trust badges: FAA, EASA, ISO certifications

    # CTA: "Search Parts" / "Contact Sales"


Catalog/Search Page:

    # Advanced search by:

        1. Part Number
        2. Aircraft Model (Boeing, Airbus, dll)
        3. Component Type (Engine, Avionics, Interior, etc)

    # Harga TIDAK ditampilkan - "Contact for Pricing"


Product Detail:
    # Part number, description, specifications
    # Certifications & documentation available
    # Lead time & availability status
    # "Contact for Price & Order" button


About Page:
    # Company credentials in aviation industry
    # Quality control processes
    # Logistics & global shipping capability
    # Client list (jika boleh disclose)


Contact:
    # Specialized form:
        1. Company Name
        2. Part Number Interested
        3. Quantity Needed
        4. Urgency Level
        5. Certification Requirements
    # CTA: "Get Quote Within 24 Hours"

🔐 Strategi Harga Rahasia:

    # "Competitive Pricing" sebagai placeholder
    # "Contact for Best Quote"
    # "Volume Discount Available"
    # "Request Quote" buttons di mana-mana

🚀 Conversion Goals:
    # Quote request form submission
    # Part number inquiries
    # Sales phone calls



📂 Struktur Folder yang Disarankan:

   src/pages/
├── index.astro (STATIC)              # Homepage
├── about.astro (STATIC)              # About Us  
├── certifications.astro (STATIC)     # Certifications
├── services.astro (STATIC)           # Services
├── contact.astro (STATIC)            # Contact Info
├── catalog.astro (SERVER)            # Part Catalog
├── search.astro (SERVER)             # Part Search
├── quote.astro (SERVER)              # Request Quote
└── parts/
    └── [...slug].astro (SERVER)      # Dynamic Part Pages