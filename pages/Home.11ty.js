class MensaDiffusa {
    data() {
        return {
            pageTitle: 'Mensa diffusa',
            templateEngineOverride: '11ty.js,md',
        }
    }

    render(data) {
        return `### Questo sitozzo raccoglie le informazioni sulla mensa diffusa...`
    }
}

module.exports = MensaDiffusa