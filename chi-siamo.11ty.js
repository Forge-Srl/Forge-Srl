const pageTitle = require('./_includes/components/pageTitle')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Chi siamo',
            pageDescription: 'Usiamo le nostre competenze informatiche e di problem solving per creare valore.',
            eleventyNavigation: {
                key: 'chi-siamo',
                title: 'Chi Siamo'
            }
        }
    }

    async render(data) {
        return `<main>
            ${pageTitle.call(this, data)}
            <section id="chi siamo">
                <h2>La miglior estensione per la tua squadra</h2>
                <p><strong><em>Il nostro obiettivo? Creare valore e arrivare al successo insieme alle aziende che seguiamo.</em><strong></p>
                <p>Siamo una realtà giovane e dinamica che unisce competenze informatiche di diverso tipo come l'intelligenza artificiale, lo sviluppo agile del software e il cloud computing.</p>
                <p>Nasciamo nel 2018 e da allora trasformiamo idee in prodotti, studiando a fondo la visione dei clienti e realizzando soluzioni digitali competitive.</p>
                <p>Il nostro cuore pulsante è a Varese, siamo amanti delle metodologie agili e degli spazi condivisi.</p>
                <br>
                <a href="/#servizi">Scopri i nostri servizi</a>
            </section>
            <section id="valori">
                <h2>I nostri valori sono il nostro brand</h2>
                <div class="group-3 gap-2">
                    <div class="box">
                        <h3>Vision</h3>
                        <p><strong><em>Come ci immaginiamo il futuro?</em></strong></p>
                        <p>Un mondo del lavoro più equo che premia i talenti e la formazione, in cui le competenze e la corretta metodologia di lavoro sono gli strumenti per il successo.</p>
                    </div>
                    <div class="box">
                        <h3>Mission</h3>
                        <p><strong><em>Che ruolo vogliamo avere nel futuro?</em></strong></p>
                        <p>Vogliamo affiancare le aziende nel processo di crescita con un approccio propositivo basato su fiducia, onestà, etica e trasparenza.</p>
                    </div>
                    <div class="box">
                        <h3>North Star</h3>
                        <p><strong><em>Come misuriamo il valore che creiamo?</em></strong></p>
                        <p>Tramite il livello di soddisfazione dei clienti partendo dal rispetto dei tempi di consegna, dalla solidità dei rapporti commerciali e dalla felicità delle persone coinvolte.</p>
                    </div>
                </div>
            </section>
            <section id="team">
                <h2>Il team</h2>
                <p><strong><em>Il lavoro di squadra è il nostro asset migliore</em></strong></p>
                <p>La nostra squadra è composta da sviluppatori esperti in diverse tecnologie e project manager.</p>
                <p>Ispirati dalla curiosità e dalla passione per le sfide, riteniamo estremamente importante il valore umano ma non perdiamo mai di vista i numeri, che guidano tutte le nostre decisioni e strategie. </p>
                <p>Sogniamo un mondo permeato dalla cultura digitale, che cerchiamo di diffondere insegnando presso università e aziende.</p>
                <br>
                <a href="/innovazione/">Scopri i nostri progetti</a>
            </section>
            <section class="highlight">
                <p><strong>Ti aiutiamo a raggiungere i tuoi obiettivi</strong></p>
                <br>
                <p>Hai bisogno di maggiori informazioni o vuoi semplicemente farti un’idea di come lavoriamo?<br>Siamo a tua disposizione!</p>
                <br>
                <a href="/contattaci/" class="cta">Parliamone Insieme</a>
            </section>
        </main>`
    }
}