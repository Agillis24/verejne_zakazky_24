# 🔄 Změny v kódu - Migrace na GitHub Pages

## 📝 Přehled změn

Tento dokument obsahuje přehled všech změn provedených v kódu pro přípravu na deployment na GitHub Pages.

## 🔧 Upravené soubory

### 1. `/src/app/components/Navigation.tsx`

**Změna:** Odstranění Figma asset importu

**Před:**
```typescript
import logo from 'figma:asset/1a47bfa42d4c3ced140fb73d9ef58177057e7a6e.png';

// ...
<img 
  src={logo} 
  alt="Veřejné zakázky 24" 
  className="h-12 sm:h-14 w-auto"
/>
```

**Po:**
```typescript
// Import odstraněn

// ...
<img 
  src="/images/logo.png" 
  alt="Veřejné zakázky 24" 
  className="h-12 sm:h-14 w-auto"
/>
```

---

### 2. `/src/app/pages/Home.tsx`

**Změna:** Odstranění všech Figma asset importů

**Před:**
```typescript
import heroImage from 'figma:asset/4cae5d038f803c8bb9f59da7c7a1bbc48b351d6e.png';
import janMusilPhoto from 'figma:asset/67d637409287d81fcfcbeb544cd7ba02f57e6e1b.png';
import dominikZlebekPhoto from 'figma:asset/34089e6915eb68d1204fe7b0420247bc703ec303.png';
import whyFollowImage from 'figma:asset/47fded0345e12ab517ab33a41ff7968220c041df.png';
import tenderixImage from 'figma:asset/2b3c06214818b6367e87814bbfb1666274d8b221.png';

// V komponentě:
<img src={heroImage} alt="..." />
<img src={janMusilPhoto} alt="..." />
<img src={dominikZlebekPhoto} alt="..." />
<img src={whyFollowImage} alt="..." />
<img src={tenderixImage} alt="..." />
```

**Po:**
```typescript
// Všechny importy odstraněny

// V komponentě:
<img src="/images/hero.png" alt="..." />
<img src="/images/jan-musil.jpg" alt="..." />
<img src="/images/dominik-zlebek.jpg" alt="..." />
<img src="/images/why-follow.png" alt="..." />
<img src="/images/tenderix.png" alt="..." />
```

---

### 3. `/vite.config.ts`

**Změna:** Přidání base path pro GitHub Pages

**Před:**
```typescript
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // ...
})
```

**Po:**
```typescript
export default defineConfig({
  // Base path for GitHub Pages (change 'repo-name' to your repository name)
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  // ...
})
```

**Poznámka:** 
- Pro vlastní doménu: `base: '/'`
- Pro GitHub subdomain: `base: '/repo-name/'`

---

### 4. `/package.json`

**Změna:** Přidání deployment scriptů a gh-pages package

**Před:**
```json
{
  "scripts": {
    "build": "vite build"
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.1.12",
    "@vitejs/plugin-react": "4.7.0",
    "tailwindcss": "4.1.12",
    "vite": "6.3.5"
  }
}
```

**Po:**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.1.12",
    "@vitejs/plugin-react": "4.7.0",
    "gh-pages": "^6.2.0",
    "tailwindcss": "4.1.12",
    "vite": "6.3.5"
  }
}
```

---

## 📄 Nové soubory

### 1. `/index.html`
- Přidán redirect script pro SPA routing

### 2. `/public/404.html`
- Workaround pro client-side routing na GitHub Pages
- Automaticky redirectuje na hlavní `index.html`

### 3. `/public/CNAME`
- Obsahuje custom doménu: `zakazkovy-pruvodce.cz`
- Smazat pro GitHub subdomain deployment

### 4. `/.github/workflows/deploy.yml`
- GitHub Actions workflow pro automatický deployment
- Spouští se při push na `main` branch

### 5. `/.gitignore`
- Standardní .gitignore pro Node.js projekty

### 6. Dokumentační soubory
- `/README.md` - Hlavní dokumentace projektu
- `/DEPLOYMENT.md` - Detailní návod na deployment
- `/DEPLOY_CHECKLIST.md` - Checklist před deploymentem
- `/IMAGE_SETUP.md` - Návod na přípravu obrázků
- `/GITHUB_PAGES_READY.md` - Souhrn připravenosti
- `/CODE_CHANGES.md` - Tento soubor

### 7. Pomocné scripty
- `/scripts/verify-deployment.sh` - Bash script pro ověření
- `/setup.bat` - Windows batch script pro quick setup

---

## 🎨 Mapování obrázků

| Původní Figma Asset | Nová cesta | Použití |
|---------------------|-----------|---------|
| `1a47bfa42d4c3ced140fb73d9ef58177057e7a6e.png` | `/images/logo.png` | Logo v navigaci |
| `4cae5d038f803c8bb9f59da7c7a1bbc48b351d6e.png` | `/images/hero.png` | Hero sekce |
| `67d637409287d81fcfcbeb544cd7ba02f57e6e1b.png` | `/images/jan-musil.jpg` | Foto Jana Musila |
| `34089e6915eb68d1204fe7b0420247bc703ec303.png` | `/images/dominik-zlebek.jpg` | Foto Dominika Žlebka |
| `47fded0345e12ab517ab33a41ff7968220c041df.png` | `/images/why-follow.png` | Sekce "Proč sledovat" |
| `2b3c06214818b6367e87814bbfb1666274d8b221.png` | `/images/tenderix.png` | Partner TENDERIX |

---

## ⚠️ Důležité poznámky

### 1. Cesty k obrázkům
- **Před:** Používaly Figma-specifické `figma:asset` scheme
- **Po:** Standardní absolutní cesty z `/public` složky (`/images/xxx.png`)

### 2. Build proces
- Vite automaticky:
  - Kopíruje `/public` složku do `dist/`
  - Optimalizuje obrázky
  - Minifikuje kód

### 3. Routing
- React Router funguje normálně v dev módu
- Na GitHub Pages používá `404.html` workaround
- Podporuje direct URL access (např. `/aktuality`)

### 4. SEO
- Všechny SEO komponenty zůstaly beze změny
- Sitemap a robots.txt jsou v `/public`

---

## 🔄 Jak vrátit změny (rollback)

Pokud byste chtěli vrátit k Figma asset systému:

1. V `/src/app/components/Navigation.tsx`:
```typescript
import logo from 'figma:asset/1a47bfa42d4c3ced140fb73d9ef58177057e7a6e.png';
<img src={logo} ... />
```

2. V `/src/app/pages/Home.tsx`:
```typescript
import heroImage from 'figma:asset/4cae5d038f803c8bb9f59da7c7a1bbc48b351d6e.png';
// ... atd pro ostatní obrázky
<img src={heroImage} ... />
```

3. Odstranit deployment soubory:
- Smazat `/.github/workflows/deploy.yml`
- Smazat `/public/404.html`
- Smazat `/public/CNAME`

---

## ✅ Testování změn

Po provedení změn otestujte:

```bash
# 1. Dev server
npm run dev
# Zkontrolujte že všechny obrázky se načítají

# 2. Production build
npm run build
npm run preview
# Zkontrolujte že build funguje správně

# 3. Routing
# V preview módu zkuste:
# - /aktuality
# - /aktuality/prvni-clanek
# - /video/1
# Vše by mělo fungovat
```

---

## 📞 Podpora

Pokud narazíte na problémy:
1. Zkontrolujte console v DevTools
2. Přečtěte si DEPLOYMENT.md
3. Kontaktujte: verejnezakazky24@gmail.com
