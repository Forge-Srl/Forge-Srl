module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: '404 — pagina non trovata | Forge',
      pageDescription: 'Questa pagina non esiste (o non più). Torna alla home di Forge o prenota una call gratuita.',
      // Force output page to be /404.html instead of /404/index.html!
      permalink: '/404.html',
      eleventyExcludeFromCollections: true,
      eleventyNavigation: {
        title: 'Pagina non trovata!',
      },
    }
  }

  render(data) {
    return `
<section class="sec-dark">
  <div class="error-wrap">
    <div class="error-code">404</div>
    <div class="terminal error-terminal" aria-hidden="true">
      <div class="terminal-bar">
        <span class="terminal-dot red"></span>
        <span class="terminal-dot yel"></span>
        <span class="terminal-dot grn"></span>
        <span class="terminal-title">forge — runtime.log</span>
      </div>
      <div class="terminal-body">
        <div class="cmd"><span class="prompt">forge@varese:~$</span> cd /pagina-che-cercavi</div>
        <div class="err">bash: pagina: command not found</div>
        <div class="err">&gt; error 404: pagina non trovata</div>
        <div class="result"><span class="dim"># ma il talento sì.</span></div>
        <div class="trace">&nbsp;&nbsp;at <span class="fn">resolveRoute</span> (./src/router/index.js:42:69)</div>
        <div class="trace">&nbsp;&nbsp;at async <span class="fn">whereIsThisGoing</span> (forge-router.min.js:20:18)</div>
        <div class="trace">&nbsp;&nbsp;at <span class="fn">seeTheActualSourceCodeAt</span> (<a href="https://github.com/Forge-Srl/Forge-Srl" target="_blank" rel="noopener">github.com/Forge-Srl</a>)</div>
      </div>
    </div>
    <p><strong>Questa pagina non esiste (o non più).</strong> Forse l'URL è cambiato, o c'è un refuso. Niente di rotto: ripartiamo da qui.</p>
    <div class="label" style="margin-top:24px;margin-bottom:12px;"><span class="dim">$ </span>ls /percorsi-utili</div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-bottom:24px;">
      <a class="btn-primary" href="/" aria-label="Torna alla home">torna_alla_home →</a>
      <a class="btn-secondary" href="/servizi/" aria-label="Vai ai servizi">vedi_servizi →</a>
      <a class="btn-secondary" href="/case-study/" aria-label="Vai ai case study">vedi_case_study →</a>
      <a class="btn-secondary" href="/contattaci/" aria-label="Vai ai contatti">contatti →</a>
    </div>
    <p style="font-size:14px;color:var(--text-dim);">&gt; exit 404 — oppure <a href="/contattaci/" style="color:var(--orange)">scrivici cosa cercavi</a>.</p>
  </div>
</section>`
  }
}
