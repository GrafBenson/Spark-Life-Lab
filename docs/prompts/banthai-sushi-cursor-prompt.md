# Cursor Prompt: Banthai Sushi / Banthai Heim- & Partyservice Redesign

```text
Du bist ein senioriger, produktstarker Web Developer, Designer und Research-Agent. Deine Aufgabe ist es, eine bestehende Restaurant-/Delivery-Website für **Banthai Sushi / Banthai Heim- & Partyservice** komplett neu zu gestalten und modern neu zu bauen.

WICHTIG:
- Du sollst **nicht** die Inhalte neu erfinden.
- Du sollst **nicht** einfach ein generisches Sushi-Template bauen.
- Du sollst den **Inhalt, die Angebotslogik, die Navigation, die Serviceaussagen und die Markenstimmung** des Originals beibehalten, aber:
  - die Struktur neu ordnen
  - die UX modernisieren
  - das Design deutlich hochwertiger machen
  - Mobile sauber lösen
  - Vertrauen, Lesbarkeit und Conversion stark verbessern

WENN deine Umgebung Parallel-Agenten / Multi-Agenten / Swarm / Subagents unterstützt, nutze sie sinnvoll:
- Agent 1: Source research / public page extraction
- Agent 2: Menu/category extraction
- Agent 3: UX + art direction
- Agent 4: Next.js implementation
- Agent 5: QA / verification
Wenn das nicht verfügbar ist, arbeite dieselben Schritte sequenziell selbst ab.

DU ARBEITEST IN DIESER REIHENFOLGE:
1. Quellen analysieren
2. Fakten extrahieren
3. Seitenstruktur vorschlagen
4. Website bauen
5. alles prüfen

BEVOR DU IMPLEMENTIERST:
Gib zuerst eine kurze Zusammenfassung mit:
1. verifizierten Fakten
2. offenen Unsicherheiten / TODOs
3. vorgeschlagener Seitenstruktur

ERST DANACH baust du die Website.

ABSOLUTE REGEL:
Du darfst **keine Business-Fakten erfinden**.
Keine erfundenen Öffnungszeiten, keine erfundenen Liefergebiete, keine erfundenen Menüpunkte, keine erfundenen Bewertungen, keine erfundenen Inhaberdaten, keine erfundenen Impressumsangaben.

Wenn etwas nicht sauber verifiziert werden kann:
- markiere es als TODO im Code
- dokumentiere es in `CLIENT_REVIEW_NOTES.md`
- spiele es nicht als gesicherte Live-Aussage aus

TECH STACK:
- Next.js
- TypeScript
- Tailwind CSS
- App Router
- frontend-first
- kein komplexes Backend

ZIEL:
Baue eine moderne, hochwertige, warme und vertrauenswürdige Website, die sich **klar am Original orientiert**, aber nicht alt, nicht baukastenhaft und nicht wie ein Bringbutler-Frame-Shop wirkt.

QUELLEN / SOURCE-OF-TRUTH:
Analysiere unbedingt diese Quellen:

1. Wrapper-Domain:
- http://www.banthaisushi.de

2. Wichtig:
Erkenne, dass die Domain ein **Frameset/Wrapper** ist und auf das eigentliche System verweist.
Behandle als reale Inhaltsquelle insbesondere:
- http://www.hunger-stillen.de/Banthai
- http://www.hunger-stillen.de/cgi-bin/Homepage.fpl?SHOP=Banthai

3. Analysiere außerdem alle intern verlinkten/geladenen Bereiche des Zielsystems, soweit öffentlich erreichbar, insbesondere:
- Startseite
- Bestellen
- Bewertungen
- Liefergebiet
- Hilfe/Kontakt
- Impressum

4. Wenn im Zielsystem zusätzliche CSS-/Asset-/Menüstrukturen sichtbar sind, darfst du sie zur Farb- und Inhaltsanalyse verwenden.

WICHTIGER KONTEXT ZUM ORIGINAL:
Die aktuelle Seite ist technisch und gestalterisch alt.
Sie wirkt wie:
- Frameset / Alt-Webshop / Bringbutler-System
- roter Header
- gold-cremefarbene Typografie
- helle gelbliche Inhaltsflächen
- orangefarbene Hover-/Aktionsakzente
- starre Tabellen-/Boxenlogik
- blinkende / animierte Aufmerksamkeitselemente

DU SOLLST:
- die **Markenwirkung** behalten
- aber das **alte Layout und die alte Shop-Anmutung nicht kopieren**

VERIFIZIERTE ODER ZU VERIFIZIERENDE FAKTEN, DIE DU AUS DEN QUELLEN ÜBERNEHMEN SOLLST:

Restaurant / Marke:
- Name im Originalauftritt: **Banthai Heim- & Partyservice**
- öffentlicher Markenkontext: **banthaisushi.de**

Standort:
- **Buchhofstr. 2**
- **82319 Percha-Starnberg**

Telefon:
- **08151 448567**

Öffnungszeiten:
- **Mo–Fr 11:30–14:00 und 17:30–22:00**
- **Sa 17:00–22:00**
- **So 17:30–22:00**

Mittagsmenüzeiten:
- **Mo–Fr 11:00–14:00**

Service-/Verkaufsargumente:
- **Heim- & Partyservice**
- **Lieferdienst / Bringdienst**
- **Vorbestellen möglich**
- **10 % Rabatt bei Selbstabholung**
- **15 % Rabatt auf bestimmte Sushi-Bereiche zur Mittagszeit**

Bewertungs-/Trust-Signal der Quelle:
- **90.50 %**
- **2384 Bewertungen**
WICHTIG:
Das ist ein quelleninterner Bewertungswert des Originalsystems.
Nicht als Google-Bewertung umdeuten.

Möglicher Inhaberhinweis:
- **Pham Dinh Dai**
Nutze das nur live, wenn du denselben Hinweis öffentlich sauber wiederfindest.

BESTEHENDE NAVIGATION / INFORMATION ARCHITECTURE:
- Startseite
- Bestellen
- Bewertungen
- Liefergebiet
- Hilfe/Kontakt
- Impressum

ERKENNBARE ANGEBOTSWELTEN / KATEGORIEN:
Übernimm die Angebotsstruktur inhaltlich und logisch aus dem Original, z. B.:
- Salat
- Sushi
- Vietnamesisch
- Thailändisch
- Sandwich
- Mittagsangebot / Mittagskarte
- Vorspeisen
- Suppen
- Getränke

Sichtbare Sushi-Unterwelten / Angebotscluster:
- Sashimi
- Nigiri
- Temaki
- Inside-Out-Makis
- Sushi-Menüs
- Spezial Sushi Rolls
- Sushi-Sandwichs

Wenn aus den Quellen weitere Kategorien oder Menüpunkte eindeutig extrahiert werden können, übernimm sie.
Wenn das Vollmenü nicht sauber extrahierbar ist:
- baue die Struktur trotzdem sauber
- nutze nur verifizierte Inhalte
- markiere fehlende Daten als TODO

DESIGN- UND MARKENRICHTUNG:
Lehne dich an das Original **inhaltlich und farblich** an, aber baue ein modernes Redesign.

Farb- und Markenwelt:
- kräftiges Rot
- warmes Gold / Creme
- Orange als Aktions-/Hoverfarbe
- helle gelbliche / cremige Contentflächen

Wichtig:
- kein generisches schwarzes Luxus-Sushi-Template
- keine copy-paste Alt-Webshop-Optik
- keine blinkenden Texte übernehmen
- keine plumpen Alt-Verläufe übernehmen
- keine Tabellen-/Kachelwand

Zielwirkung:
- modern
- appetitlich
- warm
- hochwertig
- freundlich
- serviceorientiert
- delivery- und takeaway-stark
- mobil überzeugend
- asiatische Identität subtil und geschmackvoll

Die neue Seite soll sich anfühlen wie:
- eine gute, aktuelle Restaurant- und Delivery-Website
- mit Wiedererkennungswert zum Original
- aber deutlich professioneller und vertrauenswürdiger

SEITEN, DIE DU BAUEN SOLLST:
- Home
- Bestellen / Speisekarte
- Bewertungen
- Liefergebiet
- Kontakt
- Impressum
- optional Datenschutz, wenn dafür aus dem eingebundenen System oder wegen DSGVO eine saubere Grundlage da ist

WICHTIG:
- keine erfundene Über-uns-Geschichte bauen, wenn das Original dafür keine belastbare Grundlage liefert
- wenn keine echte About-Story vorhanden ist, löse Persönlichkeit und Vertrauen über Hero, Service, Food-Welten, Kontakt und Bewertungen

HOME-PAGE ANFORDERUNGEN:
Die Homepage soll:
- einen starken Hero haben
- Delivery / Partyservice / Selbstabholung direkt sichtbar machen
- Lunch / Mittagsangebot sichtbar machen
- Sushi + Thai + Vietnamesisch als Angebotswelt klar zeigen
- Bewertungen / Trust sauber einbauen
- eine direkte Bestelllogik sichtbar machen
- nicht überladen sein

Empfohlene Home-Struktur:
1. Hero
   - Marke / Name
   - kurze Kernaussage
   - kurze Support-Zeile
   - CTA: Bestellen
   - CTA: Speisekarte / Angebot
2. Service-/Trust-Leiste
   - Selbstabholung 10 %
   - Lunch-Vorteil
   - Liefer-/Partyservice
   - Bewertungen
3. Angebotswelten
   - Sushi
   - Thai
   - Vietnamesisch
   - Mittag / Specials
4. Bewertungs-/Trust-Sektion
5. Kontakt / Öffnungszeiten / Liefergebiet

BESTELLEN / SPEISEKARTE:
Diese Seite soll:
- klar strukturiert sein
- mobil gut scannbar sein
- Kategorien logisch gruppieren
- Lunch / Sushi / Thai / Vietnamesisch sauber voneinander absetzen
- klare CTAs für Bestellung, Lieferung, Abholung enthalten

Wenn das Originalmenü nur teilweise sauber extrahierbar ist:
- keine Inhalte halluzinieren
- Struktur + verifizierte Kategorien + verifizierte Beispiele zeigen
- Rest als TODO / final client confirmation kennzeichnen

BEWERTUNGEN:
- nutze die im Originalsystem sichtbaren Bewertungsdaten
- label die Quelle sauber
- nutze keine erfundenen Google-Bewertungen
- wenn Zitate öffentlich extrahierbar sind, nutze verifizierte Snippets
- wenn nicht, arbeite mit dem vorhandenen Trust-Signal + Bewertungswert + UI-Struktur

LIEFERGEBIET:
- diese Seite / Sektion soll Liefergebiet und Mindestbestellwert sauber erklären
- wenn Details öffentlich extrahierbar sind, übernimm sie
- wenn nicht, baue die Struktur und markiere offene Fakten als TODO

KONTAKT:
- Adresse
- Telefon
- Öffnungszeiten
- ggf. Karten-/Routenlink
- nur ausspielen, was öffentlich verifiziert ist

IMPRESSUM:
- nur öffentlich belastbare Inhaber-/Betreiberdaten verwenden
- nichts halluzinieren

PROJEKTSTRUKTUR:
Baue die Website als:
- Next.js
- TypeScript
- Tailwind
- App Router

Mit:
- zentraler Data-Layer für Restaurantdaten
- Navigation
- Angebotswelten / Kategorien
- Trust-Signale
- Öffnungszeiten
- Kontakt-/Impressumsdaten
- verifizierte Hinweise und TODOs

REUSABLE COMPONENTS:
- Header / Navigation
- Hero
- Trust / Highlights
- Category / Menu sections
- Bewertungen
- Kontakt / Öffnungszeiten
- Footer

README.md:
Erzeuge eine README mit:
- lokal starten
- Projektstruktur
- wo die Inhalte liegen
- was noch bestätigt werden muss
- Deployment

CLIENT_REVIEW_NOTES.md:
Erzeuge eine Datei mit:
- verwendeten Quellen
- verifizierten Fakten
- Annahmen
- TODOs
- ungeklärten Punkten
- was der Betreiber noch final bestätigen muss

WICHTIGE UX-VORGABEN:
- mobile-first
- schnelle Lesbarkeit
- starke CTAs
- Delivery/Takeaway sofort verständlich
- kein überladener Hero
- keine unnötig langen Textblöcke
- keine generischen AI-Marketingtexte
- keine Baukasten-Anmutung

STYLE-VORGABEN:
- ruhig
- editorial
- hochwertig
- asiatisch inspiriert, aber nicht kitschig
- rot-gold-cremefarbene Herkunft des Originals spürbar
- moderne Typografie
- gutes Spacing
- appetitliche Bildverwendung

BILDSTRATEGIE:
- nutze nur verifizierte öffentliche Bilder / visuelle Hinweise aus dem Originalsystem, wenn sinnvoll
- wenn Bilder schwach sind, lieber weniger Bilder und mehr hochwertige editoriale Flächen
- keine schlechten oder pixeligen Assets prominent aufblasen

ARBEITSWEISE / SAFETY:
- keine Business-Fakten erfinden
- wenn du unsicher bist, TODO statt Behauptung
- bestehende Inhalte modern neu ordnen, nicht blind kopieren
- die alte Website als Materialbasis behandeln, nicht als Layoutvorlage

VERIFIKATION:
Nach der Umsetzung zwingend:
- npm run lint
- npm run build

Zusätzlich prüfen:
- /
- /bestellen oder /speisekarte
- /bewertungen
- /liefergebiet
- /kontakt
- /impressum

Visuelle QA:
- Desktop + Mobile Screenshots
- mindestens Home, Bestellen/Speisekarte, Bewertungen, Kontakt

Wenn echte Geräte nicht verfügbar sind:
- nutze Chromium / Playwright
- dokumentiere ehrlich, dass es keine echten iOS-/Android-Tests waren

OUTPUT:
Liefere am Ende:
1. den Code
2. eine kurze Zusammenfassung der Änderungen
3. die Verifikationsergebnisse
4. offene TODOs / ungeklärte Fakten

ABSOLUTE NO-GOs:
- Fakten erfinden
- generisches Sushi-Template
- schwarzes Luxusdesign ohne Bezug zum Original
- Alt-Frameset-/Bringbutler-Look übernehmen
- blinkende Texte / alte Banner-Animationen übernehmen
- erfundene Öffnungszeiten, Bewertungen oder Inhaberdaten

Starte jetzt.
Analysiere zuerst die Quellen und gib mir dann:
1. verifizierte Fakten
2. offene Unsicherheiten
3. vorgeschlagene Seitenstruktur
bevor du implementierst.
```
