const pageHero = require('./_includes/components/page-hero')

module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Case study — progetti AI e software | Forge',
      pageDescription:
        'I progetti che abbiamo costruito: sfide reali, soluzioni AI + umano e risultati misurabili. Scopri i case study di Forge, software house a Varese.',
      eleventyNavigation: {
        key: 'case-study',
        title: 'Case study',
        parent: 'home',
      },
    }
  }

  render() {
    const sectors = [
      {id: 'tutti', label: 'tutti'},
      {id: 'ai', label: 'ai'},
      {id: 'commerce', label: 'e-commerce'},
      {id: 'dati', label: 'dati & ml'},
    ]

    // Nomi cliente, citazioni e numeri restano [DA FORNIRE] finché non abbiamo
    // dati verificati e liberatoria firmata. I valori "—" sono in validazione.
    const caseStudies = [
      {
        sec: 'ai',
        sector: 'ai & automazione',
        client: '[DA FORNIRE]',
        status: 'in corso',
        title: 'Assistente AI per il supporto clienti',
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
        quote: '[DA FORNIRE]',
        author: '[DA FORNIRE]',
      },
      {
        sec: 'commerce',
        sector: 'e-commerce',
        client: '[DA FORNIRE]',
        status: 'completato',
        title: 'E-commerce ad alto traffico',
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
        quote: '[DA FORNIRE]',
        author: '[DA FORNIRE]',
      },
      {
        sec: 'dati',
        sector: 'data science & ml',
        client: '[DA FORNIRE]',
        status: 'completato',
        title: 'Manutenzione predittiva',
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
        quote: '[DA FORNIRE]',
        author: '[DA FORNIRE]',
      },
    ]

    const microdata = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Case study Forge',
      description: 'Progetti AI e sviluppo software di Forge, software house a Varese',
      itemListElement: caseStudies.map(({title, body}, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name: title,
          description: body,
        },
      })),
    }

    const sectorsHtml = sectors
      .map(
        ({id, label}, i) =>
          `<button type="button" class="sector-chip${i === 0 ? ' is-active' : ''}" data-sector="${id}" aria-pressed="${i === 0}">${label}</button>`,
      )
      .join('')

    const casesHtml = caseStudies
      .map(({sec, sector, client, status, title, body, log, metrics, quote, author}) => {
        const logHtml = log
          .map((line) => `<div class="cs-log-line"><span class="cs-tick">◆</span> ${line}</div>`)
          .join('')

        const metricsHtml = metrics
          .map(
            ({n, l}) => `
          <div>
            <div class="cs-metric-n${n === '—' ? ' is-pending' : ''}">${n}</div>
            <div class="cs-metric-l">${l}</div>
          </div>`,
          )
          .join('')

        return `
      <article class="cs-card" data-sector="${sec}">
        <div class="cs-media" aria-hidden="true"><span>[ screenshot · in arrivo ]</span></div>
        <div class="cs-content">
          <div class="cs-head">
            <span class="cs-client">${client}</span>
            <span class="cs-sector">· ${sector}</span>
            <span class="cs-status">${status}</span>
          </div>
          <h3>${title}</h3>
          <p class="cs-body">${body}</p>

          <div class="cs-log">${logHtml}</div>

          <div class="cs-metrics">${metricsHtml}</div>
          <div class="cs-note"># metriche complete in validazione con il cliente</div>

          <blockquote class="cs-quote">
            <p>“${quote}”</p>
            <footer class="cs-author">— ${author}</footer>
          </blockquote>
        </div>
      </article>`
      })
      .join('')

    return `
<script type="application/ld+json">${JSON.stringify(microdata)}</script>

${pageHero({
  label: 'case study',
  title: 'Progetti in corso,<br>raccontati dai <span class="accent">numeri</span>.',
  lead: "L'evoluzione dei progetti, i risultati ottenuti e la parola ai clienti che li hanno vissuti. Niente promesse di marketing: pubblichiamo un case study solo quando i numeri sono verificati.",
  extra: `<div class="sector-filter" data-sector-filter hidden>${sectorsHtml}</div>`,
})}

<!-- ── Elenco case study ──────────────────────────────────── -->
<section class="sec-paper">
  <div class="inner">
    <div class="cs-list" data-case-list>${casesHtml}</div>
    <p class="cs-empty" data-case-empty hidden>Nessun case study in questo ambito — <a class="fg-link" href="/servizi/">guarda i servizi</a>.</p>
  </div>
</section>

<!-- ── Ambiti di progetto ──────────────────────────────────── -->
<section class="sec-dark">
  <div class="section-intro">
    <div class="label"><span class="dim">// </span>ambiti di progetto</div>
    <h2>Cosa abbiamo costruito.</h2>
    <p class="lead">Questi sono gli ambiti in cui operiamo. Per ogni area, abbiamo progetti reali che stiamo documentando.</p>
  </div>
  <div class="feature-grid cols-3">
    <div class="feature-card">
      <div class="feature-num">01</div>
      <h3>AI &amp; Automazione</h3>
      <p>Assistenti conversazionali, automazione dei processi, manutenzione predittiva. L'AI che lavora davvero.</p>
    </div>
    <div class="feature-card">
      <div class="feature-num">02</div>
      <h3>E-commerce &amp; Commerce</h3>
      <p>Piattaforme ad alto traffico, cataloghi enormi, performance sotto pressione. Costruiti per la scala.</p>
    </div>
    <div class="feature-card">
      <div class="feature-num">03</div>
      <h3>Piattaforme su misura</h3>
      <p>Back-end, API, app mobile e gestionali. Software che dura nel tempo e si adatta alla crescita.</p>
    </div>
    <div class="feature-card">
      <div class="feature-num">04</div>
      <h3>Data science &amp; ML</h3>
      <p>Pipeline dati, modelli predittivi e insight azionabili. I dati che già hai, trasformati in decisioni.</p>
    </div>
    <div class="feature-card">
      <div class="feature-num">05</div>
      <h3>Integrazioni &amp; ETL</h3>
      <p>Sistemi che non si parlano, collegati. Flussi dati affidabili e osservabili — senza sorprese notturne.</p>
    </div>
    <div class="feature-card">
      <div class="feature-num">06</div>
      <h3>Web &amp; Mobile</h3>
      <p>App e siti performanti, curati nell'esperienza utente. Dal brief alla messa in produzione.</p>
    </div>
  </div>
</section>

<!-- ── CTA finale ──────────────────────────────────────────── -->
<section class="sec-paper2">
  <div class="cta-band">
    <h2>Il prossimo case study<br>potrebbe essere il tuo.</h2>
    <p>Raccontacelo in 15 minuti. La prima call è gratuita e senza impegno.</p>
    <div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center;">
      <a class="btn-primary" href="/contattaci/" aria-label="Prenota una call gratuita">prenota_call →</a>
      <a class="btn-secondary" href="/servizi/" aria-label="Vedi i servizi Forge">vedi_servizi →</a>
    </div>
  </div>
</section>`
  }
}
