const pageTitle = require('./_includes/components/pageTitle')

class Home {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Forge - Servizi Marketing',
            pageDescription: 'Scopri i servizi marketing di Forge: Paid Adv, Branding Online, SEO, Social Media, Inbound e Strategy.',
            eleventyNavigation: {
                key: 'marketing',
                title: 'Servizi Marketing'
            }
        }
    }

    render(data) {

        return `<main>
            ${pageTitle.call(this, data)}
            <section class="service">
                <div class="container">
                    <div class="title text-center">
                        <h2 c>I nostri Servizi Marketing</h2>
                        <p>Siamo il tuo partner strategico e creativo. Il nostro team ti aiuterà in ogni aspetto analitico e operativo di marketing digitale per risultati efficaci e misurabili.</p>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fas fa-light fa-chess"></i></div>
                                <h3 class="feature-box-title">Strategia</h3>
                                <p class="feature-box-desc">Supporto nella creazione e validazione di un brand positioning per il proprio prodotto/servizio.</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fas fa-light fa-tags"></i></div>
                                <h3 class="feature-box-title">Branding Online</h3>
                                <p class="feature-box-desc">Creazione di siti web, E-commerce, Landing Page e Mobile App unendo capacità creative e tecnologiche.</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fas fa-light fa-filter"></i></div>
                                <h3 class="feature-box-title">Inbound Marketing</h3>
                                <p class="feature-box-desc">Ideazione, creazione e validazione di funnel di Inbound Marketing con un approccio misto marketing/sales.</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fa-brands fa-safari"></i></div>
                                <h3 class="feature-box-title">SEO</h3>
                                <p class="feature-box-desc">Analisi, revisione e implementazione di strategie per migliorare il posizionamento SEO.</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fas fa-light fa-bullhorn"></i></div>
                                <h3 class="feature-box-title">Paid Advertising</h3>
                                <p class="feature-box-desc">Creazione, gestione e supervisione di campagne di digital marketing sui principali canali.</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fas fa-light fa-thumbs-up"></i></div>
                                <h3 class="feature-box-title">Social Marketing</h3>
                                <p class="feature-box-desc">Sviluppo di piani editoriali su più canali e creazione di contenuti strategici in linea con gli obiettivi aziendali.</p>
                            </div>
                        </div>		
                    </div>
                    </div>
                </div>
	        </section>

            <!-- ======================= Action box -->
            <section class="bg-grad p-4 p-sm-5 pattern-overlay-4">
                <div class="container">
                    <div class="d-block all-text-white text-center">
                        <div class="text-center">
                            <h2 class="m-0">Ti abbiamo incuriosito?</h2>
                            <h4>Scarica la nostra presentazione marketing per vedere il dettaglio dei servizi che offriamo.</h4>
                        </div>
                        <a href="/assets/documents/forge-servizi-marketing.pdf/" target="_blank" class="btn btn-white me-3 text-center">Scarica la presentazione</a>
                    </div>
                </div>
            </section>
            <!-- ======================= End Action box -->

            <!-- ======================= Il nostro approccio -->
            <section class="approccio">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- left -->
                        <div class="col-md-6">
                            <img class="rounded" src="/assets/images/forge-marketing2.jpg" alt="Forge approccio marketing">
                        </div>
                        <!-- right -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h5 class="text-primary">Il nostro approccio</h5>
                            <h2 class="h1">Creativi sì, ma data-driven</h2>
                            <p>Viaggiare, conoscere persone nuove, esplorare e imparare è ciò che ci rende creativi e ci ispira, ma non perdiamo mai di vista i numeri nelle nostre decisioni e strategie.</p>
                            <p>Sogniamo un mondo permeato dalla cultura digitale, che cerchiamo di diffondere insegnando presso università e aziende. </p>
                            <ul class="list-group list-group-borderless list-group-icon-primary-bg mb-4">
                                <li class="list-group-item"><i class="fa fa-check"></i> Approccio data-driven</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Scelte guidate da KPI e ROI</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Workshop e formazione continua</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Passione per ciò che facciamo</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= Il nostro approccio End -->                                    

            <!-- ======================= Perché Sceglierci -->
            <section class="pt-0">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- left -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h2 class="h1">Perché sceglierci</h2>
                            <h4>Ci consideriamo un'estensione della tua squadra. Siamo concreti, flessibili e trasparenti.</h4>
                            <ul class="list-group list-group-borderless">
                                <li class="list-group-item"><i class="fa fa-check"></i> Rendiamo semplice il complesso. Ci occupiamo di ogni aspetto di digital marketing, non ti servirà nient’altro da nessun altro.</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Valorizziamo le persone più della tecnologia. Le persone sono il nostro miglior asset e amiamo costruire rapporti basati sulla fiducia reciproca.</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Finito il progetto non resterai solo. Offriamo percorsi di formazione e coaching e saremo al tuo fianco per qualsiasi tipo di richiesta.</li>
                            </ul>
                        </div>
                        <!-- right -->
                        <div class="col-md-6">
                            <img class="rounded" src="/assets/images/forge-marketing.jpg" alt="Forge team marketing">
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= Perché Sceglierci End -->

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