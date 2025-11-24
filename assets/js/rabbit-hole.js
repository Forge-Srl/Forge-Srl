;(() => {
  class RabbitHole {
    #containerElement

    constructor() {
      const cssLinkElement = document.createElement('link')
      cssLinkElement.rel = 'stylesheet'
      cssLinkElement.type = 'text/css'
      cssLinkElement.href = '/assets/css/rabbit-hole.css'
      document.head.appendChild(cssLinkElement)

      const overlayElement = document.createElement('div')
      overlayElement.classList.add('rabbit-hole-overlay')

      const containerElement = document.createElement('div')
      containerElement.classList.add('box')
      containerElement.style = 'width: var(--terminal-width); box-sizing: content-box;'
      overlayElement.appendChild(containerElement)

      document.body.style.overflow = 'hidden'
      document.body.appendChild(overlayElement)

      this.#containerElement = containerElement
    }

    start() {
      window.takePill = (color) => {
        // Since this function is exposed to the curious we allow more definitions of blue and red other than
        // the one used in the code itself.
        switch (color) {
          case 'blue':
          case '#0000ff':
          case '#0000FF':
            window.location.href = '/'
            break
          case 'red':
          case '#ff0000':
          case '#FF0000':
            this.#afterRedPill()
            break
          default:
            console.error(`Cannot take ${color} pill`)
        }
      }
      this.#containerElement.innerHTML = `<blockquote>
                    <p>
                    Nessuno di noi è in grado, purtroppo, di descrivere Forge agli altri. Dovrai scoprire con i tuoi occhi che cos'è.<br>
                    È la tua ultima occasione, se rinunci non ne avrai altre.
                    </p>
                    <ul>
                    <li><strong>Pillola azzurra</strong>, fine della storia: domani ti sveglierai in camera tua, e crederai a quello che vorrai.</li>
                    <li><strong>Pillola rossa</strong>, resti nel paese delle meraviglie, e vedrai quant'è profonda la tana del Bianconiglio.</li>
                    </ul>
                    <br>
                    <p>Ti sto offrendo solo la verità, ricordalo. Niente di più.</p>
                </blockquote>
                <br>
                <div class="group-2 gap-3">
                    <button type="button" class="pill red" onclick="takePill('red')">Pillola rossa</button>
                    <button type="button" class="pill blue" onclick="takePill('blue')">Pillola azzurra</button>
                <div>`
    }

    #afterRedPill() {
      // TODO
      this.#containerElement.innerHTML = ''
      console.log('TODO')
    }
  }

  const rabbitHole = new RabbitHole()
  window.whiteRabbit[Symbol.for('onRabbitHoleLoaded')](rabbitHole)
})()
