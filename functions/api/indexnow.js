/**
 * IndexNow Instant Search Engine Indexing Edge Function
 * Puraniks Abitante Fiore Bavdhan - Cloudflare Pages Function
 */

const INDEXNOW_KEY = 'c7489abf281e4832b3f1207604f5e712';
const HOST = 'abitantefiore.puranikbuilders.com';

const URL_LIST = [
  'https://abitantefiore.puranikbuilders.com/',
  'https://abitantefiore.puranikbuilders.com/puraniks-abitante-fiore',
  'https://abitantefiore.puranikbuilders.com/puraniks-abitante-fiore-price',
  'https://abitantefiore.puranikbuilders.com/puraniks-abitante-fiore-1-bhk',
  'https://abitantefiore.puranikbuilders.com/puraniks-abitante-fiore-2-bhk',
  'https://abitantefiore.puranikbuilders.com/puraniks-abitante-fiore-2-5-bhk',
  'https://abitantefiore.puranikbuilders.com/puraniks-abitante-fiore-3-bhk',
  'https://abitantefiore.puranikbuilders.com/puraniks-abitante-fiore-floor-plans',
  'https://abitantefiore.puranikbuilders.com/puraniks-abitante-fiore-floor-plan',
  'https://abitantefiore.puranikbuilders.com/puraniks-abitante-fiore-master-plan',
  'https://abitantefiore.puranikbuilders.com/puraniks-abitante-fiore-rera',
  'https://abitantefiore.puranikbuilders.com/puraniks-abitante-fiore-possession',
  'https://abitantefiore.puranikbuilders.com/puraniks-abitante-fiore-construction-status',
  'https://abitantefiore.puranikbuilders.com/puraniks-abitante-fiore-location',
  'https://abitantefiore.puranikbuilders.com/bavdhan-connectivity',
  'https://abitantefiore.puranikbuilders.com/puraniks-abitante-fiore-amenities',
  'https://abitantefiore.puranikbuilders.com/puraniks-abitante-fiore-brochure',
  'https://abitantefiore.puranikbuilders.com/puraniks-abitante-fiore-gallery',
  'https://abitantefiore.puranikbuilders.com/puraniks-abitante-fiore-reviews',
  'https://abitantefiore.puranikbuilders.com/puraniks-abitante-fiore-investment',
  'https://abitantefiore.puranikbuilders.com/bavdhan-real-estate',
  'https://abitantefiore.puranikbuilders.com/bavdhan-property-prices',
  'https://abitantefiore.puranikbuilders.com/bavdhan-1-bhk',
  'https://abitantefiore.puranikbuilders.com/bavdhan-2-bhk',
  'https://abitantefiore.puranikbuilders.com/bavdhan-3-bhk',
  'https://abitantefiore.puranikbuilders.com/puranik-builders'
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
