const workWithUs = require('../../_includes/components/work-with-us')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Work with Us',
            pageDescription: 'Forge is always looking for people who love to innovate and challenge themselves. Discover our open positions and join the team.',
            eleventyNavigation: {
                key: 'work-with-us',
                title: 'Work with Us'
            }
        }
    }

    async render(data) {
        return `${await workWithUs.call(this, data)}`;
    }
}