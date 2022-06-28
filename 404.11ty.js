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
		    <div class="container">
			    <div class="row">
				    <div class="col-md-8 mx-auto text-center">
					    <h2 class="display-1 fw-bold text-grad">404</h2>
					    <h3 class="mb-4">Pagina non trovata</h3>
					    <p>Ooops! La pagina che stai cercando non esiste.</p>
					    <a class="btn btn-sm btn-primary" href="https://forge.srl/">Riparti dalla home!</a>
				    </div>
			    </div>
		    </div>
	    </section>
        </main>`
    }
}