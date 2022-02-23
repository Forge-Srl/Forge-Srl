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
            <section class="position-relative bg-grad pattern-overlay-4 overflow-hidden"></section>
            <section class="container d-block m-4">
                <h1>Errore 404</h1>
                <h2>La pagina richiesta non è disponibile</h2>
            </section>
        </main>`
    }
}

module.exports = NotFound