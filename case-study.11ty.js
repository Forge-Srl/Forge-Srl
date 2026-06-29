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

  render(data) {
    const microdata = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Case study Forge',
      description: 'Progetti AI e sviluppo software di Forge, software house a Varese',
      itemListElement: [],
    }

    return `
<script type="application/ld+json">${JSON.stringify(microdata)}</script>

${pageHero({
  label: 'case study',
  title: 'I risultati che<br>abbiamo <span class="accent">costruito</span>.',
  lead: 'Niente promesse di marketing. Progetti reali, problemi concreti, numeri prima e dopo. Ogni case study è una sessione che ha prodotto un output misurabile.',
})}

<!-- ── Stato vuoto ────────────────────────────────────────── -->
<section class="sec-paper">
  <div class="inner">
    <div class="label"><span class="dim">// </span>catalogo case study</div>
    <h2>I case study stanno arrivando.</h2>
    <p style="max-width:58ch;margin:16px 0 40px;color:var(--text-muted);">Stiamo documentando i progetti con i nostri clienti — numeri reali e liberatorie incluse. Ogni progetto viene pubblicato solo quando possiamo mostrare risultati misurabili e verificati.</p>

    <div class="terminal" aria-hidden="true" style="max-width:560px;margin-bottom:40px;">
      <div class="terminal-bar">
        <span class="terminal-dot red"></span>
        <span class="terminal-dot yel"></span>
        <span class="terminal-dot grn"></span>
        <span class="terminal-title">forge — case-study.log</span>
      </div>
      <div class="terminal-body">
        <div class="cmd"><span class="prompt">$</span> ls /case-study</div>
        <div class="ok"><span class="tick">✓</span> supporto-clienti-ai/ <span style="color:var(--text-dim)">· in documentazione</span></div>
        <div class="ok"><span class="tick">✓</span> ecommerce-alto-traffico/ <span style="color:var(--text-dim)">· in documentazione</span></div>
        <div class="ok"><span class="tick">✓</span> manutenzione-predittiva/ <span style="color:var(--text-dim)">· in documentazione</span></div>
        <div class="result"><span class="arrow">→</span> <span style="color:var(--text-dim)"># i primi case study stanno arrivando.</span></div>
        <div class="cursor-line"><span class="prompt">$</span> <span class="terminal-cursor">&nbsp;</span></div>
      </div>
    </div>

    <p style="max-width:52ch;">Vuoi essere il prossimo case study? La prima call è gratuita e senza impegno.</p>
    <a class="btn-primary" href="/contattaci/" aria-label="Prenota una call gratuita" style="margin-top:16px;display:inline-block;">prenota_call →</a>
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
    <h2>Hai un progetto in mente?</h2>
    <p>Raccontacelo in 15 minuti. La prima call è gratuita e senza impegno. <strong>Il prossimo case study potrebbe essere il tuo.</strong></p>
    <div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center;">
      <a class="btn-primary" href="/contattaci/" aria-label="Prenota una call gratuita">prenota_call →</a>
      <a class="btn-secondary" href="/servizi/" aria-label="Vedi i servizi Forge">vedi_servizi →</a>
    </div>
  </div>
</section>`
  }
}
