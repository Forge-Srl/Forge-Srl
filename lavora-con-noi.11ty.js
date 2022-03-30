const pageTitle = require('./_includes/components/pageTitle')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Forge - Lavora con Noi',
            pageDescription: 'Forge è sempre alla ricerca di persone che amino innovare e mettersi in gioco. Scopri le posizioni aperte ed entra a far parte del team.',
            eleventyNavigation: {
                key: 'lavoro',
                title: 'Lavora con Noi'
            }
        }
    }

    async render(data) {
        return `<main>
            ${pageTitle.call(this, data)}
            <!-- ======================= Perché Forge -->
            <section class="pt-0">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- left -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h2 class="h1">Perché Forge</h2>
                            <h4>Crediamo che lavorare in Forge sia il massimo!</h4>
                            <p>Come dice il nome stesso, Forge ha come elemento distintivo la “forgiatura”, ovvero la formazione di persone. Ci piace lavorare a stretto contatto con il territorio e in collaborazione con le migliori università.</p>
                            <p>Siamo al tempo stesso amanti del remote working e degli spazi condivisi che creano forti sinergie e ritorni positivi. Crediamo fortemente che la chiave del cambiamento sia il confronto nella diversità.</p>
                        </div>
                        <!-- right -->
                        <div class="col-md-6">
                            ${await this.image('forge-lavora-con-noi1.jpg', 'Forge team marketing', 'rounded')}
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= Perché Forge End -->

            <!-- ======================= Cit -->
            <section class="bg-grad p-4 p-sm-5 pattern-overlay-4">
                <div class="container">
                    <div class="d-block all-text-white text-center">
                        <div class="text-center">
                        <p class="blockquote">Il lavoro che facciamo occupa la maggior parte della nostra vita, è importante quindi che rispecchi appieno quello in cui crediamo. Per questo abbiamo deciso di creare Forge, un'azienda che mira ad essere ai massimi livelli tecnologici ed al tempo stesso con solide basi umane, puntando ad essere un ambiente di lavoro stimolante e sereno.</p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= Cit End -->

            <!-- ======================= Il lavoro in Forge -->
            <section class="approccio">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- left -->
                        <div class="col-md-6">
                            ${await this.image('forge-lavora-con-noi2.jpg', 'Forge approccio marketing', 'rounded')}
                        </div>
                        <!-- right -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h5 class="text-primary">Il lavoro in Forge</h5>
                            <h2 class="h1">Fai ciò che ti piace in un team di cui essere orgoglioso</h2>
                            <p>Da noi si lavora duro, ma ci si diverte nei giusti tempi e modi. Non esiste un organigramma: tutto ruota attorno alla meritocrazia, ci sono solo ruoli e responsabilità.</p>
                            <p>Ci piace lavorare in spazi di co-working con un orario di lavoro flessibile per andare incontro alle esigenze di ognuno, nel rispetto delle differenze degli altri.</p>
                            <ul class="list-group list-group-borderless">
                                <li class="list-group-item"><i class="fa fa-check"></i> <strong>Metodologia Agile</strong>: adottiamo la metodologia Agile per organizzare le attività in brevi sprint di task ben definiti così da dare il massimo.</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> <strong>Approccio data-driven</strong>: pianifichiamo le attività sulla base di previsioni accurate, facciamo test e ci affidiamo ai dati per prendere decisioni.</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> <strong>Alta competenza tecnologica</strong>: siamo al passo con le ultime tecnologie e siamo sempre aggiornati.</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> <strong>Ore di studio</strong>: ogni giorno dedichiamo del tempo alla nostra formazione professionale e a progetti personali, che riteniamo tanto importanti quanto il lavoro stesso.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= Il lavoro in Forge End -->                                    

           <!-- ======================= La nostra filosofia -->
            <section class="service">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-8 mx-auto">
                            <div class="title text-center">
                                <h2>La nostra filosofia</h2>
                                <p class="mb-0">Pensiamo che per lavorare bene insieme sia importante condividere i nostri valori:</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 mt-30">
                            <div class="feature-box f-style-2 icon-grad h-100">
                                <div class="feature-box-icon"><i class="fas fa-light fa-fire"></i></div>
                                <h3 class="feature-box-title">Entusiasmo</h3>
                                <p class="feature-box-desc">Abbracciamo il cambiamento e le nuove sfide, non ci fermiamo davanti alle prime difficoltà. </p>
                            </div>
                        </div>
                        <div class="col-md-4 mt-30">
                            <div class="feature-box f-style-2 icon-grad h-100">
                                <div class="feature-box-icon"><i class="fas fa-light fa-link"></i></div>
                                <h3 class="feature-box-title">Collaborazione</h3>
                                <p class="feature-box-desc">Ascoltiamo il parere di tutti e collaboriamo con la massima trasparenza incentivando gli scambi di idee. </p>
                            </div>
                        </div>
                        <div class="col-md-4 mt-30">
                            <div class="feature-box f-style-2 icon-grad h-100">
                                <div class="feature-box-icon"><i class="fas fa-light fa-comments"></i></div>
                                <h3 class="feature-box-title">Confronto</h3>
                                <p class="feature-box-desc">Mettiamo in discussione ciò che facciamo ogni giorno e non diamo mai nulla per scontato. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= La nostra filosofia End -->

            <!-- ======================= Action box -->
            <section class="bg-grad p-4 p-sm-5 pattern-overlay-4">
                <div class="container">
                    <div class="d-block all-text-white text-center">
                        <div class="text-center">
                            <h2 class="m-0">Vuoi essere dei nostri?</h2>
                            <h4>Mandaci una e-mail allegando il tuo curriculum e spiegaci perché dovremmo scegliere te.</h4>
                        </div>
                        <a href="mailto:${data.forge.contacts.career}" class="btn btn-white me-3 text-center">Candidati ora</a>
                    </div>
                </div>
            </section>
            <!-- ======================= End Action box -->
        </main>`
    }
}