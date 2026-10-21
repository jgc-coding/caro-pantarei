# Weitermachen — Caro Pantarei Website

Stand: 2026-10-21 · Version **v0.6.1** · live unter
https://jgc-coding.github.io/caro-pantarei/ (auf `noindex`, nur ueber die Adresse erreichbar)

## Stand

Session 2026-10-21 (Kurzauftrag vom Handy):

- **v0.6.1** dritte Stimme (Toni) auf der Startseite, Absaetze erhalten; die Stimmen
  stehen jetzt in zwei hoehengleichen Spalten statt im Raster.
- **Drive-Ordner „Playfight Bilder HD"** ist erreichbar, aber NUR ueber Gabriels Chrome
  (Google-Konto angemeldet, Ordner ist „Für mich freigegeben"). Ohne Anmeldung antwortet
  Google mit 401 — `curl`/WebFetch kommen nicht dran. Inhalt: 27 JPGs DSCF5905 bis
  DSCF6444, Playfight-Workshop mit mehreren Personen. Noch nichts heruntergeladen.

Session 2026-10-17: Caros erste Rueckmeldungen seit dem Entwurf eingearbeitet und ausgeliefert.

- **v0.6.0** Rubrik „Erfahrungen": zwei woertliche Stimmen (Katharina, Sòi) auf der
  Startseite, Katharina zusaetzlich auf der Pantarei-Seite nach „Nachspüren". Neues
  Bauteil `Stimme.astro`, Texte in `marke.ts` (`stimmen`). Schreibweise bewusst NICHT
  korrigiert — Gabriels Entscheidung. Einverstaendnisse liegen laut Caro vor.
- Antwort an Caro zur Domain **klarverbunden.com** geschrieben (bei united-domains
  registriert, inkl. Mail). Umstellung wartet auf die DNS-Eintraege, siehe Schritt 9.
- inbewe-Logo fuer eine kuenftige Rubrik „Partner*innen" in `Bildmaterial/` abgelegt.
  Wer inbewe ist, war per Websuche nicht zu finden.

Frueher: v0.1.0 Aufbau, v0.2.0 Deploy, v0.3.x `/improve`-Runde, v0.4.0 Design-Finesse,
v0.5.0 Bildausschnitte — Details im `CHANGELOG.md`.

Ausgeliefert und geprueft: GitHub-Build gruen, live zeigt der Fuss v0.6.0, beide Stimmen
stehen auf der Seite, `noindex` und `robots.txt` greifen weiter. Tag `v0.6.0` liegt auf
GitHub. Rueckkehrpunkt vor dieser Session: `4316ece`.

## Aktuelle Stolperfallen

- **Nach jedem Deploy hart neu laden** (Strg+Umschalt+R), sonst zeigt der Browser die
  alte CSS-Datei und Aenderungen scheinen zu fehlen.
- **Commit-Nachrichten und Tag-Texte ueber eine Datei geben** (`git commit -F <datei>`).
- **Sichtpruefung ohne sichtbare Browser-Pane:** gebauten Stand ueber `caro-vorschau`
  starten, dann Headless-Chrome mit `--force-prefers-reduced-motion` und
  `--virtual-time-budget=4000` fotografieren; Ausschnitt per `System.Drawing` zuschneiden.
  Hat diese Session zuverlaessig funktioniert, die Pane-Screenshots nicht.
- GitHub baut ab 19.10.2026 auf Ubuntu 26 (Hinweis im Workflow-Lauf). Scheitert danach
  ein Deploy ohne Code-Aenderung, zuerst daran denken.
- Live-Check nach einem Deploy: `gh run watch <id> --repo jgc-coding/caro-pantarei
  --exit-status`, dann die Seite per `curl` auf Stichproben pruefen.

## Naechste Schritte (Claude)

Beschreibungen und Belege stehen in `verbesserungen.md` — hier nur die Nummern.

0. **Playfight-Fotos aus Drive** — nach Gabriels Freigabe zum Herunterladen: per Chrome
   holen, unveraendert nach `Bildmaterial/`, die besten nach `src/assets/bilder/`
   (Regeln zu Ausschnitt und Wegkarte in der CLAUDE.md). Fremde Personen im Bild → V2.
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
9. **Domain klarverbunden.com** (Caro, bei united-domains inkl. Mail) — sobald dort die
   Eintraege stehen: `public/CNAME` anlegen, in `deploy.yml` `SITE_URL` und `BASE_PATH=/`
   setzen, im Repo die Custom Domain eintragen, HTTPS erzwingen. Eintraege: vier A-Records
   `@` auf 185.199.108.153 / .109.153 / .110.153 / .111.153, CNAME `www` auf
   `jgc-coding.github.io`. Mail-Eintraege (MX) und Nameserver NICHT anfassen; die
   „Domain-Weiterleitung" von united-domains ist der falsche Weg. `ENTWURF` bleibt dabei
   `true`. Danach den Pflichttest „Bauen wie auf dem Server" mit den neuen Werten.
10. **Rubrik Partner*innen** — Logo liegt als `Bildmaterial/partner-inbewe-logo.jpg`
    (JPG 1220x744 mit weissem Kasten). Vorschlag an Gabriel: ruhige Reihe unten auf
    „Über mich". Wartet auf Gabriels Nachlieferung, siehe unten.

## Offen

Nichts halb Gebautes. Alle fehlenden Werte stehen sichtbar markiert in
`src/config/marke.ts` (Praefix `PLATZHALTER:`); das Impressum zaehlt seine offenen
Pflichtfelder selbst.

## Was Gabriel selbst tun muss

Seit 19.09.2026 stehen diese Punkte hier statt auf der Hub-Tafel.

- [ ] [blockiert Claude] Domain: Von Caro klären, wer die Eintraege bei united-domains setzt, ob die Adresse mit oder ohne www laufen soll, und welche E-Mail-Adresse sie angelegt hat (seit 2026-10-17)
- [ ] [blockiert Claude] Partner*innen: Von Caro holen, wer inbewe ist, Link, Logo als PNG/SVG mit durchsichtigem Hintergrund, Einverstaendnis von inbewe, weitere Partner*innen (seit 2026-10-17)
- [ ] Entwurf mit Caro durchgehen und Rückmeldung einholen (seit 2026-07-26)
- [ ] Bildfreigaben aller erkennbaren Personen einholen - ohne sie bleibt die Seite auf noindex (seit 2026-07-26)
- [ ] Von Caro die offenen Angaben einsammeln: Anschrift, Rechtsform, E-Mail, Telefon, Preise, Orte, Zeiten (seit 2026-07-26)
- [ ] Caro ihren vollen Namen bestätigen lassen: „Caroline Schulz" ist aus dem Briefing geraten und steht ungeprüft im Kopf, im Fuß, in jedem Seitentitel und in der Datenschutzerklärung. Danach das TODO bei `name` in `src\config\marke.ts` entfernen (seit 2026-10-03)
- [ ] Caro fragen, ob die Heilpraktiker-Erlaubnis des Gesundheitsamts vorliegt (seit 2026-07-26)
- [ ] Playfight-Termine und den Link zur Online-Registration von Caro besorgen (seit 2026-07-26)
- [ ] Caro um zwei bis drei Fotos bitten, auf denen sie allein ist (seit 2026-07-26)
- [ ] Mit Caro einen eigenen Claim-Satz und den Inhalt für 'Weitere Angebote' klären (seit 2026-07-26)
- [ ] Claude Rueckmeldung geben (1 Punkte) (seit 2026-09-07)
  - Kommt ein echtes Kontaktformular? (dann Konto bei Formspree oder Web3Forms anlegen)
- [ ] Impressum und Datenschutz anwaltlich gegenlesen lassen, bevor die Seite auffindbar wird (seit 2026-07-26)
