/**
 * Cloudflare Pages Function: /api/lead
 * Primary Resend API Lead Ingestion Engine
 * Delivers real-time inquiries directly to propsmartrealty@gmail.com via Resend
 */

const NOTIFICATION_EMAIL = "propsmartrealty@gmail.com";
const DEFAULT_FROM_EMAIL = "Puraniks Abitante Fiore <onboarding@resend.dev>";

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
      pickupLocation,
      cabPickup
    } = body;

    // 1. Validation
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

    // 2. Format Payload
    const cleanPhone = phone.replace(/[^0-9+]/g, "");
    const waNumber = cleanPhone.replace(/[^0-9]/g, "");
    const rayId = request.headers.get('cf-ray') || `RAY-${Date.now()}`;
    const ipCountry = request.headers.get('cf-ipcountry') || 'IN';
    const edgeColo = request.cf?.colo || 'BOM';
    const chosenConfig = configuration || config || "2 BHK Smart";
    const leadId = `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const timeIST = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const leadPayload = {
      leadId,
      project: "Puraniks Abitante Fiore, Bavdhan, Pune",
      name: name.trim(),
      phone: cleanPhone,
      email: email ? email.trim() : "Not Provided",
      configuration: chosenConfig,
      siteVisitDate: date || "Immediate Callback Requested",
      siteVisitSlot: timeSlot || "Standard Business Hours",
      cabPickup: cabPickup ? `Yes (${pickupLocation || 'Location on confirmation'})` : 'Self-Drive',
      source: source || "Website Lead Form",
      timeIST,
      datacenter: `${edgeColo} (${ipCountry})`
    };

    // 3. Build Luxury HTML Email Template for Resend
    const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New VIP Lead</title>
    </head>
    <body style="margin: 0; padding: 20px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e8f0;">
        <!-- Header -->
        <tr>
          <td style="background-color: #0B1329; padding: 28px 24px; text-align: center; border-bottom: 3px solid #D97706;">
            <div style="font-size: 11px; font-weight: 800; color: #F59E0B; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 6px;">
              ⚡ VIP INQUIRY ALERT • PROPSMART REALTY
            </div>
            <h1 style="color: #ffffff; font-size: 22px; font-weight: 800; margin: 0; letter-spacing: -0.5px;">
              Puraniks Abitante Fiore Bavdhan
            </h1>
            <p style="color: #94a3b8; font-size: 12px; margin: 6px 0 0 0;">
              45-Acre Hillside Italian Township • Official Portal
            </p>
          </td>
        </tr>

        <!-- Body Content -->
        <tr>
          <td style="padding: 24px;">
            <div style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; padding: 18px; margin-bottom: 20px;">
              <table width="100%" cellpadding="6" cellspacing="0">
                <tr>
                  <td width="35%" style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase;">Buyer Name</td>
                  <td style="font-size: 15px; font-weight: 800; color: #0f172a;">${leadPayload.name}</td>
                </tr>
                <tr>
                  <td style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase;">Phone Number</td>
                  <td style="font-size: 16px; font-weight: 800; color: #0284c7;">
                    <a href="tel:${leadPayload.phone}" style="color: #0284c7; text-decoration: none;">${leadPayload.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase;">Email Address</td>
                  <td style="font-size: 13px; color: #334155;">${leadPayload.email}</td>
                </tr>
                <tr>
                  <td style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase;">Configuration</td>
                  <td style="font-size: 14px; font-weight: 700; color: #b45309;">${leadPayload.configuration}</td>
                </tr>
                <tr>
                  <td style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase;">Site Visit Date</td>
                  <td style="font-size: 13px; color: #334155;">${leadPayload.siteVisitDate} (${leadPayload.siteVisitSlot})</td>
                </tr>
                <tr>
                  <td style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase;">Inquiry Source</td>
                  <td style="font-size: 12px; color: #64748b;">${leadPayload.source}</td>
                </tr>
                <tr>
                  <td style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase;">Lead ID</td>
                  <td style="font-size: 11px; font-family: monospace; color: #64748b;">${leadPayload.leadId}</td>
                </tr>
                <tr>
                  <td style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase;">Timestamp (IST)</td>
                  <td style="font-size: 12px; color: #64748b;">${leadPayload.timeIST}</td>
                </tr>
              </table>
            </div>

            <!-- Quick Action Buttons -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="48%" align="center">
                  <a href="tel:${leadPayload.phone}" style="display: block; padding: 12px 16px; background-color: #0F172A; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 13px; text-align: center;">
                    📞 Call Buyer Now
                  </a>
                </td>
                <td width="4%"></td>
                <td width="48%" align="center">
                  <a href="https://wa.me/${waNumber}?text=Hello%20${encodeURIComponent(leadPayload.name)}%2C%20thank%20you%20for%20your%20inquiry%20regarding%20Puraniks%20Abitante%20Fiore%20Bavdhan." style="display: block; padding: 12px 16px; background-color: #10B981; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 13px; text-align: center;">
                    💬 Open WhatsApp
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8;">
            Delivered via Resend & Cloudflare Edge Engine • Puraniks Abitante Fiore
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

    // 4. Primary Resend API Dispatch
    const resendApiKey = env?.RESEND_API_KEY || "re_123456789"; // Replace with live key or environment variable
    const fromEmail = env?.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL;

    const resendPromise = (async () => {
      try {
        if (env?.RESEND_API_KEY) {
          const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${env.RESEND_API_KEY}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              from: fromEmail,
              to: [NOTIFICATION_EMAIL],
              subject: `⚡ VIP LEAD: ${leadPayload.name} - Puraniks Abitante (${chosenConfig})`,
              html: emailHtml
            })
          });
          const resendResult = await resendResponse.json();
          console.log('Resend Delivery Status:', resendResult);
        }

        // Secondary Redundant Gateway: FormSubmit
        await fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            _subject: `⚡ VIP LEAD: ${leadPayload.name} - Puraniks Abitante (${chosenConfig})`,
            _template: 'table',
            _captcha: 'false',
            Project: leadPayload.project,
            Buyer_Name: leadPayload.name,
            Phone_Number: leadPayload.phone,
            Email_Address: leadPayload.email,
            Configuration: chosenConfig,
            Site_Visit: `${leadPayload.siteVisitDate} (${leadPayload.siteVisitSlot})`,
            Source: leadPayload.source,
            Lead_ID: leadPayload.leadId,
            Time_IST: leadPayload.timeIST
          })
        });
      } catch (err) {
        console.error('Lead Dispatch Error:', err);
      }
    })();

    if (typeof waitUntil === 'function') {
      waitUntil(resendPromise);
    } else if (context.waitUntil) {
      context.waitUntil(resendPromise);
    }

    // 5. Instant Edge Success Response (< 20ms)
    return new Response(
      JSON.stringify({
        success: true,
        message: "Your inquiry has been dispatched to propsmartrealty@gmail.com via Resend.",
        leadId: leadPayload.leadId,
        edgeLocation: edgeColo,
        timestamp: leadPayload.timeIST
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "no-store",
          "X-Edge-Server": edgeColo
        }
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400"
    }
  });
}
