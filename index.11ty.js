module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Homepage',
            pageDescription: 'Trasformiamo le idee di oggi nei prodotti di domani. Siamo appassionati di Artificial Intelligence, Process Automation, Machine Learning, Software Development e Digital Innovation',
            eleventyNavigation: {
                key: 'home',
                title: 'Home',
            },
        }
    }

    async render(data) {
        return `<main>
            <section class="p-0 position-relative h-500 h-md-600 h-xl-900 bg-grad pattern-overlay-4 overflow-hidden">
            <div class="container d-flex h-100">
                <div class="row align-self-center w-100 z-index-9">
                    <!-- banner Content -->
                    <div class="col-md-7 mt-md-0 all-text-white position-relative">
                        <h1 class="display-4 fw-normal" style="will-change: contents; transform: translateZ(0);">
                            <span class="pt-0">Appassionati di</span>
                            <br>
                            <span class="typed" data-type-text="Artificial Intelligence&&Process Automation&&Machine Learning&&Software Development&&Digital Innovation"></span>
                        </h1>
                        <h2 class="mb-4 fw-normal">trasformiamo le idee di oggi nei prodotti di domani.</h2>
                        <a class="btn btn-outline-light mb-0 rounded m-0 d-none d-md-inline" href="#servizi">Esplora le nostre soluzioni</a>
                        <a class="btn btn-primary mb-0 rounded m-3 d-md-inline" href="/contattaci/">Contattaci</a>
                    </div>
                    <!-- banner image -->
                    <div class="col-md-5 d-none d-md-block p-0 position-absolute top-0 end-0 align-top align-text-top">
                        <figure class="w-100 ie-height-750">
                            <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1290 1024" style="enable-background:new 0 0 1290 1024;" xml:space="preserve">
                                <g id="XMLID_81_">
                                    <defs>
                                    <path id="XMLID_3_" d="M1290,0v1024c0,0-229.8-152.2-550-52.9C467.3,1055.7-22.5,927.6,47.8,540C120.4,139.6,17,0,17,0H1290z"/>
                                    </defs>
                                    <clipPath id="XMLID_83_">
                                    <use xlink:href="#XMLID_3_" style="overflow:visible;"/>
                                    </clipPath>
                                    <g style="clip-path:url(#XMLID_83_);">
                                        <!-- Set your 1290px X 1024px image below -->
                                        <image style="overflow:visible;" width="1290" height="1024" id="XMLID_82_" xlink:href="assets/images/forge-banner.jpg"  transform="matrix(0.9999 0 0 0.9999 8.063897e-002 6.401104e-002)">
                                        </image>
                                    </g>
                                </g>
                            </svg>
                        </figure>
                    </div>
                </div>
            </div>
            <canvas class="position-absolute bottom-0 start-50 translate-middle-x mb-n9 z-index-0" id="waveCanvas" style="will-change: transform; transform: translateZ(0);"></canvas>
        </section>
        <!-- ======================= End Main banner -->
    
        <!-- ======================= About us  -->
        <section id="chi-siamo">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <!-- left -->
                    <div class="col-md-6">
                        <div class="row mt-4 mt-md-0">
                            <div class="col-5 offset-1 px-2 mb-3 align-self-end">
                                <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out">
                                    ${await this.image('chi-siamo1.jpg', 'Esperti Forge', 'rounded aos', [240])}
                                </div>
                            </div>
                            <div class="col-6 px-2 mb-3">
                                <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    ${await this.image('chi-siamo2.jpg', 'Il team di Forge a Varese', 'rounded aos', [290])}
                                </div>
                            </div>
                            <div class="col-12 col-md-7 px-2 mb-3">
                                <div class="rounded aos bg-grad p-2 p-sm-3 p-lg-4 p-xl-5 all-text-white" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1500">
                                    <p class="blockquote">Appassionarci alle idee dei nostri clienti ci permette di creare costantemente valore.</p>
                                </div>
                            </div>
                            <div class="col-5 align-self-start ps-2 mb-3 d-none d-md-inline">
                                <div data-aos="fade-down" data-aos-delay="300" data-aos-duration="1500">
                                    ${await this.image('chi-siamo3.jpg', 'Forge lavoro di squadra', 'rounded aos', [240])}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- right -->
                    <div class="col-md-6 ps-lg-5">
                        <h5 class="text-primary">Chi Siamo</h5>
                        <h3 class="h1">Intelligenza artificiale, approccio umano</h3>
                        <p>Siamo una squadra affiatata composta da <b>informatici</b> con varie specializzazioni. 
                        <p>Lavoriamo con le più recenti tecnologie di <b>intelligenza arificiale</b> e usando gli strumenti 
                        di <b>sviluppo software</b> più aggiornati. 
                        <p>Ci <b>divertiamo</b> e non smettiamo mai di imparare, perché 
                        l'innovazione digitale è in costante accelerazione e richiede <b>passione</b>.</p>
                        <p>Il nostro approccio è diretto e agile, cerchiamo costantemente <b>fiducia, onestà e trasparenza</b>.</p>
                        <a href="/chi-siamo/" class="btn btn-outline-primary me-3 text-center">Conosci il team</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- ======================= End About us  -->
    
        <!-- ======================= Service -->
        <section id="servizi" class="pb-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <!-- title -->
                        <h5 class="text-primary">Cosa Facciamo</h5>
                        <h3 class="h1">Come possiamo aiutarti</h3>
                    </div>
                    <div class="col-md-6">
                        <!-- service item -->
                        <div class="rounded bg-light p-4 p-lg-5 mb-5">
                            <span class="display-5 icon-primary"><i class="fas fa-brain"></i></span>
                            <h5 class="mt-3">Intelligenza Artificiale</h5>
                            <ul>
                                <li>Automazione di Processi con AI Generativa</li>
                                <li>Supporto Clienti automatizzato</li>
                                <li>Manutenzione Predittiva</li>
                                <li>Data Science</li>
                            </ul>
                            <div class="mt-3">
                            <a href="/servizi/#ai">Scopri di più <i class="ti-arrow-right text-primary"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <!-- service item -->
                        <div class="rounded bg-light p-4 p-lg-5 mb-5">
                            <span class="display-5 icon-primary"><i class="fas fa-code"></i></span>
                            <h5 class="mt-3">Sviluppo software</h5>
                            <ul>
                                <li>E-Commerce</li>
                                <li>Web Development</li>
                                <li>Back-End Development</li>
                                <li>Mobile App Development Android/iOS</li>
                            </ul>
                            <div class="mt-3">
                            <a href="/servizi/#dev">Scopri di più <i class="ti-arrow-right text-primary"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ======================= End Service -->
    
        <!-- ======================= Process-advance -->
        <section id="metodologia" class="process-advance bg-light">
            <div class="title text-center">
                <h2>Il successo dei nostri clienti è il nostro successo</h2>
                <h4>Offriamo un approccio concreto, flessibile e soprattutto umano</h4>
            </div>
            <div class="container">
                <div class="row">
                    <!-- process 1 -->
                    <div class="col-sm-6 col-lg-3 text-center mb-4">
                        <div class="process-border"><span class="process-number bg-primary border-end">01</span></div>
                        <h5 class="my-3">Ascoltiamo e valutiamo</h5>
                        <p>con onestà il progetto e decidiamo se possiamo fornire il nostro contributo nella realizzazione</p>
                    </div>
                    <!-- process 1 -->
                    <div class="col-sm-6 col-lg-3 text-center mb-4">
                        <div class="process-border"><span class="process-number bg-primary border-start border-end">02</span></div>
                        <h5 class="my-3">Troviamo una soluzione</h5>
                        <p>che sia il più possibile efficace e che dimostri con dati misurabili un riscontro positivo</p>
                    </div>
                    <!-- process 1 -->
                    <div class="col-sm-6 col-lg-3 text-center mb-4">
                        <div class="process-border"><span class="process-number bg-primary border-start border-end">03</span></div>
                        <h5 class="my-3">Usiamo il modello <i>Agile</i></h5>
                        <p>e la metodologia Scrum per pianificare e gestire il progetto con la massima flessibilità ed efficienza</p>
                    </div>
                    <!-- process 1 -->
                    <div class="col-sm-6 col-lg-3 text-center mb-4">
                        <div class="process-border"><span class="process-number bg-primary border-start">04</span></div>
                        <h5 class="my-3">Chiediamo feedback</h5>
                        <p>costantemente attraverso un rapporto umano e trasparente costruito sulla fiducia, rilasciando gradualmente il software.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- ======================= End Process-advance -->

        <!-- ======================= Values -->
        <section id="valori">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 text-center mb-4">
                        <h2>I nostri valori</h2>
                        <h4>Ci basiamo su 4 valori per guidare le nostre scelte e decisioni</h4>
                    </div>
                    <div class="col-md-3">
                        <div class="feature-box f-style-5 h-100 icon-grad">
                            <div class="feature-box-icon"><i class="fas fa-light fa-key"></i></i></div>
                            <h3 class="feature-box-title">Fiducia</h3>
                            <p class="feature-box-desc">Sia tra di noi che con i nostri clienti. Pensiamo che sia la vera chiave per la costruzione di un rapporto solido che possa generare valore. </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="feature-box f-style-5 h-100 icon-grad">
                            <div class="feature-box-icon"><i class="fas fa-light fa-handshake"></i></i></div>
                            <h3 class="feature-box-title">Onestà</h3>
                            <p class="feature-box-desc">Vogliamo che le cose siano fatte bene. I nostri consigli saranno sempre sinceri, senza timore di metterci in discussione.</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="feature-box f-style-5 h-100 icon-grad">
                            <div class="feature-box-icon"><i class="fas fa-light fa-rocket"></i></i></div>
                            <h3 class="feature-box-title">Innovazione</h3>
                            <p class="feature-box-desc">Aiutiamo i nostri clienti nelle scelte attraverso una consulenza armonica che abbraccia il cambiamento e le nuove sfide.</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="feature-box f-style-5 h-100 icon-grad">
                            <div class="feature-box-icon"><i class="fas fa-light fa-message"></i></i></div>
                            <h3 class="feature-box-title">Trasparenza</h3>
                            <p class="feature-box-desc">Ci confrontiamo costantemente con un rapporto diretto e informale, non amiamo fare giri di parole. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ======================= End Values -->
    
        <!-- ======================= Why-us -->
        <section id="lavora-con-noi" class="why-us p-0">
            <div class="container-fluid">
                <div class="row">
                    <!--why us left-->
                    <div class="col-lg-6 d-none d-lg-block bg-light p-0" style="background: url('/assets/images/forge-lavora-con-noi.jpg') no-repeat; background-size:cover;">
                    </div>
                    <!--why us right-->
                    <div class="col-lg-6 col-md-12 bg-body px-4 py-5 p-lg-5 text-white">
                        <div class="h-100">
                            <div class="title text-start p-0">
                                <h5 class="text-white">Come lavoriamo?</h5>
                                <h3 class="text-white">Lavoriamo divertendoci e crescendo sia personalmente che professionalmente</h3>
                                <p>In Forge diamo molta importanza all'umiltà e al lavoro di squadra come chiavi per il raggiungimento di risultati di qualità.</p>
                                <p>Ci impegniamo affinché ciascuno si senta sempre a casa e possa contribuire a sua volta a una cultura di benessere, libertà, responsabilità e trasparenza.</p>
                                <h5 class="text-white">Vuoi lavorare con noi?</h5>
                                <a class="btn btn-outline-light mb-0 rounded m-0" href="/lavora-con-noi/">Scopri cosa offriamo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Why-us =======================  -->
    
        <!-- ======================= Client -->
        <section class="client">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-8 mx-auto">
                        <h2>Le nostre tecnologie</h2>
                        <h4>Alcuni degli strumenti che utilizziamo quotidianamente per lavorare</h4>
                    </div>
                </div>
                    <div class="row text-center justify-content-center">
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/TS-logo.png', 'Logo TypeScript', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/java-logo.png', 'Logo Java', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/algolia-logo.png', 'Logo Algolia', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/ios-logo.png', 'Logo iOS', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/android-logo.png', 'Logo Android', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/node-logo.png', 'Logo Node', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/angular-logo.png', 'Logo Angular', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/csharp-logo.png', 'Logo C#', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/aws-logo.png', 'Logo AWS', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/firebase-logo.png', 'Logo Firebase', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/googlecloud-logo.png', 'Logo Google Cloud', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/bootstrap-logo.png', 'Logo Bootstrap', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/wordpress-logo.png', 'Logo WordPress', '', [214], '214w')}
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= End Client -->
    
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