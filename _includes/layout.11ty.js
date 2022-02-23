const header = require('./components/header')
const footer = require('./components/footer')

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
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <title>${data.pageTitle}</title>
                <link rel="canonical" href="${canonical}" />
                <link rel="shortcut icon" href="/favicon.ico">
                
                <!-- Google Font -->
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

                <!-- Plugins CSS -->
                <link rel="stylesheet" type="text/css" href="assets/vendor/font-awesome/css/all.min.css" />
                <link rel="stylesheet" type="text/css" href="assets/vendor/themify-icons/css/themify-icons.css" />
                <link rel="stylesheet" type="text/css" href="assets/vendor/animate/animate.min.css" />
                <link rel="stylesheet" type="text/css" href="assets/vendor/glightbox/css/glightbox.css">
                <link rel="stylesheet" type="text/css" href="assets/vendor/aos/aos.css">
                <!-- Theme CSS -->
                <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
                <!-- Theme Color CSS -->
                <link rel="stylesheet" type="text/css" href="assets/css/color.css" />
                
                <!-- Bootstrap JS -->
                <script defer src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
                <!--Vendors-->
                <script defer src="assets/vendor/aos/aos.js"></script>
                <script defer src="assets/vendor/purecounterjs/dist/purecounter_vanilla.js"></script>
                <script defer src="assets/vendor/glightbox/js/glightbox.js"></script>
                <script defer src="assets/vendor/ityped/index.js"></script>
                <!--Template Functions-->
                <script defer src="assets/js/functions.js"></script>
                
                <!-- TODO: remove following script? -->
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
                ${data.content}
                ${footer.call(this, data)}
            </body>
        </html>`
}
