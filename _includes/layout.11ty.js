const header = require('./components/header')
const footer = require('./components/footer')

module.exports = data => {
    data.facebookUrl = 'https://www.facebook.com/forgesrl'

    return `<!doctype html>
        <html lang="it-IT">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta property="og:locale" content="it_IT">
                <meta property="og:type" content="website">
                <meta property="og:title" content="${data.pageTitle}">
                <meta property="og:description" content="${data.pageDescription}">
                <meta property="og:url" content="https://forge.srl">
                <meta property="og:site_name" content="Forge S.r.l">
                <meta property="og:image" content="https://forge.srl/img/forge-logo.jpg">
                <meta property="article:publisher" content="${data.facebookUrl}">
                <meta name="description" content="${data.pageDescription}">
                <title>${data.pageTitle}</title>
                <link rel="preload" as="font" href="/css/webfonts/fa-solid-900.woff2">
                <link rel="preload" as="font" href="/css/webfonts/fa-brands-400.woff2">
                <link rel="stylesheet" href="/css/fontawesome/all.css">
                <link rel="stylesheet" href="/css/glider.min.css">
                <link rel="stylesheet" href="/css/main.css">
                <script type="text/javascript" src="/js/glider.min.js"></script>
                <script type="text/javascript" src="/js/main.js"></script>
            </head>
            <body>
                ${header(data)}
                ${data.content}
                ${footer(data)}
            </body>
        </html>`
}
