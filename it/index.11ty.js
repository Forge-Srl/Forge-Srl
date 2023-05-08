const homePageContent = require('../_includes/components/home');

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Homepage',
            pageDescription: 'Trasformiamo le idee di oggi nei prodotti di domani. Siamo una Software House, Digital Factory, Web Agency.',
            eleventyNavigation: {
                key: 'home',
                title: 'Home',
            },
        }
    }

    async render(data) {
        return `${await homePageContent.call(this, data)}`
    }
}