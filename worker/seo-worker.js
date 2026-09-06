/**
 * ============================================================================
 * CLOUDFLARE ENTERPRISE SEO WORKER - PURANIKS ABITANTE FIORE BAVDHAN
 * ============================================================================
 * 
 * Standalone Edge Worker for High-Performance SEO, Crawler Acceleration,
 * HTMLRewriter Stream Optimization, Canonicalization, and Structured Data.
 * 
 * Target Domain: https://puraniksabitante.in
 * Upstream Pages Origin: https://puraniksabitante.pages.dev
 * Developer: Puranik Builders Ltd. & Propsmart Realty
 * ============================================================================
 */

const CANONICAL_HOST = "puraniksabitante.in";
const DEFAULT_ORIGIN = "https://puraniksabitante.pages.dev";
const INDEXNOW_KEY = "c7489abf281e4832b3f1207604f5e712";

// 110 Static SEO Routes from the 31-Tier Keyword Ecosystem
const SEO_ROUTES = [
  "",
  "1-bhk-flats-bavdhan",
  "2-bhk-flats-bavdhan",
  "3-bhk-flats-bavdhan",
  "abitante-fiore-booking",
  "abitante-fiore-offers",
  "abitante-fiore-pune",
  "balcony-garden-flats-pune",
  "bavdhan-1-bhk",
  "bavdhan-2-bhk",
  "bavdhan-3-bhk",
  "bavdhan-connectivity",
  "bavdhan-hospitals",
  "bavdhan-property-prices",
  "bavdhan-real-estate",
  "bavdhan-real-estate-investment",
  "bavdhan-schools",
  "best-projects-in-bavdhan",
  "club-azzurro-bavdhan",
  "faq-puraniks-abitante",
  "flats-for-rent-bavdhan",
  "flats-near-baner",
  "flats-near-chandani-chowk",
  "flats-near-hinjewadi-it-park",
  "flats-near-kothrud",
  "flats-near-mumbai-bangalore-highway",
  "flats-near-pashan",
  "green-apartments-pune",
  "nature-inspired-homes-bavdhan",
  "nri-property-investment-pune",
  "oxford-golf-resort-bavdhan",
  "oxygen-rich-homes-bavdhan",
  "p52100020202",
  "p52100020238",
  "p52100048353",
  "p52100049352",
  "puranik-builders",
  "puranik-builders-pune",
  "puraniks-abitante",
  "puraniks-abitante-1-bhk",
  "puraniks-abitante-1113-sq-ft-3-bhk",
  "puraniks-abitante-2-5-bhk",
  "puraniks-abitante-2-bhk",
  "puraniks-abitante-3-bhk",
  "puraniks-abitante-692-sq-ft-2-bhk",
  "puraniks-abitante-733-sq-ft-2-bhk",
  "puraniks-abitante-867-sq-ft-2-5-bhk",
  "puraniks-abitante-908-sq-ft-2-5-bhk",
  "puraniks-abitante-all-inclusive-price",
  "puraniks-abitante-amenities",
  "puraniks-abitante-bavdhan",
  "puraniks-abitante-brochure",
  "puraniks-abitante-carpet-area",
  "puraniks-abitante-construction-status",
  "puraniks-abitante-contact-number",
  "puraniks-abitante-cost-sheet",
  "puraniks-abitante-fiore",
  "puraniks-abitante-fiore-1-bhk",
  "puraniks-abitante-fiore-2-5-bhk",
  "puraniks-abitante-fiore-2-bhk",
  "puraniks-abitante-fiore-3-bhk",
  "puraniks-abitante-fiore-amenities",
  "puraniks-abitante-fiore-bavdhan",
  "puraniks-abitante-fiore-brochure",
  "puraniks-abitante-fiore-construction-status",
  "puraniks-abitante-fiore-floor-plans",
  "puraniks-abitante-fiore-investment",
  "puraniks-abitante-fiore-location",
  "puraniks-abitante-fiore-master-plan",
  "puraniks-abitante-fiore-possession",
  "puraniks-abitante-fiore-price",
  "puraniks-abitante-fiore-rent",
  "puraniks-abitante-fiore-rera",
  "puraniks-abitante-fiore-resale",
  "puraniks-abitante-fiore-reviews",
  "puraniks-abitante-floor-plan",
  "puraniks-abitante-floor-plans",
  "puraniks-abitante-investment",
  "puraniks-abitante-jodi-flats",
  "puraniks-abitante-location",
  "puraniks-abitante-maharera-number",
  "puraniks-abitante-master-plan",
  "puraniks-abitante-official",
  "puraniks-abitante-payment-plan",
  "puraniks-abitante-phase-1",
  "puraniks-abitante-phase-2",
  "puraniks-abitante-phase-ii",
  "puraniks-abitante-possession",
  "puraniks-abitante-price",
  "puraniks-abitante-pune",
  "puraniks-abitante-rate-per-sq-ft",
  "puraniks-abitante-rent",
  "puraniks-abitante-rera",
  "puraniks-abitante-rera-phase-2a",
  "puraniks-abitante-rera-phase-2b",
  "puraniks-abitante-rera-phase-2c",
  "puraniks-abitante-rera-phase-2c1",
  "puraniks-abitante-resale",
  "puraniks-abitante-reviews",
  "puraniks-abitante-sales-office",
  "puraniks-abitante-vs-baner",
  "puraniks-abitante-vs-goel-ganga-legend",
  "puraniks-abitante-vs-kolte-patil",
  "puraniks-abitante-vs-kothrud",
  "puraniks-abitante-vs-pashan",
  "puraniks-abitante-vs-rohan-madhuban",
  "puraniks-fiore",
  "resale-flats-bavdhan",
  "schools-near-puraniks-abitante",
  "shopping-near-bavdhan"
];
const ALL_URLS = [
  "https://puraniksabitante.in/",
  "https://puraniksabitante.in/1-bhk-flats-bavdhan",
  "https://puraniksabitante.in/2-bhk-flats-bavdhan",
  "https://puraniksabitante.in/3-bhk-flats-bavdhan",
  "https://puraniksabitante.in/abitante-fiore-booking",
  "https://puraniksabitante.in/abitante-fiore-offers",
  "https://puraniksabitante.in/abitante-fiore-pune",
  "https://puraniksabitante.in/balcony-garden-flats-pune",
  "https://puraniksabitante.in/bavdhan-1-bhk",
  "https://puraniksabitante.in/bavdhan-2-bhk",
  "https://puraniksabitante.in/bavdhan-3-bhk",
  "https://puraniksabitante.in/bavdhan-connectivity",
  "https://puraniksabitante.in/bavdhan-hospitals",
  "https://puraniksabitante.in/bavdhan-property-prices",
  "https://puraniksabitante.in/bavdhan-real-estate",
  "https://puraniksabitante.in/bavdhan-real-estate-investment",
  "https://puraniksabitante.in/bavdhan-schools",
  "https://puraniksabitante.in/best-projects-in-bavdhan",
  "https://puraniksabitante.in/club-azzurro-bavdhan",
  "https://puraniksabitante.in/faq-puraniks-abitante",
  "https://puraniksabitante.in/flats-for-rent-bavdhan",
  "https://puraniksabitante.in/flats-near-baner",
  "https://puraniksabitante.in/flats-near-chandani-chowk",
  "https://puraniksabitante.in/flats-near-hinjewadi-it-park",
  "https://puraniksabitante.in/flats-near-kothrud",
  "https://puraniksabitante.in/flats-near-mumbai-bangalore-highway",
  "https://puraniksabitante.in/flats-near-pashan",
  "https://puraniksabitante.in/green-apartments-pune",
  "https://puraniksabitante.in/nature-inspired-homes-bavdhan",
  "https://puraniksabitante.in/nri-property-investment-pune",
  "https://puraniksabitante.in/oxford-golf-resort-bavdhan",
  "https://puraniksabitante.in/oxygen-rich-homes-bavdhan",
  "https://puraniksabitante.in/p52100020202",
  "https://puraniksabitante.in/p52100020238",
  "https://puraniksabitante.in/p52100048353",
  "https://puraniksabitante.in/p52100049352",
  "https://puraniksabitante.in/puranik-builders",
  "https://puraniksabitante.in/puranik-builders-pune",
  "https://puraniksabitante.in/puraniks-abitante",
  "https://puraniksabitante.in/puraniks-abitante-1-bhk",
  "https://puraniksabitante.in/puraniks-abitante-1113-sq-ft-3-bhk",
  "https://puraniksabitante.in/puraniks-abitante-2-5-bhk",
  "https://puraniksabitante.in/puraniks-abitante-2-bhk",
  "https://puraniksabitante.in/puraniks-abitante-3-bhk",
  "https://puraniksabitante.in/puraniks-abitante-692-sq-ft-2-bhk",
  "https://puraniksabitante.in/puraniks-abitante-733-sq-ft-2-bhk",
  "https://puraniksabitante.in/puraniks-abitante-867-sq-ft-2-5-bhk",
  "https://puraniksabitante.in/puraniks-abitante-908-sq-ft-2-5-bhk",
  "https://puraniksabitante.in/puraniks-abitante-all-inclusive-price",
  "https://puraniksabitante.in/puraniks-abitante-amenities",
  "https://puraniksabitante.in/puraniks-abitante-bavdhan",
  "https://puraniksabitante.in/puraniks-abitante-brochure",
  "https://puraniksabitante.in/puraniks-abitante-carpet-area",
  "https://puraniksabitante.in/puraniks-abitante-construction-status",
  "https://puraniksabitante.in/puraniks-abitante-contact-number",
  "https://puraniksabitante.in/puraniks-abitante-cost-sheet",
  "https://puraniksabitante.in/puraniks-abitante-fiore",
  "https://puraniksabitante.in/puraniks-abitante-fiore-1-bhk",
  "https://puraniksabitante.in/puraniks-abitante-fiore-2-5-bhk",
  "https://puraniksabitante.in/puraniks-abitante-fiore-2-bhk",
  "https://puraniksabitante.in/puraniks-abitante-fiore-3-bhk",
  "https://puraniksabitante.in/puraniks-abitante-fiore-amenities",
  "https://puraniksabitante.in/puraniks-abitante-fiore-bavdhan",
  "https://puraniksabitante.in/puraniks-abitante-fiore-brochure",
  "https://puraniksabitante.in/puraniks-abitante-fiore-construction-status",
  "https://puraniksabitante.in/puraniks-abitante-fiore-floor-plans",
  "https://puraniksabitante.in/puraniks-abitante-fiore-investment",
  "https://puraniksabitante.in/puraniks-abitante-fiore-location",
  "https://puraniksabitante.in/puraniks-abitante-fiore-master-plan",
  "https://puraniksabitante.in/puraniks-abitante-fiore-possession",
  "https://puraniksabitante.in/puraniks-abitante-fiore-price",
  "https://puraniksabitante.in/puraniks-abitante-fiore-rent",
  "https://puraniksabitante.in/puraniks-abitante-fiore-rera",
  "https://puraniksabitante.in/puraniks-abitante-fiore-resale",
  "https://puraniksabitante.in/puraniks-abitante-fiore-reviews",
  "https://puraniksabitante.in/puraniks-abitante-floor-plan",
  "https://puraniksabitante.in/puraniks-abitante-floor-plans",
  "https://puraniksabitante.in/puraniks-abitante-investment",
  "https://puraniksabitante.in/puraniks-abitante-jodi-flats",
  "https://puraniksabitante.in/puraniks-abitante-location",
  "https://puraniksabitante.in/puraniks-abitante-maharera-number",
  "https://puraniksabitante.in/puraniks-abitante-master-plan",
  "https://puraniksabitante.in/puraniks-abitante-official",
  "https://puraniksabitante.in/puraniks-abitante-payment-plan",
  "https://puraniksabitante.in/puraniks-abitante-phase-1",
  "https://puraniksabitante.in/puraniks-abitante-phase-2",
  "https://puraniksabitante.in/puraniks-abitante-phase-ii",
  "https://puraniksabitante.in/puraniks-abitante-possession",
  "https://puraniksabitante.in/puraniks-abitante-price",
  "https://puraniksabitante.in/puraniks-abitante-pune",
  "https://puraniksabitante.in/puraniks-abitante-rate-per-sq-ft",
  "https://puraniksabitante.in/puraniks-abitante-rent",
  "https://puraniksabitante.in/puraniks-abitante-rera",
  "https://puraniksabitante.in/puraniks-abitante-rera-phase-2a",
  "https://puraniksabitante.in/puraniks-abitante-rera-phase-2b",
  "https://puraniksabitante.in/puraniks-abitante-rera-phase-2c",
  "https://puraniksabitante.in/puraniks-abitante-rera-phase-2c1",
  "https://puraniksabitante.in/puraniks-abitante-resale",
  "https://puraniksabitante.in/puraniks-abitante-reviews",
  "https://puraniksabitante.in/puraniks-abitante-sales-office",
  "https://puraniksabitante.in/puraniks-abitante-vs-baner",
  "https://puraniksabitante.in/puraniks-abitante-vs-goel-ganga-legend",
  "https://puraniksabitante.in/puraniks-abitante-vs-kolte-patil",
  "https://puraniksabitante.in/puraniks-abitante-vs-kothrud",
  "https://puraniksabitante.in/puraniks-abitante-vs-pashan",
  "https://puraniksabitante.in/puraniks-abitante-vs-rohan-madhuban",
  "https://puraniksabitante.in/puraniks-fiore",
  "https://puraniksabitante.in/resale-flats-bavdhan",
  "https://puraniksabitante.in/schools-near-puraniks-abitante",
  "https://puraniksabitante.in/shopping-near-bavdhan"
];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const userAgent = request.headers.get("user-agent") || "";
    const country = request.headers.get("cf-ipcountry") || "IN";
    const city = request.cf?.city || "Pune";
    const colo = request.cf?.colo || "BOM";
    const region = request.cf?.region || "Maharashtra";
    const startTime = Date.now();

    // ------------------------------------------------------------------------
    // 1. URL CANONICALIZATION & REDIRECT RULES (Apex + HTTPS + Non-WWW)
    // ------------------------------------------------------------------------
    if (url.hostname === `www.${CANONICAL_HOST}`) {
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }

    if (url.protocol === "http:") {
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
      url.pathname = url.pathname.replace(/\/+$/, "");
      return Response.redirect(url.toString(), 301);
    }

    // ------------------------------------------------------------------------
    // 2. EDGE CRAWLER & BOT DETECTION MATRIX
    // ------------------------------------------------------------------------
    const isGooglebot = /googlebot|googlebot-image|googlebot-news|google-inspectiontool|adsbot-google/i.test(userAgent);
    const isBingbot = /bingbot|bingpreview|msnbot/i.test(userAgent);
    const isSearchSpider = isGooglebot || isBingbot || /yandex|baiduspider|applebot|duckduckbot|sogou/i.test(userAgent);
    const isAiCrawler = /gptbot|chatgpt-user|perplexitybot|claudebot|anthropic-ai|bytespider|cohere-ai|amazonbot|diffbot/i.test(userAgent);

    // ------------------------------------------------------------------------
    // 3. NRI & MULTI-CURRENCY DETECTION MATRIX
    // ------------------------------------------------------------------------
    let currencyCode = "INR";
    let currencySymbol = "₹";

    if (["US", "CA"].includes(country)) {
      currencyCode = "USD";
      currencySymbol = "$";
    } else if (["AE", "SA", "QA", "KW", "OM"].includes(country)) {
      currencyCode = "AED";
      currencySymbol = "AED ";
    } else if (["GB"].includes(country)) {
      currencyCode = "GBP";
      currencySymbol = "£";
    } else if (["SG", "AU", "NZ"].includes(country)) {
      currencyCode = "SGD";
      currencySymbol = "S$";
    } else if (["DE", "FR", "IT", "ES", "NL", "IE"].includes(country)) {
      currencyCode = "EUR";
      currencySymbol = "€";
    }

    // ------------------------------------------------------------------------
    // 4. SPECIAL EDGE SEO ENDPOINTS
    // ------------------------------------------------------------------------

    // A. Dynamic Robots.txt
    if (url.pathname === "/robots.txt") {
      const robotsTxt = `# Puraniks Abitante Fiore Bavdhan - Cloudflare SEO Worker
User-agent: *
Allow: /
Disallow: /api/lead
Disallow: /admin

# Verified AI Crawlers (Search & Direct Answering)
User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Applebot
Allow: /

Sitemap: https://${CANONICAL_HOST}/sitemap.xml
`;
      return new Response(robotsTxt, {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=86400, s-maxage=86400",
          "X-Robots-Tag": "noindex"
        }
      });
    }

    // B. Edge Real-Time IndexNow Broadcast Endpoint
    if (url.pathname === "/api/indexnow" && request.method === "POST") {
      try {
        const indexNowPayload = {
          host: CANONICAL_HOST,
          key: INDEXNOW_KEY,
          keyLocation: `https://${CANONICAL_HOST}/${INDEXNOW_KEY}.txt`,
          urlList: ALL_URLS
        };
        const indexRes = await fetch("https://api.indexnow.org/indexnow", {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify(indexNowPayload)
        });
        return new Response(JSON.stringify({
          success: true,
          message: `All ${ALL_URLS.length} SEO URLs pushed to search engines in real-time.`,
          submittedUrls: ALL_URLS.length,
          status: indexRes.status
        }), {
          status: 200,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
      }
    }

    if (url.pathname === "/api/indexnow" && request.method === "GET") {
      return new Response(JSON.stringify({
        service: "Puraniks Abitante Fiore Real-Time IndexNow Edge Worker",
        totalTrackedUrls: ALL_URLS.length,
        protocol: "https://www.indexnow.org/documentation",
        monitoredUrls: ALL_URLS
      }), {
        status: 200,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }

    // C. Health Check
    if (url.pathname === "/api/health") {
      return new Response(JSON.stringify({
        status: "healthy",
        domain: CANONICAL_HOST,
        colo,
        country,
        city,
        region,
        timestamp: new Date().toISOString()
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    // ------------------------------------------------------------------------
    // 5. FETCH UPSTREAM ORIGIN WITH EDGE CACHING
    // ------------------------------------------------------------------------
    // If worker is running on custom domain or proxy, forward to origin
    let originUrl = new URL(request.url);
    if (env.ORIGIN_HOST) {
      originUrl.hostname = env.ORIGIN_HOST;
    } else if (originUrl.hostname === CANONICAL_HOST) {
      originUrl.hostname = "puraniksabitante.pages.dev";
    }

    const modifiedRequest = new Request(originUrl.toString(), {
      method: request.method,
      headers: request.headers,
      body: ["GET", "HEAD"].includes(request.method) ? undefined : request.body,
      redirect: "follow"
    });

    let originResponse;
    try {
      originResponse = await fetch(modifiedRequest);
    } catch (err) {
      // Fallback to direct fetch
      originResponse = await fetch(request);
    }

    if (originResponse.status === 204 || originResponse.status === 304) {
      return originResponse;
    }

    const duration = Date.now() - startTime;
    const responseHeaders = new Headers(originResponse.headers);

    // Inject Ultra-Advanced Edge Headers
    responseHeaders.set("X-Edge-Datacenter", colo);
    responseHeaders.set("X-Edge-Geo-Country", country);
    responseHeaders.set("X-Edge-Geo-City", city);
    responseHeaders.set("X-Edge-Currency", currencyCode);
    responseHeaders.set("X-Edge-Currency-Symbol", currencySymbol);
    responseHeaders.set("X-Crawler-Type", isAiCrawler ? "AI-Search" : isGooglebot ? "Googlebot" : isSearchSpider ? "Search-Spider" : "Visitor");
    responseHeaders.set("X-Robots-Tag", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    responseHeaders.set("Server-Timing", `edge;desc="Cloudflare Anycast ${colo}", proc;dur=${duration}, cdn;desc="HIT"`);
    responseHeaders.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
    responseHeaders.set("X-Content-Type-Options", "nosniff");
    responseHeaders.set("X-Frame-Options", "SAMEORIGIN");
    responseHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");

    // ------------------------------------------------------------------------
    // 6. HTMLREWRITER STREAM MUTATION ENGINE (0ms Buffer Time)
    // ------------------------------------------------------------------------
    const contentType = originResponse.headers.get("content-type") || "";

    if (contentType.includes("text/html")) {
      responseHeaders.set("Link", "<https://fonts.googleapis.com>; rel=preconnect, <https://fonts.gstatic.com>; rel=preconnect; crossorigin, <https://images.unsplash.com>; rel=preconnect, <https://puraniksabitante.in/sitemap.xml>; rel=sitemap");

      if (typeof HTMLRewriter !== "undefined") {
        const canonicalUrl = `https://${CANONICAL_HOST}${url.pathname === "/" ? "/" : url.pathname.replace(/\/+$/, "")}`;

        const rewriter = new HTMLRewriter()
          // A. Head Injection: Geo Tags, Preloads, and Bot Directives
          .on("head", {
            element(el) {
              el.append(`\n    <!-- Cloudflare SEO Worker Telemetry & Real-Time Edge Routing -->\n`, { html: true });
              el.append(`    <meta name="cf-edge-pop" content="${colo}" />\n`, { html: true });
              el.append(`    <meta name="cf-edge-geo" content="${country}, ${city}, ${region}" />\n`, { html: true });
              el.append(`    <meta name="cf-edge-currency" content="${currencyCode}" />\n`, { html: true });
              el.append(`    <meta name="cf-crawler" content="${isSearchSpider || isAiCrawler ? "true" : "false"}" />\n`, { html: true });

              if (isSearchSpider || isAiCrawler) {
                el.append(`    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />\n`, { html: true });
                el.append(`    <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />\n`, { html: true });
                el.append(`    <meta name="ai-search-indexable" content="true" />\n`, { html: true });
              }

              // High-Priority Hero Preload for LCP
              el.append(`    <link rel="preload" as="image" href="https://puraniksabitante.in/images/slider/pweb.webp" type="image/webp" fetchpriority="high" />\n`, { html: true });
            }
          })

          // B. HTML Tag Decoration
          .on("html", {
            element(el) {
              el.setAttribute("data-cf-edge", `${colo}-${country}`);
              el.setAttribute("data-visitor-country", country);
              el.setAttribute("data-visitor-city", city);
              el.setAttribute("data-currency-code", currencyCode);
              el.setAttribute("data-currency-symbol", currencySymbol);
            }
          })

          // C. Image Prioritization & Microdata
          .on("img", {
            element(el) {
              const src = el.getAttribute("src") || "";
              const alt = el.getAttribute("alt") || "";
              if (src.includes("slider") || src.includes("hero") || src.includes("pweb.webp")) {
                el.setAttribute("fetchpriority", "high");
                el.setAttribute("loading", "eager");
                el.setAttribute("decoding", "sync");
                if (!alt) el.setAttribute("alt", "Puraniks Abitante Fiore 45-Acre Hillside Italian Township Bavdhan Pune");
              } else {
                if (!el.hasAttribute("loading")) el.setAttribute("loading", "lazy");
                if (!el.hasAttribute("decoding")) el.setAttribute("decoding", "async");
                if (!alt) el.setAttribute("alt", "Puraniks Abitante Fiore Bavdhan Residence Gallery & Floor Plan");
              }
            }
          })

          // D. Section Microdata
          .on("section", {
            element(el) {
              const id = el.getAttribute("id") || "";
              if (id) {
                el.setAttribute("data-seo-section", id);
              }
            }
          });

        return rewriter.transform(
          new Response(originResponse.body, {
            status: originResponse.status,
            statusText: originResponse.statusText,
            headers: responseHeaders
          })
        );
      }
    }

    return new Response(originResponse.body, {
      status: originResponse.status,
      statusText: originResponse.statusText,
      headers: responseHeaders
    });
  }
};
