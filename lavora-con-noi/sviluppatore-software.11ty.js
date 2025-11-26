const pageTitle = require('../_includes/components/page-title')
const formScript = require('../_includes/components/form-script')

module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Lavora con Noi: Sviluppatore Software',
      pageDescription:
        'Come sviluppatore Software di Forge lavorerai a Varese su progetti innovativi utilizzando diverse tecnologie: JavaScript, Python, Kotlin...',
      eleventyNavigation: {
        key: 'sviluppatore-software',
        parent: 'lavora-con-noi',
        title: 'Sviluppatore Software',
      },
    }
  }

  render(data) {
    return `<main>
            ${pageTitle.call(this, data)}
            <section class="group-3 gap-2">
                <div style="flex-grow: 2;">
                    <h2>Job description</h2>
                    <p>Stiamo cercando uno sviluppatore software da inserire nel nostro team di Varese.
                    L'esperienza nell'utilizzo di più linguaggi di programmazione e di strumenti di Intelligenza Artificiale e Machine Learning sono <strong>requisiti opzionali</strong>.</p>
                    <p>Utilizziamo la <strong>metodologia Agile</strong> applicata al processo di sviluppo e basata sulla continua voglia di migliorare le proprie conoscenze e i prodotti su cui lavoriamo.</p>
                    <p>Abbiamo un <strong>approccio di continuous delivery</strong> sui progetti e scriviamo test automatici per consolidare il lavoro che facciamo (e dormire sonni tranquilli!); inoltre incentiviamo l'utilizzo del pair programming per diffondere la conoscenza e stimolare soluzioni innovative.</p>
                    <p>Utilizziamo diverse tecnologie a seconda del contesto: Python e PyTorch, TypeScript, Angular, NestJS, AWS cloud native, etc.</p>
                    <p>Per noi <strong>è indispensabile</strong> essere appassionati di informatica e curiosi di fronte a nuove sfide e tecnologie.</p>
                    <p>Crediamo molto nella <strong>formazione</strong>: riserviamo ad ogni membro del team del tempo da dedicare alla propria crescita professionale e all'avanzamento di progetti personali.</p>
                    <p>Contribuiamo a diversi <strong>progetti open source</strong>: dallo sviluppo multipiattaforma alla gestione centralizzata dell'autenticazione di cloud tools.</p>
                </div>
                <div class="box">
                    <h4>Dettagli</h4>
                    <ul>
                        <li><strong>Luogo:</strong> Varese</li>
                        <li><strong>Settore:</strong> IT</li>
                        <li><strong>Contratto:</strong> Tempo pieno</li>
                    </ul>
                    <br>
                    <a href="#application-form">Candidati</a>
                </div>
            </section>
            <section>
                <h2>Cosa potresti fare con noi</h2>
                <ul>
                    <li>Scrivere codice semplice, sicuro, documentato e testato</li>
                    <li>Progettare modelli di Machine Learning orientati all'ottimizzazione di funzioni o al riconoscimento di pattern</li>
                    <li>Sviluppare architetture basate su AI Generativa per automatizzare processi </li>
                    <li>Integrare software robusto e scalabile</li>
                    <li>Condurre analisi e ottimizzazione delle performance</li>
                    <li>Collaborare con il resto del team per lo sviluppo di prodotti digitali</li>
                    <li>Rimanere aggiornato sugli ultimi sviluppi di tecnologie, coding trends, best practices, portando tutto questo nel tuo lavoro giornaliero</li>
                    <li>Misurarti su progetti di tipologia diversa e appartenenti a diversi ambiti e settori.</li>
                </ul>
            </section>
            <section>
                <h2>Chi stiamo cercando</h2>
                <p>Non poniamo vincoli sull'esperienza, l'importante è che tu abbia:</p>
                <ul>
                    <li><strong>Volontà di metterti in gioco</strong>: è fondamentale che tu abbia passione per quello che fai e voglia di lavorare su progetti innovativi e sfidanti</li>
                    <li><strong>Attitudine al lavoro di squadra</strong>: per noi il concetto di team è fondamentale e cerchiamo persone che apprezzino il confronto con gli altri più che il lavoro in solitaria</li>
                    <li><strong>Voglia di imparare</strong>: non è fondamentale saper utilizzare tutti i linguaggi, l'importante è non spaventarsi di fronte a nuove sfide e non temere di rimboccarsi le maniche</li>
                    <li><strong>Trasparenza</strong>: amiamo l'onestà e desideriamo che tu ti senta libero di dire ciò che pensi in maniera costruttiva, partecipando alle dinamiche che ti circondano</li>
                    <li><strong>Desiderio di crescita</strong>: cerchi un contesto lavorativo che sappia coltivare il tuo talento con un percorso di crescita professionale condiviso.</li>
                </ul>
            </section>
            <section>
                <h2>Cosa ti offriamo</h2>
                <p>Cerchiamo di trattare le persone nel miglior modo possibile, con professionalità e rispetto. Ti offriamo:</p>
                <ul>
                    <li>Un ambiente di lavoro positivo, dinamico e sempre aperto al dialogo</li>
                    <li>Ore di studio per investire continuamente sulla tua formazione e crescita personale</li>
                    <li>Utilizzo di PerPranzo nei giorni in ufficio (il pranzo al ristorante pagato)</li>
                    <li>Free coffee & snacks.</li>
                </ul>
            </section>
            <section>
                <h2>Nota</h2>
                <p>Tutte le candidature sono valutate singolarmente e ci teniamo a rispondere a ogni candidato.</p>
            </section>
            <section>
                <h2>Candidati per questa posizione</h2>
                <form id="application-form" class="needs-validation" name="applicationform" method="POST" action="${data.form.url.applyForJob()}">
                    <div class="group-2">
                        <div style="display: flex;">
                            <input required type="text" name="name" class="form-control" placeholder="Nome e Cognome">
                        </div>
                        <div style="display: flex;">
                            <input required type="email" name="from" class="form-control" placeholder="E-mail">
                        </div>
                    </div>
                    <div class="group-2">
                        <div style="display: flex;">
                            <input required type="text" name="phone" class="form-control" placeholder="Telefono">
                        </div>
                        <div style="display: flex;">
                            <button class="form-control" style="flex-grow: 1;" type="button" onclick="document.querySelector('input[name=curriculum]').click();">
                                <span>Carica il tuo CV</span>
                            </button>
                            <input required type="file" name="curriculum" style="display: none;">
                        </div>
                    </div>
                    <div class="group-1">
                        <div style="display: flex;">
                            <textarea required cols="40" rows="6" name="about_you" class="form-control" placeholder="Raccontaci qualcosa in più su di te"></textarea>
                        </div>
                    </div>
                    <div style="text-align: center;">
                        <button type="submit">
                            <span class="spinner" style="display: none" role="status" aria-hidden="true"></span>
                            Candidati Ora
                        </button>
                    </div>
                </form>
                <div id="application-form-done" style="display: none;">
                    <p><strong>Grazie per averci contattato!</strong> Un membro del nostro team si metterà in contatto con te il prima possibile.</p>
                </div>
                ${formScript.call(this, 'application-form', 'application-form-done', data)}
            </section>
        </main>`
  }
}
