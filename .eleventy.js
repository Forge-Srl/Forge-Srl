const fs = require("fs")
const navigationPlugin = require('@11ty/eleventy-navigation')
const sitemap = require("@quasibit/eleventy-plugin-sitemap")
const htmlmin = require("html-minifier")
const Forge = require("./_data/forge")

module.exports = (eleventyConfig) => {
    eleventyConfig
        .addPassthroughCopy('assets')
        .addPassthroughCopy('favicon.ico')
        .addPassthroughCopy('robots.txt')
        .addPassthroughCopy({'node_modules/bootstrap/dist': 'assets/vendor/bootstrap'})
        .addPassthroughCopy({'node_modules/@fortawesome/fontawesome-free/css/all.css': 'assets/vendor/font-awesome/css/all.min.css'})
        .addPassthroughCopy({'node_modules/@fortawesome/fontawesome-free/webfonts': 'assets/vendor/font-awesome/webfonts'})
        .addPassthroughCopy({'node_modules/glightbox/dist': 'assets/vendor/glightbox'})
        .addPassthroughCopy({'node_modules/aos/dist': 'assets/vendor/aos'})
        .addPassthroughCopy({'node_modules/ityped/dist': 'assets/vendor/ityped'})
        .addPassthroughCopy({'node_modules/@srexi/purecounterjs/dist': 'assets/vendor/purecounter'})

    eleventyConfig.addPlugin(navigationPlugin)
    eleventyConfig.addPlugin(sitemap, {
        sitemap: {
            hostname: Forge.domain,
        },
    })

    eleventyConfig.addWatchTarget('./assets')
    eleventyConfig.addWatchTarget('./js')

    eleventyConfig.addTransform('html-minifier', function (content) {
        if (this.outputPath && this.outputPath.endsWith(".html")) {
            return htmlmin.minify(content, {
                removeComments: true,
                collapseWhitespace: true,
            })
        }

        return content
    })

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