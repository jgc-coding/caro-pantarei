# Weitermachen — Caro Pantarei Website

Stand: 2026-10-21 · Version **v0.7.0** · live unter
https://jgc-coding.github.io/caro-pantarei/ (auf `noindex`, nur ueber die Adresse erreichbar)

## Stand

Session 2026-10-21 (Kurzauftraege vom Handy), alles ausgeliefert und live geprueft:

- **v0.6.1** dritte Stimme (Toni) auf der Startseite, Absaetze erhalten. Die Stimmen
  stehen jetzt in zwei hoehengleichen Spalten (`columns`) statt im Raster.
- **Caros Drive-Ordner „Playfight Bilder HD"** heruntergeladen: 27 Kamerafotos liegen in
  `Bildmaterial/Playfight HD/` (nur lokal, siehe CLAUDE.md). Fuenf der bisherigen
  Website-Bilder waren kleine Kopien daraus. Ein NEUES Solo-Foto von Caro ist nicht dabei:
  Das einzige Bild von ihr allein (DSCF6269) ist das bekannte `caro-sitzend`.
- **v0.7.0** Playfight-Auftakt und Playfight-Wegkarte zeigen `stirn-an-stirn.jpg`
  (DSCF6156, von Gabriel freigegeben). Alle Fotos sind HD-Fassungen (1200 x 1800, ohne
  EXIF), `widths` reichen bis 1200 px. Vorschaubild beim Teilen jetzt 1200 x 900.
- `begegnung-zwei.jpg` geloescht (mit Gabriels Okay); das Original DSCF6131 liegt weiter
  in `Bildmaterial/Playfight HD/`.
- Verworfen: DSCF6042 fuer die Rituale — im Bogen bleibt unten zu viel leerer Boden.
- Neu in `verbesserungen.md`: **V13** (kein Seiten-Symbol im Browser-Tab).

Rueckkehrpunkt vor dem Aufraeumen: `68a6b14`. Tags `v0.6.1` und `v0.7.0` liegen auf GitHub.
Frueher: v0.1.0 bis v0.6.0 — Details im `CHANGELOG.md`.

## Aktuelle Stolperfallen

- **Nach jedem Deploy hart neu laden** (Strg+Umschalt+R), sonst zeigt der Browser die
  alte CSS-Datei und Aenderungen scheinen zu fehlen.
- **Sichtpruefung:** gebauten Stand per `npm run preview -- --port 4322` starten, dann
  der MCP-Browser „handy" (Playwright, 412 x 839 bzw. `browser_resize` 1280 x 900).
  Vorher `data-animiert` am `<html>` entfernen. Ein Element-Screenshot des atmenden
  Bilds (`img.atmet`) scheitert mit „element is not stable" — dann den Viewport
  fotografieren.
- Live-Check nach einem Deploy: `gh run watch <id> --repo jgc-coding/caro-pantarei
  --exit-status`, dann die Seite per `curl` auf Stichproben pruefen.

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
6. **V13** — Seiten-Symbol (Wellen-Marke als SVG), kleine Sache, jederzeit machbar.
7. **V3** — Astro 7 beobachten, nicht ungefragt springen.
8. **I1** — Uebersicht „Was noch fehlt" fuer Caro; von Gabriel bisher nicht angefordert.
9. **I4** — Redaktionsbereich (Sveltia CMS), von Gabriel ausdruecklich vorgemerkt, aber
   erst sinnvoll, wenn die Seite steht.
10. **Domain caroline-schulz.com** (Caros Entscheidung vom 2026-10-28, ersetzt
    klarverbunden.com). Liegt seit 2026-10-15 in Caros Konto bei united-domains, nichts
    kaufen. Stand 2026-10-28: `@` und `www` zeigen per A-Record auf die Parkseite
    89.31.143.90, MX liegt bei united-domains. Claude darf sich dort nicht selbst anmelden;
    die Eintraege setzt Gabriel (oder Gabriel meldet Chrome an, dann traegt Claude ein).
    Eintraege: die beiden Parkseiten-A-Records ERSETZEN (nicht ergaenzen), dann vier
    A-Records `@` auf 185.199.108.153 / .109.153 / .110.153 / .111.153 und CNAME `www` auf
    `jgc-coding.github.io`. MX und Nameserver NICHT anfassen; eine aktive
    „Domain-Weiterleitung" ausschalten. Erst wenn `Resolve-DnsName` die GitHub-Adressen
    liefert: in `deploy.yml` `SITE_URL=https://caroline-schulz.com` und `BASE_PATH=/`,
    Custom Domain per `gh api repos/jgc-coding/caro-pantarei/pages -X PUT -f
    cname=caroline-schulz.com` setzen (eine `public/CNAME` ignoriert GitHub bei
    Workflow-Deploys), HTTPS erzwingen, sobald das Zertifikat da ist. Vorher den
    Pflichttest „Bauen wie auf dem Server" mit den neuen Werten. `ENTWURF` bleibt `true`.
    Die Zugangsdaten stehen nur im Chat, nie im Repo.
11. **Rubrik Partner*innen** — Logo liegt als `Bildmaterial/partner-inbewe-logo.jpg`
    (JPG 1220x744 mit weissem Kasten). Vorschlag an Gabriel: ruhige Reihe unten auf
    „Über mich". Wartet auf Gabriels Nachlieferung, siehe unten.

## Offen

Nichts halb Gebautes. Alle fehlenden Werte stehen sichtbar markiert in
`src/config/marke.ts` (Praefix `PLATZHALTER:`); das Impressum zaehlt seine offenen
Pflichtfelder selbst.

## Was Gabriel selbst tun muss

Seit 19.09.2026 stehen diese Punkte hier statt auf der Hub-Tafel.

- [ ] [blockiert Claude] Domain caroline-schulz.com: bei united-domains anmelden und die Eintraege aus Schritt 10 setzen, oder Chrome am PC anmelden und Claude eintragen lassen (seit 2026-10-28)
- [ ] Caro bitten, ihr united-domains-Passwort zu aendern, sobald die Domain laeuft — es stand im Chat (seit 2026-10-28)
- [ ] [blockiert Claude] Partner*innen: Von Caro holen, wer inbewe ist, Link, Logo als PNG/SVG mit durchsichtigem Hintergrund, Einverstaendnis von inbewe, weitere Partner*innen (seit 2026-10-17)
- [ ] Version 0.7.0 am Handy anschauen: Startseite „Erfahrungen" (Toni) und Playfight-Seite oben, vorher neu laden (seit 2026-10-21)
- [ ] ZIP „Playfight Bilder HD-…zip" (317 MB) im Download-Ordner löschen, wird nicht mehr gebraucht (seit 2026-10-21)
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
