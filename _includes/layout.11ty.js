const header = require('./components/header')
const footer = require('./components/footer')

const lazyCssLink = (href, media) => {
    return `<link rel="preload" as="style" type="text/css" media="${media}" href="${href}" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" type="text/css" media="${media}" href="${href}"></noscript>`
}

module.exports = async function(data) {
    const canonical = `${data.forge.domain}${data.page.url}`
    const facebookVerification = 'fxmsfl9hkx07qo7xidpwh92dtws3c3'
    const tagManagerId = 'GTM-P8LVR4Q'

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
                <meta property="og:site_name" content="Forge Srl">
                <meta property="og:image" content="${data.forge.domain}/assets/images/forge-banner.jpg">
                <meta property="article:publisher" content="${data.forge.facebook}">
                <meta name="description" content="${data.pageDescription}">
                <meta name="facebook-domain-verification" content="${facebookVerification}">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <title>${data.pageTitle} - Forge Srl</title>
                <link rel="canonical" href="${canonical}">
                <link rel="shortcut icon" href="/favicon.ico">
                
                <!-- Google Font -->
                <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                ${lazyCssLink('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap', 'all')}

                <!-- Plugins CSS -->
                ${lazyCssLink('/assets/vendor/font-awesome/css/all.min.css', 'screen')}
                ${lazyCssLink('/assets/vendor/themify-icons/css/themify-icons.css', 'screen')}
                ${lazyCssLink('/assets/vendor/animate/animate.min.css', 'screen')}
                ${lazyCssLink('/assets/vendor/glightbox/css/glightbox.css', 'screen')}
                ${lazyCssLink('/assets/vendor/aos/aos.css', 'screen')}
                <!-- Theme CSS -->
                ${lazyCssLink('/assets/css/style.css', 'all')}
                <!-- Theme Color CSS -->
                ${lazyCssLink('/assets/css/color.css', 'all')}
                
                <!-- Bootstrap JS -->
                <script defer src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <!--Vendors-->
                <script defer src="/assets/vendor/aos/aos.js"></script>
                <script defer src="/assets/vendor/purecounter/purecounter_vanilla.js"></script>
                <script defer src="/assets/vendor/glightbox/js/glightbox.js"></script>
                <script defer src="/assets/vendor/ityped/index.js"></script>
                <script defer src="/assets/vendor/sticky-js/sticky.min.js"></script>
                <!--Template Functions-->
                <script defer src="/assets/js/functions.js"></script>
                
                <!-- Google Tag Manager -->
                <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${tagManagerId}');</script>
                <!-- End Google Tag Manager -->
            </head>
            <body>
                <!-- Google Tag Manager (noscript) -->
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${tagManagerId}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                <!-- End Google Tag Manager (noscript) -->
                ${await header.call(this, data)}
                ${data.content}
                ${await footer.call(this, data)}
            </body>
        </html>`
}
