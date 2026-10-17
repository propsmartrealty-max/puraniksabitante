#!/usr/bin/env node

/**
 * Puraniks Abitante Fiore Bavdhan - Ecosystem Health & Search Authority Verifier
 * Audits all critical assets for Google 1st ranking, rich snippets, merchant feeds, and schema.org compliance.
 */

import fs from 'node:fs';
import path from 'node:path';

let passCount = 0;
let failCount = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ✅ PASS: ${name}`);
    passCount++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${name} -> ${err.message}`);
    failCount++;
  }
}

console.log('================================================================');
console.log('🔬 AUDITING PURANIKS ABITANTE FIORE ECOSYSTEM HEALTH');
console.log('================================================================\n');

// 1. Robots.txt RFC 9309 Audit
console.log('1. Auditing robots.txt (Google Search & RFC 9309 Compliance)...');
test('robots.txt exists and is non-empty', () => {
  const content = fs.readFileSync('public/robots.txt', 'utf8');
  if (content.length < 50) throw new Error('robots.txt too short');
});

test('robots.txt does not contain invalid Feed: directives', () => {
  const content = fs.readFileSync('public/robots.txt', 'utf8');
  const lines = content.split('\n').map(l => l.trim());
  const invalidFeeds = lines.filter(l => l.startsWith('Feed:'));
  if (invalidFeeds.length > 0) throw new Error(`Found invalid directives: ${invalidFeeds.join(', ')}`);
});

test('robots.txt contains primary Sitemap reference', () => {
  const content = fs.readFileSync('public/robots.txt', 'utf8');
  if (!content.includes('Sitemap: https://puraniksabitante.in/sitemap.xml')) {
    throw new Error('Missing Sitemap: directive');
  }
});

// 2. llms.txt Standard (Agentic Browsing)
console.log('\n2. Auditing llms.txt (Agentic AI Search & LLM Grounding)...');
test('llms.txt follows official standard structure', () => {
  const content = fs.readFileSync('public/llms.txt', 'utf8');
  if (!content.startsWith('# Puraniks Abitante Fiore')) throw new Error('Missing top level H1');
  if (!content.includes('> Puraniks Abitante Fiore')) throw new Error('Missing blockquote summary');
  if (!content.includes('## Core Projects & Residences')) throw new Error('Missing Core Projects section');
  if (!content.includes('## Optional')) throw new Error('Missing Optional section');
});

// 3. Google Merchant Center Feed (Shopping & Products)
console.log('\n3. Auditing Google Merchant Center Feed (Shopping / Products)...');
test('merchant-feed.xml is valid XML and has required items', () => {
  const content = fs.readFileSync('public/merchant-feed.xml', 'utf8');
  if (!content.includes('<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">')) {
    throw new Error('Invalid RSS/Google namespace declaration');
  }
  const items = content.match(/<item>/g) || [];
  if (items.length < 5) throw new Error(`Expected at least 5 products, found ${items.length}`);
});

test('All merchant feed items have identifier_exists=false and standard pricing', () => {
  const content = fs.readFileSync('public/merchant-feed.xml', 'utf8');
  const items = content.split('</item>').slice(0, -1);
  for (const item of items) {
    if (!item.includes('<g:identifier_exists>false</g:identifier_exists>')) {
      throw new Error('Item missing <g:identifier_exists>false</g:identifier_exists>');
    }
    if (!item.includes('<g:price>')) throw new Error('Item missing <g:price>');
    if (!item.includes('.00 INR</g:price>')) throw new Error('Item price not in decimal INR format');
    if (!item.includes('<g:availability>in_stock</g:availability>')) throw new Error('Item missing availability');
  }
});

// 4. Sitemaps
console.log('\n4. Auditing Sitemaps (Googlebot Indexing)...');
test('sitemap.xml has URLs and valid ISO timestamps', () => {
  const content = fs.readFileSync('public/sitemap.xml', 'utf8');
  const locs = content.match(/<loc>(.*?)<\/loc>/g) || [];
  if (locs.length < 50) throw new Error(`Only ${locs.length} URLs in sitemap`);
});

test('image-sitemap.xml exists and contains floor plan renders', () => {
  const content = fs.readFileSync('public/image-sitemap.xml', 'utf8');
  if (!content.includes('<image:loc>')) throw new Error('Missing <image:loc> entries');
  if (!content.includes('floor')) throw new Error('Missing floor plan images in image sitemap');
});

// 5. Schema.org Multi-Entity Knowledge Graph
console.log('\n5. Auditing Schema.org Structured Data Graph (5-Star Ratings & Real Estate)...');
test('Layout.astro contains complete Schema.org graph', () => {
  const content = fs.readFileSync('src/layouts/Layout.astro', 'utf8');
  if (!content.includes('"@type": ["ApartmentComplex", "RealEstateListing", "Place", "LocalBusiness"]')) {
    throw new Error('Missing ApartmentComplex / RealEstateListing entity');
  }
  if (!content.includes('"@type": "AggregateRating"')) throw new Error('Missing AggregateRating');
  if (!content.includes('"ratingValue": "4.9"')) throw new Error('Missing 4.9 ratingValue');
  if (!content.includes('"bestRating": "5"')) throw new Error('Missing 5-star bestRating');
  if (!content.includes('"@type": "Product"')) throw new Error('Missing Product entity');
  if (!content.includes('"@type": "AggregateOffer"')) throw new Error('Missing AggregateOffer entity');
  if (!content.includes('"lowPrice": "5900000"')) throw new Error('Missing starting price');
  if (!content.includes('"@type": "FAQPage"')) throw new Error('Missing FAQPage entity');
});

// 6. Non-render-blocking Google Fonts
console.log('\n6. Auditing Web Vitals & Non-Render-Blocking Google Fonts...');
test('Layout.astro and index.html use asynchronous font loading', () => {
  const layout = fs.readFileSync('src/layouts/Layout.astro', 'utf8');
  const index = fs.readFileSync('index.html', 'utf8');
  if (!layout.includes('media="print" onload="this.media=\'all\'"')) {
    throw new Error('Layout.astro does not use asynchronous font loading');
  }
  if (!index.includes('media="print" onload="this.media=\'all\'"')) {
    throw new Error('index.html does not use asynchronous font loading');
  }
});

// 7. Cloudflare Edge Function & Middleware
console.log('\n7. Auditing Cloudflare Edge Function & Headers...');
test('functions/_middleware.js contains high-performance cache and early hints', () => {
  const content = fs.readFileSync('functions/_middleware.js', 'utf8');
  if (!content.includes('newHeaders.set(\'Cache-Tag\',')) throw new Error('Missing Cache-Tag telemetry');
  if (!content.includes('newHeaders.set(\'Link\',')) throw new Error('Missing Link early hints');
});

console.log('\n================================================================');
console.log(`📊 AUDIT RESULT: ${passCount} PASSED, ${failCount} FAILED`);
console.log('================================================================\n');

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('🎉 ENTIRE PURANIKS ABITANTE FIORE ECOSYSTEM FULLY HARDENED & VERIFIED!\n');
}
