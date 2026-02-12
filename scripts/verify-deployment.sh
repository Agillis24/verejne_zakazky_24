#!/bin/bash

# Pre-deployment Verification Script
# Ověřuje, že projekt je připraven k deployu

echo "🔍 Kontrola před deploymentem na GitHub Pages..."
echo ""

# Check Node.js version
echo "📦 Node.js verze:"
node --version
echo ""

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ Chyba: package.json nebyl nalezen!"
    exit 1
fi
echo "✅ package.json nalezen"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "⚠️  node_modules neexistuje. Spouštím npm install..."
    npm install
else
    echo "✅ node_modules existuje"
fi

# Check for required images
echo ""
echo "🖼️  Kontrola obrázků v /public/images/:"
IMAGES_DIR="public/images"
REQUIRED_IMAGES=("logo.png" "hero.png" "jan-musil.jpg" "dominik-zlebek.jpg" "why-follow.png" "tenderix.png")

MISSING_IMAGES=()

for img in "${REQUIRED_IMAGES[@]}"; do
    if [ -f "$IMAGES_DIR/$img" ]; then
        echo "  ✅ $img"
    else
        echo "  ❌ $img - CHYBÍ!"
        MISSING_IMAGES+=("$img")
    fi
done

if [ ${#MISSING_IMAGES[@]} -ne 0 ]; then
    echo ""
    echo "⚠️  VAROVÁNÍ: Chybějící obrázky!"
    echo "Přečtěte si IMAGE_SETUP.md pro instrukce."
    echo ""
fi

# Check for important files
echo ""
echo "📄 Kontrola důležitých souborů:"
FILES=("vite.config.ts" "index.html" "public/404.html" "public/CNAME" "public/robots.txt" "public/sitemap.xml")

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✅ $file"
    else
        echo "  ⚠️  $file - není nalezen (může být v pořádku)"
    fi
done

# Check gh-pages installation
echo ""
echo "📦 Kontrola gh-pages package:"
if npm list gh-pages > /dev/null 2>&1; then
    echo "  ✅ gh-pages je nainstalován"
else
    echo "  ❌ gh-pages NENÍ nainstalován!"
    echo "  Spusťte: npm install --save-dev gh-pages"
fi

# Try to build
echo ""
echo "🏗️  Zkouším build..."
if npm run build; then
    echo "  ✅ Build úspěšný!"
    echo ""
    echo "📊 Velikost dist složky:"
    du -sh dist
else
    echo "  ❌ Build selhal!"
    exit 1
fi

# Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 Shrnutí:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ ${#MISSING_IMAGES[@]} -eq 0 ]; then
    echo "✅ Všechny obrázky jsou na místě"
else
    echo "⚠️  Chybí ${#MISSING_IMAGES[@]} obrázků"
fi

echo ""
echo "🚀 Další kroky:"
echo "1. Přidejte chybějící obrázky (pokud jsou)"
echo "2. Vytvořte GitHub repository"
echo "3. Spusťte: git init && git add . && git commit -m 'Initial commit'"
echo "4. Přidejte remote: git remote add origin YOUR_REPO_URL"
echo "5. Push: git push -u origin main"
echo "6. Deploy: npm run deploy"
echo ""
echo "📚 Více informací: DEPLOYMENT.md a DEPLOY_CHECKLIST.md"
