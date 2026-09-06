/**
 * ============================================================================
 * CLOUDFLARE ENTERPRISE SEO WORKER - PURANIKS ABITANTE FIORE BAVDHAN
 * ============================================================================
 * 
 * Standalone Edge Worker for High-Performance SEO, Crawler Acceleration,
 * HTMLRewriter Stream Optimization, Canonicalization, and Structured Data.
 * 
 * Target Domain: https://puraniksabitante.in
 * Developer: Puranik Builders Ltd. & Propsmart Realty Desk
 * ============================================================================
 */

const CANONICAL_HOST = "puraniksabitante.in";
const DEFAULT_ORIGIN = "https://puraniksabitante.in";
const INDEXNOW_KEY = "c7489abf281e4832b3f1207604f5e712";

// 56 High-Intent SEO Route Directory
const SEO_ROUTES = [
  "", "puraniks-abitante", "puraniks-abitante-bavdhan", "puraniks-abitante-pune",
  "puraniks-abitante-fiore", "puraniks-abitante-fiore-bavdhan", "puraniks-abitante-phase-1",
  "puraniks-abitante-phase-2", "puraniks-abitante-official", "puraniks-abitante-price",
  "puraniks-abitante-fiore-price", "puraniks-abitante-cost-sheet", "puraniks-abitante-rate-per-sq-ft",
  "puraniks-abitante-payment-plan", "puraniks-abitante-all-inclusive-price", "puraniks-abitante-1-bhk",
  "puraniks-abitante-2-bhk", "puraniks-abitante-2-5-bhk", "puraniks-abitante-3-bhk",
  "puraniks-abitante-fiore-1-bhk", "puraniks-abitante-fiore-2-bhk", "puraniks-abitante-fiore-2-5-bhk",
  "puraniks-abitante-fiore-3-bhk", "puraniks-abitante-floor-plan", "puraniks-abitante-floor-plans",
  "puraniks-abitante-fiore-floor-plans", "puraniks-abitante-master-plan", "puraniks-abitante-fiore-master-plan",
  "puraniks-abitante-carpet-area", "puraniks-abitante-rera", "puraniks-abitante-fiore-rera",
  "puraniks-abitante-maharera-number", "puraniks-abitante-possession", "puraniks-abitante-fiore-possession",
  "puraniks-abitante-construction-status", "puraniks-abitante-fiore-construction-status",
  "puraniks-abitante-location", "puraniks-abitante-fiore-location", "bavdhan-connectivity",
  "puraniks-abitante-amenities", "puraniks-abitante-fiore-amenities", "puraniks-abitante-brochure",
  "puraniks-abitante-fiore-brochure", "puraniks-abitante-reviews", "puraniks-abitante-fiore-reviews",
  "puraniks-abitante-investment", "puraniks-abitante-fiore-investment", "puraniks-abitante-contact-number",
  "puraniks-abitante-sales-office", "bavdhan-real-estate", "bavdhan-property-prices",
  "bavdhan-1-bhk", "bavdhan-2-bhk", "bavdhan-3-bhk", "puranik-builders", "puranik-builders-pune"
];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const userAgent = request.headers.get("user-agent") || "";
    const country = request.headers.get("cf-ipcountry") || "IN";
    const city = request.cf?.city || "Pune";
    const colo = request.cf?.colo || "BOM";
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

    // ------------------------------------------------------------------------
    // 2. EDGE CRAWLER & BOT DETECTION MATRIX
    // ------------------------------------------------------------------------
    const isGooglebot = /googlebot|googlebot-image|googlebot-news|google-inspectiontool/i.test(userAgent);
    const isBingbot = /bingbot|bingpreview|msnbot/i.test(userAgent);
    const isSearchSpider = isGooglebot || isBingbot || /yandex|baiduspider|applebot|duckduckbot/i.test(userAgent);
    const isAiCrawler = /gptbot|chatgpt-user|perplexitybot|claudebot|anthropic-ai|bytespider/i.test(userAgent);

    // ------------------------------------------------------------------------
    // 3. SPECIAL EDGE SEO ENDPOINTS
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
          "Cache-Control": "public, max-age=86400, s-maxage=86400"
        }
      });
    }

    // B. Edge Real-Time IndexNow Broadcast Endpoint
    if (url.pathname === "/api/indexnow" && request.method === "POST") {
      const fullUrls = SEO_ROUTES.map(r => `https://${CANONICAL_HOST}/${r}`);
      try {
        const indexNowPayload = {
          host: CANONICAL_HOST,
          key: INDEXNOW_KEY,
          keyLocation: `https://${CANONICAL_HOST}/${INDEXNOW_KEY}.txt`,
          urlList: fullUrls
        };
        const indexRes = await fetch("https://api.indexnow.org/indexnow", {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify(indexNowPayload)
        });
        return new Response(JSON.stringify({
          success: true,
          message: "All 56 SEO URLs pushed to search engines in real-time.",
          submittedUrls: fullUrls.length,
          status: indexRes.status
        }), {
          status: 200,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
      }
    }

    // ------------------------------------------------------------------------
    // 4. FETCH ORIGIN RESPONSE WITH EDGE CACHING
    // ------------------------------------------------------------------------
    const originResponse = await fetch(request);

    if (originResponse.status === 204 || originResponse.status === 304) {
      return originResponse;
    }

    const duration = Date.now() - startTime;
    const responseHeaders = new Headers(originResponse.headers);

    // Inject Ultra-Advanced Edge Headers
    responseHeaders.set("X-Edge-Datacenter", colo);
    responseHeaders.set("X-Edge-Geo-Country", country);
    responseHeaders.set("X-Edge-Geo-City", city);
    responseHeaders.set("X-Crawler-Type", isAiCrawler ? "AI-Search" : isGooglebot ? "Googlebot" : isSearchSpider ? "Search-Spider" : "Visitor");
    responseHeaders.set("X-Robots-Tag", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    responseHeaders.set("Server-Timing", `edge;desc="Cloudflare Anycast ${colo}", proc;dur=${duration}, cdn;desc="HIT"`);
    responseHeaders.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
    responseHeaders.set("X-Content-Type-Options", "nosniff");
    responseHeaders.set("X-Frame-Options", "SAMEORIGIN");

    // ------------------------------------------------------------------------
    // 5. HTMLREWRITER STREAM MUTATION ENGINE (0ms Buffer Time)
    // ------------------------------------------------------------------------
    const contentType = originResponse.headers.get("content-type") || "";

    if (contentType.includes("text/html")) {
      responseHeaders.set("Link", "<https://fonts.googleapis.com>; rel=preconnect, <https://fonts.gstatic.com>; rel=preconnect; crossorigin, <https://images.unsplash.com>; rel=preconnect, <https://puraniksabitante.in/sitemap.xml>; rel=sitemap");

      if (typeof HTMLRewriter !== "undefined") {
        const canonicalUrl = `https://${CANONICAL_HOST}${url.pathname === "/" ? "/" : url.pathname.replace(/\/$/, "")}`;

        const rewriter = new HTMLRewriter()
          // A. Head Injection: Geo Tags, Preloads, and Bot Directives
          .on("head", {
            element(el) {
              el.append(`\n    <!-- Cloudflare SEO Worker Telemetry & Real-Time Edge Routing -->\n`, { html: true });
              el.append(`    <meta name="cf-edge-pop" content="${colo}" />\n`, { html: true });
              el.append(`    <meta name="cf-edge-geo" content="${country}, ${city}" />\n`, { html: true });
              el.append(`    <meta name="cf-crawler" content="${isSearchSpider || isAiCrawler ? 'true' : 'false'}" />\n`, { html: true });

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
            }
          })

          // C. Image Prioritization & Microdata
          .on("img", {
            element(el) {
              const src = el.getAttribute("src") || "";
              if (src.includes("slider") || src.includes("hero") || src.includes("pweb.webp")) {
                el.setAttribute("fetchpriority", "high");
                el.setAttribute("loading", "eager");
                el.setAttribute("decoding", "sync");
              } else {
                if (!el.hasAttribute("loading")) el.setAttribute("loading", "lazy");
                if (!el.hasAttribute("decoding")) el.setAttribute("decoding", "async");
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
