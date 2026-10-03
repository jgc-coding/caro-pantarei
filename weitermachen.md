# Weitermachen — Caro Pantarei Website

Stand: 2026-07-26 · Version **v0.5.0** · live unter
https://jgc-coding.github.io/caro-pantarei/ (auf `noindex`, nur ueber die Adresse erreichbar)

## Stand

Projekt in dieser Session von null aufgebaut und viermal ausgeliefert.

- **v0.1.0** Projekt angelegt (Stufe Produkt), Astro 5, acht Seiten, Farbwelt
  „Lavendel & Leinen" aus Caros eigenem Bildmaterial abgeleitet, Erkennungsmerkmal
  **Zeilenleiter** aus ihrem Schreibrhythmus, zwei Welten `still`/`wild` per `data-welt`.
- **v0.2.0** Deploy nach GitHub Pages, Entwurf gegen Suchmaschinen gesperrt.
- **v0.3.0/0.3.1** Ergebnisse der ersten `/improve`-Runde: Kontraste korrigiert, eigene
  404-Seite, Datenschutz ausformuliert, Impressum vervollstaendigt, Vorschaubild fuers
  Teilen, Link-Waechter (`npm run pruefe:links`), Kontaktformular (abgeschaltet).
- **v0.4.0** Design-Finesse: Wellen-Marke, Atem, sich zeichnende Zeilenleiter-Linie,
  ein kursives Wort je Seite, Mikro-Bewegungen.
- **v0.5.0** Rueckmeldung Gabriel: bewusste Bildausschnitte ueberall, Solo-Foto in der
  Ueber-mich-Sektion, Hover vertieft die Akzentfarbe statt nach Schwarz zu springen.

Recherche-Ergebnis, das im Konzept offen war: „Tangi" ist der Begruender **Matteo Tangi**.

Arbeitsverzeichnis sauber, `main` = `origin/main`, Tag `v0.5.0` zeigt auf den
ausgelieferten Stand.

## Offen

Nichts halb Gebautes. Der Code ist vollstaendig, gepruefft und ausgeliefert — die Seite
wartet ausschliesslich auf Angaben von Caro. Alle fehlenden Werte stehen sichtbar
markiert in `src/config/marke.ts` (Praefix `PLATZHALTER:`); das Impressum zaehlt seine
offenen Pflichtfelder selbst.

## Naechste Schritte (Claude)

Beschreibungen und Belege stehen in `verbesserungen.md` — hier nur die Nummern.

1. **V1** — sobald Caros Angaben da sind: `marke.ts` fuellen. Zwei Dateien, ca. 10 Minuten.
2. **V2** — sobald die Bildfreigaben vorliegen: gemeinsam mit V1 `ENTWURF` in
   `src/config/marke.ts` auf `false` stellen. Vorher nicht.
3. **I3 fertigstellen** — Kontaktformular scharf schalten, sobald eine Versandadresse in
   `marke.formular.endpunkt` steht. Dann zusaetzlich den markierten Absatz zum
   Versanddienst in `src/pages/datenschutz.astro` ergaenzen.
4. **V12** — neue Solo-Fotos einbauen, sobald geliefert; dabei Bildausschnitte und die
   Wegkarten-Zuordnung neu bestimmen (Regeln stehen in der CLAUDE.md).
5. **V11** — Jahreszahl im Fuss, kleine Sache, jederzeit machbar.
6. **V3** — Astro 7 beobachten, nicht ungefragt springen.
7. **I1** — Uebersicht „Was noch fehlt" fuer Caro; von Gabriel bisher nicht angefordert.
8. **I4** — Redaktionsbereich (Sveltia CMS), von Gabriel ausdruecklich vorgemerkt, aber
   erst sinnvoll, wenn die Seite steht.

## Was Gabriel selbst tun muss

Am 19.09.2026 von der Hub-Tafel hierher gezogen. Die Tafel nimmt seither nur
noch, was Gabriel selbst eintraegt oder ausdruecklich beauftragt. Wo oben im
Text von der Hub-Karte oder einem Hub-Sammelpunkt die Rede ist, sind diese
Punkte gemeint.

- [ ] Entwurf mit Caro durchgehen und Rückmeldung einholen (seit 2026-07-26)
- [ ] Bildfreigaben aller erkennbaren Personen einholen - ohne sie bleibt die Seite auf noindex (seit 2026-07-26)
- [ ] Von Caro die offenen Angaben einsammeln: Anschrift, Rechtsform, E-Mail, Telefon, Preise, Orte, Zeiten (seit 2026-07-26)
- [ ] Caro ihren vollen Namen bestätigen lassen: „Caroline Schulz" ist aus dem Briefing geraten und steht ungeprüft im Kopf, im Fuß, in jedem Seitentitel und in der Datenschutzerklärung. Danach das TODO in `src\config\marke.ts:38` entfernen (seit 2026-10-03)
- [ ] Caro fragen, ob die Heilpraktiker-Erlaubnis des Gesundheitsamts vorliegt (seit 2026-07-26)
- [ ] Playfight-Termine und den Link zur Online-Registration von Caro besorgen (seit 2026-07-26)
- [ ] Caro um zwei bis drei Fotos bitten, auf denen sie allein ist (seit 2026-07-26)
- [ ] Mit Caro einen eigenen Claim-Satz und den Inhalt für 'Weitere Angebote' klären (seit 2026-07-26)
- [ ] Claude Rueckmeldung geben (1 Punkte) (seit 2026-09-07)
  - Kommt ein echtes Kontaktformular? (dann Konto bei Formspree oder Web3Forms anlegen)
- [ ] Impressum und Datenschutz anwaltlich gegenlesen lassen, bevor die Seite auffindbar wird (seit 2026-07-26)
- [ ] Klären, ob Caro Klienten-Stimmen zeigen will (Texte plus schriftliche Freigabe) (seit 2026-07-26)

## Aktuelle Stolperfallen

- **Nach jedem Deploy hart neu laden** (Strg+Umschalt+R), sonst zeigt der Browser die
  alte CSS-Datei und Aenderungen scheinen zu fehlen.
- **Commit-Nachrichten mit Anfuehrungszeichen ueber eine Datei geben**
  (`git commit -F <datei>`). Ein `@'...'@`-Block mit `"` darin ist diese Session zweimal
  zerbrochen — beim zweiten Mal landete dabei ein Tag auf dem falschen Commit.
- **Screenshots sind in dieser Umgebung unzuverlaessig**, solange das Chrome-Fenster
  verdeckt ist (Details in der CLAUDE.md). Im Zweifel im Seitenmodell messen statt dem
  Bild zu glauben — Deckkraft, Bildpunkte per Canvas, `getBoundingClientRect`.
- Der Live-Check nach einem Deploy laeuft am schnellsten so: Workflow-Status per
  `gh run list --repo jgc-coding/caro-pantarei --limit 1`, dann die Seite per `curl`
  auf Stichproben pruefen.
