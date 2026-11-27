// Menu mobile: apre/chiude il pannello di navigazione sotto i 1100px (stesso breakpoint del CSS).
// Senza JS il pulsante resta nascosto (vedi `.js .nav-toggle` nel CSS) e i link restano nel footer.
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.site-nav')
  const toggle = nav?.querySelector('.nav-toggle')
  const panel = nav?.querySelector('.nav-links')
  if (!nav || !toggle || !panel) {
    return
  }

  const desktop = window.matchMedia('(min-width: 1100px)')
  const isOpen = () => nav.classList.contains('is-open')

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open)
    document.body.classList.toggle('nav-open', open)
    toggle.setAttribute('aria-expanded', String(open))
    toggle.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu')
  }

  toggle.addEventListener('click', () => setOpen(!isOpen()))

  // Chiude il menu dopo aver scelto una voce (utile anche per i link ad ancora nella stessa pagina)
  panel.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      setOpen(false)
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false)
      toggle.focus()
    }
  })

  // Passando a una viewport desktop il pannello non deve restare "aperto" né bloccare lo scroll
  desktop.addEventListener('change', (event) => {
    if (event.matches) {
      setOpen(false)
    }
  })
})
