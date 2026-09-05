/**
 * Cloudflare Pages Function: /api/indexnow
 * Instant Real-Time Indexing Push to Google / Bing / Yandex / AI Search Crawlers
 * Broadcasts all 50+ permutation URLs across the Puraniks Abitante Fiore Keyword Ecosystem.
 */

const INDEXNOW_KEY = 'c7489abf281e4832b3f1207604f5e712';
const HOST = 'puraniksabitante.in';

const URL_LIST = [
  'https://puraniksabitante.in/',
  'https://puraniksabitante.in/puraniks-abitante',
  'https://puraniksabitante.in/puraniks-abitante-bavdhan',
  'https://puraniksabitante.in/puraniks-abitante-pune',
  'https://puraniksabitante.in/puraniks-abitante-fiore',
  'https://puraniksabitante.in/puraniks-abitante-fiore-bavdhan',
  'https://puraniksabitante.in/puraniks-abitante-phase-1',
  'https://puraniksabitante.in/puraniks-abitante-phase-2',
  'https://puraniksabitante.in/puraniks-abitante-official',
  'https://puraniksabitante.in/puraniks-abitante-price',
  'https://puraniksabitante.in/puraniks-abitante-fiore-price',
  'https://puraniksabitante.in/puraniks-abitante-cost-sheet',
  'https://puraniksabitante.in/puraniks-abitante-rate-per-sq-ft',
  'https://puraniksabitante.in/puraniks-abitante-payment-plan',
  'https://puraniksabitante.in/puraniks-abitante-all-inclusive-price',
  'https://puraniksabitante.in/puraniks-abitante-1-bhk',
  'https://puraniksabitante.in/puraniks-abitante-2-bhk',
  'https://puraniksabitante.in/puraniks-abitante-2-5-bhk',
  'https://puraniksabitante.in/puraniks-abitante-3-bhk',
  'https://puraniksabitante.in/puraniks-abitante-fiore-1-bhk',
  'https://puraniksabitante.in/puraniks-abitante-fiore-2-bhk',
  'https://puraniksabitante.in/puraniks-abitante-fiore-2-5-bhk',
  'https://puraniksabitante.in/puraniks-abitante-fiore-3-bhk',
  'https://puraniksabitante.in/puraniks-abitante-floor-plan',
  'https://puraniksabitante.in/puraniks-abitante-floor-plans',
  'https://puraniksabitante.in/puraniks-abitante-fiore-floor-plans',
  'https://puraniksabitante.in/puraniks-abitante-master-plan',
  'https://puraniksabitante.in/puraniks-abitante-fiore-master-plan',
  'https://puraniksabitante.in/puraniks-abitante-carpet-area',
  'https://puraniksabitante.in/puraniks-abitante-rera',
  'https://puraniksabitante.in/puraniks-abitante-fiore-rera',
  'https://puraniksabitante.in/puraniks-abitante-maharera-number',
  'https://puraniksabitante.in/puraniks-abitante-possession',
  'https://puraniksabitante.in/puraniks-abitante-fiore-possession',
  'https://puraniksabitante.in/puraniks-abitante-construction-status',
  'https://puraniksabitante.in/puraniks-abitante-fiore-construction-status',
  'https://puraniksabitante.in/puraniks-abitante-location',
  'https://puraniksabitante.in/puraniks-abitante-fiore-location',
  'https://puraniksabitante.in/bavdhan-connectivity',
  'https://puraniksabitante.in/puraniks-abitante-amenities',
  'https://puraniksabitante.in/puraniks-abitante-fiore-amenities',
  'https://puraniksabitante.in/puraniks-abitante-brochure',
  'https://puraniksabitante.in/puraniks-abitante-fiore-brochure',
  'https://puraniksabitante.in/puraniks-abitante-reviews',
  'https://puraniksabitante.in/puraniks-abitante-fiore-reviews',
  'https://puraniksabitante.in/puraniks-abitante-investment',
  'https://puraniksabitante.in/puraniks-abitante-fiore-investment',
  'https://puraniksabitante.in/puraniks-abitante-contact-number',
  'https://puraniksabitante.in/puraniks-abitante-sales-office',
  'https://puraniksabitante.in/bavdhan-real-estate',
  'https://puraniksabitante.in/bavdhan-property-prices',
  'https://puraniksabitante.in/bavdhan-1-bhk',
  'https://puraniksabitante.in/bavdhan-2-bhk',
  'https://puraniksabitante.in/bavdhan-3-bhk',
  'https://puraniksabitante.in/puranik-builders',
  'https://puraniksabitante.in/puranik-builders-pune'
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

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Instant IndexNow notification submitted for all 56 tracked keyword URLs.',
        submittedUrlsCount: URL_LIST.length,
        status: response.status
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }
}

export async function onRequestGet() {
  return new Response(
    JSON.stringify({
      service: 'Puraniks Abitante Fiore Real-Time IndexNow Engine',
      totalTrackedUrls: URL_LIST.length,
      protocol: 'https://www.indexnow.org/documentation',
      monitoredUrls: URL_LIST
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  );
}
