const pageHero = require('./_includes/components/page-hero')

module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Chi siamo',
      pageDescription:
        "Siamo una forge, non un'agenzia. Un gruppo di ingegneri che progetta, costruisce e manda software in produzione — e resta dopo il go-live.",
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
        title: 'Vision',
        body: 'Un mondo del lavoro che premia competenze e metodo. Dove il talento, non lo slide deck, decide il risultato.',
      },
      {
        tag: 'val_02',
        title: 'Mission',
        body: 'Affiancare le aziende nella crescita con un approccio concreto, basato su fiducia, trasparenza e codice che va in produzione.',
      },
      {
        tag: 'val_03',
        title: 'North Star',
        body: 'Misuriamo il valore in risultati: tempi di consegna rispettati, sistemi che reggono, persone soddisfatte.',
      },
    ]

    const metodo = [
      {num: '01', title: 'Ascoltiamo', body: 'Capiamo il problema e diciamo con onestà se possiamo davvero aiutarti.'},
      {num: '02', title: 'Risolviamo', body: 'Troviamo la soluzione più efficace e la validiamo con dati misurabili.'},
      {num: '03', title: 'Costruiamo', body: 'Agile e Scrum, sprint corti e deploy continui. Flessibilità reale.'},
      {num: '04', title: 'Restiamo', body: 'Feedback costante, rilascio graduale, e supporto anche dopo il go-live.'},
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
  lead: 'Un gruppo di ingegneri che progetta, costruisce e manda in produzione. Niente filtri commerciali tra te e chi scrive il codice.',
})}

<!-- ── Estensione del team ─────────────────────────────────── -->
<section class="sec-paper">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">// </span>il nostro ruolo</div>
      <h2>Un'estensione<br>della tua squadra.</h2>
    </div>
    <div class="prose">
      <p class="lead">Il nostro obiettivo è creare valore e arrivare al risultato insieme alle aziende che seguiamo.</p>
      <p>Siamo una realtà giovane che unisce competenze diverse — <strong>intelligenza artificiale</strong>, sviluppo software agile e cloud computing — sotto lo stesso tetto.</p>
      <p>Siamo nati nel <strong>2018</strong> e da allora trasformiamo idee in prodotti: studiamo a fondo la visione del cliente e costruiamo soluzioni digitali competitive, fatte per durare.</p>
      <p>Il nostro cuore pulsante è a <strong>Varese</strong>. Amiamo le metodologie agili, gli spazi condivisi e il codice che finisce in produzione.</p>
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
<section class="sec-paper2">
  <div class="section-intro">
    <div class="label"><span class="dim">// </span>i nostri valori</div>
    <h2>Come pensiamo il lavoro.</h2>
  </div>
  <div class="feature-grid cols-3">${valoriHtml}</div>
</section>

<!-- ── Come lavoriamo ──────────────────────────────────────── -->
<section class="sec-paper">
  <div class="inner">
    <div class="label"><span class="dim">// </span>come lavoriamo</div>
    <h2 style="margin:0 0 40px;">Concreti, flessibili, umani.</h2>
    <div class="metodo-grid">${metodoHtml}</div>
  </div>
</section>

<!-- ── Il team ─────────────────────────────────────────────── -->
<section class="sec-dark">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">// </span>il team</div>
      <h2>Il lavoro di squadra<br>è il nostro asset.</h2>
    </div>
    <div class="prose">
      <p>La nostra squadra mette insieme sviluppatori esperti in tecnologie diverse e project manager. Ci guidano la curiosità e la passione per le sfide.</p>
      <p>Teniamo al <strong>valore umano</strong>, ma non perdiamo mai di vista i numeri: sono loro a guidare decisioni e strategie.</p>
      <p>Sogniamo un mondo permeato dalla cultura digitale, e proviamo a diffonderla insegnando in università e aziende.</p>
      <a class="fg-link" href="/innovazione/">Scopri i nostri progetti →</a>
    </div>
  </div>
</section>

<!-- ── CTA ─────────────────────────────────────────────────── -->
<section class="sec-paper2">
  <div class="cta-band">
    <h2>Ti aiutiamo a raggiungere i tuoi obiettivi.</h2>
    <p>Hai bisogno di più informazioni o vuoi solo farti un'idea di come lavoriamo? Siamo a tua disposizione.</p>
    <a class="btn-primary" href="/contattaci/">Parliamone insieme →</a>
  </div>
</section>`
  }
}
