const pageTitle = require('./_includes/components/pageTitle')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Servizi',
            pageDescription: 'Scopri i servizi di Forge: Intelligenza Artificiale, Sviluppo Web, Mobile, Back-End',
            eleventyNavigation: {
                key: 'software development',
                title: 'I nostri Servizi'
            }
        }
    }

    async render(data) {
        return `<main>
            ${pageTitle.call(this, data)}
            <section class="service" id="ai">
                <div class="container">
                    <div class="title text-center">
                        <p>Studiamo a fondo le idee dei clienti e realizziamo soluzioni competitive in un mercato digitale sempre più esigente.</p>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fas fa-solid fa-brain"></i></div>
                                <h3 class="feature-box-title">Artificial Intelligence</h3>
                                <p class="feature-box-desc">Utilizziamo modelli di Machine Learning e AI Generativa per automatizzare i processi aziendali ripetitivi che richiedono oggi l'intervento di personale dedicato. Il nostro obiettivo è la riduzione degli errori, dei tempi di esecuzione e dei costi.</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fas fa-solid fa-comments"></i></div>
                                <h3 class="feature-box-title">Customer Service</h3>
                                <p class="feature-box-desc">Siamo in grado di automatizzare il supporto ai clienti di qualsiasi piattaforma, partendo dalle prime fasi di raccolta delle informazioni. In molti casi l'assistenza può svolgersi interamente grazie a un bot basato su AI Generativa, in altri casi specifici il bot stesso è in grado di decidere se richiedere l'intervento di personale di supporto.</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fas fa-solid fa-industry"></i></div>
                                <h3 class="feature-box-title">Predictive Maintenance</h3>
                                <p class="feature-box-desc">Impiegando strumenti di Data Science e Machine Learning applicati ai dati raccolti dalla sensoristica, abbiamo sviluppato una innovativa tecnologia di manutenzione predittiva che può riconoscere in anticipo guasti e malfunzionamenti di qualsiasi impianto, evitando costosissimi fermi di produzione.</p>
                            </div>
                        </div>	
                    </div>
                    </div>
                </div>
	        </section>
	        <section class="service" id="dev">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fas fa-light fa-laptop-code"></i></div>
                                <h3 class="feature-box-title">Piattaforme Web</h3>
                                <p class="feature-box-desc">Creiamo piattaforme Web di qualsiasi tipo: single page applications, siti multi pagina, E-commerce, progressive web app (PWA). Supportiamo i maggiori provider cloud e CDN per garantire una infrastruttura con elevate performance.</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fa-solid fa-mobile-screen-button"></i></div>
                                <h3 class="feature-box-title">Mobile</h3>
                                <p class="feature-box-desc">Progettiamo e sviluppiamo applicazioni mobile Android e iOS, focalizzandoci sull'efficienza e la versatilità. La nostra squadra di sviluppatori assicura soluzioni intuitive e funzionali. Basiamo sempre la progettazione sulla scalabilità, consentendo aggiornamenti rapidi e una manutenzione semplice ed immediata.</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fa-solid fa-server"></i></div>
                                <h3 class="feature-box-title">Back-End</h3>
                                <p class="feature-box-desc">Realizziamo servizi Back-end e API utilizzando le infrastrutture cloud native offerte da AWS, Google Cloud e altri provider. Siamo in grado di integrare le principali tecnologie serverless, a microservizi, database e strumenti di virtualizzazione.</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fa-solid fa-code"></i></div>
                                <h3 class="feature-box-title">Open Source</h3>
                                <p class="feature-box-desc">Utilizziamo ogni giorno decine di strumenti offerti dalla comunità open source. Il minimo che possiamo fare è cercare di contribuire noi stessi, creando nuovi progetti e aiutando a migliorare l'efficienza e l'affidabilità dei software che utilizziamo.</p>
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
                        <p class="blockquote">Siamo fermamente convinti che l'Intelligenza Artificiale, come il software e l'informatica in generale, debbano essere utilizzati per migliorare la vita di tutti, soprattutto di chi non è esperto di tecnologia. Per questo motivo abbiamo scelto di fondare Forge, mettendo tutta la nostra passione ed esperienza al servizio dei nostri dipendenti e dei nostri clienti.</p>
                        </div>
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
                            ${await this.image('approccio-tech-forge.jpg', 'Forge approccio coding', 'rounded')}
                        </div>
                        <!-- right -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h5 class="text-primary">Il nostro approccio</h5>
                            <h2 class="h1">Supportiamo l’evoluzione tecnologica con un rapporto solido.</h2>
                            <p>Instauriamo partnership amichevoli e durature con i nostri clienti per costruire insieme esperienze digitali future-proof che abbiano un <strong>valore concreto</strong>.</p>
                            <p>Amiamo ciò che facciamo e ci divertiamo nel farlo. Ci impegniamo a generare un <strong>impatto positivo</strong> sul territorio e collaboriamo il più possibile con la realtà che ci circonda.</p>
                            <p>Investiamo costantemente sulla <strong>formazione</strong> di ogni nostra risorsa, collaboriamo con le università del territorio e siamo sempre alla ricerca di <strong>nuovi talenti da forgiare</strong>.</p>
                            <ul class="list-group list-group-borderless list-group-icon-primary-bg mb-4">
                                <li class="list-group-item"><i class="fa fa-check"></i> Lean Thinking</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Condivisione come driver di conoscenza</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Ricerca e sviluppo continui</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Metodologia Agile</li>
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
                            <h4>Costruiamo una cultura orientata al risultato, ma con integrità, affidabilità, dedizione e rispetto reciproco.</h4>
                            <ul class="list-group list-group-borderless">
                                <li class="list-group-item"><i class="fa fa-check"></i> Siamo fortemente consapevoli della nostra <strong>responsabilità</strong> nei confronti di chi conta su di noi e lavoriamo duro per mantenere la parola data.</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Siamo instancabili studenti alla <strong>costante ricerca</strong> di modi innovativi per applicare le nostre conoscenze a nuove soluzioni.</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Crediamo fortemente che la chiave del cambiamento sia il <strong>confronto nella diversità</strong> e amiamo costruire rapporti basati sulla <strong>fiducia</strong> reciproca.</li>
                            </ul>
                        </div>
                        <!-- right -->
                        <div class="col-md-6">
                            ${await this.image('code-tech-forge.jpg', 'Forge Team Tech Coding', 'rounded')}
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