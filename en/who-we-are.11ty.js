const whoWeArePageContent = require("../_includes/components/who-we-are");

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Who We Are',
            pageDescription: 'We combine highly professional multidisciplinary skills to solve technological, strategic and communication problems for businesses.',
            eleventyNavigation: {
                key: 'who-we-are',
                title: 'Who We Are'
            }
        }
    }

    async render(data) {
        return `${await whoWeArePageContent.call(this, data)}`
    }
}