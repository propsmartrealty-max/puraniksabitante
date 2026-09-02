// Authentic Project Assets & Data from https://abitantefiore.puranikbuilders.com/

export const BASE_URL = "https://abitantefiore.puranikbuilders.com";

export const ORIGINAL_IMAGES = {
  logo: `${BASE_URL}/images/logo.webp`,
  heroDesktopBanner: `${BASE_URL}/images/slider/pweb.webp`,
  heroMobileBanner: `${BASE_URL}/images/slider/pmob.webp`,
  interiorGallery: [
    `${BASE_URL}/images/gallery/interior/1.webp`,
    `${BASE_URL}/images/gallery/interior/2.webp`,
  ],
  masterPlan: `${BASE_URL}/images/gallery/master/1.webp`,
  unitPlans: [
    `${BASE_URL}/images/gallery/unit/1.webp`,
    `${BASE_URL}/images/gallery/unit/2.webp`,
    `${BASE_URL}/images/gallery/unit/3.webp`,
    `${BASE_URL}/images/gallery/unit/4.webp`,
    `${BASE_URL}/images/gallery/unit/5.webp`,
    `${BASE_URL}/images/gallery/unit/6.webp`,
    `${BASE_URL}/images/gallery/unit/7.webp`,
    `${BASE_URL}/images/gallery/unit/8.webp`,
  ],
  floorPlans: [
    `${BASE_URL}/images/gallery/floor/1.webp`,
    `${BASE_URL}/images/gallery/floor/2.webp`,
    `${BASE_URL}/images/gallery/floor/3.webp`,
    `${BASE_URL}/images/gallery/floor/4.webp`,
    `${BASE_URL}/images/gallery/floor/5.webp`,
    `${BASE_URL}/images/gallery/floor/6.webp`,
  ],
  locationMap: `${BASE_URL}/images/map.webp`,
  offerBanner: `${BASE_URL}/images/offer.webp`,
  statsIcons: {
    thumb: `${BASE_URL}/images/thumb.webp`,
    view: `${BASE_URL}/images/view.webp`,
    build: `${BASE_URL}/images/build.webp`,
    construction: `${BASE_URL}/images/const.webp`,
    mmr: `${BASE_URL}/images/mmr.webp`,
    devLogo: `${BASE_URL}/images/dev-logo-1.webp`,
  },
  barcodes: [
    `${BASE_URL}/images/barcode1.webp`,
    `${BASE_URL}/images/barcode2.webp`,
    `${BASE_URL}/images/barcode3.webp`,
    `${BASE_URL}/images/barcode4.webp`,
  ]
};

export const PROJECT_INFO = {
  name: "Puraniks Abitante Fiore",
  subTitle: "Abitante Fiore & Abitante Township",
  tagline: "Breathe Fresh Inside & Outside • 1, 2 & 3 BHK Oxygen-Rich Living in Bavdhan",
  developer: "Puranik Builders Ltd.",
  location: "Bavdhan Budruk, Pune - West Corridor",
  shortAddress: "Near Crystal Honda Service Station, Off Mumbai-Bangalore Highway, Bavdhan Budruk, Pune - 411021",
  landParcel: "45 Acres Integrated Hilltop Township",
  towers: "High-Rise Residential Wings with 1, 2 & 3 BHK Balcony Gardens",
  totalUnits: "1,800+ Residences",
  possession: "Ready & Ongoing Phases",
  reraNumber: "P52100020202 | P52100020238",
  reraUrl: "https://maharera.mahaonline.gov.in",
  startingPrice: "₹51.99 Lakhs*",
  startingPriceFormatted: "₹51.99 Lakhs Onwards",
  contactPhone: "+91 80689 76983",
  contactEmail: "sales@puranikbuilders.com",
  whatsappNumber: "918068976983",
  officialLogoUrl: ORIGINAL_IMAGES.logo,
  walkthroughVideoId: "WOPqlTKXMd8",
  walkthroughEmbedUrl: "https://www.youtube.com/embed/WOPqlTKXMd8",
  specialOffer: "Zero Stamp Duty & Registration",
  siteAddress: "Puraniks Abitante Fiore, Near Crystal Honda Service Station, Off Mumbai-Bangalore Highway, Bavdhan Budruk, Pune - 411021"
};

export const QUICK_STATS = [
  { label: "Township Extent", value: "45+", unit: "Acres", icon: ORIGINAL_IMAGES.statsIcons.build },
  { label: "Oxygen-Rich", value: "100%", unit: "Balcony Gardens", icon: ORIGINAL_IMAGES.statsIcons.view },
  { label: "Happy Families", value: "10,000+", unit: "Delivered", icon: ORIGINAL_IMAGES.statsIcons.thumb },
  { label: "Developer Legacy", value: "34+", unit: "Years Trust", icon: ORIGINAL_IMAGES.statsIcons.devLogo },
  { label: "Special Offer", value: "0%", unit: "Stamp Duty", icon: ORIGINAL_IMAGES.statsIcons.construction },
  { label: "Connectivity", value: "5 Min", unit: "To Chandani Chowk", icon: ORIGINAL_IMAGES.statsIcons.mmr },
];

export const ITALIAN_PILLARS = [
  {
    id: "lagoon",
    title: "Venetian Infinity Pool & Cabanas",
    italianTitle: "Laguna di Venezia",
    description: "Multi-tiered resort swimming pool with private wooden cabana decks and dedicated toddlers splash zone.",
    icon: "Waves",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    badge: "Waterfront Living"
  },
  {
    id: "mist-garden",
    title: "Mist Garden & Aromatherapy",
    italianTitle: "Giardino di Nebbia",
    description: "Cooling micro-climate mist system integrated with natural fruit trees and herbal plantations for deep tranquility.",
    icon: "Droplets",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
    badge: "Wellness Sanctuary"
  },
  {
    id: "juliet-balcony",
    title: "Balcony Garden & Herb Planters",
    italianTitle: "Balcone di Giulietta",
    description: "Private romantic curved balustrades with built-in oxygen-generating plants framing unhindered Bavdhan valley views.",
    icon: "Flower2",
    image: ORIGINAL_IMAGES.interiorGallery[0],
    badge: "Oxygen-Rich Design"
  },
  {
    id: "spa-jacuzzi",
    title: "Hydro-Therapy Spa & Jacuzzi",
    italianTitle: "Terme e Jacuzzi",
    description: "Rejuvenating thermal water jets, steam sauna suites, and therapeutic heated whirlpools inside Club Azzurro.",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    badge: "Hydro Wellness"
  },
  {
    id: "green-amphitheatre",
    title: "Green Amphitheater & Pergola",
    italianTitle: "Anfiteatro Verde",
    description: "Tiered Roman open-air grass theatre surrounded by Tuscan grape pergolas for community gatherings and movie screenings.",
    icon: "Theater",
    image: ORIGINAL_IMAGES.interiorGallery[1],
    badge: "Cultural Center"
  },
  {
    id: "bbq-lawn",
    title: "BBQ Corner & Sunset Lawn",
    italianTitle: "Prato del Barbecue",
    description: "Alfresco dining lawns equipped with rustic stone barbecue pits for weekend social evenings with family and friends.",
    icon: "Coffee",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    badge: "Social Leisure"
  }
];

export const CONFIGURATIONS = [
  {
    id: "1bhk",
    type: "1 BHK Oxygen-Rich Flat",
    bhk: "1 BHK",
    carpetArea: "489 sq.ft.",
    startingPrice: "₹51.99 L*",
    emi: "₹36,900 / mo",
    description: "Smart oxygen-rich apartment with integrated Balcony Garden, spacious living room, modular kitchen, and natural cross-ventilation.",
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    suitableFor: "Young Professionals, Couples & Investors",
    roiYield: "7.9% Rental Demand",
    highlights: ["Balcony Garden with oxygen plants", "Spacious Living Room", "Dry Balcony with Herb Planters", "Smart digital lock"],
    specs: {
      livingRoom: "11'0\" x 14'6\"",
      masterBedroom: "10'6\" x 12'0\"",
      kitchen: "7'6\" x 9'0\"",
      balcony: "5'0\" x 8'0\"",
      bathroom: "5'0\" x 7'6\""
    },
    floorPlan2D: ORIGINAL_IMAGES.unitPlans[0],
    floorPlan3D: ORIGINAL_IMAGES.floorPlans[0]
  },
  {
    id: "2bhk-smart",
    type: "2 BHK Smart Residence",
    bhk: "2 BHK Smart",
    carpetArea: "596 - 640 sq.ft.",
    startingPrice: "₹63.99 L*",
    emi: "₹45,400 / mo",
    description: "Optimal modern family configuration with two private bedrooms, 2 bathrooms, dual Balcony Gardens, and corner-flat ventilation overlooking Bavdhan hills.",
    bedrooms: 2,
    bathrooms: 2,
    balconies: 2,
    suitableFor: "Growing Families & Tech Executives",
    roiYield: "8.3% Rental Demand",
    highlights: ["2 designer washrooms with European fittings", "Balcony Garden attached to Living", "Kitchen with separate dry yard", "Zero-wastage layout"],
    specs: {
      livingRoom: "12'0\" x 16'0\"",
      masterBedroom: "11'6\" x 13'6\"",
      kidsBedroom: "10'0\" x 11'6\"",
      kitchen: "8'0\" x 10'0\"",
      balcony: "5'6\" x 10'0\"",
      bathroom: "5'0\" x 8'0\""
    },
    floorPlan2D: ORIGINAL_IMAGES.unitPlans[1],
    floorPlan3D: ORIGINAL_IMAGES.floorPlans[1]
  },
  {
    id: "2bhk-luxury",
    type: "2 BHK Venetian Luxury",
    bhk: "2 BHK Large",
    carpetArea: "735 - 770 sq.ft.",
    startingPrice: "₹78.50 L*",
    emi: "₹55,800 / mo",
    description: "Expanded 2 BHK luxury layout featuring 18-foot living lounge, walk-in wardrobe niche in master suite, and double-width balcony sit-out.",
    bedrooms: 2,
    bathrooms: 2,
    balconies: 2,
    suitableFor: "Luxury Seekers & Hybrid Executives",
    roiYield: "8.6% Rental Demand",
    highlights: ["Extended 18ft Living & Dining", "Panoramic hill-facing Juliet Balcony", "Granite kitchen with utility", "Solar water heating in bath"],
    specs: {
      livingRoom: "12'6\" x 18'6\"",
      masterBedroom: "12'0\" x 14'6\"",
      kidsBedroom: "11'0\" x 12'6\"",
      kitchen: "8'6\" x 11'0\"",
      balcony: "6'0\" x 12'0\"",
      bathroom: "5'6\" x 8'6\""
    },
    floorPlan2D: ORIGINAL_IMAGES.unitPlans[2],
    floorPlan3D: ORIGINAL_IMAGES.floorPlans[2]
  },
  {
    id: "3bhk-imperial",
    type: "3 BHK Imperial Residence",
    bhk: "3 BHK",
    carpetArea: "867 - 908 sq.ft.",
    startingPrice: "₹97.50 L*",
    emi: "₹69,300 / mo",
    description: "Grand 3-bedroom palace residence crafted for multi-generational living. Triple balconies offering 180° unhindered views of Bavdhan hills.",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    suitableFor: "Discerning Homeowners & Joint Families",
    roiYield: "9.1% Rental Demand",
    highlights: ["3 lavish washrooms with Jaquar/Kohler", "Triple Juliet balconies", "Gourmet chef kitchen with dry yard", "3-side open natural light"],
    specs: {
      livingRoom: "14'0\" x 20'6\"",
      masterBedroom: "13'0\" x 15'0\"",
      bedroom2: "11'6\" x 13'6\"",
      bedroom3: "11'0\" x 12'0\"",
      kitchen: "9'0\" x 12'0\"",
      balcony: "6'6\" x 14'0\"",
      bathroom: "5'6\" x 9'0\""
    },
    floorPlan2D: ORIGINAL_IMAGES.unitPlans[3],
    floorPlan3D: ORIGINAL_IMAGES.floorPlans[3]
  }
];

export const AMENITY_CATEGORIES = [
  { id: "all", label: "All Amenities (30+)" },
  { id: "outdoor", label: "Outdoor Amenities" },
  { id: "indoor", label: "Indoor Amenities" },
  { id: "wellness", label: "Wellness & Nature" },
  { id: "water", label: "Pool & Aqua" }
];

export const ALL_AMENITIES = [
  {
    name: "Balcony Garden with Oxygen Plants",
    category: "outdoor",
    icon: "Flower2",
    image: ORIGINAL_IMAGES.interiorGallery[0],
    desc: "Private balcony gardens designed to enrich indoor air with natural oxygen."
  },
  {
    name: "Venetian Swimming Pool",
    category: "water",
    icon: "Waves",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    desc: "Lap-length infinity pool overlooking green hill slopes."
  },
  {
    name: "Poolside Cabanas & Sun Decks",
    category: "water",
    icon: "Waves",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    desc: "Shaded private loungers echoing Italian Riviera resort lifestyle."
  },
  {
    name: "Hydro-Therapy Spa & Jacuzzi",
    category: "indoor",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    desc: "Rejuvenating thermal heated whirlpools and steam relaxation suites."
  },
  {
    name: "Clubhouse with Indoor Gym",
    category: "indoor",
    icon: "Dumbbell",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    desc: "Air-conditioned cardiovascular and strength training studio."
  },
  {
    name: "Mist Garden & Aromatherapy",
    category: "wellness",
    icon: "Droplets",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    desc: "Fine mist nozzles producing a cooling mountain microclimate."
  },
  {
    name: "Fruit Garden & Botanical Trail",
    category: "wellness",
    icon: "Trees",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    desc: "Citrus, pomegranate, and seasonal fruit grove with walking paths."
  },
  {
    name: "Pergola Seating & Grape Trellises",
    category: "outdoor",
    icon: "Coffee",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80",
    desc: "Italian wooden pergolas for sunset conversations and tea."
  },
  {
    name: "Multipurpose Banquet Hall",
    category: "indoor",
    icon: "Building2",
    image: ORIGINAL_IMAGES.interiorGallery[1],
    desc: "Spacious community hall for family celebrations and festivals."
  },
  {
    name: "Herb Planters in Dry Balcony",
    category: "wellness",
    icon: "Flower2",
    image: ORIGINAL_IMAGES.interiorGallery[0],
    desc: "Fresh basil, mint, and tulsi planters in kitchen utility."
  },
  {
    name: "BBQ Corner Lawn",
    category: "outdoor",
    icon: "Coffee",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    desc: "Open-air grill area for weekend barbeque parties."
  },
  {
    name: "Children's Play Area & Splash",
    category: "outdoor",
    icon: "Smile",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    desc: "Soft-cushioned play turf, swings, slides, and shallow pool."
  },
  {
    name: "Green Roman Amphitheater",
    category: "outdoor",
    icon: "Theater",
    image: ORIGINAL_IMAGES.interiorGallery[1],
    desc: "Tiered grass amphitheater for open-air acoustic music and screenings."
  },
  {
    name: "Sunrise Yoga Lawn",
    category: "wellness",
    icon: "HeartHandshake",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    desc: "Dedicated morning meditation lawn facing the eastern valley."
  }
];

export const MASTER_PLAN_HOTSPOTS = [
  {
    id: 1,
    title: "Grand Entrance & Security Gate",
    zone: "Entry Plaza",
    x: 18,
    y: 78,
    image: ORIGINAL_IMAGES.masterPlan,
    desc: "Access portal with RFID boom barriers and round-the-clock surveillance."
  },
  {
    id: 2,
    title: "Club Azzurro & Infinity Lagoon",
    zone: "Central Core",
    x: 48,
    y: 42,
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80",
    desc: "Lifestyle clubhouse with infinity swimming pool, gym, spa, and banquet."
  },
  {
    id: 3,
    title: "Mist Garden & Fruit Orchard",
    zone: "Nature Zone",
    x: 75,
    y: 65,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80",
    desc: "Aromatic mist trails, fruit groves, and shaded pergolas."
  },
  {
    id: 4,
    title: "Green Roman Amphitheater",
    zone: "Cultural Green",
    x: 62,
    y: 28,
    image: ORIGINAL_IMAGES.interiorGallery[1],
    desc: "Open-air tiered seating for community gatherings and performances."
  },
  {
    id: 5,
    title: "BBQ Corner & Sunset Lawn",
    zone: "Social Lawn",
    x: 35,
    y: 55,
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
    desc: "Stone BBQ pits and party lawns with scenic hill views."
  },
  {
    id: 6,
    title: "Oxy-Rich Forest Trail",
    zone: "Perimeter",
    x: 82,
    y: 35,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
    desc: "1.2 km nature trail through indigenous oxygen-generating trees."
  },
  {
    id: 7,
    title: "Multisport Court & Play Turf",
    zone: "Sports Arena",
    x: 24,
    y: 32,
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=600&q=80",
    desc: "All-weather turf for badminton, tennis, and half-basketball."
  },
  {
    id: 8,
    title: "Children's Fantasy Play Area",
    zone: "Kids Grove",
    x: 52,
    y: 72,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80",
    desc: "Rubberized play turf, swings, climbing frame, and splash pad."
  }
];

export const VIRTUAL_TOUR_ROOMS = [
  {
    id: "living",
    title: "Oxygen-Rich Living Lounge",
    type: "Sample 2 BHK Smart",
    image: ORIGINAL_IMAGES.interiorGallery[0],
    description: "Sunlit living hall opening directly to the oxygen-enhancing Balcony Garden.",
    hotspots: [
      { label: "Italian Marble Finish Tiles", x: "32%", y: "78%" },
      { label: "Balcony Garden Sliding Door", x: "68%", y: "45%" },
      { label: "Cross Ventilation Window", x: "42%", y: "30%" }
    ]
  },
  {
    id: "balcony",
    title: "Juliet Balcony & Mist View",
    type: "Balcony Garden",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    description: "Curved Italian wrought-iron balcony with built-in herb planter provisions.",
    hotspots: [
      { label: "Oxygen Herb Planters", x: "25%", y: "75%" },
      { label: "Bavdhan Hillside Vista", x: "50%", y: "30%" },
      { label: "Italian Balustrade", x: "45%", y: "65%" }
    ]
  },
  {
    id: "master",
    title: "Serene Master Bedroom",
    type: "Master Suite",
    image: ORIGINAL_IMAGES.interiorGallery[1],
    description: "Spacious master bedroom with wooden textured flooring and en-suite bath.",
    hotspots: [
      { label: "Wooden Plank Tiles", x: "35%", y: "82%" },
      { label: "Attached European Bath", x: "78%", y: "48%" },
      { label: "Acoustic Window Glass", x: "55%", y: "35%" }
    ]
  },
  {
    id: "club",
    title: "Venetian Infinity Pool Deck",
    type: "Club Azzurro",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=80",
    description: "Resort-inspired pool deck with private sun cabanas and scenic horizon views.",
    hotspots: [
      { label: "Infinity Horizon Edge", x: "50%", y: "40%" },
      { label: "Poolside Cabanas", x: "20%", y: "55%" },
      { label: "Sun Deck", x: "65%", y: "75%" }
    ]
  }
];

export const LOCATION_DATA = {
  categories: [
    { id: "transit", name: "Highways & Transit", icon: "Navigation" },
    { id: "business", name: "Business Hubs", icon: "Briefcase" },
    { id: "schools", name: "Schools & Institutes", icon: "GraduationCap" },
    { id: "hospitals", name: "Hospitals", icon: "HeartPulse" },
    { id: "retail", name: "Shopping & Dining", icon: "ShoppingBag" }
  ],
  places: [
    {
      category: "transit",
      name: "Mumbai-Bangalore Expressway (NH 48)",
      distance: "1.2 km",
      time: "2 mins",
      desc: "Direct ramp access without city traffic signals."
    },
    {
      category: "transit",
      name: "Chandani Chowk Multi-Tier Flyover",
      distance: "2.5 km",
      time: "5 mins",
      desc: "Instant junction connectivity to Kothrud and Paud Road."
    },
    {
      category: "transit",
      name: "Pashan & University Circle",
      distance: "5.5 km",
      time: "10 mins",
      desc: "Smooth drive through scenic Pashan lake corridor."
    },
    {
      category: "business",
      name: "Hinjewadi IT Park (Phase 1 & 2)",
      distance: "11 km",
      time: "15 mins",
      desc: "Infosys, Wipro, TCS, Cognizant & 400+ tech companies."
    },
    {
      category: "business",
      name: "Cummins India Campus",
      distance: "4.5 km",
      time: "7 mins",
      desc: "Major engineering & corporate headquarters in Balewadi."
    },
    {
      category: "business",
      name: "ICC Trade Tower (Senapati Bapat Rd)",
      distance: "10 km",
      time: "16 mins",
      desc: "Prime corporate commercial tower."
    },
    {
      category: "business",
      name: "Calsoft & Baner IT Corridor",
      distance: "7.0 km",
      time: "12 mins",
      desc: "Baner Business Bay and commercial complexes."
    },
    {
      category: "schools",
      name: "Sri Chaitanya Techno School",
      distance: "1.5 km",
      time: "3 mins",
      desc: "Premier CBSE curriculum school."
    },
    {
      category: "schools",
      name: "Ryan International School",
      distance: "2.8 km",
      time: "6 mins",
      desc: "Top ranked ICSE/CBSE school in west Pune."
    },
    {
      category: "schools",
      name: "Sanskriti School (Bavdhan Campus)",
      distance: "1.2 km",
      time: "3 mins",
      desc: "CBSE & Cambridge affiliated top school."
    },
    {
      category: "schools",
      name: "Vidya Valley & New India School",
      distance: "4.0 km",
      time: "8 mins",
      desc: "Renowned holistic education campuses."
    },
    {
      category: "hospitals",
      name: "Chellaram Multi-Speciality Hospital",
      distance: "1.8 km",
      time: "4 mins",
      desc: "24x7 emergency multi-speciality research hospital."
    },
    {
      category: "hospitals",
      name: "Opel Hospital & Sahyadri Hospital",
      distance: "5.0 km",
      time: "9 mins",
      desc: "Tertiary medical care and ICU facilities."
    },
    {
      category: "hospitals",
      name: "Deenanath Mangeshkar Hospital",
      distance: "7.5 km",
      time: "14 mins",
      desc: "Premier superspeciality medical institution in Pune."
    },
    {
      category: "retail",
      name: "Oxford Golf Resort & Country Club",
      distance: "4.5 km",
      time: "8 mins",
      desc: "PGA 18-hole championship golf course and luxury club."
    },
    {
      category: "retail",
      name: "Aditya Shagun Mall & More Supermarket",
      distance: "1.5 km",
      time: "3 mins",
      desc: "Daily shopping, grocery supermarkets, and dining."
    },
    {
      category: "retail",
      name: "City Pride Kothrud",
      distance: "5.8 km",
      time: "10 mins",
      desc: "Multiplex cinema, retail stores, and food courts."
    }
  ]
};

export const SPECIFICATIONS = [
  {
    category: "Structure & Masonry",
    icon: "Shield",
    items: [
      "Earthquake resistant RCC framed structure (Seismic Zone III)",
      "AAC block masonry walls for enhanced thermal insulation",
      "Gypsum finish internal walls with low-VOC plastic emulsion paint"
    ]
  },
  {
    category: "Flooring & Balcony",
    icon: "Layers",
    items: [
      "Vitrified tile flooring in Living Room, Dining, Kitchen & Bedrooms",
      "Anti-skid ceramic tiles in Balcony Garden and Bathrooms",
      "Special herb planter niches with drainage in dry balcony"
    ]
  },
  {
    category: "Kitchen & Utility",
    icon: "CookingPot",
    items: [
      "Granite kitchen platform with Stainless Steel sink",
      "Glazed dado tiles up to 2 feet above platform",
      "Provision for water purifier and exhaust fan",
      "Dedicated dry balcony with washing machine water & power points"
    ]
  },
  {
    category: "Bathrooms & Sanitary",
    icon: "Droplets",
    items: [
      "Designer ceramic tiles up to lintel height",
      "Premium sanitary ware & Jaquar / Kohler CP fittings",
      "Solar water heating point connection in master bathroom",
      "Concealed anti-corrosive plumbing"
    ]
  },
  {
    category: "Doors & Windows",
    icon: "DoorClosed",
    items: [
      "Laminated main entrance door with digital biometric lock",
      "Powder-coated aluminum sliding windows with mosquito net",
      "Italian wrought-iron Juliet safety railings"
    ]
  },
  {
    category: "Electrical & Security",
    icon: "Zap",
    items: [
      "Concealed copper wiring with Schneider / Legrand modular switches",
      "TV & AC points in Living room and Master bedroom",
      "Color Video Door Phone with intercom to security gate",
      "3-Tier 24x7 CCTV surveillance and DG backup for common services"
    ]
  }
];

export const CONSTRUCTION_STAGES = [
  {
    tower: "Tower Roma (Phase 1)",
    phase: "Phase 1 - Delivered",
    progress: 100,
    status: "Ready for Possession",
    units: "1 & 2 BHK Residences",
    desc: "Occupancy certificate received. 280+ families residing happily."
  },
  {
    tower: "Tower Firenze (Phase 2)",
    phase: "Phase 2 - Advanced Stage",
    progress: 90,
    status: "Finishing & Elevators",
    units: "1 & 2 BHK Smart",
    desc: "Structure complete. Internal vitrified tiling and painting in progress. Possession Dec 2026."
  },
  {
    tower: "Tower Venezia (Phase 3)",
    phase: "Phase 3 - Mid Stage",
    progress: 65,
    status: "16th Floor Slab Poured",
    units: "2 & 3 BHK Imperial",
    desc: "RCC superstructure racing ahead. Brickwork underway. Possession 2027."
  },
  {
    tower: "Abitante Fiore (New Launch)",
    phase: "Phase 4 - Oxygen Rich Wings",
    progress: 40,
    status: "Plinth & 5th Floor Slabs",
    units: "1 & 2 BHK Oxy Homes",
    desc: "Excavation and foundation ready. High speed Mivan construction. Possession 2028."
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Rohan & Neha Deshmukh",
    role: "Residents since 2023 | 2 BHK Tower Roma",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "The Italian architecture and fresh hill breeze make coming home feel like a vacation in Tuscany. The Juliet balcony with herb planters is our favorite spot."
  },
  {
    name: "Vikram Singhania",
    role: "Senior VP, Tech Sector | Hinjewadi Commuter",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "My commute to Hinjewadi IT Park takes barely 15 minutes via the expressway. The infinity swimming pool and squash facilities are 5-star standard."
  },
  {
    name: "Ananya & Kedar Joshi",
    role: "Parents & IT Consultants | 2 BHK Smart",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    quote: "The oxygen-rich home design and children's play grove were our deciding factors. Puraniks delivered top-notch quality and transparent service."
  }
];

export const FAQS = [
  {
    q: "Where is Puraniks Abitante Fiore located in Pune, and what are its advantages?",
    a: "Puraniks Abitante Fiore is located in Bavdhan Budruk, Pune, near the Crystal Honda Service Station, off the Mumbai-Bangalore Highway (NH 48). Situated in the scenic lower-density valley of Bavdhan, it offers fresh air, direct access from two main roads, and is just 5 minutes from Chandani Chowk and 15 minutes from Hinjewadi IT Park."
  },
  {
    q: "What makes Puraniks Abitante Fiore oxygen-rich homes unique?",
    a: "Puraniks Abitante Fiore features innovative apartment layouts designed to increase oxygen levels with the help of integrated Balcony Gardens, herb planter niches in dry balconies, and over 70% open landscaped spaces filled with mist gardens and indigenous oxygen-generating flora."
  },
  {
    q: "What configurations and sizes are available at Abitante Fiore?",
    a: "The project offers 1 BHK flats (489 sq.ft carpet area starting ₹51.99 Lakhs*), 2 BHK Smart flats (596 sq.ft carpet starting ₹63.99 Lakhs*), 2 BHK Luxury (735 sq.ft), and 3 BHK homes (867–908 sq.ft). All residences feature Italian Juliet balconies."
  },
  {
    q: "Is the project MahaRERA registered and approved by banks?",
    a: "Yes, Puraniks Abitante & Abitante Fiore is fully approved under MahaRERA registration numbers P52100020202 and P52100020238. It is pre-approved for home loans by SBI, HDFC Bank, ICICI Bank, Axis Bank, and Bank of Maharashtra with special zero-processing-fee offers."
  },
  {
    q: "Are there schools, business hubs, and grocery stores nearby?",
    a: "Yes! Sanskriti School, Sri Chaitanya Techno School, and Ryan International are within 3-6 minutes. Hinjewadi IT Park and Cummins India are 7-15 minutes away. More Supermarket and Aditya Shagun Mall are just 3 minutes away."
  }
];

export const DEVELOPER_DETAILS = {
  name: "Puranik Builders Limited",
  founded: "1990",
  experienceYears: "34+",
  deliveredProjects: "46+ Landmarks",
  areaDelivered: "5.5+ Million Sq. Ft.",
  ongoingArea: "10+ Million Sq. Ft.",
  cities: ["Pune", "Thane", "Mumbai MMR", "Neral", "Lonavala"],
  philosophy: "Ideas that stay with you. Pioneering themed residential ecosystems across India.",
  awards: [
    "Township Project of the Year 2024 - Times Real Estate Conclave",
    "Best Thematic Residential Township in West Pune",
    "Excellence in Customer Delivery & Quality Construction"
  ]
};
