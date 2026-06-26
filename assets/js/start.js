const absoluteUrl = (relative) => new URL(relative, window.location.href).toString()
const advertiser = (lines) => {
  const maxLength = Math.max(...lines.map((l) => l.length))
  console.log('')
  console.log(`%c+${'-'.repeat(maxLength + 2)}+`, 'font-family: monospace;')
  lines.forEach((line) => {
    console.log(`%c| ${line.padEnd(maxLength, ' ')} |`, 'font-family: monospace;')
  })
  console.log(`%c+${'-'.repeat(maxLength + 2)}+`, 'font-family: monospace;')
  console.log('')
}
class Rabbit {
  static #followed = false
  static #instanceCounter = 0
  #id

  constructor(color, icon) {
    this.#id = Math.pow(2, Rabbit.#instanceCounter++)
    this.color = color
    this.icon = icon
  }

  get [Symbol.toStringTag]() {
    return 'Rabbit'
  }

  // This is needed inside the rabbit hole
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return `🐇${this.icon}`
    }
    if (hint === 'number') {
      return this.#id
    }
    return false
  }

  follow() {
    if (this.color !== 'white') {
      console.error('You cannot follow this rabbit')
      return
    }

    if (Rabbit.#followed) {
      console.warn('Stop chasing rabbits!')
      return
    }
    Rabbit.#followed = true

    console.log(`Following the ${this.color} rabbit...`)
    const rabbitHoleScriptElement = document.createElement('script')
    rabbitHoleScriptElement.src = absoluteUrl('/assets/js/rabbit-hole.js')
    document.body.append(rabbitHoleScriptElement)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const heroLogo = document.getElementById('hero-logo')
  if (heroLogo) {
    document.body.classList.add('has-hero-logo')
    const obs = new IntersectionObserver(
      ([entry]) => {
        document.body.classList.toggle('hero-logo-scrolled', !entry.isIntersecting)
      },
      {threshold: 0},
    )
    obs.observe(heroLogo)
  }
  console.log('%c{FORGE}', 'font-size: 6em; font-family: monospace; color: #F08819')
  advertiser(['Vuoi lavorare con noi?', absoluteUrl('/lavora-con-noi')])
  // Using a symbol to make sure this function does not appear in dev tools suggestions
  window[Symbol.for('onRabbitHoleLoaded')] = (rabbitHole) => {
    delete window[Symbol.for('onRabbitHoleLoaded')]
    rabbitHole.start()
    console.log('You found the rabbit hole!')
  }
  window.whiteRabbit = new Rabbit('white', '⚪')
  console.log('%cFollow the `whiteRabbit` out of the `window`...', 'font-family: monospace; font-style: italic;')
})
