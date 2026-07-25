import pkg from '../../package.json';

/**
 * Single Source of Truth fuer die Version.
 * Gepflegt wird sie ausschliesslich in `package.json` — hier wird sie nur abgeleitet,
 * damit die Zahl nicht an zwei Stellen steht und auseinanderlaufen kann.
 * Sichtbar ist sie im Seitenfuss.
 */
export const VERSION: string = pkg.version;
