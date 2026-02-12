# Instrukce pro přípravu obrázků

## 📸 Potřebné obrázky

Projekt vyžaduje následující obrázky v `/public/images/`:

### 1. logo.png
- **Rozměry**: doporučeno 200x200px nebo větší (zachovat aspect ratio)
- **Formát**: PNG s průhledným pozadím
- **Popis**: Logo webu "Veřejné zakázky 24"
- **Použití**: Navigační lišta (zobrazuje se v 48-56px výšce)

### 2. hero.png
- **Rozměry**: minimálně 1200x900px (poměr 4:3)
- **Formát**: PNG nebo JPG
- **Popis**: Hlavní hero obrázek na homepage
- **Použití**: První sekce na homepage

### 3. jan-musil.jpg
- **Rozměry**: minimálně 400x400px (čtvercový)
- **Formát**: JPG nebo PNG
- **Popis**: Profesionální fotka Jana Musila
- **Použití**: Sekce "O nás" - zobrazuje se jako kruhová fotka

### 4. dominik-zlebek.jpg
- **Rozměry**: minimálně 400x400px (čtvercový)
- **Formát**: JPG nebo PNG
- **Popis**: Profesionální fotka Dominika Žlebka
- **Použití**: Sekce "O nás" - zobrazuje se jako kruhová fotka

### 5. why-follow.png
- **Rozměry**: minimálně 1200x900px (poměr 4:3)
- **Formát**: PNG nebo JPG
- **Popis**: Obrázek profesionálního prostředí/kanceláře
- **Použití**: Sekce "Proč sledovat VZ24"

### 6. tenderix.png
- **Rozměry**: minimálně 800x1000px (vertikální)
- **Formát**: PNG nebo JPG
- **Popis**: Obrázek robota s oranžovou knihou (partner TENDERIX)
- **Použití**: Sekce "Náš partner"

## 📥 Jak získat obrázky

### Z Figma Make:
1. V Figma Make otevřete projekt
2. Najděte import assets (pravděpodobně v `/src/imports/` nebo podobně)
3. Exportujte jednotlivé obrázky:
   - `1a47bfa42d4c3ced140fb73d9ef58177057e7a6e.png` → `logo.png`
   - `4cae5d038f803c8bb9f59da7c7a1bbc48b351d6e.png` → `hero.png`
   - `67d637409287d81fcfcbeb544cd7ba02f57e6e1b.png` → `jan-musil.jpg`
   - `34089e6915eb68d1204fe7b0420247bc703ec303.png` → `dominik-zlebek.jpg`
   - `47fded0345e12ab517ab33a41ff7968220c041df.png` → `why-follow.png`
   - `2b3c06214818b6367e87814bbfb1666274d8b221.png` → `tenderix.png`

### Alternativně - použijte placeholder:
Pro testování můžete použít placeholder obrázky:
- https://placehold.co/200x200/1e293b/f97316?text=VZ24 (logo)
- https://placehold.co/1200x900/1e293b/ffffff?text=Hero (hero)
- https://placehold.co/400x400/94a3b8/1e293b?text=JM (jan-musil)
- https://placehold.co/400x400/94a3b8/1e293b?text=DZ (dominik-zlebek)
- https://placehold.co/1200x900/cbd5e1/1e293b?text=Why+Follow (why-follow)
- https://placehold.co/800x1000/f97316/ffffff?text=TENDERIX (tenderix)

## 📁 Umístění

Všechny obrázky musí být v:
```
/public/images/
├── logo.png
├── hero.png
├── jan-musil.jpg
├── dominik-zlebek.jpg
├── why-follow.png
└── tenderix.png
```

## ✅ Kontrola

Po přidání obrázků spusťte dev server a zkontrolujte:

```bash
npm run dev
```

Všechny obrázky by se měly správně načíst na těchto místech:
- Logo v navigaci (nahoře vlevo)
- Hero obrázek na homepage (první sekce vpravo)
- Fotky v sekci "O nás"
- Obrázek v "Proč sledovat VZ24"
- Obrázek v sekci partnera TENDERIX

## ⚠️ Důležité

- **Formát**: Preferujte PNG pro obrázky s transparentním pozadím (logo)
- **Velikost**: Optimalizujte obrázky před nahráním (max 500KB každý)
- **Názvy**: Používejte přesné názvy souborů (case-sensitive!)
- **Umístění**: Musí být v `/public/images/` ne jinde!
