/**
 * Prueft die GEBAUTE Ausgabe in `dist/` auf zwei Fehlerarten, die `astro check` nicht
 * sehen kann, weil es Typen prueft und nicht das Ergebnis:
 *
 *   1. Interne Verweise ohne den Unterordner-Pfad. Lokal laeuft die Seite mit Base "/",
 *      unter GitHub Pages mit "/caro-pantarei". Ein per Textverkettung gebauter Pfad
 *      ergibt dort "/caro-pantareisitemap-index.xml" — und niemand merkt es, weil lokal
 *      alles stimmt. Genau dieser Fehler ist am 2026-07-25 passiert.
 *
 *   2. Interne Verweise, deren Ziel es gar nicht gibt (Tippfehler in einem href).
 *
 * Aufruf:  node skripte/pruefe-links.mjs
 * Erwartet BASE_PATH in der Umgebung; ohne den Wert wird "/" angenommen.
 * Beendet sich mit Code 1, sobald etwas nicht stimmt — damit der Deploy stoppt.
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const AUSGABE = 'dist';
const BASE_ROH = process.env.BASE_PATH ?? '/';

/**
 * BASE_PATH muss ein Web-Pfad sein, kein Dateipfad.
 *
 * Warum diese Pruefung existiert: Git Bash unter Windows verwandelt ein unquotiertes
 * `BASE_PATH=/caro-pantarei` still in `C:/Program Files/Git/caro-pantarei`. Der Waechter
 * meldete daraufhin 85 kerngesunde Links als kaputt. Ein Pruefwerkzeug, das grundlos
 * Alarm schlaegt, wird beim naechsten Mal ignoriert — deshalb bricht es hier lieber ab,
 * statt zu raten.
 */
if (!/^\/[A-Za-z0-9._~\-/]*$/.test(BASE_ROH)) {
  console.error(`[Caro-Website] [ERROR] BASE_PATH sieht nicht wie ein Web-Pfad aus: "${BASE_ROH}"`);
  console.error('  Erwartet wird "/" oder etwas wie "/caro-pantarei".');
  console.error('  Unter Git Bash den Wert quoten:  BASE_PATH="/caro-pantarei" npm run pruefe:links');
  console.error('  In PowerShell:  $env:BASE_PATH=\'/caro-pantarei\'; npm run pruefe:links');
  process.exit(1);
}

const BASE = BASE_ROH.replace(/\/$/, ''); // "/caro-pantarei" oder ""

/** Alle Dateien unterhalb eines Ordners, rekursiv. */
async function alleDateien(ordner) {
  const eintraege = await readdir(ordner, { withFileTypes: true });
  const ergebnis = [];
  for (const eintrag of eintraege) {
    const voll = path.join(ordner, eintrag.name);
    if (eintrag.isDirectory()) ergebnis.push(...(await alleDateien(voll)));
    else ergebnis.push(voll);
  }
  return ergebnis;
}

/** Existiert das Ziel eines internen Verweises in der gebauten Ausgabe? */
async function zielExistiert(ziel) {
  const ohneBase = BASE && ziel.startsWith(BASE) ? ziel.slice(BASE.length) : ziel;
  const rein = ohneBase.split(/[?#]/)[0] || '/';
  const kandidaten = [
    path.join(AUSGABE, rein),
    path.join(AUSGABE, rein, 'index.html'),
    path.join(AUSGABE, `${rein}.html`),
  ];
  for (const k of kandidaten) {
    if (!existsSync(k)) continue;
    const s = await stat(k);
    if (s.isFile()) return true;
    if (s.isDirectory() && existsSync(path.join(k, 'index.html'))) return true;
  }
  return false;
}

if (!existsSync(AUSGABE)) {
  console.error(`[Caro-Website] [ERROR] Ordner "${AUSGABE}" fehlt. Erst "npm run build" laufen lassen.`);
  process.exit(1);
}

const dateien = (await alleDateien(AUSGABE)).filter((d) => d.endsWith('.html'));
const ohneBase = [];
const insLeere = [];
let geprueft = 0;

for (const datei of dateien) {
  const inhalt = await readFile(datei, 'utf8');
  const treffer = inhalt.matchAll(/(?:href|src)="(\/[^"]*)"/g);

  for (const [, ziel] of treffer) {
    if (ziel.startsWith('//')) continue; // protokollrelative Adresse, kein interner Pfad
    geprueft++;

    if (BASE && !ziel.startsWith(`${BASE}/`) && ziel !== BASE) {
      ohneBase.push(`${path.relative(AUSGABE, datei)}  →  ${ziel}`);
      continue;
    }
    if (!(await zielExistiert(ziel))) {
      insLeere.push(`${path.relative(AUSGABE, datei)}  →  ${ziel}`);
    }
  }
}

const einmalig = (liste) => [...new Set(liste)];
const fehlt = einmalig(ohneBase);
const tot = einmalig(insLeere);

console.log(
  `[Caro-Website] [INFO] ${geprueft} interne Verweise in ${dateien.length} Seiten geprueft (Base: "${BASE || '/'}")`,
);

if (fehlt.length) {
  console.error(`\n[Caro-Website] [ERROR] ${fehlt.length} Verweis(e) ohne Unterordner-Pfad:`);
  for (const z of fehlt) console.error(`  ${z}`);
  console.error('  → Interne Links immer ueber pfad() aus src/config/marke.ts bauen,');
  console.error('    nie per Textverkettung mit import.meta.env.BASE_URL.');
}

if (tot.length) {
  console.error(`\n[Caro-Website] [ERROR] ${tot.length} Verweis(e) zeigen ins Leere:`);
  for (const z of tot) console.error(`  ${z}`);
}

if (fehlt.length || tot.length) process.exit(1);

console.log('[Caro-Website] [INFO] Alle internen Verweise in Ordnung.');
