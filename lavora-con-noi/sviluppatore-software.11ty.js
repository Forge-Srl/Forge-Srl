const pageTitle = require('../_includes/components/pageTitle')
const formScript = require('../_includes/components/formScript')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Lavora con Noi: Sviluppatore Software',
            pageDescription: 'Come sviluppatore Software di Forge lavorerai a Varese su progetti innovativi utilizzando diverse tecnologie: JavaScript, Python, Kotlin...',
            eleventyNavigation: {
                key: 'sviluppatore-software',
                parent: 'lavora-con-noi',
                title: 'Sviluppatore Software'
            }
        }
    }

    async render(data) {
        return `<main>
            ${pageTitle.call(this, data)}
            <!-- ======================= careers -->
            <section>
                <div class="container">
                    <div class="row">
                        <!-- Job positions -->
                        <div class="col-md-8">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item active">
                                        <a href="/lavora-con-noi/"><i class="ti-arrow-circle-left"></i> Torna alle posizioni aperte</a>
                                    </li>
                                </ol>
                            </nav>
                            <h2 class="mb-4">Job description</h2>
                            <p>Stiamo cercando uno sviluppatore software da inserire nel nostro team di Varese.
                            L'esperienza nell'utilizzo di più linguaggi di programmazione e di strumenti di Intelligenza Artificiale e Machine Learning sono <strong>requisiti opzionali</strong>.</p>
                            
                            <p>Utilizziamo la <strong>metodologia Agile</strong> applicata al processo di sviluppo e basata sulla continua voglia di migliorare le proprie conoscenze e i prodotti su cui lavoriamo.</p>
                            
                            <p>Abbiamo un <strong>approccio di continuous delivery</strong> sui progetti e scriviamo test automatici per consolidare il lavoro che facciamo (e dormire sonni tranquilli!); inoltre incentiviamo l'utilizzo del pair programming per diffondere la conoscenza e stimolare soluzioni innovative.</p>
                            
                            <p>Utilizziamo diverse tecnologie a seconda del contesto: Python e PyTorch, TypeScript, Angular, NestJS, AWS cloud native, etc.</p>
                            
                            <p>Per noi <strong>è indispensabile</strong> essere appassionati di informatica e curiosi di fronte a nuove sfide e tecnologie.</p>
                            
                            <p>Crediamo molto nella <strong>formazione</strong>: riserviamo ad ogni membro del team del tempo da dedicare alla propria crescita professionale e all'avanzamento di progetti personali.</p>
                            
                            <p>Contribuiamo a diversi <strong>progetti open source</strong>: dallo sviluppo multipiattaforma alla gestione centralizzata dell'autenticazione di cloud tools.</p>

                            <h2 class="mt-4 mb-4">Cosa potresti fare con noi</h2>
                            <ul class="list-group list-group-borderless list-group-icon-primary-bg mb-4">
                                <li class="list-group-item"><i class="fa fa-check"></i> Scrivere codice semplice, sicuro, documentato e testato</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Progettare modelli di Machine Learning orientati all'ottimizzazione di funzioni o al riconoscimento di pattern</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Sviluppare architetture basate su AI Generativa per automatizzare processi </li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Integrare software robusto e scalabile</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Condurre analisi e ottimizzazione delle performance</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Collaborare con il resto del team per lo sviluppo di prodotti digitali</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Rimanere aggiornato sugli ultimi sviluppi di tecnologie, coding trends, best practices, portando tutto questo nel tuo lavoro giornaliero</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Misurarti su progetti di tipologia diversa e appartenenti a diversi ambiti e settori.</li>
                            </ul>

                            <h2 class="mt-4 mb-4">Chi stiamo cercando</h2>
                            <p>Non poniamo vincoli sull'esperienza, l'importante è che tu abbia:</p>
                            <ul class="list-group list-group-borderless mb-4">
                                <li class="list-group-item"><i class="fa fa-check"></i> <strong>Volontà di metterti in gioco</strong>: è fondamentale che tu abbia passione per quello che fai e voglia di lavorare su progetti innovativi e sfidanti</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> <strong>Attitudine al lavoro di squadra</strong>: per noi il concetto di team è fondamentale e cerchiamo persone che apprezzino il confronto con gli altri più che il lavoro in solitaria</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> <strong>Voglia di imparare</strong>: non è fondamentale saper utilizzare tutti i linguaggi, l'importante è non spaventarsi di fronte a nuove sfide e non temere di rimboccarsi le maniche</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> <strong>Trasparenza</strong>: amiamo l’onestà e desideriamo che tu ti senta libero di dire ciò che pensi in maniera costruttiva, partecipando alle dinamiche che ti circondano</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> <strong>Desiderio di crescita</strong>: cerchi un contesto lavorativo che sappia coltivare il tuo talento con un percorso di crescita professionale condiviso.</li>
                            </ul>

                            <h2 class="mt-4 mb-4">Cosa ti offriamo</h2>
                            <p>Cerchiamo di trattare le persone nel miglior modo possibile, con professionalità e rispetto. Ti offriamo:</p>
                            <ul class="list-group list-group-borderless mb-4">
                                <li class="list-group-item"><i class="fa fa-check"></i> Un ambiente di lavoro positivo, dinamico e sempre aperto al dialogo</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Ore di studio per investire continuamente sulla tua formazione e crescita personale</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Utilizzo di PerPranzo nei giorni in ufficio (il pranzo al ristorante pagato)</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Free coffee & snacks.</li>
                            </ul>

                            <h2 class="mt-4 mb-4">Nota</h2>
                            <p>Tutte le candidature sono valutate singolarmente e ci teniamo a rispondere a ogni candidato.</p>

                            <div class="mt-5 col-md-12">
                                <h2 class="mb-3">Candidati per questa posizione</h2>
                            </div>
                            <form id="application-form" class="needs-validation" name="applicationform" method="POST" action="${data.form.url.applyForJob()}">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <input required type="text" name="name" class="form-control" placeholder="Nome e Cognome">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <input required type="email" name="from" class="form-control" placeholder="E-mail">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <input required type="text" name="phone" class="form-control" placeholder="Telefono">
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <div class="input-group">
                                            <button class="form-control mb-0 btn btn-outline-primary" onclick="document.querySelector('input[name=curriculum]').click();">
                                                <span>Carica il tuo CV</span>
                                            </button>
                                            <input required type="file" name="curriculum" style="display: none;">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group">
                                            <textarea required cols="40" rows="6" name="about_you" class="form-control" placeholder="Raccontaci qualcosa in più su di te"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12 text-center d-grid">
                                        <button class="btn btn-primary m-0" type="submit">
                                            <span class="spinner-border spinner-border-sm" style="display: none;" role="status" aria-hidden="true"></span>
                                            <span>Candidati Ora</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div id="application-form-done" style="display: none;">
                                <h4 class="text-center">Grazie per averci contattato! Un membro del nostro team si metterà in contatto con te il prima possibile.</h4>
                            </div>
                            ${formScript.call(this, 'application-form', 'application-form-done', data)}
                        </div>
                        <!-- Sidebar -->
                        <div class="col-md-4 sidebar">
                            <div data-margin-top="80" data-sticky data-sticky-for="991">
                                <h2 class="mt-3 mt-md-0 mb-3">Dettagli</h2>
                                <ul class="list-unstyled p-0">
                                    <li class="mb-3"><strong>Luogo:</strong> Varese</li>
                                    <li class="mb-3"><strong>Settore:</strong> IT</li>
                                    <li class="mb-3"><strong>Contratto:</strong> Tempo pieno</li>
                                </ul>
                                <div class="mt-3">
                                    <a href="#application-form">Candidati <i class="ti-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <!-- Sidebar end-->
                    </div>
                </div>
            </section>
            <!-- ======================= careers -->
        </main>`
    }
}