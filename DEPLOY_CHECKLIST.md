# Checklist před deploymentem na GitHub Pages

## ✅ Povinné kroky

### 1. Obrázky
- [ ] Stáhnout všechny obrázky z Figma Make
- [ ] Vytvořit složku `/public/images/` (pokud neexistuje)
- [ ] Přidat následující obrázky:
  - [ ] `logo.png` - Logo webu (použito v navigaci)
  - [ ] `hero.png` - Hero obrázek na homepage
  - [ ] `jan-musil.jpg` - Fotka Jana Musila
  - [ ] `dominik-zlebek.jpg` - Fotka Dominika Žlebka
  - [ ] `why-follow.png` - Obrázek v sekci "Proč sledovat VZ24"
  - [ ] `tenderix.png` - Obrázek partnera TENDERIX

### 2. Instalace závislostí
- [ ] Nainstalovat `gh-pages`: `npm install --save-dev gh-pages`
- [ ] Ověřit že všechny dependencies jsou nainstalovány: `npm install`

### 3. Git repository
- [ ] Vytvořit nový GitHub repository
- [ ] Inicializovat git: `git init`
- [ ] Přidat soubory: `git add .`
- [ ] První commit: `git commit -m "Initial commit - Veřejné zakázky 24"`
- [ ] Přidat remote: `git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git`
- [ ] Push: `git push -u origin main`

### 4. Konfigurace pro GitHub Pages

#### Pro subdomain (username.github.io/repo-name):
- [ ] V `vite.config.ts` změnit `base: '/'` na `base: '/YOUR-REPO-NAME/'`
- [ ] Smazat soubor `/public/CNAME`

#### Pro vlastní doménu (zakazkovy-pruvodce.cz):
- [ ] Ponechat `base: '/'` v `vite.config.ts`
- [ ] Ponechat soubor `/public/CNAME` s obsahem: `zakazkovy-pruvodce.cz`
- [ ] Nastavit DNS záznamy (viz DEPLOYMENT.md)

### 5. Deployment
- [ ] Spustit: `npm run deploy`
- [ ] Počkat na dokončení uploadu
- [ ] V GitHub repository jít do Settings → Pages
- [ ] Ověřit že Source je nastaven na `gh-pages` branch
- [ ] Počkat 1-5 minut na aktivaci

### 6. Testování
- [ ] Otevřít deployed URL
- [ ] Ověřit že se načítá homepage
- [ ] Otevřít Aktuality stránku
- [ ] Otevřít detail článku
- [ ] Ověřit responsive design na mobilu
- [ ] Zkontrolovat že všechny obrázky se načítají
- [ ] Otestovat všechny odkazy v navigaci
- [ ] Otestovat externí odkazy (Herohero, TENDERIX, LinkedIn)

## ⚠️ Možné problémy

### Obrázky se nenačítají
**Řešení:**
- Zkontrolovat že jsou obrázky v `/public/images/`
- Zkontrolovat správnost názvů (case-sensitive)
- Zkontrolovat console v DevTools pro chyby 404

### Routing nefunguje (404 při refresh)
**Řešení:**
- Ověřit že existuje `/public/404.html`
- Ověřit že `index.html` má redirect script
- Počkat 5-10 minut po deployu

### CSS se nenačítá
**Řešení:**
- Zkontrolovat `base` v `vite.config.ts`
- Pro subdomain: `base: '/repo-name/'`
- Pro custom domain: `base: '/'`
- Vyprázdnit cache v prohlížeči (Ctrl+Shift+R)

## 📝 Po úspěšném deployu

- [ ] Aktualizovat Google Search Console s novou doménou
- [ ] Nahrát novou sitemap do Google Search Console
- [ ] Aktualizovat Open Graph meta tagy s finální URL
- [ ] Sdílet web na sociálních sítích
- [ ] Nastavit Google Analytics (volitelné)

## 🔗 Užitečné odkazy

- [GitHub Pages dokumentace](https://docs.github.com/en/pages)
- [Detailní návod: DEPLOYMENT.md](./DEPLOYMENT.md)
- [README.md](./README.md)
