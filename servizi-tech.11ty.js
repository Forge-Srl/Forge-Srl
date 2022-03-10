const pageTitle = require('./_includes/components/pageTitle')

class Home {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Forge - Servizi Tech',
            pageDescription: 'Scopri i servizi tech di Forge: sviluppo Web, Mobile, Back-End, Software Engineering, IoT, Blockchain e Intelligenza Artificiale.',
            eleventyNavigation: {
                key: 'tech',
                title: 'Servizi Tech'
            }
        }
    }

    render(data) {

        return `<main>
            ${pageTitle.call(this, data)}
            <section class="service">
                <div class="container">
                    <div class="title text-center">
                        <h2 c> I nostri Servizi Tech</h2>
                        <p>Studiamo a fondo le idee dei clienti e realizziamo soluzioni competitive in un mercato digitale sempre più esigente.</p>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fas fa-light fa-laptop-code"></i></div>
                                <h3 class="feature-box-title">Web</h3>
                                <p class="feature-box-desc">Single page applications, siti multi pagina, e-commerce, accelerated mobile pages (AMP) e progressive web app (PWA).</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fa-solid fa-mobile-screen-button"></i></div>
                                <h3 class="feature-box-title">Mobile</h3>
                                <p class="feature-box-desc">Progettazione e sviluppo di prodotti mobile Android e iOS efficienti e dall’estrema versatilità nella manutenzione.</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fa-solid fa-terminal"></i></div>
                                <h3 class="feature-box-title">Back-End</h3>
                                <p class="feature-box-desc">Realizzazione di servizi back-end su AWS, Microsoft Azure, Google Cloud, IBM Cloud e con le principali tecnologie serverless, a microservizi, database real time e virtualizzazione.</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fa-solid fa-wrench"></i></div>
                                <h3 class="feature-box-title">Software Engineering</h3>
                                <p class="feature-box-desc">Sviluppo di soluzioni software da zero e mantenimento di prodotti esistenti finalizzato ad aggiungere qualità riducendo costi e tempi.</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fas fa-solid fa-brain"></i></div>
                                <h3 class="feature-box-title">Innovazione e ricerca</h3>
                                <p class="feature-box-desc">Studio di progetti in intelligenza artificiale, internet of things (IoT), edge computing, blockchain e smart contracts.</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fa-solid fa-code-pull-request"></i></div>
                                <h3 class="feature-box-title">Open Source</h3>
                                <p class="feature-box-desc">Condivisione del cuore dei nostri strumenti e librerie di sviluppo per permettere a tutti di contribuire a creare nuovi standard di efficienza e affidabilità.</p>
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
                        <p class="blockquote">Siamo fermamente convinti che l'intelligenza artificiale, come il software e l'informatica in generale, debbano essere utilizzati per migliorare la vita di tutti, soprattutto di chi non è esperto di tecnologia. Per questo motivo abbiamo scelto di fondare Forge, mettendo tutta la nostra passione ed esperienza al servizio dei nostri dipendenti e dei nostri clienti.</p>
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
                            <img class="rounded" src="/assets/images/approccio-tech-forge.jpg" alt="Forge approccio coding">
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
                                <li class="list-group-item"><i class="fa fa-check"></i> Assidua ricerca e sviluppo</li>
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
                            <h4>Costruiamo una cultura orientata al risultato con integrità, affidabilità, dedizione e rispetto reciproco.</h4>
                            <ul class="list-group list-group-borderless">
                                <li class="list-group-item"><i class="fa fa-check"></i> Siamo fortemente consapevoli della nostra <strong>responsabilità</strong> nei confronti di chi conta su di noi e lavoriamo duro per mantenere la parola data.</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Siamo instancabili studenti alla <strong>costante ricerca</strong> di modi innovativi per applicare le nostre conoscenze a nuove soluzioni.</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Crediamo fortemente che la chiave del cambiamento sia il <strong>confronto nella diversità</strong> e amiamo costruire rapporti basati sulla <strong>fiducia</strong> reciproca.</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> Finito il progetto non resterai solo. <strong>Formiamo persone e team tecnici</strong> che possano essere inseriti all’interno dell’organico delle aziende clienti.</li>
                            </ul>
                        </div>
                        <!-- right -->
                        <div class="col-md-6">
                            <img class="rounded" src="/assets/images/code-tech-forge.jpg" alt="Forge Team Tech Coding">
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