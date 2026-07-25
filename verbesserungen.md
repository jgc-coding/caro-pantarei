# Verbesserungen
Stand: 2026-07-25 (Runde 1, Fokus: alles)

## Kernfunktionen (Pruefliste — jede Runde erneut abfahren)

1. **Startseite empfaengt** — erwartet: Willkommen, die zwei Wege, Kurzportraet, ein Weg zum Kontakt · zuletzt: laeuft (2026-07-25, live)
2. **Navigation** — erwartet: alle Seiten erreichbar, aktuelle Seite markiert, auch unter dem Unterordner-Pfad · zuletzt: laeuft (2026-07-25, live auf allen 6 Menuepunkten geprueft)
3. **Pantarei-Seite** — erwartet: Methode, Ablauf in drei Schritten, Rahmen, Anfrage-Knopf · zuletzt: laeuft (2026-07-25)
4. **Playfight-Seite** — erwartet: Methode, die vier Rituale, Abgrenzung „was es nicht ist", Termine · zuletzt: laeuft (2026-07-25)
5. **Ueber-mich-Seite** — erwartet: Caros Text vollstaendig, Zeilenleiter-Bloecke · zuletzt: laeuft (2026-07-25)
6. **Kontaktweg** — erwartet: ein Klick fuehrt zu einer E-Mail an Caro · zuletzt: nicht pruefbar (2026-07-25) — E-Mail-Adresse fehlt noch, erscheint korrekt als offener Punkt statt als toter Link
7. **Offene Angaben sichtbar** — erwartet: nichts Geratenes, jede fehlende Angabe gelb markiert · zuletzt: laeuft (2026-07-25, 30 Markierungen ueber 7 Seiten)
8. **Handy-Menue** — erwartet: oeffnet, schliesst, reagiert auf Escape, `aria-expanded` stimmt · zuletzt: laeuft (2026-07-25)
9. **Live erreichbar, nicht auffindbar** — erwartet: alle 7 Seiten HTTP 200, `noindex` + `robots.txt`-Verbot · zuletzt: laeuft (2026-07-25)
10. **Unbekannte Adresse** — erwartet: eigene Seite mit Weg zurueck · zuletzt: kaputt (2026-07-25) → V4

## Offen

- [ ] **V1** (A) Impressum und Datenschutz fuellen, bevor die Adresse weiterwandert
      Gefahr: Eine geschaeftliche Seite ohne Anbieterangaben ist abmahnfaehig — auch wenn
      niemand sie findet. Ohne Datenschutzhinweis fehlt zusaetzlich eine Pflichtinformation.
      Beleg: `src/pages/impressum.astro`, `src/pages/datenschutz.astro` sind markierte
      Platzhalter; Seite live unter https://jgc-coding.github.io/caro-pantarei/impressum/
      (HTTP 200) · Aufwand: S (sobald Caros Angaben da sind) · Risiko: gering
      Zusatzbeleg: `curl -sL -o /dev/null -w "%{http_code}"` auf alle 7 Seiten → durchweg 200.

- [ ] **V2** (A) Bildfreigaben einholen oder Gruppenfotos vorerst tauschen
      Gefahr: Vier der sechs Fotos zeigen erkennbare Menschen ohne Einwilligung. Sie koennen
      Loeschung und Schadensersatz verlangen; bei Playfight-Bildern mit Koerperkontakt wiegt
      das schwerer als bei einem Gruppenfoto.
      Beleg: `src/assets/bilder/` — `gruppe-liegend.jpg`, `kreis-gespraech.jpg`,
      `begegnung-zwei.jpg`, `haende-halten.jpg`, `beruehrung-stehend.jpg` zeigen fremde
      Personen; nur `caro-sitzend.jpg` zeigt Caro allein · Aufwand: S · Risiko: gering
      (`noindex` + `robots.txt` greifen, geprueft live), aber dauerhaft solange die Seite steht.
      Gabriel wurde am 2026-07-25 vor dem Push darauf hingewiesen und hat den Push bestaetigt.

- [ ] **V3** (A) Paket-Schwachstellen beobachten, nicht sofort springen
      Gefahr: Die Bildverkleinerung enthaelt Luecken, ueber die ein praepariertes Foto beim
      Bauen Schadcode ausfuehren koennte. Dazu eine Luecke im Entwicklungsserver, ueber die
      eine im Browser geoeffnete fremde Seite mitlesen koennte, woran gerade gearbeitet wird.
      Beleg: `npm audit` → 3 Schwachstellen (2 hoch: `sharp` <0.35.0 mit libvips-CVEs
      CVE-2026-33327/33328/35590/35591; 1 niedrig: `esbuild`), beide ueber `astro` gezogen.
      `npm outdated`: astro 5.18.2 → 7.1.3 · Aufwand: L (Hauptversionssprung) · Risiko: gering
      Warum gering: `sharp` laeuft ausschliesslich beim Bauen und ausschliesslich mit Caros
      eigenen Fotos — nie im Browser eines Besuchers. `esbuild` betrifft nur `npm run dev`.
      `TECH-STACK.md` pinnt Astro bewusst auf `^5`; ein Sprung auf 7 gehoert geplant, nicht
      per `npm audit fix --force` erzwungen.

- [ ] **V4** (B) Eigene 404-Seite bauen
      Gefahr: Wer sich vertippt oder einem alten Link folgt, landet auf einer fremden,
      englischsprachigen GitHub-Seite ohne Caros Gestaltung und ohne einen Weg zurueck.
      Der Besuch endet dort.
      Beleg: `curl -sL https://jgc-coding.github.io/caro-pantarei/gibtesnicht` → HTTP 404,
      `<title>Page not found &middot; GitHub Pages`, enthaelt 0-mal das Wort „Pantarei".
      Es existiert keine `src/pages/404.astro` · Aufwand: S · Risiko: —

- [ ] **V5** (C) Leitfarbe eine Spur dunkler stellen
      Gefahr: Das Lavendel traegt Eyebrows, Knoepfe und Links auf jeder Seite und erreicht
      den Mindestkontrast nicht. Auf Sandflaechen und bei Sonnenlicht auf dem Handy wird die
      Beschriftung des wichtigsten Knopfes schwer lesbar.
      Beleg: Gerechnet nach WCAG-Formel: `--farbe-still-tief` #7D7090 auf Leinen #FBFAF7 =
      4.38:1, auf Sand #F1ECE4 = 3.89:1 — noetig sind 4.5:1. Betrifft `.marke-zeile`,
      `.knopf`, `.weiter`, `.fliesstext a` in `src/styles/basis.css`.
      Fix: `#6E617F` in `src/styles/ci.css` → 5.47:1 bzw. 4.85:1, Farbton bleibt Lavendel.
      Zum Vergleich: der Playfight-Ton #A55938 besteht mit 4.92:1 · Aufwand: S · Risiko: —

- [ ] **V6** (C) Etikett „offen" lesbar machen
      Gefahr: Ausgerechnet die Marke, die Caro auf offene Punkte hinweisen soll, ist die am
      schlechtesten lesbare Stelle der Seite.
      Beleg: `.platzhalter::before` — #B8863C auf #FBF3E4 = 2.92:1 bei 0.66rem Schriftgroesse
      (`src/styles/basis.css`, Abschnitt 11) · Aufwand: S · Risiko: —
      Hinweis: verschwindet ohnehin, sobald `ENTWURF` auf `false` steht.

- [ ] **V7** (C) Vorschaubild fuers Teilen ergaenzen
      Gefahr: Wer den Link per WhatsApp oder Telegram verschickt, sieht Titel und Text, aber
      eine graue Flaeche statt eines Bildes. Bei einer Seite, deren Zweck gerade das
      Herumzeigen ist, ist das der erste Eindruck.
      Beleg: `dist/index.html` enthaelt `og:title`, `og:description`, `og:type`, `og:locale` —
      aber kein `og:image`; live gegengeprueft · Aufwand: S · Risiko: —

- [ ] **V8** (D) Fotos liegen zweimal im Repo
      Gefahr: Schickt Caro korrigierte oder anders zugeschnittene Bilder und jemand tauscht
      nur einen der beiden Ordner, benutzt die Website weiter die alten — ohne Fehlermeldung.
      Beleg: Alle sechs Dateien in `Bildmaterial/` und `src/assets/bilder/` sind
      byte-identisch (md5 paarweise gleich, geprueft 2026-07-25) · Aufwand: S · Risiko: —
      Vorschlag: `Bildmaterial/` als Original-Ablage behalten und in der CLAUDE.md
      festschreiben, dass `src/assets/bilder/` die einzige Quelle der Website ist —
      oder den Doppelbestand ganz aufloesen.

- [ ] **V9** (D) Tag `v0.2.0` zeigt nicht auf den ausgelieferten Stand
      Gefahr: Der Fuss der Live-Seite sagt „v0.2.0", aber der Tag steht zwei Commits davor.
      Ein Rollback auf `v0.2.0` wuerde nicht das zurueckholen, was gerade online ist.
      Beleg: `git rev-list -n1 v0.2.0` → `e7439ff`, `git rev-parse HEAD` → `0552d94`;
      dazwischen `cb5ac7c` und `0552d94` (beide Deploy-Korrekturen) · Aufwand: S · Risiko: —

- [ ] **V10** (D) `marke.claim` wird nirgends angezeigt — und liegt zu nah am Vorbild
      Gefahr: Zwei Probleme in einem Feld. Es ist toter Inhalt (kein einziger Aufruf), und
      der Wortlaut „Innehalten. Spueren. In Verbindung kommen." liegt dicht an der Zeile
      „Innehalten. Spueren. Veraendern." von weber-jessica.de — einer Seite, die Caro selbst
      als Vorbild genannt hat und deren Publikum sich mit ihrem ueberschneidet.
      Beleg: `src/config/marke.ts:47`; Suche ueber alle `.astro`-Dateien → 0 Verwendungen ·
      Aufwand: S · Risiko: —
      Vorschlag: entweder streichen oder gemeinsam mit Caro einen eigenen Satz finden und
      unter dem Namen in der Kopfzeile zeigen.

- [ ] **V11** (D) Jahreszahl im Fuss friert beim Bauen ein
      Gefahr: `© 2026` entsteht beim Bauen, nicht beim Besuch. Wird die Seite 2027 nicht neu
      gebaut, steht dort weiter 2026 und wirkt verlassen.
      Beleg: `src/components/Fusszeile.astro` nutzt `new Date().getFullYear()`; im gebauten
      `dist/index.html` steht die Zahl fest als `© 2026` · Aufwand: S · Risiko: —
      (Ueber der Deckelung von 3 D-Punkten im Chat-Bericht — hier vollstaendig festgehalten.)

## Ideen

- **I1** (Abrundung) Uebersicht „Was noch fehlt" fuer Caro — Aufwand: S
      Nutzen: Caro sieht alle offenen Angaben auf einer Seite statt verteilt ueber sieben.
      Sie kann die Liste abarbeiten und zurueckschicken, ohne die Website durchzuklicken.
      Bedarf: 30 Platzhalter ueber 7 Seiten (gezaehlt 2026-07-25: Playfight 7, Impressum 6,
      Pantarei 6, Kontakt 4, Start 3, Ueber mich 2, Datenschutz 2). Die Liste erzeugt sich
      aus `src/config/marke.ts` selbst, kann also nicht veralten.
      Abgrenzung: nur sichtbar solange `ENTWURF` auf `true` steht; kein Formular, kein Login.

- **I2** (Abrundung) Waechter fuer interne Links nach dem Bauen — Aufwand: S
      Nutzen: Faengt genau die Fehlerart, die am 2026-07-25 durchgerutscht waere und lokal
      unsichtbar ist. Laeuft im Deploy mit und stoppt, bevor etwas Kaputtes online geht.
      Bedarf: Der Sitemap-Verweis ergab unter dem Unterordner-Pfad
      `/caro-pantareisitemap-index.xml`. `npm run check` hat das nicht gesehen und kann es
      nicht sehen — es prueft Typen, nicht die gebaute Ausgabe.
      Abgrenzung: nur interne Links im Ausgabeordner; keine externen Links, kein Linkchecker
      als Abhaengigkeit — ein Suchlauf ueber `dist/` reicht.

- **I3** (Erweiterung) Echtes Kontaktformular — Aufwand: M
      Nutzen: Wer Caro schreiben will, tut es direkt auf der Seite. Heute muss ein
      E-Mail-Programm eingerichtet sein — auf fremden Rechnern und manchen Handys oeffnet
      sich sonst nichts, und die Anfrage bleibt aus.
      Bedarf: Die Kontaktseite hat genau einen Weg, und der ist ein `mailto:`-Knopf
      (`src/pages/kontakt.astro`). Eine statische Seite hat keinen Server, der versendet.
      Abgrenzung: braucht einen Dienst (Netlify Forms oder Formspree) und damit eine
      Datenschutz-Zeile; kein Terminkalender, keine Zahlung.

- **I4** (Spaeter) Redaktionsbereich, damit Caro Texte selbst aendert — Aufwand: L
      Nutzen: Termine und Preise aendern sich; jede Aenderung geht heute ueber Gabriel.
      Bedarf: Alle veraenderlichen Angaben stehen in `src/config/marke.ts` — sie zu tauschen
      ist ein Code-Eingriff. `playfight.termine` ist eine Liste, die regelmaessig wachsen wird.
      Abgrenzung: erst sinnvoll, wenn die Seite steht und Caro sie wirklich pflegen will;
      Muster liegt fertig im Achievewear-Blog (Sveltia CMS).

## Abgelehnt

(noch nichts)

## Erledigt

(noch nichts — Runde 1)
