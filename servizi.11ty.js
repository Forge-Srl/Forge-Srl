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
            <p>Studiamo a fondo le idee dei clienti e realizziamo soluzioni competitive in un mercato digitale sempre più esigente.</p>
            <section id="ai">
                <h5>Artificial Intelligence</h5>
                <p>Utilizziamo modelli di Machine Learning e AI Generativa per automatizzare i processi aziendali ripetitivi che richiedono oggi l'intervento di personale dedicato. Il nostro obiettivo è la riduzione degli errori, dei tempi di esecuzione e dei costi.</p>
                <h5>Customer Service</h5>
                <p>Siamo in grado di automatizzare il supporto ai clienti di qualsiasi piattaforma, partendo dalle prime fasi di raccolta delle informazioni. In molti casi l'assistenza può svolgersi interamente grazie a un bot basato su AI Generativa, in altri casi specifici il bot stesso è in grado di decidere se richiedere l'intervento di personale di supporto.</p>
                <h5>Predictive Maintenance</h5>
                <p>Impiegando strumenti di Data Science e Machine Learning applicati ai dati raccolti dalla sensoristica, abbiamo sviluppato una innovativa tecnologia di manutenzione predittiva che può riconoscere in anticipo guasti e malfunzionamenti di qualsiasi impianto, evitando costosissimi fermi di produzione.</p>
	        </section>
	        <section id="dev">
                <h5>Piattaforme Web</h5>
                <p>Creiamo piattaforme Web di qualsiasi tipo: single page applications, siti multi pagina, E-commerce, progressive web app (PWA). Supportiamo i maggiori provider cloud e CDN per garantire una infrastruttura con elevate performance.</p>
                <h5>Mobile</h5>
                <p>Progettiamo e sviluppiamo applicazioni mobile Android e iOS, focalizzandoci sull'efficienza e la versatilità. La nostra squadra di sviluppatori assicura soluzioni intuitive e funzionali. Basiamo sempre la progettazione sulla scalabilità, consentendo aggiornamenti rapidi e una manutenzione semplice ed immediata.</p>
                <h5>Back-End</h5>
                <p>Realizziamo servizi Back-end e API utilizzando le infrastrutture cloud native offerte da AWS, Google Cloud e altri provider. Siamo in grado di integrare le principali tecnologie serverless, a microservizi, database e strumenti di virtualizzazione.</p>
                <h5>Open Source</h5>
                <p>Utilizziamo ogni giorno decine di strumenti offerti dalla comunità open source. Il minimo che possiamo fare è cercare di contribuire noi stessi, creando nuovi progetti e aiutando a migliorare l'efficienza e l'affidabilità dei software che utilizziamo.</p>
	        </section>
            <br>
            <section>
                <blockquote>
                    <p>Siamo fermamente convinti che l'Intelligenza Artificiale, come il software e l'informatica in generale, debbano essere utilizzati per migliorare la vita di tutti, soprattutto di chi non è esperto di tecnologia. Per questo motivo abbiamo scelto di fondare Forge, mettendo tutta la nostra passione ed esperienza al servizio dei nostri dipendenti e dei nostri clienti.</p>
                </blockquote>
            </section>
            <br>
            <section>
                <h2>Il nostro approccio</h2>
                <p><strong><em>Supportiamo l'evoluzione tecnologica con un rapporto solido.</em></strong></p>
                <p>Instauriamo partnership amichevoli e durature con i nostri clienti per costruire insieme esperienze digitali future-proof che abbiano un <strong>valore concreto</strong>.</p>
                <p>Amiamo ciò che facciamo e ci divertiamo nel farlo. Ci impegniamo a generare un <strong>impatto positivo</strong> sul territorio e collaboriamo il più possibile con la realtà che ci circonda.</p>
                <p>Investiamo costantemente sulla <strong>formazione</strong> di ogni nostra risorsa, collaboriamo con le università del territorio e siamo sempre alla ricerca di <strong>nuovi talenti da forgiare</strong>.</p>
                <ul>
                    <li>Lean Thinking</li>
                    <li>Condivisione come driver di conoscenza</li>
                    <li>Ricerca e sviluppo continui</li>
                    <li>Metodologia Agile</li>
                </ul>
            </section>
            <section>
                <h2>Perché sceglierci</h2>
                <p>Costruiamo una cultura orientata al risultato, ma con integrità, affidabilità, dedizione e rispetto reciproco.</p>
                <ul>
                    <li>Siamo fortemente consapevoli della nostra <strong>responsabilità</strong> nei confronti di chi conta su di noi e lavoriamo duro per mantenere la parola data.</li>
                    <li>Siamo instancabili studenti alla <strong>costante ricerca</strong> di modi innovativi per applicare le nostre conoscenze a nuove soluzioni.</li>
                    <li>Crediamo fortemente che la chiave del cambiamento sia il <strong>confronto nella diversità</strong> e amiamo costruire rapporti basati sulla <strong>fiducia</strong> reciproca.</li>
                </ul>
            </section>
            <section class="highlight">
                <p><strong>Ti aiutiamo a raggiungere i tuoi obiettivi</strong</p>
                <br>
                <p>Hai bisogno di maggiori informazioni o vuoi semplicemente farti un'idea di come lavoriamo?<br>Siamo a tua disposizione!</p>
                <br>
                <a href="/contattaci/" class="cta">Parliamone Insieme</a>
            </section>
        </main>`
    }
}