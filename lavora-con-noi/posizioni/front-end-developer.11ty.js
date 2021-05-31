class FrontEndDeveloper {
    data() {
        const pageTitle = 'Front-end developer'

        return {
            layout: 'layout.11ty.js',
            tags: ['posizioni'],
            pageTitle: pageTitle,
            pageDescription: 'Sviluppatore Software Front End Stiamo cercando una persona altamente qualificata e ' +
                'motivata in grado di sviluppare lato front end con metodologia Agile/Scrum in ambiente giovane e ' +
                'dinamico. Sono richieste eccellenti capacità tecniche ed estrema eleganza nel design del codice. Si ' +
                'richiede la conoscenza dei principali tool di sviluppo e dei linguaggi di markup e di [..]',
            eleventyNavigation: {
                key: 'front-end-developer',
                title: pageTitle,
                parent: 'lavora-con-noi'
            }
        }
    }

    render(data) {
        return `<main>
            <div class="page-block">
                <section>
                    <h3>Sviluppatore Software Front End</h3>
                    <img src="/img/front-end-developer.jpg" alt="" loading="lazy">
                    <p>Stiamo cercando una persona altamente qualificata e motivata in grado di sviluppare lato front 
                    end con metodologia Agile/Scrum in ambiente giovane e dinamico. Sono richieste eccellenti capacità 
                    tecniche ed estrema eleganza nel design del codice. Si richiede la conoscenza dei principali tool di
                    sviluppo e dei linguaggi di markup e di scripting.</p>
                    <p>La persona che stiamo cercando dovrà integrarsi nel team di ricerca e sviluppo e riceverà tutto 
                    il supporto necessario per la propria formazione all'interno dell'azienda. Sono previsti corsi di 
                    formazione, ore di studio e varie attività. Si richiede un minimo di competenza grafica e di 
                    conoscenza, anche base, dei principali tool grafici per realizzare semplici mock-up.</p>
                    <p>Il reparto tecnico di Forge segue una linea "non convenzionale" rispetto alle aziende di software
                    tradizionali perché adotta metodologie all'avanguardia e tecniche innovative nella progettazione e 
                    nello sviluppo del codice.</p>
                    <p>La figura cercata sarà selezionata più per la sua attitudine al lavoro di squadra, all'etica 
                    professionale e personale, alla propensione al miglioramento continuo che alle esperienze 
                    pregresse.</p>
                    <p>Se ritieni di avere le caratteristiche per accettare questa sfida allora contattaci subito!</p>
                    <h4>La tua carriera lavorativa potrebbe iniziare qui!</h4>
                    <p><strong>Requisiti Mandatori</strong></p>
                    <ul>
                        <li>Laurea triennale in scienze matematiche, informatica o ingegneria</li>
                        <li>Eccellente conoscenza di almeno un linguaggio di programmazione tra Java, Javascript, .Net, 
                        C, etc...</li>
                        <li>Ottima conoscenza e dimestichezza con fogli di stile e linguaggi di markup in generale</li>
                        <li>Dimestichezza con almeno un IDE di sviluppo</li>
                        <li>Passione generale per la tecnologia</li>
                        <li>Ottima conoscenza della lingua inglese</li>
                    </ul>
                    <p><strong>Requisiti Preferibili</strong></p>
                    <ul>
                        <li>Laurea magistrale, master o dottorato</li>
                        <li>Propensione ad essere aggiornato sulle ultime novità</li>
                        <li>Utilizzo di strumenti di editing grafico</li>
                        <li>Una o più lingue straniere</li>
                    </ul>
                    <p><strong>Requisiti Fortemente Raccomandati</strong></p>
                    <ul>
                        <li>Aver utilizzato almeno una volta una console di gioco nella propria vita</li>
                        <li>Avere un discreto numero di hobby al di fuori dell'ambito lavorativo per la propria 
                        soddisfazione personale</li>
                    </ul>
                    <p><br>Manda la tua candidatura con un CV aggiornato e due righe del perché vorresti unirti a noi e ti
                    risponderemo il prima possibile!</p>
                    <a class="cta" href="mailto:${data.forge.contacts.career}">Scrivici ora</a>
                </section>
            </div>
        </main>`
    }
}

module.exports = FrontEndDeveloper