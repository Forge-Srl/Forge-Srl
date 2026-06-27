const pageHero = require('./_includes/components/page-hero')

module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Prodotti & Servizi',
      pageDescription:
        'Piattaforme AI, commerce headless, sviluppo su misura, dati e integrazioni. Soluzioni tecnologiche che vanno in produzione e ci restano.',
      eleventyNavigation: {
        key: 'servizi',
        title: 'Prodotti & Servizi',
        parent: 'home',
      },
    }
  }

  async render(data) {
    const servizi = [
      {
        id: 'ai',
        num: '01',
        label: 'piattaforme ai',
        title: 'AI che va in produzione.',
        intro:
          'LLM, RAG e agenti messi davvero in esercizio — non demo. Automatizziamo i processi ripetitivi per ridurre errori, tempi e costi, con modelli di Machine Learning e AI Generativa.',
        cards: [
          {
            title: 'Customer service AI',
            body: 'Automatizziamo il supporto clienti su qualsiasi piattaforma. Il bot gestisce la conversazione end-to-end e decide da solo quando coinvolgere una persona.',
          },
          {
            title: 'Predictive maintenance',
            body: 'Data Science e ML applicati ai dati di sensoristica per riconoscere in anticipo guasti e malfunzionamenti, evitando costosi fermi di produzione.',
          },
        ],
      },
      {
        id: 'commerce',
        num: '02',
        label: 'commerce headless',
        title: 'E-commerce costruito per la scala.',
        intro:
          'Sistemi e-commerce ad alto traffico, headless e su infrastruttura cloud-native. Architetture che reggono milioni di SKU e picchi di richieste senza rollback.',
        cards: [
          {
            title: 'Storefront performanti',
            body: 'Frontend veloci e API a bassa latenza, costruiti per la conversione: TTFB basso, p99 sotto controllo, scalabilità by default.',
          },
          {
            title: 'Catalogo & ricerca',
            body: 'Gestione di cataloghi enormi, sincronizzazioni affidabili e ricerca rilevante anche su milioni di prodotti.',
          },
        ],
      },
      {
        id: 'dev',
        num: '03',
        label: 'piattaforme su misura',
        title: 'Backend, API e app che durano.',
        intro:
          'Costruiamo piattaforme web di ogni tipo — single page application, siti multipagina, PWA — e le applicazioni mobile che ci girano intorno. Serverless, microservizi e cloud dei principali provider.',
        cards: [
          {
            title: 'Web & cloud',
            body: 'Servizi e API su AWS, Google Cloud e altri provider. Integriamo serverless, microservizi, database e virtualizzazione con elevate performance.',
          },
          {
            title: 'Mobile Android & iOS',
            body: 'App native progettate sulla scalabilità: aggiornamenti rapidi, manutenzione semplice, esperienze intuitive e funzionali.',
          },
        ],
      },
      {
        id: 'data',
        num: '04',
        label: 'dati & integrazioni',
        title: 'I dati che fanno girare tutto.',
        intro:
          'Pipeline, ETL, sincronizzazioni e modelli di Machine Learning in produzione. Colleghiamo i sistemi che oggi non si parlano e trasformiamo i dati in decisioni.',
        cards: [
          {
            title: 'Pipeline & ETL',
            body: "Flussi dati affidabili e osservabili, dal raw all'insight. Niente sincronizzazioni che si rompono di notte.",
          },
          {
            title: 'ML in esercizio',
            body: 'Modelli addestrati, serviti e monitorati come software vero: versionati, testati e misurabili.',
          },
        ],
      },
    ]

    const serviziHtml = servizi
      .map(
        ({id, num, label, title, intro, cards}, i) => `
<section class="${i % 2 === 0 ? 'sec-paper' : 'sec-paper2'}" id="${id}">
  <div class="inner">
    <div class="section-header">
      <div>
        <div class="label"><span class="dim">// </span>${label}</div>
        <h2>${title}</h2>
      </div>
      <div class="section-actions">
        <span class="feature-num" style="font-size:30px;font-weight:700;color:var(--orange)">${num}</span>
      </div>
    </div>
    <div class="prose" style="max-width:64ch;margin-bottom:0;">
      <p>${intro}</p>
    </div>
    <div class="feature-grid cols-2">
      ${cards.map(({title: ct, body}) => `<div class="feature-card"><h3>${ct}</h3><p>${body}</p></div>`).join('')}
    </div>
  </div>
</section>`,
      )
      .join('')

    const logoFiles = [
      ['TypeScript.svg', 'Logo TypeScript'],
      ['Angular.svg', 'Logo Angular'],
      ['NestJS.svg', 'Logo NestJS'],
      ['NodeJS.svg', 'Logo Node.js'],
      ['Docker.svg', 'Logo Docker'],
      ['Algolia.svg', 'Logo Algolia'],
      ['AmazonWebServices.svg', 'Logo Amazon Web Services'],
      ['GoogleCloud.svg', 'Logo Google Cloud'],
      ['Cloudflare.svg', 'Logo Cloudflare'],
      ['Firebase.svg', 'Logo Firebase'],
      ['WordPress.svg', 'Logo WordPress'],
      ['JetBrains.svg', 'Logo JetBrains'],
    ]

    const logosHtml = (
      await Promise.all(
        logoFiles.map(async ([file, alt]) => {
          const img = await this.image(`technologies-logos/${file}`, alt, '', [214], '214w')
          return `<div class="logo-cell">${img}</div>`
        }),
      )
    ).join('')

    return `
${pageHero({
  label: 'prodotti & servizi',
  title: 'Soluzioni che vanno in <span class="accent">produzione</span>.',
  lead: 'Intelligenza artificiale e sviluppo software per aziende che vogliono automatizzare, ottimizzare e crescere. Ogni soluzione nasce dalle esigenze concrete del tuo business.',
  actions: '<a class="btn-primary" href="/contattaci/">Parliamone →</a>',
})}

${serviziHtml}

<!-- ── Quote ───────────────────────────────────────────────── -->
<section class="sec-dark">
  <div class="quote-block">
    <p>Crediamo che l'intelligenza artificiale, come il software in generale, debba servire a migliorare la vita delle persone — soprattutto di chi non è esperto di tecnologia.</p>
  </div>
</section>

<!-- ── Approccio ───────────────────────────────────────────── -->
<section class="sec-paper">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">// </span>il nostro approccio</div>
      <h2>Partnership solide,<br>valore concreto.</h2>
    </div>
    <div class="prose">
      <p>Costruiamo rapporti duraturi con i clienti per realizzare insieme esperienze digitali <strong>future-proof</strong>, che abbiano un valore misurabile.</p>
      <p>Amiamo ciò che facciamo e ci impegniamo a generare un <strong>impatto positivo</strong> sul territorio. Investiamo costantemente sulla <strong>formazione</strong> di ogni persona del team e collaboriamo con le università.</p>
      <p>Lavoriamo con integrità, affidabilità e rispetto reciproco. Siamo consapevoli della responsabilità verso chi conta su di noi — e manteniamo la parola data.</p>
    </div>
  </div>
</section>

<!-- ── Tecnologie ──────────────────────────────────────────── -->
<section class="sec-paper2">
  <div class="section-intro">
    <div class="label"><span class="dim">// </span>le nostre tecnologie</div>
    <h2>Lo stack che teniamo in produzione.</h2>
  </div>
  <div class="logo-grid">${logosHtml}</div>
</section>

<!-- ── CTA ─────────────────────────────────────────────────── -->
<section class="sec-dark">
  <div class="cta-band">
    <h2>Ti aiutiamo a raggiungere i tuoi obiettivi.</h2>
    <p>Hai bisogno di più informazioni o vuoi farti un'idea di come lavoriamo? Siamo a tua disposizione.</p>
    <a class="btn-primary" href="/contattaci/">Parliamone insieme →</a>
  </div>
</section>`
  }
}
