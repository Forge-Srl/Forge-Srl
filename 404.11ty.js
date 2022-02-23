class NotFound {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Forge',
            pageDescription: '',
            // Force output page to be /404.html instead of /404/index.html!
            permalink: '/404.html',
            eleventyExcludeFromCollections: true
        }
    }

    render(data) {
        return `<main>
            <section>
                <h1><strong>Errore<br>404</strong></h1>
                <h2>La pagina richiesta non è disponibile</h2>
            </section>
        </main>`
    }
}

module.exports = NotFound