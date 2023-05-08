const marketingServicesPageContent = require("../_includes/components/marketing-services");
module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Marketing Services',
            pageDescription: 'Discover Forge\'s marketing services: Paid Advertising, Online Branding, SEO, Social Media, Inbound, and Strategy.',
            eleventyNavigation: {
                key: 'marketing',
                title: 'Marketing Services'
            }
        }
    }

    async render(data) {

        return `${await marketingServicesPageContent.call(this, data)}`
    }
}