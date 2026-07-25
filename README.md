# Website Caro — Pantarei & Playfight

Statische Website, gebaut mit Astro 5. Ausgabe ist reines HTML, kein Server noetig.

## Loslegen

```bash
npm install
npm run dev      # http://localhost:4321
```

## Bauen

```bash
npm run build    # erzeugt dist/
npm run preview  # zeigt den Bau lokal an
```

## Was wo geaendert wird

Es gibt **zwei** Stellen, an denen sich etwas aendert. Sonst nirgends.

| Was du aendern willst | Datei |
|---|---|
| Name, Claim, E-Mail, Orte, Preise, Termine, Links | `src/config/marke.ts` |
| Farben und Schriften (CI) | `src/styles/ci.css` |

Alles, was noch von Caro kommen muss, steht in `marke.ts` mit dem Praefix
`PLATZHALTER:` und erscheint auf der Seite sichtbar markiert. Nichts davon ist geraten.

## Vor dem Livegang

1. Impressum und Datenschutzerklaerung mit echten Angaben fuellen
   (`src/pages/impressum.astro`, `src/pages/datenschutz.astro`)
2. Schriftliche Einwilligung aller auf den Fotos erkennbaren Personen einholen
3. Titel „Heilpraktikerin fuer Psychotherapie" nur setzen, wenn die Erlaubnis vorliegt
4. Alle `PLATZHALTER:`-Werte in `src/config/marke.ts` ersetzen

## Struktur

```
src/
├─ config/     marke.ts (Inhalte-Tauschstelle) · version.ts (Single Source of Truth)
├─ styles/     ci.css (Farben/Schriften) · basis.css (Raster, Typo, Bauteile)
├─ layouts/    Grundgeruest.astro
├─ components/ Kopfzeile · Fusszeile · Zeilenleiter · Knopf · Abschnitt · Platzhalter
├─ assets/     bilder/ — Originalfotos, Astro erzeugt daraus WebP
└─ pages/      index · pantarei · playfight · ueber-mich · kontakt · impressum · datenschutz
```
