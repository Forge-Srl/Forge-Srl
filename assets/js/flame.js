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
const widthToChars = (width) => Math.floor(range(364, 1188, 34, 120, width))

const getFooterFlameSize = (canvas) => {
  const probe = document.createElement('span')
  probe.style.cssText = 'position:absolute;visibility:hidden;white-space:pre'
  probe.textContent = 'X'
  canvas.appendChild(probe)
  const charW = probe.getBoundingClientRect().width || 9.6
  canvas.removeChild(probe)
  const width = Math.max(20, Math.floor(document.body.clientWidth / charW))
  const height = Math.max(6, Math.ceil(width / 14))
  return {width, height}
}

const getHeroFlameSize = (section, canvas) => {
  // Probe is appended to the canvas so it inherits the exact same font
  const probe = document.createElement('span')
  probe.style.cssText = 'position:absolute;visibility:hidden;white-space:pre'
  probe.textContent = 'X'
  canvas.appendChild(probe)
  const charW = probe.getBoundingClientRect().width || 9.6
  canvas.removeChild(probe)

  const width = Math.max(20, Math.floor(section.offsetWidth / charW))
  const height = Math.max(6, Math.ceil(width / 14))
  return {width, height}
}

document.addEventListener('DOMContentLoaded', () => {
  // ── Footer flame ──────────────────────────────────────────────
  const flameCanvas = document.getElementById('flame-canvas')
  if (flameCanvas) {
    const flameSize = getFooterFlameSize(flameCanvas)
    const flame = new AsciiFlame(flameCanvas, flameSize.width, flameSize.height, 80)
    flame.start()

    window.addEventListener('resize', () => {
      const size = getFooterFlameSize(flameCanvas)
      flame.resize(size.width, size.height)
    })
  }

  // ── Hero background flame ─────────────────────────────────────
  const heroCanvas = document.getElementById('hero-flame-canvas')
  if (heroCanvas) {
    const heroSection = heroCanvas.closest('section') ?? heroCanvas.parentElement
    // Wait one rAF so the section has its final painted dimensions
    requestAnimationFrame(() => {
      const size = getHeroFlameSize(heroSection, heroCanvas)
      const heroFlame = new AsciiFlame(heroCanvas, size.width, size.height, 100)
      heroFlame.start()

      window.addEventListener('resize', () => {
        const s = getHeroFlameSize(heroSection, heroCanvas)
        heroFlame.resize(s.width, s.height)
      })
    })
  }
})
