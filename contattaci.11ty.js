const pageTitle = require('./_includes/components/page-title')
const {form, inputField, submitButton} = require('./_includes/components/form')

module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Contattaci',
      pageDescription:
        'Contattaci se sei interessato, vuoi informazioni o vuoi farci sapere la tua opinione. Un nostro incaricato ti risponderà al più presto!',
      eleventyNavigation: {
        key: 'contattaci',
        title: 'Contattaci',
        parent: 'home',
      },
    }
  }

  render(data) {
    return `<main>
            ${pageTitle.call(this, data)}
            <section>
                <h2>Come possiamo essere d'aiuto alla tua azienda?</h2>
                <p>Hai domande sui nostri servizi? Vorresti farti un'idea di come lavoriamo oppure ricevere un preventivo? Il modo migliore per comprendere le tue esigenze o rispondere ai tuoi dubbi è parlarne! Passa a trovarci, chiamaci, mandaci una email o scrivi un messaggio nel modulo di contatto che trovi qui sotto.</p>
                <p>Siamo estremamente reattivi, rispondiamo ad ogni richiesta e diamo importanza ad ogni opinione ricevuta. Scrivici e un nostro incaricato ti risponderà al più presto. Faremo buon uso dei tuoi dati ma, soprattutto, sarà un piacere conoscere te e gli obiettivi che vuoi raggiungere!</p>
                <br>
            </section>
            <section class="box group-2">
                <div>
                    <h5>E-mail</h5>
                    <p>${data.forge.contacts.info}</p>
                </div>
                <div>
                    <h5>Telefono</h5>
                    <p>${data.forge.contacts.phone}</p>
                </div>
                <div>
                    <h5>Indirizzo</h5>
                    <p>${data.forge.contacts.address}</p>
                </div>
            </section>
            <section>
                <h3>Hai un grande progetto in mente? Realizziamolo insieme!</h3>
                <p>Mettiti in contatto con noi per condividere le tue idee e per capire, senza alcun impegno, come possiamo esserti d'aiuto nello sviluppo del tuo progetto.</p>
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
                    <div style="text-align: center;">
                        ${submitButton('Invia')}
                    </div>`,
                  '<p><strong>Grazie per averci contattato!</strong> Un membro del nostro team si metterà in contatto con te il prima possibile.</p>',
                  data,
                )}
            </section>
        </main>`
  }
}
