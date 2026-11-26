/**
 * /prodotti/ è confluita nella pagina unica "prodotti e servizi" (/servizi/#prodotti).
 * GitHub Pages non supporta redirect lato server: questa pagina reindirizza lato client
 * e resta fuori dalla sitemap, così i vecchi link e i risultati di ricerca continuano a funzionare.
 */
module.exports = class {
  data() {
    return {
      layout: null,
      permalink: '/prodotti/',
      eleventyExcludeFromCollections: true,
    }
  }

  render(data) {
    const target = '/servizi/#prodotti'

    return `<!doctype html>
<html lang="it-IT">
<head>
  <meta charset="utf-8">
  <meta name="robots" content="noindex">
  <script>location.replace('${target}')</script>
  <meta http-equiv="refresh" content="0; url=${target}">
  <link rel="canonical" href="${data.forge.domain}/servizi/">
  <title>Prodotti e servizi - Forge Srl</title>
</head>
<body>
  <p>I prodotti sono ora nella pagina <a href="${target}">prodotti e servizi</a>.</p>
</body>
</html>`
  }
}
