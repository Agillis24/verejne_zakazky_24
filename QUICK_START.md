# ⚡ Quick Start - Deploy za 5 minut

Jednoduchý návod jak nasadit web na GitHub Pages během 5 minut.

## 📋 Před začátkem

- ✅ Node.js nainstalován (https://nodejs.org/)
- ✅ Git nainstalován (https://git-scm.com/)
- ✅ GitHub účet (https://github.com/)
- ✅ Obrázky připravené (viz IMAGE_SETUP.md)

## 🚀 5 kroků k deployu

### Krok 1: Přidejte obrázky (2 min)

```bash
# Zkopírujte své obrázky do složky:
public/images/
├── logo.png
├── hero.png
├── jan-musil.jpg
├── dominik-zlebek.jpg
├── why-follow.png
└── tenderix.png
```

💡 **Tip:** Pokud obrázky ještě nemáte, použijte placeholders z IMAGE_SETUP.md

---

### Krok 2: Instalace (1 min)

```bash
# V terminálu (příkazové řádce) spusťte:
npm install
```

---

### Krok 3: GitHub Repository (1 min)

1. Jděte na https://github.com/new
2. Vytvořte nový repository (např. `verejne-zakazky-24`)
3. **NEŠKRTEJTE** "Add README" (nechte prázdné)
4. Klikněte "Create repository"
5. Zkopírujte URL (např. `https://github.com/username/verejne-zakazky-24.git`)

---

### Krok 4: Git inicializace (1 min)

```bash
# Inicializace Git
git init

# Přidání všech souborů
git add .

# První commit
git commit -m "Initial commit - Veřejné zakázky 24"

# Přidání remote (nahraďte YOUR-USERNAME a YOUR-REPO)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push na GitHub
git push -u origin main
```

---

### Krok 5: Deploy! (30 sec)

```bash
npm run deploy
```

Hotovo! 🎉

---

## 🌐 Aktivace GitHub Pages

Po deployu:

1. Jděte do GitHub repository → **Settings** → **Pages**
2. V "Source" by mělo být automaticky nastaveno `gh-pages` branch
3. Pokud ne, vyberte ho ručně a klikněte **Save**
4. Za ~2 minuty bude web živý na:
   - `https://YOUR-USERNAME.github.io/YOUR-REPO/`

---

## 🎯 Nastavení vlastní domény (volitelné)

### Pro zakazkovy-pruvodce.cz:

1. **V GitHub Pages nastavení:**
   - Zadejte custom domain: `zakazkovy-pruvodce.cz`
   - Klikněte Save

2. **U vašeho DNS providera přidejte:**

   **A záznamy:**
   ```
   @ → 185.199.108.153
   @ → 185.199.109.153
   @ → 185.199.110.153
   @ → 185.199.111.153
   ```

   **NEBO CNAME záznam:**
   ```
   @ → YOUR-USERNAME.github.io
   ```

3. **Počkejte 10-30 minut** na propagaci DNS

---

## 🔄 Aktualizace webu

Při každé změně kódu:

```bash
# 1. Uložte změny
git add .
git commit -m "Popis změny"
git push

# 2. Deploy
npm run deploy
```

Za ~2 minuty jsou změny živé!

---

## ✅ Ověření že vše funguje

Otevřete deployed web a zkontrolujte:

- [ ] Homepage se načte
- [ ] Logo je vidět v navigaci
- [ ] Všechny obrázky se načítají
- [ ] Navigace funguje (Domů, Aktuality, atd.)
- [ ] Kliknutím na článek se otevře detail
- [ ] URL /aktuality funguje i po refreshi
- [ ] Mobilní verze vypadá dobře

---

## 🐛 Problémy?

### Obrázky se nenačítají
```bash
# Zkontrolujte že jsou v správné složce:
ls public/images/
```

### npm run deploy selhal
```bash
# Zkuste znovu nainstalovat gh-pages:
npm install --save-dev gh-pages
npm run deploy
```

### Routing nefunguje (404 při refresh)
- Počkejte 5-10 minut po deployu
- Zkontrolujte že existuje `public/404.html`

### Build selhal
```bash
# Zkontrolujte že máte Node.js v18+:
node --version

# Smažte node_modules a zkuste znovu:
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📚 Další informace

- **Kompletní návod:** [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Checklist:** [DEPLOY_CHECKLIST.md](./DEPLOY_CHECKLIST.md)
- **Změny v kódu:** [CODE_CHANGES.md](./CODE_CHANGES.md)
- **README:** [README.md](./README.md)

---

## 💡 Užitečné příkazy

```bash
# Spustit lokálně (dev server)
npm run dev

# Vytvořit production build
npm run build

# Náhled production buildu
npm run preview

# Deploy na GitHub Pages
npm run deploy

# Zobrazit Git status
git status

# Zobrazit Git log
git log --oneline
```

---

## 🎊 Gratulujeme!

Váš web je nyní živý na internetu! 🚀

**Sdílejte ho:**
- LinkedIn
- Twitter
- Email klientům

**Další kroky:**
- Nastavte Google Analytics
- Přidejte do Google Search Console
- Propagujte na sociálních sítích
- Sbírejte feedback od uživatelů

---

**Hodně štěstí! 💪**

Kontakt: verejnezakazky24@gmail.com
