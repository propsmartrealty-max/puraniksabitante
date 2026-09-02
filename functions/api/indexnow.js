/**
 * IndexNow Instant Search Engine Indexing Edge Function
 * Puraniks Abitante Fiore Bavdhan - Cloudflare Pages Function
 */

const INDEXNOW_KEY = 'c7489abf281e4832b3f1207604f5e712';
const HOST = 'puraniksabitante.in';

const URL_LIST = [
  'https://puraniksabitante.in/',
  'https://puraniksabitante.in/puraniks-abitante-fiore',
  'https://puraniksabitante.in/puraniks-abitante-fiore-price',
  'https://puraniksabitante.in/puraniks-abitante-fiore-1-bhk',
  'https://puraniksabitante.in/puraniks-abitante-fiore-2-bhk',
  'https://puraniksabitante.in/puraniks-abitante-fiore-2-5-bhk',
  'https://puraniksabitante.in/puraniks-abitante-fiore-3-bhk',
  'https://puraniksabitante.in/puraniks-abitante-fiore-floor-plans',
  'https://puraniksabitante.in/puraniks-abitante-fiore-floor-plan',
  'https://puraniksabitante.in/puraniks-abitante-fiore-master-plan',
  'https://puraniksabitante.in/puraniks-abitante-fiore-rera',
  'https://puraniksabitante.in/puraniks-abitante-fiore-possession',
  'https://puraniksabitante.in/puraniks-abitante-fiore-construction-status',
  'https://puraniksabitante.in/puraniks-abitante-fiore-location',
  'https://puraniksabitante.in/bavdhan-connectivity',
  'https://puraniksabitante.in/puraniks-abitante-fiore-amenities',
  'https://puraniksabitante.in/puraniks-abitante-fiore-brochure',
  'https://puraniksabitante.in/puraniks-abitante-fiore-gallery',
  'https://puraniksabitante.in/puraniks-abitante-fiore-reviews',
  'https://puraniksabitante.in/puraniks-abitante-fiore-investment',
  'https://puraniksabitante.in/bavdhan-real-estate',
  'https://puraniksabitante.in/bavdhan-property-prices',
  'https://puraniksabitante.in/bavdhan-1-bhk',
  'https://puraniksabitante.in/bavdhan-2-bhk',
  'https://puraniksabitante.in/bavdhan-3-bhk',
  'https://puraniksabitante.in/puranik-builders'
];

export async function onRequestPost(context) {
  try {
    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: URL_LIST
    };

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    return new Response(JSON.stringify({
      success: true,
      message: 'Instant IndexNow notification submitted successfully to Bing, Google & AI Search Engines.',
      submittedUrlsCount: URL_LIST.length,
      status: response.status
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function onRequestGet() {
  return new Response(JSON.stringify({
    service: 'Puraniks Abitante Fiore IndexNow API',
    endpoint: '/api/indexnow',
    totalTrackedUrls: URL_LIST.length,
    keyRegistered: true
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
