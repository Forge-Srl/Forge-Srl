/**
 * Feature flag del sito, disponibili nei template come `data.features`.
 *
 * Le sezioni e le pagine che non hanno ancora contenuti reali restano nel codice
 * ma vengono spente qui: con il flag a `false` non finiscono nell'HTML generato.
 * Quando arriva il contenuto, si mette il flag a `true`.
 *
 * In sviluppo si possono accendere tutti con `FORGE_FEATURES=all npm run dev-mode`.
 */
const features = {
  // Card dei clienti in home ("il successo dei nostri clienti"): servono loghi, liberatorie e numeri.
  homeClientSuccess: false,
  // Sezione "Progetti & innovazione" in home: tolta su richiesta del marketing (la pagina resta).
  homeProjects: false,
  // Sezione "Lavora con noi" in home: tolta su richiesta del marketing (la pagina resta).
  homeCareers: false,
  // Pagina /case-study/ e tutti i link che puntano a lei: servono loghi, liberatorie e risposte ai questionari.
  caseStudies: false,
  // Filtro a chip dei case study: sostituito dalla griglia degli ambiti.
  caseStudyFilter: false,
  // Card Forge Core / Forge Commerce nel catalogo prodotti: servono le descrizioni.
  productCatalog: false,
  // Griglia "choose your character" del team: servono avatar pixel art, ruoli e interviste.
  teamMembers: false,
  // Immagine dell'Università dell'Insubria in "progetti & innovazione": serve la versione in alta risoluzione.
  universityImage: false,
}

if (process.env.FORGE_FEATURES === 'all') {
  for (const key of Object.keys(features)) {
    features[key] = true
  }
}

module.exports = features
