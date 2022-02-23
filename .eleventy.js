const fs = require("fs")
const navigationPlugin = require('@11ty/eleventy-navigation')
const sitemap = require("@quasibit/eleventy-plugin-sitemap")
const Forge = require("./_data/forge")

module.exports = (eleventyConfig) => {
    eleventyConfig
        .addPassthroughCopy('assets')
        .addPassthroughCopy('js')
        .addPassthroughCopy('favicon.ico')
        .addPassthroughCopy('robots.txt')
        .addPassthroughCopy({'node_modules/@fortawesome/fontawesome-free/css/all.css': 'assets/vendor/font-awesome/css/all.min.css'})
        .addPassthroughCopy({'node_modules/@fortawesome/fontawesome-free/webfonts': 'assets/vendor/font-awesome/webfonts'})

    eleventyConfig.addPlugin(navigationPlugin)
    eleventyConfig.addPlugin(sitemap, {
        sitemap: {
            hostname: Forge.domain,
        },
    })

    eleventyConfig.addWatchTarget('./assets')
    eleventyConfig.addWatchTarget('./js')

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