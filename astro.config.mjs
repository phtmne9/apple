// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Set SITE_BASE=/siversapple when building the package to hand off to the
// park's developer, so the site works when placed at ile-alatau.kz/siversapple/
// instead of at the domain root. See integration/HANDOFF.md.
const base = process.env.SITE_BASE || '/';
const isHandoffBuild = base !== '/';

// https://astro.build/config
export default defineConfig({
  site: isHandoffBuild ? 'https://www.ile-alatau.kz' : 'https://apple-alpha-pink.vercel.app',
  base,
  trailingSlash: 'always',

  integrations: [sitemap()],

  redirects: isHandoffBuild
    ? {}
    : {
        '/ru/o-yabloni': '/ru/#species',
        '/kk/o-yabloni': '/kk/#species',
        '/en/o-yabloni': '/en/#species',
        '/ru/volonterstvo': '/ru/#involve',
        '/kk/volonterstvo': '/kk/#involve',
        '/en/volonterstvo': '/en/#involve',
        '/ru/tropa': '/ru/#trail',
        '/kk/tropa': '/kk/#trail',
        '/en/tropa': '/en/#trail',
      },
});