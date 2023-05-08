const innovationPageContent = require("../_includes/components/innovation");

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Innovazione',
            pageDescription: 'Accompagniamo le aziende in un percorso di innovazione che nasce dal rapporto sinergico con università, start-up, centri di ricerca e giovani talenti.',
            eleventyNavigation: {
                key: 'innovazione',
                title: 'Innovazione'
            }
        }
    }

    async render(data) {
        return `${await innovationPageContent.call(this, data)}`;
    }
}
