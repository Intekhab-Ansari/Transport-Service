/**
 * Central Transport Business Configuration
 * 
 * NOTE FOR DEPLOYMENT:
 * Replace any placeholder marked with [REPLACE: ...] with your actual company details.
 */

export const BUSINESS_CONFIG = {
  // Brand & Identity
  brandName: "Vanguard Roadways & Tempo Logistics",
  tagline: "Direct Fleet Owners • Zero Middlemen • Transparent Fares",
  shortName: "Vanguard Logistics",
  establishedYear: 2008,
  yearsInBusiness: 18,
  
  // Contact Channels
  phonePrimary: "+91 98765 43210", // [REPLACE: Primary phone number]
  phoneSecondary: "+91 98765 43211", // [REPLACE: Secondary dispatch line]
  whatsappNumber: "+919876543210", // [REPLACE: WhatsApp number without spaces/symbols for wa.me]
  whatsappDisplay: "+91 98765 43210",
  emailBooking: "dispatch@vanguardlogistics.in", // [REPLACE: Business email]
  emailSupport: "support@vanguardlogistics.in",
  
  // Physical Locations & Operational Hubs
  headOfficeAddress: "Plot No. 42, Transport Nagar, Phase-2, Near Highway Bypass, Pune, Maharashtra - 411044",
  mumbaiMainHub: "Gala 14, APMC Truck Terminal, Sector 19, Vashi, Navi Mumbai - 400705",
  bhiwandiHub: "Building B-4, Mankoli Logistics Park, Mumbai-Nashik Highway, Bhiwandi, Thane - 421302",
  parkingYardAddress: "Yard #7, Heavy Vehicle Terminal, Old Mumbai-Pune Highway, Nigdi, Pune - 411033",
  branchOffices: [
    { city: "Mumbai / Navi Mumbai Hub", address: "Gala 14, APMC Truck Terminal, Sector 19, Vashi, Navi Mumbai - 400705", phone: "+91 98765 43210" },
    { city: "Thane & Bhiwandi Logistics Hub", address: "Building B-4, Mankoli Logistics Park, Bhiwandi, Thane - 421302", phone: "+91 98765 43212" },
    { city: "Andheri / Western Suburbs Desk", address: "Unit 8, MIDC Central Road, Andheri East, Mumbai - 400093", phone: "+91 98765 43211" },
    { city: "Pune Head Office & Central Yard", address: "Plot No. 42, Transport Nagar, Nigdi, Pune - 411044", phone: "+91 98765 43210" },
    { city: "Nashik Branch", address: "Shop 4, Ambad MIDC Transport Hub, Nashik - 422010", phone: "+91 98765 43213" },
    { city: "Gujarat Corridor Desk", address: "Plot 18, GIDC Industrial Estate, Vapi / Surat - 396195", phone: "+91 98765 43214" }
  ],

  // Mumbai & Maharashtra Local Service Coverage Areas
  mumbaiServiceZones: [
    {
      region: "Mumbai Western Suburbs",
      areas: ["Andheri (East/West)", "Bandra & BKC", "Borivali", "Goregaon", "Malad", "Kandivali", "Jogeshwari", "Santacruz", "Vile Parle", "Dahisar"]
    },
    {
      region: "Mumbai Central & South Mumbai",
      areas: ["Dadar", "Kurla", "Ghatkopar", "Powai & Kanjurmarg", "Mulund", "Bhandup", "Chembur", "Sion", "Lower Parel", "Fort / Colaba"]
    },
    {
      region: "Navi Mumbai & Port Zones",
      areas: ["Vashi (APMC)", "Nerul", "Belapur (CBD)", "Kopar Khairane", "Mahape (Millennium City)", "Taloja MIDC", "Panvel", "JNPT Nhava Sheva Port", "Airoli", "Ghansoli"]
    },
    {
      region: "Thane & Bhiwandi Logistics Corridor",
      areas: ["Thane West (Ghodbunder)", "Wagle Estate MIDC", "Bhiwandi Warehousing Hub", "Kalyan", "Dombivli", "Mira-Bhayandar", "Vasai-Virar"]
    }
  ],
  
  // Working Hours
  operatingHours: "24 Hours / 7 Days a Week (Round-the-clock Dispatch across Mumbai & India)",
  officeTimings: "Monday to Sunday: 7:00 AM – 11:00 PM (Emergency Dispatch 24/7)",
  
  // Key Differentiators / USPs
  usps: [
    {
      id: "own-fleet",
      title: "100% In-House Fleet",
      badge: "No Brokers",
      desc: "We own our vehicles and employ verified full-time drivers across Mumbai and Pune. You deal directly with the fleet owner, saving 15-25% in agent commissions."
    },
    {
      id: "transparent-fare",
      title: "Fixed Upfront Fares",
      badge: "No Hidden Costs",
      desc: "What we quote is what you pay. Zero surprise charges for Mumbai toll plazas, night-travel surcharges, or arbitrary loading delays."
    },
    {
      id: "live-tracking",
      title: "Active GPS & Driver Direct Line",
      badge: "Real-Time",
      desc: "Every trip gets a live tracking link shared on WhatsApp. Direct phone call connection to the on-duty driver at all times."
    },
    {
      id: "insured-cargo",
      title: "Transit Insurance Up to ₹50L",
      badge: "Full Safety",
      desc: "Comprehensive goods-in-transit policy with leading national insurers. Damage-proof lashing, waterproof heavy tarpaulins provided free."
    },
    {
      id: "on-time",
      title: "99.4% On-Time Commitment",
      badge: "Strict Schedule",
      desc: "Our vehicles undergo mandatory weekly maintenance checks at our own garage to ensure zero en-route breakdown delays on Expressways."
    },
    {
      id: "experienced-crew",
      title: "Trained Loading Labor (Hamal)",
      badge: "Careful Handling",
      desc: "Optional skilled manpower for heavy machinery, fragile household furniture, and pallet loading with safety blankets and straps."
    }
  ],
  
  // Trust Stats
  stats: [
    { value: "18+", label: "Years on the Road", sub: "Serving India Since 2008" },
    { value: "65+", label: "Owned Commercial Trucks", sub: "Tata Ace to 32ft MX" },
    { value: "42,800+", label: "Successful Deliveries", sub: "Mumbai & Pan-India" },
    { value: "99.4%", label: "On-Time Dispatch Rate", sub: "Live GPS tracked" },
    { value: "150+", label: "Regular Route Corridors", sub: "Intra-City & National FTL" }
  ],

  // Active City & Highway Corridors across India
  corridors: [
    { from: "Mumbai / Navi Mumbai", to: "Pune (Expressway Direct)", time: "3 - 4.5 Hours", frequency: "Hourly Runs 24/7" },
    { from: "Mumbai (Bhiwandi / Vashi)", to: "Gujarat (Vapi / Surat / Ahmedabad)", time: "6 - 10 Hours", frequency: "Daily 6 Trips" },
    { from: "Mumbai / JNPT Port", to: "Nashik / Dhule / Jalgaon", time: "5 - 7 Hours", frequency: "Daily 4 Trips" },
    { from: "Mumbai / Pune", to: "Bangalore / Karnataka Hubs", time: "18 - 22 Hours", frequency: "Daily Express FTL" },
    { from: "Mumbai", to: "Hyderabad / Telangana", time: "14 - 18 Hours", frequency: "Daily FTL Service" },
    { from: "Mumbai / Bhiwandi", to: "Delhi NCR (Express Highway)", time: "28 - 36 Hours", frequency: "Dedicated Container FTL" },
    { from: "Local Mumbai Intra-City", to: "Any Location in MMR", time: "Under 40 Mins Arrival", frequency: "On-Demand 24/7" }
  ],

  // Core Services
  services: [
    {
      id: "local-tempo",
      title: "Local Tempo & Mini Truck Rental",
      tagline: "Point-to-point intra-city goods shifting for retail & homes",
      icon: "Truck",
      idealFor: "1BHK shifting, retail stock, electronic appliances, market supplies, ecommerce hub runs",
      features: [
        "Tata Ace & Bolero Pickup available within 30-45 minutes",
        "Point-to-point and hourly full-day rental packages",
        "Waterproof tarpaulin cover and rope lashings included",
        "Helper/labor available on request for loading & unloading"
      ],
      priceGuide: "Starts at ₹499 base + ₹18/km (Includes 30 mins loading free)"
    },
    {
      id: "packers-movers",
      title: "Household & Office Relocation",
      tagline: "Complete packing, loading, transport & unpacking with zero stress",
      icon: "PackageCheck",
      idealFor: "Apartment shifting, villa relocation, corporate office moves, bank branch shifting",
      features: [
        "Multi-layer corrugated bubble wrap, foam, and stretch film",
        "Dismantling and reassembly of beds, wardrobes, and modular desks",
        "Dedicated closed container truck (14ft / 17ft) to prevent dust & rain",
        "Transit insurance policy covering electronics and fragile goods"
      ],
      priceGuide: "1BHK from ₹3,500 • 2BHK from ₹6,500 • 3BHK from ₹10,500"
    },
    {
      id: "intercity-ftl",
      title: "Intercity Full Truckload (FTL)",
      tagline: "Direct point-to-point dedicated freight with zero transshipment",
      icon: "Navigation",
      idealFor: "Factory dispatch, warehouse stock replenishment, raw materials, heavy cargo",
      features: [
        "14ft, 17ft, 19ft, 24ft, and 32ft container trucks",
        "Direct non-stop transit — your cargo is never mixed or offloaded midway",
        "Digital E-Way Bill compliance and physical hardcopy POD handover",
        "Real-time GPS tracking dashboard link for your consignee"
      ],
      priceGuide: "Competitive per-trip contract rates with transparent toll billing"
    },
    {
      id: "b2b-logistics",
      title: "B2B Monthly Fleet Contract",
      tagline: "Dedicated vehicles & drivers assigned exclusively to your business",
      icon: "Building2",
      idealFor: "Distributors, FMCG brands, e-commerce fulfillment centers, industrial units",
      features: [
        "Dedicated branded or unbranded vehicles with seasoned drivers",
        "Guaranteed 99.8% uptime with immediate standby vehicle replacement",
        "Customized monthly billing with 30-day corporate credit terms",
        "Dedicated key account dispatch manager for your daily routes"
      ],
      priceGuide: "Custom monthly retainers starting ₹28,000/month per vehicle"
    },
    {
      id: "bulk-machinery",
      title: "Heavy Machinery & Industrial Freight",
      tagline: "Open body & heavy payload transport for engineering goods",
      icon: "ShieldAlert",
      idealFor: "CNC machines, transformers, steel coils, building construction material",
      features: [
        "Heavy payload chassis rated up to 25 Tonnes",
        "Hydraulic crane coordination and heavy wooden dunnage support",
        "Experienced highway drivers trained in high-center-of-gravity cargo",
        "Comprehensive route survey for bridge clearance and weight limits"
      ],
      priceGuide: "Tailored tonnage-based quotes after physical/spec assessment"
    },
    {
      id: "express-parcel",
      title: "Express Parcel & Courier Consignment",
      tagline: "Same-day & next-morning urgent freight between major industrial hubs",
      icon: "Zap",
      idealFor: "Urgent spare parts, medical shipments, sample boxes, event equipment",
      features: [
        "Same-day delivery across Pune-Mumbai-Nashik corridor",
        "Doorstep pickup within 60 minutes of booking confirmation",
        "SMS/WhatsApp photo proof of delivery (POD) on handover",
        "Special fragile handling protocols for sensitive testing equipment"
      ],
      priceGuide: "Starts at ₹850 for express door-to-door direct parcel"
    }
  ],

  // Client Testimonials
  testimonials: [
    {
      id: "t1",
      name: "Rajeshwar Patil",
      role: "Operations Head, Patil Engineering Works",
      city: "Bhosari MIDC, Pune",
      verified: true,
      text: "We have been dispatching 2 to 3 Eicher 19ft loads every week with Vanguard for 4 years now. Unlike broker apps where random drivers cancel at 8 PM, Vanguard always sends their own well-maintained trucks with drivers who know MIDC routes inside out.",
      rating: 5,
      serviceUsed: "Intercity FTL Logistics"
    },
    {
      id: "t2",
      name: "Sneha & Aniket Deshmukh",
      role: "Homeowners (Shifted 3BHK to Wakad)",
      city: "Pune",
      verified: true,
      text: "Booked their 17ft container truck with 3 helpers for our 3BHK shifting. The crew arrived at 8:00 AM sharp with quality bubble wrap and packing tape. Not a single scratch on our 65-inch TV or double-door fridge. Highly honest and hard-working boys.",
      rating: 5,
      serviceUsed: "Packers & Movers Shifting"
    },
    {
      id: "t3",
      name: "Gautam Mehta",
      role: "Proprietor, Mehta Wholesale Electricals",
      city: "Navi Mumbai to Pune",
      verified: true,
      text: "I regularly hire their Tata Ace and Bolero pickups for electrical cables and switchgear distribution. Transparent rate per kilometer, immediate WhatsApp invoice, and live GPS tracking saves me at least 10 phone calls per trip.",
      rating: 5,
      serviceUsed: "Commercial Tempo Hire"
    }
  ],

  // FAQs
  faqs: [
    {
      q: "How quickly can a tempo (Tata Ace / Bolero) reach my location in Mumbai, Navi Mumbai, or Thane?",
      a: "For local intra-city bookings across Mumbai, Navi Mumbai, Thane, and Bhiwandi, our nearest company-owned tempo arrives within 30 to 45 minutes of booking confirmation. For scheduled household shifting, you can book in advance to lock your preferred morning slot."
    },
    {
      q: "How do you handle Mumbai Traffic Police No-Entry timings for commercial trucks?",
      a: "Our fleet consists of small commercial vehicles (Tata Ace / Bolero) that operate freely across Mumbai daytime delivery zones, while heavy trucks (14ft, 19ft, and 32ft) are scheduled during approved highway and night transit corridors to ensure smooth non-stop transit."
    },
    {
      q: "Are toll taxes (Mumbai Entry, Sea Link, Expressway) and GST included in the quote?",
      a: "Our quote gives an itemized breakdown. Local intra-city fares include fuel, driver, and vehicle. For intercity trips, highway toll taxes (like Mumbai-Pune Expressway, Eastern Freeway, Bandra-Worli Sea Link) and state border permits are billed transparently at actual Fastag receipt costs."
    },
    {
      q: "Do you offer Bhiwandi Warehousing and JNPT Port Container transport?",
      a: "Yes! We specialize in warehouse replenishment from Bhiwandi logistics hubs to retail stores in Mumbai/Pune, as well as JNPT Nhava Sheva container freight station (CFS) container movement with 20ft and 32ft multi-axle trucks."
    },
    {
      q: "Do you provide helpers/labor (Hamal) for loading and unloading in Mumbai high-rises?",
      a: "Yes! You can choose 1, 2, or 4 experienced helpers during booking. Our crew is trained in high-rise service lift handling, heavy lifting, furniture safety wrapping, and careful placement at the destination."
    },
    {
      q: "Are my goods insured during transit across Maharashtra and All-India?",
      a: "All our vehicles are insured with mandatory carrier liability. For high-value industrial machinery, electronics, or luxury household items, we provide on-demand comprehensive transit insurance covering up to ₹50 Lakhs against accident, damage, or fire."
    },
    {
      q: "How is dealing with Vanguard different from app-based logistics aggregators like Porter or brokers?",
      a: "We are direct fleet owners with physical yards in Navi Mumbai, Bhiwandi, and Pune with 65+ company-owned vehicles. Aggregators charge high commissions and outsource trips to unknown third-party drivers who often cancel. With Vanguard, you get guaranteed vehicle dispatch, fixed pricing, and direct 24/7 phone access to our dispatch control room."
    }
  ]
};
