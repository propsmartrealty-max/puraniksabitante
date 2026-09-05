/**
 * Cloudflare Pages Ultra-Advanced Global Edge Middleware
 * Puraniks Abitante Bavdhan - Edge Intelligence, HTMLRewriter & SEO Acceleration
 */

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const userAgent = request.headers.get('user-agent') || '';
  const country = request.headers.get('cf-ipcountry') || 'IN';
  const colo = request.cf?.colo || 'BOM';
  const startTime = Date.now();

  // 1. Precise Crawler & Bot Recognition (Googlebot, Bing, Apple, AI Search)
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
  } else if (['DE', 'FR', 'IT', 'ES', 'NL'].includes(country)) {
    currencyCode = 'EUR';
    currencySymbol = '€';
  }

  // 3. Process Request at Cloudflare Anycast Edge
  const response = await next();

  // If 304 Not Modified or 204 No Content, return directly to prevent Fetch API stream errors
  if (response.status === 204 || response.status === 304) {
    return response;
  }

  const duration = Date.now() - startTime;
  const newHeaders = new Headers(response.headers);

  // 4. Inject Ultra-Advanced Edge Telemetry, Server-Timing & SEO Headers
  newHeaders.set('X-Edge-Datacenter', colo);
  newHeaders.set('X-Edge-Geo-Country', country);
  newHeaders.set('X-Edge-Currency', currencyCode);
  newHeaders.set('X-Edge-Currency-Symbol', currencySymbol);
  newHeaders.set('X-Crawler-Type', isAiSearchEngine ? 'AI-Search' : isSearchEngine ? 'Search-Engine' : 'Client');
  newHeaders.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  newHeaders.set('Server-Timing', `edge;desc="Cloudflare Anycast ${colo}", proc;dur=${duration}`);
  newHeaders.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  newHeaders.set('X-Content-Type-Options', 'nosniff');
  newHeaders.set('X-Frame-Options', 'SAMEORIGIN');

  // 5. HTTP 103 Early Hints for HTML Pages
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('text/html')) {
    newHeaders.set('Link', '<https://fonts.googleapis.com>; rel=preconnect, <https://fonts.gstatic.com>; rel=preconnect; crossorigin, <https://images.unsplash.com>; rel=preconnect, <https://puraniksabitante.in/sitemap.xml>; rel=sitemap');
  }

  // 6. Return response with edge optimizations
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
}
