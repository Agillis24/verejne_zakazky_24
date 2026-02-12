# Google Search Console - Kompletní návod k nastavení

## 📋 Přehled

Tento dokument obsahuje krok-za-krokem instrukce pro nastavení Google Search Console pro web "Veřejné zakázky 24".

## 🚀 Krok 1: Registrace v Google Search Console

1. **Přihlášení**
   - Navštivte: https://search.google.com/search-console
   - Přihlaste se Google účtem

2. **Přidání Property**
   - Klikněte na "Přidat property"
   - Zvolte "URL prefix"
   - Zadejte: `https://vererejnezakazky24.cz`

## ✅ Krok 2: Ověření vlastnictví webu

### Metoda 1: HTML tag (DOPORUČENO)

1. V Google Search Console zvolte metodu "HTML tag"
2. Zkopírujte meta tag, který vypadá takto:
   ```html
   <meta name="google-site-verification" content="VAŠE_OVĚŘOVACÍ_KÓD" />
   ```
3. **DŮLEŽITÉ:** Tento tag musíte přidat do HTML hlavičky vaší stránky
   - Protože používáte React Helmet, přidejte ho do komponenty SEO.tsx:

```tsx
// V souboru /src/app/components/SEO.tsx
// Přidejte do <Helmet> komponenty:

<Helmet>
  {/* Google Search Console Verification */}
  <meta name="google-site-verification" content="VAŠE_OVĚŘOVACÍ_KÓD" />
  
  {/* Existující meta tagy... */}
  <title>{fullTitle}</title>
  // ... zbytek kódu
</Helmet>
```

4. Po přidání tagu klikněte v GSC na "Ověřit"

### Metoda 2: HTML soubor

1. Stáhněte HTML soubor od Google (např. `google1234567890abcdef.html`)
2. Nahrajte ho do složky `/public/`
3. Soubor bude dostupný na: `https://vererejnezakazky24.cz/google1234567890abcdef.html`
4. V GSC klikněte na "Ověřit"

### Metoda 3: DNS záznam (pro pokročilé)

1. Zkopírujte TXT záznam od Google
2. Přidejte ho do DNS nastavení vaší domény
3. Počkejte na propagaci DNS (může trvat až 24 hodin)
4. V GSC klikněte na "Ověřit"

## 🗺️ Krok 3: Odeslání Sitemap

1. Po úspěšném ověření přejděte na "Sitemaps" v levém menu
2. Do pole "Přidat novou sitemapu" zadejte: `sitemap.xml`
3. Klikněte na "Odeslat"
4. Kontrola stavu:
   - ✅ Úspěch: Sitemap byla načtena
   - ⚠️ Varování: Zkontrolujte chyby
   - ❌ Chyba: Opravte problémy v sitemap.xml

## 📊 Krok 4: Kontrola indexování

### Test jednotlivých URL
1. Použijte nástroj "URL Inspection" (vpravo nahoře lupa)
2. Zadejte URL, např.: `https://vererejnezakazky24.cz/aktuality`
3. Zkontrolujte:
   - Je URL indexovaná?
   - Jsou strukturovaná data validní?
   - Funguje mobilní zobrazení?

### Požadavek na indexování
- Pokud stránka není indexovaná, klikněte na "Request indexing"
- Google obvykle zpracuje požadavek do 24-48 hodin

## 🔍 Krok 5: Testování Rich Results

1. Navštivte: https://search.google.com/test/rich-results
2. Zadejte URL vaší stránky
3. Zkontrolujte, zda se správně zobrazují:
   - **Organization** (na homepage)
   - **Article** (na detailu článku)
   - **BreadcrumbList** (na všech stránkách)

## 📈 Krok 6: Google Analytics (volitelné)

### Vytvoření GA4 property

1. Přihlaste se do: https://analytics.google.com
2. Vytvořte nový účet nebo property
3. Vyberte "Web" jako typ měření
4. Zkopírujte Measurement ID (formát: `G-XXXXXXXXXX`)

### Přidání do webu

Upravte soubor `/src/app/components/Analytics.tsx`:

```tsx
// Nahraďte tento řádek:
const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID';

// Vaším skutečným ID:
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
```

### Propojení GSC a GA4

1. V Google Search Console přejděte do "Settings"
2. Klikněte na "Associate with Google Analytics property"
3. Vyberte vaši GA4 property
4. Potvrďte spojení

## 🎯 Krok 7: Nastavení cílů a konverzí

### V Google Analytics 4:

1. Přejděte na "Configure" → "Events"
2. Vytvořte custom events pro tracking:
   - **Kliknutí na Herohero CTA**
   - **Zobrazení článku**
   - **Přehrání videa**
   - **Odeslání kontaktního formuláře**

3. Označte důležité eventy jako "Conversions"

## 📱 Krok 8: Kontrola mobilní přívětivosti

1. Navštivte: https://search.google.com/test/mobile-friendly
2. Zadejte URL: `https://vererejnezakazky24.cz`
3. Zkontrolujte výsledky:
   - ✅ Mobilní zobrazení funguje
   - ⚠️ Problémy s CSS/JS
   - ❌ Stránka není mobilně přívětivá

## ⚡ Krok 9: Core Web Vitals

V Google Search Console:
1. Přejděte na "Core Web Vitals"
2. Zkontrolujte metriky:
   - **LCP** (Largest Contentful Paint) - < 2.5s
   - **FID** (First Input Delay) - < 100ms
   - **CLS** (Cumulative Layout Shift) - < 0.1

## 🔔 Krok 10: Nastavení upozornění

1. V GSC přejděte na "Settings" → "Users and permissions"
2. Přidejte uživatele, kteří mají dostávat emailové notifikace
3. Nastavte typy upozornění:
   - Kritické chyby crawlování
   - Manuální akce (penalizace)
   - Bezpečnostní problémy

## 📝 Checklist implementace SEO

- [ ] Web je ověřený v Google Search Console
- [ ] Sitemap.xml je odeslaná a zpracovaná
- [ ] Robots.txt je správně nakonfigurovaný
- [ ] Meta tagy jsou na všech stránkách
- [ ] Strukturovaná data jsou validní
- [ ] Google Analytics je nainstalovaný a funguje
- [ ] GSC a GA4 jsou propojené
- [ ] Mobilní zobrazení je testované
- [ ] Core Web Vitals jsou v zeleném pásmu
- [ ] Upozornění jsou nastavená

## 🆘 Časté problémy a řešení

### Problém: "Sitemap couldn't be read"
**Řešení:**
- Zkontrolujte, že sitemap.xml je dostupná na: `https://vererejnezakazky24.cz/sitemap.xml`
- Ověřte validitu XML na: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Zkontrolujte HTTPS certifikát

### Problém: "URL is not on Google"
**Řešení:**
- Použijte "Request indexing" v URL Inspection
- Zkontrolujte robots.txt, zda neblokuje URL
- Počkejte 1-2 týdny na přirozené indexování

### Problém: "Structured data errors"
**Řešení:**
- Testujte na: https://search.google.com/test/rich-results
- Zkontrolujte JSON-LD syntax
- Opravte chybějící povinná pole

### Problém: "Mobile usability issues"
**Řešení:**
- Zkontrolujte viewport meta tag
- Otestujte na skutečném mobilním zařízení
- Opravte problémy s CSS

## 📞 Podpora

**Google Search Console Help:**
- https://support.google.com/webmasters/

**Google Analytics Help:**
- https://support.google.com/analytics/

**Schema.org dokumentace:**
- https://schema.org/docs/gs.html

## 🔄 Pravidelná údržba

### Každý týden:
- Kontrola nových chyb v GSC
- Sledování výkonu ve vyhledávání
- Aktualizace sitemap.xml při nových článcích

### Každý měsíc:
- Analýza nejúspěšnějších stránek
- Optimalizace meta popisů podle CTR
- Kontrola broken links

### Každé 3 měsíce:
- Kompletní SEO audit
- Aktualizace klíčových slov
- Benchmark proti konkurenci

---

**Datum vytvoření:** 11. února 2026
**Poslední aktualizace:** 11. února 2026
**Verze:** 1.0
