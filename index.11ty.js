class Home {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Forge',
            pageDescription: 'Trasformiamo le idee di oggi, nei prodotti di domani Studiamo a fondo le idee dei ' +
                'clienti e realizziamo soluzioni competitive in un mercato digitale sempre più esigente Contattaci ' +
                'Dimmi di più La digitalizzazione è un potente strumento per le aziende: permette di migliorare i ' +
                'processi e proiettarsi da subito nel futuro. Per un\'azienda moderna è impensabile non [...]',
        }
    }

    render(data) {
        return `<main>
             <div class="page-block" style="--background-image: url('/img/home_bg_1.jpg');">
                <section>
                    <h1>Trasformiamo le idee di oggi, nei prodotti di domani</h1>
                    <h2>Studiamo a fondo le idee dei clienti e realizziamo soluzioni competitive in un mercato digitale 
                    sempre più esigente</h2>
                    <div>
                        <a href="#contact-us">Contattaci</a>
                        <a href="#what-we-do">Dimmi di più</a>
                    </div>
                </section>
             </div>
             <div class="page-block">
                <p class="claim">La digitalizzazione è un potente strumento per le aziende: permette di migliorare i 
                <strong>processi</strong> e proiettarsi da subito nel <strong>futuro</strong>.<br>
                Per un'azienda <strong>moderna</strong> è impensabile non avere oggi una strategia di 
                <strong>digitalizzazione</strong> del proprio business.</p>
                <section id="what-we-do">
                    <h3>Realizziamo il tuo software su misura, meglio di chiunque altro</h3>
                    <div class="flexible-grid col-3 col-w300">
                        <section class="info-box">
                            <i aria-hidden="true" class="fa fa-4x fa-globe"></i>
                            <h6>Web</h6>
                            <p>Realizziamo siti web accessibili da <strong>qualsiasi dispositivo</strong>, curando 
                            l'<strong>esperienza</strong> dell'utente, la <strong>visibilità sui motori di 
                            ricerca</strong>, la raccolta e l'analisi dei <strong>dati di utilizzo</strong> nel pieno 
                            rispetto del General Data Protection Regulation (GDPR). Siamo pronti ad implementare 
                            applicazioni web in grado di sfruttare tutte le recenti tecnologie: <strong>single page 
                            applications</strong>, <strong>progressive web apps</strong> (PWA), <strong>accelerated 
                            mobile pages</strong> (AMP), <strong>chat bots</strong>, <strong>web push 
                            notifications</strong>. Forniamo sempre ai nostri clienti una consulenza approfondita per 
                            capire insieme quali tecnologie si adattano meglio ad ogni idea e business.</p>
                        </section>
                        <section class="info-box">
                            <i aria-hidden="true" class="fa fa-4x fa-mobile-alt"></i>
                            <h6>Mobile</h6>
                            <p>Progettiamo e sviluppiamo app per le piattaforme mobile Android e iOS. Abbiamo creato e 
                            rilasciato alla comunità open source una tecnologia unica che ci permette di creare app 
                            perfettamente integrate nel loro ambiente, scritte in <strong>codice nativo altamente 
                            ottimizzato</strong>, consentendoci allo stesso tempo di aggiornare tutta la <strong>logica 
                            di business</strong> in modo <strong>indipendente dagli store ufficiali</strong> e di 
                            <strong>riutilizzarla su altre piattaforme</strong> come ad esempio le applicazioni web. Le 
                            app che creiamo si distinguono per la loro <strong>usabilità</strong> ed 
                            <strong>efficienza</strong> combinata con una estrema versatilità nella 
                            <strong>manutenzione</strong> e nell'<strong>introduzione di novità</strong>.</p>
                        </section>
                        <section class="info-box">
                            <i aria-hidden="true" class="fa fa-4x fa-cloud"></i>
                            <h6>Cloud</h6>
                            <p>Oltre ad applicazioni web e mobile realizziamo servizi backend in grado di fornire 
                            <strong>efficienza</strong> e <strong>scalabilità</strong>. Utilizziamo i principali 
                            fornitori di servizi cloud come Amazon Web Services, Microsoft Azure, Google Cloud, IBM 
                            Cloud e le principali tecnologie, come <strong>serverless computing</strong>, 
                            <strong>architetture a microservizi</strong>, <strong>database realtime</strong> e 
                            <strong>virtualizzazione</strong> a livello di sistema operativo (Docker) o di macchina 
                            (VM).</p>
                        </section>
                        <section class="info-box">
                            <i aria-hidden="true" class="fa fa-4x fa-hammer"></i>
                            <h6>Software engineering</h6>
                            <p>A differenza di molti sviluppatori di soluzioni software non abbiamo a cuore solo lo 
                            sviluppo iniziale del software, siamo riusciti a creare una serie di strumenti e strategie 
                            che ci consentono di mantenere il parco software dei nostri clienti e aggiungere novità 
                            riducendo costi, tempi di sviluppo e <strong>garantendo sempre la qualità che ci 
                            distingue</strong>. Valutiamo la possibilità di prendere in gestione applicazioni mobile, 
                            web o backend già esistenti al fine di ammodernarle ed adeguarle progressivamente allo stato
                            dell'arte nel mondo mobile.</p>
                        </section>
                        <section class="info-box">
                            <i aria-hidden="true" class="fa fa-4x fa-university"></i>
                            <h6>Innovazione e ricerca</h6>
                            <p>Forge ha le sue radici nella ricerca scientifica e nell'innovazione, i suoi co-fondatori 
                            hanno da subito applicato gli insegnamenti appresi durante il Ph.D. in intelligenza 
                            artificiale a progetti digitali di successo. Studiamo e sviluppiamo progetti nelle 
                            principali aree di innovazione: <strong>intelligenza e visione artificiale</strong>, 
                            <strong>internet of things</strong> (IoT), <strong>edge computing</strong>, 
                            <strong>blockchain</strong> e <strong>smart contracts</strong>. Collaboriamo da sempre con 
                            le università del territorio, questo ci ha sempre permesso di avere una marcia in più. 
                            Abbiamo costruito una solida rete di <strong>relazioni umane e professionali</strong> tra i 
                            membri dei nostri team, professori universitari, ricercatori scientifici e studenti in modo 
                            da essere sempre pronti ad affrontare il futuro usando sempre la migliore combinazione di 
                            teoria e pratica.</p>
                        </section>
                        <section class="info-box">
                            <i aria-hidden="true" class="fa fa-4x fa-code"></i>
                            <h6>Open Source</h6>
                            <p>Ogni persona sul pianeta (come nello spazio) gode costantemente, direttamente o 
                            indirettamente, dei benefici del software open source. Noi <strong>crediamo profondamente 
                            nell'open source</strong> e nella condivisione dei progressi tecnologici raggiunti, per 
                            questo cerchiamo sempre di pubblicare e documentare il cuore dei nostri strumenti e librerie
                            di sviluppo, permettendo a tutti di utilizzarli, migliorarli e contribuire a creare nuovi 
                            standard di efficienza e affidabilità per il software. Stiamo creando in Forge un 
                            <strong>polo di eccellenza per lo sviluppo del software</strong>, dove ogni sviluppatore 
                            possa dare il massimo per il progetto su cui sta lavorando contribuendo al tempo stesso al 
                            progresso tecnologico ed informatico.</p>
                        </section>
                    </div>
                </section>
                <section>
                    <h3>Come lavoriamo</h3>
                    <p>Non sappiamo mai con precisione che prodotto digitale vogliamo fino a quando non <strong>vediamo 
                    degli utenti soddisfatti</strong> che lo utilizzano. È quindi altamente improbabile che una lista di
                    specifiche possa descrivere con precisione e completezza il prodotto realmente desiderato.</p>
                    <p>Per questo motivo i nostri team adottano da sempre <strong>metodologie agili</strong> e tecniche 
                    consolidate di <strong>product management</strong> per sviluppare ogni tipo di progetto digitale.</p>
                    <p>In Forge ci preoccupiamo da sempre di:</p>
                    <ul>
                        <li>capire con il cliente quando è <strong>davvero necessario</strong> iniziare a sviluppare del
                            software e quando invece è meglio utilizzare altre soluzioni</li>
                        <li>fare <strong>stime sui tempi</strong> e i <strong>costi</strong> di realizzazione con una 
                            <strong>precisione</strong> che va ben oltre all'esperienza personale</li>
                        <li>sottoporre al cliente <strong>versioni preliminari</strong> del prodotto, raccogliere 
                            <strong>feedback</strong> e reiterare questo processo</li>
                        <li>spendere tempo e risorse solo sulle <strong>caratteristiche di valore</strong> per il 
                            cliente, evitando di implementare caratteristiche inutili e non richieste</li>
                        <li>consegnare al cliente nel minore tempo possibile un prodotto che possa essere davvero 
                            <strong>amato dagli utenti</strong></li>
                    </ul>
                </section>
             </div>
             <div class="page-block alt-back">
                <section id="where-we-are">
                    <h3>Valorizziamo il territorio</h3>
                    <p>Ci piace lavorare a stretto contatto con il territorio ed in collaborazione con le migliori 
                    università. Siamo al tempo stesso amanti del remote working e degli spazi condivisi che creano forti
                    sinergie e ritorni positivi. Crediamo fortemente che la chiave del cambiamento sia il confronto 
                    nella diversità.</p>
                </section>
                <div class="map">
                    <iframe title="Map" src="https://maps.google.com/maps?hl=it&q=Via%20Sempione,%2014,%2021100%20Varese%20VA+(Forge%20S.r.l.)&t=&z=15&ie=UTF8&iwloc=B&output=embed"></iframe>
                </div>
            </div>
            <div class="page-block">
                <h3>Su di noi</h3>
                <section>
                    <h5>Quali sono i nostri principi e come cambia la vita di chi collabora con noi?</h5>
                    <p>Da noi si lavora <strong>duro</strong>, ma ci si <strong>diverte</strong> nei giusti modi e tempi
                    e vale per tutti.<br>
                    Ruota tutto attorno alla meritocrazia e non esiste un <strong>organigramma</strong>, ci sono solo 
                    <strong>ruoli</strong> e <strong>responsabilità</strong>.<br>
                    L'orario di lavoro è <strong>flessibile</strong> e va incontro alle esigenze di ognuno.<br>
                    Il rispetto degli altri e delle <strong>differenze</strong> e delle singolarità di ognuno è alla 
                    base di ogni relazione.<br>
                    Da noi il caffè non solo è <strong>gratuito</strong>, ma è anche <strong>buono</strong>!</p>
                </section>
                <section>
                    <h5>Quali sono i nostri benefit e perché lavorare in una startup è molto più stimolante?</h5>
                    <p>A seconda della sede abbiamo i seguenti <strong>benefit</strong>:</p>
                    <ul>
                        <li>spazi di <strong>co-working</strong> con altri talenti giovani e dinamici</li>
                        <li>free water and <strong>coffee</strong></li>
                        <li>free <strong>snacks</strong> and <strong>ice-cream</strong></li>
                        <li>servizio di <strong>pranzo</strong> con ristoranti della zona convenzionati</li>
                        <li>aree <strong>relax</strong></li>
                        <li>ricarica per <strong>auto elettrica</strong></li>
                        <li>rimborso spese di trasporto per <strong>mezzi pubblici</strong></li>
                        <li>orario di <strong>lavoro flessibile</strong></li>
                        <li>ore dedicate allo <strong>studio</strong></li>
                        <li>partecipazione a <strong>corsi di formazione</strong> e <strong>conferenze</strong></li>
                        <li>possibilità di <strong>remote working</strong></li>
                        <li>e molto altro ancora...</li>
                    </ul>
                </section>
            </div>
            <div class="page-block">
                <section>
                    <h3>Le nostre motivazioni</h3>
                    <div class="flexible-grid col-2 col-w300">
                        <figure class="person-box">
                            <img src="/img/angelo-nodari.jpg" alt="Angelo Nodari" height="128" width="128" loading="lazy">
                            <cite>
                                <h5>Angelo Nodari</h5>
                                <h6>Co-founder e CEO</h6>
                            </cite>
                            <blockquote>
                                <p>Abbiamo creato Forge per dare spazio a chi, come noi, crede nel cambiamento e nella 
                                tecnologia per migliorare la vita di tutti giorni. Crediamo fortemente nel rispetto del 
                                prossimo e dell'ambiente. Ci piace parlare di etica e del valore che viene creato dal 
                                nostro lavoro.</p>
                            </blockquote>
                        </figure>
                        <figure class="person-box">
                            <img src="/img/marco-vanetti.jpg" alt="Marco Vanetti" height="128" width="128" loading="lazy">
                            <cite>
                                <h5>Marco Vanetti</h5>
                                <h6>Co-founder e CTO</h6>
                            </cite>
                            <blockquote>
                                <p>Siamo fermamente convinti che l'intelligenza artificiale, come il software e 
                                l'informatica in generale, debbano essere utilizzati per migliorare la vita di tutti, 
                                soprattutto di chi non è esperto di tecnologia. Per questo motivo abbiamo scelto di 
                                fondare Forge, mettendo tutta la nostra passione ed esperienza al servizio dei nostri 
                                dipendenti e dei nostri clienti.</p>
                            </blockquote>
                        </figure>
                        <figure class="person-box">
                            <img src="/img/fabio-micheletti.jpg" alt="Fabio Lino Micheletti" height="128" width="128" loading="lazy">
                            <cite>
                                <h5>Fabio Lino Micheletti</h5>
                                <h6>Co-founder e CIO</h6>
                            </cite>
                            <blockquote>
                                <p>Il lavoro che facciamo occupa la maggior parte della nostra vita, è importante quindi
                                che rispecchi appieno quello in cui crediamo. Per questo abbiamo deciso di creare Forge, 
                                un'azienda che mira ad essere ai massimi livelli tecnologici ed al tempo stesso con solide 
                                basi umane, puntando ad essere un ambiente di lavoro stimolante e sereno.</p>
                            </blockquote>
                        </figure>
                    </div>
                </section>
            </div>
            <div class="page-block alt-back">
                <div class="flexible-grid col-2 col-w300" id="contact-us">
                    <section>
                        <h3>Contattaci</h3>
                        <p>Se hai bisogno di maggiori informazioni o vuoi semplicemente metterti in contatto con noi non 
                        esitare a compilare questo form.</p>
                        <p>Siamo sempre disponibili per una consulenza realtiva al tuo problema e pronti a fornirti la 
                        migliore soluzione possibile.</p>
                        <section>
                            <h4>Informazioni</h4>
                            <p>Email: info@forge.srl</p>
                        </section>
                        <section>
                            <h4>Indirizzo</h4>
                            <p>Via Cigalini 5/D 22100 Como, Italy</p>
                        </section>
                    </section>
                    <!-- TODO: find better way to handle contact form -->
                    <form method="POST" action="mailto:info@forge.srl">
                        <label for="contact-us_name">Il tuo nome</label>
                        <input type="text" id="contact-us_name" required>
                        <label for="contact-us_email">La tua email</label>
                        <input type="email" id="contact-us_email" name="from" required>
                        <label for="contact-us_subject">Oggetto</label>
                        <input type="text" id="contact-us_subject" name="subject" required>
                        <label for="contact-us_message">Messaggio</label>
                        <textarea id="contact-us_message" name="body" required></textarea>
                        <button type="submit">Invia</button>
                    </form>
                </div>
            </div>
        </main>`
    }
}

module.exports = Home