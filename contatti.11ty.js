const pageHero = require('./_includes/components/page-hero')
const {form, inputField, submitButton} = require('./_includes/components/form')

module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Contatti — prenota una call gratuita | Forge, Varese',
      pageDescription:
        'Hai un progetto in mente? Raccontacelo in 15 minuti: la prima call è gratuita e senza impegno. Contatta Forge, software house a Varese.',
      eleventyNavigation: {
        key: 'contatti',
        title: 'Contatti',
        parent: 'home',
      },
    }
  }

  render(data) {
    const microdata = {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'LocalBusiness'],
      name: 'Forge S.r.l.',
      url: data.forge.domain,
      telephone: data.forge.contacts.phone,
      email: data.forge.contacts.info,
      address: {
        '@type': 'PostalAddress',
        streetAddress: data.forge.contacts.address.street,
        addressLocality: data.forge.contacts.address.locality,
        postalCode: data.forge.contacts.address.postalCode,
        addressCountry: data.forge.contacts.address.country,
      },
      vatID: data.forge.vatCode,
      openingHours: 'Mo-Fr 09:00-18:00',
      sameAs: [data.forge.linkedin, data.forge.facebook, data.forge.github],
    }

    return `
<script type="application/ld+json">${JSON.stringify(microdata)}</script>

${pageHero({
  label: '$ ./contattaci.sh',
  title: 'Hai un progetto<br>in <span class="accent">mente</span>?',
  lead: 'Raccontacelo in 15 minuti. La prima call è gratuita e senza impegno — nessuno ti venderà niente.',
  actions: '<a class="btn-primary" href="#prenota" aria-label="Prenota una call gratuita">prenota_call →</a>',
})}

<!-- ── Prenotazione call ────────────────────────────────────── -->
<section class="sec-paper" id="prenota">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">&gt; </span>prenota_call --gratis --15min</div>
      <h2>Prenota la tua<br>call gratuita.</h2>
      <div class="contatti-checks" style="margin-top:24px;">
        <div><span class="tick">✓</span> 15 minuti, in video o di persona</div>
        <div><span class="tick">✓</span> parli con chi costruisce, non con un commerciale</div>
        <div><span class="tick">✓</span> esci con un primo parere tecnico concreto</div>
        <div><span class="tick">✓</span> risposta entro 24h · senza impegno</div>
      </div>
    </div>
    <div class="contact-box">
      <div class="contact-box-bar">
        <svg viewBox="0 0 64 96" style="width:11px;height:16px;flex-shrink:0" aria-hidden="true">
          <path d="M 32 4 C 28 14, 24 22, 20 30 C 17 26, 14 22, 12 18 C 8 30, 6 44, 8 58 C 9 70, 14 80, 20 84 C 21 80, 23 78, 25 82 C 27 88, 30 92, 33 90 C 35 86, 37 80, 39 80 C 42 84, 46 86, 50 80 C 56 72, 58 58, 54 44 C 52 36, 49 28, 46 22 C 44 28, 42 32, 38 28 C 38 20, 35 12, 32 4 Z" fill="#F08819"/>
        </svg>
        <span class="contact-box-title">prenota_call.ts</span>
        <span class="contact-box-sub">15 min · gratis</span>
      </div>
      <div class="contact-box-body">
        <p style="color:var(--text-muted);font-size:14px;margin:0 0 16px;">
          Scrivi un'email o usa il form qui sotto — ti risponderemo entro 1 giorno lavorativo per fissare la call.
        </p>
        <a class="btn-orange-full" href="#form" style="text-align:center;text-decoration:none;display:block;" aria-label="Vai al form di contatto">Scrivi un messaggio →</a>
        <div class="contact-confirm" style="margin-top:12px;"><span class="tick">✓</span> risposta entro 24h · senza impegno</div>
      </div>
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
    <div class="info-card">
      <div class="info-label">orari</div>
      <p class="info-value">Lun–Ven · 09:00–18:00</p>
    </div>
  </div>
</section>

<!-- ── Form ────────────────────────────────────────────────── -->
<section class="sec-dark2" id="form">
  <div class="split-grid">
    <div>
      <div class="label"><span class="dim">$ </span>./scrivici.sh</div>
      <h2>Oppure<br>scrivici.</h2>
      <p style="max-width:42ch;margin:0 0 28px;color:var(--text-muted);">Preferisci scrivere? Compila il form e ti rispondiamo entro 1 giorno lavorativo. Nessun impegno, nessun preventivo a freddo.</p>
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
              ${inputField('con-name', 'name', 'text', 'Nome', 'Mario Rossi')}
              ${inputField('con-email', 'from', 'email', 'E-mail', 'mario@azienda.it')}
          </div>
          <div class="group-1">
              ${inputField('con-subject', 'subject', 'text', 'Oggetto', '')}
          </div>
          <div class="group-1">
              ${inputField('con-message', 'message', 'textarea', 'Raccontaci il progetto…', '')}
          </div>
          ${submitButton('invia →')}`,
        '<p class="form-success"><span class="tick">✓</span> messaggio inviato. Grazie! Ti rispondiamo a breve. Nel frattempo, vuoi anticipare? <a href="#prenota">prenota_call →</a></p>',
        data,
      )}
    </div>
  </div>
</section>

<!-- ── Social ──────────────────────────────────────────────── -->
<section class="sec-paper">
  <div class="inner">
    <div class="label"><span class="dim">// </span>seguici</div>
    <h2 style="margin:0 0 24px;">Dove trovarci online.</h2>
    <div class="info-grid" style="grid-template-columns:repeat(3,1fr);">
      <div class="info-card">
        <div class="info-label">GitHub</div>
        <p class="info-value"><a href="${data.forge.github}" target="_blank" rel="noopener" aria-label="Forge su GitHub">Forge-Srl →</a></p>
      </div>
      <div class="info-card">
        <div class="info-label">LinkedIn</div>
        <p class="info-value"><a href="${data.forge.linkedin}" target="_blank" rel="noopener" aria-label="Forge su LinkedIn">forge.srl →</a></p>
      </div>
      <div class="info-card">
        <div class="info-label">Facebook</div>
        <p class="info-value"><a href="${data.forge.facebook}" target="_blank" rel="noopener" aria-label="Forge su Facebook">ForgeSrl →</a></p>
      </div>
    </div>
  </div>
</section>

<!-- ── CTA finale ──────────────────────────────────────────── -->
<section class="sec-dark">
  <div class="contatti-grid">
    <div>
      <div class="label"><span class="dim">// </span>parliamone</div>
      <h2>Niente preventivi<br>a freddo.</h2>
      <p style="max-width:42ch;margin:0 0 28px;color:var(--text-muted);">Solo 15 minuti per capire se possiamo aiutarti. La prima call è gratuita e senza impegno — uscirai con un parere concreto.</p>
    </div>
    <div class="contact-box">
      <div class="contact-box-bar">
        <svg viewBox="0 0 64 96" style="width:11px;height:16px;flex-shrink:0" aria-hidden="true">
          <path d="M 32 4 C 28 14, 24 22, 20 30 C 17 26, 14 22, 12 18 C 8 30, 6 44, 8 58 C 9 70, 14 80, 20 84 C 21 80, 23 78, 25 82 C 27 88, 30 92, 33 90 C 35 86, 37 80, 39 80 C 42 84, 46 86, 50 80 C 56 72, 58 58, 54 44 C 52 36, 49 28, 46 22 C 44 28, 42 32, 38 28 C 38 20, 35 12, 32 4 Z" fill="#F08819"/>
        </svg>
        <span class="contact-box-title">prenota_call.ts</span>
        <span class="contact-box-sub">15 min · gratis</span>
      </div>
      <div class="contact-box-body">
        <a class="btn-orange-full" href="#form" style="text-align:center;text-decoration:none;display:block;" aria-label="Vai al form di contatto">Scrivi un messaggio →</a>
        <div class="contact-confirm"><span class="tick">✓</span> risposta entro 24h · senza impegno</div>
      </div>
    </div>
  </div>
</section>`
  }
}
