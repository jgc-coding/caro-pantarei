/**
 * TAUSCHSTELLE 1 von 2 — alle Inhalte, die sich beim Klienten aendern.
 * (Tauschstelle 2 sind die Farben in `src/styles/ci.css`.)
 *
 * Regel: Was Caro noch nicht geliefert hat, wird NICHT geraten. Es bekommt das Praefix
 * `PLATZHALTER:` und erscheint auf der Seite sichtbar als offener Punkt. So kann nichts
 * still Falsches online gehen.
 */

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
  claim: 'Innehalten. Spüren. In Verbindung kommen.',

  // --- Kontakt -------------------------------------------------------------
  kontakt: {
    email: offen('E-Mail-Adresse'),
    telefon: offen('Telefonnummer (oder streichen, wenn nicht gewünscht)'),
    anschrift: offen('Anschrift für das Impressum'),
    rechtsform: offen('Rechtsform / Umsatzsteuer-Angabe'),
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
