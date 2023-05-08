const contactUsContent = require('../_includes/components/contact-us')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Contattaci',
            pageDescription: 'Contattaci se sei interessato, vuoi informazioni o vuoi farci sapere la tua opinione. Un nostro incaricato ti risponderà al più presto!',
            eleventyNavigation: {
                key: 'contattaci',
                title: 'Contattaci'
            }
        }
    }

    async render(data) {
        return `${await contactUsContent.call(this, data)}`
    }
}