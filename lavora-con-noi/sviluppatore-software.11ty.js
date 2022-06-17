const pageTitle = require('../_includes/components/pageTitle')
const formScript = require('../_includes/components/formScript')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Forge - Lavora con Noi: Sviluppatore Software',
            pageDescription: 'Come sviluppatore Software di Forge lavorerai a Varese su progetti innovativi utilizzando diverse tecnologie: Java, JavaScript, Kotlin, Swift, PHP...',
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
                                        <a href="#"><i class="ti-arrow-circle-left"></i> Torna alle posizioni aperte</a>
                                    </li>
                                </ol>
                            </nav>
                            <h2 class="mb-4">Job description</h2>
                            <p>Stiamo cercando uno sviluppatore software da inserire nel nostro team di Varese, con una <strong>modalità di lavoro ibrida</strong> (2/3 giorni in sede, gli altri giorni in smart working). 
                            Utilizziamo la <strong>metodologia Agile</strong> applicata ad ogni aspetto del processo di sviluppo e basata sulla continua voglia di migliorare le proprie conoscenze e i prodotti su cui lavoriamo.</p>
                            
                            <p>Abbiamo un <strong>approccio di continuous delivery</strong> sui progetti e scriviamo test automatici per consolidare il lavoro che facciamo (e dormire sonni tranquilli!); inoltre incentiviamo l'utilizzo del pair programming per diffondere la conoscenza e stimolare soluzioni innovative.</p>
                            
                            <p>Utilizziamo diverse tecnologie a seconda del contesto: JavaScript, TypeScript, Java, Kotlin, Swift, PHP, etc.</p>
                            
                            <p>A nostro avviso <strong>non è indispensabile conoscere tutti i linguaggi</strong> o framework, quanto piuttosto non spaventarsi di fronte a nuove sfide e utilizzare i <strong>principi di buona programmazione</strong> dettati da un'architettura pulita del codice e dall'utilizzo di pattern.</p>
                            
                            <p>Crediamo molto nella <strong>formazione</strong>: riserviamo ad ogni membro del team un'ora al giorno da dedicare alla propria crescita professionale e all'avanzamento di progetti personali e incentiviamo la partecipazione a conferenze di settore ed eventi.</p>
                            
                            <p>Contribuiamo a diversi <strong>progetti open source</strong> su diverse tematiche: dallo sviluppo multipiattaforma alla gestione centralizzata dell'autenticazione di cloud tools.</p>

                            <h2 class="mt-4 mb-4">Cosa farai con noi</h2>
                            <ul class="list-group list-group-borderless list-group-icon-primary-bg mb-4">
                                <li class="list-group-item"><i class="fa fa-check"></i> Scriverai codice pulito, sicuro, documentato e testato</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Contribuirai alla progettazione di software robusto e scalabile</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Condurrai analisi e ottimizzazione delle performance</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Strutturerai il codice al meglio</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Collaborerai con il resto del team per lo sviluppo di prodotti digitali</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Rimarrai aggiornato sugli ultimi sviluppi di tecnologie, coding trends, best practices e le porterai nel tuo lavoro giornaliero coinvolgendo il team in discussioni costruttive ed educative</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Ti misurerai su progetti di tipologia diversa e appartenenti a diversi ambiti e settori.</li>
                            </ul>

                            <h2 class="mt-4 mb-4">Chi stiamo cercando</h2>
                            <p>Non poniamo vincoli sull'esperienza, l'importante è che tu abbia:</p>
                            <ul class="list-group list-group-borderless mb-4">
                                <li class="list-group-item"><i class="fa fa-check"></i> <strong>Volontà di metterti in gioco</strong>: è fondamentale che tu abbia passione per quello che fai e voglia di lavorare su progetti innovativi e "challenging"</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> <strong>Attitudine al lavoro di squadra</strong>: per noi il concetto di team è fondamentale e cerchiamo persone che apprezzino il confronto con gli altri più che il lavoro in solitaria</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> <strong>Voglia di imparare</strong>: non è fondamentale saper utilizzare tutti i linguaggi, l'importante è non spaventarsi di fronte a nuove sfide e non temere di rimboccarsi le maniche</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> <strong>Trasparenza</strong>: amiamo l’onestà e desideriamo che tu ti senta libero di dire ciò che pensi in maniera costruttiva, partecipando alle dinamiche che ti circondano</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> <strong>Desiderio di crescita</strong>: cerchi un contesto lavorativo che sappia coltivare il tuo talento con un percorso di crescita professionale condiviso.</li>
                            </ul>

                            <h2 class="mt-4 mb-4">Cosa ti offriamo</h2>
                            <p>Cerchiamo di trattare le persone nel miglior modo possibile, con professionalità e rispetto. Ti offriamo:</p>
                            <ul class="list-group list-group-borderless mb-4">
                                <li class="list-group-item"><i class="fa fa-check"></i> Un ambiente di lavoro positivo, dinamico e sempre aperto al dialogo</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Un’ora di studio giornaliera per investire continuamente sulla tua formazione e crescita personale</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Un interessante pacchetto retributivo con RAL commisurata all’esperienza</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Remote working policy</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Utilizzo di PerPranzo nei giorni in ufficio (il pranzo al ristorante pagato)</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Free coffee & snacks.</li>
                            </ul>

                            <h2 class="mt-4 mb-4">Come funziona il processo di selezione</h2>
                            <ul class="list-group list-group-borderless mb-4">
                                <li class="list-group-item"><i class="fa fa-check"></i> Se passerai con successo il processo di screening delle candidature, ti inviteremo a fare un test che servirà a permetterci di capire il tuo approccio alla programmazione. Questo test non richiede nessuna preparazione specifica e durerà circa un paio di ore.</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Se passerai il test con successo, saremo felici di fissare un colloquio di persona per conoscerci meglio e capire insieme se noi possiamo essere adatti a te e viceversa.</li> 
                                <li class="list-group-item"><i class="fa fa-info fa-fw text-info"></i> Forge è un’azienda inclusiva. Non facciamo nessun tipo di discriminazione basata su colore, religione, genere, età o orientamento sessuale.</li>
                            </ul>

                            <h2 class="mt-4 mb-4">Nota</h2>
                            <p>Tutte le candidature sono valutate singolarmente e ci teniamo a rispondere a ogni candidato. A volte, purtroppo, le risposte sono filtrate come Spam: ricordati di controllare la cartella.</p>

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
                                    <li class="mb-3"><strong>Modalità:</strong> Ibrido</li>
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