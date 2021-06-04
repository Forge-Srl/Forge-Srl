class NotFound {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Forge',
            pageDescription: '',
            // Force output page to be /404.html instead of /404/index.html!
            permalink: '/404.html',
            eleventyExcludeFromCollections: true
        }
    }

    render(data) {
        return `<main>
            <div class="page-block">
                <div>
                    <style>
                    .wrapper {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: flex-end;
                        margin: 0 calc(var(--size-l) * 3);
                        padding: var(--size-l) var(--size-m) 0 var(--size-m);
                        border-bottom: 1px solid var(--color-text);
                    }
                    .wrapper > * {
                        flex-grow: 1;
                        flex-basis: 0;
                        margin: 0 var(--size-l);
                    }
                    .wrapper h1 {
                        text-align: right;
                        align-self: center;
                    }
                    .wrapper img {
                        display: block;
                        max-width: max(min(28vw, 30em), 15em);
                    }
                    h2.message {
                        text-align: center;
                        padding: var(--size-m) 0;
                        margin: 0 calc(var(--size-l) * 3);
                    }
                    @media screen and (max-width: 640px) {
                        .wrapper, h2.message {
                            margin: 0 var(--size-l);
                        }
                        .wrapper h1 {
                            text-align: center;
                        }
                        .wrapper img {
                            margin: var(--size-m) auto 0;
                        }
                    }
                    </style>
                    <div class="wrapper">
                        <h1><strong>Errore<br>404</strong></h1>
                        <div><img src="/img/john-travolta.gif" loading="lazy" alt="John Travolta meme"></div>
                    </div>
                    <h2 class="message">La pagina richiesta non è disponibile</h2>
                </div>
            </div>
        </main>`
    }
}

module.exports = NotFound