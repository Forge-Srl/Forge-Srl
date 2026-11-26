/**
 * Hero delle pagine interne. Con `aside` (HTML, es. una foto) il contenuto
 * si dispone su due colonne: testo a sinistra, aside a destra.
 */
module.exports = ({label, title, lead, actions = '', extra = '', aside = ''}) => {
  const content = `<div class="label"><span class="dim">// </span>${label}</div>
    <h1>${title}</h1>
    ${lead ? `<p class="page-hero-lead">${lead}</p>` : ''}
    ${actions ? `<div class="hero-actions">${actions}</div>` : ''}
    ${extra}`

  return `<section class="page-hero">
  <div class="inner${aside ? ' page-hero-split' : ''}">
    ${aside ? `<div>${content}</div><div class="page-hero-aside">${aside}</div>` : content}
  </div>
</section>`
}
