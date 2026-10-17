import fs from 'node:fs';
import path from 'node:path';

const TODAY = '2026-10-17T00:00:00+05:30';
const DOMAIN = 'https://puraniksabitante.in';

// 1. Read [slug].astro to extract all registered routes
const slugFile = fs.readFileSync('src/pages/[slug].astro', 'utf8');
const slugMatches = [...slugFile.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);

// 2. Read prerender.js to extract any extra routes
const prerenderFile = fs.readFileSync('scripts/prerender.js', 'utf8');
const prerenderMatches = [...prerenderFile.matchAll(/path:\s*'([^']+)'/g)].map(m => m[1]);

// Distinct all slugs
const allSlugs = Array.from(new Set([...slugMatches, ...prerenderMatches])).sort();
console.log(`Found ${allSlugs.length} unique landing page slugs.`);

// 3. Define priority mapping based on search intent
function getPriority(slug) {
  if (slug === '' || slug === 'puraniks-abitante' || slug === 'puraniks-abitante-fiore' || slug === 'puraniks-abitante-price') return '1.0';
  if (slug.includes('1-bhk') || slug.includes('2-bhk') || slug.includes('3-bhk') || slug.includes('floor-plan') || slug.includes('bavdhan')) return '0.9';
  if (slug.includes('rera') || slug.includes('possession') || slug.includes('amenities') || slug.includes('brochure') || slug.includes('contact')) return '0.85';
  return '0.8';
}

function getChangeFreq(slug) {
  if (slug === '' || slug.includes('price') || slug.includes('fiore')) return 'daily';
  return 'weekly';
}

// 4. Build hardened Google Standard XML Sitemap
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  
  <!-- Primary Home Portal -->
  <url>
    <loc>${DOMAIN}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${DOMAIN}/images/slider/pweb.webp</image:loc>
      <image:title>Puraniks Abitante Fiore Bavdhan Pune</image:title>
      <image:caption>45-Acre Hillside Italian Township in Bavdhan Budruk Pune</image:caption>
    </image:image>
  </url>

  <!-- HTML Master Sitemap Hub -->
  <url>
    <loc>${DOMAIN}/sitemap</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
`;

for (const slug of allSlugs) {
  const priority = getPriority(slug);
  const changefreq = getChangeFreq(slug);
  
  // Attach relevant floor plan or layout image if available
  let imageTag = '';
  if (slug.includes('1-bhk') || slug.includes('floor-plan')) {
    imageTag = `
    <image:image>
      <image:loc>${DOMAIN}/images/gallery/floor/1.webp</image:loc>
      <image:title>Floor Plan - ${slug}</image:title>
    </image:image>`;
  } else if (slug.includes('2-bhk')) {
    imageTag = `
    <image:image>
      <image:loc>${DOMAIN}/images/gallery/floor/2.webp</image:loc>
      <image:title>Floor Plan 2 BHK - ${slug}</image:title>
    </image:image>`;
  } else if (slug.includes('3-bhk')) {
    imageTag = `
    <image:image>
      <image:loc>${DOMAIN}/images/gallery/floor/3.webp</image:loc>
      <image:title>Floor Plan 3 BHK - ${slug}</image:title>
    </image:image>`;
  } else if (slug.includes('master-plan')) {
    imageTag = `
    <image:image>
      <image:loc>${DOMAIN}/images/gallery/master/1.webp</image:loc>
      <image:title>Master Plan Blueprint - ${slug}</image:title>
    </image:image>`;
  }

  xml += `  <url>
    <loc>${DOMAIN}/${slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${imageTag}
  </url>\n`;
}

xml += `</urlset>\n`;

fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
console.log('✅ Generated public/sitemap.xml with full Google Sitemaps Schema compliance.');

// 5. Generate Google Standard Sitemap Index (sitemap-index.xml)
const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${DOMAIN}/sitemap.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/image-sitemap.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/video-sitemap.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
</sitemapindex>
`;

fs.writeFileSync('public/sitemap-index.xml', indexXml, 'utf8');
fs.writeFileSync('public/sitemap_index.xml', indexXml, 'utf8');
console.log('✅ Generated public/sitemap-index.xml and public/sitemap_index.xml.');

// 6. Generate Google Standard Video Sitemap (video-sitemap.xml)
const videoXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${DOMAIN}/</loc>
    <video:video>
      <video:thumbnail_loc>${DOMAIN}/images/slider/pweb.webp</video:thumbnail_loc>
      <video:title>Puraniks Abitante Fiore Bavdhan Pune - Official Township Walkthrough &amp; Virtual Tour</video:title>
      <video:description>Official video walkthrough tour of Puraniks Abitante Fiore in Bavdhan Budruk, Pune. Explore 45-acre Italian Riviera township with Club Azzurro, infinity swimming pool, and Juliet Balcony Gardens.</video:description>
      <video:content_loc>https://www.youtube.com/watch?v=WOPqlTKXMd8</video:content_loc>
      <video:player_loc>https://www.youtube-nocookie.com/embed/WOPqlTKXMd8</video:player_loc>
      <video:duration>185</video:duration>
      <video:publication_date>${TODAY}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>
  </url>
  <url>
    <loc>${DOMAIN}/puraniks-abitante-fiore</loc>
    <video:video>
      <video:thumbnail_loc>${DOMAIN}/images/slider/pweb.webp</video:thumbnail_loc>
      <video:title>Puraniks Abitante Fiore Phase 2 Luxury Residences Tour</video:title>
      <video:description>Architectural walkthrough and sample flat video tour of 1, 2 &amp; 3 BHK apartments at Puraniks Abitante Fiore Bavdhan.</video:description>
      <video:content_loc>https://www.youtube.com/watch?v=WOPqlTKXMd8</video:content_loc>
      <video:player_loc>https://www.youtube-nocookie.com/embed/WOPqlTKXMd8</video:player_loc>
      <video:duration>185</video:duration>
      <video:publication_date>${TODAY}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>
  </url>
</urlset>
`;

fs.writeFileSync('public/video-sitemap.xml', videoXml, 'utf8');
console.log('✅ Generated public/video-sitemap.xml for Google Video Search.');
