const pageHero = require('./_includes/components/page-hero')

module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Prodotti — Soluzioni software pronte | Forge',
      pageDescription:
        "Soluzioni software pronte all'uso, già collaudate, che adotti in tempi rapidi senza partire da zero. Scopri i prodotti Forge e richiedi una demo.",
      eleventyNavigation: {
        key: 'prodotti',
        title: 'Prodotti',
        parent: 'home',
      },
    }
  }

  render(data) {
    return `
${pageHero({
  label: 'prodotti',
  title: 'Soluzioni pronte all\'uso.<br><span class="accent">Parti subito.</span>',
  lead: 'Oltre ai progetti su misura, abbiamo costruito soluzioni software già collaudate che puoi adottare in tempi rapidi — senza partire da zero. Meno tempo, meno rischio, valore subito.',
  actions:
    '<a class="btn-primary" href="/contattaci/" aria-label="Richiedi una demo">richiedi_demo →</a><a class="btn-secondary" href="/contattaci/" aria-label="Prenota una call gratuita">prenota_call →</a>',
})}

<!-- ── Intro catalogo ──────────────────────────────────────── -->
<section class="sec-paper">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">// </span>il catalogo</div>
      <h2>Prodotti costruiti<br>sul campo.</h2>
    </div>
    <div class="prose">
      <p class="lead">Ogni prodotto nasce da un'esigenza reale incontrata lavorando con i nostri clienti.</p>
      <p>Li manteniamo e li facciamo evolvere nel tempo, esattamente come faremmo con il tuo software su misura. Quando un prodotto risolve già il tuo problema, è la strada più veloce per arrivare al risultato.</p>
    </div>
  </div>
</section>

<!-- ── Stato del catalogo ─────────────────────────────────── -->
<section class="sec-dark" id="catalogo">
  <div class="inner">
    <div class="label"><span class="dim">// </span>catalogo prodotti</div>
    <h2>I nostri prodotti.</h2>
    <p style="max-width:54ch;margin:16px 0 40px;color:var(--text-muted);">
      Stiamo preparando il catalogo. I prodotti arriveranno presto, documentati con casi d'uso reali e demo. Nel frattempo, raccontaci cosa ti serve.
    </p>
    <div class="terminal" aria-hidden="true" style="max-width:520px;">
      <div class="terminal-bar">
        <span class="terminal-dot red"></span>
        <span class="terminal-dot yel"></span>
        <span class="terminal-dot grn"></span>
        <span class="terminal-title">forge — prodotti.log</span>
      </div>
      <div class="terminal-body">
        <div class="cmd"><span class="prompt">$</span> ls /prodotti</div>
        <div class="ok"><span class="tick">✓</span> assistente_ai_supporto/ <span style="color:var(--text-dim)">· in sviluppo</span></div>
        <div class="ok"><span class="tick">✓</span> [DA FORNIRE]/ <span style="color:var(--text-dim)">· beta</span></div>
        <div class="ok"><span class="tick">✓</span> [DA FORNIRE]/ <span style="color:var(--text-dim)">· disponibile</span></div>
        <div class="result"><span class="arrow">→</span> catalogo in aggiornamento…</div>
        <div class="cursor-line"><span class="prompt">$</span> <span class="terminal-cursor">&nbsp;</span></div>
      </div>
    </div>
    <p style="margin-top:40px;">
      <a class="btn-primary" href="/contattaci/" aria-label="Prenota una call gratuita">prenota_call — raccontaci cosa ti serve →</a>
    </p>
  </div>
</section>

<!-- ── Differenze servizi/prodotti ───────────────────────────── -->
<section class="sec-paper2">
  <div class="section-intro">
    <div class="label"><span class="dim">// </span>prodotti vs. servizi</div>
    <h2>Qual è la differenza?</h2>
  </div>
  <div class="feature-grid cols-2">
    <div class="feature-card">
      <div class="feature-num">prodotto</div>
      <h3>Soluzione pronta all'uso</h3>
      <p>Già costruita, già testata, già in produzione. Tempi e costi prevedibili, onboarding rapido. Ideale quando il tuo problema è comune e la soluzione esiste.</p>
      <a class="fg-link" href="/contattaci/" aria-label="Richiedi una demo del prodotto">richiedi_demo →</a>
    </div>
    <div class="feature-card">
      <div class="feature-num">servizio</div>
      <h3>Sviluppo su misura</h3>
      <p>Costruiamo esattamente quello che ti serve, dal problema in poi. Più flessibile, più adattato al tuo contesto. Ideale quando la tua esigenza è unica o complessa.</p>
      <a class="fg-link" href="/servizi/" aria-label="Scopri i servizi Forge">scopri_i_servizi →</a>
    </div>
  </div>
</section>

<!-- ── CTA finale ──────────────────────────────────────────── -->
<section class="sec-dark">
  <div class="cta-band">
    <h2>Vuoi vederlo in azione?</h2>
    <p>Prenota una demo gratuita: ti mostriamo il prodotto sui tuoi casi reali. Se invece ti serve qualcosa su misura, la <strong>prima call è gratuita e senza impegno</strong>.</p>
    <div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center;">
      <a class="btn-primary" href="/contattaci/" aria-label="Richiedi una demo gratuita">richiedi_demo →</a>
      <a class="btn-secondary" href="/servizi/" aria-label="Vai ai servizi">prenota_call →</a>
    </div>
  </div>
</section>`
  }
}
