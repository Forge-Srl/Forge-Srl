const softwareDeveloperPageContent = require('../../_includes/components/software-developer');

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Lavora con Noi: Sviluppatore Software',
            pageDescription: 'Come sviluppatore Software di Forge lavorerai a Varese su progetti innovativi utilizzando diverse tecnologie: Java, JavaScript, Kotlin, Swift, PHP...',
            eleventyNavigation: {
                key: 'sviluppatore-software',
                parent: 'lavora-con-noi',
                title: 'Sviluppatore Software'
            }
        }
    }

    async render(data) {
        return `${await softwareDeveloperPageContent.call(this, data)}`;
    }
}