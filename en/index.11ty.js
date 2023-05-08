const homePageContent = require('../_includes/components/home');

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Homepage',
            pageDescription: 'We transform the today\'s ideas into tomorrow\'s products. We are a Software House, Digital Factory, Web Agency.',
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