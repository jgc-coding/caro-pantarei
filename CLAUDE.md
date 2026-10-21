# Caro Pantarei Website

**Prozess-Stufe: Produkt** — volles Programm (Version, CHANGELOG, Regressionscheck).

Website fuer Caro (voller Name: `marke.name` in `src/config/marke.ts`), die zwei Dinge anbietet:
**Pantarei-Koerperarbeit** (ruhige Einzelsitzung) und **Playfight nach Matteo Tangi**
(Gruppen-Praxis). Erstes Pilot-/Referenzprojekt von JGC Lumen. Statische Seite,
kein Backend: Start, Pantarei, Playfight, Ueber mich, Kontakt, Impressum, Datenschutz
und eine eigene 404-Seite.

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
- Links der gebauten Ausgabe pruefen: `npm run pruefe:links` (laeuft auch im Deploy mit)

## Deploy

Push auf `main` → GitHub Actions baut und veroeffentlicht auf GitHub Pages.
Live: https://jgc-coding.github.io/caro-pantarei/ · Repo: `jgc-coding/caro-pantarei`

Der Schalter `ENTWURF` in `src/config/marke.ts` steuert die Sichtbarkeit: Solange er
`true` ist, tragen alle Seiten `noindex` und `robots.txt` verbietet das Einlesen — die
Seite ist dann nur ueber die bekannte Adresse erreichbar, nicht ueber eine Suche.
**Auf `false` erst umstellen, wenn Impressum, Datenschutz und die Bildfreigaben stehen.**

## Die zwei Tauschstellen

Alles, was sich beim Klienten aendert, liegt an genau **zwei** Orten. Kein Wert steht doppelt.

| Was | Wo |
|---|---|
| Name, Claim, Kontakt, Orte, Preise, Termine, Registrationslink, Stimmen | `src/config/marke.ts` |
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
- **Jedes Bild braucht einen bewussten Ausschnitt** (`style="object-position: X% Y%"`).
  Der Bogen (3/4) und die Wegkarte (4/3) schneiden hochformatige Fotos hart: Bei der
  Wegkarte bleiben von 1280 Bildpunkten Hoehe nur 640 uebrig. Ohne Angabe schneidet der
  Browser mittig und kappt Koepfe. Beim Bildtausch neu bestimmen, nie den Standard lassen.
- **Hover macht die Akzentfarbe tiefer, nie schwarz** (`--akzent-dunkel`). Ein
  lavendelfarbener Knopf, der beim Zeigen auf `--farbe-tinte` springt, wirkt kaputt.
- **Jede Wegkarte zeigt das Bild der Seite, zu der sie fuehrt** — wer klickt, erkennt
  das Motiv wieder. Beim Bildtausch auf einer Unterseite die Karte auf der Startseite
  mitziehen.
- **Bilder: `src/assets/bilder/` ist die einzige Quelle der Website.** `Bildmaterial/`
  ist die unangetastete Ablage dessen, was Caro geliefert hat — daraus wird kopiert, nie
  umgekehrt. Kommen neue oder korrigierte Fotos, muessen BEIDE Ordner nachgezogen werden;
  wer nur `Bildmaterial/` aktualisiert, sieht auf der Website weiter die alten Bilder,
  ohne dass irgendetwas warnt.
- **HD-Originale liegen nur lokal:** `Bildmaterial/Playfight HD/` (27 Kamerafotos,
  6240 x 4160, ~300 MB) ist per `.gitignore` ausgenommen — das Repo ist oeffentlich.
  Nach `src/assets/bilder/` kommt nur eine verkleinerte Fassung (lange Kante 1800 px,
  JPEG q85, OHNE EXIF — die Originale tragen Kameramodell, Seriennummer und Aufnahmezeit; GPS war
  2026-10-21 nicht enthalten), nie das
  Original. Die Bildbreiten in `widths` reichen bis 1200 px; mehr gibt die Quelle nicht her.
- **Zeilenleiter** ist das Erkennungsmerkmal der Seite: gestapelte kurze Zeilen mit
  senkrechter Haarlinie, die sich beim Hereinscrollen von oben zeichnet. Kommt aus Caros
  eigenem Schreibrhythmus. Sparsam einsetzen — wenn sie ueberall steht, wirkt sie nirgends.
- **Wellen-Marke** (`WellenMarke.astro`): Inline-SVG, Farbe ueber `currentColor` — sie
  faerbt sich mit `data-welt` um. Steht in Kopfzeile und Fusszeile, sonst nirgends.
  Platzhalter mit Haltung: Liefert Caro ein Logo, ersetzt es die Marke an beiden Stellen.
- **Der Atem:** Hoechstens EIN Bild je Seite (das erste, Klasse `atmet`) hebt und senkt sich
  um ~1 % in 8 s. Nie auf mehrere Bilder ausweiten — der Reiz liegt darin, dass man es
  kaum sieht. Animiert wird `scale`, nie `transform` (das gehoert der Einblendung).
- **Hoechstens EIN kursives `<em>`-Wort je Seite** in einer Ueberschrift („Schön, dass *Du*
  da bist."). Mehr als eines, und die Betonung ist keine mehr.
- Bewegung nur an diesen Stellen (Zeilenleiter, Einblendung, Atem, Hover) und immer
  hinter `prefers-reduced-motion`.

## Inhaltliche Regeln (nicht verhandelbar)

- **Keine Heilversprechen.** Fuer Gesundheitsangebote gilt das Heilmittelwerbegesetz;
  „hilft gegen ..." oder „loest ..." sind angreifbar. Immer als Einladung formulieren.
- **Titel „Heilpraktikerin fuer Psychotherapie" erst schreiben, wenn Caro die Erlaubnis
  des Gesundheitsamts bestaetigt hat.** Ausbildung != Erlaubnis.
- **Keine erfundenen Fakten.** Preise, Orte, Termine, Anschrift stehen als sichtbarer
  Platzhalter in `marke.ts` (Praefix `PLATZHALTER:`), nie als geratener Wert.
- Bilder mit erkennbaren fremden Personen duerfen erst online, wenn schriftliche
  Einwilligungen vorliegen.
- **Erfahrungsberichte bleiben woertlich**, auch Schreibweise und Zeichensetzung — es sind
  die Worte anderer Menschen (Entscheidung Gabriel, 2026-10-17). Online nur mit
  Einverstaendnis der Person, und nur mit dem Namen, den sie freigegeben hat.

## Stolperfallen

- **Astro auf `^5` gepinnt.** `npm install` und `npm update` bleiben innerhalb dieser Spanne.
  Die neueste Hauptversion zieht erst `npm install astro` ohne Versionsangabe (oder
  `astro@latest`), weil das die Spanne in `package.json` neu schreibt. Nicht ungefragt
  hochziehen (gleiche Falle wie im Achievewear-Blog).
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
- **GitHub Pages laeuft hier mit `build_type=workflow`.** Einschalten kann das nur jemand
  von aussen, nicht der Workflow selbst — sein Schluessel darf veroeffentlichen, aber nicht
  anlegen. Bei einem neuen Repo ist das der erste Schritt:
  `gh api repos/<besitzer>/<repo>/pages -X POST -f build_type=workflow`.
- **`BASE_PATH` unter Git Bash immer quoten.** Unquotiert macht Git Bash aus
  `/caro-pantarei` still `C:/Program Files/Git/caro-pantarei` — `npm run pruefe:links`
  meldete daraufhin 85 gesunde Links als kaputt. Das Skript bricht bei so einem Wert
  inzwischen ab statt zu raten, aber der Aufruf bleibt trotzdem falsch.
- **Im Worktree zeigt `npm run dev` Ersatzschriften.** `node_modules` liegt dort im
  Hauptordner, und Vite verweigert die Schriftdateien von ausserhalb mit 403. Fuer
  Sichtpruefungen den gebauten Stand nehmen: `npm run build` ohne `SITE_URL`/`BASE_PATH`,
  dann die Startkonfiguration `caro-vorschau` (Port 4322).
- **Farben, die Text tragen, muessen nachgerechnet werden.** `--farbe-still-tief` und
  `--farbe-offen` in `ci.css` erfuellen aktuell 4.5:1 auf Leinen UND auf Sand. Die erste
  Fassung lag bei 4.38:1 bzw. 2.92:1 und war auf dem Handy im Sonnenlicht kaum lesbar.
  Beim CI-Tausch also nicht nur schauen, sondern rechnen.
- **Astro vergroessert Bilder nie ueber die Quellaufloesung hinaus.** Angeforderte Masse
  sind eine Obergrenze, keine Zusage. Fest eingetragene `og:image`-Masse gingen dadurch
  auseinander (1200x630 behauptet, 853x900 geliefert). Masse fuer Social-Vorschauen immer
  aus `bild.width`/`bild.height` ableiten, nie hinschreiben.
- **Caros Google-Drive-Ordner sind nicht oeffentlich**, sondern fuer Gabriels Google-Konto
  freigegeben: `curl`/WebFetch bekommen 401. Zugriff nur ueber Gabriels angemeldeten
  Chrome (claude-in-chrome); Herunterladen ueber das Menue am Ordnernamen →
  „Herunterladen" (ZIP landet in `~\Downloads`). Ist Download, also vorher Gabriel fragen.
  Den Freigabe-Link nie ins Repo schreiben — es ist oeffentlich.
