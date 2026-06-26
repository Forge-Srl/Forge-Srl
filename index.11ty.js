module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Forge — Software House',
      pageDescription:
        'Costruiamo piattaforme AI e sistemi e-commerce che vanno in produzione. Progettiamo, costruiamo e manteniamo — sprint corti, deploy continui.',
      eleventyNavigation: {
        key: 'home',
        title: 'Home',
      },
    }
  }

  render(data) {
    const microdata = {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'LocalBusiness'],
      name: 'Forge S.r.l.',
      url: data.forge.domain,
      logo: `${data.forge.domain}/assets/images/forge-logo.png`,
      telephone: data.forge.contacts.phone,
      email: data.forge.contacts.info,
      address: {
        '@type': 'PostalAddress',
        streetAddress: data.forge.contacts.address.street,
        addressLocality: data.forge.contacts.address.locality,
        postalCode: data.forge.contacts.address.postalCode,
        addressCountry: data.forge.contacts.address.country,
      },
      vatID: data.forge.vatCode,
      openingHours: 'Mo-Fr 09:00-18:00',
      sameAs: [data.forge.linkedin, data.forge.facebook, data.forge.github],
    }

    const stats = [
      {n: '11', l: 'piattaforme in prod'},
      {n: '4M', l: 'SKU gestiti'},
      {n: 'p99&lt;80ms', l: 'commerce API'},
      {n: '0', l: 'agency-speak'},
    ]

    const valori = [
      {tag: 'val_01', title: 'Andiamo in produzione', body: 'Il codice che non è live non conta. Misuriamo in deploy.'},
      {tag: 'val_02', title: 'Restiamo dopo il go-live', body: 'Non spariamo la fattura e spariamo. Manteniamo.'},
      {tag: 'val_03', title: 'Parli con chi costruisce', body: 'Niente filtri commerciali tra te e gli ingegneri.'},
      {tag: 'val_04', title: 'Concreti, non vaghi', body: 'Numeri, non aggettivi. p99 &lt; 80ms, non "scalabile".'},
    ]

    const servizi = [
      {
        num: '01',
        title: 'Piattaforme AI',
        body: 'LLM, RAG e agenti messi davvero in produzione.',
        href: '/servizi/#ai',
      },
      {
        num: '02',
        title: 'Commerce headless',
        body: 'E-commerce ad alto traffico, costruito per la scala.',
        href: '/servizi/#commerce',
      },
      {
        num: '03',
        title: 'Piattaforme su misura',
        body: 'Backend, API e gestionali fatti per durare.',
        href: '/servizi/#dev',
      },
      {
        num: '04',
        title: 'Dati & integrazioni',
        body: 'Pipeline, ETL, sincronizzazioni e ML in produzione.',
        href: '/servizi/#data',
      },
    ]

    const casePreview = [
      {client: 'mercato.it', status: 'in corso', title: 'Commerce headless', metric: '4M SKU · 12k RPS · 0 rollback'},
      {client: 'Nordica', status: 'in corso', title: 'Assistente AI supporto', metric: '−68% tempo risposta · 24/7'},
      {client: 'Atelier', status: 'completato', title: 'Performance fashion', metric: '+34% conversione · −50% TTFB'},
    ]

    const metodo = [
      {num: '01', title: 'Discovery', body: 'Capiamo il problema, non solo i requisiti.'},
      {num: '02', title: 'Architettura', body: 'Progettiamo per la scala che serve davvero.'},
      {num: '03', title: 'Build', body: 'Sprint corti, deploy continui, codice rivisto.'},
      {num: '04', title: 'Go-live', body: 'Andiamo in produzione. Poi restiamo.'},
    ]

    const tech = [
      'TypeScript',
      'Go',
      'Rust',
      'Python',
      'PostgreSQL',
      'pgvector',
      'Kafka',
      'Kubernetes',
      'Next.js',
      'React',
      'Terraform',
      'AWS / GCP',
    ]

    const progetti = [
      {stato: 'ricerca', title: 'forge-rag', body: 'Toolkit interno per pipeline RAG verificabili, con citazioni.'},
      {stato: 'beta', title: 'commerce-bench', body: 'Banco di prova per carichi commerce ad alto traffico.'},
      {stato: 'in corso', title: 'edge-deploy', body: 'Deploy multi-region a bassa latenza, by default.'},
    ]

    const statsHtml = stats
      .map(
        ({n, l}) => `
      <div>
        <div class="stat-n">${n}</div>
        <div class="stat-l">${l}</div>
      </div>`,
      )
      .join('')

    const valoriHtml = valori
      .map(
        ({tag, title, body}) => `
      <div class="value-card">
        <div class="value-tag">${tag}</div>
        <div class="value-title">${title}</div>
        <div class="value-body">${body}</div>
      </div>`,
      )
      .join('')

    const serviziHtml = servizi
      .map(
        ({num, title, body, href}) => `
      <a class="service-card" href="${href}">
        <div class="service-num">${num}</div>
        <div class="service-title">${title}</div>
        <div class="service-body">${body}</div>
      </a>`,
      )
      .join('')

    const casesHtml = casePreview
      .map(
        ({client, status, title, metric}) => `
      <div class="case-card">
        <div class="case-card-body">
          <div class="case-card-top">
            <span class="case-client">${client}</span>
            <span class="case-status">${status}</span>
          </div>
          <div class="case-title">${title}</div>
          <div class="case-metric">${metric}</div>
        </div>
      </div>`,
      )
      .join('')

    const metodoHtml = metodo
      .map(
        ({num, title, body}) => `
      <div class="metodo-step">
        <div class="metodo-num">${num}</div>
        <div class="metodo-title">${title}</div>
        <div class="metodo-body">${body}</div>
      </div>`,
      )
      .join('')

    const techHtml = tech.map((t) => `<span class="tech-pill">${t}</span>`).join('')

    const progettiHtml = progetti
      .map(
        ({stato, title, body}) => `
      <div class="progetto-card">
        <div class="progetto-stato">${stato}</div>
        <div class="progetto-title">${title}</div>
        <div class="progetto-body">${body}</div>
      </div>`,
      )
      .join('')

    return `
<script type="application/ld+json">${JSON.stringify(microdata)}</script>

<!-- ── HERO ──────────────────────────────────────────────── -->
<section class="hero">
  <div class="hero-grid">
    <div>
      <div class="hero-label"><span class="dim">// </span>software house · varese</div>
      <h1>Costruiamo software che va in <span class="accent">{</span>produzione<span class="accent">}</span>.</h1>
      <p class="hero-desc">Progettiamo piattaforme AI e sistemi e-commerce per team che misurano il successo in deploy — non in slide.</p>
      <div class="hero-actions">
        <a class="btn-primary" href="/servizi/">Cosa facciamo →</a>
        <a class="btn-secondary" href="/chi-siamo/">Il nostro approccio</a>
      </div>
    </div>

    <div class="terminal" aria-hidden="true">
      <div class="terminal-bar">
        <span class="terminal-dot red"></span>
        <span class="terminal-dot yel"></span>
        <span class="terminal-dot grn"></span>
        <span class="terminal-title">forge — deploy.log</span>
      </div>
      <div class="terminal-body">
        <div class="cmd"><span class="prompt">$</span> forge deploy --prod</div>
        <div class="ok"><span class="tick">✓</span> build ok <span style="color:var(--text-dim)">(12.4s)</span></div>
        <div class="ok"><span class="tick">✓</span> 248 test passati</div>
        <div class="ok"><span class="tick">✓</span> rollout 100% <span style="color:var(--text-dim)">· 0 rollback</span></div>
        <div class="result"><span class="arrow">→</span> live · <span class="url">mercato.it</span> · <span class="perf">p99 78ms</span></div>
        <div class="cursor-line"><span class="prompt">$</span> <span class="terminal-cursor">&nbsp;</span></div>
      </div>
    </div>
  </div>

  <div class="hero-stats">${statsHtml}</div>
</section>

<!-- ── CHI SIAMO ──────────────────────────────────────────── -->
<section class="sec-paper" id="chi-siamo">
  <div class="chi-siamo-grid">
    <div>
      <div class="label"><span class="dim">// </span>chi siamo</div>
      <h2>Siamo una <span class="accent">{forge}</span>,<br>non un'agenzia.</h2>
      <p>Un gruppo di ingegneri che progetta, costruisce e manda in produzione. I nostri valori e la nostra filosofia di lavoro raccontano come arriviamo al risultato — e perché restiamo anche dopo il go-live.</p>
      <a class="fg-link" href="/chi-siamo/">Conosci il team e i nostri valori →</a>
    </div>
    <div class="values-grid">${valoriHtml}</div>
  </div>
</section>

<!-- ── COSA FACCIAMO ──────────────────────────────────────── -->
<section class="sec-paper2" id="cosa-facciamo">
  <div class="inner">
    <div class="section-header">
      <div>
        <div class="label"><span class="dim">// </span>cosa facciamo</div>
        <h2>Prodotti e servizi,<br>in un posto solo.</h2>
      </div>
      <div class="section-actions">
        <a class="btn-dark" href="/servizi/">I servizi →</a>
      </div>
    </div>
    <div class="services-grid">${serviziHtml}</div>
  </div>
</section>

<!-- ── SUCCESSO CLIENTI ───────────────────────────────────── -->
<section class="sec-dark" id="clienti">
  <div class="inner">
    <div class="section-header">
      <div>
        <div class="label"><span class="dim">// </span>il successo dei nostri clienti</div>
        <h2>Progetti veri,<br>numeri veri.</h2>
      </div>
    </div>
    <div class="cases-grid">${casesHtml}</div>
  </div>
</section>

<!-- ── COME LAVORIAMO ─────────────────────────────────────── -->
<section class="sec-paper">
  <div class="inner">
    <div class="label"><span class="dim">// </span>come lavoriamo</div>
    <h2 style="margin:0 0 40px;">Sprint corti, deploy continui.</h2>
    <div class="metodo-grid">${metodoHtml}</div>
  </div>
</section>

<!-- ── TECNOLOGIE ─────────────────────────────────────────── -->
<section class="sec-paper2">
  <div class="tech-section-inner">
    <div>
      <div class="label"><span class="dim">// </span>le nostre tecnologie</div>
      <h2>Lo stack che teniamo in produzione.</h2>
    </div>
    <div class="tech-pills">${techHtml}</div>
  </div>
</section>

<!-- ── PROGETTI & INNOVAZIONE ────────────────────────────── -->
<section class="sec-dark" id="progetti">
  <div class="inner">
    <div class="label"><span class="dim">// </span>progetti &amp; innovazione</div>
    <h2 style="margin:0 0 16px;">Quello che stiamo costruendo, in chiaro.</h2>
    <p style="max-width:54ch;margin:0 0 36px;">Ricerca applicata e progetti interni: dove sperimentiamo prima di portarlo ai clienti. Aggiornati, con nome e cognome.</p>
    <div class="progetti-grid">${progettiHtml}</div>
  </div>
</section>

<!-- ── LAVORA CON NOI ─────────────────────────────────────── -->
<section class="sec-paper" id="lavora-con-noi">
  <div class="lavora-strip">
    <div style="max-width:52ch;">
      <div class="label"><span class="dim">// </span>lavora con noi</div>
      <h2>Stiamo assumendo.</h2>
      <p>Posizioni aperte aggiornate e candidatura in due click. Niente colloqui infiniti.</p>
    </div>
    <a class="fg-link" href="/lavora-con-noi/">Vedi le posizioni aperte →</a>
  </div>
</section>

<!-- ── CONTATTI ───────────────────────────────────────────── -->
<section class="sec-dark" id="contatti">
  <div class="contatti-grid">
    <div>
      <div class="label"><span class="dim">// </span>parliamone</div>
      <h2>Hai un progetto<br>in mente?</h2>
      <p style="max-width:42ch;margin:0 0 28px;">Raccontacelo in 15 minuti. La prima call è <strong style="color:var(--text)">gratuita e senza impegno</strong> — nessuno ti venderà niente.</p>
      <div class="contatti-checks">
        <div><span class="tick">✓</span> 15 minuti, in video o di persona</div>
        <div><span class="tick">✓</span> parli con chi costruisce, non con un commerciale</div>
        <div><span class="tick">✓</span> esci con un primo parere tecnico concreto</div>
      </div>
    </div>

    <div class="contact-box">
      <div class="contact-box-bar">
        <svg viewBox="0 0 64 96" style="width:11px;height:16px;flex-shrink:0" aria-hidden="true">
          <path d="M 32 4 C 28 14, 24 22, 20 30 C 17 26, 14 22, 12 18 C 8 30, 6 44, 8 58 C 9 70, 14 80, 20 84 C 21 80, 23 78, 25 82 C 27 88, 30 92, 33 90 C 35 86, 37 80, 39 80 C 42 84, 46 86, 50 80 C 56 72, 58 58, 54 44 C 52 36, 49 28, 46 22 C 44 28, 42 32, 38 28 C 38 20, 35 12, 32 4 Z" fill="#F08819"/>
        </svg>
        <span class="contact-box-title">prenota_call.ts</span>
        <span class="contact-box-sub">15 min · gratis</span>
      </div>
      <div class="contact-box-body">
        <a class="btn-orange-full" href="/contattaci/" style="text-align:center;text-decoration:none;display:block;">Vai al form di contatto →</a>
        <div class="contact-confirm"><span class="tick">✓</span> risposta entro 24h · senza impegno</div>
      </div>
    </div>
  </div>
</section>`
  }
}
