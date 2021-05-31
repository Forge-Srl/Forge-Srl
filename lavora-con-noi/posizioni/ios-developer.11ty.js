class IOSDeveloper {
    data() {
        return {
            layout: 'layout.11ty.js',
            tags: ['posizioni'],
            pageTitle: 'iOS developer',
            pageDescription: 'iOS Mobile Developer Stiamo cercando una persona altamente qualificata e motivata in ' +
                'grado di integrarsi nel team tecnico per la gestione e lo sviluppo di una serie di applicazioni ' +
                'mobile per iOS. Come per tutte le figure professionali in Forge, l\'attitudine al lavoro di squadra ' +
                'e la propensione ad essere sempre aggiornati sono per noi [...]'
        }
    }

    render(data) {
        return `<main>
            <div class="page-block">
                <section>
                    <h3>iOS Developer</h3>
                    <img src="/img/ios-developer.jpg" alt="" loading="lazy">
                    <p>Stiamo cercando una persona altamente qualificata e motivata in grado di integrarsi nel team 
                    tecnico per la gestione e lo sviluppo di una serie di applicazioni mobile per iOS. Come per tutte 
                    le figure professionali in Forge, l'attitudine al lavoro di squadra e la propensione ad essere 
                    sempre aggiornati sono per noi requisiti fondamentali. Per questi motivi il candidato/a riceverà 
                    tutto il supporto necessario per la propria formazione in azienda e la crescita come figura 
                    professionale.</p>
                    <p>Stiamo cercando una persona a cui dare un ruolo di primaria importanza poiché potrà seguire a 
                    360° l'evoluzione delle applicazioni mobile iOS in tutte le loro declinazioni curando anche aspetti 
                    grafici e di usabilità.</p>
                    <p>Il reparto tecnico di Forge adotta tecniche e metodologie all'avanguardia (Agile, Scrum, TDD, 
                    Pair Programming) ed è in grado di garantire un'estrema scalabilità nello sviluppo delle 
                    funzionalità in risposta ai cambiamenti del mercato.</p>
                    <p>La figura cercata sarà selezionata più per la sua attitudine al lavoro di squadra, all'etica 
                    professionale e personale, alla propensione al miglioramento continuo che alle esperienze 
                    pregresse.</p>
                    <p>Se ritieni di avere le caratteristiche per accettare questa sfida allora contattaci subito!</p>
                    <h4>La tua carriera lavorativa potrebbe iniziare qui!</h4>
                    <p><strong>Requisiti Mandatori</strong></p>
                    <ul>
                        <li>Laurea triennale in scienze matematiche, informatica o ingegneria</li>
                        <li>Eccellente conoscenza del linguaggio di programmazione Objective-C e Swift</li>
                        <li>Eccellente conoscenza di almeno un linguaggio di programmazione tra Java, Javascript, .Net, 
                        C, etc...</li>
                        <li>Ottima conoscenza e dimestichezza in ambito iOS</li>
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
                        <li>Avere almeno un prodotto geek o nerd nella stanza in cui si sta leggendo questa inserzione</li>
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

module.exports = IOSDeveloper