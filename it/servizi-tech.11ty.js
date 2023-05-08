const techServicesPageContent = require('../_includes/components/tech-services')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Servizi Tech',
            pageDescription: 'Scopri i servizi tech di Forge: sviluppo Web, Mobile, Back-End, Software Engineering, IoT, Blockchain e Intelligenza Artificiale.',
            eleventyNavigation: {
                key: 'tech',
                title: 'Servizi Tech'
            }
        }
    }

    async render(data) {
        return `${await techServicesPageContent.call(this, data)}`;
    }
}