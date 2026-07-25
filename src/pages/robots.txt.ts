import type { APIRoute } from 'astro';
import { ENTWURF } from '../config/marke';

/**
 * Solange die Seite ein Entwurf ist, wird Suchmaschinen das Einlesen untersagt.
 * Das ist kein Zugriffsschutz — wer die Adresse hat, kommt hinein —, aber die Seite
 * taucht nirgends in Suchergebnissen auf. Umgeschaltet wird das ueber `ENTWURF`
 * in `src/config/marke.ts`.
 */
export const GET: APIRoute = () => {
  const inhalt = ENTWURF
    ? 'User-agent: *\nDisallow: /\n'
    : 'User-agent: *\nAllow: /\n';

  return new Response(inhalt, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
