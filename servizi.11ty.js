const pageHero = require('./_includes/components/page-hero')

module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Prodotti e servizi: sviluppo software e AI a Varese | Forge',
      pageDescription:
        'Sviluppo software, app mobile e consulenza AI su misura, più prodotti già collaudati da adottare subito. Soluzioni che vanno in produzione. Prima call gratuita.',
      eleventyNavigation: {
        key: 'servizi',
        title: 'Prodotti e servizi',
        parent: 'home',
      },
    }
  }

  async render(data) {
    const {features} = data

    // Card del catalogo: restano spente (features.productCatalog) finché non arrivano le descrizioni.
    const prodotti = [
      {
        tag: 'forge_core',
        title: 'Forge Core',
        body: '[DA FORNIRE: a chi serve e cosa risolve]',
      },
      {
        tag: 'forge_commerce',
        title: 'Forge Commerce',
        body: '[DA FORNIRE: a chi serve e cosa risolve]',
      },
    ]

    const servizi = [
      {
        id: 'ai',
        num: '01',
        label: 'intelligenza artificiale',
        title: "Mettiamo l'AI al lavoro per te.",
        intro:
          'Usiamo l\'intelligenza artificiale per togliere lavoro ripetitivo dalle spalle delle persone: meno errori, meno tempi morti, più capacità di concentrarsi su ciò che conta. Tutto con un approccio "AI + umano" — la tecnologia accelera, le persone decidono.',
        cards: [
          {
            title: 'Automazione dei processi con AI generativa',
            body: 'Automatizziamo le attività ripetitive che oggi rallentano il tuo team — dalla gestione documenti alla produzione di contenuti. Soluzioni basate su modelli di AI generativa (LLM) integrate nei tuoi sistemi esistenti.',
          },
          {
            title: 'Supporto clienti automatizzato',
            body: 'Rispondi ai clienti 24/7 senza far aspettare nessuno. Il sistema gestisce le richieste e coinvolge una persona solo quando serve davvero. Assistenti conversazionali integrabili su sito, chat e canali esistenti.',
          },
          {
            title: 'Manutenzione predittiva',
            body: 'Sai in anticipo quando un macchinario sta per guastarsi, così eviti fermi di produzione costosi. Modelli di Machine Learning applicati ai dati di sensoristica per riconoscere anomalie prima che diventino guasti.',
          },
          {
            title: 'Data science',
            body: 'Trasformiamo i dati che già hai in decisioni concrete: cosa sta succedendo, perché, e cosa conviene fare. Analisi dei dati, modelli predittivi e dashboard su misura per il tuo business.',
          },
        ],
      },
      {
        id: 'sviluppo',
        num: '02',
        label: 'sviluppo software',
        title: 'Costruiamo il software che ti serve.',
        intro:
          'Web, mobile, e-commerce, sistemi su misura: progettiamo e sviluppiamo applicazioni pensate per durare, facili da mantenere e da far crescere nel tempo.',
        cards: [
          {
            title: 'E-commerce',
            body: 'Negozi online veloci e affidabili, costruiti per vendere e per reggere i picchi di traffico. Piattaforme performanti, con ricerca avanzata e gestione di cataloghi ampi.',
          },
          {
            title: 'Web development',
            body: "Siti e applicazioni web su misura, curati nell'esperienza utente e nelle prestazioni. Single page application, siti multipagina e PWA con Angular, Node, TypeScript.",
          },
          {
            title: 'Back-end development',
            body: 'La parte invisibile che fa funzionare tutto: solida, sicura e pronta a scalare. API e servizi server-side su cloud AWS, Google Cloud e Firebase. Serverless e microservizi.',
          },
          {
            title: 'App mobile Android e iOS',
            body: 'App native che i tuoi utenti useranno volentieri: intuitive, veloci e sempre aggiornate. Sviluppo mobile nativo progettato sulla scalabilità e sulla facilità di manutenzione.',
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

    const catalogoHtml = features.productCatalog
      ? `<div class="feature-grid cols-2">
      ${prodotti
        .map(
          ({tag, title, body}) => `
      <div class="feature-card">
        <div class="feature-num">${tag}</div>
        <h3>${title}</h3>
        <p>${body}</p>
        <a class="fg-link" href="/contattaci/" aria-label="Richiedi una demo di ${title}">richiedi_demo →</a>
      </div>`,
        )
        .join('')}
    </div>`
      : `<p style="margin-top:32px;">
      <a class="btn-primary" href="/prenota-una-call/" aria-label="Prenota una call gratuita">prenota_call — raccontaci cosa ti serve →</a>
    </p>`

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
  label: 'prodotti e servizi',
  title: 'Sviluppo software e AI,<br>su misura per <span class="accent">te</span>.',
  lead: "Dall'intelligenza artificiale allo sviluppo di app e piattaforme: progettiamo soluzioni intorno alle esigenze reali del tuo business. E quando un nostro prodotto risolve già il problema, partiamo da lì. Prima il risultato che vuoi ottenere, poi la tecnologia per arrivarci.",
  actions:
    '<a class="btn-primary" href="/prenota-una-call/" aria-label="Prenota una call gratuita">prenota_call →</a><a class="btn-secondary" href="#prodotti">vedi_i_prodotti →</a>',
})}

${serviziHtml}

<!-- ── Prodotti ────────────────────────────────────────────── -->
<section class="sec-dark" id="prodotti">
  <div class="inner">
    <div class="section-header">
      <div>
        <div class="label"><span class="dim">// </span>prodotti</div>
        <h2>Soluzioni pronte all'uso.<br><span class="accent">Parti subito.</span></h2>
      </div>
      <div class="section-actions">
        <span class="feature-num" style="font-size:30px;font-weight:700;color:var(--orange)">03</span>
      </div>
    </div>
    <div class="prose" style="max-width:64ch;margin-bottom:0;">
      <p>Oltre ai progetti su misura, abbiamo costruito soluzioni software già collaudate che puoi adottare in tempi rapidi — senza partire da zero. Meno tempo, meno rischio, valore subito.</p>
    </div>
  </div>
</section>

<!-- ── Catalogo prodotti ──────────────────────────────────── -->
<section class="sec-paper2" id="catalogo">
  <div class="inner">
    <div class="split-grid">
      <div>
        <div class="label"><span class="dim">// </span>catalogo prodotti</div>
        <h2>Prodotti costruiti<br>sul campo.</h2>
      </div>
      <div class="prose">
        <p class="lead">Ogni prodotto nasce da un'esigenza reale incontrata lavorando con i nostri clienti.</p>
        <p>Li manteniamo e li facciamo evolvere nel tempo, esattamente come faremmo con il tuo software su misura. Quando un prodotto risolve già il tuo problema, è la strada più veloce per arrivare al risultato.</p>
      </div>
    </div>
    ${catalogoHtml}
  </div>
</section>

<!-- ── Come lavoriamo ─────────────────────────────────────── -->
<section class="sec-paper" id="come-lavoriamo">
  <div class="inner">
    <div class="label"><span class="dim">// </span>come lavoriamo</div>
    <h2 style="margin:0 0 16px;">Un metodo, quattro passi.</h2>
    <p style="max-width:54ch;margin:0 0 40px;color:var(--text-muted);">Non improvvisiamo. Seguiamo un percorso chiaro che ti tiene sempre al corrente di dove siamo.</p>
    <div class="metodo-grid">
      <div class="metodo-step">
        <div class="metodo-num">01</div>
        <div class="metodo-title">Ascoltiamo e valutiamo</div>
        <div class="metodo-body">Partiamo dal tuo problema reale. Capiamo il contesto, gli obiettivi e i vincoli — e ti diciamo con onestà se possiamo aiutarti.</div>
      </div>
      <div class="metodo-step">
        <div class="metodo-num">02</div>
        <div class="metodo-title">Troviamo una soluzione misurabile</div>
        <div class="metodo-body">Definiamo insieme cosa significa "successo", con numeri concreti. Niente aggettivi, niente vaghe promesse.</div>
      </div>
      <div class="metodo-step">
        <div class="metodo-num">03</div>
        <div class="metodo-title">Costruiamo con Agile/Scrum</div>
        <div class="metodo-body">Sprint corti e avanzamenti visibili: vedi il prodotto crescere passo dopo passo. Puoi correggere la rotta senza aspettare mesi.</div>
      </div>
      <div class="metodo-step">
        <div class="metodo-num">04</div>
        <div class="metodo-title">Feedback continuo</div>
        <div class="metodo-body">Ti coinvolgiamo a ogni iterazione. Rilascio graduale e supporto costante anche dopo il go-live.</div>
      </div>
    </div>
  </div>
</section>

<!-- ── Tecnologie ──────────────────────────────────────────── -->
<section class="sec-paper2" id="tecnologie">
  <div class="section-intro">
    <div class="label"><span class="dim">// </span>le nostre tecnologie</div>
    <h2>Gli strumenti che padroneggiamo.</h2>
    <p class="lead">Scegliamo la tecnologia giusta per ogni progetto — mai il contrario.</p>
  </div>
  <div class="logo-grid">${logosHtml}</div>
</section>

<!-- ── CTA ─────────────────────────────────────────────────── -->
<section class="sec-dark">
  <div class="cta-band">
    <h2>Hai un progetto in mente?</h2>
    <p>Raccontacelo in 15 minuti. La prima call è <strong>gratuita e senza impegno</strong> — esci con un primo parere concreto.</p>
    <div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center;">
      <a class="btn-primary" href="/prenota-una-call/" aria-label="Prenota una call gratuita">prenota_call →</a>
      <a class="btn-secondary" href="#prodotti" aria-label="Vedi i prodotti Forge">vedi_i_prodotti →</a>
    </div>
  </div>
</section>`
  }
}
