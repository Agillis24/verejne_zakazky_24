# Veřejné zakázky 24

Moderní vzdělávací platforma zaměřená na české veřejné zakázky. Praktické výklady, videopřednášky a odborné články o zákoně č. 134/2016 Sb., o zadávání veřejných zakázek.

## 🚀 Rychlý start

```bash
# Instalace závislostí
npm install

# Spuštění dev serveru
npm run dev

# Build pro production
npm run build

# Náhled production buildu
npm run preview
```

## 📦 Technologie

- **React 18** - UI knihovna
- **TypeScript** - Type safety
- **Vite** - Build tool a dev server
- **Tailwind CSS v4** - Styling
- **React Router 7** - Client-side routing
- **React Helmet Async** - SEO management
- **Lucide React** - Ikony

## 📁 Struktura projektu

```
/
├── public/
│   ├── images/          # Obrázky (logo, fotky, atd.)
│   ├── robots.txt       # SEO - robots
│   ├── sitemap.xml      # SEO - sitemap
│   ├── CNAME           # GitHub Pages custom domain
│   └── 404.html        # GitHub Pages SPA workaround
├── src/
│   ├── app/
│   │   ├── components/  # React komponenty
│   │   ├── data/        # Data pro videa a články
│   │   ├── pages/       # Stránky (Home, Aktuality, atd.)
│   │   ├── routes.tsx   # React Router konfigurace
│   │   └── App.tsx      # Hlavní App komponenta
│   └── styles/          # CSS styly
├── vite.config.ts       # Vite konfigurace
├── package.json         # NPM závislosti a scripty
└── DEPLOYMENT.md        # Návod na deployment
```

## 🎨 Design

- **Hlavní barva**: Deep Navy Blue (`slate-900`)
- **Akcentní barva**: Oranžová (`orange-600`)
- **Typografie**: System fonts s Tailwind presets

## 📄 Stránky

1. **Domů** (`/`) - Hero sekce, O projektu, Videa, O nás, Kontakt, Partner
2. **Aktuality** (`/aktuality`) - Blog s články kategorizovanými
3. **Detail článku** (`/aktuality/:slug`) - Zobrazení konkrétního článku
4. **Video detail** (`/video/:id`) - Zobrazení konkrétního videa

## 🔧 Konfigurace

### SEO

Projekt obsahuje kompletní SEO optimalizaci:
- Meta tagy (title, description, keywords)
- Open Graph tagy
- Structured data (Organization, Breadcrumb)
- Sitemap.xml
- Robots.txt

### React Router

Projekt používá React Router 7 v Data API módu s `createBrowserRouter`. Konfigurace je v `/src/app/routes.tsx`.

## 🌐 Deployment na GitHub Pages

Detailní návod je v souboru [`DEPLOYMENT.md`](./DEPLOYMENT.md).

### Rychlé kroky:

1. **Přidejte obrázky** do `/public/images/`:
   - `logo.png`
   - `hero.png`
   - `jan-musil.jpg`
   - `dominik-zlebek.jpg`
   - `why-follow.png`
   - `tenderix.png`

2. **Nainstalujte gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Nastavte GitHub Pages** v repository Settings → Pages

## 📝 Přidání obsahu

### Nové video

Editujte `/src/app/data/videos.ts`:

```typescript
{
  id: 'new-video',
  title: 'Název videa',
  description: 'Popis videa',
  thumbnail: 'https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg',
  youtubeId: 'VIDEO_ID',
  duration: '15:30',
  category: 'free', // nebo 'premium'
  publishedAt: '2026-02-11'
}
```

### Nový článek

Editujte `/src/app/data/articles.ts`:

```typescript
{
  id: 'new-article',
  title: 'Název článku',
  slug: 'nazev-clanku',
  excerpt: 'Krátký popis',
  content: 'Obsah článku...',
  category: 'ZZVZ', // ZZVZ, KŘ, ÚOHS, Judikatura
  isPremium: false,
  publishedAt: '2026-02-11',
  author: {
    name: 'Jméno Autora',
    avatar: '/images/avatar.jpg'
  }
}
```

## 🔗 Externí odkazy

- **Herohero platforma**: https://herohero.co/verejnezakazky
- **TENDERIX**: https://www.tenderix.cz
- **LinkedIn Jan Musil**: https://www.linkedin.com/in/jan-musil-226284134/
- **LinkedIn Dominik Žlebek**: https://www.linkedin.com/in/dominikzlebek/

## 📧 Kontakt

**Email**: verejnezakazky24@gmail.com

## 📜 Licence

© 2026 Veřejné zakázky 24. Všechna práva vyhrazena.
