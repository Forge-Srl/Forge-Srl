class NotFound {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Forge',
            pageDescription: '',
            // Force output page to be /404.html instead of /404/index.html!
            permalink: '/404.html'
        }
    }

    render(data) {
        return `<main>
            <div class="page-block">
                <h1><strong>Errore 404</strong></h1>
                <h2>La pagina richiesta non è disponibile</h2>
            </div>
        </main>`
    }
}

module.exports = NotFound