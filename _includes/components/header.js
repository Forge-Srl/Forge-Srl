module.exports = function (data) {
  const bredcrumbData = this.eleventyNavigationBreadcrumb(data.collections.all, data.eleventyNavigation.key, {
    includeSelf: true,
    allowMissing: true,
  })

  let breadcrumb =
    data.eleventyNavigation.key === 'home'
      ? ''
      : this.eleventyNavigationToHtml(bredcrumbData).replace('>Home<', 'aria-label="Home">~<')

  if (breadcrumb) {
    const microdata = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: bredcrumbData.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        item: item.url,
      })),
    }
    breadcrumb += `<script type="application/ld+json">${JSON.stringify(microdata)}</script>`
  }

  return `<header style="text-align: center;">
			<p style="text-align: center;">
				<a href="/chi-siamo/">Chi Siamo</a> |
				<a href="/#servizi">Servizi</a> |
				<a href="/#metodologia">Metodologia</a> |
				<a href="/innovazione/">Innovazione</a> |
				<a href="/lavora-con-noi/">Lavora con Noi</a>
			</p>
			<a class="logo" href="/">
				<picture>
				  <source srcset="/assets/images/forge-logo.png" media="(prefers-color-scheme: light)"/>
				  <source srcset="/assets/images/forge-logo-white.png" media="(prefers-color-scheme: dark)"/>
				  <img src="/assets/images/forge-logo-white.png" alt="Forge logo"/>
				</picture>
			</a>
			<hr>
			<nav>
                ${breadcrumb}
            </nav>
		</header>`
}
