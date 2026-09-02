/**
 * Cloudflare Pages Global Edge Middleware
 * Puraniks Abitante Fiore Bavdhan - Ultra Advanced SEO & Edge Infrastructure
 */

export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);
  const userAgent = request.headers.get('user-agent') || '';
  const country = request.headers.get('cf-ipcountry') || 'IN';
  const colo = request.cf?.colo || 'BOM';
  const isHttps = url.protocol === 'https:';

  // 1. Detect Search Engine & AI Crawlers
  const isSearchEngine = /googlebot|bingbot|yandex|baiduspider|applebot|duckduckbot/i.test(userAgent);
  const isAiSearchEngine = /chatgpt-user|gptbot|perplexitybot|claudebot|anthropic-ai|bytespider/i.test(userAgent);
  
  // 2. NRI & Global Currency Edge Localization
  let currencyCode = 'INR';
  let currencySymbol = '₹';
  if (['US', 'CA'].includes(country)) {
    currencyCode = 'USD';
    currencySymbol = '$';
  } else if (['AE', 'SA', 'QA', 'KW', 'OM'].includes(country)) {
    currencyCode = 'AED';
    currencySymbol = 'AED ';
  } else if (['GB'].includes(country)) {
    currencyCode = 'GBP';
    currencySymbol = '£';
  } else if (['SG', 'AU', 'NZ'].includes(country)) {
    currencyCode = 'SGD';
    currencySymbol = 'S$';
  }

  // 3. Process Request at Edge
  const response = await next();
  const newHeaders = new Headers(response.headers);

  // 4. Inject Edge SEO & Telemetry Headers
  newHeaders.set('X-Edge-Datacenter', colo);
  newHeaders.set('X-Edge-Geo-Country', country);
  newHeaders.set('X-Edge-Currency', currencyCode);
  newHeaders.set('X-Edge-Currency-Symbol', currencySymbol);
  newHeaders.set('X-Crawler-Type', isAiSearchEngine ? 'AI-Search' : isSearchEngine ? 'Search-Engine' : 'Client');
  newHeaders.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  
  // 5. Early Hints for Global Googlebot & Users (HTTP 103 Link headers)
  if (response.headers.get('content-type')?.includes('text/html')) {
    newHeaders.append('Link', '<https://fonts.googleapis.com>; rel=preconnect; crossorigin');
    newHeaders.append('Link', '<https://fonts.gstatic.com>; rel=preconnect; crossorigin');
    newHeaders.append('Link', '<https://images.unsplash.com>; rel=preconnect; crossorigin');
    newHeaders.append('Link', '<https://abitantefiore.puranikbuilders.com/sitemap.xml>; rel=sitemap');
  }

  // 6. Return response with enhanced edge headers
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
}
