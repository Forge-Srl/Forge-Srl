const pageTitle = require('./_includes/components/page-title')

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
    return `<main>
            ${pageTitle.call(this, data)}
            <section class="error-page">
                <p>
                <span style="color: white; background: firebrick;">HTTPError: 404 (Not Found)</span><br>
                <em>Uncaught ReferenceError: this page is not defined</em><br>
                <em>&nbsp;&nbsp;at resolveRoute (webpack:///./src/router/index.js:42:69)</em><br>
                <em>&nbsp;&nbsp;at async whereIsThisGoing (webpack:///./node_modules/forge-router/dist/forge-router.production.min.js:20:18)</em><br>
                <em>&nbsp;&nbsp;at async pleaseLoad (webpack:///./src/loaders/pageLoader.js:33:9)</em><br>
                <em>&nbsp;&nbsp;at async render (webpack:///./src/app.js:89:5)</em><br>
                <em>&nbsp;&nbsp;at seeTheActualSourceCodeAt (<a target="_blank" href="https://github.com/Forge-Srl/Forge-Srl">https://github.com/Forge-Srl/Forge-Srl</a>)</em><br>
                </p>
                <p>
                    <br>
                    Ooops! La pagina che stai cercando non esiste.<br>
                    <a href="/">Riparti dalla home!</a>
                </p>
           </section>
        </main>`
  }
}
