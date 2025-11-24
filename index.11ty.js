module.exports = class {
  data() {
    return {
      layout: 'layout.11ty.js',
      pageTitle: 'Homepage',
      pageDescription:
        'Trasformiamo le idee di oggi nei prodotti di domani. Siamo appassionati di Artificial Intelligence, Process Automation, Machine Learning, Software Development e Digital Innovation',
      eleventyNavigation: {
        key: 'home',
        title: 'Home',
      },
    }
  }

  async render(data) {
    return `<main>
            <section>
                <h3 style="will-change: contents; transform: translateZ(0);">
                    <span class="pt-0">Appassionati di</span>
                    <span class="typed" data-type-text="Artificial Intelligence&&Process Automation&&Machine Learning&&Software Development&&Digital Innovation"></span>
                </h3>
                <script defer src="/assets/vendor/ityped/index.js"></script>
                <script>
                document.addEventListener("DOMContentLoaded", function() {
                    const type = document.querySelectorAll('.typed');
                    type.forEach(el => {
                        const strings = el.getAttribute('data-type-text');
                        const split_strings = strings.split("&&");
                        const typespeed = el.getAttribute('data-speed') ? el.getAttribute('data-speed') : 125;
                        const typeBackSpeed = el.getAttribute('data-back-speed') ? el.getAttribute('data-back-speed') : 50;

                        ityped.init(el, {
                            strings: split_strings,
                            showCursor: true,
                            typeSpeed: typespeed,
                            backSpeed: typeBackSpeed
                        });
                    });
                });
                </script>
                <p>Trasformiamo le idee di oggi nei prodotti di domani.</p>
                <br>
                <a href="/#servizi">Esplora le nostre soluzioni</a>
                <a href="/contattaci/">Contattaci</a>
            </section>
            <section id="chi-siamo">
                <h2>Chi Siamo</h2>
                <blockquote>
                    <p>Appassionarci alle idee dei nostri clienti ci permette di creare costantemente valore.</p>
                </blockquote>
                <p><strong><em>Intelligenza artificiale, approccio umano</em></strong></p>
                <p>Siamo una squadra affiatata composta da <strong>informatici</strong> con varie specializzazioni.
                <p>Lavoriamo con le più recenti tecnologie di <strong>intelligenza artificiale</strong> e usando gli strumenti
                di <strong>sviluppo software</strong> più aggiornati.
                <p>Ci <strong>divertiamo</strong> e non smettiamo mai di imparare, perché
                l'innovazione digitale è in costante accelerazione e richiede <strong>passione</strong>.</p>
                <p>Il nostro approccio è diretto e agile, cerchiamo costantemente <strong>fiducia, onestà e trasparenza</strong>.</p>
                <br>
                <a href="/chi-siamo/">Conosci il team</a>
            </section>
            <section id="servizi">
                <h2>Come possiamo aiutarti</h2>
                <div class="group-2 gap-3">
                    <div class="box">
                        <h5>Intelligenza Artificiale</h5>
                        <ul>
                            <li>Automazione di Processi con AI Generativa</li>
                            <li>Supporto Clienti automatizzato</li>
                            <li>Manutenzione Predittiva</li>
                            <li>Data Science</li>
                        </ul>
                        <br>
                        <a href="/servizi/#ai">Scopri di più</a>
                    </div>
                    <div class="box">
                        <h5>Sviluppo software</h5>
                        <ul>
                            <li>E-Commerce</li>
                            <li>Web Development</li>
                            <li>Back-End Development</li>
                            <li>Mobile App Development Android/iOS</li>
                        </ul>
                        <br>
                        <a href="/servizi/#dev">Scopri di più</a>
                    </div>
                </div>
            </section>

            <section id="metodologia">
                <h2>Il successo dei nostri clienti è il nostro successo</h2>
                <p><strong><em>Offriamo un approccio concreto, flessibile e soprattutto umano</em></strong></p>
                <br>
                <div class="group-2 gap-3">
                    <div class="box">
                        <span class="box-title">01</span>
                        <h5>Ascoltiamo e valutiamo</h5>
                        <p>con onestà il progetto e decidiamo se possiamo fornire il nostro contributo nella realizzazione</p>
                    </div>
                    <div class="box">
                        <span class="box-title">02</span>
                        <h5>Troviamo una soluzione</h5>
                        <p>che sia il più possibile efficace e che dimostri con dati misurabili un riscontro positivo</p>
                    </div>
                    <div class="box">
                        <span class="box-title">03</span>
                        <h5>Usiamo il modello <em>Agile</em></h5>
                        <p>e la metodologia Scrum per pianificare e gestire il progetto con la massima flessibilità ed efficienza</p>
                    </div>
                    <div class="box">
                        <span class="box-title">04</span>
                        <h5>Chiediamo feedback</h5>
                        <p>costantemente attraverso un rapporto umano e trasparente costruito sulla fiducia, rilasciando gradualmente il software.</p>
                    </div>
                </div>
            </section>
            <section id="valori">
                <h2>I nostri valori</h2>
                <p><strong><em>Ci basiamo su 4 valori per guidare le nostre scelte e decisioni</em></strong></p>
                <div>
                    <h3>Fiducia</h3>
                    <p>Sia tra di noi che con i nostri clienti. Pensiamo che sia la vera chiave per la costruzione di un rapporto solido che possa generare valore. </p>
                </div>
                <div>
                    <h3>Onestà</h3>
                    <p>Vogliamo che le cose siano fatte bene. I nostri consigli saranno sempre sinceri, senza timore di metterci in discussione.</p>
                </div>
                <div>
                    <h3>Innovazione</h3>
                    <p>Aiutiamo i nostri clienti nelle scelte attraverso una consulenza armonica che abbraccia il cambiamento e le nuove sfide.</p>
                </div>
                <div>
                    <h3>Trasparenza</h3>
                    <p>Ci confrontiamo costantemente con un rapporto diretto e informale, non amiamo fare giri di parole.</p>
                </div>
            </section>

            <section id="lavora-con-noi">
                <h2>Come lavoriamo?</h2>
                <p><strong><em>Lavoriamo divertendoci e crescendo sia personalmente che professionalmente</em></strong></p>
                <p>In Forge diamo molta importanza all'umiltà e al lavoro di squadra come chiavi per il raggiungimento di risultati di qualità.</p>
                <p>Ci impegniamo affinché ciascuno si senta sempre a casa e possa contribuire a sua volta a una cultura di benessere, libertà, responsabilità e trasparenza.</p>
                <br>
                <p><strong>Vuoi lavorare con noi?</strong></p>
                <br>
                <a href="/lavora-con-noi/">Scopri cosa offriamo</a>
            </section>
            <section>
                <div>
                    <h2>Le nostre tecnologie</h2>
                    <p>Alcuni degli strumenti che utilizziamo quotidianamente per lavorare</p>
                </div>
                <div class="group-3 gap-2">
                    <div style="text-align: center;">
                        ${await this.image('technologies-logos/TS-logo.png', 'Logo TypeScript', '', [214], '214w')}
                    </div>
                    <div style="text-align: center;">
                        ${await this.image('technologies-logos/java-logo.png', 'Logo Java', '', [214], '214w')}
                    </div>
                    <div style="text-align: center;">
                        ${await this.image('technologies-logos/algolia-logo.png', 'Logo Algolia', '', [214], '214w')}
                    </div>
                    <div style="text-align: center;">
                        ${await this.image('technologies-logos/ios-logo.png', 'Logo iOS', '', [214], '214w')}
                    </div>
                    <div style="text-align: center;">
                        ${await this.image('technologies-logos/android-logo.png', 'Logo Android', '', [214], '214w')}
                    </div>
                    <div style="text-align: center;">
                        ${await this.image('technologies-logos/node-logo.png', 'Logo Node', '', [214], '214w')}
                    </div>
                    <div style="text-align: center;">
                        ${await this.image('technologies-logos/angular-logo.png', 'Logo Angular', '', [214], '214w')}
                    </div>
                    <div style="text-align: center;">
                        ${await this.image('technologies-logos/csharp-logo.png', 'Logo C#', '', [214], '214w')}
                    </div>
                    <div style="text-align: center;">
                        ${await this.image('technologies-logos/aws-logo.png', 'Logo AWS', '', [214], '214w')}
                    </div>
                    <div style="text-align: center;">
                        ${await this.image('technologies-logos/firebase-logo.png', 'Logo Firebase', '', [214], '214w')}
                    </div>
                    <div style="text-align: center;">
                        ${await this.image('technologies-logos/googlecloud-logo.png', 'Logo Google Cloud', '', [214], '214w')}
                    </div>
                    <div style="text-align: center;">
                        ${await this.image('technologies-logos/bootstrap-logo.png', 'Logo Bootstrap', '', [214], '214w')}
                    </div>
                    <div style="text-align: center;">
                        ${await this.image('technologies-logos/wordpress-logo.png', 'Logo WordPress', '', [214], '214w')}
                    </div>
                </div>
            </section>
            <section class="highlight">
                <p><strong>Ti aiutiamo a raggiungere i tuoi obiettivi</strong></p>
				<br>
				<p>Hai bisogno di maggiori informazioni o vuoi semplicemente farti un'idea di come lavoriamo?<br>Siamo a tua disposizione!</p>
				<br>
				<a href="/contattaci/" class="cta">Parliamone Insieme</a>
            </section>
        </main>`
  }
}
