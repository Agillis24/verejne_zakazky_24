# Aktualizace domény na www.zakazkovy-pruvodce.cz

## Co bylo provedeno

Všechny odkazy a URL v aplikaci byly aktualizovány z `vererejnezakazky24.cz` na `www.zakazkovy-pruvodce.cz`.

## Aktualizované soubory

### Komponenty:
- `/src/app/components/SEO.tsx` - výchozí canonical URL a OG image
- `/src/app/components/StructuredData.tsx` - Organization schema URL a logo

### Stránky:
- `/src/app/pages/Home.tsx` - canonical URL a breadcrumb schema
- `/src/app/pages/Aktuality.tsx` - canonical URL a breadcrumb schema
- `/src/app/pages/ArticleDetail.tsx` - canonical URL a breadcrumb schema

### SEO soubory:
- `/public/robots.txt` - sitemap URL
- `/public/sitemap.xml` - všechny URL stránek
- `/scripts/generate-sitemap.ts` - BASE_URL konstanta

### Dokumentace:
- Dokumentační soubory (SEO_DOCUMENTATION.md, GOOGLE_SEARCH_CONSOLE_SETUP.md, SEO_CHECKLIST.md) obsahují odkazy na původní doménu vererejnezakazky24.cz
- **UPOZORNĚNÍ:** Před nasazením do produkce je doporučeno manuálně projít všechny dokumentační soubory a nahradit starou doménu novou

## Finální kontrola před nasazením

Před nasazením na produkci zkontrolujte:

1. ✅ Canonical URL ve všech SEO komponentách - **HOTOVO**
2. ✅ robots.txt - **HOTOVO**
3. ✅ sitemap.xml - **HOTOVO**
4. ✅ Strukturovaná data (JSON-LD) - **HOTOVO**
5. ⚠️  Dokumentační soubory - **Zkontrolujte manuálně**

## Jak zkontrolovat dokumentaci

Dokumentační soubory obsahují ukázkové URL. Doporučujeme:

```bash
# Vyhledejte všechny výskyty staré domény v dokumentaci
grep -r "vererejnezakazky24" *.md

# Nahraďte je novou doménou
sed -i 's/vererejnezakazky24\.cz/www.zakazkovy-pruvodce.cz/g' *.md
```

## Po nasazení

1. Zaregistrujte doménu www.zakazkovy-pruvodce.cz v Google Search Console
2. Odešlete nový sitemap.xml
3. Ověřte funkčnost všech SEO tagů pomocí:
   - https://search.google.com/test/rich-results
   - https://www.opengraph.xyz/
   - Google Search Console URL Inspection

---

**Datum aktualizace:** 11. února 2026
