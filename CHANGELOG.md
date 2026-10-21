# Changelog

Alle nennenswerten Aenderungen dieses Projekts. Neueste zuerst.

## v0.7.0 — 2026-10-21

Caro hat das Playfight-Shooting in voller Aufloesung geteilt (27 Fotos ueber Google Drive).

**Neues Auftaktbild fuer Playfight**
- `stirn-an-stirn.jpg` (DSCF6156): Caroline und ein Teilnehmer, Stirn an Stirn, die Haende
  auf dem Boden. Steht oben auf der Playfight-Seite und auf der Playfight-Wegkarte der
  Startseite. Es ersetzt `begegnung-zwei.jpg` — das war ein Querformat, von dem im
  hochformatigen Bogen nur die Haelfte der Breite uebrig blieb.

**Alle Fotos scharf**
- Die fuenf uebrigen Website-Fotos sind jetzt Fassungen aus den Originalen statt kleiner
  Kopien (1200 x 1800 statt 853 x 1280), ohne Kamera- und Ortsdaten. Motive und
  Ausschnitte bleiben gleich.
- Die Bilder werden zusaetzlich in 1200 bzw. 1100 Pixel Breite erzeugt. Handys mit
  hoher Pixeldichte bekommen damit ein scharfes Bild statt eines hochgerechneten.
- Das Vorschaubild beim Teilen eines Links zeigt jetzt 1200 x 900 statt 853 x 900.

**Ablage**
- Die HD-Originale liegen in `Bildmaterial/Playfight HD/` und sind per `.gitignore`
  vom oeffentlichen Repo ausgenommen.

## v0.6.1 — 2026-10-21

Caro hat einen dritten Erfahrungsbericht geliefert.

**Dritte Stimme: Toni**
- Woertlich in `marke.ts` (`stimmen`), steht auf der Startseite. Die Pantarei-Seite zeigt
  weiter die erste Pantarei-Stimme (Katharina).
- Tonis Absaetze bleiben erhalten: Ein Zeilenumbruch im Text wird in `Stimme.astro` zu
  einem eigenen Absatz, etwas enger gesetzt als im Fliesstext.

**Stimmen in ausgeglichenen Spalten**
- Die Startseite ordnet die Stimmen jetzt in zwei Spalten, die der Browser in der Hoehe
  ausgleicht. Im bisherigen Raster stand die lange dritte Stimme allein in einer neuen
  Zeile, daneben blieb eine grosse Luecke. Am Handy weiter eine Spalte.

## v0.6.0 — 2026-10-17

Caro hat die ersten zwei Erfahrungsberichte geliefert, samt Einverstaendnis der Personen.

**Rubrik „Erfahrungen" mit echten Stimmen**
- Neues Bauteil `Stimme.astro`: woertliches Zitat, grosses Anfuehrungszeichen in der
  Akzentfarbe, Vorname mit dem kurzen Strich der Marke-Zeile. Bewusst ohne senkrechte
  Haarlinie — die bleibt das Erkennungsmerkmal der Zeilenleiter.
- Startseite: Der Platzhalter „Stimmen" ist ersetzt durch beide Berichte nebeneinander,
  am Handy untereinander.
- Pantarei-Seite: Nach dem Schritt „Nachspüren" steht die erste Pantarei-Stimme.
- Die Texte stehen in `marke.ts` (`stimmen`), jede mit dem Angebot, um das es geht.
  Sie sind **woertlich** uebernommen, auch Schreibweise und Zeichensetzung — so von
  Gabriel entschieden.

**Sonstiges**
- Startkonfiguration `caro-vorschau` (Port 4322) fuer die Vorschau des gebauten Stands.
- Das inbewe-Logo fuer eine kuenftige Rubrik „Partner*innen" liegt in `Bildmaterial/`,
  ist aber noch nicht eingebaut.

## v0.5.0 — 2026-07-26

Rueckmeldung von Gabriel: Bildausschnitte, ein Solo-Foto bei „Ueber mich", Knopf-Hover.

**Knoepfe werden beim Zeigen tiefer statt schwarz**
- Neue Token `--farbe-still-dunkel` (#5C5169) und `--farbe-wild-dunkel` (#8A4A2E),
  angesprochen ueber `--akzent-dunkel`. Der bisherige Wechsel auf `--farbe-tinte` sprang
  von 5.47:1 auf 14.23:1 Kontrast — der lavendelfarbene Knopf sah dabei aus, als waere er
  kaputtgegangen. Jetzt 7.09:1: spuerbar dunkler, erkennbar dieselbe Farbe.
- Gilt fuer `.knopf`, `.knopf--still` und den Textlink `.weiter`.

**Bildausschnitte**
- Jedes Bild bekommt ein bewusstes `object-position`. Vorher schnitt der Browser mittig,
  wodurch bei den Wegkarten (4/3 aus hochformatigen Fotos, nur 640 von 1280 Bildpunkten
  Hoehe bleiben) Koepfe wegfielen und Hosenbeine das Bild fuellten.
- Playfight-Auftakt: Das Querformat verliert im Bogen die Haelfte seiner Breite. Mittig
  geschnitten fiel Caroline vollstaendig aus dem Bild — mit 62 % sind beide Gesichter drin.
- `Wegkarte.astro` hat dafuer den neuen Regler `bildPosition`.

**Fotos neu zugeordnet**
- Die Ueber-mich-Sektion der Startseite zeigte ein Gruppenbild neben „Ich bin Caroline."
  Dort steht jetzt das einzige Foto, auf dem Caroline allein ist.
- Damit dadurch kein Bild doppelt auf einer Seite landet: Auftakt der Startseite jetzt
  `haende-halten` (Caroline lacht), Wegkarte Pantarei `beruehrung-stehend`.
- Neue Ordnung: **Jede Wegkarte zeigt das Bild der Seite, zu der sie fuehrt.** Geprueft:
  keine Seite verwendet ein Foto zweimal.

**Vorschaubild fuers Teilen**
- Masse werden jetzt aus dem Bild abgeleitet statt fest eingetragen. Die Angabe lautete
  1200x630, die erzeugte Datei war real 853x900 — Astro vergroessert nie ueber die
  Quellaufloesung hinaus. Jetzt stimmen `<meta>` und Datei nachweislich ueberein.
- Der Schnitt sitzt oben statt mittig; vorher waere Carolines Gesicht am Kinn abgeschnitten.

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
