/**
 * Cloudflare Pages Function: /api/health
 * Returns Cloudflare edge node information and latency status.
 */

export async function onRequestGet(context) {
  const { request } = context;
  const cf = request.cf || {};

  return new Response(
    JSON.stringify({
      status: "healthy",
      service: "Puraniks Abitante Cloudflare Edge Gateway",
      timestamp: new Date().toISOString(),
      edgeDataCenter: cf.colo || "LOCAL",
      city: cf.city || "Unknown",
      country: cf.country || "IN",
      httpProtocol: cf.httpProtocol || "HTTP/3",
      tlsVersion: cf.tlsVersion || "TLSv1.3",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
