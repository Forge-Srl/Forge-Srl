const pageTitle = require('./_includes/components/pageTitle')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Chi siamo',
            pageDescription: 'Usiamo le nostre competenze informatiche e di problem solving per creare valore.',
            eleventyNavigation: {
                key: 'chi-siamo',
                title: 'Chi Siamo'
            }
        }
    }

    async render(data) {
        return `<main>
            ${pageTitle.call(this, data)}
            <section id="chi siamo" class="pb-0">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- left -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h2 class="h1">La miglior estensione per la tua squadra</h2>
                            <h4>Il nostro obiettivo? Creare valore e arrivare al successo insieme alle aziende che seguiamo.</h4>
                            <p>Siamo una realtà giovane e dinamica che unisce competenze informatiche di diverso tipo come l'intelligenza artificiale, lo sviluppo agile del software e il cloud computing.</p>
                            <p>Nasciamo nel 2018 e da allora trasformiamo idee in prodotti, studiando a fondo la visione dei clienti e realizzando soluzioni digitali competitive.</p>
                            <p>Il nostro cuore pulsante è a Varese, siamo amanti delle metodologie agili e degli spazi condivisi.</p>
                            <a href="/#servizi" class="btn btn-outline-primary me-3 text-center">Scopri i nostri servizi</a>
                        </div>
                        <!-- right -->
                        <div class="col-md-6 d-none d-sm-block">
                            ${await this.image('forge-chi-siamo.jpg', 'Chi siamo', 'rounded')}
                        </div>
                    </div>
                </div>
            </section>
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
                            <p class="feature-box-desc">Vogliamo affiancare le aziende nel processo di crescita con un approccio propositivo basato su fiducia, onestà, etica e trasparenza.</p>
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
            
            <!-- ======================= Divisione del team  -->
            <section id="team" class="pt-5 py-5">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- right -->
                        <div class="col-md-12">
                            <h5 class="text-primary">Il team</h5>
                            <h2 class="h1">Il lavoro di squadra è il nostro asset migliore</h2>
                            <p>La nostra squadra è composta da sviluppatori esperti in diverse tecnologie e project manager.</p>
                            <p>Ispirati dalla curiosità e dalla passione per le sfide, riteniamo estremamente importante il valore umano ma non perdiamo mai di vista i numeri, che guidano tutte le nostre decisioni e strategie. </p>
                            <p>Sogniamo un mondo permeato dalla cultura digitale, che cerchiamo di diffondere insegnando presso università e aziende.</p>
                            <a href="/innovazione/" class="btn btn-outline-primary me-3 text-center">Scopri i nostri progetti</a>
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