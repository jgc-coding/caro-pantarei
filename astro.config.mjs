// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Einzige Quelle fuer Site-URL und Base-Pfad (siehe CLAUDE.md, "Stolperfallen"):
// - lokal:        Defaults (localhost, Base "/")
// - GitHub Pages: SITE_URL=https://jgc-coding.github.io  BASE_PATH=/caro-pantarei
// - eigene Domain: SITE_URL=https://<domain>             BASE_PATH=/
// Muster uebernommen aus dem Achievewear-Blog.
const SITE_URL = process.env.SITE_URL ?? 'http://localhost:4321';
const BASE_PATH = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
