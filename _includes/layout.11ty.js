const header = require('./components/header')
const footer = require('./components/footer')
const breadcrumbs = require('./components/breadcrumbs')

module.exports = function(data) {
    const canonical = `${data.forge.domain}${data.page.url}`

    return `<!doctype html>
        <html lang="it-IT">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta property="og:locale" content="it_IT">
                <meta property="og:type" content="website">
                <meta property="og:title" content="${data.pageTitle}">
                <meta property="og:description" content="${data.pageDescription}">
                <meta property="og:url" content="${canonical}">
                <meta property="og:site_name" content="Forge S.r.l">
                <meta property="og:image" content="${data.forge.domain}/img/forge-logo.jpg">
                <meta property="article:publisher" content="${data.forge.facebook}">
                <meta name="description" content="${data.pageDescription}">
                <title>${data.pageTitle}</title>
                <link rel="canonical" href="${canonical}" />
                <link rel="icon" href="/favicon.ico">
                <link rel="preload" as="font" href="/css/webfonts/fa-solid-900.woff2">
                <link rel="preload" as="font" href="/css/webfonts/fa-brands-400.woff2">
                <link rel="stylesheet" href="/css/fontawesome/all.css">
                <link rel="stylesheet" href="/css/glider.min.css">
                <link rel="stylesheet" href="/css/main.css">
                <script type="text/javascript" src="/js/glider.min.js"></script>
                <script type="text/javascript" src="/js/main.js"></script>
            </head>
            <body>
                ${header.call(this, data)}
                ${breadcrumbs.call(this, data)}
                ${data.content}
                ${footer.call(this, data)}
            </body>
        </html>`
}
