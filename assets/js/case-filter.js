/**
 * Forge Case Study Filter
 * Filtra i case study per ambito. La barra dei filtri è nascosta lato server
 * (attributo hidden) e viene rivelata qui: senza JS non compaiono controlli morti.
 */
;(() => {
  'use strict'

  const filter = document.querySelector('[data-sector-filter]')
  const list = document.querySelector('[data-case-list]')
  if (!filter || !list) {
    return
  }

  const chips = Array.from(filter.querySelectorAll('.sector-chip'))
  const cards = Array.from(list.querySelectorAll('.cs-card'))
  const empty = document.querySelector('[data-case-empty]')
  if (chips.length === 0 || cards.length === 0) {
    return
  }

  function select(sector) {
    chips.forEach((chip) => {
      const active = chip.dataset.sector === sector
      chip.classList.toggle('is-active', active)
      chip.setAttribute('aria-pressed', String(active))
    })

    let visible = 0
    cards.forEach((card) => {
      const show = sector === 'tutti' || card.dataset.sector === sector
      card.hidden = !show
      if (show) {
        visible++
      }
    })

    if (empty) {
      empty.hidden = visible > 0
    }
  }

  chips.forEach((chip) => {
    chip.addEventListener('click', () => select(chip.dataset.sector))
  })

  filter.hidden = false
})()
