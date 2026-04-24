type TrustItem = {
  source: string;
  label: string;
  href?: string;
  iconKey: "service";
  variant: "link" | "service";
};

export const orderingConfig = {
  enabled: false as const,
  provider: "hunger-stillen-banthai",
  externalOrderUrl: "http://www.hunger-stillen.de/cgi-bin/Homepage.fpl?SHOP=Banthai",
  legacyCartBaseUrl: "http://www.hunger-stillen.de/cgi-bin/Homepage.fpl?SHOP=Banthai",
  modes: ["delivery", "pickup"] as const,
};

export function getLegacyCartUrl(legacyId: string) {
  return `${orderingConfig.legacyCartBaseUrl}&Warenkorb=${legacyId}`;
}

export const restaurant = {
  name: "Banthai Heim- & Partyservice",
  brandContext: "banthaisushi.de",
  siteUrl: "http://www.banthaisushi.de",
  sourceSystemUrl: "http://www.hunger-stillen.de/cgi-bin/Homepage.fpl?SHOP=Banthai",
  cuisine: "Sushi · Thailändisch · Vietnamesisch",
  address: {
    street: "Buchhofstr. 2",
    postalCode: "82319",
    city: "Percha-Starnberg",
    country: "DE",
  },
  phones: [{ label: "08151 448567", href: "+498151448567" }],
  ownerHint: "Pham Dinh Dai",
  hours: {
    restaurant:
      "Mo-Fr 11:30-14:00 und 17:30-22:00 · Sa 17:00-22:00 · So 17:30-22:00",
    delivery:
      "Mo-Fr 11:30-14:00 und 17:30-22:00 · Sa 17:00-22:00 · So 17:30-22:00",
    lunch: "Mo-Fr 11:00-14:00",
    closedDay: "Kein Ruhetag in den Quellen ersichtlich",
  },
  rating: {
    display: "90.50 %",
    reviewCount: 2384,
    provider: "Hunger-Stillen / Bringbutler-System",
    reviewCountVerified: true,
  },
  welcomeLine:
    "Herzlich Willkommen in unserem Onlineshop - hier können Sie kinderleicht online bestellen.",
  partyNote: "Heim- & Partyservice sowie Lieferdienst laut Originalauftritt.",
  takeawayNote: "Bei Selbstabholung erhalten Sie 10 % Rabatt.",
  deliveryHomeNote:
    "Vorbestellung ist laut Quelle auch außerhalb der Öffnungszeiten möglich.",
  deliveryAreaNote:
    "Liefergebiet und Mindestbestellwerte sind im Quellsystem ausgewiesen.",
  spiceNote:
    "Mittags-Sushi 11:00-14:00 Uhr: 15 % Rabatt auf ausgewählte Sushi-Bereiche.",
  openingHoursSpecification: {
    restaurant: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "11:30",
        closes: "14:00",
      },
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "17:30",
        closes: "22:00",
      },
      { days: ["Saturday"], opens: "17:00", closes: "22:00" },
      { days: ["Sunday"], opens: "17:30", closes: "22:00" },
    ],
  },
  googleMapsHref: "https://maps.google.com/?q=Buchhofstr.+2,+82319+Percha-Starnberg",
  legalNoticeSource: "http://www.hunger-stillen.de/cgi-bin/Homepage.fpl?SHOP=Banthai",
};

export const primaryNavLinks = [
  { href: "/", label: "Home" },
  { href: "/bestellen", label: "Bestellen" },
  { href: "/bewertungen", label: "Bewertungen" },
  { href: "/liefergebiet", label: "Liefergebiet" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/impressum", label: "Impressum" },
];

export const footerNavGroups = [
  {
    title: "Für Gäste",
    links: [
      { href: "/bestellen", label: "Bestellen" },
      { href: "/bewertungen", label: "Bewertungen" },
      { href: "/liefergebiet", label: "Liefergebiet" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
    ],
  },
];

export const homeTrustItems: TrustItem[] = [
  {
    source: "Bewertung",
    label: "90.50 % · 2384 Bewertungen (Quellsystem)",
    variant: "link",
    href: restaurant.sourceSystemUrl,
    iconKey: "service",
  },
  {
    source: "Selbstabholung",
    label: "10 % Rabatt laut Originalsystem",
    iconKey: "service",
    variant: "service",
  },
  {
    source: "Mittag",
    label: "11:00-14:00 Uhr · 15 % auf ausgewählte Sushi-Bereiche",
    iconKey: "service",
    variant: "service",
  },
];

export const reviewSources = [
  {
    provider: "Hunger-Stillen / Bringbutler-System",
    sourceLabel: "Quellsystem-Bewertung",
    rating: restaurant.rating.display,
    reviewCountLabel: "2384 Bewertungen",
    href: restaurant.sourceSystemUrl,
    actionLabel: "Quelle öffnen",
    note: "Nicht als Google-Bewertung interpretieren.",
  },
];

export const reviewQuotes = [
  {
    quote: "Sehr lecker und sehr schönes Restaurant!",
    author: "Quelleintrag",
    provider: "Hunger-Stillen",
    dateLabel: "19.04.2026",
    href: restaurant.sourceSystemUrl,
  },
  {
    quote: "Seit Jahrzehnten immer perfekt.",
    author: "Quelleintrag",
    provider: "Hunger-Stillen",
    dateLabel: "08.02.2026",
    href: restaurant.sourceSystemUrl,
  },
  {
    quote: "Schmeckt immer gut",
    author: "Quelleintrag",
    provider: "Hunger-Stillen",
    dateLabel: "04.02.2026",
    href: restaurant.sourceSystemUrl,
  },
];

export const offerWorlds = [
  {
    title: "Sushi",
    text: "Sushi, Sashimi, Nigiri, Temaki, Nori-Makis, Inside-Out-Makis, Spezial Sushi Rolls und Sushi-Menüs.",
  },
  {
    title: "Thailändisch",
    text: "Thailändische Gerichte als eigener Angebotsbereich im Originalsystem.",
  },
  {
    title: "Vietnamesisch",
    text: "Vietnamesische Gerichte als eigener Angebotsbereich im Originalsystem.",
  },
  {
    title: "Mittagsangebot",
    text: "Mittagskarte/Mittagsangebot mit gesonderten Zeiten und Sushi-Mittagsrabatt.",
  },
];

export const menuCategoryGroups = [
  {
    title: "Hauptkategorien",
    entries: [
      "Salat",
      "Sushi",
      "Vietnamesisch",
      "Thailändisch",
      "Sandwich",
      "Mittagsangebot",
      "Vorspeisen",
      "Suppen",
      "Getränke",
    ],
  },
  {
    title: "Sushi-Bereiche",
    entries: [
      "Sashimi",
      "Nigiri",
      "Temaki",
      "Inside-Out-Makis",
      "Nori-Makis",
      "Sushi-Menüs",
      "Spezial Sushi Rolls",
      "Sushi-Sandwich",
      "Sushi in der Schale",
    ],
  },
];

export const visitDetails = [
  {
    label: "Adresse",
    value: `${restaurant.address.street}, ${restaurant.address.postalCode} ${restaurant.address.city}`,
  },
  {
    label: "Öffnungszeiten",
    value: restaurant.hours.restaurant,
  },
  {
    label: "Mittagszeit",
    value: restaurant.hours.lunch,
  },
];
