const workWithUs = require('../../_includes/components/work-with-us')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Lavora con Noi',
            pageDescription: 'Forge è sempre alla ricerca di persone che amino innovare e mettersi in gioco. Scopri le posizioni aperte ed entra a far parte del team.',
            eleventyNavigation: {
                key: 'lavora-con-noi',
                title: 'Lavora con Noi'
            }
        }
    }

    async render(data) {
        return `${await workWithUs.call(this, data)}`;
    }
}