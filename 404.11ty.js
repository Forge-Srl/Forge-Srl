const pageTitle = require('./_includes/components/pageTitle')

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
                title: 'Pagina non trovata!'
            }
        }
    }

    render(data) {
        return `<main>
            ${pageTitle.call(this, data)}
            <section class="error-page">
	   	        <p>
                <span style="color: white; background: firebrick;">Errore 404</span><br>
                Ooops! La pagina che stai cercando non esiste.<br>
                <a class="btn btn-sm btn-primary" href="/">Riparti dalla home!</a>
                </p>
	       </section>
        </main>`
    }
}