const pageTitle = require('./_includes/components/pageTitle')

class Home {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Forge - Chi siamo',
            pageDescription: 'Uniamo competenze multisettoriali altamente professionali per risolvere problemi tecnologici, strategici e di comunicazione alle aziende.',
            eleventyNavigation: {
                key: 'chi-siamo',
                title: 'Chi Siamo'
            }
        }
    }

    render(data) {

        return `<main>
            ${pageTitle.call(this, data)}
            <section id="chi siamo" class="pb-0">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- left -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h2 class="h1">La miglior estensione per la tua squadra</h2>
                            <h4>Il nostro obiettivo? Creare valore e arrivare al successo insieme alle aziende che seguiamo.</h4>
                            <p>Siamo una realtà giovane e dinamica che unisce competenze multisettoriali altamente professionali per risolvere problemi tecnologici, strategici e di comunicazione alle aziende.</p>
                            <p>Nasciamo nel 2018 e da allora trasformiamo le idee di oggi nei prodotti di domani studiando a fondo la visione dei clienti e realizzando soluzioni digitali competitive.</p>
                            <p>Il nostro cuore pulsante è a Varese, ma siamo amanti del remote working, delle metodologie agili e degli spazi condivisi.</p>
                            <a href="/#servizi" class="btn btn-outline-primary me-3 text-center">Scopri i nostri servizi</a>
                        </div>
                        <!-- right -->
                        <div class="col-md-6">
                            <img class="rounded" src="/assets/images/forge-marketing.jpg" alt="Forge team marketing">
                        </div>
                    </div>
                </div>
            </section>
            <!-- I Nostri Valori -->
            <section id="valori" class="pt-3">
            <div class="container">	
                <div class="row">
                    <div class="col-sm-12 text-center mt-5 mb-4">
                        <h2>I nostri valori sono il nostro brand</h2>
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
                        <div class="col-sm-6">
                        <div class="progress-xl">
                            <!-- progress item 1 -->
                            <div class="progress-item">
                                <p>Creativi</p>
                                <div class="progress">
                                    <div class="progress-bar aos aos-init" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width:75%"><span class="progress-percent">85%</span>
                                    </div>
                                </div>
                            </div>
                            <!-- progress item 2 -->
                            <div class="progress-item">
                                <p>Marketing</p>
                                <div class="progress">
                                    <div class="progress-bar aos aos-init" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:85%"><span class="progress-percent">70%</span>
                                    </div>
                                </div>
                            </div>
                            <!-- progress item 3 -->
                            <div class="progress-item">
                                <p>Tecnologia</p>
                                <div class="progress">
                                    <div class="progress-bar aos aos-init" data-aos="slide-right" data-aos-delay="400" data-aos-duration="1000" data-aos-easing="ease-in-out" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width:95%"><span class="progress-percent">90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= Divisione del team End -->                                    

           <!-- ======================= team style default -->
            <section class="team pb-0">
            <div class="container">
                <div class="row mb-5 text-center">
                    <div class="col-md-12">
                        <h2>Ci mettiamo la faccia</h2>
                    </div>
                </div>
                <div class="row">
                    <!-- Team item 1 -->
                    <div class="col-6 col-sm-6 col-md-2">
                        <div class="team-item text-center">
                            <div class="team-avatar">
                                <img src="/assets/images/team/Angelo_square.png" alt="Angelo">
                            </div>
                            <div class="team-desc">
                                <h5 class="team-name">Angelo Nodari</h5>
                                <span class="team-position">Co-Founder e CEO</span>
                            </div>
                        </div>
                    </div>
                    <!-- Team item 2 -->
                    <div class="col-6 col-sm-6 col-md-2">
                        <div class="team-item text-center">
                            <div class="team-avatar">
                                <img src="/assets/images/team/MarcoV_square.png" alt="Marco">
                            </div>
                            <div class="team-desc">
                                <h5 class="team-name">Marco Vanetti</h5>
                                <span class="team-position">Co-Founder e CTO</span>
                            </div>
                        </div>
                    </div>
                    <!-- Team item 3 -->
                    <div class="col-6 col-sm-6 col-md-2">
                        <div class="team-item text-center">
                            <div class="team-avatar">
                                <img src="/assets/images/team/FabioM_square.png" alt="FabioM">
                            </div>
                            <div class="team-desc">
                                <h5 class="team-name">Fabio Micheletti</h5>
                                <span class="team-position">Co-Founder e CIO</span>
                            </div>
                        </div>
                    </div>
                    <!-- Team item 4 -->
                    <div class="col-6 col-sm-6 col-md-2">
                        <div class="team-item text-center">
                            <div class="team-avatar">
                                <img src="/assets/images/team/FabioG_square.png" alt="">
                            </div>
                            <div class="team-desc">
                                <h5 class="team-name">Fabio Gozzo</h5>
                                <span class="team-position">Senior Infrastructure Specialist</span>
                            </div>
                        </div>
                    </div>
                    <!-- Team item 5 -->
                    <div class="col-6 col-sm-6 col-md-2">
                        <div class="team-item text-center">
                            <div class="team-avatar">
                                <img src="/assets/images/team/Tommaso_square.png" alt="">
                            </div>
                            <div class="team-desc">
                                <h5 class="team-name">Tommaso Bossi</h5>
                                <span class="team-position">Web/App Developer</span>
                            </div>
                        </div>
                    </div>
                    <!-- Team item 6 -->
                    <div class="col-6 col-sm-6 col-md-2">
                        <div class="team-item text-center">
                            <div class="team-avatar">
                                <img src="/assets/images/team/MarcoM_square.png" alt="">
                            </div>
                            <div class="team-desc">
                                <h5 class="team-name">Marco Marchiori</h5>
                                <span class="team-position">Software Developer</span>
                            </div>
                        </div>
                    </div>
                    <!-- Team item 7 -->
                    <div class="col-6 col-sm-6 col-md-2">
                        <div class="team-item text-center">
                            <div class="team-avatar">
                                <img src="/assets/images/team/Marta_square.png" alt="">
                            </div>
                            <div class="team-desc">
                                <h5 class="team-name">Marta Maestri</h5>
                                <span class="team-position">Marketing Specialist</span>
                            </div>
                        </div>
                    </div>
                    <!-- Team item 8 -->
                    <div class="col-6 col-sm-6 col-md-2">
                        <div class="team-item text-center">
                            <div class="team-avatar">
                                <img src="/assets/images/team/Federica_square.png" alt="">
                            </div>
                            <div class="team-desc">
                                <h5 class="team-name">Federica Bernaschina</h5>
                                <span class="team-position">Marketing Specialist</span>
                            </div>
                        </div>
                    </div>
                    <!-- Team item 9 -->
                    <div class="col-6 col-sm-6 col-md-2">
                        <div class="team-item text-center">
                            <div class="team-avatar">
                                <img src="/assets/images/team/Francesca_square.png" alt="">
                            </div>
                            <div class="team-desc">
                                <h5 class="team-name">Francesca Migliori</h5>
                                <span class="team-position">Digital Sales Account</span>
                            </div>
                        </div>
                    </div>
                    <!-- Team item 10 -->
                    <div class="col-6 col-sm-6 col-md-2">
                        <div class="team-item text-center">
                            <div class="team-avatar">
                                <img src="/assets/images/team/Benedetta_square.png" alt="">
                            </div>
                            <div class="team-desc">
                                <h5 class="team-name">Benedetta Re Cecconi</h5>
                                <span class="team-position">Digital Sales Account</span>
                            </div>
                        </div>
                    </div>
                    <!-- Team item 11 -->
                    <div class="col-6 col-sm-6 col-md-2">
                        <div class="team-item text-center">
                            <div class="team-avatar">
                                <img src="/assets/images/team/Davide_square.png" alt="">
                            </div>
                            <div class="team-desc">
                                <h5 class="team-name">Davide Gallazzi</h5>
                                <span class="team-position">Digital Sales Account</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- row end -->
            </div>
            </section>
            <!-- ======================= team style default End -->

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

module.exports = Home