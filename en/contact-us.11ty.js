const contactUsContent = require('../_includes/components/contact-us')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Contact Us',
            pageDescription: 'Contact us if you are interested, need information, or want to give us your feedback. One of our representatives will respond to you as soon as possible!',
            eleventyNavigation: {
                key: 'contact-us',
                title: 'Contact Us'
            }
        }
    }

    async render(data) {
        return `${await contactUsContent.call(this, data)}`
    }
}