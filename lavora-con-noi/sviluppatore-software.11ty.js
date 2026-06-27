const pageHero = require('../_includes/components/page-hero')
const {form, inputField, submitButton} = require('../_includes/components/form')

module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Lavora con Noi: Sviluppatore Software',
      pageDescription:
        'Come sviluppatore software in Forge lavorerai a Varese su progetti innovativi con tecnologie diverse: TypeScript, Python, Angular, AWS e altro.',
      eleventyNavigation: {
        key: 'sviluppatore-software',
        parent: 'lavora-con-noi',
        title: 'Sviluppatore Software',
      },
    }
  }

  render(data) {
    return `
${pageHero({
  label: 'lavora con noi · posizione aperta',
  title: 'Sviluppatore <span class="accent">Software</span>',
  lead: 'Lavora a Varese su progetti innovativi con tecnologie diverse. Continuous delivery, pair programming e tanta voglia di imparare.',
  actions: '<a class="btn-primary" href="#application-form">Candidati ora →</a>',
})}

<!-- ── Job description ─────────────────────────────────────── -->
<section class="sec-paper">
  <div class="job-layout">
    <div class="prose">
      <div class="label"><span class="dim">// </span>job description</div>
      <h2 style="margin:0 0 20px;">Cosa farai</h2>
      <p>Cerchiamo uno sviluppatore software da inserire nel team di Varese. Esperienza con più linguaggi e con strumenti di AI e Machine Learning sono <strong>requisiti opzionali</strong>.</p>
      <p>Usiamo la <strong>metodologia Agile</strong> applicata allo sviluppo, con un approccio di <strong>continuous delivery</strong> e test automatici per consolidare il lavoro (e dormire sonni tranquilli). Incentiviamo il pair programming per diffondere conoscenza e stimolare soluzioni innovative.</p>
      <p>Usiamo tecnologie diverse a seconda del contesto: Python e PyTorch, TypeScript, Angular, NestJS, AWS cloud-native, e altro. Per noi è <strong>indispensabile</strong> la passione per l'informatica e la curiosità verso nuove sfide.</p>
      <p>Crediamo molto nella <strong>formazione</strong>: riserviamo a ogni persona del team tempo dedicato alla crescita professionale e a progetti personali. Contribuiamo a diversi <strong>progetti open source</strong>, dallo sviluppo multipiattaforma alla gestione dell'autenticazione di cloud tools.</p>
    </div>
    <aside class="job-aside">
      <div class="feature-card">
        <h4>Dettagli</h4>
        <ul>
          <li>Luogo · Varese</li>
          <li>Settore · IT</li>
          <li>Contratto · Tempo pieno</li>
        </ul>
        <a class="btn-primary" href="#application-form" style="display:block;text-align:center;">Candidati →</a>
      </div>
    </aside>
  </div>
</section>

<!-- ── Responsabilità ──────────────────────────────────────── -->
<section class="sec-dark">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">// </span>cosa potresti fare</div>
      <h2>Il lavoro,<br>nel concreto.</h2>
    </div>
    <div class="prose">
      <ul>
        <li>Scrivere codice semplice, sicuro, documentato e testato</li>
        <li>Progettare modelli di Machine Learning per ottimizzazione e riconoscimento di pattern</li>
        <li>Sviluppare architetture basate su AI Generativa per automatizzare processi</li>
        <li>Integrare software robusto e scalabile</li>
        <li>Condurre analisi e ottimizzazione delle performance</li>
        <li>Collaborare con il team allo sviluppo di prodotti digitali</li>
        <li>Restare aggiornato su tecnologie, trend e best practice — e portarli nel lavoro quotidiano</li>
        <li>Misurarti su progetti di tipologia, ambito e settore diversi</li>
      </ul>
    </div>
  </div>
</section>

<!-- ── Chi cerchiamo ───────────────────────────────────────── -->
<section class="sec-paper2">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">// </span>chi stiamo cercando</div>
      <h2>Non poniamo vincoli<br>sull'esperienza.</h2>
    </div>
    <div class="prose">
      <p>L'importante è che tu abbia:</p>
      <ul>
        <li><strong>Voglia di metterti in gioco</strong> — passione per ciò che fai e per i progetti sfidanti</li>
        <li><strong>Attitudine al lavoro di squadra</strong> — apprezzi il confronto più del lavoro in solitaria</li>
        <li><strong>Voglia di imparare</strong> — non temi nuove sfide né di rimboccarti le maniche</li>
        <li><strong>Trasparenza</strong> — dici ciò che pensi in modo costruttivo</li>
        <li><strong>Desiderio di crescita</strong> — cerchi un percorso professionale condiviso</li>
      </ul>
    </div>
  </div>
</section>

<!-- ── Cosa offriamo ───────────────────────────────────────── -->
<section class="sec-paper">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">// </span>cosa ti offriamo</div>
      <h2>Persone trattate<br>con rispetto.</h2>
    </div>
    <div class="prose">
      <ul>
        <li>Un ambiente positivo, dinamico e sempre aperto al dialogo</li>
        <li>Ore di studio per investire sulla tua formazione e crescita</li>
        <li>PerPranzo nei giorni in ufficio (pranzo al ristorante pagato)</li>
        <li>Free coffee &amp; snacks</li>
      </ul>
      <p style="margin-top:20px;">Tutte le candidature sono valutate singolarmente: ci teniamo a rispondere a ogni candidato.</p>
    </div>
  </div>
</section>

<!-- ── Form candidatura ────────────────────────────────────── -->
<section class="sec-dark2" id="application-form">
  <div class="section-intro" style="margin-bottom:8px;">
    <div class="label"><span class="dim">// </span>candidati</div>
    <h2>Candidati per questa posizione.</h2>
  </div>
  <div class="fg-form">
    ${form(
      'application-form',
      'applicationform',
      data.form.url.applyForJob(),
      `<div class="group-2">
            ${inputField('app-name', 'name', 'text', 'Nome e Cognome', 'Elliot Alderson')}
            ${inputField('app-email', 'from', 'email', 'E-mail', 'mr.robot@example.com')}
        </div>
        <div class="group-2">
            ${inputField('app-phone', 'phone', 'text', 'Telefono', '3450000000')}
            ${inputField('app-curriculum', 'curriculum', 'file', 'Curriculum', 'Carica il tuo CV')}
        </div>
        <div class="group-1">
            ${inputField('app-about', 'about_you', 'textarea', 'Raccontaci qualcosa in più su di te', '')}
        </div>
        ${submitButton('Candidati ora')}`,
      '<p class="form-success"><span class="tick">✓</span> Grazie per averci contattato! Un membro del team si metterà in contatto con te il prima possibile.</p>',
      data,
    )}
  </div>
</section>`
  }
}
