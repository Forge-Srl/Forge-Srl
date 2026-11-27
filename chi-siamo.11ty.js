const location = require('./_includes/components/location')
const pageHero = require('./_includes/components/page-hero')

module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Chi siamo — Forge, software house di Varese',
      pageDescription:
        'Siamo un gruppo di informatici a Varese che progetta, costruisce e manda in produzione software e soluzioni AI. La nostra missione e la nostra visione.',
      eleventyNavigation: {
        key: 'chi-siamo',
        title: 'Chi Siamo',
        parent: 'home',
      },
    }
  }

  async render(data) {
    const teamImage = await this.image(
      'forge-team.jpg',
      'Il team di Forge al completo davanti allo schermo con il logo Forge',
      'page-hero-img',
      [560, 1120],
      '(max-width: 900px) 100vw, 560px',
      true,
    )

    // La foto sta in una finestra "terminale" come quella della home, così si stacca meno dallo sfondo
    const teamPhoto = `<div class="terminal terminal-photo">
        <div class="terminal-bar" aria-hidden="true">
          <span class="terminal-dot red"></span>
          <span class="terminal-dot yel"></span>
          <span class="terminal-dot grn"></span>
          <span class="terminal-title">forge — team.jpg</span>
        </div>
        ${teamImage}
      </div>`

    const missione = [
      {
        tag: 'mission',
        title: 'La nostra missione',
        body: 'Specialisti nello sviluppo di soluzioni digitali innovative e AI, per accelerare la crescita del tuo business. Supportiamo clienti B2B e B2C con prodotti su misura.',
      },
      {
        tag: 'vision',
        title: 'La nostra visione',
        body: 'Essere il partner tecnologico di riferimento per le aziende che vogliono innovare, trasformando idee ambiziose in soluzioni digitali concrete e di valore.',
      },
    ]

    const missioneHtml = missione
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
  label: 'chi siamo',
  title: 'Siamo una <span class="accent">{forge}</span>,<br>non un\'agenzia.',
  lead: "Un gruppo di informatici che progetta, costruisce e manda in produzione software e soluzioni AI. Tra te e chi scrive il codice non c'è nessun filtro: parli direttamente con chi costruisce.",
  actions: '<a class="btn-primary" href="/prenota-una-call/" aria-label="Prenota una call gratuita">prenota_call →</a>',
  aside: teamPhoto,
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
      <p>Siamo nati nel <strong>2018</strong> e da allora trasformiamo idee in prodotti reali: studiamo a fondo la tua visione e costruiamo soluzioni digitali competitive, fatte per durare. Amiamo le metodologie agili, il lavoro condiviso e il codice che finisce in produzione.</p>
      <a class="fg-link" href="/servizi/">Scopri cosa costruiamo →</a>
    </div>
  </div>
</section>

<!-- ── Quote ───────────────────────────────────────────────── -->
<section class="sec-dark">
  <div class="quote-block">
    <p>Trasformiamo progetti ad hoc in prodotti core con forte valore strategico per il tuo business.</p>
  </div>
</section>

<!-- ── Missione e visione ─────────────────────────────────── -->
<section class="sec-paper2" id="missione">
  <div class="section-intro">
    <div class="label"><span class="dim">// </span>missione &amp; visione</div>
    <h2>Perché facciamo quello che facciamo.</h2>
  </div>
  <div class="feature-grid cols-2">${missioneHtml}</div>
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

<!-- ── Dove trovarci ───────────────────────────────────────── -->
${location({forge: data.forge})}

<!-- ── CTA ─────────────────────────────────────────────────── -->
<section class="sec-paper2">
  <div class="cta-band">
    <h2>Hai un progetto in mente?</h2>
    <p>Raccontacelo in 15 minuti. La prima call è gratuita e senza impegno.</p>
    <div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center;">
      <a class="btn-primary" href="/prenota-una-call/" aria-label="Prenota una call gratuita">prenota_call →</a>
      <a class="btn-secondary" href="/team/" aria-label="Conosci il team">conosci_il_team →</a>
    </div>
  </div>
</section>`
  }
}
