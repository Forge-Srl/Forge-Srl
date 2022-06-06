const pageTitle = require('./_includes/components/pageTitle')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Forge - Lavora con Noi: Sviluppatore Software',
            pageDescription: 'Come sviluppatore Software di Forge lavorerai a Varese su progetti innovativi utilizzando diverse tecnologie: Java, Javascript, Kotlin, Swift, PHP...',
            eleventyNavigation: {
                key: 'lavoro',
                title: 'Sviluppatore Software'
            }
        }
    }

    async render(data) {
        return `<main>
            ${pageTitle.call(this, data)}
            

            
        </main>`
    }
}