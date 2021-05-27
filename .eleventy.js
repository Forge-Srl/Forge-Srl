module.exports = (eleventyConfig) => {
    eleventyConfig
        .addPassthroughCopy('css')
        .addPassthroughCopy('js')
        .addPassthroughCopy('img')
        .addPassthroughCopy({'node_modules/@fortawesome/fontawesome-free/css/all.css': 'css/fontawesome/all.css'})
        .addPassthroughCopy({'node_modules/@fortawesome/fontawesome-free/webfonts': 'css/webfonts'})

    eleventyConfig.addWatchTarget('./css')
    eleventyConfig.addWatchTarget('./js')
    eleventyConfig.addWatchTarget('./img')

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