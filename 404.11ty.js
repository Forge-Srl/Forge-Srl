const pageTitle = require('./_includes/components/pageTitle')

class NotFound {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Forge',
            pageDescription: '',
            // Force output page to be /404.html instead of /404/index.html!
            permalink: '/404.html',
            eleventyExcludeFromCollections: true,
            eleventyNavigation: {
                title: 'Errore 404'
            }
        }
    }

    render(data) {
        return `<main>
            ${pageTitle.call(this, data)}
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-8 mx-auto">
                            <div class="title text-center">
                                <h2>La pagina richiesta non è disponibile</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="text-center">
                <img src="/assets/images/john-travolta.gif" class="w-25" alt="Non c'è nulla qui">
            </div>
        </main>`
    }
}

module.exports = NotFound