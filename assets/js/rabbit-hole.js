;(() => {
  class RabbitHole {
    #containerElement
    #warren
    #fingerPrint

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
      this.#warren = [window.whiteRabbit]
    }

    async loadFingerPrint() {
      if (this.#fingerPrint) {
        return
      }

      const now = Date.now().toString(36)
      const nonce = Math.floor(Math.random() * 36 ** 5).toString(36).padStart(5, '0')
      const ua = window.navigator.userAgent

      const data = JSON.stringify({d: now, n: nonce, u: btoa(ua)})
      const hash = new Uint8Array(await window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(data))).toHex()
      this.#fingerPrint = JSON.stringify({hash, data})
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
            // biome-ignore lint/performance/noDelete: this is exactly what is needed here
            delete window.takePill
            this.#afterRedPill()
            break
          default:
            console.error(`Cannot take ${color} pill`)
        }
      }
      this.#containerElement.innerHTML = `<blockquote><div>
<p>Nessuno di noi è in grado, purtroppo, di descrivere Forge agli altri. Dovrai scoprire con i tuoi occhi che cos'è.<br>È la tua ultima occasione, se rinunci non ne avrai altre.</p>
<ul>
<li><strong>Pillola azzurra</strong>, fine della storia: domani ti sveglierai in camera tua, e crederai a quello che vorrai.</li>
<li><strong>Pillola rossa</strong>, resti nel paese delle meraviglie, e vedrai quant'è profonda la tana del Bianconiglio.</li>
</ul>
<br>
<p>Ti sto offrendo solo la verità, ricordalo. Niente di più.</p>
</div></blockquote>
<br>
<div class="group-2 gap-3">
<button type="button" class="pill red" onclick="takePill('red')">Pillola rossa</button>
<button type="button" class="pill blue" onclick="takePill('blue')">Pillola azzurra</button>
<div>`
    }

    #afterRedPill() {
      this.#warren.push(
        (window.redRabbit = new Rabbit('red', '🔴')),
        (window.greenRabbit = new Rabbit('green', '🟢')),
        (window.blueRabbit = new Rabbit('blue', '🔵')),
        (window.orangeRabbit = new Rabbit('orange', '🟠')),
        (window.yellowRabbit = new Rabbit('yellow', '🟡')),
        (window.purpleRabbit = new Rabbit('purple', '🟣')),
        (window.brownRabbit = new Rabbit('brown', '🟤')),
      )

      const onBeingEatenSymbol = Symbol('onBeingEatenSymbol')
      const messages = [
        '000|SWYgeW91J3JlIHJlYWRpbmcgdGhpcyw=',
        '001|eW91J3ZlIGZvdW5kIG91ciBsaXR0bGUgc2VjcmV0IQ==',
        '010|SXQgbWVhbnMgeW91IGhhdmUgYSBrZWVuIGV5ZQ==',
        '011|YW5kIHRoZSByaWdodCBjdXJpb3NpdHkgdG8gd29yayB3aXRoIHVzLg==',
        '100|VG8gZ2V0IGluIHRvdWNoLCBvcGVuIGFuIGlzc3VlIG9uIG91ciBHaXRIdWIgcmVwb3NpdG9yeSBodHRwczovL2dpdGh1Yi5jb20vRm9yZ2UtU3JsL0ZvcmdlLVNybA==',
        '101|d2l0aCB0aGUgdGl0bGUgIlRvbyBNYW55IFJhYmJpdHMgdG8gQ2hhc2Ui',
        `110|${btoa(`and the message:\n${this.#fingerPrint}`)}`,
        '111|V2UnbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXMgcG9zc2libGUhCuKAlCBUaGUgRm9yZ2UgVGVhbQ==',
      ]
      messages.sort(() => Math.round(Math.random() * 2 - 1))
      const warren = this.#warren

      window.Carrot = class {
        #size = Math.floor(Math.random() * 4) + 1

        get hasAlreadyBeenEaten() {
          return !!this.eaten
        }

        [onBeingEatenSymbol](rabbit) {
          this.eaten = true
          console.log(`%c${rabbit} is eating the carrot`, 'font-style: italic;')
          rabbit.carrotsEaten = (rabbit.carrotsEaten || 0) + this.#size

          const index = warren.findIndex(r => r === rabbit)
          if (index >= 0 && index < messages.length) {
            if (rabbit.carrotsEaten < rabbit) {
              console.log(`${rabbit}: More carrots please`)
            } else {
              console.log(`${rabbit}: Thank you! Here is a hint for you\n${messages[index]}`)
            }
          }
        }
      }

      Rabbit.prototype.feed = function (carrot) {
        if (!(carrot instanceof window.Carrot)) {
          console.error('Rabbits only eat carrots')
          return
        }
        if (carrot.hasAlreadyBeenEaten) {
          console.error('Carrots can be fed only once')
          return
        }
        carrot[onBeingEatenSymbol](this)
      }

      this.#containerElement.innerHTML = '<p>Dalla finestra vedi tanti conigli affamati.<br>Forse è il caso di dar loro delle carote...</p>'
    }
  }

  const rabbitHole = new RabbitHole()
  rabbitHole.loadFingerPrint().then(() => {
    window[Symbol.for('onRabbitHoleLoaded')](rabbitHole)
  })
})()
