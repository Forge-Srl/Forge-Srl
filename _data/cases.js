/**
 * Case study e ambiti di progetto, disponibili nei template come `data.cases`.
 * Unica fonte per la pagina /case-study/ e per le card "il successo dei nostri clienti" in home.
 *
 * Finché i contenuti non sono verificati (loghi, liberatoria, numeri, risposte ai questionari)
 * le sezioni che li mostrano restano spente: vedi `_data/features.js`.
 *
 * - `logo`: percorso relativo ad `assets/images/` (passa dal filtro `image`), `null` se manca.
 * - metriche con `n: '—'`: valore ancora in validazione con il cliente.
 * - `interview`: domande della sezione 3 del questionario clienti, con risposta e autore.
 */
const areas = [
  {
    id: 'ai',
    num: '01',
    title: 'AI &amp; Automazione',
    body: "Assistenti conversazionali, automazione dei processi, manutenzione predittiva. L'AI che lavora davvero.",
  },
  {
    id: 'commerce',
    num: '02',
    title: 'E-commerce &amp; Commerce',
    body: 'Piattaforme ad alto traffico, cataloghi enormi, performance sotto pressione. Costruiti per la scala.',
  },
  {
    id: 'piattaforme',
    num: '03',
    title: 'Piattaforme su misura',
    body: 'Back-end, API, app mobile e gestionali. Software che dura nel tempo e si adatta alla crescita.',
  },
  {
    id: 'dati',
    num: '04',
    title: 'Data science &amp; ML',
    body: 'Pipeline dati, modelli predittivi e insight azionabili. I dati che già hai, trasformati in decisioni.',
  },
  {
    id: 'integrazioni',
    num: '05',
    title: 'Integrazioni &amp; ETL',
    body: 'Sistemi che non si parlano, collegati. Flussi dati affidabili e osservabili — senza sorprese notturne.',
  },
  {
    id: 'web',
    num: '06',
    title: 'Web &amp; Mobile',
    body: "App e siti performanti, curati nell'esperienza utente. Dal brief alla messa in produzione.",
  },
]

// Abbinamento cliente ↔ ambito proposto dal marketing per la home (da confermare: nel documento
// di feedback l'esempio della pagina case study abbina invece Sensation all'e-commerce).
const items = [
  {
    id: 'supporto-clienti-ai',
    area: 'ai',
    client: {
      name: 'Queen of Club',
      logo: null,
      sector: '[DA FORNIRE]',
      location: '[DA FORNIRE]',
      size: '[DA FORNIRE]',
      website: null,
      since: '[DA FORNIRE]',
    },
    status: 'in corso',
    title: 'Assistente AI per il supporto clienti',
    summary: 'Risposte automatiche 24/7 con escalation intelligente a un operatore.',
    body: "Pipeline RAG sopra la knowledge base interna: risposte verificate e con citazioni, integrate nel gestionale che il team usa già. L'escalation a un operatore resta sempre a un click.",
    log: [
      'discovery e analisi dei ticket storici',
      'pilot su un singolo team di supporto',
      'rollout progressivo su tutto il supporto',
    ],
    metrics: [
      {n: '24/7', l: 'copertura'},
      {n: 'RAG', l: 'risposte con fonti'},
      {n: '—', l: 'tempo di risposta'},
    ],
    interview: [{q: '[DA FORNIRE: domanda dal questionario, sezione 3]', a: '[DA FORNIRE]'}],
    interviewee: {name: '[DA FORNIRE]', role: '[DA FORNIRE]'},
  },
  {
    id: 'ecommerce-alto-traffico',
    area: 'commerce',
    client: {
      name: 'Nico',
      logo: null,
      sector: '[DA FORNIRE]',
      location: '[DA FORNIRE]',
      size: '[DA FORNIRE]',
      website: null,
      since: '[DA FORNIRE]',
    },
    status: 'completato',
    title: 'E-commerce ad alto traffico',
    summary: 'Storefront e checkout riscritti per reggere i picchi, senza un solo rollback.',
    body: 'Catalogo ampio e picchi di campagna da gestire senza fermare le vendite. Abbiamo riscritto storefront e checkout e portato il rollout in produzione in modo graduale, senza un solo rollback.',
    log: [
      'audit di performance e struttura del catalogo',
      'nuovo storefront e checkout in produzione',
      'rollout completato sull’intero catalogo',
    ],
    metrics: [
      {n: '0', l: 'rollback'},
      {n: '—', l: 'rps di picco'},
      {n: '—', l: 'conversione'},
    ],
    interview: [{q: '[DA FORNIRE: domanda dal questionario, sezione 3]', a: '[DA FORNIRE]'}],
    interviewee: {name: '[DA FORNIRE]', role: '[DA FORNIRE]'},
  },
  {
    id: 'manutenzione-predittiva',
    area: 'dati',
    client: {
      name: 'Sensation',
      logo: null,
      sector: '[DA FORNIRE]',
      location: '[DA FORNIRE]',
      size: '[DA FORNIRE]',
      website: null,
      since: '[DA FORNIRE]',
    },
    status: 'completato',
    title: 'Manutenzione predittiva',
    summary: 'Guasti segnalati prima che fermino la linea, dentro i sistemi di manutenzione esistenti.',
    body: 'Dai dati di campo già raccolti a un modello che segnala i guasti prima che fermino la linea. Le previsioni arrivano dentro i sistemi di manutenzione esistenti, non in un altro cruscotto da guardare.',
    log: [
      'raccolta e pulizia dei dati di campo',
      'modello predittivo validato sullo storico',
      'previsioni integrate nel flusso di manutenzione',
    ],
    metrics: [
      {n: 'ML', l: 'in produzione'},
      {n: '—', l: 'fermi evitati'},
      {n: '—', l: 'accuratezza'},
    ],
    interview: [{q: '[DA FORNIRE: domanda dal questionario, sezione 3]', a: '[DA FORNIRE]'}],
    interviewee: {name: '[DA FORNIRE]', role: '[DA FORNIRE]'},
  },
]

module.exports = {areas, items}
