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

  // 4. Inject Ultra-Advanced Edge Telemetry, Server-Timing & Security Headers
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

  // 5. Cloudflare HTMLRewriter: Real-time Streaming Mutation at Edge
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('text/html')) {
    newHeaders.set('Link', '<https://fonts.googleapis.com>; rel=preconnect, <https://fonts.gstatic.com>; rel=preconnect; crossorigin, <https://images.unsplash.com>; rel=preconnect, <https://puraniksabitante.in/sitemap.xml>; rel=sitemap');
    
    // Check if HTMLRewriter is available in the Cloudflare Worker runtime
    if (typeof HTMLRewriter !== 'undefined') {
      const rewriter = new HTMLRewriter()
        .on('head', {
          element(el) {
            el.append(
              `<meta name="cf-edge-colo" content="${colo}" />\n` +
              `<meta name="cf-edge-country" content="${country}" />\n` +
              `<meta name="cf-edge-currency" content="${currencyCode}" />\n`,
              { html: true }
            );
          }
        })
        .on('html', {
          element(el) {
            el.setAttribute('data-cf-edge', `${colo}-${country}`);
            el.setAttribute('data-currency', currencyCode);
          }
        })
        .on('img', {
          element(el) {
            const src = el.getAttribute('src') || '';
            if (src.includes('slider') || src.includes('hero') || src.includes('pweb.webp')) {
              el.setAttribute('fetchpriority', 'high');
              el.setAttribute('loading', 'eager');
            } else if (!el.hasAttribute('loading')) {
              el.setAttribute('loading', 'lazy');
              el.setAttribute('decoding', 'async');
            }
          }
        });

      return rewriter.transform(
        new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders
        })
      );
    }
  }

  // 6. Return standard response if not HTML or outside worker runtime
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
}
