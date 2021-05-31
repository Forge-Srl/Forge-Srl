class TirocinioInInformatica {
    data() {
        const pageTitle = 'Tirocinio in Informatica'

        return {
            layout: 'layout.11ty.js',
            tags: ['stage'],
            pageTitle: pageTitle,
            pageDescription: 'Stage e tirocini part-time nel reparto ricerca e sviluppo Sei uno studente e hai sempre ' +
                'avuto una passione per tutto ciò che è tecnologico? Allora sei nel posto giusto. Lavoriamo ' +
                'quotidianamente a stretto contatto con le università del territorio e se sei uno studente di ' +
                'informatica e vuoi approfondire i tuoi studi in un ambiente [...]',
            eleventyNavigation: {
                key: 'tirocinio-in-informatica',
                title: pageTitle,
                parent: 'lavora-con-noi'
            }
        }
    }

    render(data) {
        return `<main>
            <div class="page-block">
                <section>
                    <h3>Stage e tirocini part-time nel reparto ricerca e sviluppo</h3>
                    <img src="/img/tirocinio-informatica.jpg" alt="" loading="lazy">
                    <p>Sei uno studente e hai sempre avuto una passione per tutto ciò che è tecnologico? Allora sei nel 
                    posto giusto.</p>
                    <p>Lavoriamo quotidianamente a stretto contatto con le università del territorio e se sei uno 
                    studente di informatica e vuoi approfondire i tuoi studi in un ambiente dinamico, giovane e 
                    tecnologico inviaci la tua candidatura per valutare insieme il miglior percorso che possiamo 
                    offrirti!</p>
                    <h4>La tua carriera lavorativa potrebbe iniziare qui!</h4>
                    <p>Inizia il tuo percorso con noi ed entra a far parte fin da subito del team tecnico. Un insieme di
                    persone unite da un'unica passione per la tecnologia! Sarai affiancato da un tutor che ti guiderà 
                    per tutto il tuo percorso e con una preparazione senza eguali con il quale potrai imparare molto di 
                    più di quanto ti aspetti.</p>
                    <h4>Da noi la selezione all'ingresso non è per tutti!</h4>
                    <p>Eh si, ci piace essere chiari fin dall'inizio, ma non ti preoccupare preferiamo parlare con il 
                    codice che con le parole e valutiamo molto positivamente le soft skill, le passioni e le vere reali 
                    potenzialità di ogni singola persona. Per noi le idee e l'impegno contano più dei risultati.</p>
                    <p><strong>Requisiti Mandatori</strong></p>
                    <ul>
                        <li>Laurea triennale completata o in corso in informatica</li>
                        <li>Conoscenza di almeno un linguaggio di programmazione al pari di come si conosce 
                        l'italiano</li>
                        <li>Dimestichezza con almeno un IDE di sviluppo</li>
                        <li>Passione generale per la tecnologia</li>
                        <li>Buona conoscenza della lingua inglese</li>
                    </ul>
                    <p><strong>Requisiti Preferibili</strong></p>
                    <ul>
                        <li>Laurea magistrale completata o in corso</li>
                        <li>Propensione ad essere aggiornato sulle ultime novità</li>
                        <li>Aver utilizzato almeno una volta una console di gioco nella propria vita</li>
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

module.exports = TirocinioInInformatica