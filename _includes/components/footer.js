module.exports = (data) => {
  const year = new Date().getFullYear()

  const cols = [
    {
      head: 'sito',
      links: [
        {label: 'Home', href: '/'},
        {label: 'Prodotti & servizi', href: '/servizi/'},
        {label: 'Progetti', href: '/innovazione/'},
        {label: 'Lavora con noi', href: '/lavora-con-noi/'},
      ],
    },
    {
      head: 'azienda',
      links: [
        {label: 'Chi siamo', href: '/chi-siamo/'},
        {label: 'Contattaci', href: '/contattaci/'},
        {label: 'Privacy Policy', href: data.forge.privacy},
        {
          label: 'Preferenze Cookie',
          href: '#',
          attrs:
            'role="link" tabindex="0" onclick="(()=>{try{_iub.cs.api.openPreferences()}catch(e){}})()" onkeydown="(()=>{try{_iub.cs.api.openPreferences()}catch(e){}})()"',
        },
      ],
    },
    {
      head: 'parliamone',
      links: [
        {label: 'Prenota una call', href: '/contattaci/'},
        {label: data.forge.contacts.info, href: `mailto:${data.forge.contacts.info}`},
        {label: 'LinkedIn', href: data.forge.linkedin, attrs: 'target="_blank" rel="noopener"'},
        {label: 'GitHub', href: data.forge.github, attrs: 'target="_blank" rel="noopener"'},
      ],
    },
  ]

  const colsHtml = cols
    .map(({head, links}) => {
      const linksHtml = links.map(({label, href, attrs = ''}) => `<a href="${href}" ${attrs}>${label}</a>`).join('')
      return `<div>
      <div class="footer-col-head">${head}</div>
      <div class="footer-col-links">${linksHtml}</div>
    </div>`
    })
    .join('')

  return `<footer class="site-footer">
  <div id="flame-canvas" aria-hidden="true"></div>
  <script defer src="/assets/js/flame.js"></script>
  <div class="footer-grid">
    <div class="footer-brand">
      <picture>
        <source srcset="/assets/images/forge-logo.png" media="(prefers-color-scheme: light)">
        <source srcset="/assets/images/forge-logo-white.png" media="(prefers-color-scheme: dark)">
        <img src="/assets/images/forge-logo-white.png" alt="Forge" height="28">
      </picture>
      <p>Software house. Costruiamo piattaforme AI e sistemi e-commerce che vanno in produzione.</p>
    </div>
    ${colsHtml}
  </div>
  <div class="footer-bottom">
    <span>© ${year} Forge s.r.l. · Varese · P.IVA ${data.forge.vatCode}</span>
    <span>${data.forge.contacts.info} · forge.srl</span>
  </div>
</footer>`
}
