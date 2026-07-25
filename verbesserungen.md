# Verbesserungen
Stand: 2026-07-25 (Runde 1 ausgewertet und umgesetzt, Fokus: alles)

> Umgesetzt in **v0.3.0**: V1 (technischer Teil), V4, V5, V6, V7, V8, V9, V10 sowie die
> Ideen I2 und I3. Offen geblieben: V2, der personenbezogene Teil von V1, V3 und V11.

## Kernfunktionen (Pruefliste — jede Runde erneut abfahren)

1. **Startseite empfaengt** — erwartet: Willkommen, die zwei Wege, Kurzportraet, ein Weg zum Kontakt · zuletzt: laeuft (2026-07-25, live)
2. **Navigation** — erwartet: alle Seiten erreichbar, aktuelle Seite markiert, auch unter dem Unterordner-Pfad · zuletzt: laeuft (2026-07-25, live auf allen 6 Menuepunkten geprueft)
3. **Pantarei-Seite** — erwartet: Methode, Ablauf in drei Schritten, Rahmen, Anfrage-Knopf · zuletzt: laeuft (2026-07-25)
4. **Playfight-Seite** — erwartet: Methode, die vier Rituale, Abgrenzung „was es nicht ist", Termine · zuletzt: laeuft (2026-07-25)
5. **Ueber-mich-Seite** — erwartet: Caros Text vollstaendig, Zeilenleiter-Bloecke · zuletzt: laeuft (2026-07-25)
6. **Kontaktweg** — erwartet: ein Klick fuehrt zu einer E-Mail an Caro · zuletzt: nicht pruefbar (2026-07-25) — E-Mail-Adresse fehlt noch, erscheint korrekt als offener Punkt statt als toter Link
7. **Offene Angaben sichtbar** — erwartet: nichts Geratenes, jede fehlende Angabe markiert · zuletzt: laeuft (2026-07-25)
8. **Handy-Menue** — erwartet: oeffnet, schliesst, reagiert auf Escape, `aria-expanded` stimmt · zuletzt: laeuft (2026-07-25)
9. **Live erreichbar, nicht auffindbar** — erwartet: alle Seiten HTTP 200, `noindex` + `robots.txt`-Verbot · zuletzt: laeuft (2026-07-25)
10. **Unbekannte Adresse** — erwartet: eigene Seite in Caros Gestaltung mit Weg zurueck · zuletzt: laeuft (2026-07-25, v0.3.0) — `dist/404.html` liegt dort, wo GitHub Pages sie sucht
11. **Kontaktformular** — erwartet: solange kein Versanddienst hinterlegt ist, ist es sichtbar aber ABGESCHALTET und kann nichts verschlucken · zuletzt: laeuft (2026-07-25, `fieldset` disabled, `action` leer)
12. **Handy-Breite** — erwartet: kein waagerechtes Ueberlaufen auf 375 px, keine Seite ausgenommen · zuletzt: laeuft (2026-07-25, alle 8 Seiten, Ueberlauf 0)
13. **Link-Waechter** — erwartet: gruen beim gesunden Stand, rot bei fehlendem Unterordner-Pfad, rot bei totem Link, Abbruch bei unsinnigem `BASE_PATH` · zuletzt: laeuft (2026-07-25, alle vier Faelle einzeln gegengeprueft)

## Offen

- [ ] **V1** (A) Personenbezogene Pflichtangaben eintragen — Rest ist erledigt
      Stand v0.3.0: Die Datenschutzerklaerung ist ausformuliert (Hosting, US-Uebermittlung,
      Kontaktaufnahme, lokale Entwurfssicherung, Betroffenenrechte), das Impressum hat alle
      Pflichtfelder mit Hinweistext. **Offen bleiben nur die Angaben, die Caroline liefern
      muss** — Anschrift, Rechtsform/Umsatzsteuer, E-Mail, Telefon, Berufsbezeichnung,
      Bildnachweis. Die werden nicht geraten, sondern erscheinen sichtbar markiert.
      Gefahr: Eine geschaeftliche Seite ohne Anbieterangaben ist abmahnfaehig — auch wenn
      niemand sie findet.
      Beleg: `src/pages/impressum.astro` zaehlt die offenen Pflichtfelder selbst und nennt
      die Zahl auf der Seite · Aufwand: S (sobald Caros Angaben da sind) · Risiko: gering
      Zusatz: Beide Texte sind fachlich sorgfaeltig, aber keine anwaltliche Pruefung —
      das steht auch sichtbar auf beiden Seiten.

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

- **I4** (Spaeter) Redaktionsbereich, damit Caro Texte selbst aendert — Aufwand: L
      **Von Gabriel am 2026-07-25 ausdruecklich vorgemerkt („unbedingt merken").**
      Nutzen: Termine und Preise aendern sich; jede Aenderung geht heute ueber Gabriel.
      Bedarf: Alle veraenderlichen Angaben stehen in `src/config/marke.ts` — sie zu tauschen
      ist ein Code-Eingriff. `playfight.termine` ist eine Liste, die regelmaessig wachsen wird.
      Abgrenzung: erst sinnvoll, wenn die Seite steht und Caro sie wirklich pflegen will;
      Muster liegt fertig im Achievewear-Blog (Sveltia CMS, dort auf `0.170.2` gepinnt,
      weil die Bibliothek noch vor Version 1 steht).

- **I2** angenommen am 2026-07-25 → umgesetzt in v0.3.0 (`skripte/pruefe-links.mjs`,
      `npm run pruefe:links`, laeuft im Deploy zwischen Bau und Veroeffentlichung)

- **I3** angenommen am 2026-07-25 → umgesetzt in v0.3.0
      (`src/components/Kontaktformular.astro`; abgeschaltet, bis in
      `marke.formular.endpunkt` ein Versanddienst steht)

- **I1** bleibt offen — von Gabriel am 2026-07-25 nicht angefordert.

## Abgelehnt

(noch nichts)

## Erledigt

- **V4** Eigene 404-Seite — erledigt in v0.3.0 (`src/pages/404.astro`; Astro legt daraus
      `dist/404.html` an, genau dort sucht GitHub Pages sie)
- **V5** Leitfarbe `#7D7090` → `#6E617F` — erledigt in v0.3.0
      (4.38:1 / 3.89:1 → 5.47:1 / 4.85:1, Farbton unveraendert)
- **V6** Etikett „offen" `#B8863C` → `#8C6228` — erledigt in v0.3.0 (2.92:1 → 4.89:1)
- **V7** Vorschaubild fuers Teilen — erledigt in v0.3.0 (`og:image` 1200x630 aus Caros
      Einzelfoto, dazu `og:url`, `og:image:alt` und `twitter:card`)
- **V8** Bild-Doppelbestand — erledigt in v0.3.0 als Regel in der CLAUDE.md:
      `src/assets/bilder/` ist die einzige Quelle, `Bildmaterial/` die unangetastete Ablage
- **V9** Tag am ausgelieferten Stand — erledigt mit v0.3.0
- **V10** `marke.claim` — erledigt in v0.3.0: der zu nah am Vorbild liegende Satz ist
      entfernt, das Feld ist jetzt ein offener Punkt fuer Caro
- **V1 (technischer Teil)** Datenschutzerklaerung ausformuliert, Impressum
      vervollstaendigt — erledigt in v0.3.0; personenbezogene Angaben bleiben offen
