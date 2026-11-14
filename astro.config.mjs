// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO(launch, PLAN §6 Phase 1b): replace with the choir's domain once the owner
// has one. Until then this is the Vercel address Carlo's project gives us. The
// sitemap and the Open Graph URLs are built from it.
const SITE = process.env.SITE_URL || 'https://crvx-website.vercel.app';

export default defineConfig({
  site: SITE,
  output: 'static',
  integrations: [sitemap()],
});
