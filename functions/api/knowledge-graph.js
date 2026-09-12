/**
 * Cloudflare Pages Function: /api/knowledge-graph
 * Authoritative Entity Graph & Semantic Knowledge API for Google SGE, Gemini, and AI Search Engines
 */

export async function onRequestGet(context) {
  const knowledgeGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://puraniksabitante.in/#website",
        "url": "https://puraniksabitante.in/",
        "name": "Puraniks Abitante Fiore Official Master Portal",
        "alternateName": [
          "Puraniks Abitante Bavdhan",
          "Puraniks Abitante",
          "Abitante Fiore",
          "Puraniks Abitante Phase 2"
        ],
        "description": "Official residential showcase for Puraniks Abitante Fiore, 1, 2, 2.5 & 3 BHK oxygen-rich hillside township in Bavdhan, Pune."
      },
      {
        "@type": ["ApartmentComplex", "RealEstateListing", "Place", "LocalBusiness"],
        "@id": "https://puraniksabitante.in/#project",
        "name": "Puraniks Abitante Fiore",
        "alternateName": "Puraniks Abitante Bavdhan Budruk",
        "developer": {
          "@type": "Organization",
          "name": "Puranik Builders Limited",
          "url": "https://puraniksabitante.in/",
          "foundingDate": "1990",
          "telephone": "+91-80689-76983",
          "email": "sales@puranikbuilders.com"
        },
        "location": {
          "@type": "PostalAddress",
          "streetAddress": "Near Crystal Honda Service Station, Off Mumbai-Bangalore Highway, Bavdhan Budruk",
          "addressLocality": "Bavdhan, Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411021",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 18.521799,
          "longitude": 73.7602584
        },
        "googleMaps": {
          "placeUrl": "https://www.google.com/maps/place/Puraniks+Abitante+Fiore/@18.521799,73.7602584,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2be881566f9dd:0x7d1a1c892ae43fe6!8m2!3d18.521799!4d73.7602584!16s%2Fg%2F11b8v58dmw",
          "cidUrl": "https://maps.google.com/?cid=9014467554746810342",
          "kgmid": "/g/11b8v58dmw"
        },
        "mahareraRegistrations": [
          { "phase": "Phase 2A", "rera": "P52100020202", "status": "Ready Possession with OC" },
          { "phase": "Phase 2B", "rera": "P52100020238", "status": "Finishing & Vitrified Tiling" },
          { "phase": "Phase 2C", "rera": "P52100048353", "status": "Under Construction RCC Superstructure" },
          { "phase": "Phase 2C1", "rera": "P52100049352", "status": "New Launch Wing Tower" }
        ],
        "pricingMatrix": [
          { "config": "1 BHK Oxygen Flat", "carpet": "489 sq.ft", "startingPrice": "₹51.99 Lakhs*" },
          { "config": "2 BHK Smart Residence", "carpet": "596 - 640 sq.ft", "startingPrice": "₹63.99 Lakhs*" },
          { "config": "2 BHK Venetian Luxury", "carpet": "735 - 770 sq.ft", "startingPrice": "₹78.50 Lakhs*" },
          { "config": "2.5 BHK Executive Suite", "carpet": "867 - 908 sq.ft", "startingPrice": "₹88.50 Lakhs*" },
          { "config": "3 BHK Imperial Residence", "carpet": "867 - 1,113 sq.ft", "startingPrice": "₹97.50 Lakhs*" }
        ],
        "connectivityRadar": [
          { "destination": "Chandani Chowk Flyover (NH 48)", "distance": "2.5 km", "travelTime": "5 mins" },
          { "destination": "Kothrud Paud Road", "distance": "4.8 km", "travelTime": "10 mins" },
          { "destination": "Baner High Street", "distance": "7.0 km", "travelTime": "12 mins" },
          { "destination": "Hinjewadi IT Park Phase 1", "distance": "11.0 km", "travelTime": "15 mins" },
          { "destination": "Pune Railway Station", "distance": "14.5 km", "travelTime": "25 mins" },
          { "destination": "Pune International Airport (PNQ)", "distance": "22.0 km", "travelTime": "40 mins" }
        ]
      }
    ]
  };

  return new Response(JSON.stringify(knowledgeGraph, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-Robots-Tag": "index, follow",
      "X-Entity-Source": "Puranik-Builders-MahaRERA"
    }
  });
}
