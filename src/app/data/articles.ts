export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  videoEmbed?: string;
}

export const articles: Article[] = [
  {
    id: "novelizace-zzvz-2026",
    title: "Novela ZZVZ 2026 - co se mění a jak se připravit",
    excerpt: "Přehled klíčových změn v zákoně o zadávání veřejných zakázek platných od 1. března 2026 a doporučení pro zadavatele.",
    date: "2026-02-08",
    category: "Legislativa",
    image: "https://images.unsplash.com/photo-1633158108216-f10cd3202d8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    content: `
      <p>Dne 1. března 2026 vstupuje v platnost novela zákona č. 134/2016 Sb., o zadávání veřejných zakázek (ZZVZ), která přináší několik podstatných změn pro zadavatele i dodavatele.</p>
      
      <h2>Hlavní změny</h2>
      
      <h3>1. Zvýšení finančních limitů</h3>
      <p>Finanční limity pro podlimitní zakázky se zvyšují o 15 %, což umožní zadavatelům využít jednodušší postupy pro širší škálu zakázek. Nové limity jsou:</p>
      <ul>
        <li>Stavební práce: 6,9 mil. Kč</li>
        <li>Dodávky a služby: 2,3 mil. Kč</li>
      </ul>
      
      <h3>2. Elektronizace zadávacího řízení</h3>
      <p>Od 1. července 2026 bude povinné veškerou komunikaci se zadavatelem vést výhradně elektronicky prostřednictvím Národního elektronického nástroje (NEN). Papírová forma bude akceptována pouze ve výjimečných případech schválených ÚOHS.</p>
      
      <h3>3. Nové možnosti jednacího řízení</h3>
      <p>Novela rozšiřuje případy, kdy lze použít jednací řízení bez uveřejnění, zejména v oblasti inovací a výzkumu.</p>
      
      <blockquote>
        <p>"Cílem těchto změn je zjednodušit zadávací proces a zároveň posílit transparentnost a konkurenci." - důvodová zpráva k novele</p>
      </blockquote>
      
      <h2>Jak se připravit</h2>
      
      <ol>
        <li><strong>Revize interních postupů</strong> - Aktualizujte vnitřní předpisy a směrnice v souladu s novou legislativou.</li>
        <li><strong>Školení zaměstnanců</strong> - Zajistěte, aby odpovědní pracovníci byli seznámeni se změnami.</li>
        <li><strong>Technické vybavení</strong> - Ověřte, že máte potřebné nástroje pro elektronickou komunikaci.</li>
        <li><strong>Právní audit</strong> - Nechte si zkontrolovat probíhající zakázky z hlediska dopadu nové úpravy.</li>
      </ol>
      
      <p>Detailní rozbor všech změn včetně praktických doporučení najdete v prémiové sekci na Herohero.</p>
    `
  },
  {
    id: "uohs-rozhodnuti-elektronicke-aukce",
    title: "Průlomové rozhodnutí ÚOHS k elektronickým aukcím",
    excerpt: "ÚOHS ve svém rozhodnutí ze dne 5. 2. 2026 vymezil, kdy je použití elektronické aukce v rozporu s principy zadávání.",
    date: "2026-02-06",
    category: "Judikatura",
    image: "https://images.unsplash.com/photo-1769029265788-d7921a103403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    content: `
      <p>Úřad pro ochranu hospodářské soutěže vydal dne 5. února 2026 rozhodnutí sp. zn. S0234/2025/VZ, které přináší důležité vodítko pro použití elektronických aukcí.</p>
      
      <h2>Skutkový stav</h2>
      <p>Krajský úřad vyhlásil nadlimitní veřejnou zakázku na dodávku zdravotnického materiálu. V zadávací dokumentaci stanovil jako jediné hodnotící kritérium nejnižší nabídkovou cenu s tím, že finální cena bude stanovena prostřednictvím elektronické aukce.</p>
      
      <p>Účastníci aukce však nebyli dostatečně informováni o:</p>
      <ul>
        <li>Přesném průběhu aukce</li>
        <li>Minimálním rozdílu mezi nabídkami</li>
        <li>Způsobu ukončení aukce</li>
      </ul>
      
      <h2>Rozhodnutí ÚOHS</h2>
      <p>ÚOHS konstatoval, že zadavatel porušil § 97 odst. 3 ZZVZ, neboť:</p>
      
      <blockquote>
        <p>"Zadavatel musí v zadávací dokumentaci specifikovat všechny aspekty elektronické aukce způsobem, který umožňuje dodavatelům podat smysluplnou nabídku a následně se účinně účastnit aukce."</p>
      </blockquote>
      
      <p>Zadávací řízení bylo zrušeno a zadavateli byla uložena pokuta 150.000 Kč.</p>
      
      <h2>Doporučení pro praxi</h2>
      <ol>
        <li><strong>Detailní popis aukce</strong> - V dokumentaci uveďte přesný mechanismus aukce včetně časových intervalů.</li>
        <li><strong>Minimální rozdíl nabídek</strong> - Stanovte jasná pravidla pro podání nových návrhů.</li>
        <li><strong>Transparentnost</strong> - Zajistěte, aby účastníci viděli aktuální pořadí a mohli na něj reagovat.</li>
      </ol>
      
      <p>Více informací k této problematice a praktické ukázky správného nastavení elektronické aukce najdete v našich prémiových materiálech.</p>
    `
  },
  {
    id: "metodika-hodnoceni-nabidek",
    title: "Nová metodika Ministerstva pro hodnocení nabídek",
    excerpt: "MMR publikovalo metodický pokyn pro hodnocení nabídek s důrazem na využití vícekriteriálního hodnocení.",
    date: "2026-02-02",
    category: "Metodika",
    image: "https://images.unsplash.com/photo-1768875820800-1c2a6f2e8280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    content: `
      <p>Ministerstvo pro místní rozvoj vydalo dne 30. ledna 2026 nový metodický pokyn č. 02/2026, který poskytuje podrobný návod k hodnocení nabídek ve veřejných zakázkách.</p>
      
      <h2>Klíčová doporučení</h2>
      
      <h3>Preferujte vícekriteriální hodnocení</h3>
      <p>Metodika doporučuje, aby zadavatelé upřednostňovali ekonomickou výhodnost (MEAT - Most Economically Advantageous Tender) před pouhým hodnocením nejnižší ceny. Výhodou je možnost zohlednit kvalitu, ekologické aspekty nebo sociální dopady.</p>
      
      <h3>Správné nastavení vah kritérií</h3>
      <p>Při stanovení vah jednotlivých kritérií by měl zadavatel:</p>
      <ul>
        <li>Vycházet z reálných potřeb a cílů zakázky</li>
        <li>Zajistit, aby žádné kritérium nebylo marginalizováno</li>
        <li>Dokumentovat důvody pro zvolenou váhu</li>
      </ul>
      
      <h3>Vzorce pro výpočet</h3>
      <p>Metodika nabízí testované vzorce pro výpočet bodového hodnocení jednotlivých kritérií s ukázkami konkrétních zakázek.</p>
      
      <blockquote>
        <p>"Cílem není komplikovat proces hodnocení, ale poskytnout zadavatelům nástroje pro spravedlivé a objektivní posouzení nabídek." - MMR</p>
      </blockquote>
      
      <h2>Praktický příklad</h2>
      <p>Metodika obsahuje vzorový příklad hodnocení zakázky na dodávku IT služeb s kritérii:</p>
      <ul>
        <li>Cena (40 %)</li>
        <li>Technické parametry (35 %)</li>
        <li>Záruční podmínky (15 %)</li>
        <li>Reference (10 %)</li>
      </ul>
      
      <p>Podrobný rozbor metodiky včetně dalších příkladů si můžete prohlédnout v naší prémiové video sekci.</p>
    `
  },
  {
    id: "video-zpochybneni-smluvnich-podminek",
    title: "Nové video: Zpochybnění smluvních podmínek dodavatelem",
    excerpt: "Publikovali jsme detailní rozbor postupu, jak se bránit proti nevyváženým smluvním podmínkám v zadávací dokumentaci.",
    date: "2026-01-28",
    category: "Nové video",
    image: "https://images.unsplash.com/photo-1673767297196-ce9739933932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    content: `
      <p>V naší video sekci jsme dnes zveřejnili nový obsah zaměřený na problematiku smluvních podmínek ve veřejných zakázkách z pohledu dodavatelů.</p>
      
      <h2>Co se dozvíte</h2>
      
      <p>Video pokrývá:</p>
      <ul>
        <li>Identifikaci nevyvážených smluvních podmínek</li>
        <li>Postup při podání žádosti o vysvětlení</li>
        <li>Možnost námitek proti zadávacím podmínkám</li>
        <li>Praktické rady pro formulaci připomínek</li>
        <li>Judikaturu ÚOHS k této problematice</li>
      </ul>
      
      <h2>Praktické příklady</h2>
      <p>Video obsahuje rozbor tří reálných případů, kde dodavatelé úspěšně zpochybnili:</p>
      <ol>
        <li>Neomezenou smluvní pokutu za prodlení</li>
        <li>Neúměrně krátkou záruční lhůtu</li>
        <li>Nepřiměřené pojištění odpovědnosti</li>
      </ol>
      
      <blockquote>
        <p>"Dodavatelé by měli aktivně využívat své právo na vysvětlení zadávacích podmínek. Zadavatelé jsou povinni na kvalifikované dotazy reagovat." - z videa</p>
      </blockquote>
      
      <p>Video má délku 38 minut a je dostupné v naší prémiové sekci na platformě Herohero. Základní verze (12 minut) je zdarma pro všechny registrované uživatele.</p>
      
      <p><a href="https://herohero.co/verejnezakazky" target="_blank" rel="noopener noreferrer">Přejít k videu →</a></p>
    `,
    videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "komentar-transakce-verejneho-sektoru",
    title: "Komentář: Transakce mezi subjekty veřejného sektoru",
    excerpt: "Analýza aplikace výjimky in-house v praxi českých zadavatelů a časté problémy.",
    date: "2026-01-22",
    category: "Komentář",
    image: "https://images.unsplash.com/photo-1649710025212-5b63cda94759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    content: `
      <p>Výjimka pro zadávání zakázek mezi subjekty veřejného sektoru (tzv. in-house) je jednou z nejčastěji diskutovaných oblastí práva veřejných zakázek. V praxi však dochází k častým pochybením.</p>
      
      <h2>Co je in-house výjimka?</h2>
      <p>Podle § 12 ZZVZ není zadávacím řízením transakce, kde zadavatel vykonává nad dodavatelem kontrolu obdobnou kontrole nad vlastními organizačními složkami a dodavatel vykonává více než 80 % své činnosti pro kontrolující zadavatele.</p>
      
      <h2>Časté problémy v praxi</h2>
      
      <h3>1. Nedostatečná kontrola</h3>
      <p>Často se setkáváme s případy, kdy obec uzavře smlouvu s organizací, nad kterou nemá dostatečnou míru kontroly. Pouhé členství v dozorčí radě nebo právo schvalovat rozpočet zpravidla nestačí.</p>
      
      <h3>2. Překročení 80% prahu</h3>
      <p>Dodavatel musí prokazatelně vykonávat více než 80 % své činnosti (měřeno obratem) pro kontrolující subjekt nebo jiné kontrolované subjekty. Tento požadavek je třeba průběžně sledovat.</p>
      
      <h3>3. Účast soukromého kapitálu</h3>
      <p>Přítomnost jakéhokoli soukromého kapitálu, který není veřejnoprávní povahy, vylučuje použití výjimky.</p>
      
      <blockquote>
        <p>"In-house výjimka není prostředkem k obcházení pravidel transparentnosti, ale legitimní nástroj pro efektivní správu veřejných zdrojů v rámci veřejnoprávních struktur."</p>
      </blockquote>
      
      <h2>Doporučení</h2>
      <ul>
        <li>Pravidelně auditujte splnění podmínek výjimky</li>
        <li>Dokumentujte míru kontroly a 80% práh</li>
        <li>Konzultujte složitější případy s právníky</li>
        <li>Sledujte judikaturu Soudního dvora EU</li>
      </ul>
      
      <p>Detailní právní rozbor s odkazy na relevantní judikaturu naleznete v naší prémiové sekci.</p>
    `
  }
];