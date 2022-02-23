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
                <meta name="facebook-domain-verification" content="fxmsfl9hkx07qo7xidpwh92dtws3c3">
                <title>${data.pageTitle}</title>
                <link rel="canonical" href="${canonical}" />
                <link rel="icon" href="/favicon.ico">
                <link rel="preload" as="font" href="/css/webfonts/fa-solid-900.woff2">
                <link rel="preload" as="font" href="/css/webfonts/fa-brands-400.woff2">
                <link rel="stylesheet" href="/css/fontawesome/all.css" media="all">
                <link rel="stylesheet" href="/css/glider.min.css" media="screen">
                <link rel="stylesheet" href="/css/main.css" media="screen">
                <script defer type="text/javascript" src="/js/glider.min.js"></script>
                <script defer type="text/javascript" src="/js/main.js"></script>
                <!-- Google Tag Manager -->
                <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-P8LVR4Q');</script>
                <!-- End Google Tag Manager -->
            </head>
            <body>
                <!-- Google Tag Manager (noscript) -->
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P8LVR4Q"
                height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                <!-- End Google Tag Manager (noscript) -->
                ${header.call(this, data)}
                ${breadcrumbs.call(this, data)}
                ${data.content}
                ${footer.call(this, data)}
            </body>
        </html>`
}
