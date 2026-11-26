const header = require('./components/header')
const footer = require('./components/footer')

module.exports = function (data) {
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
  <meta property="og:image" content="${data.forge.domain}/assets/images/forge-logo.png">
  <meta property="article:publisher" content="${data.forge.facebook}">
  <meta name="description" content="${data.pageDescription}">
  <meta name="facebook-domain-verification" content="${facebookVerification}">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${data.pageTitle} - Forge Srl</title>
  <link rel="canonical" href="${canonical}">
  <link rel="shortcut icon" href="/favicon.ico">

  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"></noscript>

  <link rel="stylesheet" href="/assets/css/style.css">
  <script src="/assets/js/start.js" defer></script>
  <script src="/assets/js/flame.js" defer></script>
  <script src="/assets/js/booking-widget.js" defer></script>

  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${tagManagerId}');</script>
</head>
<body>
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${tagManagerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  ${header.call(this, data)}
  ${data.content}
  ${footer.call(this, data)}
</body>
</html>`
}
