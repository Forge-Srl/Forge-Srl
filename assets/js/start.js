const absoluteUrl = (relative) => new URL(relative, window.location.href).toString()
const advertiser = (lines) => {
    const maxLength = Math.max(...lines.map(l => l.length))
    console.log('')
    console.log(`%c+${'-'.repeat(maxLength+2)}+`, 'font-family: monospace;')
    lines.forEach(line => {
        console.log(`%c| ${line.padEnd(maxLength, ' ')} |`, 'font-family: monospace;')
    })
    console.log(`%c+${'-'.repeat(maxLength+2)}+`, 'font-family: monospace;')
    console.log('')
}
class Rabbit {
    static #followed = false

    constructor(color) {
        this.color = color
    }

    follow() {
        if (this.color !== 'white') {
            console.warn('Stop chasing rabbits!')
            return
        }

        if (this.constructor.#followed) {
            return
        }
        this.constructor.#followed = true

        console.log(`Following the ${this.color} rabbit...`)
        const rabbitHoleScriptElement = document.createElement('script')
        rabbitHoleScriptElement.src = absoluteUrl('/assets/js/rabbit-hole.js')
        document.body.append(rabbitHoleScriptElement)
    }

    // Using a symbol to make sure thie method does not appear in dev tools suggestions
    [Symbol.for('onRabbitHoleLoaded')](rabbitHole) {
        rabbitHole.start()
        console.log('You found the rabbit hole!')
    }
}

document.addEventListener("DOMContentLoaded", function() {
    console.log('%c{FORGE}', 'font-size: 6em; font-family: monospace; color: #F08819')
    advertiser([
        'Vuoi lavorare con noi?',
        absoluteUrl('/lavora-con-noi'),
    ])
    window.whiteRabbit = new Rabbit('white')
    console.log('%cFollow the `whiteRabbit` out of the `window`...', 'font-family: monospace; font-style: italic;')
})
