const pageTitle = require('./_includes/components/pageTitle')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Innovazione',
            pageDescription: 'Accompagniamo le aziende in un percorso di innovazione che nasce dal rapporto sinergico con università, start-up, centri di ricerca e giovani talenti.',
            eleventyNavigation: {
                key: 'innovazione',
                title: 'Innovazione',
                parent: 'home',
            }
        }
    }

    async render(data) {
        return `<main>
            ${pageTitle.call(this, data)}
            <section id="innovare">
                <h2>La nostra parola preferita: Innovare</h2>
                <p>In Forge amiamo accompagnare le aziende in un <strong>percorso di innovazione</strong> che nasce dal rapporto sinergico con università, start-up, centri di ricerca e giovani talenti.</p>
                <p>Utilizziamo un <strong>approccio collaborativo</strong> in ogni fase dello sviluppo di prodotti, servizi e processi, ponendo particolare attenzione alla <strong>trasformazione digitale</strong> e all'adozione di nuove tecnologie che rispondano ai problemi emergenti delle organizzazioni.</p>
            </section>
            <section>
                <script>
                    function countCoffees() {
                        const coffeesUntilPageCreation = 15210
                        const pageCreation = new Date(2022, 6, 1)
                        const today = new Date();
                        const differenceInMillis = today.getTime() - pageCreation.getTime()
                        const differenceInDays = differenceInMillis / (1000 * 3600 * 24)
                        return coffeesUntilPageCreation + (differenceInDays * 0.6 * 21)
                    }
                    document.addEventListener("DOMContentLoaded", function() {
                        document.querySelectorAll(".counter").forEach((element) => {
                            const finalNumber = element.id === 'coffeeCounter' ? countCoffees() : Number.parseInt(element.getAttribute('data-counter-end'))
                            const maxTime = 1500
                            const updates = 50
                            let counter = 0
                            const intervalId = setInterval(() => {
                                counter++
                                element.innerText = Math.ceil(finalNumber / updates * counter)
                                if (counter === updates) {
                                    clearInterval(intervalId)
                                }
                            }, maxTime / updates)
                        })
                    });
                </script>
                <div class="group-2 gap-3">
                    <div>
                        <h4 class="counter" id="coffeeCounter">0</h4>
                        <p>Caffè convertiti in codice</p>
                    </div>
                    <div>
                        <h4 class="counter" data-counter-end="21">0</h4>
                        <p>Progetti di tesi</p>
                    </div>
                    <div>
                        <h4 class="counter" data-counter-end="32">0</h4>
                        <p>Progetti Software</p>
                    </div>
                    <div>
                        <h4 class="counter" data-counter-end="3">0</h4>
                        <p>Università partner</p>
                    </div>
                </div>
            </section>
            <section id="universita">
                <h2>Università</h2>
                <p><strong><em>Dialoghiamo con giovani menti entusiaste</em></strong></p>
                <p>La forte spinta a collaborare con le università del territorio viene dai nostri stessi fondatori, che arrivano da un lungo percorso accademico e ben conoscono il <strong>potenziale innovativo di centri di ricerca e università</strong> in risposta alle esigenze di trasformazione delle aziende.</p>
                <p>Nel tempo abbiamo stretto importanti <strong>sinergie con l'Università dell'Insubria di Varese</strong>, la nostra città natale, e abbiamo svolto diversi <strong>workshop all'Università Bicocca di Milano</strong>. Inoltre, curiamo la formazione dei giovani universitari per accelerare la loro crescita professionale e la loro capacità di essere protagonisti del cambiamento attraverso <strong>stage e progetti di ricerca</strong>.</p>
                <br>
                <a href="/lavora-con-noi/#posizioni-aperte">Posizioni aperte</a>
            </section>
            <section id="open-source">
                <h2>Sviluppiamo progetti Open Source</h2>
                <p>Ogni volta che risolviamo un problema scrivendo del software cerchiamo di astrarre il più possibile dall'ambito di applicazione per arrivare ad una <strong>soluzione aperta</strong> che possa essere riutilizzata in altri ambiti. Per questo motivo abbiamo deciso di rilasciare alcuni progetti Open Source, <strong>nati e forgiati internamente a Forge</strong> con lo scopo di risolvere esigenze di sviluppo.</p>
                <div class="group-3 gap-2">
                    <div class="box">
                        <h5>Gushio</h5>
                        <p>Permette di scrivere script multipiattaforma testabili unitariamente in linguaggio JavaScript.</p>
                        <br>
                        <a target="_blank" rel="noopener" href="https://github.com/Forge-Srl/gushio/">Vai al progetto</a>
                    </div>
                    <div class="box">
                        <h5>BionicJS</h5>
                        <p>Permette di eseguire codice JavaScript da altri linguaggi di programmazione per semplificare lo sviluppo di applicazioni multi-piattaforma.</p>
                        <br>
                        <a target="_blank" rel="noopener" href="https://github.com/Forge-Srl/bionic-js/">Vai al progetto</a>
                    </div>
                    <div class="box">
                        <h5>JJBridge</h5>
                        <p>Porta l'esecuzione di codice JavaScript in ambiente Java, nato inizialmente per utilizzare BionicJS in ambito Android.</p>
                        <br>
                        <a target="_blank" rel="noopener" href="https://github.com/Forge-Srl/jjbridge-engine-v8/">Vai al progetto</a>
                    </div>
                </div>
            </section>
            <section id="ricerca">
                <h2>Ricerca e Sviluppo</h2>
                <p><strong><em>Un ecosistema dedicato alla trasformazione digitale</em></strong></h2>
                <p>Per noi la tecnologia è al servizio del cambiamento. Partendo dal potenziale delle nuove tecnologie digitali costruiamo soluzioni di <strong>intelligenza artificiale</strong>, integriamo e <strong>sviluppiamo software</strong> per accompagnare le aziende in un reale percorso di trasformazione digitale.</p>
                <p>Ci identifichiamo con i <strong>bisogni di innovazione delle aziende</strong> e le aiutiamo a individuare le soluzioni migliori per realizzare i progetti che le rendano autonome nell'affrontare il futuro.</p>
                <br>
                <a href="/contattaci/" >Contattaci per una consulenza</a>
            </section>
            <section class="highlight">
                <p><strong>Innovazione è la nostra parola preferita. È così anche per te?</strong></p>
                <br>
                <p>Mandaci una mail spiegandoci la tua idea o il tuo progetto.</p>
                <br>
                <a href="/contattaci/" class="cta">Parliamone insieme</a>
            </section>
        </main>`
    }
}
