const pageHero = require('./_includes/components/page-hero')

module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Progetti & Innovazione — R&D in Forge',
      pageDescription:
        'Ricerca, sperimentazione e progetti interni in Forge: dove proviamo AI e nuove tecnologie prima di portarle ai clienti. Open source e università partner.',
      eleventyNavigation: {
        key: 'innovazione',
        title: 'Progetti',
        parent: 'home',
      },
    }
  }

  render(data) {
    const stats = [
      {id: 'coffeeCounter', end: '', label: 'caffè convertiti in codice'},
      {id: '', end: '21', label: 'progetti di tesi'},
      {id: '', end: '32', label: 'progetti software'},
      {id: '', end: '3', label: 'università partner'},
    ]

    const openSource = [
      {
        title: 'Gushio',
        body: 'Scrivi script multipiattaforma testabili unitariamente, in JavaScript.',
        href: 'https://github.com/Forge-Srl/gushio/',
      },
      {
        title: 'BionicJS',
        body: 'Esegui codice JavaScript da altri linguaggi, per semplificare lo sviluppo multipiattaforma.',
        href: 'https://github.com/Forge-Srl/bionic-js/',
      },
      {
        title: 'JJBridge',
        body: "Porta l'esecuzione di codice JavaScript in ambiente Java — nato per usare BionicJS su Android.",
        href: 'https://github.com/Forge-Srl/jjbridge-engine-v8/',
      },
    ]

    const statsHtml = stats
      .map(
        ({id, end, label}) => `
      <div class="stat">
        <div class="stat-n counter"${id ? ` id="${id}"` : ''}${end ? ` data-counter-end="${end}"` : ''}>0</div>
        <div class="stat-l">${label}</div>
      </div>`,
      )
      .join('')

    const openSourceHtml = openSource
      .map(
        ({title, body, href}) => `
      <div class="feature-card is-interactive">
        <h3>${title}</h3>
        <p>${body}</p>
        <a class="fg-link" target="_blank" rel="noopener" href="${href}">Vai al progetto →</a>
      </div>`,
      )
      .join('')

    return `
${pageHero({
  label: 'progetti & innovazione',
  title: 'La nostra parola preferita: <span class="accent">innovare</span>.',
  lead: 'Innovare per noi non è una parola da brochure: è un metodo. Sperimentiamo su progetti interni, rilasciamo open source e collaboriamo con le università. Quello che funziona, lo portiamo ai clienti — il resto ci insegna qualcosa.',
  actions: '<a class="btn-primary" href="/contattaci/" aria-label="Prenota una call gratuita">prenota_call →</a>',
})}

<!-- ── Approccio R&D ───────────────────────────────────────── -->
<section class="sec-paper">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">// </span>approccio</div>
      <h2>Prima sperimentiamo.<br>Poi consegniamo.</h2>
    </div>
    <div class="prose">
      <p>Dedichiamo tempo a esplorare tecnologie nuove <strong>prima</strong> che diventino richieste dai clienti. Significa che quando arrivi da noi non facciamo da cavie con il tuo progetto: portiamo soluzioni già messe alla prova internamente.</p>
      <p>Lavoriamo in modo <strong>collaborativo</strong> con università, start-up, centri di ricerca e giovani talenti. È così che restiamo aggiornati davvero — non leggendo titoli, ma costruendo.</p>
    </div>
  </div>
</section>

<!-- ── Numeri ──────────────────────────────────────────────── -->
<section class="sec-dark">
  <div class="section-intro" style="margin-bottom:40px;">
    <div class="label"><span class="dim">// </span>in numeri</div>
    <h2>Quello che abbiamo costruito.</h2>
  </div>
  <div class="stat-grid">${statsHtml}</div>
</section>
<script>
  function countCoffees() {
    const coffeesUntilPageCreation = 15210
    const pageCreation = new Date(2022, 6, 1)
    const today = new Date();
    const differenceInMillis = today.getTime() - pageCreation.getTime()
    const differenceInDays = differenceInMillis / (1000 * 3600 * 24)
    return coffeesUntilPageCreation + (differenceInDays * 0.6 * 21)
  }
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".counter").forEach((element) => {
      const finalNumber = element.id === 'coffeeCounter' ? countCoffees() : Number.parseInt(element.getAttribute('data-counter-end'))
      const maxTime = 1500
      const updates = 50
      let counter = 0
      const intervalId = setInterval(() => {
        counter++
        element.innerText = Math.ceil(finalNumber / updates * counter)
        if (counter === updates) {
          clearInterval(intervalId)
        }
      }, maxTime / updates)
    })
  });
</script>

<!-- ── Università ───────────────────────────────────────────── -->
<section class="sec-paper2">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">// </span>università</div>
      <h2>Dialoghiamo con<br>giovani menti.</h2>
    </div>
    <div class="prose">
      <p>La spinta a collaborare con le università viene dai fondatori stessi, che arrivano da un lungo percorso accademico e conoscono il <strong>potenziale di ricerca e università</strong>.</p>
      <p>Nel tempo abbiamo stretto sinergie con l'<strong>Università dell'Insubria di Varese</strong>, la nostra città natale, e svolto workshop all'<strong>Università Bicocca di Milano</strong>. Curiamo la formazione dei giovani con stage e progetti di tesi, per accelerarne la crescita professionale.</p>
      <a class="fg-link" href="/lavora-con-noi/" aria-label="Vai alle posizioni aperte">lavora_con_noi →</a>
    </div>
  </div>
</section>

<!-- ── Open source ─────────────────────────────────────────── -->
<section class="sec-dark">
  <div class="section-intro">
    <div class="label"><span class="dim">// </span>open source</div>
    <h2>Quello che rilasciamo, in chiaro.</h2>
    <p class="lead">Ogni volta che risolviamo un problema proviamo ad astrarre la soluzione il più possibile, per renderla riutilizzabile. Alcuni progetti sono nati e forgiati internamente, e li abbiamo aperti.</p>
  </div>
  <div class="feature-grid cols-3">${openSourceHtml}</div>
</section>

<!-- ── CTA ─────────────────────────────────────────────────── -->
<section class="sec-paper">
  <div class="cta-band">
    <h2>Innovare è la nostra parola preferita.<br>È così anche per te?</h2>
    <p>Raccontaci la tua idea o il tuo progetto. La prima call è gratuita e senza impegno.</p>
    <div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center;">
      <a class="btn-primary" href="/contattaci/" aria-label="Prenota una call gratuita">prenota_call →</a>
      <a class="btn-secondary" href="/case-study/" aria-label="Vedi i case study">vedi_case_study →</a>
    </div>
  </div>
</section>`
  }
}
