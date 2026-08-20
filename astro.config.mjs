import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.techofixmexico.site',
  output: 'static',
  integrations: [sitemap({
    serialize(item) {
      const path = new URL(item.url).pathname;
      if (path === '/') return { ...item, changefreq: 'weekly', priority: 1.0 };
      if (path === '/servicios/' || path === '/zonas/') return { ...item, changefreq: 'monthly', priority: 0.9 };
      if (path.startsWith('/servicios/') || path.startsWith('/zonas/') || path === '/reparacion-de-techos/' || path === '/emergencias/') {
        return { ...item, changefreq: 'monthly', priority: 0.8 };
      }
      if (path.startsWith('/blog/')) return { ...item, changefreq: 'monthly', priority: path === '/blog/' ? 0.7 : 0.6 };
      return { ...item, changefreq: 'yearly', priority: 0.5 };
    },
  })],
  build: { format: 'directory' },
  compressHTML: true
});
