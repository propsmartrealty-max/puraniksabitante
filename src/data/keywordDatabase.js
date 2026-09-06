/**
 * Master Keyword Database & Search Intent Mapping Engine
 * Puraniks Abitante Fiore Bavdhan - Full 31-Tier Keyword Ecosystem & 4 Authority Priority Layers
 * 
 * Verified against:
 * 1. Puranik Builders Ltd. Official Developer Disclosures
 * 2. MahaRERA Official Registry (Phase 2A, 2B, 2C, 2C1)
 * 3. West Pune Submarket & AI/GEO Search Patterns
 */

export const THREE_LAYER_AUTHORITY = {
  layer1: {
    name: "Layer 1: Project & Brand Authority",
    target: "Brand, Phases, Money & MahaRERA Searches",
    share: "35%",
    description: "Captures high-converting buyers specifically searching for Puraniks Abitante Fiore, Phase II, RERA numbers, 1/2/2.5/3 BHK layouts, and developer cost sheets."
  },
  layer2: {
    name: "Layer 2: Locality & Transit Authority",
    target: "Bavdhan, Chandani Chowk, Schools & Hospitals",
    share: "40%",
    description: "Captures high-intent property seekers in Bavdhan Budruk, Chandani Chowk, Kothrud, Pashan, Baner, and Hinjewadi IT commuters."
  },
  layer3: {
    name: "Layer 3: Comparison, Investment & AI/GEO",
    target: "ROI, Resale, Rentals & Natural Language Prompts",
    share: "25%",
    description: "Captures AI search citations (ChatGPT, Perplexity, Google AI Overviews), competitor comparisons (Ganga Legend, Rohan Madhuban), and investor queries."
  }
};

export const KEYWORD_TIERS = {
  tier1: {
    name: "Tier 1: Direct Money & Transactional",
    badge: "🔴 P1 MONEY",
    description: "Queries with immediate purchase, booking, or pricing intent."
  },
  tier2: {
    name: "Tier 2: Commercial Research & Verification",
    badge: "🟠 P2 RESEARCH",
    description: "Detailed floor plans, MahaRERA registrations, possession timelines, and construction progress."
  },
  tier3: {
    name: "Tier 3: Locality & Submarket Authority",
    badge: "🟡 P3 LOCALITY",
    description: "Bavdhan property rates, schools, hospitals, connectivity, and livability indices."
  },
  tier4: {
    name: "Tier 4: AI Engine & Conversational GEO",
    badge: "🟢 P4 AI / GEO",
    description: "Long-tail conversational prompts for Google AI Overviews, ChatGPT Search, and Perplexity AI."
  }
};

export const MASTER_KEYWORD_DATABASE = [
  // ==========================================================================
  // TIER 1: CORE BRAND & DIRECT MONEY QUERIES (Roadmap Points 1 & 2)
  // ==========================================================================
  {
    keyword: "puraniks abitante fiore",
    intent: "Navigational / Transactional",
    assignedUrl: "/puraniks-abitante-fiore",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Core Brand"
  },
  {
    keyword: "puraniks abitante fiore pune",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-fiore",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Core Brand"
  },
  {
    keyword: "puraniks abitante fiore bavdhan",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-bavdhan",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Core Brand"
  },
  {
    keyword: "puraniks abitante fiore bavdhan pune",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-bavdhan",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Core Brand"
  },
  {
    keyword: "puranik abitante fiore",
    intent: "Navigational",
    assignedUrl: "/puraniks-abitante-fiore",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "9/10",
    silo: "Core Brand"
  },
  {
    keyword: "puraniks abitante fiore bavdhan budruk",
    intent: "Hyperlocal Navigational",
    assignedUrl: "/puraniks-abitante-bavdhan",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Core Brand"
  },
  {
    keyword: "abitante fiore pune",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-pune",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "9/10",
    silo: "Core Brand"
  },
  {
    keyword: "abitante fiore bavdhan",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-fiore-bavdhan",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Core Brand"
  },
  {
    keyword: "puraniks fiore",
    intent: "Brand Navigational",
    assignedUrl: "/puraniks-fiore",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "9/10",
    silo: "Core Brand"
  },
  {
    keyword: "puranik fiore bavdhan",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-fiore",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "9/10",
    silo: "Core Brand"
  },
  {
    keyword: "puraniks abitante",
    intent: "Brand Primary",
    assignedUrl: "/puraniks-abitante",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Core Brand"
  },
  {
    keyword: "puraniks abitante phase 2",
    intent: "Brand Navigational",
    assignedUrl: "/puraniks-abitante-phase-2",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Core Brand"
  },
  {
    keyword: "puraniks abitante phase ii",
    intent: "Brand Navigational",
    assignedUrl: "/puraniks-abitante-phase-ii",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Core Brand"
  },
  {
    keyword: "puraniks abitante fiore phase 2",
    intent: "Brand Navigational",
    assignedUrl: "/puraniks-abitante-phase-2",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Core Brand"
  },
  {
    keyword: "puraniks abitante fiore flats",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Core Brand"
  },
  {
    keyword: "puraniks abitante fiore apartments",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-fiore",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "9/10",
    silo: "Core Brand"
  },
  {
    keyword: "puraniks abitante fiore township",
    intent: "Informational / Commercial",
    assignedUrl: "/puraniks-abitante",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "9/10",
    silo: "Core Brand"
  },
  {
    keyword: "puraniks abitante fiore gated community",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-fiore",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "9/10",
    silo: "Core Brand"
  },
  {
    keyword: "puraniks abitante fiore luxury apartments",
    intent: "High-Ticket Commercial",
    assignedUrl: "/puraniks-abitante-fiore",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Core Brand"
  },

  // Money & Price Queries (Roadmap Point 2)
  {
    keyword: "puraniks abitante fiore price",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-price",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante fiore price list",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-fiore-price",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante fiore flats price",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-price",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante fiore 2 bhk price",
    intent: "High-Intent Commercial",
    assignedUrl: "/puraniks-abitante-fiore-2-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante fiore 2.5 bhk price",
    intent: "High-Intent Commercial",
    assignedUrl: "/puraniks-abitante-fiore-2-5-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante fiore 3 bhk price",
    intent: "High-Intent Commercial",
    assignedUrl: "/puraniks-abitante-fiore-3-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante fiore cost",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-cost-sheet",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante fiore price per sq ft",
    intent: "Analytical Commercial",
    assignedUrl: "/puraniks-abitante-rate-per-sq-ft",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "9/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante fiore rate per sq ft",
    intent: "Analytical Commercial",
    assignedUrl: "/puraniks-abitante-rate-per-sq-ft",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "9/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante fiore booking",
    intent: "Transactional",
    assignedUrl: "/abitante-fiore-booking",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante fiore availability",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "9/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante fiore current price",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-price",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante fiore offer",
    intent: "Transactional",
    assignedUrl: "/abitante-fiore-offers",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante fiore payment plan",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-payment-plan",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "9/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante fiore cost sheet",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-cost-sheet",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante fiore price breakup",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-all-inclusive-price",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "9/10",
    silo: "Price & Cost"
  },
  {
    keyword: "puraniks abitante fiore site visit",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-sales-office",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Price & Cost"
  },

  // ==========================================================================
  // CONFIGURATION SILOS (Roadmap Points 3, 4, 5, 6, 19)
  // ==========================================================================
  // 1 BHK Ecosystem (Roadmap Point 3)
  {
    keyword: "puraniks abitante fiore 1 bhk",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-1-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "1 BHK Configuration"
  },
  {
    keyword: "abitante fiore 1 bhk",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-fiore-1-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "1 BHK Configuration"
  },
  {
    keyword: "1 bhk abitante fiore bavdhan",
    intent: "Hyperlocal Commercial",
    assignedUrl: "/puraniks-abitante-1-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "1 BHK Configuration"
  },
  {
    keyword: "1 bhk flats in abitante fiore",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-1-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "9/10",
    silo: "1 BHK Configuration"
  },
  {
    keyword: "1 bhk for sale bavdhan",
    intent: "Locality Commercial",
    assignedUrl: "/1-bhk-flats-bavdhan",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "9/10",
    silo: "1 BHK Configuration"
  },
  {
    keyword: "affordable 1 bhk bavdhan",
    intent: "Commercial Investigation",
    assignedUrl: "/1-bhk-flats-bavdhan",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "8/10",
    silo: "1 BHK Configuration"
  },

  // 2 BHK Ecosystem (Roadmap Point 4)
  {
    keyword: "puraniks abitante fiore 2 bhk",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-2-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "2 BHK Configuration"
  },
  {
    keyword: "abitante fiore 2 bhk",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-fiore-2-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "2 BHK Configuration"
  },
  {
    keyword: "2 bhk abitante fiore bavdhan",
    intent: "Hyperlocal Commercial",
    assignedUrl: "/puraniks-abitante-2-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "2 BHK Configuration"
  },
  {
    keyword: "2 bhk flats abitante fiore",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-2-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "2 BHK Configuration"
  },
  {
    keyword: "2 bhk flats bavdhan pune",
    intent: "Locality Commercial",
    assignedUrl: "/2-bhk-flats-bavdhan",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "9/10",
    silo: "2 BHK Configuration"
  },
  {
    keyword: "puraniks abitante fiore 2 bhk for sale",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-2-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "2 BHK Configuration"
  },
  {
    keyword: "puraniks abitante fiore 2 bhk carpet area",
    intent: "Commercial Verification",
    assignedUrl: "/puraniks-abitante-carpet-area",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "2 BHK Configuration"
  },

  // 2.5 BHK Ecosystem (Roadmap Point 5)
  {
    keyword: "puraniks abitante fiore 2.5 bhk",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-2-5-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "2.5 BHK Configuration"
  },
  {
    keyword: "abitante fiore 2.5 bhk",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-fiore-2-5-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "2.5 BHK Configuration"
  },
  {
    keyword: "2.5 bhk abitante fiore bavdhan",
    intent: "Hyperlocal Commercial",
    assignedUrl: "/puraniks-abitante-2-5-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "2.5 BHK Configuration"
  },
  {
    keyword: "2.5 bhk flats bavdhan",
    intent: "Locality Commercial",
    assignedUrl: "/puraniks-abitante-2-5-bhk",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "9/10",
    silo: "2.5 BHK Configuration"
  },
  {
    keyword: "spacious 2.5 bhk bavdhan",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-2-5-bhk",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "8/10",
    silo: "2.5 BHK Configuration"
  },
  {
    keyword: "2.5 bhk near kothrud",
    intent: "Micro-Location Search",
    assignedUrl: "/flats-near-kothrud",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "9/10",
    silo: "2.5 BHK Configuration"
  },
  {
    keyword: "2.5 bhk near chandni chowk",
    intent: "Micro-Location Search",
    assignedUrl: "/flats-near-chandani-chowk",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "9/10",
    silo: "2.5 BHK Configuration"
  },

  // 3 BHK Ecosystem (Roadmap Point 6)
  {
    keyword: "puraniks abitante fiore 3 bhk",
    intent: "Transactional",
    assignedUrl: "/puraniks-abitante-fiore-3-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "3 BHK Configuration"
  },
  {
    keyword: "abitante fiore 3 bhk",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-fiore-3-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "3 BHK Configuration"
  },
  {
    keyword: "3 bhk abitante fiore bavdhan",
    intent: "Hyperlocal Commercial",
    assignedUrl: "/puraniks-abitante-3-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "3 BHK Configuration"
  },
  {
    keyword: "3 bhk flats bavdhan pune",
    intent: "Locality Commercial",
    assignedUrl: "/3-bhk-flats-bavdhan",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "9/10",
    silo: "3 BHK Configuration"
  },
  {
    keyword: "premium 3 bhk bavdhan",
    intent: "High-Ticket Commercial",
    assignedUrl: "/3-bhk-flats-bavdhan",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "9/10",
    silo: "3 BHK Configuration"
  },
  {
    keyword: "puraniks abitante fiore luxury 3 bhk",
    intent: "High-Ticket Commercial",
    assignedUrl: "/puraniks-abitante-fiore-3-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "3 BHK Configuration"
  },

  // Specific Carpet Matrix Queries (Roadmap Point 19)
  {
    keyword: "692 sq ft 2 bhk abitante fiore",
    intent: "Ultra-Specific Commercial",
    assignedUrl: "/puraniks-abitante-692-sq-ft-2-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Carpet Area Matrix"
  },
  {
    keyword: "733 sq ft 2 bhk abitante fiore",
    intent: "Ultra-Specific Commercial",
    assignedUrl: "/puraniks-abitante-733-sq-ft-2-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Carpet Area Matrix"
  },
  {
    keyword: "867 sq ft 2.5 bhk abitante fiore",
    intent: "Ultra-Specific Commercial",
    assignedUrl: "/puraniks-abitante-867-sq-ft-2-5-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Carpet Area Matrix"
  },
  {
    keyword: "908 sq ft 2.5 bhk abitante fiore",
    intent: "Ultra-Specific Commercial",
    assignedUrl: "/puraniks-abitante-908-sq-ft-2-5-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Carpet Area Matrix"
  },
  {
    keyword: "1113 sq ft 3 bhk abitante fiore",
    intent: "Ultra-Specific Commercial",
    assignedUrl: "/puraniks-abitante-1113-sq-ft-3-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Carpet Area Matrix"
  },
  {
    keyword: "abitante fiore jodi flats",
    intent: "Combined Unit Commercial",
    assignedUrl: "/puraniks-abitante-jodi-flats",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "8/10",
    silo: "Floor Plans"
  },

  // ==========================================================================
  // FLOOR PLANS & MASTER BLUEPRINTS (Roadmap Point 7)
  // ==========================================================================
  {
    keyword: "puraniks abitante fiore floor plan",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-floor-plans",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "10/10",
    silo: "Floor Plans"
  },
  {
    keyword: "abitante fiore 1 bhk floor plan",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-1-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Floor Plans"
  },
  {
    keyword: "abitante fiore 2 bhk floor plan",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-2-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "10/10",
    silo: "Floor Plans"
  },
  {
    keyword: "abitante fiore 2.5 bhk floor plan",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-2-5-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Floor Plans"
  },
  {
    keyword: "abitante fiore 3 bhk floor plan",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-3-bhk",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Floor Plans"
  },
  {
    keyword: "puraniks abitante fiore master plan",
    intent: "Commercial Investigation",
    assignedUrl: "/puraniks-abitante-fiore-master-plan",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Floor Plans"
  },
  {
    keyword: "abitante fiore carpet area",
    intent: "RERA Verification",
    assignedUrl: "/puraniks-abitante-carpet-area",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Floor Plans"
  },

  // ==========================================================================
  // MAHARERA & 4-PHASE AUTHORITY (Roadmap Points 8 & 9)
  // ==========================================================================
  {
    keyword: "puraniks abitante fiore rera",
    intent: "Legal Verification",
    assignedUrl: "/puraniks-abitante-fiore-rera",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "10/10",
    silo: "MahaRERA & Legal"
  },
  {
    keyword: "abitante fiore maharera",
    intent: "Legal Verification",
    assignedUrl: "/puraniks-abitante-rera",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "10/10",
    silo: "MahaRERA & Legal"
  },
  {
    keyword: "p52100020202",
    intent: "RERA Code Search",
    assignedUrl: "/p52100020202",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "10/10",
    silo: "MahaRERA & Legal"
  },
  {
    keyword: "p52100020238",
    intent: "RERA Code Search",
    assignedUrl: "/p52100020238",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "10/10",
    silo: "MahaRERA & Legal"
  },
  {
    keyword: "p52100048353",
    intent: "RERA Code Search",
    assignedUrl: "/p52100048353",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "10/10",
    silo: "MahaRERA & Legal"
  },
  {
    keyword: "p52100049352",
    intent: "RERA Code Search",
    assignedUrl: "/p52100049352",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "10/10",
    silo: "MahaRERA & Legal"
  },
  {
    keyword: "puraniks abitante fiore phase 2a rera",
    intent: "Phase Verification",
    assignedUrl: "/puraniks-abitante-rera-phase-2a",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "MahaRERA & Legal"
  },
  {
    keyword: "puraniks abitante fiore phase 2b rera",
    intent: "Phase Verification",
    assignedUrl: "/puraniks-abitante-rera-phase-2b",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "MahaRERA & Legal"
  },
  {
    keyword: "puraniks abitante fiore phase 2c rera",
    intent: "Phase Verification",
    assignedUrl: "/puraniks-abitante-rera-phase-2c",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "MahaRERA & Legal"
  },
  {
    keyword: "puraniks abitante fiore phase 2c1 rera",
    intent: "Phase Verification",
    assignedUrl: "/puraniks-abitante-rera-phase-2c1",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "MahaRERA & Legal"
  },
  {
    keyword: "abitante fiore possession date",
    intent: "Possession Timeline",
    assignedUrl: "/puraniks-abitante-fiore-possession",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "10/10",
    silo: "MahaRERA & Legal"
  },
  {
    keyword: "abitante fiore construction status",
    intent: "Live Construction Status",
    assignedUrl: "/puraniks-abitante-fiore-construction-status",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "10/10",
    silo: "MahaRERA & Legal"
  },

  // ==========================================================================
  // LOCATION, MICRO-LOCATION & TRANSIT (Roadmap Points 10, 11, 12)
  // ==========================================================================
  {
    keyword: "puraniks abitante fiore bavdhan",
    intent: "Hyperlocal Commercial",
    assignedUrl: "/puraniks-abitante-fiore-location",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "10/10",
    silo: "Location & Transit"
  },
  {
    keyword: "flats near chandni chowk pune",
    intent: "Micro-Location Commercial",
    assignedUrl: "/flats-near-chandani-chowk",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "9/10",
    silo: "Location & Transit"
  },
  {
    keyword: "flats near hinjewadi it park",
    intent: "Commuter Commercial",
    assignedUrl: "/flats-near-hinjewadi-it-park",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "9/10",
    silo: "Location & Transit"
  },
  {
    keyword: "flats near kothrud",
    intent: "Adjacent Submarket Search",
    assignedUrl: "/flats-near-kothrud",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "9/10",
    silo: "Location & Transit"
  },
  {
    keyword: "flats near pashan",
    intent: "Adjacent Submarket Search",
    assignedUrl: "/flats-near-pashan",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "8/10",
    silo: "Location & Transit"
  },
  {
    keyword: "flats near baner",
    intent: "Adjacent Submarket Search",
    assignedUrl: "/flats-near-baner",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "8/10",
    silo: "Location & Transit"
  },
  {
    keyword: "flats near mumbai bangalore highway pune",
    intent: "Transit Arterial Search",
    assignedUrl: "/flats-near-mumbai-bangalore-highway",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "8/10",
    silo: "Location & Transit"
  },
  {
    keyword: "bavdhan connectivity",
    intent: "Transit Infrastructure",
    assignedUrl: "/bavdhan-connectivity",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "8/10",
    silo: "Location & Transit"
  },

  // ==========================================================================
  // AMENITIES, GREEN LIVING & DIFFERENTIATION (Roadmap Points 13 & 14)
  // ==========================================================================
  {
    keyword: "puraniks abitante fiore amenities",
    intent: "Lifestyle Commercial",
    assignedUrl: "/puraniks-abitante-fiore-amenities",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Amenities & Lifestyle"
  },
  {
    keyword: "club azzurro bavdhan",
    intent: "Clubhouse Navigational",
    assignedUrl: "/club-azzurro-bavdhan",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "8/10",
    silo: "Amenities & Lifestyle"
  },
  {
    keyword: "green homes bavdhan",
    intent: "Eco Lifestyle Commercial",
    assignedUrl: "/nature-inspired-homes-bavdhan",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "9/10",
    silo: "Green Living"
  },
  {
    keyword: "nature inspired homes bavdhan",
    intent: "Lifestyle Differentiation",
    assignedUrl: "/nature-inspired-homes-bavdhan",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "9/10",
    silo: "Green Living"
  },
  {
    keyword: "apartments with balcony garden pune",
    intent: "Architectural Feature",
    assignedUrl: "/balcony-garden-flats-pune",
    layer: "Layer 3: Regional Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "9/10",
    silo: "Green Living"
  },
  {
    keyword: "oxygen rich homes bavdhan",
    intent: "Health & Wellness Differentiation",
    assignedUrl: "/oxygen-rich-homes-bavdhan",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Green Living"
  },
  {
    keyword: "green apartments pune",
    intent: "Regional Sustainability",
    assignedUrl: "/green-apartments-pune",
    layer: "Layer 3: Regional Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "8/10",
    silo: "Green Living"
  },

  // ==========================================================================
  // CIVIC INFRASTRUCTURE: SCHOOLS, HOSPITALS, GOLF (Roadmap Points 15, 16, 17, 18)
  // ==========================================================================
  {
    keyword: "schools near puraniks abitante",
    intent: "Social Infrastructure",
    assignedUrl: "/schools-near-puraniks-abitante",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "9/10",
    silo: "Civic Infrastructure"
  },
  {
    keyword: "bavdhan schools",
    intent: "Education Guide",
    assignedUrl: "/bavdhan-schools",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "8/10",
    silo: "Civic Infrastructure"
  },
  {
    keyword: "bavdhan hospitals",
    intent: "Healthcare Guide",
    assignedUrl: "/bavdhan-hospitals",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "8/10",
    silo: "Civic Infrastructure"
  },
  {
    keyword: "oxford golf resort bavdhan",
    intent: "Leisure Landmark",
    assignedUrl: "/oxford-golf-resort-bavdhan",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "8/10",
    silo: "Civic Infrastructure"
  },
  {
    keyword: "shopping near bavdhan",
    intent: "Retail Infrastructure",
    assignedUrl: "/shopping-near-bavdhan",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "7/10",
    silo: "Civic Infrastructure"
  },

  // ==========================================================================
  // RESALE & RENTAL ECOSYSTEMS (Roadmap Points 20 & 21)
  // ==========================================================================
  {
    keyword: "puraniks abitante fiore resale",
    intent: "Secondary Market Commercial",
    assignedUrl: "/puraniks-abitante-fiore-resale",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "9/10",
    silo: "Resale Ecosystem"
  },
  {
    keyword: "abitante fiore resale flats",
    intent: "Secondary Market Commercial",
    assignedUrl: "/puraniks-abitante-resale",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "9/10",
    silo: "Resale Ecosystem"
  },
  {
    keyword: "resale flats bavdhan",
    intent: "Locality Secondary Market",
    assignedUrl: "/resale-flats-bavdhan",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "8/10",
    silo: "Resale Ecosystem"
  },
  {
    keyword: "puraniks abitante fiore rent",
    intent: "Rental Transactional",
    assignedUrl: "/puraniks-abitante-fiore-rent",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "9/10",
    silo: "Rental Ecosystem"
  },
  {
    keyword: "abitante fiore 2 bhk rent",
    intent: "Rental Transactional",
    assignedUrl: "/puraniks-abitante-rent",
    layer: "Layer 1: Project Authority",
    priority: "Tier 1: Direct Money",
    conversionScore: "9/10",
    silo: "Rental Ecosystem"
  },
  {
    keyword: "flats for rent bavdhan",
    intent: "Locality Rental Search",
    assignedUrl: "/flats-for-rent-bavdhan",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "8/10",
    silo: "Rental Ecosystem"
  },

  // ==========================================================================
  // INVESTMENT, ROI & DEVELOPER HERITAGE (Roadmap Points 22 & 23)
  // ==========================================================================
  {
    keyword: "puraniks abitante fiore investment",
    intent: "Investor Analysis",
    assignedUrl: "/puraniks-abitante-fiore-investment",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Investment & ROI"
  },
  {
    keyword: "bavdhan real estate investment",
    intent: "Submarket Investment",
    assignedUrl: "/bavdhan-real-estate-investment",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "8/10",
    silo: "Investment & ROI"
  },
  {
    keyword: "nri property investment pune",
    intent: "NRI High Net Worth",
    assignedUrl: "/nri-property-investment-pune",
    layer: "Layer 3: Regional Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Investment & ROI"
  },
  {
    keyword: "puranik builders",
    intent: "Developer Brand Authority",
    assignedUrl: "/puranik-builders",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Developer Heritage"
  },
  {
    keyword: "puranik builders pune projects",
    intent: "Developer Portfolio",
    assignedUrl: "/puranik-builders-pune",
    layer: "Layer 1: Project Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Developer Heritage"
  },

  // ==========================================================================
  // COMPETITOR & SUBMARKET COMPARISONS (Roadmap Point 24)
  // ==========================================================================
  {
    keyword: "abitante fiore vs kothrud flats",
    intent: "Comparative Investigation",
    assignedUrl: "/puraniks-abitante-vs-kothrud",
    layer: "Layer 3: Regional Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Comparisons"
  },
  {
    keyword: "abitante fiore vs baner",
    intent: "Comparative Investigation",
    assignedUrl: "/puraniks-abitante-vs-baner",
    layer: "Layer 3: Regional Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "8/10",
    silo: "Comparisons"
  },
  {
    keyword: "abitante fiore vs pashan",
    intent: "Comparative Investigation",
    assignedUrl: "/puraniks-abitante-vs-pashan",
    layer: "Layer 3: Regional Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "8/10",
    silo: "Comparisons"
  },
  {
    keyword: "abitante fiore vs goel ganga legend",
    intent: "Direct Competitor Comparison",
    assignedUrl: "/puraniks-abitante-vs-goel-ganga-legend",
    layer: "Layer 3: Regional Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Comparisons"
  },
  {
    keyword: "abitante fiore vs rohan madhuban",
    intent: "Direct Competitor Comparison",
    assignedUrl: "/puraniks-abitante-vs-rohan-madhuban",
    layer: "Layer 3: Regional Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "9/10",
    silo: "Comparisons"
  },
  {
    keyword: "abitante fiore vs kolte patil",
    intent: "Direct Competitor Comparison",
    assignedUrl: "/puraniks-abitante-vs-kolte-patil",
    layer: "Layer 3: Regional Authority",
    priority: "Tier 2: Commercial Research",
    conversionScore: "8/10",
    silo: "Comparisons"
  },
  {
    keyword: "best projects in bavdhan",
    intent: "Authority Recommendation",
    assignedUrl: "/best-projects-in-bavdhan",
    layer: "Layer 2: Locality Authority",
    priority: "Tier 3: Locality Authority",
    conversionScore: "9/10",
    silo: "Comparisons"
  },

  // ==========================================================================
  // HIGH-INTENT FAQ & AI / GEO PROMPT KEYWORDS (Roadmap Points 26 & 27)
  // ==========================================================================
  {
    keyword: "best 2 bhk in bavdhan pune",
    intent: "AI / GEO Prompt",
    assignedUrl: "/puraniks-abitante-fiore-2-bhk",
    layer: "Layer 3: Regional Authority",
    priority: "Tier 4: AI Engine & GEO",
    conversionScore: "10/10",
    silo: "AI & GEO Queries"
  },
  {
    keyword: "best 3 bhk in bavdhan pune",
    intent: "AI / GEO Prompt",
    assignedUrl: "/puraniks-abitante-fiore-3-bhk",
    layer: "Layer 3: Regional Authority",
    priority: "Tier 4: AI Engine & GEO",
    conversionScore: "10/10",
    silo: "AI & GEO Queries"
  },
  {
    keyword: "best nature inspired apartments pune",
    intent: "AI / GEO Prompt",
    assignedUrl: "/nature-inspired-homes-bavdhan",
    layer: "Layer 3: Regional Authority",
    priority: "Tier 4: AI Engine & GEO",
    conversionScore: "9/10",
    silo: "AI & GEO Queries"
  },
  {
    keyword: "best apartments near chandni chowk",
    intent: "AI / GEO Prompt",
    assignedUrl: "/flats-near-chandani-chowk",
    layer: "Layer 3: Regional Authority",
    priority: "Tier 4: AI Engine & GEO",
    conversionScore: "9/10",
    silo: "AI & GEO Queries"
  },
  {
    keyword: "best homes for it professionals in west pune",
    intent: "AI / GEO Prompt",
    assignedUrl: "/flats-near-hinjewadi-it-park",
    layer: "Layer 3: Regional Authority",
    priority: "Tier 4: AI Engine & GEO",
    conversionScore: "9/10",
    silo: "AI & GEO Queries"
  },
  {
    keyword: "is puraniks abitante fiore good",
    intent: "Question / Review",
    assignedUrl: "/faq-puraniks-abitante",
    layer: "Layer 1: Project Authority",
    priority: "Tier 4: AI Engine & GEO",
    conversionScore: "9/10",
    silo: "FAQs & Questions"
  },
  {
    keyword: "what is the rera number of abitante fiore",
    intent: "Question / Fact Retrieval",
    assignedUrl: "/puraniks-abitante-rera",
    layer: "Layer 1: Project Authority",
    priority: "Tier 4: AI Engine & GEO",
    conversionScore: "10/10",
    silo: "FAQs & Questions"
  },
  {
    keyword: "what is the possession date of abitante fiore",
    intent: "Question / Fact Retrieval",
    assignedUrl: "/puraniks-abitante-possession",
    layer: "Layer 1: Project Authority",
    priority: "Tier 4: AI Engine & GEO",
    conversionScore: "10/10",
    silo: "FAQs & Questions"
  }
];
