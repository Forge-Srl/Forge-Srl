const fs = require('node:fs')
const pageHero = require('./_includes/components/page-hero')

const teamPhotoFile = 'team.jpg'

module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Il team Forge: chi siamo dietro le tastiere',
      pageDescription:
        'Conosci le persone di Forge: sviluppatori, esperti AI e project manager a Varese. La nostra filosofia, come collaboriamo e come lavorare con noi.',
      eleventyNavigation: {
        key: 'team',
        title: 'Team',
        parent: 'home',
      },
    }
  }

  async render(data) {
    const {features, team} = data

    // Foto del team nell'hero: spenta finché non c'è la foto (features.teamHeroPhoto).
    const teamPhoto =
      features.teamHeroPhoto && fs.existsSync(`assets/images/${teamPhotoFile}`)
        ? await this.image(
            teamPhotoFile,
            'Il team di Forge',
            'page-hero-img',
            [560, 1120],
            '(max-width: 900px) 100vw, 560px',
          )
        : ''

    // Griglia "choose your character": spenta finché non ci sono avatar, ruoli e interviste (features.teamMembers).
    const membersHtml = features.teamMembers
      ? (
          await Promise.all(
            team.members.map(async ({name, role, avatar, skills, interview}, i) => {
              const avatarHtml = avatar
                ? await this.image(avatar, `Avatar pixel art di ${name}`, 'player-avatar-img', [192], '192px')
                : '<span class="player-avatar-empty" aria-hidden="true">?</span>'
              const skillsHtml = skills
                .map(
                  ({l, v}) => `
            <div class="player-skill">
              <span class="player-skill-l">${l}</span>
              <span class="player-skill-bar" role="img" aria-label="${v} su 5">${'■'.repeat(v)}<span class="dim">${'□'.repeat(5 - v)}</span></span>
            </div>`,
                )
                .join('')
              const interviewHtml = Object.entries(interview)
                .map(
                  ([key, answer]) => `
              <div class="player-qa"><dt>${team.questions[key]}</dt><dd>${answer}</dd></div>`,
                )
                .join('')

              return `
        <article class="player-card">
          <div class="player-num">p${String(i + 1).padStart(2, '0')}</div>
          <div class="player-avatar">${avatarHtml}</div>
          <h3 class="player-name">${name}</h3>
          <div class="player-role">${role}</div>
          <div class="player-skills">${skillsHtml}</div>
          <details class="player-interview">
            <summary>intervista →</summary>
            <dl>${interviewHtml}</dl>
          </details>
        </article>`
            }),
          )
        ).join('')
      : ''

    const filosofia = [
      {
        tag: 'fil_01',
        title: 'Umiltà',
        body: 'Nessuno qui le sa tutte. Si fanno domande, si chiede aiuto, si impara dagli errori, anche dai propri.',
      },
      {
        tag: 'fil_02',
        title: 'Squadra',
        body: 'Il risultato è di tutti. Ci copriamo le spalle, condividiamo quello che sappiamo e festeggiamo le vittorie insieme.',
      },
      {
        tag: 'fil_03',
        title: 'Benessere',
        body: 'Lavoriamo meglio se stiamo bene. Ritmi sostenibili, ascolto reale, spazio per la vita fuori dallo schermo.',
      },
      {
        tag: 'fil_04',
        title: 'Libertà',
        body: 'Diamo fiducia e autonomia. Ognuno organizza il proprio lavoro, perché chi fa sa anche come farlo meglio.',
      },
      {
        tag: 'fil_05',
        title: 'Responsabilità',
        body: 'Alla libertà corrisponde la responsabilità del risultato. Prendiamo impegni e li manteniamo.',
      },
      {
        tag: 'fil_06',
        title: 'Trasparenza',
        body: 'Decisioni spiegate, avanzamenti visibili, conti chiari. Dentro la squadra come con i clienti.',
      },
    ]

    const filosofiaHtml = filosofia
      .map(
        ({tag, title, body}) => `
      <div class="feature-card">
        <div class="feature-num">${tag}</div>
        <h3>${title}</h3>
        <p>${body}</p>
      </div>`,
      )
      .join('')

    const pratiche = [
      {cmd: '> sprint corti', desc: 'risultati visibili ogni 1-2 settimane'},
      {cmd: '> stand-up regolari', desc: 'niente sorprese, sai sempre a che punto siamo'},
      {cmd: '> deploy continui', desc: 'il software arriva in produzione, non resta in bozza'},
      {cmd: '> AI + umano', desc: 'più valore in meno tempo, con un responsabile vero'},
    ]

    const praticheHtml = pratiche
      .map(
        ({cmd, desc}) => `
      <div class="metodo-step">
        <div class="metodo-num"><span class="dim">&gt;</span></div>
        <div class="metodo-title" style="font-family:var(--mono)">${cmd.replace('> ', '')}</div>
        <div class="metodo-body">${desc}</div>
      </div>`,
      )
      .join('')

    return `
<script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Forge S.r.l.',
      url: data.forge.domain,
      member: {
        '@type': 'OrganizationRole',
        description: 'Sviluppatori, esperti AI e project manager a Varese',
      },
    })}</script>

${pageHero({
  label: 'team',
  title: 'Chi siamo, dietro le <span class="accent">tastiere</span>.',
  lead: 'Forge è prima di tutto un gruppo di persone. Informatici con specializzazioni diverse che condividono curiosità, metodo e una buona dose di caffè.',
  actions: '<a class="btn-primary" href="/lavora-con-noi/" aria-label="Vai alle posizioni aperte">lavora_con_noi →</a>',
  aside: teamPhoto,
})}

<!-- ── Intro squadra ───────────────────────────────────────── -->
<section class="sec-paper">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">// </span>le persone</div>
      <h2>Specializzazioni diverse,<br>una sola squadra.</h2>
    </div>
    <div class="prose">
      <p class="lead">Mettiamo insieme sviluppatori back-end, front-end e mobile, persone che lavorano con i dati e con l'AI, e chi tiene la rotta dei progetti.</p>
      <p>Competenze diverse che si parlano davvero, perché i problemi reali raramente stanno dentro una sola casella.</p>
      <p>Non abbiamo un reparto commerciale che fa da filtro: quando lavori con noi, <strong>parli con chi costruisce</strong>.</p>
    </div>
  </div>
</section>

<!-- ── Griglia membri ──────────────────────────────────────── -->
<section class="sec-dark">
  <div class="inner">
    <div class="label"><span class="dim">// </span>chi trovi qui</div>
    <h2>Le persone di Forge.</h2>
    ${
      features.teamMembers
        ? `<p style="max-width:54ch;margin:16px 0 40px;color:var(--text-muted);">
      Scegli il tuo personaggio: ognuno ha la sua classe, le sue statistiche e qualche risposta da darti.
    </p>
    <div class="player-grid">${membersHtml}</div>`
        : `<p style="max-width:54ch;margin:16px 0 40px;color:var(--text-muted);">
      Puoi conoscerci di persona: la prima call è gratuita.
    </p>
    <div class="terminal" aria-hidden="true" style="max-width:480px;">
      <div class="terminal-bar">
        <span class="terminal-dot red"></span>
        <span class="terminal-dot yel"></span>
        <span class="terminal-dot grn"></span>
        <span class="terminal-title">forge/team.log</span>
      </div>
      <div class="terminal-body">
        <div class="cmd"><span class="prompt">$</span> ls ./team</div>
        <div class="ok"><span class="tick">✓</span> backend_devs/</div>
        <div class="ok"><span class="tick">✓</span> frontend_devs/</div>
        <div class="ok"><span class="tick">✓</span> ai_engineers/</div>
        <div class="ok"><span class="tick">✓</span> data_scientists/</div>
        <div class="ok"><span class="tick">✓</span> project_managers/</div>
        <div class="cursor-line"><span class="prompt">$</span> <span class="terminal-cursor">&nbsp;</span></div>
      </div>
    </div>`
    }
    <p style="margin-top:32px;">
      <a class="btn-primary" href="/prenota-una-call/" aria-label="Prenota una call gratuita">prenota_call: conosciamoci →</a>
    </p>
  </div>
</section>

<!-- ── Filosofia ───────────────────────────────────────────── -->
<section class="sec-paper2">
  <div class="section-intro">
    <div class="label"><span class="dim">// </span>la nostra filosofia</div>
    <h2>Come stiamo insieme.</h2>
    <p class="lead">La tecnologia cambia, il modo in cui lavoriamo insieme no. Questi sono i principi che teniamo sul serio, non perché stanno bene su una parete, ma perché ci fanno lavorare meglio.</p>
  </div>
  <div class="feature-grid cols-3">${filosofiaHtml}</div>
</section>

<!-- ── Come collaboriamo ──────────────────────────────────── -->
<section class="sec-paper">
  <div class="inner">
    <div class="label"><span class="dim">// </span>come collaboriamo</div>
    <h2 style="margin:0 0 16px;">Agile per davvero, AI + umano.</h2>
    <div class="split-grid" style="margin-top:32px;">
      <div class="prose">
        <p>Lavoriamo con metodologie <strong>agili</strong> (Scrum): sprint corti, rilasci frequenti, priorità che si adattano quando cambia il contesto. Vuol dire una cosa semplice per te: vedi risultati spesso e puoi correggere la rotta strada facendo, senza aspettare mesi.</p>
        <p>Usiamo l'<strong>intelligenza artificiale</strong> per andare più veloci e togliere il lavoro ripetitivo, ma le decisioni restano umane. L'AI accelera, le persone rispondono del risultato.</p>
      </div>
      <div class="metodo-grid">${praticheHtml}</div>
    </div>
  </div>
</section>

<!-- ── CTA ─────────────────────────────────────────────────── -->
<section class="sec-dark">
  <div class="cta-band">
    <h2>Vuoi lavorare con noi?</h2>
    <p>Cerchiamo persone curiose a cui piace imparare. Dai un'occhiata alle posizioni aperte, e se non c'è quella giusta, scrivici lo stesso.</p>
    <div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center;">
      <a class="btn-primary" href="/lavora-con-noi/" aria-label="Vai alle posizioni aperte">lavora_con_noi →</a>
      <a class="btn-secondary" href="/prenota-una-call/" aria-label="Prenota una call gratuita">prenota_call →</a>
    </div>
  </div>
</section>`
  }
}
