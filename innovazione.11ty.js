const pageTitle = require('./_includes/components/pageTitle')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Forge - Innovazione',
            pageDescription: 'Accompagniamo le aziende in un percorso di innovazione che nasce dal rapporto sinergico con università, start-up, centri di ricerca e giovani talenti.',
            eleventyNavigation: {
                key: 'innovazione',
                title: 'Innovazione'
            }
        }
    }

    async render(data) {
        return `<main>
            ${pageTitle.call(this, data)}
            <section id="innovare" class="pt-5 py-5 mb-4">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- left -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h2 class="h1">La nostra parola preferita: Innovare</h2>
                            <p>In Forge amiamo accompagnare le aziende in un <strong>percorso di innovazione</strong> che nasce dal rapporto sinergico con università, start-up, centri di ricerca e giovani talenti.</p>
                            <p>Utilizziamo un <strong>approccio collaborativo</strong> in ogni fase dello sviluppo di prodotti, servizi e processi, ponendo particolare attenzione alla <strong>trasformazione digitale</strong> e all’adozione di nuove tecnologie che rispondano ai problemi emergenti delle organizzazioni.</p>
                        </div>
                        <!-- right -->
                        <div class="col-md-6">
                            ${await this.image('innovazione/universita-como-nexxt.jpg', 'Università e Centri di Ricerca con cui collaboriamo', 'rounded')}
                        </div>
                    </div>
                </div>
            </section>

            <!-- counter gradient -->
            <section class="pt-5 py-5 bg-light">
                <div class="container">
                    <div class="row">
                        <!-- count item -->
                        <div class="col-md-4 col-6 mb-4 mb-md-0">
                            <div class="text-center">
                                <i class="text-grad display-6 ti-write"></i>
                                <h2 class="fw-bold mt-2 mb-0 purecounter"  data-purecounter-start="0" data-purecounter-delay="10" data-purecounter-duration="1" data-purecounter-end="5257">0</h2>
                                <p class="mb-0">Linee di codice Open Source</p>
                            </div>
                        </div>
                        <!-- count item -->
                        <div class="col-md-4 col-6 mb-4 mb-md-0">
                            <div class="text-center">
                                <i class="text-grad display-6 ti-marker"></i>
                                <h2 class="fw-bold mt-2 mb-0 purecounter" data-purecounter-start="0" data-purecounter-delay="10" data-purecounter-duration="1" data-purecounter-end="13">0</h2>
                                <p class="mb-0">Progetti di tesi</p>
                            </div>
                        </div>
                        <!-- count item -->
                        <div class="col-md-4 col-6 mb-4 mb-md-0">
                            <div class="text-center">
                                <i class="text-grad display-6 ti-agenda"></i>
                                <h2 class="fw-bold mt-2 mb-0 purecounter" data-purecounter-start="0" data-purecounter-delay="10" data-purecounter-duration="1" data-purecounter-end="3">0</h2>
                                <p class="mb-0">Università partner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
	        <!-- counter gradient -->

            <!-- ======================= Università -->
            <section class="università">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- left -->
                        <div class="col-md-6">
                            ${await this.image('innovazione/universita-insubria.jpg', 'Università Insubria e Bicocca', 'rounded')}
                        </div>
                        <!-- right -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h5 class="text-primary">Università</h5>
                            <h2 class="h1">Dialoghiamo con giovani menti entusiaste</h2>
                            <p>La forte spinta a collaborare con le università del territorio viene dai nostri stessi fondatori, che arrivano da un lungo percorso accademico e ben conoscono il <strong>potenziale innovativo di centri di ricerca e università</strong> in risposta alle esigenze di trasformazione delle aziende.</p>
                            <p>Nel tempo abbiamo stretto importanti <strong>sinergie con l’Università Insubria di Varese</strong>, la nostra città natale, e abbiamo svolto diversi <strong>workshop all’Università Bicocca di Milano</strong>. Inoltre, curiamo la formazione dei giovani universitari per accelerare la loro crescita professionale e la loro capacità di essere protagonisti del cambiamento attraverso <strong>stage e progetti di ricerca</strong> che riguardano sia tematiche IT che Marketing.</p>
                            <a href="/lavora-con-noi/#posizioni-aperte/" class="btn btn-outline-primary me-3 text-center">Posizioni aperte</a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= Università End -->    

            <!-- ======================= Progetti Open Source -->
            <section id="open-source" class="bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 text-center mb-4">
                            <h2>Sviluppiamo progetti Open Source</h2>
                            <p>Ogni volta che risolviamo un problema scrivendo del software cerchiamo di astrarre il più possibile dall’ambito di applicazione per arrivare ad una <strong>soluzione generica</strong> che possa essere riutilizzata in altri ambiti. Per questo motivo abbiamo deciso di rilasciare alcuni progetti Open Source, <strong>nati e forgiati internamente a Forge</strong> con lo scopo di risolvere esigenze di sviluppo.</p>
                        </div>
                        <div class="col-md-4 mt-30">
                            <div class="feature-box f-style-2 icon-grad h-100">
                                <div class="feature-box-icon"><i class="fas fa-regular fa-arrows-turn-to-dots"></i></div>
                                <h3 class="feature-box-title">BionicJS</h3>
                                <p class="feature-box-desc">Permette di eseguire codice JavaScript da altri linguaggi di programmazione per semplificare lo sviluppo di applicazioni multi-piattaforma.</p>
                                <a class="d-block pt-2" href="https://github.com/Forge-Srl/bionic-js/">Vai al progetto <i class="ti-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <div class="col-md-4 mt-30">
                            <div class="feature-box f-style-2 icon-grad h-100">
                                <div class="feature-box-icon"><i class="fas fa-regular fa-bridge-water"></i></div>
                                <h3 class="feature-box-title">JJBridge</h3>
                                <p class="feature-box-desc">Porta l’esecuzione di codice JavaScript in ambiente Java, nato inizialmente per utilizzare BionicJS in ambito Android.</p>
                                <a class="d-block pt-2" href="https://github.com/Forge-Srl/jjbridge-engine-v8/">Vai al progetto <i class="ti-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <div class="col-md-4 mt-30">
                            <div class="feature-box f-style-2 icon-grad h-100">
                                <div class="feature-box-icon"><i class="fas fa-regular fa-diagram-project"></i></div>
                                <h3 class="feature-box-title">Gushio</h3>
                                <p class="feature-box-desc">Permette di scrivere script multipiattaforma testabili unitariamente in linguaggio JavaScript.</p>
                                <a class="d-block pt-2" href="https://github.com/Forge-Srl/gushio/">Vai al progetto <i class="ti-arrow-circle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- =======================  Progetti Open Source End -->

            <!-- ======================= Ricerca e Sviluppo -->
            <section class="ricerca">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- left -->
                        <div class="col-md-6">
                            ${await this.image('innovazione/ricerca-sviluppo.jpg', 'Forge ricerca e sviluppo', 'rounded')}
                        </div>
                        <!-- right -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h5 class="text-primary">Ricerca e Sviluppo</h5>
                            <h2 class="h1">Un ecosistema dedicato alla trasformazione digitale</h2>
                            <p>Per noi la tecnologia è al servizio del cambiamento. Partendo dal potenziale delle nuove tecnologie digitali sviluppiamo soluzioni architetturali, di <strong>intelligenza artificiale</strong> e di ricerca e sviluppo che accompagnano le aziende in un reale percorso di trasformazione digitale.</p>
                            <p>Ci identifichiamo con i <strong>bisogni di innovazione delle aziende</strong> e le aiutiamo a individuare le soluzioni migliori per realizzare progetti che le rendano autonome nell’affrontare il futuro.</p>
                                <a href="/contattaci/" class="btn btn-outline-primary me-3 text-center">Contattaci per una consulenza</a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= Ricerca e Sviluppo End -->    

        

            <!-- ======================= Action box -->
            <section class="bg-grad p-4 p-sm-5 pattern-overlay-4">
                <div class="container">
                    <div class="d-block all-text-white text-center">
                        <div class="text-center">
                            <h2 class="m-0">Innovazione è la nostra parola preferita. E’ così anche per te?</h2>
                            <h4>Mandaci una mail spiegandoci la tua idea o il tuo progetto.</h4>
                        </div>
                        <a href="/contattaci/" target="_blank" class="btn btn-white me-3 text-center">Parliamone insieme</a>
                    </div>
                </div>
            </section>
            <!-- ======================= End Action box -->

        </main>`
    }
}