const whoWeArePageContent = require("../_includes/components/who-we-are");

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Chi siamo',
            pageDescription: 'Uniamo competenze multisettoriali altamente professionali per risolvere problemi tecnologici, strategici e di comunicazione alle aziende.',
            eleventyNavigation: {
                key: 'chi-siamo',
                title: 'Chi Siamo'
            }
        }
    }

    async render(data) {
        return `${await whoWeArePageContent.call(this, data)}`
    }
}