const fs = require('fs')
const path = require('path')
const Image = require('@11ty/eleventy-img')
const navigationPlugin = require('@11ty/eleventy-navigation')
const sitemap = require('@quasibit/eleventy-plugin-sitemap')
const i18n = require('eleventy-plugin-i18n')
const htmlmin = require('html-minifier')
const Forge = require('./_data/forge')
const translations = require('./_data/i18n/translations')

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
        .addPassthroughCopy({'node_modules/sticky-js/dist': 'assets/vendor/sticky-js'})

    eleventyConfig.addPlugin(navigationPlugin)
    eleventyConfig.addPlugin(sitemap, {
        sitemap: {
            hostname: Forge.domain,
        },
    })

    eleventyConfig.addPlugin(i18n, {
        translations,
        fallbackLocales: {
            '*': 'it'
        }
    })

    eleventyConfig.addFilter('image', async (url, altText, cssClasses, widths = [null], sizes = '') => {
        if (!url) {
            return ''
        }
        url = url.startsWith('http') ? url : `assets/images/${url}`

        const metadata = await Image(url, {
            formats: ['webp', null],
            widths: widths,
            urlPath: '/assets/images',
            outputDir: './_site/assets/images',
            filenameFormat: (id, src, width, format, options) => {
                const extension = path.extname(src)
                const name = path.basename(src, extension)
                fs.mkdirSync(`${options.outputDir}/${name}`, {recursive: true})
                return `${name}/${id}-${width}w.${format}`
            },
        })

        return Image.generateHTML(metadata, {
            alt: altText || '',
            loading: 'lazy',
            decoding: 'async',
            sizes: sizes,
            class: cssClasses,
        })
    })

    eleventyConfig.addTransform('html-minifier', function (content) {
        if (this.outputPath && this.outputPath.endsWith('.html')) {
            return htmlmin.minify(content, {
                removeComments: true,
                collapseWhitespace: true,
                minifyJS: true,
            })
        }

        return content
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
            ready: function (err, bs) {
                // Handle 404 page when running in serve/dev mode
                bs.addMiddleware('*', (req, res) => {
                    const page404content = fs.readFileSync('_site/404.html')
                    res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'})
                    res.write(page404content)
                    res.end()
                })
            },
        },
    })

    return {
        passthroughFileCopy: true,
    }
}