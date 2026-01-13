module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Homepage',
      pageDescription:
        'Trasformiamo le idee di oggi nei prodotti di domani. Siamo appassionati di Artificial Intelligence, Process Automation, Machine Learning, Software Development e Digital Innovation',
      eleventyNavigation: {
        key: 'home',
        title: 'Home',
      },
    }
  }

  render(data) {
    const microdata = {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'LocalBusiness'],
      name: 'Forge S.r.l.',
      url: data.forge.domain,
      logo: `${data.forge.domain}/assets/images/forge-logo.png`,
      //description: 'Consulenza informatica, sviluppo di piattaforme e-commerce e app su misura per aziende.',
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
      knowsAbout: 'Web development, Cloud, Serverless, Artificial Intelligence, Angular, Nest.js, TypeScript, AWS',
      skills: 'Web development, Cloud, Serverless, Artificial Intelligence, Angular, Nest.js, TypeScript, AWS',
      /*
      TODO:
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servizi di consulenza e sviluppo",
        "itemListElement": [...]
      }
    */
    }

    return `<main>
            <script type="application/ld+json">${JSON.stringify(microdata)}</script>
            <section style="text-align: center">
                <br>
                <p><strong><em>Trasformiamo le sfide tecnologiche in opportunità di crescita</em></strong></p>
                <p>Sviluppiamo soluzioni di Intelligenza Artificiale e Software su misura per la tua azienda.<br>Automazione, innovazione e crescita: tutto parte da un'idea.</p>
                <br>
                <a href="/servizi/">Scopri come possiamo aiutarti</a>
            </section>
            <section id="chi-siamo">
                <h2>Chi Siamo</h2>
                <p>Siamo un team di esperti di AI e sviluppo software che unisce competenza tecnica e passione per l'innovazione.
                 Lavoriamo con le aziende per automatizzare processi, migliorare l'efficienza e creare valore concreto.</p>
                <p>Il nostro approccio è diretto e agile, cerchiamo costantemente <strong>fiducia, onestà e trasparenza</strong>.</p>
                <p>Non smettiamo mai di imparare, perché l'innovazione digitale è in costante accelerazione e richiede <strong>passione</strong>.</p>
                <br>
                <a href="/chi-siamo/">Conosci il team</a>
            </section>
            <section id="servizi">
                <h2>Come possiamo aiutarti</h2>
                <div class="group-2 gap-3">
                    <div class="box">
                        <h5>Intelligenza Artificiale</h5>
                        <ul>
                            <li>Automazione di Processi con AI Generativa</li>
                            <li>Supporto Clienti automatizzato</li>
                            <li>Manutenzione Predittiva</li>
                            <li>Data Science</li>
                        </ul>
                        <br>
                        <a href="/servizi/#ai">Scopri di più</a>
                    </div>
                    <div class="box">
                        <h5>Sviluppo software</h5>
                        <ul>
                            <li>E-Commerce</li>
                            <li>Web Development</li>
                            <li>Back-End Development</li>
                            <li>Mobile App Development Android/iOS</li>
                        </ul>
                        <br>
                        <a href="/servizi/#dev">Scopri di più</a>
                    </div>
                </div>
            </section>
            <section id="lavora-con-noi">
                <h2>Lavora con noi</h2>
                <p>In Forge diamo molta importanza all'umiltà e al lavoro di squadra come chiavi per il raggiungimento di risultati di qualità.</p>
                <p>Ci impegniamo affinché ciascuno possa contribuire a una cultura di benessere, libertà, responsabilità e trasparenza.</p>
                <p>Cerchiamo sviluppatori appassionati che vogliano crescere con noi. Se vuoi fare la differenza, unisciti al team.</p>
                <br>
                <a href="/lavora-con-noi/">Scopri cosa offriamo</a>
            </section>
            <section class="highlight">
                <p><strong>Ti aiutiamo a raggiungere i tuoi obiettivi</strong></p>
				<br>
				<p>Hai bisogno di maggiori informazioni o vuoi semplicemente farti un'idea di come lavoriamo?<br>Siamo a tua disposizione!</p>
				<br>
				<a href="/contattaci/" class="cta">Parliamone Insieme</a>
            </section>
        </main>`
  }
}
