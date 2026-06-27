const pageHero = require('./_includes/components/page-hero')

module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Progetti & Innovazione',
      pageDescription:
        'Ricerca applicata, progetti open source e collaborazioni con le università. Dove sperimentiamo prima di portarlo ai clienti.',
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
  lead: 'Accompagniamo le aziende in un percorso di innovazione che nasce dal rapporto con università, start-up, centri di ricerca e giovani talenti.',
})}

<!-- ── Innovare ────────────────────────────────────────────── -->
<section class="sec-paper">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">// </span>approccio</div>
      <h2>Innovazione,<br>in modo collaborativo.</h2>
    </div>
    <div class="prose">
      <p>In Forge amiamo accompagnare le aziende in un <strong>percorso di innovazione</strong> costruito sul rapporto sinergico con università, start-up, centri di ricerca e giovani talenti.</p>
      <p>Usiamo un <strong>approccio collaborativo</strong> in ogni fase dello sviluppo di prodotti, servizi e processi, con particolare attenzione alla <strong>trasformazione digitale</strong> e all'adozione di tecnologie che rispondano ai problemi reali delle organizzazioni.</p>
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
      <p>La spinta a collaborare con le università del territorio viene dai nostri stessi fondatori, che arrivano da un lungo percorso accademico e conoscono il <strong>potenziale innovativo di ricerca e università</strong>.</p>
      <p>Nel tempo abbiamo stretto sinergie con l'<strong>Università dell'Insubria di Varese</strong>, la nostra città natale, e svolto workshop all'<strong>Università Bicocca di Milano</strong>. Curiamo la formazione dei giovani con stage e progetti di ricerca, per accelerarne la crescita professionale.</p>
      <a class="fg-link" href="/lavora-con-noi/#posizioni-aperte">Vedi le posizioni aperte →</a>
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

<!-- ── Ricerca & sviluppo ──────────────────────────────────── -->
<section class="sec-paper">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">// </span>ricerca & sviluppo</div>
      <h2>La tecnologia al servizio<br>del cambiamento.</h2>
    </div>
    <div class="prose">
      <p>Partiamo dal potenziale delle tecnologie digitali per costruire soluzioni di <strong>intelligenza artificiale</strong>, integrare e <strong>sviluppare software</strong> che accompagni le aziende in un reale percorso di trasformazione.</p>
      <p>Ci identifichiamo con i <strong>bisogni di innovazione</strong> delle aziende e le aiutiamo a individuare le soluzioni migliori per affrontare il futuro in autonomia.</p>
      <a class="fg-link" href="/contattaci/">Contattaci per una consulenza →</a>
    </div>
  </div>
</section>

<!-- ── CTA ─────────────────────────────────────────────────── -->
<section class="sec-paper2">
  <div class="cta-band">
    <h2>Innovare è la nostra parola preferita.<br>È così anche per te?</h2>
    <p>Raccontaci la tua idea o il tuo progetto. La prima call è gratuita e senza impegno.</p>
    <a class="btn-primary" href="/contattaci/">Parliamone insieme →</a>
  </div>
</section>`
  }
}
