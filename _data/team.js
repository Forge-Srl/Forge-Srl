/**
 * Persone del team, disponibili nei template come `data.team`.
 * Griglia "choose your character" della pagina /team/, spenta finché non ci sono
 * avatar pixel art, ruoli e risposte all'intervista (vedi `features.teamMembers`).
 *
 * - `avatar`: percorso relativo ad `assets/images/` (pixel art, PNG quadrato), `null` se manca.
 * - `role`: la "classe" del personaggio.
 * - `skills`: 2-3 abilità mostrate come statistiche (valore da 1 a 5).
 * - `interview`: risposte alle domande della mini-intervista.
 */
const questions = {
  superpotere: 'Il tuo superpotere in una riga',
  stack: 'Lo strumento senza cui non vivi',
  bug: 'Il bug più memorabile che hai risolto',
  offline: 'Cosa fai quando non sei davanti allo schermo',
}

const members = [
  {
    name: '[DA FORNIRE]',
    role: '[DA FORNIRE]',
    avatar: null,
    skills: [
      {l: 'back-end', v: 4},
      {l: 'caffè', v: 5},
    ],
    interview: {
      superpotere: '[DA FORNIRE]',
      stack: '[DA FORNIRE]',
      bug: '[DA FORNIRE]',
      offline: '[DA FORNIRE]',
    },
  },
]

module.exports = {questions, members}
