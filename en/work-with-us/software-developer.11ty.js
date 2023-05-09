const softwareDeveloperPageContent = require('../../_includes/components/software-developer');

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Work With Us: Software Developer',
            pageDescription: 'As a Software Developer at Forge, you will work in Varese on innovative projects using various technologies such as Java, JavaScript, Kotlin, Swift, and PHP...',
            eleventyNavigation: {
                key: 'software-developer',
                parent: 'work-with-us',
                title: 'Software Developer'
            }
        }
    }

    async render(data) {
        return `${await softwareDeveloperPageContent.call(this, data)}`;
    }
}