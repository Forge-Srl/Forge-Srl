const pageHero = require('./_includes/components/page-hero')

module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Chi siamo — Forge, software house di Varese',
      pageDescription:
        'Siamo un gruppo di informatici a Varese che progetta, costruisce e manda in produzione software e soluzioni AI. Fiducia, onestà, innovazione, trasparenza.',
      eleventyNavigation: {
        key: 'chi-siamo',
        title: 'Chi Siamo',
        parent: 'home',
      },
    }
  }

  render(data) {
    const valori = [
      {
        tag: 'val_01',
        title: 'Fiducia',
        body: 'La costruiamo dicendo le cose come stanno, fin dalla prima call. Ti diciamo se possiamo aiutarti davvero — e anche quando non siamo la scelta giusta.',
      },
      {
        tag: 'val_02',
        title: 'Onestà',
        body: 'Niente sorprese in fattura, niente promesse che non possiamo mantenere. Stime chiare, tempi realistici, e se sbagliamo qualcosa lo diciamo.',
      },
      {
        tag: 'val_03',
        title: 'Innovazione',
        body: 'È la nostra parola preferita. Sperimentiamo, studiamo e non smettiamo di imparare — così portiamo ai clienti tecnologie mature, non mode passeggere.',
      },
      {
        tag: 'val_04',
        title: 'Trasparenza',
        body: 'Lavori a contatto diretto con chi scrive il codice. Avanzamenti visibili, decisioni spiegate, accesso a quello che costruiamo.',
      },
    ]

    const metodo = [
      {
        num: '01',
        title: 'Ascoltiamo',
        body: 'Capiamo il problema e ti diciamo con onestà se possiamo davvero aiutarti.',
      },
      {num: '02', title: 'Risolviamo', body: 'Troviamo la soluzione più efficace e la validiamo con dati misurabili.'},
      {num: '03', title: 'Costruiamo', body: 'Agile e Scrum: sprint corti, rilasci frequenti, flessibilità reale.'},
      {num: '04', title: 'Restiamo', body: 'Feedback costante, rilascio graduale e supporto anche dopo il go-live.'},
    ]

    const valoriHtml = valori
      .map(
        ({tag, title, body}) => `
      <div class="feature-card">
        <div class="feature-num">${tag}</div>
        <h3>${title}</h3>
        <p>${body}</p>
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

    return `
${pageHero({
  label: 'chi siamo',
  title: 'Siamo una <span class="accent">{forge}</span>,<br>non un\'agenzia.',
  lead: "Un gruppo di informatici che progetta, costruisce e manda in produzione software e soluzioni AI. Tra te e chi scrive il codice non c'è nessun filtro: parli direttamente con chi costruisce.",
  actions: '<a class="btn-primary" href="/contattaci/" aria-label="Prenota una call gratuita">prenota_call →</a>',
})}

<!-- ── Estensione del team ─────────────────────────────────── -->
<section class="sec-paper">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">// </span>il nostro ruolo</div>
      <h2>Un'estensione<br>della tua squadra.</h2>
    </div>
    <div class="prose">
      <p class="lead">Il nostro obiettivo è semplice: arrivare al risultato <em>insieme</em> a chi seguiamo. Non vendiamo ore, costruiamo soluzioni che restano.</p>
      <p>Siamo una realtà giovane con sede a <strong>Varese</strong> che unisce competenze diverse — <strong>intelligenza artificiale</strong>, sviluppo software e cloud — sotto lo stesso tetto. Ci sono sviluppatori back-end, front-end e mobile, persone che lavorano sui dati e con l'AI, e chi tiene insieme i progetti.</p>
      <p>Siamo nati nel <strong>2018</strong> e da allora trasformiamo idee in prodotti reali: studiamo a fondo la tua visione e costruiamo soluzioni digitali competitive, fatte per durare. Amiamo le metodologie agili, il lavoro condiviso e il codice che finisce in produzione — non nelle slide.</p>
      <a class="fg-link" href="/servizi/">Scopri cosa costruiamo →</a>
    </div>
  </div>
</section>

<!-- ── Quote ───────────────────────────────────────────────── -->
<section class="sec-dark">
  <div class="quote-block">
    <p>Il successo dei nostri clienti è il nostro successo. Per questo restiamo anche dopo il go-live.</p>
  </div>
</section>

<!-- ── Valori ──────────────────────────────────────────────── -->
<section class="sec-paper2" id="valori">
  <div class="section-intro">
    <div class="label"><span class="dim">// </span>i nostri valori</div>
    <h2>Quattro parole su cui non transigiamo.</h2>
  </div>
  <div class="feature-grid cols-2">${valoriHtml}</div>
</section>

<!-- ── Come lavoriamo ──────────────────────────────────────── -->
<section class="sec-paper">
  <div class="inner">
    <div class="label"><span class="dim">// </span>come lavoriamo</div>
    <h2 style="margin:0 0 16px;">AI + umano. Il meglio di entrambi.</h2>
    <p style="max-width:60ch;margin:0 0 40px;color:var(--text-muted);">Usiamo l'intelligenza artificiale per andare più veloci e togliere il lavoro ripetitivo. Ma la testa resta umana: il giudizio, la responsabilità e le scelte sul tuo progetto sono nostre, non di un modello.</p>
    <div class="metodo-grid">${metodoHtml}</div>
  </div>
</section>

<!-- ── Il team ─────────────────────────────────────────────── -->
<section class="sec-dark">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">// </span>il team</div>
      <h2>Dietro le tastiere<br>ci sono persone.</h2>
    </div>
    <div class="prose">
      <p>Il lavoro di squadra è il nostro vero asset. Mettiamo insieme sviluppatori esperti in tecnologie diverse, persone che lavorano con i dati e con l'AI, e chi tiene la rotta dei progetti.</p>
      <p>Ci guidano curiosità e voglia di imparare. E sì — ci divertiamo a farlo.</p>
      <a class="fg-link" href="/team/">conosci_il_team →</a>
    </div>
  </div>
</section>

<!-- ── CTA ─────────────────────────────────────────────────── -->
<section class="sec-paper2">
  <div class="cta-band">
    <h2>Hai un progetto in mente?</h2>
    <p>Raccontacelo in 15 minuti. La prima call è gratuita e senza impegno.</p>
    <div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center;">
      <a class="btn-primary" href="/contattaci/" aria-label="Prenota una call gratuita">prenota_call →</a>
      <a class="btn-secondary" href="/team/" aria-label="Conosci il team">conosci_il_team →</a>
    </div>
  </div>
</section>`
  }
}
