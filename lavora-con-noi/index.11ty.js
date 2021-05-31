class LavoraConNoi {
    data() {
        const pageTitle = 'Lavora con noi'

        return {
            layout: 'layout.11ty.js',
            pageTitle: pageTitle,
            pageDescription: 'Lavora con noi Sei uno studente in cerca di un tirocinio o hai già esperienza nel mondo ' +
                'del lavoro e hai deciso di voltare pagina? Allora dai spazio ad una nuova opportunità in un ambiente ' +
                'giovane, dinamico ed altamente tecnologico e guarda tra le nostre proposte di collaborazione. Quali ' +
                'sono le nostre caratteristiche principali? Alta [...]',
            eleventyNavigation: {
                key: 'lavora-con-noi',
                title: pageTitle,
                parent: 'home'
            }
        }
    }

    render(data) {
        return `<main>
            <div class="page-block">
                <section>
                    <h3>Lavora con noi</h3>
                    <p>Sei uno studente in cerca di un tirocinio o hai già esperienza nel mondo del lavoro e hai deciso 
                    di voltare pagina?</p>
                    <p>Allora dai spazio ad una nuova opportunità in un ambiente giovane, dinamico ed altamente 
                    tecnologico e guarda tra le nostre proposte di collaborazione.</p>
                    <p>Quali sono le nostre caratteristiche principali?</p>
                    <ul>
                        <li>Alta competenza tecnologica</li>
                        <li>Tecnologie all'avanguardia e sempre aggiornate</li>
                        <li>Metodologie di lavoro Agile e Lean</li>
                        <li>Ore di studio e formazione in azienda</li>
                        <li>Spazi di co-working con altre realtà giovani e dinamiche</li>
                        <li>Smart working con orari di lavoro flessibili</li>
                        <li>Free coffee!</li>
                    </ul>
                </section>
                <section>
                    <h3>Posizioni aperte</h3>
                    <ul>${data.collections['posizioni'].map(page => `<li><a href="${page.url}">${page.data.pageTitle}</a></li>`).join('')}</ul>
                </section>
                <section>
                    <h3>Stage universitari</h3>
                    <ul>${data.collections['stage'].map(page => `<li><a href="${page.url}">${page.data.pageTitle}</a></li>`).join('')}</ul>
                </section>
            </div>
        </main>`
    }
}

module.exports = LavoraConNoi