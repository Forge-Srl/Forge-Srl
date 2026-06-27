const pageHero = require('./_includes/components/page-hero')
const {form, inputField, submitButton} = require('./_includes/components/form')

module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Contattaci',
      pageDescription:
        'Hai un progetto in mente? Raccontacelo. La prima call è gratuita e senza impegno — parli con chi costruisce, non con un commerciale.',
      eleventyNavigation: {
        key: 'contattaci',
        title: 'Contattaci',
        parent: 'home',
      },
    }
  }

  render(data) {
    return `
${pageHero({
  label: 'parliamone',
  title: 'Hai un progetto<br>in <span class="accent">mente</span>?',
  lead: 'Raccontacelo in 15 minuti. La prima call è gratuita e senza impegno — nessuno ti venderà niente.',
})}

<!-- ── Contatti diretti ────────────────────────────────────── -->
<section class="sec-paper">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">// </span>come aiutarti</div>
      <h2>Il modo migliore<br>è parlarne.</h2>
    </div>
    <div class="prose">
      <p>Hai domande sui nostri servizi, vuoi un preventivo o solo capire come lavoriamo? Passa a trovarci, chiamaci, scrivici una email o usa il modulo qui sotto.</p>
      <p>Siamo reattivi: rispondiamo a ogni richiesta e diamo importanza a ogni opinione. Sarà un piacere conoscere te e gli obiettivi che vuoi raggiungere.</p>
    </div>
  </div>
</section>

<!-- ── Recapiti ────────────────────────────────────────────── -->
<section class="sec-dark">
  <div class="info-grid">
    <div class="info-card">
      <div class="info-label">e-mail</div>
      <p class="info-value"><a href="mailto:${data.forge.contacts.info}">${data.forge.contacts.info}</a></p>
    </div>
    <div class="info-card">
      <div class="info-label">telefono</div>
      <p class="info-value"><a href="tel:${data.forge.contacts.phone.replace(/\s/g, '')}">${data.forge.contacts.phone}</a></p>
    </div>
    <div class="info-card">
      <div class="info-label">indirizzo</div>
      <p class="info-value"><a href="${data.forge.contacts.maps}" target="_blank" rel="noopener">${data.forge.contacts.fullAddress}</a></p>
    </div>
  </div>
</section>

<!-- ── Form ────────────────────────────────────────────────── -->
<section class="sec-dark2">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">// </span>scrivici</div>
      <h2>Realizziamolo<br>insieme.</h2>
      <p style="max-width:42ch;margin:0 0 28px;color:var(--text-muted);">Mettiti in contatto per condividere le tue idee e capire, senza impegno, come possiamo aiutarti.</p>
      <div class="contatti-checks">
        <div><span class="tick">✓</span> risposta entro 24h</div>
        <div><span class="tick">✓</span> parli con chi costruisce</div>
        <div><span class="tick">✓</span> primo parere tecnico concreto</div>
      </div>
    </div>
    <div class="fg-form">
      ${form(
        'contact-form',
        'contactform',
        data.form.url.contactUs(),
        `<div class="group-2">
              ${inputField('con-name', 'name', 'text', 'Nome', 'Erlich Bachman')}
              ${inputField('con-email', 'from', 'email', 'E-mail', 'eb@example.com')}
          </div>
          <div class="group-1">
              ${inputField('con-subject', 'subject', 'text', 'Oggetto', '')}
          </div>
          <div class="group-1">
              ${inputField('con-message', 'message', 'textarea', 'Messaggio', '')}
          </div>
          ${submitButton('Invia messaggio')}`,
        '<p class="form-success"><span class="tick">✓</span> Grazie per averci contattato! Un membro del team ti risponderà il prima possibile.</p>',
        data,
      )}
    </div>
  </div>
</section>`
  }
}
