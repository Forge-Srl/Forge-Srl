const fs = require("fs")
const navigationPlugin = require('@11ty/eleventy-navigation')

module.exports = (eleventyConfig) => {
    eleventyConfig
        .addPassthroughCopy('css')
        .addPassthroughCopy('js')
        .addPassthroughCopy('img')
        .addPassthroughCopy('favicon.ico')
        .addPassthroughCopy({'node_modules/@fortawesome/fontawesome-free/css/all.css': 'css/fontawesome/all.css'})
        .addPassthroughCopy({'node_modules/@fortawesome/fontawesome-free/webfonts': 'css/webfonts'})
        .addPassthroughCopy({'node_modules/glider-js/glider.min.css': 'css/glider.min.css'})
        .addPassthroughCopy({'node_modules/glider-js/glider.min.js': 'js/glider.min.js'})

    eleventyConfig.addPlugin(navigationPlugin)

    eleventyConfig.addWatchTarget('./css')
    eleventyConfig.addWatchTarget('./js')
    eleventyConfig.addWatchTarget('./img')

    eleventyConfig.on('beforeWatch', () => {
        // Delete node.js require cache to enable changed components js reload
        Object.keys(require.cache).forEach(key => {
            delete require.cache[key]
        })
    })
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
            ready: function(err, bs) {
                // Handle 404 page when running in serve/dev mode
                bs.addMiddleware('*', (req, res) => {
                    const page404content = fs.readFileSync('_site/404.html')
                    res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' })
                    res.write(page404content)
                    res.end()
                })
            }
        }
    })

    return {
        passthroughFileCopy: true,
    }
}