module.exports = (eleventyConfig) => {
    eleventyConfig
        .addPassthroughCopy('css')
        .addPassthroughCopy('js')
        .addPassthroughCopy('img')

    eleventyConfig.addWatchTarget('./css')

    eleventyConfig.on('beforeWatch', () => {
        // Delete node.js require cache to enable changed components js reload
        Object.keys(require.cache).forEach(key => {
            delete require.cache[key]
        })
    })

    return {
        passthroughFileCopy: true,
    }
}