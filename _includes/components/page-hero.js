module.exports = ({label, title, lead, actions = ''}) => `<section class="page-hero">
  <div class="inner">
    <div class="label"><span class="dim">// </span>${label}</div>
    <h1>${title}</h1>
    ${lead ? `<p class="page-hero-lead">${lead}</p>` : ''}
    ${actions ? `<div class="hero-actions">${actions}</div>` : ''}
  </div>
</section>`
