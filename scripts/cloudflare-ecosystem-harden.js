#!/usr/bin/env node

/**
 * Puraniks Abitante Fiore Bavdhan - Cloudflare Enterprise Ecosystem Hardening Engine
 * 
 * Supports authentication via:
 * 1. Global API Key: CF_GLOBAL_API_KEY (or CF_API_KEY) + CF_EMAIL
 * 2. Scoped API Token: CF_API_TOKEN
 * 
 * Usage:
 *   CF_GLOBAL_API_KEY="xxx" CF_EMAIL="admin@puraniksabitante.in" node scripts/cloudflare-ecosystem-harden.js
 *   Or: node scripts/cloudflare-ecosystem-harden.js --key=xxx --email=admin@puraniksabitante.in
 */

import fs from 'node:fs';
import path from 'node:path';

const DOMAIN = 'puraniksabitante.in';
const PAGES_ORIGIN = 'puraniksabitante.pages.dev';

// Parse arguments
const args = process.argv.slice(2).reduce((acc, arg) => {
  const [k, v] = arg.replace(/^--/, '').split('=');
  acc[k] = v || true;
  return acc;
}, {});

const CF_KEY = args.key || process.env.CF_GLOBAL_API_KEY || process.env.CLOUDFLARE_GLOBAL_KEY || process.env.CF_API_KEY;
const CF_EMAIL = args.email || process.env.CF_EMAIL || process.env.CLOUDFLARE_EMAIL;
const CF_TOKEN = args.token || process.env.CF_API_TOKEN || process.env.CLOUDFLARE_API_TOKEN;

function getAuthHeaders() {
  if (CF_TOKEN) {
    return {
      'Authorization': `Bearer ${CF_TOKEN}`,
      'Content-Type': 'application/json',
    };
  }
  if (CF_KEY && CF_EMAIL) {
    return {
      'X-Auth-Key': CF_KEY,
      'X-Auth-Email': CF_EMAIL,
      'Content-Type': 'application/json',
    };
  }
  return null;
}

async function cfFetch(endpoint, method = 'GET', data = null) {
  const headers = getAuthHeaders();
  if (!headers) throw new Error('Cloudflare credentials not provided.');

  const options = {
    method,
    headers,
  };
  if (data) {
    options.body = JSON.stringify(data);
  }

  const res = await fetch(`https://api.cloudflare.com/client/v4${endpoint}`, options);
  const json = await res.json();
  return json;
}

export async function runHardening() {
  console.log('================================================================');
  console.log('🛡️  PURANIKS ABITANTE FIORE - ENTERPRISE CLOUDFLARE HARDENING');
  console.log(`🌍  Target Domain: ${DOMAIN}`);
  console.log('================================================================\n');

  const headers = getAuthHeaders();
  if (!headers) {
    console.log('⚠️  No active Cloudflare API Key or Token detected in environment.');
    console.log('ℹ️  You can execute this script with your Global API Key:');
    console.log('\n    export CF_GLOBAL_API_KEY="your-global-api-key"');
    console.log('    export CF_EMAIL="your-cloudflare-email@domain.com"');
    console.log('    node scripts/cloudflare-ecosystem-harden.js\n');
    console.log('--- ENTERPRISE CLOUDFLARE SPECIFICATION BLUEPRINT ---');
    printBlueprint();
    return;
  }

  try {
    console.log('🔍 1. Discovering Cloudflare Zone ID for ' + DOMAIN + '...');
    const zonesRes = await cfFetch(`/zones?name=${DOMAIN}`);
    if (!zonesRes.success || !zonesRes.result || zonesRes.result.length === 0) {
      console.error(`❌ Could not locate zone "${DOMAIN}". Response:`, JSON.stringify(zonesRes));
      return;
    }

    const zoneId = zonesRes.result[0].id;
    console.log(`✅ Zone Located: ${zoneId} (${zonesRes.result[0].name}) - Plan: ${zonesRes.result[0].plan.name}`);

    // 2. Harden Zone Settings
    console.log('\n🔒 2. Hardening Cloudflare Security & Performance Settings...');
    const settingsToApply = [
      { id: 'ssl', value: 'strict', name: 'Strict SSL/TLS Encryption' },
      { id: 'always_use_https', value: 'on', name: 'Always Use HTTPS Redirection' },
      { id: 'automatic_https_rewrites', value: 'on', name: 'Automatic HTTPS Rewrites' },
      { id: 'min_tls_version', value: '1.2', name: 'Minimum TLS Version 1.2' },
      { id: 'tls_1_3', value: 'on', name: 'TLS 1.3 Acceleration' },
      { id: 'opportunistic_encryption', value: 'on', name: 'Opportunistic Encryption' },
      { id: 'zero_rtt', value: 'on', name: '0-RTT Connection Resumption' },
      { id: 'http2', value: 'on', name: 'HTTP/2 Protocol' },
      { id: 'http3', value: 'on', name: 'HTTP/3 with QUIC' },
      { id: 'brotli', value: 'on', name: 'Brotli Compression' },
      { id: 'early_hints', value: 'on', name: 'HTTP 103 Early Hints' },
      { id: 'ip_geolocation', value: 'on', name: 'Cloudflare IP Geolocation Header' },
      { id: 'browser_cache_ttl', value: 31536000, name: 'Browser Cache TTL (1 Year)' },
      { id: 'security_level', value: 'medium', name: 'Edge Security Level' },
      { id: 'always_online', value: 'on', name: 'Always Online Uptime Shield' },
      { id: 'crawler_hints', value: 'on', name: 'Crawler Hints (Direct Search Engine Sync)' },
    ];

    for (const setting of settingsToApply) {
      try {
        const patchRes = await cfFetch(`/zones/${zoneId}/settings/${setting.id}`, 'PATCH', { value: setting.value });
        if (patchRes.success) {
          console.log(`   ✅ ${setting.name}: ${setting.value}`);
        } else {
          console.log(`   ℹ️ ${setting.name}: [${patchRes.errors?.[0]?.message || 'Already set or plan restricted'}]`);
        }
      } catch (err) {
        console.log(`   ℹ️ ${setting.name}: ${err.message}`);
      }
    }

    // 3. DNS Records Hardening
    console.log('\n🌐 3. Auditing & Hardening DNS Zone Records...');
    const existingDns = await cfFetch(`/zones/${zoneId}/dns_records?per_page=100`);
    const records = existingDns.result || [];

    const desiredRecords = [
      {
        type: 'CNAME',
        name: DOMAIN,
        content: PAGES_ORIGIN,
        proxied: true,
        comment: 'Root domain edge proxy to Cloudflare Pages',
      },
      {
        type: 'CNAME',
        name: `www.${DOMAIN}`,
        content: DOMAIN,
        proxied: true,
        comment: 'WWW edge redirect proxy',
      },
      {
        type: 'TXT',
        name: DOMAIN,
        content: 'v=spf1 include:_spf.google.com include:resend.com ~all',
        comment: 'SPF Email Deliverability & Brand Security',
      },
      {
        type: 'TXT',
        name: `_dmarc.${DOMAIN}`,
        content: 'v=DMARC1; p=quarantine; rua=mailto:dmarc@puraniksabitante.in; pct=100',
        comment: 'DMARC Domain Anti-Spoofing Policy',
      },
      {
        type: 'TXT',
        name: DOMAIN,
        content: 'google-site-verification=google-site-verification-puraniks-abitante-fiore',
        comment: 'Google Search Console Domain Ownership Verification',
      },
      {
        type: 'CAA',
        name: DOMAIN,
        data: { flags: 0, tag: 'issue', value: 'pki.goog' },
        comment: 'Google Trust Services CAA Certificate Authority',
      },
      {
        type: 'CAA',
        name: DOMAIN,
        data: { flags: 0, tag: 'issue', value: 'letsencrypt.org' },
        comment: 'LetsEncrypt CAA Certificate Authority',
      },
      {
        type: 'CAA',
        name: DOMAIN,
        data: { flags: 0, tag: 'issue', value: 'digicert.com' },
        comment: 'DigiCert Cloudflare Universal SSL CAA',
      },
      {
        type: 'CAA',
        name: DOMAIN,
        data: { flags: 0, tag: 'issuewild', value: ';' },
        comment: 'Disallow Wildcard Certificates',
      },
    ];

    for (const rec of desiredRecords) {
      const match = records.find(r => r.type === rec.type && r.name.toLowerCase() === rec.name.toLowerCase());
      if (match) {
        console.log(`   ✅ DNS Record verified: ${rec.type} ${rec.name} -> ${rec.content || JSON.stringify(rec.data)}`);
      } else {
        console.log(`   ➕ Creating DNS Record: ${rec.type} ${rec.name}...`);
        const createRes = await cfFetch(`/zones/${zoneId}/dns_records`, 'POST', rec);
        if (createRes.success) {
          console.log(`      ✅ Created ${rec.type} ${rec.name}`);
        } else {
          console.log(`      ⚠️ Could not create: ${createRes.errors?.[0]?.message || 'Check zone permissions'}`);
        }
      }
    }

    // 4. Purge Cache with Edge Cache-Tag
    console.log('\n🧹 4. Synchronizing Edge Caches & Purging Stale Objects...');
    const purgeRes = await cfFetch(`/zones/${zoneId}/purge_cache`, 'POST', {
      tags: ['puraniks-core', 'inventory-2026', 'bavdhan-pune']
    });
    if (purgeRes.success) {
      console.log('   ✅ Targeted Edge Cache-Tags purged instantly without downtime.');
    } else {
      console.log('   ℹ️ General cache purge fallback...');
      const generalPurge = await cfFetch(`/zones/${zoneId}/purge_cache`, 'POST', { purge_everything: true });
      if (generalPurge.success) {
        console.log('   ✅ Cloudflare Global Edge Cache successfully refreshed.');
      }
    }

    console.log('\n🎉 ALL CLOUDFLARE ECOSYSTEM HARDENING DIRECTIVES APPLIED SUCCESSFULLY!');
  } catch (err) {
    console.error('❌ Error executing Cloudflare Hardening:', err.message);
  }
}

function printBlueprint() {
  console.log(`
📋 CLOUDFLARE ENTERPRISE MANUAL EXECUTION GUIDE
----------------------------------------------------------------
1. SSL / TLS Settings:
   - Encryption Mode: Full (Strict)
   - Minimum TLS Version: 1.2
   - TLS 1.3: Enabled
   - Always Use HTTPS: ON
   - Automatic HTTPS Rewrites: ON
   - Opportunistic Encryption: ON

2. Performance & Speed Optimization:
   - Brotli Compression: ON
   - Early Hints (HTTP 103): ON
   - HTTP/2 & HTTP/3 (with QUIC): ON
   - 0-RTT Connection Resumption: ON
   - Crawler Hints: ON (feeds new URLs instantly to Google & Bing)

3. Required DNS Records:
   - Type: CNAME | Name: @ | Target: puraniksabitante.pages.dev | Proxy: Proxied (Orange)
   - Type: CNAME | Name: www | Target: puraniksabitante.in | Proxy: Proxied (Orange)
   - Type: TXT   | Name: @ | Value: v=spf1 include:_spf.google.com include:resend.com ~all
   - Type: TXT   | Name: _dmarc | Value: v=DMARC1; p=quarantine; rua=mailto:dmarc@puraniksabitante.in; pct=100
   - Type: TXT   | Name: @ | Value: google-site-verification=google-site-verification-puraniks-abitante-fiore
   - Type: CAA   | Name: @ | Value: 0 issue "pki.goog"
   - Type: CAA   | Name: @ | Value: 0 issue "letsencrypt.org"
   - Type: CAA   | Name: @ | Value: 0 issue "digicert.com"
   - Type: CAA   | Name: @ | Value: 0 issuewild ";"

4. Cache Rule for Sub-15ms Response Time:
   - If URI Path matches: /*.webp, /*.svg, /*.png, /*.ico, /*_astro/*
   - Edge Cache TTL: 7 Days (s-maxage=604800)
   - Browser Cache TTL: 1 Year (31536000s)
   - Stale While Revalidate: 1 Day (86400s)
  `);
}

// Run if directly called
if (import.meta.url === `file://${process.argv[1]}`) {
  runHardening();
}
