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
            additionalMeta: '<meta http-equiv="refresh" content="0.1; url = /it/"/>',
            hideHeader: true,
            hideFooter: true
        }
    }

    async render(data) {
        return ''
    }
}