const fs = require('node:fs')
const path = require('node:path')
const Image = require('@11ty/eleventy-img')
const navigationPlugin = require('@11ty/eleventy-navigation')
const sitemap = require('@quasibit/eleventy-plugin-sitemap')
const htmlmin = require('html-minifier-next')
const csso = require('csso')
const terser = require('terser')
const Forge = require('./_data/forge')

module.exports = (eleventyConfig) => {
  eleventyConfig
    .addPassthroughCopy('assets')
    .addPassthroughCopy('favicon.ico')
    .addPassthroughCopy('robots.txt')
    .addPassthroughCopy({'node_modules/ityped/dist': 'assets/vendor/ityped'})

  eleventyConfig.addPlugin(navigationPlugin)
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: Forge.domain,
    },
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
  eleventyConfig.on('eleventy.after', async (event) => {
    const outputRoot = event.directories.output

    const cssFolder = path.join(outputRoot, 'assets', 'css')
    for await (const entry of fs.promises.glob(path.join(cssFolder, '**/*.css'))) {
      console.log(`Compressing ${entry}`)
      const plainCss = await fs.promises.readFile(entry, {encoding: 'utf-8'})
      const minifiedCss = csso.minify(plainCss).css
      await fs.promises.writeFile(entry, minifiedCss)
    }

    const jsFolder = path.join(outputRoot, 'assets', 'js')
    for await (const entry of fs.promises.glob(path.join(jsFolder, '**/*.js'))) {
      console.log(`Compressing ${entry}`)
      const plainJs = await fs.promises.readFile(entry, {encoding: 'utf-8'})
      const minifiedJs = await terser.minify(plainJs, {
        sourceMap: {
          filename: entry.replace(`${jsFolder}/`, ''),
        },
      })
      await fs.promises.writeFile(entry, minifiedJs.code)
      await fs.promises.writeFile(`${entry}.map`, minifiedJs.map)
    }
  })
  eleventyConfig.on('eleventy.beforeWatch', () => {
    // Delete node.js require cache to enable changed components js reload
    Object.keys(require.cache).forEach((key) => {
      delete require.cache[key]
    })
  })
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: (err, bs) => {
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
