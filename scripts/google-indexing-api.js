#!/usr/bin/env node

/**
 * Puraniks Abitante Fiore Bavdhan - Google Indexing API Engine
 * Directly notifies Google Search when pages are created or updated.
 *
 * Requirements:
 * 1. A Google Cloud project with the "Web Search Indexing API" enabled.
 * 2. A Service Account with private key downloaded as JSON.
 * 3. The Service Account email added as an "Owner" in Google Search Console
 *    for https://puraniksabitante.in (or the domain property).
 *
 * Usage:
 *   GOOGLE_APPLICATION_CREDENTIALS=./service-account.json node scripts/google-indexing-api.js
 *   Or set GOOGLE_SERVICE_ACCOUNT_JSON with the JSON string.
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const TARGET_DOMAIN = 'https://puraniksabitante.in';

// Helper to base64url encode
function base64url(str) {
  return Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

// Generate JWT for Google OAuth2
function generateJWT(clientEmail, privateKey) {
  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const encodedHeader = base64url(JSON.stringify(header));
  const encodedClaim = base64url(JSON.stringify(claim));
  const signInput = `${encodedHeader}.${encodedClaim}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signInput);
  signer.end();
  const signature = signer.sign(privateKey, 'base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  return `${signInput}.${signature}`;
}

async function getAccessToken(clientEmail, privateKey) {
  const jwt = generateJWT(clientEmail, privateKey);
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to exchange JWT for access token: ${res.status} ${errorText}`);
  }

  const data = await res.json();
  return data.access_token;
}

async function notifyGoogle(url, accessToken, type = 'URL_UPDATED') {
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      url,
      type,
    }),
  });

  const body = await res.json();
  return { status: res.status, body };
}

function loadCredentials() {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    try {
      return JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
    } catch (e) {
      console.error('Error parsing GOOGLE_SERVICE_ACCOUNT_JSON env var:', e.message);
    }
  }

  const credPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || './google-service-account.json';
  if (fs.existsSync(credPath)) {
    try {
      const raw = fs.readFileSync(credPath, 'utf-8');
      return JSON.parse(raw);
    } catch (e) {
      console.error(`Error reading ${credPath}:`, e.message);
    }
  }

  return null;
}

async function main() {
  console.log('🚀 [Google Indexing API Engine] Initializing...');

  // Extract URLs from sitemap.xml
  const sitemapPath = path.resolve(process.cwd(), 'public/sitemap.xml');
  let targetUrls = [];

  if (fs.existsSync(sitemapPath)) {
    const xml = fs.readFileSync(sitemapPath, 'utf-8');
    const matches = xml.match(/<loc>(.*?)<\/loc>/g);
    if (matches) {
      targetUrls = matches.map((m) => m.replace(/<\/?loc>/g, '').trim());
    }
  }

  if (targetUrls.length === 0) {
    targetUrls = [
      TARGET_DOMAIN,
      `${TARGET_DOMAIN}/articles`,
      `${TARGET_DOMAIN}/puraniks-abitante-fiore`,
      `${TARGET_DOMAIN}/puraniks-abitante-bavdhan`,
      `${TARGET_DOMAIN}/flats-in-hinjewadi`,
      `${TARGET_DOMAIN}/flats-in-baner`,
      `${TARGET_DOMAIN}/puraniks-abitante-4-bhk`,
    ];
  }

  console.log(`📋 Total Target URLs detected for indexing: ${targetUrls.length}`);

  const creds = loadCredentials();
  if (!creds || !creds.client_email || !creds.private_key) {
    console.warn(`
⚠️  [Google Indexing API] No valid Google Service Account credentials found.
To enable direct instant Google Search indexing:
1. Enable the Web Search Indexing API in Google Cloud Console:
   https://console.cloud.google.com/apis/library/indexing.googleapis.com
2. Create a Service Account, download the JSON key.
3. Open Google Search Console -> Settings -> Users and permissions.
4. Add your Service Account email (e.g. indexing-bot@your-project.iam.gserviceaccount.com) as 'Owner'.
5. Run:
   GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json node scripts/google-indexing-api.js

👉 Ready target URLs (Top 10):
${targetUrls.slice(0, 10).map((u) => ` - ${u}`).join('\n')}
... and ${Math.max(0, targetUrls.length - 10)} more.
`);
    return;
  }

  console.log(`🔑 Authenticating as Service Account: ${creds.client_email}`);
  const accessToken = await getAccessToken(creds.client_email, creds.private_key);
  console.log('✅ OAuth2 Access Token successfully acquired.');

  console.log(`⚡ Dispatching URL_UPDATED notifications to Google Indexing API...`);
  let successCount = 0;
  let failCount = 0;

  for (const url of targetUrls) {
    try {
      const { status, body } = await notifyGoogle(url, accessToken, 'URL_UPDATED');
      if (status === 200) {
        successCount++;
        console.log(` [200 OK] Indexed: ${url}`);
      } else {
        failCount++;
        console.warn(` [${status}] Error for ${url}:`, body.error?.message || body);
      }
    } catch (err) {
      failCount++;
      console.error(` [ERR] ${url}:`, err.message);
    }
  }

  console.log(`\n🎉 Indexing API Complete: ${successCount} successful, ${failCount} failed.`);
}

main().catch((err) => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
