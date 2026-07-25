/**
 * TAUSCHSTELLE 1 von 2 — alle Inhalte, die sich beim Klienten aendern.
 * (Tauschstelle 2 sind die Farben in `src/styles/ci.css`.)
 *
 * Regel: Was Caro noch nicht geliefert hat, wird NICHT geraten. Es bekommt das Praefix
 * `PLATZHALTER:` und erscheint auf der Seite sichtbar als offener Punkt. So kann nichts
 * still Falsches online gehen.
 */

/**
 * Solange `true`, ist die Seite ein Entwurf zur Abstimmung:
 * Sie traegt ein Verbotsschild fuer Suchmaschinen (`noindex` + `robots.txt`) und ist
 * damit nur ueber die Adresse erreichbar, die man kennt.
 *
 * Auf `false` stellen, wenn die Seite wirklich live geht — und zwar erst, wenn
 * Impressum, Datenschutz und die Bildfreigaben stehen.
 */
export const ENTWURF = true;

/** Praefix, an dem die Oberflaeche einen offenen Punkt erkennt. */
export const PLATZHALTER = 'PLATZHALTER:';

/** Kurz-Helfer zum Setzen eines offenen Punkts. */
const offen = (was: string) => `${PLATZHALTER} ${was}`;

/** Ist dieser Wert noch ein offener Punkt? */
export function istOffen(wert: string | undefined | null): boolean {
  return typeof wert === 'string' && wert.startsWith(PLATZHALTER);
}

/** Text ohne das Praefix — fuer die Anzeige im Platzhalter-Bauteil. */
export function ohnePraefix(wert: string): string {
  return wert.replace(PLATZHALTER, '').trim();
}

export const marke = {
  // --- Identitaet ----------------------------------------------------------
  /** TODO: von Caro bestaetigen lassen. Aktuell Annahme aus dem Briefing. */
  name: 'Caroline Schulz',
  vorname: 'Caroline',
  /**
   * Berufsbezeichnung. BEWUSST offen: Der Titel „Heilpraktikerin fuer Psychotherapie"
   * darf erst gefuehrt werden, wenn die Erlaubnis des Gesundheitsamts vorliegt.
   * Ausbildung allein reicht nicht.
   */
  rolle: offen('Berufsbezeichnung — erst eintragen, wenn die Heilpraktiker-Erlaubnis vorliegt'),
  /**
   * Der Satz unter dem Namen. BEWUSST offen statt vorbelegt: Der erste Entwurf trug
   * „Innehalten. Spueren. In Verbindung kommen." — das lag zu dicht an
   * „Innehalten. Spueren. Veraendern." von weber-jessica.de, einer Seite, die Caro selbst
   * als Vorbild genannt hat und deren Publikum sich mit ihrem ueberschneidet.
   * Ein eigener Satz muss von Caro kommen.
   */
  claim: offen('Ein Satz unter dem Namen — in Caros eigenen Worten'),

  // --- Kontakt -------------------------------------------------------------
  kontakt: {
    email: offen('E-Mail-Adresse'),
    telefon: offen('Telefonnummer (oder streichen, wenn nicht gewünscht)'),
    anschrift: offen('Anschrift für das Impressum'),
    rechtsform: offen('Rechtsform / Umsatzsteuer-Angabe'),
  },

  /**
   * Kontaktformular. Eine statische Website hat keinen Server, der eine Nachricht
   * verschicken koennte — dafuer braucht es einen Versanddienst, der eine Adresse zum
   * Hinschicken liefert (z. B. Formspree oder Web3Forms, beide mit Gratis-Kontingent).
   *
   * Solange `endpunkt` offen ist, wird das Formular SICHTBAR, aber ABGESCHALTET
   * gezeigt. Grund: Ein Formular, das versendet aussieht und nichts verschickt,
   * verschluckt echte Anfragen still — das ist schlimmer als gar keins.
   */
  formular: {
    endpunkt: offen('Adresse des Versanddienstes (Formspree oder Web3Forms)'),
  },

  // --- Pantarei ------------------------------------------------------------
  pantarei: {
    ort: offen('Wo finden die Sitzungen statt?'),
    tage: offen('An welchen Tagen bietest Du Sitzungen an?'),
    dauer: offen('Wie lange dauert eine Sitzung?'),
    preis: offen('Was kostet eine Sitzung?'),
    kennenlernen: offen('Gibt es ein Kennenlern-Angebot? Zu welchen Bedingungen?'),
  },

  // --- Playfight -----------------------------------------------------------
  playfight: {
    ort: offen('Wo finden die Playfight-Abende statt?'),
    rhythmus: offen('Wie oft — wöchentlich, monatlich, als Tagesevent?'),
    preis: offen('Was kostet die Teilnahme?'),
    /** Leer lassen, solange keine Termine feststehen. */
    termine: [] as string[],
    anmeldung: offen('Link zur Online-Registration'),
  },

  // --- Weitere Angebote ----------------------------------------------------
  weitereAngebote: offen('Was gehört unter „Weitere Angebote"? Inhalt noch offen'),
} as const;

/**
 * Baut interne Links so, dass sie auch unter einem Unterordner-Deploy stimmen
 * (z. B. GitHub Pages mit BASE_PATH=/caro-pantarei).
 * Nie ein nacktes "/pantarei" schreiben — das bricht dort still.
 */
export function pfad(ziel: string): string {
  const basis = import.meta.env.BASE_URL;
  const links = basis.endsWith('/') ? basis.slice(0, -1) : basis;
  const rechts = ziel.startsWith('/') ? ziel : `/${ziel}`;
  return `${links}${rechts}` || '/';
}

/** Die Navigation — eine Quelle fuer Kopfzeile und Fusszeile. */
export const navigation = [
  { titel: 'Start', ziel: '/' },
  { titel: 'Pantarei', ziel: '/pantarei' },
  { titel: 'Playfight', ziel: '/playfight' },
  { titel: 'Über mich', ziel: '/ueber-mich' },
  { titel: 'Kontakt', ziel: '/kontakt' },
] as const;
