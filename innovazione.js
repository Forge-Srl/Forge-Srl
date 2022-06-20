const pageTitle = require('./_includes/components/pageTitle')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Forge - Innovazione',
            pageDescription: 'Uniamo competenze multisettoriali altamente professionali per risolvere problemi tecnologici, strategici e di comunicazione alle aziende.',
            eleventyNavigation: {
                key: 'innovazione',
                title: 'Innovazione'
            }
        }
    }

    async render(data) {
        return `<main>
            ${pageTitle.call(this, data)}
            <section id="innovare" class="pb-0">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- left -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h2 class="h1">La nostra parola preferita: innovare</h2>
                            <p>In Forge amiamo accompagnare le aziende in un percorso di innovazione che nasce dal rapporto sinergico con università, start-up, centri di ricerca e giovani talenti.</p>
                            <p>Utilizziamo un approccio collaborativo in ogni fase dello sviluppo di prodotti, servizi e processi, ponendo particolare attenzione alla trasformazione digitale e all’adozione di nuove tecnologie che rispondano ai problemi emergenti delle organizzazioni.</p>
                        </div>
                        <!-- right -->
                        <div class="col-md-6 d-none d-sm-block">
                            ${await this.image('forge-chi-siamo.jpg', 'Chi siamo', 'rounded')}
                        </div>
                    </div>
                </div>
            </section>

            <!-- counter light -->
            <section class="py-4">
                <div class="container">
                    <div class="row">
                        <!-- count item -->
                        <div class="col-md-3 col-6 mb-4 mb-md-0">
                            <div class="text-center">
                                <i class="text-grad display-6 ti-write"></i>
                                <h2 class="text-grad fw-bold mt-2 mb-0 purecounter"  data-purecounter-start="0" data-purecounter-delay="10" data-purecounter-duration="1" data-purecounter-end="5257">0</h2>
                                <p class="mb-0">Lines of code</p>
                            </div>
                        </div>
                        <!-- count item -->
                        <div class="col-md-3 col-6 mb-4 mb-md-0">
                            <div class="text-center">
                                <i class="text-grad display-6 ti-truck"></i>
                                <h2 class="text-grad fw-bold mt-2 mb-0 purecounter" data-purecounter-start="0" data-purecounter-delay="10" data-purecounter-duration="1" data-purecounter-end="865">0</h2>
                                <p class="mb-0">Project Delivered</p>
                            </div>
                        </div>
                        <!-- count item -->
                        <div class="col-md-3 col-6">
                            <div class="text-center">
                                <i class="text-grad display-6 ti-face-smile"></i>
                                <h2 class="text-grad fw-bold mt-2 mb-0 purecounter" data-purecounter-start="0" data-purecounter-delay="10" data-purecounter-duration="1" data-purecounter-end="127">0</h2>
                                <p class="mb-0">Satisfied clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
	        <!-- counter light -->

            <!-- I Nostri Valori -->
            <section id="valori" class="pt-5">
            <div class="container">	
                <div class="row">
                    <div class="col-sm-12 mt-5 mb-4 text-sm-start text-md-center">
                        <h2 class="h1">I nostri valori sono il nostro brand</h2>
                    </div>
                    <div class="col-md-4 mt-4">
                        <div class="feature-box f-style-1 h-100 icon-primary">
                            <div class="feature-box-icon"><i class="fa-solid fa-glasses"></i></div>
                            <h3 class="feature-box-title">Vision</h3>
                            <h5>Come ci immaginiamo il futuro?</h5>
                            <p class="feature-box-desc">Un mondo del lavoro più equo che premia i talenti e la formazione, in cui le competenze e la corretta metodologia di lavoro sono gli strumenti per il successo.</p>
                        </div>
                    </div>
                    <div class="col-md-4 mt-4">
                        <div class="feature-box f-style-1 h-100 icon-primary">
                            <div class="feature-box-icon"><i class="fa-regular fa-handshake"></i></div>
                            <h3 class="feature-box-title">Mission</h3>
                            <h5>Che ruolo vogliamo avere nel futuro?</h5>
                            <p class="feature-box-desc">Vogliamo affiancare le aziende nel processo di crescita con un approccio propositivo di fiducia, onestà, eticità e trasparenza.</p>
                        </div>
                    </div>
                    <div class="col-md-4 mt-4">
                        <div class="feature-box f-style-1 h-100 icon-primary">
                            <div class="feature-box-icon"><i class="fa-regular fa-star"></i></div>
                            <h3 class="feature-box-title">North Star</h3>
                            <h5>Come misuriamo il valore che creiamo?</h5>
                            <p class="feature-box-desc">Tramite il livello di soddisfazione dei clienti partendo dal rispetto dei tempi di consegna, dalla solidità dei rapporti commerciali e dalla felicità delle persone coinvolte.</p>
                        </div>
                    </div>
                </div>  
            </div>
            </section>
            <!-- I Nostri Valori End --> 

            <!-- ======================= Action box -->
            <section class="bg-grad p-4 p-sm-5 pattern-overlay-4">
                <div class="container">
                    <div class="d-block all-text-white text-center">
                        <div class="text-center">
                            <h2 class="m-0">Condividi i nostri valori?</h2>
                            <h4>Scarica il nostro company profile per scoprire il dettaglio dei nostri servizi.</h4>
                        </div>
                        <a href="/assets/documents/forge-company-profile.pdf" target="_blank" class="btn btn-white me-3 text-center">Scarica il Company Profile</a>
                    </div>
                </div>
            </section>
            <!-- ======================= End Action box -->

            <!-- ======================= Divisione del team  -->
            <section id="team" class="pb-3">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- right -->
                        <div class="col-md-6">
                            <h5 class="text-primary">Il team</h5>
                            <h2 class="h1">Il lavoro di squadra è il nostro asset migliore</h2>
                            <p>La nostra squadra è composta da un mix perfetto di creativi, marketer e tecnici esperti.</p>
                            <p>Ispirati dalla curiosità e dalla passione per le sfide, riteniamo estremamente importante il valore umano ma non perdiamo mai di vista i numeri, che guidano tutte le nostre decisioni e strategie. </p>
                            <p>Sogniamo un mondo permeato dalla cultura digitale, che cerchiamo di diffondere insegnando presso università e aziende. </p>
                        </div>
                        <!-- left -->
                        <div class="col-md-6">
                            ${await this.image('team-chi-siamo.jpg', 'Suddivisione del team Forge', 'rounded')}
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= Divisione del team End -->                                    

            <!-- ======================= Action box -->
            <section class="bg-grad p-4 p-sm-5 pattern-overlay-4">
                <div class="container">
                    <div class="d-block all-text-white text-center">
                        <div class="text-center">
                            <h2 class="m-0">Ti aiutiamo a raggiungere i tuoi obiettivi</h2>
                            <h4>Hai bisogno di maggiori informazioni o vuoi semplicemente farti un’idea di come lavoriamo? Siamo a tua disposizione!</h4>
                        </div>
                    <a href="/contattaci/" class="btn btn-white me-3 text-center">Parliamone Insieme</a>
                    </div>
                </div>
            </section>
            <!-- ======================= End Action box -->
        </main>`
    }
}