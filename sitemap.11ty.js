module.exports = class {
    data() {
        return {
            permalink: '/sitemap.xml',
            layout: null,
            eleventyExcludeFromCollections: true,
        }
    }

    render(data) {
        return this.sitemap(data.collections.all)
    }
}