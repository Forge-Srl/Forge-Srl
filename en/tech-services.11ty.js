const techServicesPageContent = require('../_includes/components/tech-services')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Tech Services',
            pageDescription: 'Discover Forge\'s tech services: Web development, Mobile development, Back-End development, Software Engineering, IoT, Blockchain and Artificial Intelligence.',
            eleventyNavigation: {
                key: 'tech',
                title: 'Tech Services'
            }
        }
    }

    async render(data) {
        return `${await techServicesPageContent.call(this, data)}`;
    }
}