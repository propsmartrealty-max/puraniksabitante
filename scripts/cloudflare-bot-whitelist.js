import https from 'node:https';

const CF_KEY = '81c93c067fa8ead132b47b91ee37624179803';
const CF_EMAIL = 'vikas.yewle@gmail.com';
const ZONE_ID = '3aac96e14fea0353c847f7f9afaea166';

function cfRequest(path, method = 'GET', data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.cloudflare.com',
      path: `/client/v4/zones/${ZONE_ID}${path}`,
      method,
      headers: {
        'X-Auth-Email': CF_EMAIL,
        'X-Auth-Key': CF_KEY,
        'Content-Type': 'application/json'
      }
    };
    if (data) {
      options.headers['Content-Length'] = Buffer.byteLength(JSON.stringify(data));
    }
    const req = https.request(options, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          resolve(body);
        }
      });
    });
    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function main() {
  console.log('🤖 CLOUDFLARE BOT WHITELIST & INFRA HARDENING');

  // 1. Check & set security level to 'medium' or 'low' (prevents false positive JS challenges on crawlers)
  console.log('1. Calibrating Zone Security Level...');
  const secRes = await cfRequest('/settings/security_level', 'PATCH', { value: 'medium' });
  console.log('   Security Level:', secRes.result?.value || secRes.errors);

  // 2. Check Challenge TTL (set to 1 year / 31536000 or max to avoid re-challenging visitors)
  console.log('2. Calibrating Challenge TTL...');
  const chalRes = await cfRequest('/settings/challenge_ttl', 'PATCH', { value: 86400 });
  console.log('   Challenge TTL:', chalRes.result?.value || chalRes.errors);

  // 3. Browser Integrity Check (turn on for attack mitigation, but verified bots bypass automatically)
  console.log('3. Browser Integrity Check...');
  const bicRes = await cfRequest('/settings/browser_check', 'PATCH', { value: 'on' });
  console.log('   Browser Check:', bicRes.result?.value || bicRes.errors);

  // 4. Create Custom WAF Rule or Filter in Cloudflare to explicitly Allow/Skip verified bots and Googlebot
  console.log('4. Checking Custom Rulesets in http_request_firewall_custom phase...');
  const rulesets = await cfRequest('/rulesets');
  console.log('   Found rulesets:', rulesets.result?.length || 0);

  // Attempt to create entrypoint ruleset for phase http_request_firewall_custom
  const rulePayload = {
    name: 'Allow and Whitelist Search Engines and Verified Bots',
    description: 'Skips challenges and security checks for Googlebot, Bingbot, Applebot, and AI crawlers',
    kind: 'zone',
    phase: 'http_request_firewall_custom',
    rules: [
      {
        action: 'skip',
        action_parameters: {
          ruleset: 'current'
        },
        expression: '(cf.client.bot) or (http.user_agent contains "Googlebot") or (http.user_agent contains "Google-InspectionTool") or (http.user_agent contains "AdsBot-Google") or (http.user_agent contains "bingbot") or (http.user_agent contains "Applebot") or (http.user_agent contains "DuckDuckBot") or (http.user_agent contains "GPTBot") or (http.user_agent contains "ClaudeBot") or (http.user_agent contains "PerplexityBot")',
        description: 'Whitelist Googlebot, Search Crawlers, and AI Bots',
        enabled: true
      }
    ]
  };

  const createRuleset = await cfRequest('/rulesets', 'POST', rulePayload);
  if (createRuleset.success) {
    console.log('   ✅ Successfully created Custom WAF Bot Whitelisting Ruleset!');
  } else {
    console.log('   Ruleset Response:', createRuleset.errors || createRuleset.messages);
    // If ruleset exists, update it via PUT/PATCH
    if (createRuleset.errors && createRuleset.errors[0]?.code === 10002) {
      console.log('   Ruleset already exists for phase, querying entrypoint...');
      const entry = await cfRequest('/rulesets/phases/http_request_firewall_custom/entrypoint');
      if (entry.result?.id) {
        console.log('   Entrypoint ID:', entry.result.id);
        const update = await cfRequest(`/rulesets/${entry.result.id}/rules`, 'POST', rulePayload.rules[0]);
        console.log('   Update result:', update.success ? '✅ Rule Added' : update.errors);
      }
    }
  }

  // 5. Verify Page Rules (www to apex canonical)
  console.log('5. Verifying Page Rules...');
  const pageRules = await cfRequest('/pagerules');
  console.log('   Active Page Rules:', pageRules.result?.map(r => `${r.targets[0]?.constraint?.value} -> ${r.actions[0]?.value?.url}`));

  console.log('🎉 CLOUDFLARE BOT WHITELISTING & INFRA HARDENING FINISHED!');
}

main().catch(console.error);
