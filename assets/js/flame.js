class AsciiFlame {
  constructor(canvas, width, height, speed) {
    this.colors = [' ', '.', ':', '~', '*', 'x', 's', '&', '#', '$']
    this.speed = speed
    this.canvas = canvas
    this.width = width
    this.height = height
    this.initialize()
  }

  initialize() {
    this.fire = Array(this.height)
      .fill()
      .map(() => Array(this.width).fill(0))
    for (let x = 0; x < this.width; x++) {
      this.fire[this.height - 1][x] = this.colors.length - 1
    }
    this.canvas.textContent = ''
  }

  updateState() {
    for (let x = 0; x < this.width; x++) {
      this.fire[this.height - 1][x] = Math.random() > 0.05 ? this.colors.length - 1 : this.colors.length - 2
    }
    for (let y = 1; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const below = this.fire[y][x]
        const decay = Math.floor(Math.random() * (this.height / -5 + 7))
        this.fire[y - 1][Math.floor(x + (Math.random() - 0.5)) % this.width] = below - decay >= 0 ? below - decay : 0
      }
    }
  }

  render() {
    let output = ''
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const value = this.fire[y][x]
        output += this.colors[value] || ' '
      }
      output += '\n'
    }
    this.canvas.textContent = output
  }

  start() {
    this.interval = setInterval(() => {
      this.updateState()
      this.render()
    }, this.speed)
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = undefined
    }
  }

  resize(width, height) {
    this.width = width
    this.height = height
    this.initialize()
  }
}

const lerp = (x, y, a) => x * (1 - a) + y * a
const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a))
const invlerp = (x, y, a) => clamp((a - x) / (y - x))
const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a))
// TODO: avoid using fixed magic numbers and compute dynamically
const widthToChars = (width) => Math.floor(range(364, 1188, 34, 120, width))
const getFlameSize = (containerWidth) => {
  const width = widthToChars(containerWidth)
  const height = Math.max(10, Math.ceil(width / 6))
  return {width, height}
}

document.addEventListener('DOMContentLoaded', () => {
  const pageContainer = document.body.querySelector('div.box')
  const flameSize = getFlameSize(pageContainer.clientWidth)

  const flameCanvas = document.getElementById('flame-canvas')
  const flame = new AsciiFlame(flameCanvas, flameSize.width, flameSize.height, 80)
  flame.start()

  window.addEventListener('resize', () => {
    const flameSize = getFlameSize(pageContainer.clientWidth)
    flame.resize(flameSize.width, flameSize.height)
  })
})
