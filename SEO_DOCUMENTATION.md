# SEO Dokumentace - Veřejné zakázky 24

## Přehled implementace SEO

Web "Veřejné zakázky 24" je plně připraven pro indexování Googlem a optimalizován pro vyhledávače.

## 🎯 Implementované SEO funkce

### 1. Meta tagy
- **Základní meta tagy** (title, description, keywords)
- **Open Graph tagy** (Facebook, LinkedIn)
- **Twitter Card tagy**
- **Canonical URL** na každé stránce
- **Language a locale tagy** (cs_CZ)
- **Robots meta tagy** pro řízení indexování

### 2. Strukturovaná data (Schema.org JSON-LD)
- **Organization Schema** - informace o organizaci
- **Article Schema** - pro jednotlivé články
- **BreadcrumbList Schema** - navigační drobečková navigace
- Automatická generace pro všechny stránky

### 3. Soubory pro vyhledávače
- **robots.txt** - `/public/robots.txt`
- **sitemap.xml** - `/public/sitemap.xml`

### 4. Sémantické HTML
- Správné použití HTML5 elementů (`<article>`, `<section>`, `<nav>`)
- Hierarchická struktura nadpisů (H1 → H6)
- ARIA atributy pro přístupnost

## 📄 Stránky a jejich SEO

### Homepage (`/`)
- **Title:** "Veřejné zakázky 24 - Průvodce veřejnými zakázkami"
- **Description:** "Moderní průvodce českým právem veřejných zakázek..."
- **Keywords:** veřejné zakázky, ZZVZ, ÚOHS, zadávací řízení, legislativa
- **Structured Data:** Organization Schema + Breadcrumb

### Aktuality (`/aktuality`)
- **Title:** "Aktuality - Veřejné zakázky 24"
- **Description:** "Nejnovější informace z oblasti veřejných zakázek..."
- **Keywords:** aktuality veřejné zakázky, legislativa, judikatura, ÚOHS
- **Structured Data:** Breadcrumb Schema
- **Paginace:** Správné canonical URL pro stránky (?page=1, ?page=2)

### Detail článku (`/aktuality/:id`)
- **Title:** Dynamický název článku
- **Description:** Excerpt článku
- **Keywords:** Kategorie + kontextová klíčová slova
- **Structured Data:** Article Schema + Breadcrumb
- **Article meta tagy:** publishedTime, modifiedTime, author, section, tags
- **OG Image:** Obrázek článku

## 🔧 Konfigurace Google Search Console

### Krok 1: Ověření vlastnictví
1. Přihlaste se do [Google Search Console](https://search.google.com/search-console)
2. Přidejte novou property: `https://vererejnezakazky24.cz`
3. Zvolte metodu ověření:
   - **HTML soubor** (doporučeno)
   - DNS záznam
   - Google Analytics
   - Google Tag Manager

### Krok 2: Odeslání sitemap
1. V Google Search Console přejděte na "Sitemaps"
2. Přidejte URL sitemapy: `https://vererejnezakazky24.cz/sitemap.xml`
3. Klikněte na "Odeslat"

### Krok 3: Testování
1. Použijte nástroj "URL Inspection" pro testování jednotlivých URL
2. Zkontrolujte "Coverage" report pro indexované stránky
3. Sledujte "Performance" pro data o vyhledávání

## 🗺️ Sitemap struktura

Sitemap obsahuje:
- Homepage (priorita: 1.0)
- Aktuality - hlavní stránka (priorita: 0.9)
- Všechny jednotlivé články (priorita: 0.7-0.8)

**Frekvence aktualizace:**
- Homepage: weekly
- Aktuality: daily
- Články: monthly

## 🤖 Robots.txt

Soubor `robots.txt` je nakonfigurován pro:
- Povolení všech hlavních vyhledávačů (Google, Bing)
- Blokování /api/ a /admin/ složek (pokud existují)
- Odkaz na sitemap.xml

## 📊 Klíčová slova

### Primární klíčová slova:
- veřejné zakázky
- ZZVZ (Zákon o zadávání veřejných zakázek)
- ÚOHS (Úřad pro ochranu hospodářské soutěže)
- zadávací řízení
- judikatura veřejných zakázek

### Sekundární klíčová slova:
- legislativa veřejných zakázek
- metodika zadávání zakázek
- vzdělávání veřejné zakázky
- rozhodnutí ÚOHS
- komentář ZZVZ

## 🎨 Open Graph obrázky

**Důležité:** Vytvořte následující obrázky:
- `/public/og-image.jpg` - hlavní OG obrázek (1200x630px)
- `/public/logo.png` - logo pro strukturovaná data

Každý článek má vlastní OG image automaticky z `article.image`.

## 📱 Mobilní optimalizace

- Responzivní design
- Meta viewport tag
- Rychlé načítání (lazy loading obrázků)
- Touch-friendly navigace

## ⚡ Výkon a rychlost

Doporučené optimalizace:
1. **Kompresi obrázků** - WebP formát
2. **CDN** - CloudFlare nebo podobné
3. **Lazy loading** - pro obrázky pod fold
4. **Minifikace** - CSS a JS soubory
5. **Caching** - browser cache headers

## 🔍 Testovací nástroje

### Google nástroje:
- [Google Search Console](https://search.google.com/search-console)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Další nástroje:
- [Schema.org Validator](https://validator.schema.org/)
- [Open Graph Debugger](https://www.opengraph.xyz/)
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/)

## 📈 Měření úspěšnosti

Sledujte tyto metriky v Google Search Console:
- **Impressions** - kolikrát se web zobrazil ve výsledcích
- **Clicks** - počet kliknutí z vyhledávání
- **CTR** (Click-Through Rate) - poměr kliků k zobrazením
- **Average Position** - průměrná pozice ve výsledcích
- **Core Web Vitals** - LCP, FID, CLS

## 🚀 Další kroky

1. **Aktualizace sitemap.xml** - Při přidání nových článků aktualizujte sitemap
2. **Monitoring** - Pravidelně kontrolujte GSC
3. **Obsah** - Publikujte pravidelný, kvalitní obsah
4. **Backlinky** - Budujte kvalitní zpětné odkazy
5. **Social signals** - Sdílejte obsah na sociálních sítích

## 🔄 Maintenance

### Týdenní úkoly:
- Kontrola nových článků v sitemap.xml
- Monitoring GSC pro chyby crawlování

### Měsíční úkoly:
- Analýza výkonu klíčových slov
- Aktualizace meta popisů podle CTR
- Kontrola a oprava broken links

### Čtvrtletní úkoly:
- SEO audit webu
- Aktualizace obsahu starších článků
- Konkurenční analýza

## 📞 Kontakt pro SEO otázky

Pro technické SEO dotazy kontaktujte:
- Email: info@vz24.cz
- Web: https://vererejnezakazky24.cz

---

**Poslední aktualizace:** 11. února 2026
**Verze dokumentace:** 1.0
