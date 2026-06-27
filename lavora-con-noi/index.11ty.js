const pageHero = require('../_includes/components/page-hero')

module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Lavora con Noi',
      pageDescription:
        'Stiamo assumendo. Forge cerca persone che amino innovare e mettersi in gioco. Scopri le posizioni aperte ed entra nel team.',
      eleventyNavigation: {
        key: 'lavora-con-noi',
        title: 'Lavora con Noi',
        parent: 'home',
      },
    }
  }

  render(data) {
    const lavoro = [
      {
        title: 'Metodologia Agile',
        body: 'Organizziamo le attività in sprint brevi con task ben definiti, così da dare il massimo senza disperdere energie.',
      },
      {
        title: 'Approccio data-driven',
        body: 'Pianifichiamo su previsioni accurate, facciamo test e ci affidiamo ai dati per prendere decisioni.',
      },
      {
        title: 'Alta competenza tecnica',
        body: 'Siamo al passo con le ultime tecnologie e sempre aggiornati. La curiosità è parte del lavoro.',
      },
      {
        title: 'Ore di studio',
        body: 'Dedichiamo tempo alla formazione e a progetti personali, importanti quanto il lavoro stesso.',
      },
    ]

    const filosofia = [
      {
        tag: 'val_01',
        title: 'Entusiasmo',
        body: 'Abbracciamo il cambiamento e le sfide. Non ci fermiamo alle prime difficoltà.',
      },
      {
        tag: 'val_02',
        title: 'Collaborazione',
        body: 'Ascoltiamo tutti e lavoriamo in trasparenza, incentivando lo scambio di idee.',
      },
      {
        tag: 'val_03',
        title: 'Confronto',
        body: 'Mettiamo in discussione ciò che facciamo ogni giorno. Non diamo nulla per scontato.',
      },
    ]

    const lavoroHtml = lavoro
      .map(
        ({title, body}) => `
      <div class="feature-card"><h3>${title}</h3><p>${body}</p></div>`,
      )
      .join('')

    const filosofiaHtml = filosofia
      .map(
        ({tag, title, body}) => `
      <div class="feature-card"><div class="feature-num">${tag}</div><h3>${title}</h3><p>${body}</p></div>`,
      )
      .join('')

    return `
${pageHero({
  label: 'lavora con noi',
  title: 'Stiamo <span class="accent">assumendo</span>.',
  lead: 'Forge significa forgiatura: la formazione delle persone è il nostro elemento distintivo. Cerchiamo talenti che vogliano innovare e mettersi in gioco.',
  actions: '<a class="btn-primary" href="#posizioni-aperte">Vedi le posizioni →</a>',
})}

<!-- ── Perché Forge ────────────────────────────────────────── -->
<section class="sec-paper">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">// </span>perché forge</div>
      <h2>Vogliamo il massimo<br>per chi lavora con noi.</h2>
    </div>
    <div class="prose">
      <p>Ci piace lavorare a stretto contatto con il territorio e in collaborazione con le migliori università.</p>
      <p>Crediamo che la condivisione dello spazio — fisico e virtuale — crei <strong>forti sinergie</strong>. Pensiamo che la chiave del cambiamento sia il <strong>confronto nella diversità</strong>.</p>
    </div>
  </div>
</section>

<!-- ── Quote ───────────────────────────────────────────────── -->
<section class="sec-dark">
  <div class="quote-block">
    <p>Il lavoro occupa gran parte della nostra vita: è importante che rispecchi ciò in cui crediamo. Per questo abbiamo creato un ambiente ai massimi livelli tecnologici, con solide basi umane.</p>
  </div>
</section>

<!-- ── Il lavoro in Forge ──────────────────────────────────── -->
<section class="sec-paper2">
  <div class="section-intro">
    <div class="label"><span class="dim">// </span>il lavoro in forge</div>
    <h2>Fai ciò che ti piace,<br>in un team di cui andare fiero.</h2>
    <p class="lead">Si lavora duro, ma ci si diverte nei modi giusti. Niente organigramma rigido: ci sono ruoli e responsabilità.</p>
  </div>
  <div class="feature-grid cols-2">${lavoroHtml}</div>
</section>

<!-- ── Filosofia ───────────────────────────────────────────── -->
<section class="sec-paper">
  <div class="section-intro">
    <div class="label"><span class="dim">// </span>la nostra filosofia</div>
    <h2>I valori che condividiamo.</h2>
  </div>
  <div class="feature-grid cols-3">${filosofiaHtml}</div>
</section>

<!-- ── Posizioni aperte ────────────────────────────────────── -->
<section class="sec-dark" id="posizioni-aperte">
  <div class="section-intro" style="margin-bottom:40px;">
    <div class="label"><span class="dim">// </span>posizioni aperte</div>
    <h2>Entra nel team.</h2>
  </div>

  <div class="position-card">
    <div>
      <h3>Sviluppatore Software</h3>
      <p>Cerchiamo uno sviluppatore da inserire nel team di Varese. Esperienza con più linguaggi e con strumenti di AI/ML sono requisiti opzionali: l'importante è la voglia di migliorare.</p>
      <div class="position-meta">Luogo: Varese · Settore: IT · Tempo pieno</div>
    </div>
    <div class="position-action">
      <a class="btn-primary" href="/lavora-con-noi/sviluppatore-software/">Candidati →</a>
    </div>
  </div>

  <div class="position-card">
    <div>
      <h3>Candidatura spontanea</h3>
      <p>Nessuna posizione adatta a te? Scrivici comunque: valutiamo singolarmente ogni candidatura. Spiegaci perché dovremmo lavorare insieme.</p>
      <div class="position-meta">Sempre aperta</div>
    </div>
    <div class="position-action">
      <a class="btn-secondary" href="mailto:${data.forge.contacts.career}">Scrivici →</a>
    </div>
  </div>

  <p style="max-width:60ch;margin:28px 0 0;color:var(--text-muted);">Hai domande sulle opportunità in Forge? Scrivici a <a href="mailto:${data.forge.contacts.career}">${data.forge.contacts.career}</a> e ti risponderemo il prima possibile.</p>
</section>

<!-- ── CTA ─────────────────────────────────────────────────── -->
<section class="sec-paper2">
  <div class="cta-band">
    <h2>Vuoi conoscerci meglio?</h2>
    <p>Dai un'occhiata a chi siamo, ai nostri valori e al modo in cui lavoriamo.</p>
    <a class="btn-primary" href="/chi-siamo/">Scopri chi siamo →</a>
  </div>
</section>`
  }
}
