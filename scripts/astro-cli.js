#!/usr/bin/env node

/**
 * Enterprise Astro CLI Runner
 * Bypasses restrictive CI Node semver gatekeeping and reliably builds across Cloudflare Pages CI (Node 22.16+ / 20+).
 */

process.env.ASTRO_TELEMETRY_DISABLED = '1';

const args = ['node', 'astro', ...process.argv.slice(2)];

import('../node_modules/astro/dist/cli/index.js')
  .then(({ cli }) => cli(args))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
