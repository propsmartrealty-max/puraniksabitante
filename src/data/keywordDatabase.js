/**
 * Master Keyword Database & Search Intent Mapping Engine
 * Puraniks Abitante Fiore Bavdhan - 5,000+ Mapped Queries across 3 Authority Layers
 */

export const THREE_LAYER_AUTHORITY = {
  layer1: {
    name: "Layer 1: Project Authority (Puraniks Abitante Fiore)",
    target: "Brand & Direct Commercial Searches",
    share: "35%",
    description: "Captures high-converting buyers specifically searching for Puraniks Abitante Fiore, floor plans, pricing, and MahaRERA certifications."
  },
  layer2: {
    name: "Layer 2: Locality Authority (Bavdhan & Bavdhan Budruk)",
    target: "Submarket Property Searches",
    share: "40%",
    description: "Captures buyers searching for flats, new projects, schools, hospitals, and property prices in Bavdhan Budruk and Chandani Chowk."
  },
  layer3: {
    name: "Layer 3: Regional Authority (West Pune & Pune Real Estate)",
    target: "Broad Market & Buyer Guides",
    share: "25%",
    description: "Captures high-funnel buyers exploring West Pune corridors, Hinjewadi IT commuters, and property investment comparative guides."
  }
};

export const MASTER_KEYWORD_DATABASE = [
  // ==========================================
  // SILO 1: CORE BRAND & PROJECT MONEY QUERIES
  // ==========================================
  {
    keyword: "puraniks abitante fiore",
    intent: "Navigational / Transactional",
    assignedUrl: "/puraniks-abitante-fiore",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "Core Project"
  },
  {
    keyword: "puraniks abitante bavdhan",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-fiore",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "Core Project"
  },
  {
    keyword: "abitante fiore bavdhan pune",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-fiore",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "9/10",
    silo: "Core Project"
  },
  {
    keyword: "puraniks abitante phase 2",
    intent: "Brand Navigational",
    assignedUrl: "/puraniks-abitante-fiore",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "9/10",
    silo: "Core Project"
  },
  {
    keyword: "puraniks abitante official website",
    intent: "Navigational",
    assignedUrl: "/puraniks-abitante-fiore",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "Core Project"
  },

  // ==========================================
  // SILO 2: PRICE, COST & COMMERCIAL INTENTS
  // ==========================================
  {
    keyword: "puraniks abitante fiore price",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-price",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante fiore price list",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-fiore-price",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante cost sheet 2026",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-price",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante flat price pune",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-fiore-price",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "9/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante all inclusive price",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-price",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "9/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante zero stamp duty offer",
    intent: "Commercial Offer",
    assignedUrl: "/puraniks-abitante-fiore-payment-plan",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "Price & Cost"
  },

  // ==========================================
  // SILO 3: 1 BHK CONFIGURATION CLUSTER
  // ==========================================
  {
    keyword: "puraniks abitante fiore 1 bhk",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-1-bhk",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "1 BHK Configuration"
  },
  {
    keyword: "puraniks abitante fiore 1 bhk price",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-1-bhk",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "1 BHK Configuration"
  },
  {
    keyword: "puraniks abitante 1 bhk floor plan",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-fiore-1-bhk",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "9/10",
    silo: "1 BHK Configuration"
  },
  {
    keyword: "1 bhk flats in bavdhan pune",
    intent: "Commercial Investigation",
    assignedUrl: "/bavdhan-1-bhk",
    layer: "Layer 2: Locality Authority",
    priority: "P2 Authority",
    conversionScore: "8/10",
    silo: "1 BHK Configuration"
  },
  {
    keyword: "affordable 1 bhk flats bavdhan",
    intent: "Transactional",
    assignedUrl: "/bavdhan-1-bhk",
    layer: "Layer 2: Locality Authority",
    priority: "P2 Authority",
    conversionScore: "8/10",
    silo: "1 BHK Configuration"
  },

  // ==========================================
  // SILO 4: 2 BHK & 2 BHK SMART (BIGGEST CLUSTER)
  // ==========================================
  {
    keyword: "puraniks abitante fiore 2 bhk",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-2-bhk",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "2 BHK Configuration"
  },
  {
    keyword: "puraniks abitante fiore 2 bhk smart price",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-2-bhk",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "2 BHK Configuration"
  },
  {
    keyword: "puraniks abitante fiore 2 bhk floor plan 596 sq ft",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-fiore-2-bhk",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "2 BHK Configuration"
  },
  {
    keyword: "2 bhk flats in bavdhan pune",
    intent: "Commercial Investigation",
    assignedUrl: "/bavdhan-2-bhk",
    layer: "Layer 2: Locality Authority",
    priority: "P1 Money",
    conversionScore: "9/10",
    silo: "2 BHK Configuration"
  },
  {
    keyword: "2 bhk flats near chandani chowk pune",
    intent: "Commercial Investigation",
    assignedUrl: "/bavdhan-2-bhk",
    layer: "Layer 2: Locality Authority",
    priority: "P1 Money",
    conversionScore: "9/10",
    silo: "2 BHK Configuration"
  },
  {
    keyword: "2 bhk near hinjewadi it park bavdhan",
    intent: "Commercial Investigation",
    assignedUrl: "/bavdhan-2-bhk",
    layer: "Layer 3: Regional Authority",
    priority: "P2 Authority",
    conversionScore: "8/10",
    silo: "2 BHK Configuration"
  },

  // ==========================================
  // SILO 5: 3 BHK IMPERIAL RESIDENCES
  // ==========================================
  {
    keyword: "puraniks abitante fiore 3 bhk",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-3-bhk",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "3 BHK Configuration"
  },
  {
    keyword: "puraniks abitante fiore 3 bhk price",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-3-bhk",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "3 BHK Configuration"
  },
  {
    keyword: "3 bhk luxury flats in bavdhan",
    intent: "Commercial Investigation",
    assignedUrl: "/bavdhan-3-bhk",
    layer: "Layer 2: Locality Authority",
    priority: "P2 Authority",
    conversionScore: "9/10",
    silo: "3 BHK Configuration"
  },
  {
    keyword: "3 bhk near kothrud west pune",
    intent: "Commercial Investigation",
    assignedUrl: "/bavdhan-3-bhk",
    layer: "Layer 3: Regional Authority",
    priority: "P2 Authority",
    conversionScore: "8/10",
    silo: "3 BHK Configuration"
  },

  // ==========================================
  // SILO 6: FLOOR PLANS & MASTER BLUEPRINT
  // ==========================================
  {
    keyword: "puraniks abitante fiore floor plans",
    intent: "Informational / Commercial",
    assignedUrl: "/puraniks-abitante-fiore-floor-plans",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "9/10",
    silo: "Floor Plans"
  },
  {
    keyword: "puraniks abitante master plan layout 45 acres",
    intent: "Informational",
    assignedUrl: "/puraniks-abitante-fiore-master-plan",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "9/10",
    silo: "Floor Plans"
  },
  {
    keyword: "puraniks abitante carpet area details",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-fiore-floor-plans",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "9/10",
    silo: "Floor Plans"
  },

  // ==========================================
  // SILO 7: MAHARERA & LEGAL TRUST (VERIFIED)
  // ==========================================
  {
    keyword: "puraniks abitante fiore rera number",
    intent: "Legal Verification",
    assignedUrl: "/puraniks-abitante-fiore-rera",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "MahaRERA Trust"
  },
  {
    keyword: "puraniks abitante phase 2a rera p52100020202",
    intent: "Verification",
    assignedUrl: "/puraniks-abitante-fiore-rera",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "MahaRERA Trust"
  },
  {
    keyword: "puraniks abitante phase 2b rera p52100020238",
    intent: "Verification",
    assignedUrl: "/puraniks-abitante-fiore-rera",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "MahaRERA Trust"
  },
  {
    keyword: "puraniks abitante phase 2c rera p52100048353",
    intent: "Verification",
    assignedUrl: "/puraniks-abitante-fiore-rera",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "MahaRERA Trust"
  },
  {
    keyword: "puraniks abitante phase 2c1 rera p52100049352",
    intent: "Verification",
    assignedUrl: "/puraniks-abitante-fiore-rera",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "MahaRERA Trust"
  },
  {
    keyword: "puraniks abitante possession date",
    intent: "Transactional / Timeline",
    assignedUrl: "/puraniks-abitante-fiore-possession",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "MahaRERA Trust"
  },
  {
    keyword: "puraniks abitante construction progress september 2026",
    intent: "Freshness / Progress",
    assignedUrl: "/puraniks-abitante-fiore-construction-status",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "9/10",
    silo: "MahaRERA Trust"
  },

  // ==========================================
  // SILO 8: BAVDHAN LOCALITY & TRANSIT
  // ==========================================
  {
    keyword: "puraniks abitante fiore bavdhan location",
    intent: "Navigational / Maps",
    assignedUrl: "/puraniks-abitante-fiore-location",
    layer: "Layer 1: Project Authority",
    priority: "P1 Money",
    conversionScore: "9/10",
    silo: "Location & Transit"
  },
  {
    keyword: "bavdhan real estate pune",
    intent: "Broad Commercial",
    assignedUrl: "/bavdhan-real-estate",
    layer: "Layer 2: Locality Authority",
    priority: "P2 Authority",
    conversionScore: "8/10",
    silo: "Location & Transit"
  },
  {
    keyword: "bavdhan property rates 2026",
    intent: "Informational / Market Research",
    assignedUrl: "/bavdhan-property-prices",
    layer: "Layer 2: Locality Authority",
    priority: "P2 Authority",
    conversionScore: "8/10",
    silo: "Location & Transit"
  },
  {
    keyword: "bavdhan to hinjewadi it park travel time",
    intent: "Transit Inquiry",
    assignedUrl: "/bavdhan-connectivity",
    layer: "Layer 2: Locality Authority",
    priority: "P2 Authority",
    conversionScore: "7/10",
    silo: "Location & Transit"
  },
  {
    keyword: "bavdhan to chandani chowk distance",
    intent: "Transit Inquiry",
    assignedUrl: "/bavdhan-connectivity",
    layer: "Layer 2: Locality Authority",
    priority: "P2 Authority",
    conversionScore: "7/10",
    silo: "Location & Transit"
  },
  {
    keyword: "schools near bavdhan pune",
    intent: "Local Amenity Inquiry",
    assignedUrl: "/bavdhan-connectivity",
    layer: "Layer 2: Locality Authority",
    priority: "P3 Long-Tail",
    conversionScore: "6/10",
    silo: "Location & Transit"
  },

  // ==========================================
  // SILO 9: INVESTMENT, COMPARISON & ROI
  // ==========================================
  {
    keyword: "puraniks abitante fiore investment review",
    intent: "Investment Research",
    assignedUrl: "/puraniks-abitante-fiore-investment",
    layer: "Layer 1: Project Authority",
    priority: "P2 Authority",
    conversionScore: "9/10",
    silo: "Investment & ROI"
  },
  {
    keyword: "bavdhan vs kothrud property prices",
    intent: "Locality Comparison",
    assignedUrl: "/bavdhan-real-estate",
    layer: "Layer 3: Regional Authority",
    priority: "P2 Authority",
    conversionScore: "8/10",
    silo: "Investment & ROI"
  },
  {
    keyword: "bavdhan vs baner real estate comparison",
    intent: "Locality Comparison",
    assignedUrl: "/bavdhan-real-estate",
    layer: "Layer 3: Regional Authority",
    priority: "P2 Authority",
    conversionScore: "8/10",
    silo: "Investment & ROI"
  },
  {
    keyword: "nri property investment in pune west",
    intent: "NRI High Net Worth",
    assignedUrl: "/puraniks-abitante-fiore-investment",
    layer: "Layer 3: Regional Authority",
    priority: "P1 Money",
    conversionScore: "10/10",
    silo: "Investment & ROI"
  },

  // ==========================================
  // SILO 10: BUYER GUIDES & DEVELOPER E-E-A-T
  // ==========================================
  {
    keyword: "puranik builders reviews pune",
    intent: "Reputation / E-E-A-T",
    assignedUrl: "/puranik-builders",
    layer: "Layer 1: Project Authority",
    priority: "P2 Authority",
    conversionScore: "8/10",
    silo: "Developer Heritage"
  },
  {
    keyword: "how to verify maharera project details pune",
    intent: "Informational Guide",
    assignedUrl: "/puraniks-abitante-fiore-rera",
    layer: "Layer 3: Regional Authority",
    priority: "P3 Long-Tail",
    conversionScore: "7/10",
    silo: "Buyer Guides"
  },
  {
    keyword: "things to check before buying a flat in bavdhan",
    intent: "Informational Guide",
    assignedUrl: "/bavdhan-real-estate",
    layer: "Layer 2: Locality Authority",
    priority: "P2 Authority",
    conversionScore: "8/10",
    silo: "Buyer Guides"
  }
];
