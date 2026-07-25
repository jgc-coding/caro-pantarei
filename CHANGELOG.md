# Changelog

Alle nennenswerten Aenderungen dieses Projekts. Neueste zuerst.

## v0.2.0 — 2026-07-25

Entwurf online stellen, damit Gabriel und Caro ihn auf dem Handy anschauen koennen.

- GitHub-Actions-Deploy nach GitHub Pages (`.github/workflows/deploy.yml`), Muster aus
  dem Achievewear-Blog; `npm run check` bricht den Deploy ab, bevor etwas Kaputtes live geht
- Schalter `ENTWURF` in `src/config/marke.ts`: solange er `true` ist, tragen alle Seiten
  ein `noindex` und `robots.txt` verbietet das Einlesen — die Seite ist nur ueber die
  bekannte Adresse erreichbar und taucht in keiner Suche auf
- **Fehler behoben:** Der Verweis auf die Sitemap wurde per Textverkettung gebaut und
  ergab unter dem Unterordner-Deploy `/caro-pantareisitemap-index.xml`. Laeuft jetzt ueber
  `pfad()` wie alle anderen internen Links auch. Gefunden durch einen Testbau mit gesetztem
  `BASE_PATH` — lokal war der Fehler unsichtbar.

## v0.1.0 — 2026-07-25

Erster Entwurf zur Vorlage bei Caro.

- Projekt angelegt, Prozess-Stufe **Produkt** (Git, `.gitattributes`, `.gitignore`,
  CLAUDE.md, CHANGELOG, `.claude/pruefen.txt`)
- Astro-5-Geruest, Schriften selbst gehostet (Newsreader + Karla), keine CDN-Aufrufe
- Farbwelt „Lavendel & Leinen", abgeleitet aus Caros eigenem Bildmaterial
- Erkennungsmerkmal **Zeilenleiter** — gestapelte Zeilen nach Caros Schreibrhythmus
- Zwei Welten `still` (Pantarei) und `wild` (Playfight) als `data-welt`-Umschaltung
- Sieben Seiten: Start, Pantarei, Playfight, Ueber mich, Kontakt, Impressum, Datenschutz
- Texte: Caros „Ueber mich" uebernommen (nur Tippfehler korrigiert), Pantarei- und
  Playfight-Texte als Vorschlag entworfen, alle harten Fakten als sichtbare Platzhalter
- Recherche geklaert: „Tangi" ist der Begruender **Matteo Tangi**, korrekt heisst es
  „Playfight nach Matteo Tangi"
