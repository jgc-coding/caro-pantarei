# Changelog

Alle nennenswerten Aenderungen dieses Projekts. Neueste zuerst.

## v0.4.0 — 2026-07-25

Design-Verfeinerung: mehr Finesse, kleine dezente Spielereien — alle aus einem Motiv
(Atem und Welle, „Panta rhei"), nah an den Vorbild-Seiten.

- **Wellen-Marke**: Welle im Kreis als Inline-SVG neben dem Namen und im Seitenfuss.
  Echo auf das Kreiszeichen von weber-jessica.de; faerbt sich ueber `currentColor`
  automatisch mit der Welt um (Lavendel auf stillen Seiten, Ton auf der Playfight-Seite).
- **Der Atem**: das erste Bild jeder Seite hebt und senkt sich um ~1 % in 8 s — an der
  Wahrnehmungsgrenze. Animiert `scale` statt `transform`, damit es der Einblendung nicht
  in die Quere kommt.
- **Zeilenleiter**: die Haarlinie zeichnet sich beim Hereinscrollen von oben, bevor die
  Zeilen erscheinen (border-left → eigenes ::before-Element).
- **Ein kursives Wort je Seite**: „Schön, dass *Du* da bist." — Newsreader-Kursive als
  Betonung genau eines Wortes je Seite (Du · gleichzeitig · gegeneinander · Caroline ·
  nichts).
- **Mikro-Bewegungen**: Navigation mit sich von links aufbauender Linie, Pfeile ruecken
  beim Zeigen 3 px vor, Wegkarten-Bilder wachsen beim Zeigen minimal (1.4 s, `scale`).
- **Kleinigkeiten**: kurzer Haarstrich vor den Abschnittsmarken (Echo auf die Labels von
  eunike-erbe.eu), Textmarkierung in zartem Lavendel statt Browser-Blau.
- Alles hinter `prefers-reduced-motion`, weiterhin null externe Requests.

## v0.3.1 — 2026-07-25

- Impressum: doppeltes Leerzeichen in der Zaehlzeile („5 von  6 Feldern") entfernt.
- Eigener Versionssprung, obwohl es nur ein Zeichen ist: Die Zahl im Seitenfuss und der
  Git-Tag muessen auf denselben Stand zeigen, sonst holt ein Rollback nicht das zurueck,
  was online war. Genau das war Befund V9.

## v0.3.0 — 2026-07-25

Ergebnisse der ersten `/improve`-Runde. Details zu jedem Punkt in `verbesserungen.md`.

**Lesbarkeit und Barrierefreiheit**
- **V5** Leitfarbe `--farbe-still-tief` von `#7D7090` auf `#6E617F`. Sie traegt Eyebrows,
  Knoepfe und Links auf jeder Seite und verfehlte mit 4.38:1 (Leinen) bzw. 3.89:1 (Sand)
  den Mindestkontrast. Jetzt 5.47:1 bzw. 4.85:1, Farbton unveraendert.
- **V6** Etikett „offen" von `#B8863C` auf `#8C6228` — von 2.92:1 auf 4.89:1.

**Neue Seiten und Inhalte**
- **V4** Eigene 404-Seite (`src/pages/404.astro`). Bisher landete jeder Tippfehler auf
  einer fremden englischen GitHub-Seite ohne Weg zurueck.
- **V1** Datenschutzerklaerung ausformuliert: Hosting bei GitHub Pages inkl.
  US-Uebermittlung, Kontaktaufnahme, lokale Entwurfssicherung, Betroffenenrechte, und was
  ausdruecklich NICHT passiert. Impressum um Bildnachweis, Streitbeilegung, Haftung fuer
  Links und Hinweistexte je Pflichtfeld ergaenzt. Personenbezogene Angaben bleiben
  markierte Platzhalter — sie werden nicht geraten.
- **V7** Vorschaubild fuers Teilen (`og:image`, 1200x630 aus Caros Einzelfoto) plus
  `og:url` und `twitter:card`. Ein verschickter Link zeigte bisher eine graue Flaeche.
- **I3** Kontaktformular mit Anliegen-Auswahl, Einwilligung, Spam-Falle und laufender
  Entwurfssicherung im Browser. **Absichtlich abgeschaltet**, solange in
  `marke.formular.endpunkt` kein Versanddienst steht — ein Formular ohne Versand saehe
  funktionsfaehig aus und wuerde Anfragen still verschlucken.

**Absicherung**
- **I2** `npm run pruefe:links` prueft die gebaute Ausgabe auf interne Verweise ohne
  Unterordner-Pfad und auf Links ins Leere; laeuft im Deploy zwischen Bau und
  Veroeffentlichung. Genau die Luecke, durch die v0.2.0 ein kaputter Sitemap-Verweis
  gerutscht waere — `astro check` kann das nicht sehen.
  Das Skript bricht ab, wenn `BASE_PATH` kein Web-Pfad ist: Git Bash verbiegt einen
  unquotierten Wert still zu einem Windows-Dateipfad, was 85 Fehlalarme erzeugte.

**Aufraeumen**
- **V10** `marke.claim` entfernt. Der Satz wurde nirgends angezeigt und lag mit
  „Innehalten. Spueren. In Verbindung kommen." zu dicht an
  „Innehalten. Spueren. Veraendern." von weber-jessica.de. Jetzt offener Punkt fuer Caro.
- **V8** In der CLAUDE.md festgeschrieben, dass `src/assets/bilder/` die einzige Quelle
  der Website ist und `Bildmaterial/` die unangetastete Ablage.
- **V9** Dieses Release traegt seinen Tag am ausgelieferten Stand. Bei v0.2.0 zeigte der
  Tag zwei Commits daneben, ein Rollback haette nicht das Laufende zurueckgeholt.

**Offen geblieben:** V2 (Bildfreigaben — braucht die Einwilligung der abgebildeten
Personen), der personenbezogene Teil von V1, V3 (Paket-Schwachstellen, bewusst liegen
gelassen) und V11 (Jahreszahl im Fuss).

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
