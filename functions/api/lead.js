/**
 * Cloudflare Pages Function: /api/lead
 * Handles ultra-low latency serverless lead capture across Cloudflare's 330+ global edge locations.
 * Automatically dispatches real-time inquiry notifications to propsmartrealty@gmail.com
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

    // 2. Cloudflare Turnstile Verification
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
    const chosenConfig = configuration || config || "General Inquiry";

    const leadPayload = {
      leadId: `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      timestamp: new Date().toISOString(),
      project: "Puraniks Abitante Fiore, Bavdhan, Pune",
      name: name.trim(),
      phone: cleanPhone,
      email: email ? email.trim() : "Not Provided",
      configuration: chosenConfig,
      siteVisitDate: date || null,
      siteVisitSlot: timeSlot || null,
      source: source || "Website Direct Form",
      message: message || "Requested instant call back / project e-brochure",
      recipient: NOTIFICATION_EMAIL,
      edgeMetadata: {
        colo: edgeColo,
        country: ipCountry,
        rayId: rayId,
        protocol: request.cf?.httpProtocol || 'HTTP/3',
        tlsCipher: request.cf?.tlsCipher || 'TLS_AES_128_GCM_SHA256'
      }
    };

    // 4. Asynchronous Real-Time Email Dispatch to propsmartrealty@gmail.com
    const emailPromise = (async () => {
      try {
        // A. FormSubmit Edge JSON Dispatch
        await fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `⚡ New VIP Lead: ${leadPayload.name} - ${leadPayload.project} (${chosenConfig})`,
            _template: 'table',
            _captcha: 'false',
            Project: leadPayload.project,
            Buyer_Name: leadPayload.name,
            Phone_Number: leadPayload.phone,
            Email_Address: leadPayload.email,
            Configuration: chosenConfig,
            Site_Visit_Date: leadPayload.siteVisitDate || 'Immediate Callback',
            Site_Visit_Slot: leadPayload.siteVisitSlot || 'Standard Hours',
            Inquiry_Source: leadPayload.source,
            Lead_ID: leadPayload.leadId,
            Visitor_Country: ipCountry,
            Edge_Datacenter: edgeColo,
            Submitted_At: leadPayload.timestamp
          })
        });

        // B. Optional Resend API Integration (if RESEND_API_KEY provided)
        if (env?.RESEND_API_KEY) {
          await fetch('https://api.resend.com/emails', {
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
                <h2>New VIP Inquiry Registered</h2>
                <p><strong>Project:</strong> ${leadPayload.project}</p>
                <p><strong>Name:</strong> ${leadPayload.name}</p>
                <p><strong>Phone:</strong> <a href="tel:${leadPayload.phone}">${leadPayload.phone}</a></p>
                <p><strong>Email:</strong> ${leadPayload.email}</p>
                <p><strong>Configuration:</strong> ${chosenConfig}</p>
                <p><strong>Source:</strong> ${leadPayload.source}</p>
                <p><strong>Lead ID:</strong> ${leadPayload.leadId}</p>
              `
            })
          });
        }

        // C. Optional CRM Webhook
        if (env?.CRM_WEBHOOK_URL) {
          await fetch(env.CRM_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(leadPayload)
          });
        }
      } catch (err) {
        console.error('Edge Email Notification Error:', err);
      }
    })();

    // Execute email dispatch in background using waitUntil
    if (typeof waitUntil === 'function') {
      waitUntil(emailPromise);
    } else {
      context.waitUntil ? context.waitUntil(emailPromise) : emailPromise;
    }

    // 5. Return Instant Success Response to User (< 30ms)
    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you! Your VIP inquiry has been registered and dispatched to propsmartrealty@gmail.com.",
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
