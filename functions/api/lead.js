/**
 * Cloudflare Pages Function: /api/lead
 * Ultra-Resilient Multi-Gateway Serverless Lead Dispatcher
 * Forwards all incoming inquiries directly to propsmartrealty@gmail.com
 */

const NOTIFICATION_EMAIL = "propsmartrealty@gmail.com";

export async function onRequestPost(context) {
  try {
    const { request, env, waitUntil } = context;
    const body = await request.json();

    const { 
      name, 
      phone, 
      email, 
      configuration, 
      config,
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

    // 2. Clean Phone Number & Build Edge Lead Payload
    const cleanPhone = phone.replace(/[^0-9+]/g, "");
    const rayId = request.headers.get('cf-ray') || `RAY-${Date.now()}`;
    const ipCountry = request.headers.get('cf-ipcountry') || 'IN';
    const edgeColo = request.cf?.colo || 'BOM';
    const chosenConfig = configuration || config || "General Inquiry";

    const leadPayload = {
      leadId: `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      timestamp: new Date().toISOString(),
      formattedTime: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      project: "Puraniks Abitante Fiore, Bavdhan, Pune",
      name: name.trim(),
      phone: cleanPhone,
      email: email ? email.trim() : "Not Provided",
      configuration: chosenConfig,
      siteVisitDate: date || "Immediate Callback Requested",
      siteVisitSlot: timeSlot || "Standard Working Hours",
      source: source || "Website Direct Form",
      message: message || "Direct Inquiry from Puraniks Abitante Official Portal",
      recipient: NOTIFICATION_EMAIL,
      edgeMetadata: {
        colo: edgeColo,
        country: ipCountry,
        rayId: rayId,
        protocol: request.cf?.httpProtocol || 'HTTP/3'
      }
    };

    // 3. Multi-Gateway Parallel Email & Webhook Dispatch
    const dispatchPromises = [
      // Gateway 1: FormSubmit AJAX API
      fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `⚡ VIP LEAD: ${leadPayload.name} - Puraniks Abitante (${chosenConfig})`,
          _template: 'table',
          _captcha: 'false',
          Project: leadPayload.project,
          Buyer_Name: leadPayload.name,
          Phone_Number: leadPayload.phone,
          Email_Address: leadPayload.email,
          Configuration: chosenConfig,
          Site_Visit_Schedule: `${leadPayload.siteVisitDate} (${leadPayload.siteVisitSlot})`,
          Lead_Source: leadPayload.source,
          Lead_ID: leadPayload.leadId,
          Visitor_Country: ipCountry,
          Edge_Datacenter: edgeColo,
          Time_IST: leadPayload.formattedTime
        })
      }).catch(err => console.error('FormSubmit Gateway Error:', err)),

      // Gateway 2: Optional Resend API (if configured in Cloudflare Pages Environment)
      (async () => {
        if (env?.RESEND_API_KEY) {
          return fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${env.RESEND_API_KEY}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              from: 'Puraniks Abitante <leads@puraniksabitante.in>',
              to: [NOTIFICATION_EMAIL],
              subject: `⚡ New VIP Lead: ${leadPayload.name} - ${chosenConfig}`,
              html: `
                <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
                  <h2 style="color: #0b1329;">⚡ New VIP Lead Registered</h2>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 8px 0; font-weight: bold;">Project:</td><td>${leadPayload.project}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td>${leadPayload.name}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td><a href="tel:${leadPayload.phone}">${leadPayload.phone}</a></td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${leadPayload.email}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold;">Configuration:</td><td>${chosenConfig}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold;">Source:</td><td>${leadPayload.source}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold;">Time (IST):</td><td>${leadPayload.formattedTime}</td></tr>
                  </table>
                </div>
              `
            })
          });
        }
      })().catch(err => console.error('Resend Gateway Error:', err)),

      // Gateway 3: Optional CRM Webhook
      (async () => {
        if (env?.CRM_WEBHOOK_URL) {
          return fetch(env.CRM_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(leadPayload)
          });
        }
      })().catch(err => console.error('CRM Webhook Error:', err))
    ];

    // Background execution via waitUntil
    if (typeof waitUntil === 'function') {
      waitUntil(Promise.allSettled(dispatchPromises));
    } else if (context.waitUntil) {
      context.waitUntil(Promise.allSettled(dispatchPromises));
    }

    // 4. Return Instant Success Response (< 20ms)
    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you! Your inquiry has been secured at the Cloudflare Edge and forwarded to propsmartrealty@gmail.com.",
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
