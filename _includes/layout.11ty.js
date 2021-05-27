const header = require('./components/header')

module.exports = data => `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>${data.pageTitle}</title>
        <link rel="stylesheet" href="/css/main.css">
        <link rel="stylesheet" href="/css/fontawesome/all.css">
        <script type="text/javascript" src="/js/main.js"></script>
    </head>
    <body>
        ${header(data)}
        ${data.content}
    </body>
</html>`
