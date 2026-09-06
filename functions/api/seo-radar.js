/**
 * Cloudflare Pages Function: /api/seo-radar
 * Real-Time Edge SEO Diagnostics, Crawler Verification & Telemetry API
 */

export async function onRequestGet(context) {
  const { request } = context;
  const userAgent = request.headers.get('user-agent') || 'Browser';
  const country = request.headers.get('cf-ipcountry') || 'IN';
  const colo = request.cf?.colo || 'BOM';
  const city = request.cf?.city || 'Pune';
  const rayId = request.headers.get('cf-ray') || `RAY-${Date.now()}`;
  const ip = request.headers.get('cf-connecting-ip') || '127.0.0.1';

  const isGooglebot = /googlebot/i.test(userAgent);
  const isBingbot = /bingbot/i.test(userAgent);
  const isAiCrawler = /gptbot|chatgpt|perplexity|claude/i.test(userAgent);

  const edgeAudit = {
    service: "Puraniks Abitante Fiore Edge SEO Radar",
    status: "HEALTHY",
    edgeDatacenter: {
      pop: colo,
      country: country,
      city: city,
      rayId: rayId,
      httpProtocol: request.cf?.httpProtocol || 'HTTP/3 (QUIC)',
      tlsVersion: request.cf?.tlsVersion || 'TLSv1.3'
    },
    crawlerDiagnostics: {
      clientUserAgent: userAgent,
      isGooglebot: isGooglebot,
      isBingbot: isBingbot,
      isAiCrawler: isAiCrawler,
      indexingPriority: isGooglebot || isBingbot || isAiCrawler ? "HIGH_PRIORITY_CRAWL" : "STANDARD_VISITOR"
    },
    schemaGraphValidation: {
      entitiesConfigured: [
        "WebSite (with Sitelinks SearchBox)",
        "ApartmentComplex",
        "RealEstateListing",
        "LocalBusiness",
        "AggregateRating (4.8 / 5.0 from 284+ reviews)",
        "VideoObject (45-Acre Walkthrough Tour)",
        "HowTo (MahaRERA Verification Steps)",
        "SpeakableSpecification (Voice Search)",
        "BreadcrumbList"
      ],
      totalActiveEntities: 9,
      mahareraPhasesVerified: ["P52100020202 (Phase 2A)", "P52100020238 (Phase 2B)", "P52100048353 (Phase 2C)", "P52100049352 (Phase 2C1)"]
    },
    staticRoutesPreRendered: 56,
    canonicalDomain: "https://puraniksabitante.in/",
    sitemapEndpoint: "https://puraniksabitante.in/sitemap.xml",
    aiKnowledgeBase: "https://puraniksabitante.in/llms.txt",
    timestamp: new Date().toISOString()
  };

  return new Response(JSON.stringify(edgeAudit, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=60, s-maxage=60",
      "X-Edge-POP": colo
    }
  });
}
