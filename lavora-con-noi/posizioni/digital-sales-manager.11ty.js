class DigitalSalesManager {
    data() {
        return {
            layout: 'layout.11ty.js',
            tags: ['posizioni'],
            pageTitle: 'Digital Sales Manager',
            pageDescription: 'Digital Sales Manager Stiamo cercando una persona altamente qualificata e motivata in ' +
                'grado di occuparsi insieme al management del reparto sales in ambito digital. La persona cercata ' +
                'dovrà utilizzare le più recenti metodologie e tecnologie disponibili in ambito inbound sales. ' +
                'L\'attitudine al lavoro di squadra e la propensione ad essere sempre aggiornati sono per noi [...]'
        }
    }

    render(data) {
        return `<main>
            <div class="page-block">
                <section>
                    <h3>Digital Sales Manager</h3>
                    <img src="/img/digital-sales.jpg" alt="" loading="lazy">
                    <p>Stiamo cercando una persona altamente qualificata e motivata in grado di occuparsi insieme al 
                    management del reparto sales in ambito digital. La persona cercata dovrà utilizzare le più recenti 
                    metodologie e tecnologie disponibili in ambito inbound sales. L'attitudine al lavoro di squadra e la
                    propensione ad essere sempre aggiornati sono per noi requisiti fondamentali. Per questi motivi il/la 
                    candidato/a riceverà tutto il supporto necessario per la propria formazione in azienda e la crescita
                    come figura professionale.</p>
                    <p>Stiamo cercando una persona a cui dare un ruolo di primaria importanza poiché oltre a seguire i 
                    vari canali vendita dovrà impostare, nel modo più efficace possibile, il reparto sales monitorando 
                    in modo costante e analitico i vari indicatori di performance.</p>
                    <p>Il reparto in oggetto sarà impostato in modo dinamico e con forti sinergie con il reparto tecnico
                    e marketing. La condivisione degli stessi spazi in modalità open-space corrisponderà alla 
                    metodologia di lavoro inter-team.</p>
                    <p>Il reparto commerciale di Forge segue una linea "non convenzionale" perché adotta tecniche 
                    all'avanguardia in grado di garantire un'estrema scalabilità della rete di vendita e una forte 
                    sinergia con tutti i reparti aziendali.</p>
                    <p>La figura cercata sarà selezionata più per la sua attitudine al lavoro di squadra, all'etica 
                    professionale e personale, alla propensione al miglioramento continuo che alle esperienze 
                    pregresse.</p>
                    <p>Se ritieni di avere le caratteristiche per accettare questa sfida allora contattaci subito!</p>
                    <h4>La tua carriera lavorativa potrebbe iniziare qui!</h4>
                    <p><strong>Requisiti Mandatori</strong></p>
                    <ul>
                        <li>Laurea triennale in scienze umanistiche, economiche o scientifiche</li>
                        <li>Eccellenti conoscenze di vendita online nel mondo digital o esperienza in tale settore di 
                        almeno 5 anni</li>
                        <li>Eccellenti conoscenze dei software di Content Resource Management (Salesforce, HubSpot, 
                        etc...)</li>
                        <li>Ottime conoscenze tecniche e informatiche (Office, Drive, Cloud, etc...)</li>
                        <li>Ottime conoscenze di analisi dati e dei principali indicatori di performance digitali</li>
                    </ul>
                    <p><strong>Requisiti Preferibili</strong></p>
                    <ul>
                        <li>Laurea magistrale, master o dottorato</li>
                        <li>Conoscenze di marketing nel mondo digital e dei relativi strumenti (Google AdWords, Google 
                        Analytics, etc)</li>
                        <li>Conoscenze amministrative e di fatturazione</li>
                        <li>Utilizzo di strumenti di editing grafico</li>
                        <li>Una o più lingue straniere</li>
                    </ul>
                    <p><strong>Requisiti Fortemente Raccomandati</strong></p>
                    <ul>
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

module.exports = DigitalSalesManager