# GitHub Pages Deployment Guide

## 📋 Požadavky

Před deploymentem do GitHub Pages:

1. **Stažení obrázků z Figma Make**
   - Logo: `logo.png` → umístit do `/public/images/`
   - Hero obrázek: `hero.png` → umístit do `/public/images/`
   - Foto Jana Musila: `jan-musil.jpg` → umístit do `/public/images/`
   - Foto Dominika Žlebka: `dominik-zlebek.jpg` → umístit do `/public/images/`
   - Obrázek "Proč sledovat": `why-follow.png` → umístit do `/public/images/`
   - Obrázek Tenderix: `tenderix.png` → umístit do `/public/images/`

2. **Nainstalovat gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

## 🚀 Deployment

### Krok 1: Nastavení GitHub Repository

1. Vytvořte nový repository na GitHubu
2. Přidejte remote:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

### Krok 2: Deploy na GitHub Pages

```bash
npm run deploy
```

Tento příkaz:
- Vytvoří production build (`npm run build`)
- Nahraje obsah `dist` složky do `gh-pages` branch
- Automaticky nastaví GitHub Pages

### Krok 3: Nastavení GitHub Pages

1. Jděte do Settings → Pages v GitHub repository
2. V sekci "Source" vyberte `gh-pages` branch
3. Klikněte na "Save"
4. Web bude dostupný na: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Krok 4: Aktualizace base URL (pokud používáte subdomain)

Pokud vaše stránka bude na `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`:

1. Otevřete `vite.config.ts`
2. Změňte `base: '/'` na `base: '/YOUR-REPO-NAME/'`

Pokud používáte vlastní doménu:
- Ponechte `base: '/'`
- V repository vytvořte soubor `/public/CNAME` s vaší doménou

## 🔧 Konfigurace vlastní domény

### Pro zakazkovy-pruvodce.cz:

1. Vytvořte soubor `/public/CNAME`:
   ```
   zakazkovy-pruvodce.cz
   ```

2. V DNS nastavení domény přidejte A záznamy:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

3. Nebo CNAME záznam:
   ```
   YOUR-USERNAME.github.io
   ```

4. V GitHub repository Settings → Pages nastavte custom domain

## 📝 NPM Scripty

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

## ⚠️ Důležité poznámky

1. **React Router**: Projekt je nakonfigurován pro GitHub Pages s workaround pro client-side routing pomocí `404.html`

2. **Obrázky**: Všechny cesty k obrázkům jsou nyní `/images/xxx.png` - nezapomeňte obrázky přidat!

3. **SEO**: Po deployu aktualizujte:
   - Google Search Console s novou doménou
   - Sitemap URL
   - Canonical URLs v SEO komponentách

4. **Build**: Production build automaticky:
   - Minifikuje kód
   - Optimalizuje assety
   - Vytvoří static files

## 🔄 Aktualizace webu

Pro každou aktualizaci stačí spustit:

```bash
npm run deploy
```

Změny budou živé během několika minut.

## 🐛 Řešení problémů

### Stránka vrací 404 při refresh
- ✅ Již vyřešeno pomocí `404.html` workaround

### Obrázky se nenačítají
- Zkontrolujte, zda jsou všechny obrázky v `/public/images/`
- Zkontrolujte správnost názvů souborů (case-sensitive!)

### CSS se nenačítá správně
- Zkontrolujte `base` URL v `vite.config.ts`
- Pro subdomain použijte `base: '/repo-name/'`
- Pro custom domain použijte `base: '/'`

## 📚 Další zdroje

- [GitHub Pages dokumentace](https://docs.github.com/en/pages)
- [gh-pages package](https://www.npmjs.com/package/gh-pages)
- [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
