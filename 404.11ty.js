module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: '404',
      pageDescription: '',
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
        <div class="err">HTTPError: 404 (Not Found)</div>
        <div class="err">Uncaught ReferenceError: this page is not defined</div>
        <div class="trace">&nbsp;&nbsp;at <span class="fn">resolveRoute</span> (./src/router/index.js:42:69)</div>
        <div class="trace">&nbsp;&nbsp;at async <span class="fn">whereIsThisGoing</span> (forge-router.min.js:20:18)</div>
        <div class="trace">&nbsp;&nbsp;at async <span class="fn">pleaseLoad</span> (./src/loaders/pageLoader.js:33:9)</div>
        <div class="trace">&nbsp;&nbsp;at async <span class="fn">render</span> (./src/app.js:89:5)</div>
        <div class="trace">&nbsp;&nbsp;at <span class="fn">seeTheActualSourceCodeAt</span> (<a href="https://github.com/Forge-Srl/Forge-Srl" target="_blank" rel="noopener">github.com/Forge-Srl</a>)</div>
      </div>
    </div>
    <p>Ooops! La pagina che stai cercando non esiste.</p>
    <a class="btn-primary" href="/">Riparti dalla home →</a>
  </div>
</section>`
  }
}
