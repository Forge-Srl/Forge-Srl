const pageHero = require('../_includes/components/page-hero')

module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Lavora con noi — posizioni aperte | Forge, Varese',
      pageDescription:
        'Unisciti a una squadra di informatici veri a Varese. Posizioni aperte, cultura trasparente, AI + umano. Scopri come candidarti in Forge.',
      eleventyNavigation: {
        key: 'lavora-con-noi',
        title: 'Lavora con Noi',
        parent: 'home',
      },
    }
  }

  render(data) {
    const cultura = [
      {
        tag: 'val_01',
        title: 'Umiltà',
        body: 'Nessuno è troppo bravo per imparare o per chiedere aiuto.',
      },
      {
        tag: 'val_02',
        title: 'Squadra',
        body: 'Niente eroi solitari: si vince e si sbaglia insieme.',
      },
      {
        tag: 'val_03',
        title: 'Benessere',
        body: 'Si lavora duro, ma nei tempi e modi giusti. La vita fuori esiste.',
      },
      {
        tag: 'val_04',
        title: 'Libertà',
        body: 'Niente micro-management. Ti diamo il contesto, decidi tu come arrivarci.',
      },
      {
        tag: 'val_05',
        title: 'Responsabilità',
        body: 'Libertà e responsabilità sono la stessa moneta. Tu owner del tuo lavoro.',
      },
      {
        tag: 'val_06',
        title: 'Crescita',
        body: 'Tempo per studiare, sperimentare e diventare più bravo. Sul serio.',
      },
    ]

    const culturaHtml = cultura
      .map(
        ({tag, title, body}) => `
      <div class="feature-card">
        <div class="feature-num">${tag}</div>
        <h3>${title}</h3>
        <p>${body}</p>
      </div>`,
      )
      .join('')

    return `
${pageHero({
  label: 'lavora con noi',
  title: '<span class="dim">&gt; </span>join <span class="accent">--team=forge</span>',
  lead: 'Cerchiamo informatici veri: persone che scrivono codice serio, dicono quello che pensano e hanno voglia di crescere. AI + umano, metodo agile, GitHub aperto.',
  actions:
    '<a class="btn-primary" href="#posizioni-aperte" aria-label="Vai alle posizioni aperte">vedi_posizioni →</a>',
})}

<!-- ── Perché Forge ────────────────────────────────────────── -->
<section class="sec-paper">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">// </span>perché forge</div>
      <h2>Non cerchiamo risorse.<br>Cerchiamo persone.</h2>
    </div>
    <div class="prose">
      <p class="lead">Ecco cosa trovi qui — senza aggettivi da career page.</p>
      <p>Lavoriamo con <strong>metodologie agili</strong> (Scrum): sprint corti, priorità che si adattano, rilasci frequenti. Parli con chi costruisce, non con un commerciale. GitHub aperto, decisioni spiegate, codice in produzione.</p>
      <p>Usiamo l'<strong>intelligenza artificiale</strong> internamente e la portiamo ai clienti. Se ti piace stare sul pezzo e imparare sul campo, sei nel posto giusto.</p>
      <a class="fg-link" href="/team/" aria-label="Conosci il team">vai_al_team — vedi chi troveresti →</a>
    </div>
  </div>
</section>

<!-- ── Cultura ─────────────────────────────────────────────── -->
<section class="sec-paper2">
  <div class="section-intro">
    <div class="label"><span class="dim">// </span>la cultura</div>
    <h2>Cosa ci sta a cuore.</h2>
  </div>
  <div class="feature-grid cols-3">${culturaHtml}</div>
</section>

<!-- ── Posizioni aperte ────────────────────────────────────── -->
<section class="sec-dark" id="posizioni-aperte">
  <div class="inner">
    <div class="label"><span class="dim">// </span>posizioni aperte</div>
    <div class="terminal" style="margin:16px 0 32px;max-width:480px;" aria-hidden="true">
      <div class="terminal-bar">
        <span class="terminal-dot red"></span>
        <span class="terminal-dot yel"></span>
        <span class="terminal-dot grn"></span>
        <span class="terminal-title">forge — posizioni.log</span>
      </div>
      <div class="terminal-body">
        <div class="cmd"><span class="prompt">$</span> ls /posizioni</div>
        <div class="result"><span style="color:var(--text-dim)"># 0 risultati… per ora.</span></div>
        <div class="cursor-line"><span class="prompt">$</span> <span class="terminal-cursor">&nbsp;</span></div>
      </div>
    </div>
    <h2>Posizioni aperte.</h2>

    <div class="position-card" style="margin-top:24px;">
      <div>
        <h3>Sviluppatore Software</h3>
        <p>Cerchiamo uno sviluppatore da inserire nel team di Varese. Esperienza con più linguaggi e con strumenti di AI/ML sono requisiti apprezzati: l'importante è la voglia di migliorare.</p>
        <div class="position-meta"><span class="dim">sede · Varese</span> · <span class="dim">tempo pieno</span></div>
      </div>
      <div class="position-action">
        <a class="btn-primary" href="/lavora-con-noi/sviluppatore-software/" aria-label="Candidati per sviluppatore software">candidati →</a>
      </div>
    </div>

    <p style="max-width:58ch;margin:32px 0 8px;color:var(--text-muted);">Al momento non hai trovato il ruolo giusto? I talenti veri ci interessano sempre.</p>
  </div>
</section>

<!-- ── Candidatura spontanea ──────────────────────────────── -->
<section class="sec-paper" id="candidatura-spontanea">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">$ </span>./candidati.sh</div>
      <h2>Candidatura<br>spontanea.</h2>
    </div>
    <div class="prose">
      <p>Non c'è il ruolo giusto per te in elenco? Scrivici lo stesso. Raccontaci chi sei, cosa sai fare e perché Forge. Le porte sono aperte ai talenti, sempre.</p>
      <p>Scrivi a <a href="mailto:${data.forge.contacts.career}">${data.forge.contacts.career}</a> con oggetto <span style="font-family:var(--mono)">[candidatura spontanea]</span> e allegaci il CV o un link al tuo lavoro.</p>
      <p style="color:var(--text-muted);margin-top:8px;">Ti risponderemo. Anche se non c'è un match subito, ti teniamo presente.</p>
    </div>
  </div>
</section>

<!-- ── Easter egg ──────────────────────────────────────────── -->
<section class="sec-dark2" style="padding:32px 0;">
  <div class="inner">
    <p style="font-family:var(--mono);color:var(--text-dim);font-size:13px;"># psst: c'è un white rabbit nascosto nella console del sito. Trovalo. 🐇</p>
  </div>
</section>

<!-- ── CTA ─────────────────────────────────────────────────── -->
<section class="sec-paper2">
  <div class="cta-band">
    <h2>Pensi di essere la persona giusta?</h2>
    <p>Non aspettare il ruolo perfetto. Candidati — ci pensiamo noi.</p>
    <div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center;">
      <a class="btn-primary" href="mailto:${data.forge.contacts.career}" aria-label="Invia la candidatura spontanea">candidati →</a>
      <a class="btn-secondary" href="/team/" aria-label="Conosci il team">vai_al_team →</a>
    </div>
  </div>
</section>`
  }
}
