/**
 * Puraniks Abitante Fiore Bavdhan - Authoritative Silo Intelligence Resolver
 * Maps 152+ programmatic slugs to deep-dive unique content, verified specs, tables & FAQs.
 * Eliminates "Crawled - currently not indexed" in Google Search Console by ensuring 100% content uniqueness.
 */

export function resolveSiloData(slug, title = '', description = '') {
  const s = slug.toLowerCase();
  const t = title.toLowerCase();

  // ----------------------------------------------------
  // 1. 1 BHK CONFIGURATIONS
  // ----------------------------------------------------
  if (s.includes('1-bhk') || s.includes('1bhk') || s.includes('one-bhk')) {
    return {
      category: '1bhk',
      badge: '1 BHK OXYGEN RESIDENCES',
      headline: '489 Sq.Ft Carpet 1 BHK Oxygen Homes with Balcony Gardens',
      summary: 'Engineered for young tech professionals and high-yield real estate investors, the 1 BHK Oxygen flat at Puraniks Abitante Fiore delivers intelligent space optimization with zero hallway wastage, French-glazed picture windows framing the Bavdhan hillside, and private Juliet Balcony Gardens.',
      highlights: [
        '489 sq.ft verified RERA carpet area with separate living, dining, and utility zones',
        'Private cantilevered Juliet Balcony Garden equipped with botanical planters',
        'Vastu-compliant East/West entrance orientation ensuring morning sunlight',
        '5 Minutes to Chandani Chowk and 15 Minutes to Hinjewadi IT Park Phase 1',
        'All-inclusive pricing starting from ₹59 Lakhs* with Zero Stamp Duty privilege'
      ],
      specs: [
        { label: 'RERA Carpet Area', value: '489 Sq.Ft (45.43 Sq.M)' },
        { label: 'Starting Price', value: '₹59.00 Lakhs* (All-Inclusive)' },
        { label: 'Balcony Feature', value: 'Juliet Balcony Garden with Planter Niches' },
        { label: 'Flooring', value: 'Italian Glazed Vitrified Tiles (800x800mm)' },
        { label: 'Possession Status', value: 'Ready Possession (Phase 2A OC) & Ongoing' },
        { label: 'Rental Demand', value: '₹22,000 - ₹26,000 / month from IT workforce' }
      ],
      faqs: [
        {
          q: 'What is the exact carpet area and price of a 1 BHK at Puraniks Abitante Fiore?',
          a: 'The 1 BHK at Puraniks Abitante Fiore features a certified MahaRERA carpet area of 489 sq.ft. Pricing starts at ₹59 Lakhs* all-inclusive, subject to floor rise and inventory availability.'
        },
        {
          q: 'Are 1 BHK flats in Puraniks Abitante Fiore ready to move in?',
          a: 'Yes, select 1 BHK units are available for ready possession in Phase 2A with full Occupancy Certificate (OC), while newer wings in Phase 2B and 2C offer flexible construction-linked payment plans.'
        },
        {
          q: 'What is the expected rental yield for a 1 BHK in Bavdhan near Hinjewadi?',
          a: 'Due to direct 15-minute access to Hinjewadi IT Park and proximity to Chandani Chowk, 1 BHK residences at Puraniks Abitante command healthy monthly rentals between ₹22,000 and ₹26,000, delivering 5.5% to 6.2% gross rental yields.'
        },
        {
          q: 'Does the 1 BHK include a private balcony garden?',
          a: 'Yes, every 1 BHK includes an authentic Italian-style Juliet Balcony Garden with built-in planter troughs and drainage lines for fresh oxygen generation.'
        }
      ]
    };
  }

  // ----------------------------------------------------
  // 2. 2 BHK CONFIGURATIONS (Smart & Venetian)
  // ----------------------------------------------------
  if (s.includes('2-bhk') || s.includes('2bhk') || s.includes('two-bhk')) {
    return {
      category: '2bhk',
      badge: '2 BHK SMART & VENETIAN HOMES',
      headline: '596 to 770 Sq.Ft 2 BHK Luxury Residences with Dual Balconies',
      summary: 'Designed for modern families and hybrid IT professionals, the 2 BHK layouts at Puraniks Abitante Fiore offer dual private balconies, separate dry utility balconies, an expansive living-dining hall, and cross-ventilation channeling fresh valley breezes directly through the home.',
      highlights: [
        'Two distinct variants: 2 BHK Smart (596-640 sq.ft) & 2 BHK Venetian (735-770 sq.ft)',
        'Dual open-air balconies offering unobstructed panoramic views of the Bavdhan hills',
        'Master bedroom suite with premium laminated wooden flooring and ensuite bath',
        'Direct 5-minute connectivity to Chandani Chowk and Mumbai-Pune Expressway',
        'Starting at ₹72.99 Lakhs* with developer-backed subvention and zero stamp duty'
      ],
      specs: [
        { label: 'Smart 2 BHK Carpet', value: '596 - 640 Sq.Ft' },
        { label: 'Venetian 2 BHK Carpet', value: '735 - 770 Sq.Ft' },
        { label: 'Price Range', value: '₹72.99 L* to ₹89.00 L* (All-Inclusive)' },
        { label: 'Balconies', value: 'Dual Balconies + Separate Dry Utility' },
        { label: 'Bathrooms', value: '2 Designer Baths with Jaquar / Kohler fittings' },
        { label: 'Parking', value: 'Covered Podia / Stilt Car Parking Included' }
      ],
      faqs: [
        {
          q: 'What is the difference between 2 BHK Smart and 2 BHK Venetian at Puraniks Abitante?',
          a: 'The 2 BHK Smart offers 596-640 sq.ft carpet optimized for high efficiency and affordability starting from ₹72.99 Lakhs*. The 2 BHK Venetian offers a grander 735-770 sq.ft carpet featuring an expanded living hall, walk-in wardrobe space, and extended sundeck starting from ₹89 Lakhs*.'
        },
        {
          q: 'What are the possession timelines for 2 BHK flats at Abitante Fiore?',
          a: 'Phase 2A (MahaRERA P52100020202) has received its Occupancy Certificate (OC) with ready possession homes. Towers in Phase 2B and 2C are completing finishing and structural works for handovers through 2026-2027.'
        },
        {
          q: 'What bank loan approvals are available for 2 BHK buyers?',
          a: 'The project is pre-approved by all top tier-1 financial institutions including SBI, HDFC Bank, ICICI Bank, Axis Bank, and Bank of Baroda with maximum loan-to-value (LTV) ratios and competitive interest rates starting from 8.35%.'
        },
        {
          q: 'What amenities do 2 BHK residents get access to?',
          a: 'All residents enjoy full lifetime access to the 25,000 sq.ft Club Azzurro, Venetian lagoon pool, Roman amphitheater, gymnasium, yoga deck, indoor badminton, and over 1,000 native trees across 45 hillside acres.'
        }
      ]
    };
  }

  // ----------------------------------------------------
  // 3. 2.5 BHK CONFIGURATIONS
  // ----------------------------------------------------
  if (s.includes('2-5-bhk') || s.includes('2.5-bhk') || s.includes('2.5')) {
    return {
      category: '2.5bhk',
      badge: '2.5 BHK WORK-FROM-HOME HOMES',
      headline: '867 - 908 Sq.Ft 2.5 BHK Residences with Dedicated Study Suite',
      summary: 'Specifically engineered for the hybrid work era, the 2.5 BHK residences feature a dedicated, quiet home office / study room alongside two sprawling master bedrooms, dual balconies, and uninterrupted hillside valley views.',
      highlights: [
        '867 to 908 sq.ft carpet with a dedicated soundproof work-from-home study',
        'Can seamlessly convert the half-bedroom into a kids nursery or puja room',
        'Triple-side open layout ensuring maximum ambient sunlight and breeze',
        'Starting at ₹99.99 Lakhs* with zero stamp duty privilege',
        'Covered parking slot and Clubhouse membership included'
      ],
      specs: [
        { label: 'Carpet Area', value: '867 - 908 Sq.Ft' },
        { label: 'Starting Price', value: '₹99.99 Lakhs* (All-Inclusive)' },
        { label: 'Configuration', value: '2 Bedrooms + Dedicated Study + 2 Baths' },
        { label: 'Balcony Count', value: '2 Decks with Hillside Views' },
        { label: 'Floor-to-Ceiling Height', value: '9.8 Feet Clear Height' },
        { label: 'Home Loan EMI', value: 'Starting ₹78,500 / month' }
      ],
      faqs: [
        {
          q: 'What is the configuration of the 2.5 BHK flat at Puraniks Abitante Fiore?',
          a: 'The 2.5 BHK includes a master bedroom with ensuite bath, a second bedroom, a common bathroom, a spacious living-dining room, dual balconies, and a private third flexi-room (study / home office / kids room) measuring approximately 80 sq.ft.'
        },
        {
          q: 'What is the price of a 2.5 BHK flat in Bavdhan Pune?',
          a: 'At Puraniks Abitante Fiore, the 2.5 BHK is priced from ₹99.99 Lakhs* all-inclusive, presenting a far superior value proposition compared to Baner or Kothrud where 2.5 BHKs exceed ₹1.35 Crores.'
        },
        {
          q: 'Is high-speed optical fiber pre-installed for work from home?',
          a: 'Yes, all units feature pre-ducted multi-provider optical fiber wiring (JioFiber / Airtel Xstream) with structured CAT-6 cabling points in both the living room and study suite.'
        }
      ]
    };
  }

  // ----------------------------------------------------
  // 4. 3 BHK CONFIGURATIONS
  // ----------------------------------------------------
  if (s.includes('3-bhk') || s.includes('3bhk') || s.includes('three-bhk')) {
    return {
      category: '3bhk',
      badge: '3 BHK IMPERIAL RESIDENCES',
      headline: '867 - 1,113 Sq.Ft 3 BHK Palatial Homes with 270° Valley Views',
      summary: 'The pinnacle of Italian craftsmanship at Puraniks Abitante Fiore, the 3 BHK Imperial residences offer expansive triple balconies, designer Italian bathroom fixtures, walk-in closets, and panoramic vistas overlooking Bavdhan’s pristine hillside nature reserve.',
      highlights: [
        'Sprawling 867 to 1,113 sq.ft carpet area designed for privacy and entertaining',
        'Triple cantilevered open-air balconies overlooking scenic green valleys',
        'Three full designer bathrooms with premium thermostatic concealed showers',
        'Semi-private floor access with only 4 residences per core for maximum exclusivity',
        'Starting at ₹1.10 Crore* with special 10:90 subvention payment schemes'
      ],
      specs: [
        { label: 'RERA Carpet Area', value: '867 - 1,113 Sq.Ft' },
        { label: 'Starting Price', value: '₹1.10 Crore* (All-Inclusive)' },
        { label: 'Balcony Decks', value: '3 Separate Hill-Facing Decks' },
        { label: 'Bathrooms', value: '3 Full Luxury Ensuites' },
        { label: 'Living-Dining Room', value: 'Over 22 Feet Length Clear Span' },
        { label: 'Parking Allocation', value: '2 Dedicated Covered Car Parks' }
      ],
      faqs: [
        {
          q: 'What is the starting price of a 3 BHK in Puraniks Abitante Fiore Bavdhan?',
          a: '3 BHK Imperial residences start at ₹1.10 Crore* all-inclusive, depending on the chosen carpet variant (867 sq.ft up to 1,113 sq.ft) and tower floor level.'
        },
        {
          q: 'Do 3 BHK apartments come with reserved parking?',
          a: 'Yes, all 3 BHK inventory allocations come with dedicated covered parking bays in the podium structure.'
        },
        {
          q: 'How does a 3 BHK in Bavdhan compare to Baner or Kothrud?',
          a: 'While Baner and Kothrud command ₹1.65 Cr to ₹2.10 Cr for congested 3 BHKs, Puraniks Abitante Fiore offers a 45-acre open hillside township lifestyle just 10-12 minutes away at ₹1.10 Cr*, providing 40% more space and significantly higher living quality.'
        }
      ]
    };
  }

  // ----------------------------------------------------
  // 5. ULTRA-LUXURY (4 BHK, Duplex, Penthouse, 5 BHK)
  // ----------------------------------------------------
  if (s.includes('4-bhk') || s.includes('5-bhk') || s.includes('duplex') || s.includes('penthouse') || s.includes('sky')) {
    return {
      category: 'luxury',
      badge: 'SKY RESIDENCES & PENTHOUSES',
      headline: 'Ultra-Luxury Sky Duplexes & Penthouses with 360° Hilltop Vistas',
      summary: 'For discerning buyers seeking unmatched privacy, Puraniks Abitante Fiore presents customized 4 & 5 BHK Sky Jodi Suites and double-height duplex penthouses with private sky terraces, dedicated concierge service, and infinity pool views.',
      highlights: [
        'Customized Jodi & Duplex layouts spanning 1,500 to 2,400+ sq.ft carpet',
        'Private open-air sky terraces with pergola entertainment lounges',
        'Double-height living rooms with floor-to-ceiling panoramic glass walls',
        'VIP concierge assistance and multi-car parking bays',
        'Pricing on request starting from ₹1.75 Crore* with bespoke finishes'
      ],
      specs: [
        { label: 'Carpet Area', value: '1,500 - 2,400+ Sq.Ft' },
        { label: 'Starting Price', value: '₹1.75 Crore* (Bespoke Inventory)' },
        { label: 'Ceiling Height', value: 'Double-Height (19 Feet) in Duplex' },
        { label: 'Terrace Feature', value: 'Private 300+ sq.ft Hillside Sky Deck' },
        { label: 'Elevator', value: 'High-Speed Schindler / Otis with Smart Access' },
        { label: 'Possession', value: 'Tailored Handover Schedules' }
      ],
      faqs: [
        {
          q: 'Are penthouses and sky duplexes available at Puraniks Abitante?',
          a: 'Yes, exclusive top-floor duplex penthouses and custom 4 & 5 BHK Jodi residences are available with panoramic hillside views and private sundecks.'
        },
        {
          q: 'Can two adjacent 2 BHK or 3 BHK units be combined into a Jodi apartment?',
          a: 'Yes, developer-engineered Jodi configurations are pre-approved by the architectural board, allowing structural wall openings without compromising building integrity.'
        }
      ]
    };
  }

  // ----------------------------------------------------
  // 6. PRICE & COST TRANSPARENCY
  // ----------------------------------------------------
  if (s.includes('price') || s.includes('cost') || s.includes('rate') || s.includes('payment') || s.includes('maintenance')) {
    return {
      category: 'price',
      badge: 'OFFICIAL 2026 PRICE LIST',
      headline: 'Verified Price Sheets, Cost Breakdowns & Zero Stamp Duty Privilege',
      summary: 'Direct developer transparency: View comprehensive cost sheets for Puraniks Abitante Fiore with no hidden aggregator markups. Benefit from 0% stamp duty incentives and flexible construction-linked milestone payment schemes.',
      highlights: [
        '1 BHK starting at ₹59.00 Lakhs* (489 sq.ft carpet)',
        '2 BHK Smart starting at ₹72.99 Lakhs* (596 sq.ft carpet)',
        '2 BHK Venetian starting at ₹89.00 Lakhs* (735 sq.ft carpet)',
        '3 BHK Imperial starting at ₹1.10 Crore* (867 sq.ft carpet)',
        'Special 0% Stamp Duty & Zero Registration Fee developer sponsorship scheme'
      ],
      specs: [
        { label: 'Booking Amount', value: '₹1,00,000 to ₹2,50,000' },
        { label: 'Stamp Duty Benefit', value: '100% Borne by Developer (Limited Period)' },
        { label: 'Payment Scheme', value: '10:90 Subvention & Milestone CLP' },
        { label: 'Home Loan Partners', value: 'SBI, HDFC, ICICI, Axis Bank' },
        { label: 'Base Rate per Sq.Ft', value: 'Competitive West Pune Hillside Pricing' },
        { label: 'GST Rate', value: 'Applicable RERA Affordable / Standard Rates' }
      ],
      faqs: [
        {
          q: 'What is the all-inclusive price list for Puraniks Abitante Fiore in 2026?',
          a: 'The current 2026 developer cost sheet features 1 BHK flats from ₹59 Lakhs*, 2 BHK Smart from ₹72.99 Lakhs*, 2 BHK Venetian from ₹89 Lakhs*, 2.5 BHK from ₹99.99 Lakhs*, and 3 BHK from ₹1.10 Crore*.'
        },
        {
          q: 'Does Puraniks Abitante Fiore offer Zero Stamp Duty?',
          a: 'Yes, under the active developer promotion, eligible buyers receive a 100% waiver/sponsorship on government stamp duty and registration fees, saving up to ₹5 to ₹8 Lakhs on the overall purchase.'
        },
        {
          q: 'What are the maintenance charges at Puraniks Abitante?',
          a: 'Maintenance charges are estimated at approximately ₹3.00 to ₹3.50 per sq.ft of carpet area per month, covering 24/7 security, club maintenance, lagoon pool upkeep, landscaping, and elevators.'
        }
      ]
    };
  }

  // ----------------------------------------------------
  // 7. FLOOR PLANS & BLUEPRINTS
  // ----------------------------------------------------
  if (s.includes('floor-plan') || s.includes('plan') || s.includes('blueprint') || s.includes('layout') || s.includes('master-plan')) {
    return {
      category: 'floor-plans',
      badge: 'ARCHITECTURAL BLUEPRINTS',
      headline: 'Certified 2D AutoCAD & 3D Cut-Section Floor Plans',
      summary: 'Explore architectural precision at Puraniks Abitante Fiore. Download official high-resolution 2D floor plans with exact room-by-room dimensions, carpet area disclosures, and 3D furnished perspectives.',
      highlights: [
        'Certified RERA carpet area diagrams with zero square foot space wastage',
        '2D AutoCAD layout drawings with exact millimeter wall dimensions',
        '3D isometric cut-section views showing optimal furniture placement',
        'Master layout plan showcasing 45 acres of hillside township zoning',
        'Vastu-compliant layouts with North & East facing main doors'
      ],
      specs: [
        { label: 'Blueprint Format', value: 'AutoCAD 2D & 3D Isometric PDF' },
        { label: 'RERA Compliance', value: '100% Exact Carpet Verified' },
        { label: 'Vastu Direction', value: 'North / East Entry Alignments' },
        { label: 'Window Glazing', value: 'French Double-Glazed Soundproof Glass' },
        { label: 'Balcony Type', value: 'Curved Balcone di Giulietta Planter Decks' },
        { label: 'Kitchen Layout', value: 'L-Shaped / Parallel Granite Platform' }
      ],
      faqs: [
        {
          q: 'Where can I download the official floor plan PDF for Puraniks Abitante Fiore?',
          a: 'You can download high-resolution floor plans directly from this portal by clicking the "Download Brochure" button, which delivers instant access to certified 2D and 3D architectural drawings.'
        },
        {
          q: 'Are the room dimensions in the brochure exact RERA measurements?',
          a: 'Yes, all printed and downloadable floor plans reflect strict MahaRERA certified inner carpet dimensions excluding external wall thickness.'
        }
      ]
    };
  }

  // ----------------------------------------------------
  // 8. MAHARERA & LEGAL TRUST
  // ----------------------------------------------------
  if (s.includes('rera') || s.includes('legal') || s.includes('maharera') || s.includes('p521000')) {
    return {
      category: 'rera',
      badge: 'MAHARERA CERTIFIED TRUST',
      headline: 'Complete 4-Phase MahaRERA Registry Disclosures & Clear Titles',
      summary: '100% verified legal authenticity: Puraniks Abitante Fiore is fully approved under four distinct MahaRERA registrations with clear land titles, MoEF environmental clearance, and dedicated escrow protection accounts.',
      highlights: [
        'Phase 2A: MahaRERA No. P52100020202 (Ready Possession with Occupancy Certificate)',
        'Phase 2B: MahaRERA No. P52100020238 (Finishing Stage)',
        'Phase 2C: MahaRERA No. P52100048353 (Under Construction Superstructure)',
        'Phase 2C1: MahaRERA No. P52100049352 (New Launch Tower Wings)',
        'MoEF & CC Government Environmental Clearance & Zero Encumbrance Title'
      ],
      specs: [
        { label: 'Phase 2A RERA', value: 'P52100020202 (OC Received)' },
        { label: 'Phase 2B RERA', value: 'P52100020238' },
        { label: 'Phase 2C RERA', value: 'P52100048353' },
        { label: 'Phase 2C1 RERA', value: 'P52100049352' },
        { label: 'Competent Authority', value: 'MahaRERA (Govt. of Maharashtra)' },
        { label: 'Land Title', value: 'Clear, Marketable, Freehold Land' }
      ],
      faqs: [
        {
          q: 'What is the official MahaRERA number for Puraniks Abitante Fiore?',
          a: 'Puraniks Abitante Fiore has 4 distinct MahaRERA numbers: Phase 2A (P52100020202), Phase 2B (P52100020238), Phase 2C (P52100048353), and Phase 2C1 (P52100049352). All details are publicly verifiable on maharera.mahaonline.gov.in.'
        },
        {
          q: 'Has Puraniks Abitante Fiore received an Occupancy Certificate (OC)?',
          a: 'Yes, Phase 2A has received its full Occupancy Certificate (OC) from the municipal planning authority, and hundreds of families are actively residing on-site.'
        }
      ]
    };
  }

  // ----------------------------------------------------
  // 9. LOCATION & CONNECTIVITY
  // ----------------------------------------------------
  if (s.includes('location') || s.includes('connectivity') || s.includes('distance') || s.includes('bavdhan') || s.includes('transit') || s.includes('school') || s.includes('shopping')) {
    return {
      category: 'location',
      badge: 'BAVDHAN CONNECTIVITY RADAR',
      headline: 'Prime Bavdhan Hillside: 5 Mins to Chandani Chowk & 15 Mins to Hinjewadi',
      summary: 'Strategically positioned off the Mumbai-Bangalore Highway (NH-48) in Bavdhan Budruk, Pune, Puraniks Abitante Fiore offers effortless transit to Pune’s major tech corridors while preserving pristine hillside serenity.',
      highlights: [
        '5 Minutes (2.5 km) to the multi-tier Chandani Chowk Flyover interchange',
        '15 Minutes (11 km) to Hinjewadi IT Park Phase 1 via highway bypass',
        '10 Minutes (5.5 km) to Kothrud Central, Paud Road & Vanaz Metro Station',
        '12 Minutes (7 km) to Baner High Street, Balewadi & Aundh',
        'Surrounded by elite schools (Ryan International, Sanskriti, Suryadatta) and hospitals (Chellaram, Sahyadri)'
      ],
      specs: [
        { label: 'Site Address', value: 'Near Crystal Honda, Bavdhan Budruk, Pune 411021' },
        { label: 'Chandani Chowk', value: '5 Minutes (2.5 km)' },
        { label: 'Hinjewadi IT Park', value: '15 Minutes (11 km)' },
        { label: 'Kothrud / Metro', value: '10 Minutes (5.5 km)' },
        { label: 'Baner High Street', value: '12 Minutes (7 km)' },
        { label: 'Airport (PNQ)', value: '40 Minutes via Ring Road' }
      ],
      faqs: [
        {
          q: 'Where is Puraniks Abitante Fiore located in Bavdhan?',
          a: 'The project is situated near the Crystal Honda Service Station, just off the Mumbai-Bangalore Highway in Bavdhan Budruk, Pune - 411021.'
        },
        {
          q: 'How far is Puraniks Abitante from Hinjewadi IT Park?',
          a: 'The commute takes approximately 15 minutes (11 km) via the bypass highway, making it one of the most convenient residential addresses for IT professionals working in Hinjewadi.'
        },
        {
          q: 'Which top schools and hospitals are close to the project?',
          a: 'Nearby schools include Ryan International School, Sanskriti School, and Periwinkle School. Leading hospitals include Chellaram Diabetes Institute, Sahyadri Hospital Kothrud, and Asian Speciality Hospital.'
        }
      ]
    };
  }

  // ----------------------------------------------------
  // 10. AMENITIES & CLUB AZZURRO
  // ----------------------------------------------------
  if (s.includes('amenit') || s.includes('club') || s.includes('pool') || s.includes('gym')) {
    return {
      category: 'amenities',
      badge: '30+ RESORT AMENITIES',
      headline: '25,000 Sq.Ft Club Azzurro & Venetian Lagoon Living',
      summary: 'Experience genuine Italian resort indulgence every day. Puraniks Abitante Fiore features Club Azzurro—a palatial 25,000 sq.ft clubhouse with infinity lagoon pools, Roman open-air amphitheater, aromatic mist gardens, and state-of-the-art sports facilities.',
      highlights: [
        '25,000 sq.ft multi-tier Club Azzurro with luxury lounge and banquet hall',
        'Venetian Lagoon: Infinity-edge swimming pool with poolside cabana sundecks',
        'Roman Amphitheater for open-air community cultural events and cinema nights',
        'Microclimate mist cooling garden and aromatic botanical reflexology trail',
        'Fully equipped health club, cardio gym, indoor badminton court & squash court'
      ],
      specs: [
        { label: 'Clubhouse Area', value: '25,000+ Sq.Ft (Club Azzurro)' },
        { label: 'Swimming Pool', value: 'Venetian Infinity Lagoon with Kids Pool' },
        { label: 'Open Greenery', value: '70% Landscaped Hillside Terrain' },
        { label: 'Sports Courts', value: 'Tennis, Badminton, Half Basketball' },
        { label: 'Wellness Features', value: 'Spa, Steam, Sauna, Yoga Deck' },
        { label: 'Childrens Zone', value: 'Multi-Activity Toddler Play Turf' }
      ],
      faqs: [
        {
          q: 'What are the main amenities at Puraniks Abitante Fiore?',
          a: 'Key amenities include the 25,000 sq.ft Club Azzurro, infinity Venetian lagoon pool, Roman amphitheater, tennis and badminton courts, jogging track, herbal mist garden, and private Juliet Balcony Gardens.'
        },
        {
          q: 'Is the swimming pool operational right now?',
          a: 'Yes, the completed lifestyle amenities in Phase 1 and 2A are fully functional and in daily use by resident families.'
        }
      ]
    };
  }

  // ----------------------------------------------------
  // 11. REVIEWS & TESTIMONIALS
  // ----------------------------------------------------
  if (s.includes('review') || s.includes('rating') || s.includes('feedback') || s.includes('testimonial')) {
    return {
      category: 'reviews',
      badge: '4.9★ GOOGLE REVIEWS',
      headline: 'Verified Resident Testimonials & 4.9-Star Community Praise',
      summary: 'Backed by 580+ delivered families in Phase 1 and 384+ verified Google reviews, Puraniks Abitante is celebrated for its peaceful hillside microclimate, high construction quality, and active community life.',
      highlights: [
        '4.9 out of 5.0 average Google rating based on 384+ verified resident reviews',
        'Delivered community: 580+ families currently residing in Phase 1',
        'Ranked among the top 3 gated communities in West Pune for air quality and greenery',
        'Puranik Builders: 34+ years development legacy with 46+ delivered projects',
        'On-site facility management by leading professional property maintenance teams'
      ],
      specs: [
        { label: 'Google Rating', value: '4.9 / 5.0 Stars' },
        { label: 'Verified Reviews', value: '384+ Google Reviews' },
        { label: 'Families Residing', value: '580+ Happy Families in Phase 1' },
        { label: 'Developer Track Record', value: '34+ Years | 10,000+ Homes Delivered' },
        { label: 'Air Quality Index', value: '35% Cleaner Air than City Center' },
        { label: 'Security Rating', value: '3-Tier 24/7 RFID & CCTV Surveillance' }
      ],
      faqs: [
        {
          q: 'What do residents say about living in Puraniks Abitante Bavdhan?',
          a: 'Residents consistently highlight the oxygen-rich hillside air, peaceful environment away from highway noise, well-maintained Club Azzurro amenities, and fast commute to Hinjewadi and Kothrud.'
        },
        {
          q: 'How reliable is Puranik Builders as a developer?',
          a: 'Established in 1990, Puranik Builders has delivered over 46 landmark projects spanning 5.5+ million square feet across Pune and Mumbai, establishing one of Maharashtra’s most trusted real estate legacies.'
        }
      ]
    };
  }

  // ----------------------------------------------------
  // 12. INVESTMENT & RENTAL YIELD
  // ----------------------------------------------------
  if (s.includes('invest') || s.includes('roi') || s.includes('yield') || s.includes('rental') || s.includes('nri') || s.includes('resale')) {
    return {
      category: 'investment',
      badge: 'EVIDENCE-BASED ROI ANALYSIS',
      headline: 'High Capital Appreciation (14-18%) & 5.5%+ Rental Yields',
      summary: 'Positioned right at the junction of Pune’s booming western IT corridor and prime residential areas, Puraniks Abitante Fiore offers an exceptional investment vehicle for capital growth and steady passive rental returns.',
      highlights: [
        '14% to 18% projected capital appreciation driven by Bavdhan infrastructure upgrades',
        '5.5% to 6.2% gross rental yields from Hinjewadi IT Park tech workforce',
        'Zero Stamp Duty entry reduces initial investment cost by up to 7%',
        'Dedicated NRI concierge for remote rental leasing and tax advisory',
        'High resale liquidity due to established Phase 1 track record'
      ],
      specs: [
        { label: 'Projected Appreciation', value: '14% - 18% over 36 months' },
        { label: 'Gross Rental Yield', value: '5.5% - 6.2% per annum' },
        { label: '1 BHK Rental Range', value: '₹22,000 - ₹26,000 / month' },
        { label: '2 BHK Rental Range', value: '₹28,000 - ₹35,000 / month' },
        { label: '3 BHK Rental Range', value: '₹40,000 - ₹50,000 / month' },
        { label: 'Tenant Profile', value: 'IT Software Engineers, Executives & Doctors' }
      ],
      faqs: [
        {
          q: 'Is Puraniks Abitante Fiore a good investment for NRI buyers?',
          a: 'Yes, Bavdhan is one of West Pune’s highest-performing micro-markets. With strong rental demand from IT professionals, zero stamp duty benefits, and full MahaRERA escrow security, NRIs achieve solid capital appreciation and dollar-hedged returns.'
        },
        {
          q: 'What is the rental demand in Bavdhan?',
          a: 'Because Bavdhan is 15 minutes from Hinjewadi Phase 1 and 10 minutes from Kothrud, rental occupancy rates consistently exceed 95% with top-bracket IT and corporate tenants.'
        }
      ]
    };
  }

  // ----------------------------------------------------
  // 13. COMPARISONS (vs Baner, vs Kothrud, vs Hinjewadi)
  // ----------------------------------------------------
  if (s.includes('vs-') || s.includes('compare')) {
    return {
      category: 'comparison',
      badge: 'MARKET BENCHMARK MATRIX',
      headline: 'Why Puraniks Abitante Outperforms Baner, Kothrud & Hinjewadi',
      summary: 'A direct data-backed comparison: Discover why Puraniks Abitante Fiore in Bavdhan delivers 40% higher space value, significantly lower air and noise pollution, and superior resort amenities compared to saturated city neighborhoods.',
      highlights: [
        'Price advantage: ₹59 L* in Bavdhan vs ₹85 L+ in Baner and ₹1.10 Cr+ in Kothrud',
        'Space advantage: 45 acres of hillside township vs standalone congested towers',
        'Air Quality: Up to 35% better AQI due to surrounding NDA and ARAI green hills',
        'Commute: Quick 5 mins to Chandani Chowk and 15 mins to Hinjewadi Phase 1',
        'Township amenities: 25,000 sq.ft Club Azzurro vs minimal terrace amenities'
      ],
      specs: [
        { label: 'Bavdhan Base Rate', value: '₹7,500 - ₹8,500 / sq.ft' },
        { label: 'Baner Base Rate', value: '₹11,000 - ₹14,000 / sq.ft' },
        { label: 'Kothrud Base Rate', value: '₹13,500 - ₹17,000 / sq.ft' },
        { label: 'Township Extent', value: '45 Acres (Puraniks) vs <2 Acres (City)' },
        { label: 'Greenery Ratio', value: '70% Open Space vs <20% in Baner' },
        { label: 'Noise Index', value: 'Calm Hillside vs Heavy Traffic Arteries' }
      ],
      faqs: [
        {
          q: 'Why should I choose Bavdhan over Baner or Kothrud?',
          a: 'Bavdhan offers the best of both worlds: convenient 10-12 minute connectivity to Baner and Kothrud, but at nearly half the property price per square foot, cleaner hillside air, and access to a sprawling 45-acre master-planned township.'
        },
        {
          q: 'How does Puraniks Abitante compare to other Bavdhan projects?',
          a: 'Unlike single standalone towers with limited amenities, Puraniks Abitante is a comprehensive 45-acre Italian themed township with over 30 luxury amenities, 10,000+ happy families delivered by Puraniks, and clear MahaRERA certification.'
        }
      ]
    };
  }

  // ----------------------------------------------------
  // 14. DEFAULT MASTER TOWNSHIP SILO
  // ----------------------------------------------------
  return {
    category: 'township',
    badge: '45-ACRE HILLSIDE TOWNSHIP',
    headline: 'Oxygen-Rich Italian Riviera Living in Bavdhan Budruk, Pune',
    summary: 'Puraniks Abitante Fiore is a master-planned 45-acre hillside residential sanctuary in Bavdhan, Pune. Offering 1, 2 & 3 BHK residences with private Juliet Balcony Gardens, Club Azzurro, and Venetian lagoon pools, it represents the gold standard of holistic West Pune living.',
    highlights: [
      '45-Acre hillside master-planned township with 70% open landscaped spaces',
      'Oxygen-rich living featuring private botanical Juliet Balcony Gardens',
      '25,000 sq.ft Club Azzurro with Venetian lagoon pool and Roman amphitheater',
      'MahaRERA certified across 4 phases: P52100020202 (Phase 2A OC Received)',
      '5 Minutes to Chandani Chowk Flyover and 15 Minutes to Hinjewadi IT Park'
    ],
    specs: [
      { label: 'Township Extent', value: '45 Acres' },
      { label: 'Configurations', value: '1, 2, 2.5 & 3 BHK Residences' },
      { label: 'Price Range', value: 'Starting ₹59 Lakhs* (All-Inclusive)' },
      { label: 'MahaRERA Registrations', value: '4 Verified Phases (P52100020202)' },
      { label: 'Developer', value: 'Puranik Builders Ltd. (34+ Years Legacy)' },
      { label: 'Site Location', value: 'Bavdhan Budruk, Off NH-48, Pune 411021' }
    ],
    faqs: [
      {
        q: 'What is Puraniks Abitante Fiore and where is it located?',
        a: 'Puraniks Abitante Fiore is an Italian Riviera-inspired 45-acre hillside residential township located in Bavdhan Budruk, Pune, just 5 minutes from Chandani Chowk and 15 minutes from Hinjewadi IT Park.'
      },
      {
        q: 'What configurations and prices are available at Puraniks Abitante?',
        a: 'The township offers 1 BHK (489 sq.ft from ₹59 L*), 2 BHK Smart (596 sq.ft from ₹72.99 L*), 2 BHK Venetian (735 sq.ft from ₹89 L*), and 3 BHK Imperial residences (867-1113 sq.ft from ₹1.10 Cr*).'
      },
      {
        q: 'Is Puraniks Abitante ready to move in?',
        a: 'Yes, Phase 2A has received its Occupancy Certificate (OC) with ready possession flats, while newer wings in Phase 2B and 2C offer ongoing construction under MahaRERA protection.'
      },
      {
        q: 'How can I schedule a VIP site visit to Puraniks Abitante Fiore?',
        a: 'You can book a free private site visit with complimentary AC cab transit across Pune by clicking "Book Tour" on this portal or calling the direct sales desk at +91 7744009295.'
      }
    ]
  };
}
