// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SUPPORT_LIVE } from './src/data/donate.ts';

// TODO(launch, PLAN §6 Phase 1b): replace with the choir's domain once the owner
// has one. Until then this is the Vercel address Carlo's project gives us. The
// sitemap and the Open Graph URLs are built from it.
const SITE = process.env.SITE_URL || 'https://crvx-website.vercel.app';

export default defineConfig({
  site: SITE,
  output: 'static',
  // /support stays out of the sitemap until a giving method is enabled.
  integrations: [sitemap({ filter: page => SUPPORT_LIVE || !page.includes('/support') })],
});
