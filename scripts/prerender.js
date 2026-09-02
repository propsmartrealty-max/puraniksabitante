import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const baseHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(baseHtmlPath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

const ROUTES = [
  {
    path: 'puraniks-abitante-fiore',
    title: 'Puraniks Abitante Fiore Bavdhan Pune | Official 1, 2 & 3 BHK Italian Township',
    description: 'Official master portal for Puraniks Abitante Fiore in Bavdhan Budruk, Pune. 45-acre hillside Italian township featuring 1, 2 & 3 BHK residences with Balcony Gardens and Club Azzurro. Starting ₹51.99 Lakhs*.',
    canonical: 'https://puraniksabitante.in/puraniks-abitante-fiore'
  },
  {
    path: 'puraniks-abitante-fiore-price',
    title: 'Puraniks Abitante Fiore Price List 2026 | Cost Sheet & All-Inclusive Rates Bavdhan',
    description: 'Verified official price list for Puraniks Abitante Fiore Bavdhan. 1 BHK from ₹51.99 L*, 2 BHK Smart (596 sq.ft) from ₹63.99 L*, 3 BHK from ₹97.50 L*. Zero Stamp Duty privilege.',
    canonical: 'https://puraniksabitante.in/puraniks-abitante-fiore-price'
  },
  {
    path: 'puraniks-abitante-fiore-1-bhk',
    title: '1 BHK Flats in Puraniks Abitante Fiore Bavdhan Pune | 489 Sq.Ft Oxygen Homes',
    description: 'Explore 489 sq.ft carpet 1 BHK oxygen-rich apartments at Puraniks Abitante Fiore Bavdhan. Private Juliet Balcony Gardens, Vastu compliant layout, starting ₹51.99 Lakhs*.',
    canonical: 'https://puraniksabitante.in/puraniks-abitante-fiore-1-bhk'
  },
  {
    path: 'puraniks-abitante-fiore-2-bhk',
    title: '2 BHK Smart Flats in Puraniks Abitante Fiore Bavdhan | 596 - 770 Sq.Ft Residences',
    description: 'Buy luxury 2 BHK Smart & Venetian 2 BHK apartments in Puraniks Abitante Fiore Bavdhan Pune. 596 to 770 sq.ft carpet area, dual balconies, starting ₹63.99 Lakhs*.',
    canonical: 'https://puraniksabitante.in/puraniks-abitante-fiore-2-bhk'
  },
  {
    path: 'puraniks-abitante-fiore-2-5-bhk',
    title: '2.5 BHK Apartments in Puraniks Abitante Fiore Bavdhan Pune | Work From Home Luxury',
    description: 'Spacious 2.5 BHK homes at Puraniks Abitante Fiore Bavdhan with dedicated study/work lounge, hillside valley views, and resort amenities.',
    canonical: 'https://puraniksabitante.in/puraniks-abitante-fiore-2-5-bhk'
  },
  {
    path: 'puraniks-abitante-fiore-3-bhk',
    title: '3 BHK Luxury Apartments in Puraniks Abitante Fiore Bavdhan | 867 - 908 Sq.Ft',
    description: 'Grand 3 BHK Imperial residences in Puraniks Abitante Fiore Bavdhan. Triple balconies, 270° hillside views, master bedroom suites, starting ₹97.50 Lakhs*.',
    canonical: 'https://puraniksabitante.in/puraniks-abitante-fiore-3-bhk'
  },
  {
    path: 'puraniks-abitante-fiore-floor-plans',
    title: 'Puraniks Abitante Fiore Floor Plans PDF | 2D & 3D Architectural Blueprints',
    description: 'Download certified 2D AutoCAD floor plans and 3D cut-sections for 1, 2, 2.5 & 3 BHK flats at Puraniks Abitante Fiore Bavdhan Pune with exact RERA carpet areas.',
    canonical: 'https://puraniksabitante.in/puraniks-abitante-fiore-floor-plans'
  },
  {
    path: 'puraniks-abitante-fiore-floor-plan',
    title: 'Puraniks Abitante Fiore Floor Plans PDF | 1, 2 & 3 BHK Layouts',
    description: 'Download certified 2D AutoCAD floor plans and 3D cut-sections for 1, 2, 2.5 & 3 BHK flats at Puraniks Abitante Fiore Bavdhan Pune.',
    canonical: 'https://puraniksabitante.in/puraniks-abitante-fiore-floor-plan'
  },
  {
    path: 'puraniks-abitante-fiore-master-plan',
    title: 'Puraniks Abitante Fiore Master Plan Layout | 45-Acre Township Blueprint',
    description: 'View the 45-acre master layout plan of Puraniks Abitante Fiore in Bavdhan Budruk, Pune. Residential towers, Club Azzurro, Venetian lagoon pool, and mist gardens.',
    canonical: 'https://puraniksabitante.in/puraniks-abitante-fiore-master-plan'
  },
  {
    path: 'puraniks-abitante-fiore-rera',
    title: 'Puraniks Abitante Fiore MahaRERA Number | Phase 2A, 2B, 2C & 2C1 Verified',
    description: 'Official MahaRERA registration certificates for Puraniks Abitante Fiore: Phase 2A (P52100020202), Phase 2B (P52100020238), Phase 2C (P52100048353), Phase 2C1 (P52100049352).',
    canonical: 'https://puraniksabitante.in/puraniks-abitante-fiore-rera'
  },
  {
    path: 'puraniks-abitante-fiore-possession',
    title: 'Puraniks Abitante Fiore Possession Dates & Timeline by Phase | Bavdhan Pune',
    description: 'Phase-wise possession timelines for Puraniks Abitante Fiore: Ready possession in Phase 2A, ongoing finishing in Phase 2B, and construction milestone schedules.',
    canonical: 'https://puraniksabitante.in/puraniks-abitante-fiore-possession'
  },
  {
    path: 'puraniks-abitante-fiore-construction-status',
    title: 'Puraniks Abitante Fiore Construction Status | September 2026 Live Updates',
    description: 'Latest September 2026 construction progress report for Puraniks Abitante Fiore Bavdhan. Slab pouring updates, Mivan shuttering milestones, and site photos.',
    canonical: 'https://puraniksabitante.in/puraniks-abitante-fiore-construction-status'
  },
  {
    path: 'puraniks-abitante-fiore-location',
    title: 'Puraniks Abitante Fiore Location & Site Address | Bavdhan Budruk Pune',
    description: 'Site address of Puraniks Abitante Fiore: Near Crystal Honda Service Station, Off Mumbai-Bangalore Highway, Bavdhan Budruk, Pune - 411021. 5 min to Chandani Chowk.',
    canonical: 'https://puraniksabitante.in/puraniks-abitante-fiore-location'
  },
  {
    path: 'bavdhan-connectivity',
    title: 'Bavdhan Transit & Connectivity Radar | Distance to Hinjewadi, Kothrud & Baner',
    description: 'Verified driving distances from Bavdhan: 5 min to Chandani Chowk Flyover, 15 min to Hinjewadi IT Park, 10 min to Kothrud, and 12 min to Baner High Street.',
    canonical: 'https://puraniksabitante.in/bavdhan-connectivity'
  },
  {
    path: 'puraniks-abitante-fiore-amenities',
    title: 'Puraniks Abitante Fiore Amenities | Club Azzurro & Venetian Pool',
    description: 'Explore 30+ resort-style lifestyle amenities at Puraniks Abitante Fiore: 25,000 sq.ft Club Azzurro, infinity lagoon pool, mist garden, Roman amphitheater, and gym.',
    canonical: 'https://puraniksabitante.in/puraniks-abitante-fiore-amenities'
  },
  {
    path: 'puraniks-abitante-fiore-brochure',
    title: 'Download Puraniks Abitante Fiore Brochure PDF | Official E-Brochure',
    description: 'Download the official Puraniks Abitante Fiore e-brochure PDF with high-resolution floor plans, master layout, amenities, and current cost sheet.',
    canonical: 'https://puraniksabitante.in/puraniks-abitante-fiore-brochure'
  },
  {
    path: 'puraniks-abitante-fiore-reviews',
    title: 'Puraniks Abitante Fiore Reviews & Resident Testimonials | Bavdhan Pune',
    description: 'Verified resident reviews and testimonials for Puraniks Abitante Fiore Bavdhan. 4.8/5.0 star rating based on 280+ delivered families.',
    canonical: 'https://puraniksabitante.in/puraniks-abitante-fiore-reviews'
  },
  {
    path: 'puraniks-abitante-fiore-investment',
    title: 'Puraniks Abitante Fiore Investment Review | Capital ROI & Rental Yields',
    description: 'Investment analysis for Puraniks Abitante Fiore Bavdhan. 14-18% projected appreciation, high rental yields from Hinjewadi IT Park tech workforce, NRI opportunities.',
    canonical: 'https://puraniksabitante.in/puraniks-abitante-fiore-investment'
  },
  {
    path: 'bavdhan-real-estate',
    title: 'Bavdhan Real Estate Market Guide 2026 | Property Prices & New Projects',
    description: 'Comprehensive guide to buying residential property in Bavdhan, Pune. Price trends, Bavdhan vs Kothrud vs Baner comparison, infrastructure growth.',
    canonical: 'https://puraniksabitante.in/bavdhan-real-estate'
  },
  {
    path: 'bavdhan-property-prices',
    title: 'Bavdhan Property Prices 2026 | Per Sq.Ft Rates & Trends in West Pune',
    description: 'Current real estate prices and per square foot rates in Bavdhan Budruk, Pune. Historical appreciation data and price forecasts.',
    canonical: 'https://puraniksabitante.in/bavdhan-property-prices'
  },
  {
    path: 'bavdhan-1-bhk',
    title: '1 BHK Flats for Sale in Bavdhan Pune | Verified Listings & Projects',
    description: 'Find premium and affordable 1 BHK flats in Bavdhan Budruk, Pune. Starting from ₹51.99 Lakhs* at Puraniks Abitante Fiore.',
    canonical: 'https://puraniksabitante.in/bavdhan-1-bhk'
  },
  {
    path: 'bavdhan-2-bhk',
    title: '2 BHK Flats for Sale in Bavdhan Pune | Verified Pricing & Floor Plans',
    description: 'Best 2 BHK apartments in Bavdhan Pune near Chandani Chowk and Hinjewadi IT Park. Explore Puraniks Abitante Fiore 2 BHK Smart residences.',
    canonical: 'https://puraniksabitante.in/bavdhan-2-bhk'
  },
  {
    path: 'bavdhan-3-bhk',
    title: '3 BHK Luxury Flats for Sale in Bavdhan Pune | Hillside View Apartments',
    description: 'Explore 3 BHK luxury hilltop apartments in Bavdhan, West Pune with panoramic valley views and resort amenities at Puraniks Abitante Fiore.',
    canonical: 'https://puraniksabitante.in/bavdhan-3-bhk'
  },
  {
    path: 'puranik-builders',
    title: 'Puranik Builders Limited | 34+ Years Developer Legacy & Pune Projects',
    description: 'Official background and track record of Puranik Builders Ltd. Founded in 1990, 46+ delivered landmarks, 10,000+ delivered families across Pune & MMR.',
    canonical: 'https://puraniksabitante.in/puranik-builders'
  }
];

console.log(`Generating ${ROUTES.length} static pre-rendered HTML routes for #1 Google ranking...`);

ROUTES.forEach(route => {
  const routeDir = path.join(distDir, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  let html = baseHtml;
  // Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  html = html.replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${route.title}" />`);
  // Replace Description
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`);
  // Replace Canonical
  html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${route.canonical}" />`);
  // Replace OG tags
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${route.canonical}" />`);
  // Replace Twitter tags
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.description}" />`);

  fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
  console.log(`✓ Generated: dist/${route.path}/index.html`);
});

console.log(`🎉 All ${ROUTES.length} static HTML routes successfully generated for Googlebot and search engines!`);
