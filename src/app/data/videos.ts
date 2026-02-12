export interface Video {
  id: string;
  title: string;
  description: string;
  isPremium: boolean;
  duration: string;
  thumbnail: string;
  category: string;
}

export const videos: Video[] = [
  {
    id: "1",
    title: "Základy zadávacího řízení podle ZZVZ",
    description: "Komplexní úvod do zadávacího řízení dle nového zákona o zadávání veřejných zakázek.",
    isPremium: false,
    duration: "18:34",
    thumbnail: "legal documents",
    category: "Základy"
  },
  {
    id: "2",
    title: "Podlimitní a nadlimitní zakázky - praktické rozdíly",
    description: "Detailní rozbor postupů a rozdílů mezi podlimitními a nadlimitními zakázkami s praktickými příklady.",
    isPremium: true,
    duration: "32:15",
    thumbnail: "business meeting",
    category: "Postupy"
  },
  {
    id: "3",
    title: "Jak správně formulovat zadávací podmínky",
    description: "Praktický návod k přípravě zadávací dokumentace s ukázkami častých chyb.",
    isPremium: false,
    duration: "24:50",
    thumbnail: "office documents",
    category: "Dokumentace"
  },
  {
    id: "4",
    title: "Rozhodovací praxe ÚOHS 2025 - klíčové případy",
    description: "Analýza nejdůležitějších rozhodnutí Úřadu pro ochranu hospodářské soutěže za uplynulé období.",
    isPremium: true,
    duration: "45:20",
    thumbnail: "courthouse architecture",
    category: "Judikatura"
  },
  {
    id: "5",
    title: "Hodnocení nabídek - metody a kritéria",
    description: "Přehled hodnotících metod a správné nastavení hodnotících kritérií.",
    isPremium: true,
    duration: "28:40",
    thumbnail: "data analysis",
    category: "Hodnocení"
  },
  {
    id: "6",
    title: "Změny smluv po uzavření - co je přípustné?",
    description: "Právní rámec pro změny veřejných zakázek po jejich zadání.",
    isPremium: false,
    duration: "21:15",
    thumbnail: "contract signing",
    category: "Smlouvy"
  }
];
