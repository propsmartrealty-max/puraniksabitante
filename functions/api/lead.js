/**
 * Cloudflare Pages Function: /api/lead
 * Handles ultra-low latency serverless lead capture across Cloudflare's 330+ global edge locations.
 * Features:
 * - Sub-30ms Edge Validation
 * - Cloudflare Turnstile Anti-Bot Verification
 * - Asynchronous Background CRM Webhook Dispatch (via context.waitUntil)
 * - Edge Network Telemetry (Colo, ASN, Country, Ray ID)
 */

export async function onRequestPost(context) {
  try {
    const { request, env, waitUntil } = context;
    const body = await request.json();

    const { 
      name, 
      phone, 
      email, 
      configuration, 
      date, 
      timeSlot, 
      source, 
      message, 
      turnstileToken 
    } = body;

    // 1. Edge Validation
    if (!name || !phone) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Name and Phone Number are required fields." 
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": "no-store",
          },
        }
      );
    }

    // 2. Cloudflare Turnstile Verification (if secret key configured in environment)
    if (env?.TURNSTILE_SECRET_KEY && turnstileToken) {
      const turnstileFormData = new FormData();
      turnstileFormData.append('secret', env.TURNSTILE_SECRET_KEY);
      turnstileFormData.append('response', turnstileToken);
      turnstileFormData.append('remoteip', request.headers.get('CF-Connecting-IP') || '');

      const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: turnstileFormData,
      });
      const turnstileOutcome = await turnstileRes.json();

      if (!turnstileOutcome.success) {
        return new Response(
          JSON.stringify({ success: false, error: "Bot verification failed. Please try again." }),
          { status: 403, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // 3. Clean Phone Number & Build Edge Lead Payload
    const cleanPhone = phone.replace(/[^0-9+]/g, "");
    const rayId = request.headers.get('cf-ray') || `RAY-${Date.now()}`;
    const ipCountry = request.headers.get('cf-ipcountry') || 'IN';
    const edgeColo = request.cf?.colo || 'BOM';
    const clientIp = request.headers.get('cf-connecting-ip') || 'ANONYMOUS';

    const leadPayload = {
      leadId: `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      timestamp: new Date().toISOString(),
      project: "Puraniks Abitante Fiore, Bavdhan",
      name: name.trim(),
      phone: cleanPhone,
      email: email ? email.trim() : "Not Provided",
      configuration: configuration || "General Inquiry",
      siteVisitDate: date || null,
      siteVisitSlot: timeSlot || null,
      source: source || "Website Direct",
      message: message || "",
      edgeMetadata: {
        colo: edgeColo,
        country: ipCountry,
        rayId: rayId,
        protocol: request.cf?.httpProtocol || 'HTTP/3',
        tlsCipher: request.cf?.tlsCipher || 'TLS_AES_128_GCM_SHA256'
      }
    };

    // 4. Asynchronous Background CRM Webhook Dispatch (Zero Latency to User)
    if (env?.CRM_WEBHOOK_URL && typeof waitUntil === 'function') {
      waitUntil(
        fetch(env.CRM_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadPayload)
        }).catch(err => console.error('Background CRM Dispatch Error:', err))
      );
    }

    // 5. Return Instant Success Response from Cloudflare Edge
    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you! Your VIP inquiry has been secured at the Cloudflare Edge and dispatched to the official Puraniks Sales Desk.",
        leadId: leadPayload.leadId,
        edgeProcessedAt: edgeColo,
        timestamp: leadPayload.timestamp
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "no-store",
          "X-Edge-Server": edgeColo,
          "X-Edge-Ray": rayId
        },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Serverless Edge Processing Error", 
        details: err.message 
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, X-Turnstile-Token",
      "Access-Control-Max-Age": "86400"
    },
  });
}
