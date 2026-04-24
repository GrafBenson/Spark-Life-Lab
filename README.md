# Banthai Sushi / Heim- & Partyservice Redesign

Modernes Next.js-/TypeScript-/Tailwind-Redesign auf Basis der oeffentlich verifizierten Inhalte aus dem Altsystem von Banthai.

## Lokal starten

```bash
npm install
npm run dev
```

Dann `http://localhost:3000` im Browser oeffnen.

## Build / Quality Check

```bash
npm run lint
npm run build
npm run start
```

## Projektstruktur

- `app/` - Routen mit App Router
  - `app/page.tsx` (Home)
  - `app/bestellen/page.tsx` (Bestellen / Speisekarte)
  - `app/speisekarte/page.tsx` (Alias auf Bestellen)
  - `app/bewertungen/page.tsx`
  - `app/liefergebiet/page.tsx`
  - `app/kontakt/page.tsx`
  - `app/impressum/page.tsx`
  - `app/datenschutz/page.tsx`
- `components/` - wiederverwendbare UI-Elemente (Header, Footer, Mobile Action Bar, Order-Link)
- `data/site.ts` - zentraler Data-Layer mit verifizierten Fakten + TODO-Hinweisen
- `CLIENT_REVIEW_NOTES.md` - Quellen, verifizierte Fakten, offene Punkte zur Betreiberfreigabe

## Inhaltsquelle

- Wrapper-Domain: `http://www.banthaisushi.de`
- Primare Inhaltsquelle: `http://www.hunger-stillen.de/cgi-bin/Homepage.fpl?SHOP=Banthai`

## Was noch bestaetigt werden muss

- Vollstaendige Menuepunkte und Preise je Kategorie
- Liefergebietszonen und Mindestbestellwerte im Detail
- Vollstaendige rechtliche Impressumsangaben fuer den finalen Launch
- Final freigegebener Datenschutztext

## Deployment

Deployment ist auf jeder Next.js-faehigen Plattform moeglich (z. B. Vercel).
Vor Livegang alle TODO-Punkte aus `CLIENT_REVIEW_NOTES.md` final bestaetigen.
