const pageTitle = require('../_includes/components/page-title')

module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Lavora con Noi',
      pageDescription:
        'Forge è sempre alla ricerca di persone che amino innovare e mettersi in gioco. Scopri le posizioni aperte ed entra a far parte del team.',
      eleventyNavigation: {
        key: 'lavora-con-noi',
        title: 'Lavora con Noi',
        parent: 'home',
      },
    }
  }

  render(data) {
    return `<main>
            ${pageTitle.call(this, data)}
            <section >
                <h2>Perché Forge</h2>
                <p><strong><em>Vogliamo il massimo per chi lavora con noi!</em></strong></p>
                <p>Come dice il nome stesso, Forge ha come elemento distintivo la "forgiatura", ovvero la formazione di persone. Ci piace lavorare a stretto contatto con il territorio e in collaborazione con le migliori università.</p>
                <p>Crediamo che la condivisione dello spazio fisico, come anche di quello creato con strumenti virtuali, possa creare forti sinergie e ritorni positivi. Pensiamo che la chiave del cambiamento sia il confronto nella diversità.</p>
            </section>
            <section>
                <blockquote>
                    <p>Il lavoro che facciamo occupa la maggior parte della nostra vita, è importante quindi che rispecchi appieno quello in cui crediamo. Per questo abbiamo deciso di creare Forge, un'azienda che mira ad essere ai massimi livelli tecnologici ed al tempo stesso con solide basi umane, puntando ad essere un ambiente di lavoro stimolante e sereno.</p>
                </blockquote>
            </section>
            <section>
                <h2>Il lavoro in Forge</h2>
                <p><strong><em>Fai ciò che ti piace in un team di cui essere orgoglioso</em></strong></p>
                <p>Da noi si lavora duro, ma ci si diverte nei giusti tempi e modi. Non esiste un organigramma preciso: ci sono ruoli e responsabilità.</p>
                <p>Ci piace lavorare in spazi di co-working con un orario di lavoro che vada incontro alle esigenze di ognuno, nel rispetto delle differenze degli altri.</p>
                <ul>
                    <li><strong>Metodologia Agile</strong>: adottiamo la metodologia Agile per organizzare le attività in brevi sprint di task ben definiti così da dare il massimo.</li>
                    <li><strong>Approccio data-driven</strong>: pianifichiamo le attività sulla base di previsioni accurate, facciamo test e ci affidiamo ai dati per prendere decisioni.</li>
                    <li><strong>Alta competenza tecnologica</strong>: siamo al passo con le ultime tecnologie e siamo sempre aggiornati.</li>
                    <li><strong>Ore di studio</strong>: dedichiamo del tempo alla nostra formazione professionale e a progetti personali, che riteniamo tanto importanti quanto il lavoro stesso.</li>
                </ul>
            </section>
            <section>
                <h2>La nostra filosofia</h2>
                <p>Pensiamo che per lavorare bene insieme sia importante condividere i nostri valori:</p>
                <div class="group-3 gap-2">
                    <div class="box">
                        <h5>Entusiasmo</h5>
                        <p>Abbracciamo il cambiamento e le nuove sfide, non ci fermiamo davanti alle prime difficoltà. </p>
                    </div>
                    <div class="box">
                        <h5>Collaborazione</h5>
                        <p>Ascoltiamo il parere di tutti e collaboriamo con la massima trasparenza incentivando gli scambi di idee. </p>
                    </div>
                    <div class="box">
                        <h5>Confronto</h5>
                        <p>Mettiamo in discussione ciò che facciamo ogni giorno e non diamo mai nulla per scontato. </p>
                    </div>
                </div>
            </section>
            <section id="posizioni-aperte">
                <h2>Posizioni Aperte</h2>
                <div class="box">
                    <h3>Sviluppatore Software</h3>
                    <div>
                        <p>Stiamo cercando uno sviluppatore software da inserire nel nostro team di Varese.<br>
                        L'esperienza nell'utilizzo di più linguaggi di programmazione e di strumenti di Intelligenza Artificiale e Machine Learning sono requisiti opzionali.
                        Utilizziamo la metodologia Agile applicata al processo di sviluppo e basata sulla continua voglia di migliorare le proprie conoscenze e i prodotti su cui lavoriamo.</p>
                        <br>
                        <p><strong>Luogo</strong>: Varese</p>
                        <br>
                        <a href="/lavora-con-noi/sviluppatore-software/">Candidati</a>
                    </div>
                </div>
                <div class="box">
                    <h3>Candidatura Spontanea</h3>
                    <div>
                        <p>Non ci sono posizioni aperte adatte a te?<br>
                        Scrivici comunque: siamo sempre alla ricerca di talenti in grado di portare valore all'interno del team e valutiamo singolarmente tutte le candidature che riceviamo. Spiegaci perché dovremmo lavorare insieme.<p>
                        <br>
                        <a href="mailto:${data.forge.contacts.career}">Candidati</a>
                    </div>
                </div>
                <h4>Hai qualche domanda?</h4>
                <p><strong>Scrivici!</strong></p>
                <p>Se hai bisogno di qualche informazione riguardo le opportunità di lavoro in Forge mandaci una email a <a href="mailto:${data.forge.contacts.career}">${data.forge.contacts.career}</a> e ti risponderemo il prima possibile.
            </section>
            <section class="highlight">
                <p><strong>Vuoi conoscere meglio la nostra società?</strong></p>
                <br>
                <p>Dai un'occhiata alla nostra pagina chi siamo</p>
                <br>
                <a href="/chi-siamo/" class="cta">Scopri Chi Siamo</a>
            </section>
        </main>`
  }
}
