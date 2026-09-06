/**
 * Cloudflare Pages Function: /api/geo-pricing
 * Edge Currency & NRI Pricing Calculator API
 * Converts INR base pricing to USD, AED, GBP, SGD, and EUR
 */

export async function onRequestGet(context) {
  const { request } = context;
  const country = request.headers.get('cf-ipcountry') || 'IN';
  const colo = request.cf?.colo || 'BOM';

  // Base Pricing in INR
  const baseUnits = [
    { config: "1 BHK Oxygen Flat", carpetSqFt: 489, priceInr: 5199000, displayInr: "₹51.99 Lakhs*" },
    { config: "2 BHK Smart Residence", carpetSqFt: 596, priceInr: 6399000, displayInr: "₹63.99 Lakhs*" },
    { config: "2 BHK Venetian Luxury", carpetSqFt: 735, priceInr: 7850000, displayInr: "₹78.50 Lakhs*" },
    { config: "3 BHK Imperial Residence", carpetSqFt: 867, priceInr: 9750000, displayInr: "₹97.50 Lakhs*" }
  ];

  // Live Exchange Rates (approximate)
  const rates = {
    USD: { symbol: "$", rate: 0.012, name: "US Dollar" },
    AED: { symbol: "AED ", rate: 0.044, name: "UAE Dirham" },
    GBP: { symbol: "£", rate: 0.0095, name: "British Pound" },
    SGD: { symbol: "S$", rate: 0.016, name: "Singapore Dollar" },
    EUR: { symbol: "€", rate: 0.011, name: "Euro" },
    INR: { symbol: "₹", rate: 1.0, name: "Indian Rupee" }
  };

  let targetCurrency = 'INR';
  if (['US', 'CA'].includes(country)) targetCurrency = 'USD';
  else if (['AE', 'SA', 'QA', 'KW', 'OM'].includes(country)) targetCurrency = 'AED';
  else if (['GB'].includes(country)) targetCurrency = 'GBP';
  else if (['SG', 'AU', 'NZ'].includes(country)) targetCurrency = 'SGD';
  else if (['DE', 'FR', 'IT', 'ES', 'NL'].includes(country)) targetCurrency = 'EUR';

  const selectedRate = rates[targetCurrency] || rates.INR;

  const localizedUnits = baseUnits.map(unit => {
    const converted = Math.round(unit.priceInr * selectedRate.rate);
    const formattedConverted = `${selectedRate.symbol}${converted.toLocaleString('en-US')}`;
    return {
      ...unit,
      targetCurrency: targetCurrency,
      targetCurrencyPrice: formattedConverted,
      nriSpecialPrivilege: "0% Stamp Duty & NRI Dedicated Documentation Support"
    };
  });

  return new Response(JSON.stringify({
    detectedCountry: country,
    edgeDatacenter: colo,
    currency: targetCurrency,
    exchangeRate: selectedRate.rate,
    units: localizedUnits,
    timestamp: new Date().toISOString()
  }, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=300, s-maxage=300"
    }
  });
}
