class TirocinioInMarketing {
    data() {
        return {
            layout: 'layout.11ty.js',
            tags: ['stage'],
            pageTitle: 'Tirocinio in Marketing',
            pageDescription: 'Stage e tirocini part-time nel reparto marketing e sales Sei uno studente e stai ' +
                'cercando uno stage, un tirocinio formativo o un part-time? Allora continua a leggere... Lavoriamo ' +
                'quotidianamente a stretto contatto con le università del territorio e se sei uno studente di ' +
                'economia e commercio e vuoi approfondire i tuoi studi in un ambiente [...]'
        }
    }

    render(data) {
        return `<main>
            <div class="page-block">
                <section>
                    <h3>Stage e tirocini part-time nel reparto marketing e sales</h3>
                    <img src="/img/digital-marketing.jpg" alt="" loading="lazy">
                    <p>Sei uno studente e stai cercando uno stage, un tirocinio formativo o un part-time? Allora 
                    continua a leggere...</p>
                    <p>Lavoriamo quotidianamente a stretto contatto con le università del territorio e se sei uno 
                    studente di economia e commercio e vuoi approfondire i tuoi studi in un ambiente dinamico, giovane 
                    e tecnologico inviaci la tua candidatura per valutare insieme il miglior percorso che possiamo 
                    offrirti!</p>
                    <h4>La tua carriera lavorativa potrebbe iniziare qui!</h4>
                    <p>Se decidi di collaborare con noi sarai affiancato da un esperto del settore che ti darà tutti gli
                    strumenti necessari per accrescere le tue conoscenze e provare con mano il mondo industriale. Avrai 
                    sempre uno stretto legame con l'università che ti permetterà di crescere contemporaneamente in 
                    entrambi gli ambienti.</p>
                    <h4>Da noi la selezione all'ingresso non è per tutti!</h4>
                    <p>Eh si, ci piace essere chiari fin dall'inizio, ma non ti preoccupare a noi non interessano i 
                    pluridecorati CV, ma valutiamo molto positivamente le soft skill, le passioni e le vere reali 
                    potenzialità di ogni singola persona. Per noi le idee e l'impegno contano più dei risultati.</p>
                    <p><strong>Requisiti Mandatori</strong></p>
                    <ul>
                        <li>Laurea triennale completata o in corso in scienze umanistiche, economiche o scientifiche</li>
                        <li>Conoscenza dei principali strumenti di lavoro Office, Google Docs o simili</li>
                        <li>Conoscenze generali del mondo del marketing e sales</li>
                        <li>Buona conoscenza della lingua inglese</li>
                    </ul>
                    <p><strong>Requisiti Preferibili</strong></p>
                    <ul>
                        <li>Laurea magistrale completata o in corso</li>
                        <li>Conoscenza di un software gestionale</li>
                        <li>Conoscenza di Google Analytics</li>
                        <li>Conoscenze generali di amministrazione e fatturazione</li>
                        <li>Utilizzo base di strumenti di editing grafico</li>
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

module.exports = TirocinioInMarketing