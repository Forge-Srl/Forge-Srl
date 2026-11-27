module.exports = (data) => {
  const currentKey = data.eleventyNavigation?.key ?? ''

  const features = data.features ?? {}

  const navItems = [
    {key: 'home', label: 'home', href: '/'},
    {key: 'chi-siamo', label: 'chi siamo', href: '/chi-siamo/'},
    {key: 'team', label: 'team', href: '/team/'},
    {key: 'servizi', label: 'prodotti e servizi', href: '/servizi/'},
    {key: 'case-study', label: 'case study', href: '/case-study/', enabled: features.caseStudies},
    {key: 'innovazione', label: 'progetti', href: '/innovazione/'},
    {key: 'lavora-con-noi', label: 'lavora con noi', href: '/lavora-con-noi/'},
  ]

  const navLinks = navItems
    .filter(({enabled = true}) => enabled)
    .map(({key, label, href}) => {
      const active = key === currentKey
      return `<a href="${href}" class="${active ? 'active' : ''}">${label}</a>`
    })
    .join('')

  return `<nav class="site-nav" aria-label="Navigazione principale">
  <a class="nav-logo" href="/" aria-label="Forge, homepage">
    <picture>
      <source srcset="/assets/images/forge-logo.png" media="(prefers-color-scheme: light)">
      <source srcset="/assets/images/forge-logo-white.png" media="(prefers-color-scheme: dark)">
      <img src="/assets/images/forge-logo-white.png" alt="Forge" height="30">
    </picture>
  </a>
  <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Apri il menu">
    <span class="nav-toggle-bar" aria-hidden="true"></span>
  </button>
  <div class="nav-links" id="nav-links">
    ${navLinks}
    <a href="/prenota-una-call/" class="nav-cta" aria-label="Prenota una call gratuita">prenota_call →</a>
  </div>
</nav>`
}
