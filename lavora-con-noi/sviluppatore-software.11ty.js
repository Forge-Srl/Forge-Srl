const pageTitle = require('../_includes/components/pageTitle')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Forge - Lavora con Noi: Sviluppatore Software',
            pageDescription: 'Come sviluppatore Software di Forge lavorerai a Varese su progetti innovativi utilizzando diverse tecnologie: Java, Javascript, Kotlin, Swift, PHP...',
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
                            <h2 class="mb-4">Job description</h2>
                            <p>Stiamo cercando uno sviluppatore software da inserire nel nostro team di Varese, con una modalità di lavoro ibrida (2/3 giorni in sede, gli altri giorni in smart working). 
                            Utilizziamo la metodologia Agile applicata ad ogni aspetto del processo di sviluppo e basata sulla continua voglia di migliorare le proprie conoscenze e i prodotti su cui lavoriamo.</p>
                            
                            <p>Abbiamo un approccio di continuous delivery sui progetti: incentiviamo l'utilizzo del pair programming per diffondere la conoscenza e stimolare soluzioni innovative e scriviamo test per consolidare il lavoro che facciamo (e dormire sonni tranquilli!).</p>
                            
                            <p>Utilizziamo diverse tecnologie a seconda del contesto: Java, Javascript, Kotlin, Swift, PHP, etc...</p>
                            
                            <p>A nostro avviso non è indispensabile conoscere tutti i linguaggi, quanto piuttosto non spaventarsi di fronte a nuove sfide e utilizzare i principi di buona programmazione dettati da un'architettura pulita del codice e dall'utilizzo di pattern.</p>
                            
                            <p>Crediamo molto nella formazione: riserviamo ad ogni membro del team un'ora al giorno da dedicare alla propria crescita professionale e all'avanzamento di progetti personali e incentiviamo la partecipazione a conferenze di settore ed eventi.</p>
                            
                            <p>Contribuiamo a diversi progetti open source su diverse tematiche: dallo sviluppo multipiattaforma alla gestione centralizzata dell'autenticazione di cloud tools.
                            </p>

                            <h2 class="mb-4">Job description</h2>Cosa farai con noi</h2>
                            <ul>
                                <li>Proven results as a recruitment consultant or strong sales experience</li>
                                <li>Knowledge of the staffing industry</li>
                                <li>Previous leadership experience, personally or professionally</li>
                                <li>A strong desire to be successful and inspire people</li>
                            </ul>
                            <h6 class="mb-2 mt-3">What you’ll get in return:</h6>
                            <ul>
                                <li>A culture where success is celebrated</li>
                                <li>Uncapped earnings potential</li>
                                <li>A career where you can choose your path</li>
                                <li>Company share purchase plan</li>
                                <li>An internal rewards program</li>
                            </ul>

                            <h6 class="mt-4 mb-2">Skills</h6>
                            <ul>
                                <li>Involving The Team In Decisions That Affect Them</li>
                                <li>Displays technical or professional expertise</li>
                                <li>Communicates powerfully and prolifically</li>
                                <li>Solves problems and analyzes issues</li>
                                <li>Displays high integrity and honesty</li>
                            </ul>

                            <h6 class="mt-4 mb-2">Educational requirements</h6>
                            <ul>
                                <li>Bachelor Degree</li>
                            </ul>

                            <!-- Apply form -->
                            <div class="row mt-5">
                                <div class="col-md-12">
                                    <h2 class="mb-3">Apply for this Job</h2></div>
                                <div class="col-md-6"><span class="form-group"><input type="text" class="form-control" placeholder="Name"></span></div>
                                <div class="col-md-6"><span class="form-group"><input type="email" class="form-control" placeholder="E-mail"></span></div>
                                <div class="col-md-6"><span class="form-group"><input type="text" class="form-control" placeholder="Mobile number"></span></div>
                                <div class="col-md-6 mb-4">
                                    <div class="input-group">
                                        <input type="file" class="form-control mb-0" id="inputGroupFile01">
                                        <!-- <label class="customFile" for="inputGroupFile01">Upload your CV</label> -->
                                    </div>
                                </div>
                                <div class="col-md-12"><span class="form-group"><textarea cols="40" rows="6" class="form-control" placeholder="Message"></textarea></span></div>
                                <div class="col-md-12 text-center d-grid"><button class="btn btn-dark">Apply now</button></div>
                            </div>

                        </div>
                        <!-- Sidebar -->
                        <div class="col-md-4 sidebar">
                            <div data-sticky data-margin-top="80" data-sticky-for="991">
                                <h2 class="mt-3 mt-md-0 mb-3">Job details</h2>
                                <ul class="list-unstyled p-0">
                                    <li class="mb-3"><strong>Posted:</strong> 3 July 2018 </li>
                                    <li class="mb-3"><strong>Location:</strong> London </li>
                                    <li class="mb-3"><strong>Specialism:</strong> IT </li>
                                    <li class="mb-3"><strong>Job type:</strong> Permanent </li>
                                    <li class="mb-3"><strong>Reference number:</strong> CRR0001-18 </li>
                                    <li class="mb-3"><strong>Contact:</strong> Jessica Mores</li>
                                    <li class="mb-3"><strong>Phone:</strong> (+251) 854-6308 </li>
                                </ul>
                                <a class="d-block mt-3" href="#"><i class="fa fa-print me-2"></i> Print</a>
                            </div>
                        </div>
                        <!-- Sidebar end-->
                    </div>
                </div>
            </section>
            <!-- =======================
            careers -->


            
        </main>`
    }
}