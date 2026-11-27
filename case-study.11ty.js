const pageHero = require('./_includes/components/page-hero')
const features = require('./_data/features')

module.exports = class {
  data() {
    // Pagina spenta finché non ci sono loghi, liberatorie e risposte ai questionari (features.caseStudies):
    // non viene generata e resta fuori da collezioni e sitemap.
    return {
      layout: 'layout.11ty.js',
      permalink: features.caseStudies ? '/case-study/' : false,
      eleventyExcludeFromCollections: !features.caseStudies,
      pageTitle: 'Case study: progetti AI e software | Forge',
      pageDescription:
        'I progetti che abbiamo costruito: sfide reali, soluzioni AI + umano e risultati misurabili. Scopri i case study di Forge, software house a Varese.',
      eleventyNavigation: {
        key: 'case-study',
        title: 'Case study',
        parent: 'home',
      },
    }
  }

  async render(data) {
    const {areas, items} = data.cases
    const areaTitles = Object.fromEntries(areas.map(({id, title}) => [id, title]))

    const logoHtml = async (client, cssClass, width) =>
      client.logo
        ? await this.image(client.logo, `Logo ${client.name}`, cssClass, [width, width * 2], `${width}px`)
        : `<span class="client-logo-fallback">${client.name}</span>`

    // Filtro a chip (spento: la griglia degli ambiti fa da navigazione). Si accende con features.caseStudyFilter.
    const sectors = [
      {id: 'tutti', label: 'tutti'},
      ...areas.filter(({id}) => items.some(({area}) => area === id)).map(({id, title}) => ({id, label: title})),
    ]
    const sectorsHtml = sectors
      .map(
        ({id, label}, i) =>
          `<button type="button" class="sector-chip${i === 0 ? ' is-active' : ''}" data-sector="${id}" aria-pressed="${i === 0}">${label}</button>`,
      )
      .join('')

    const microdata = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Case study Forge',
      description: 'Progetti AI e sviluppo software di Forge, software house a Varese',
      itemListElement: items.map(({id, client, title, body}, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${data.forge.domain}/case-study/#cs-${id}`,
        item: {
          '@type': 'CreativeWork',
          name: title,
          description: body,
          about: {'@type': 'Organization', name: client.name},
        },
      })),
    }

    // Ambiti: ogni card porta al primo case study del suo ambito; senza case study resta informativa.
    const areasHtml = (
      await Promise.all(
        areas.map(async ({id, num, title, body}) => {
          const cs = items.find(({area}) => area === id)
          if (!cs) {
            return `
      <div class="feature-card area-card">
        <div class="feature-num">${num}</div>
        <h3>${title}</h3>
        <p>${body}</p>
      </div>`
          }

          return `
      <a class="feature-card area-card is-interactive" href="#cs-${cs.id}">
        <div class="area-card-head">
          <div class="feature-num">${num}</div>
          <div class="area-client">${await logoHtml(cs.client, 'area-client-logo', 96)}</div>
        </div>
        <h3>${title}</h3>
        <p>${body}</p>
        <span class="fg-link">${cs.client.name}: leggi il caso ↓</span>
      </a>`
        }),
      )
    ).join('')

    const casesHtml = (
      await Promise.all(
        items.map(async ({id, area, client, status, title, body, log, metrics, interview, interviewee}) => {
          const logHtml = log
            .map((line) => `<div class="cs-log-line"><span class="cs-tick">◆</span> ${line}</div>`)
            .join('')

          const metricsHtml = metrics
            .map(
              ({n, l}) => `
          <div>
            <div class="cs-metric-n${n === 'n/d' ? ' is-pending' : ''}">${n}</div>
            <div class="cs-metric-l">${l}</div>
          </div>`,
            )
            .join('')
          const hasPendingMetrics = metrics.some(({n}) => n === 'n/d')

          const companyInfo = [
            ['settore', client.sector],
            ['sede', client.location],
            ['dimensione', client.size],
            ['cliente dal', client.since],
            [
              'sito',
              client.website
                ? `<a href="${client.website}" target="_blank" rel="noopener">${client.website.replace(/^https?:\/\//, '')}</a>`
                : null,
            ],
          ]
            .filter(([, value]) => value)
            .map(([key, value]) => `<div class="cs-info-row"><dt>${key}</dt><dd>${value}</dd></div>`)
            .join('')

          const interviewHtml = interview
            .map(
              ({q, a}) => `
            <div class="cs-qa">
              <p class="cs-q"><span class="dim">&gt; </span>${q}</p>
              <p class="cs-a">“${a}”</p>
            </div>`,
            )
            .join('')

          return `
      <article class="cs-card" id="cs-${id}" data-sector="${area}">
        <div class="cs-media">
          <div class="cs-media-logo">${await logoHtml(client, 'cs-logo-img', 280)}</div>
          <dl class="cs-info">
            <div class="cs-info-row"><dt>cliente</dt><dd>${client.name}</dd></div>
            ${companyInfo}
          </dl>
        </div>
        <div class="cs-content">
          <div class="cs-head">
            <span class="cs-client">${client.name}</span>
            <span class="cs-sector">· ${areaTitles[area]}</span>
            <span class="cs-status">${status}</span>
          </div>
          <h3>${title}</h3>
          <p class="cs-body">${body}</p>

          <div class="cs-log">${logHtml}</div>

          <div class="cs-metrics">${metricsHtml}</div>
          ${hasPendingMetrics ? '<div class="cs-note"># metriche complete in validazione con il cliente</div>' : ''}

          <div class="cs-interview">
            <div class="cs-interview-label"><span class="dim">// </span>intervista</div>
            ${interviewHtml}
            <div class="cs-author">${interviewee.name}, ${interviewee.role} @ ${client.name}</div>
          </div>
        </div>
      </article>`
        }),
      )
    ).join('')

    return `
<script type="application/ld+json">${JSON.stringify(microdata)}</script>
${data.features.caseStudyFilter ? '<script src="/assets/js/case-filter.js" defer></script>' : ''}

${pageHero({
  label: 'case study',
  title: 'Progetti in corso,<br>raccontati dai <span class="accent">numeri</span>.',
  lead: "L'evoluzione dei progetti, i risultati ottenuti e la parola ai clienti che li hanno vissuti. Niente promesse di marketing: pubblichiamo un case study solo quando i numeri sono verificati.",
  extra: data.features.caseStudyFilter
    ? `<div class="sector-filter" data-sector-filter hidden>${sectorsHtml}</div>`
    : '',
})}

<!-- ── Ambiti di progetto ──────────────────────────────────── -->
<section class="sec-dark" id="ambiti">
  <div class="section-intro">
    <div class="label"><span class="dim">// </span>ambiti di progetto</div>
    <h2>Cosa abbiamo costruito.</h2>
    <p class="lead">Gli ambiti in cui operiamo. Dove trovi il nome di un cliente, scegli l'ambito per leggere com'è andata.</p>
  </div>
  <div class="feature-grid cols-3">${areasHtml}</div>
</section>

<!-- ── Elenco case study ──────────────────────────────────── -->
<section class="sec-paper">
  <div class="inner">
    <div class="cs-list" data-case-list>${casesHtml}</div>
    <p class="cs-empty" data-case-empty hidden>Nessun case study in questo ambito. <a class="fg-link" href="/servizi/">Guarda i servizi</a>.</p>
  </div>
</section>

<!-- ── CTA finale ──────────────────────────────────────────── -->
<section class="sec-paper2">
  <div class="cta-band">
    <h2>Il prossimo case study<br>potrebbe essere il tuo.</h2>
    <p>Raccontacelo in 15 minuti. La prima call è gratuita e senza impegno.</p>
    <div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center;">
      <a class="btn-primary" href="/prenota-una-call/" aria-label="Prenota una call gratuita">prenota_call →</a>
      <a class="btn-secondary" href="/servizi/" aria-label="Vedi prodotti e servizi Forge">vedi_servizi →</a>
    </div>
  </div>
</section>`
  }
}
