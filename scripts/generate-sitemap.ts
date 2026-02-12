/**
 * Automatické generování sitemap.xml z dat aplikace
 * 
 * Spusťte pomocí: npx tsx scripts/generate-sitemap.ts
 * nebo přidejte do package.json scripts
 */

import { articles } from '../src/app/data/articles';
import { writeFileSync } from 'fs';

const BASE_URL = 'https://www.zakazkovy-pruvodce.cz';
const TODAY = new Date().toISOString().split('T')[0];

// Funkce pro generování XML sitemap
function generateSitemap(): string {
  const staticPages = [
    {
      url: '/',
      lastmod: TODAY,
      changefreq: 'weekly',
      priority: '1.0',
    },
    {
      url: '/aktuality',
      lastmod: TODAY,
      changefreq: 'daily',
      priority: '0.9',
    },
  ];

  // Převod článků na sitemap záznamy
  const articlePages = articles.map((article) => ({
    url: `/aktuality/${article.id}`,
    lastmod: article.date,
    changefreq: 'monthly',
    priority: '0.8',
  }));

  // Kombinace všech stránek
  const allPages = [...staticPages, ...articlePages];

  // Generování XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`;

  allPages.forEach((page) => {
    xml += `
  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  xml += `
</urlset>`;

  return xml;
}

// Generování a uložení sitemap
try {
  const sitemap = generateSitemap();
  writeFileSync('./public/sitemap.xml', sitemap);
  console.log('✅ Sitemap.xml byla úspěšně vygenerována!');
  console.log(`📄 Celkem stránek: ${articles.length + 2}`);
  console.log(`📅 Datum aktualizace: ${TODAY}`);
} catch (error) {
  console.error('❌ Chyba při generování sitemap:', error);
  process.exit(1);
}