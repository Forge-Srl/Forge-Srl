const innovationPageContent = require('../_includes/components/innovation')
module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Innovation',
            pageDescription: 'We accompany companies on a path of innovation that arises from a synergistic relationship with universities, start-ups, research centers, and young talents.',
            eleventyNavigation: {
                key: 'innovation',
                title: 'Innovation'
            }
        }
    }

    async render(data) {
        return `${await innovationPageContent.call(this, data)}`;
    }
}
