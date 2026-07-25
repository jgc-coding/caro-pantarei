# Caro Pantarei Website

**Prozess-Stufe: Produkt** — volles Programm (Version, CHANGELOG, Regressionscheck).

Website fuer Caro (vermutlich „Caroline Schulz"), die zwei Dinge anbietet:
**Pantarei-Koerperarbeit** (ruhige Einzelsitzung) und **Playfight nach Matteo Tangi**
(Gruppen-Praxis). Erstes Pilot-/Referenzprojekt von JGC Lumen. Statische Seite, sieben
Unterseiten, kein Backend.

## Tech-Stack

- **Astro 5** (`^5`, statisch, kein SSR) — Ausgabe ist reines HTML in `dist/`
- **Vanilla CSS** mit Custom Properties, kein Tailwind, kein CSS-Framework
- Schriften **selbst gehostet** ueber `@fontsource-variable/newsreader` und
  `@fontsource-variable/karla` — **niemals CDN** (DSGVO)
- Bilder ueber `astro:assets` (`<Image />`) aus `src/assets/bilder/` — Astro erzeugt
  WebP und `srcset` beim Bauen
- `@astrojs/sitemap`
- Node 24, npm 11

## Befehle

- Entwickeln: `npm run dev` (Port 4321)
- Bauen: `npm run build` → `dist/`
- Vorschau des Baus: `npm run preview`
- Pruefen: `npm run check` (= `astro check`, auch Inhalt von `.claude/pruefen.txt`)
- Bauen wie auf dem Server (Pflichttest vor jedem Deploy-Umbau):
  `$env:SITE_URL='https://jgc-coding.github.io'; $env:BASE_PATH='/caro-pantarei'; npm run build`

## Deploy

Push auf `main` → GitHub Actions baut und veroeffentlicht auf GitHub Pages.
Live: https://jgc-coding.github.io/caro-pantarei/ · Repo: `jgc-coding/caro-pantarei`

`ENTWURF` in `src/config/marke.ts` steht auf `true`: Alle Seiten tragen `noindex`, und
`robots.txt` verbietet das Einlesen. Die Seite ist damit nur ueber die bekannte Adresse
erreichbar, nicht ueber eine Suche. **Erst auf `false` stellen, wenn Impressum,
Datenschutz und die Bildfreigaben stehen.**

## Die zwei Tauschstellen

Alles, was sich beim Klienten aendert, liegt an genau **zwei** Orten. Kein Wert steht doppelt.

| Was | Wo |
|---|---|
| Name, Claim, Kontakt, Orte, Preise, Termine, Registrationslink | `src/config/marke.ts` |
| CI-Farben und Schriftnamen | `src/styles/ci.css` |

Kommen echte CI-Farben von Caro: nur die Variablen im `:root`-Block von `ci.css` tauschen,
sonst nichts anfassen. Aendert sich der Name: nur `marke.ts`.

Die Version wird an genau einer Stelle gepflegt: in `package.json`. `src/config/version.ts`
leitet sie nur ab und macht sie im Seitenfuss sichtbar — damit die Zahl nicht doppelt steht.

## Konventionen

- Sprache der Oberflaeche: **Deutsch**, mit echten Umlauten. Caro wird durchgehend
  **geduzt** („Du", grossgeschrieben) — so schreibt sie selbst.
- **Ordner englisch** (Astro erwartet `src/pages`, `src/layouts`, `src/components`),
  **Bauteilnamen, CSS-Variablen und Kommentare deutsch** (`Zeilenleiter.astro`,
  `--farbe-still`). Diese Mischung ist Absicht, nicht Schlamperei.
- **Theming ueber `data-*`**: `data-welt="still"` (Pantarei, Lavendel) bzw.
  `data-welt="wild"` (Playfight, Ton) am Abschnitt oder `<body>` schaltet die Akzentfarbe.
  Nie eine Akzentfarbe direkt in ein Bauteil schreiben.
- **Zeilenleiter** ist das Erkennungsmerkmal der Seite: gestapelte kurze Zeilen mit
  senkrechter Haarlinie. Kommt aus Caros eigenem Schreibrhythmus. Sparsam einsetzen —
  wenn sie ueberall steht, wirkt sie nirgends.
- Bewegung nur an drei Stellen (Zeilenleiter, Bild-Einblendung, Hover) und immer hinter
  `prefers-reduced-motion`.

## Inhaltliche Regeln (nicht verhandelbar)

- **Keine Heilversprechen.** Fuer Gesundheitsangebote gilt das Heilmittelwerbegesetz;
  „hilft gegen ..." oder „loest ..." sind angreifbar. Immer als Einladung formulieren.
- **Titel „Heilpraktikerin fuer Psychotherapie" erst schreiben, wenn Caro die Erlaubnis
  des Gesundheitsamts bestaetigt hat.** Ausbildung != Erlaubnis.
- **Keine erfundenen Fakten.** Preise, Orte, Termine, Anschrift stehen als sichtbarer
  Platzhalter in `marke.ts` (Praefix `PLATZHALTER:`), nie als geratener Wert.
- Bilder mit erkennbaren fremden Personen duerfen erst online, wenn schriftliche
  Einwilligungen vorliegen.

## Stolperfallen

- **Astro auf `^5` gepinnt.** Ein blankes `npm install` oder `npm update` wuerde Astro 7
  ziehen. Nicht ungefragt hochziehen (gleiche Falle wie im Achievewear-Blog).
- `astro.config.mjs` liest `SITE_URL` und `BASE_PATH` aus der Umgebung. Lokal Defaults
  (`http://localhost:4321`, Base `/`). Fuer GitHub Pages muessen beide gesetzt werden,
  sonst brechen alle Pfade — Muster stammt aus dem Achievewear-Blog.
- Interne Links **immer** ueber den Helfer aus `src/config/marke.ts` bzw. mit
  `import.meta.env.BASE_URL` bauen, nie als nacktes `/pantarei` — sonst funktioniert die
  Seite lokal und bricht unter einem Unterordner-Deploy.
- **`img { height: auto }` im Reset ist Pflicht.** Astros `<Image>` schreibt ein
  `height`-Attribut (bei unseren Fotos bis 1280). Ohne `height: auto` nimmt der Browser
  diesen Wert und streckt das Bild — der Auftakt sah dadurch leer aus.
- Der Einblend-Effekt versteckt Elemente per CSS und zeigt sie per JavaScript. Deshalb gilt:
  `data-animiert` wird nur gesetzt, wenn JS laeuft **und** Bewegung erwuenscht ist, und der
  IntersectionObserver nutzt `threshold: 0`. Jede Aenderung daran kann Inhalte dauerhaft
  unsichtbar machen — vorher pruefen, ob ohne JS noch alles sichtbar ist.
- Chrome friert laufende CSS-Uebergaenge ein, wenn sein Fenster verdeckt ist. Screenshots
  wirken dann blass oder leer. Zum Pruefen `data-animiert` am `<html>` entfernen — das ist
  derselbe Zustand, den auch Nutzer mit „weniger Bewegung" sehen.
