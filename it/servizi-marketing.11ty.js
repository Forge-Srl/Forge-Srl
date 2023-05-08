const marketingServicesPageContent = require('../_includes/components/marketing-services')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Servizi Marketing',
            pageDescription: 'Scopri i servizi marketing di Forge: Paid Adv, Branding Online, SEO, Social Media, Inbound e Strategy.',
            eleventyNavigation: {
                key: 'marketing',
                title: 'Servizi Marketing'
            }
        }
    }

    async render(data) {

        return `${await marketingServicesPageContent.call(this, data)}`
    }
}