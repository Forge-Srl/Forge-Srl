class Home {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Trasformiamo le idee di oggi nei prodotti di domani',
        }
    }

    render(data) {
        return `<h1>${data.pageTitle}</h1>
                ${[...new Array(1000)].map(() => `filler<br>`).join('')}`
    }
}

module.exports = Home