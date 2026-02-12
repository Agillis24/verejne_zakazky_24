# 📌 Tahák - Užitečné příkazy

Rychlá reference pro nejčastější příkazy.

## 🚀 Základní příkazy

```bash
# Spustit lokální dev server
npm run dev

# Vytvořit production build
npm run build

# Náhled production buildu
npm run preview

# Deploy na GitHub Pages
npm run deploy
```

## 📦 Instalace & Setup

```bash
# První instalace
npm install

# Instalace gh-pages (pokud chybí)
npm install --save-dev gh-pages

# Reinstalace všeho (pokud je problém)
rm -rf node_modules package-lock.json
npm install
```

## 📂 Git příkazy

```bash
# Inicializace nového repository
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main

# Běžné změny
git status                      # Zobrazit stav
git add .                       # Přidat všechny změny
git commit -m "Popis změny"     # Commit
git push                        # Push na GitHub

# Kontrola remote URL
git remote -v

# Změna remote URL
git remote set-url origin https://github.com/USERNAME/NEW-REPO.git
```

## 🖼️ Kontrola obrázků

```bash
# Linux/Mac:
ls -lh public/images/

# Windows:
dir public\images
```

## 🔍 Debugging

```bash
# Zkontrolovat Node.js verzi (musí být 18+)
node --version

# Zkontrolovat npm verzi
npm --version

# Zobrazit nainstalované packages
npm list --depth=0

# Zkontrolovat gh-pages
npm list gh-pages

# Vyčistit npm cache
npm cache clean --force
```

## 📊 Build info

```bash
# Velikost buildu
du -sh dist/                    # Linux/Mac
# nebo
dir dist                        # Windows

# Obsah dist složky
ls -la dist/                    # Linux/Mac
tree dist/                      # Linux/Mac (pokud máte tree)
```

## 🌐 URL pro testování

```bash
# Lokální dev server (po npm run dev)
http://localhost:5173

# Preview production buildu (po npm run build && npm run preview)
http://localhost:4173

# GitHub Pages (po deployu)
https://USERNAME.github.io/REPO/

# S custom doménou
https://zakazkovy-pruvodce.cz
```

## ⚙️ Konfigurace

```bash
# Změnit base URL pro subdomain
# V vite.config.ts změňte:
base: '/REPO-NAME/'

# Změnit base URL pro custom domain
# V vite.config.ts změňte:
base: '/'
```

## 🔧 Rychlé opravy

```bash
# Build selhal → vyčistit a reinstalovat
rm -rf node_modules dist package-lock.json
npm install
npm run build

# Deploy selhal → zkusit znovu
npm run deploy

# Obrázky se nenačítají → zkontrolovat cesty
grep -r "figma:asset" src/        # Shouldn't find anything
grep -r "/images/" src/           # Should find image paths

# Port už používán → změnit port
npm run dev -- --port 3000
```

## 📝 Editace obsahu

```bash
# Otevřít v editoru (VS Code)
code .

# Důležité soubory:
code src/app/pages/Home.tsx              # Homepage
code src/app/pages/Aktuality.tsx         # Blog listing
code src/app/data/articles.ts            # Články
code src/app/data/videos.ts              # Videa
code src/app/components/Navigation.tsx   # Navigace
```

## 🔄 GitHub Pages aktualizace

```bash
# Kompletní workflow pro update:
git add .
git commit -m "Update content"
git push
npm run deploy

# Nebo v jednom příkazu:
git add . && git commit -m "Update" && git push && npm run deploy
```

## 🧪 Testování

```bash
# Test že build projde
npm run build

# Test že všechny linky fungují (lokálně)
npm run dev
# Pak otevřete http://localhost:5173 a proklikejte web
```

## 📋 Checklist před deployem

```bash
# 1. Zkontrolovat obrázky
ls public/images/

# 2. Test build
npm run build

# 3. Preview build
npm run preview

# 4. Commit změny
git add . && git commit -m "Ready for deployment" && git push

# 5. Deploy
npm run deploy
```

## 🆘 Help

```bash
# Zobrazit všechny npm scripty
npm run

# Zobrazit verzi packages
npm list

# Zobrazit nápovědu pro git
git --help

# Zobrazit nápovědu pro npm
npm help
```

## 📞 Kontakty & Odkazy

- **Email:** verejnezakazky24@gmail.com
- **GitHub:** https://github.com/YOUR-USERNAME/YOUR-REPO
- **Live web:** https://zakazkovy-pruvodce.cz

## 📚 Dokumentace

- [QUICK_START.md](./QUICK_START.md) - Rychlý start
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailní deployment
- [README.md](./README.md) - Hlavní dokumentace
- [CODE_CHANGES.md](./CODE_CHANGES.md) - Změny v kódu

---

💡 **Tip:** Uložte si tento soubor do záložek pro rychlý přístup!
