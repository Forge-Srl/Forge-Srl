/**
 * Forge Booking Widget
 * Calendario interattivo per prenotare una call gratuita.
 * Genera i prossimi 7 giorni lavorativi (lun-ven), mostra slot orari fissi,
 * poi un form di conferma che invia all'endpoint contactUs.
 */
;(() => {
  'use strict'

  const Slots = ['09:00', '10:30', '14:00', '15:30', '17:00']
  const DowIt = ['DOM', 'LUN', 'MAR', 'MER', 'GIO', 'VEN', 'SAB']
  const MonIt = ['GEN', 'FEB', 'MAR', 'APR', 'MAG', 'GIU', 'LUG', 'AGO', 'SET', 'OTT', 'NOV', 'DIC']

  function getWorkdays(count) {
    const days = []
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    // Se è già pomeriggio (>14:00) parti dal giorno dopo
    if (new Date().getHours() >= 14) d.setDate(d.getDate() + 1)
    while (days.length < count) {
      const dow = d.getDay()
      if (dow !== 0 && dow !== 6) {
        days.push({
          date: new Date(d),
          dow: DowIt[dow],
          num: d.getDate(),
          month: MonIt[d.getMonth()],
        })
      }
      d.setDate(d.getDate() + 1)
    }
    return days
  }

  function formatFull(day, slot) {
    return `${day.dow} ${day.num} ${day.month} alle ${slot}`
  }

  function formatSubject(day, slot) {
    return `[Call gratuita] ${day.dow} ${day.num} ${day.month} · ${slot}`
  }

  function init(container) {
    if (!container) return

    const formAction = container.dataset.action || ''
    const recaptchaKey = container.dataset.recaptcha || ''

    const days = getWorkdays(7)
    let selDay = 0
    let selSlot = 0
    let step = 'calendar' // 'calendar' | 'form' | 'done'

    function render() {
      if (step === 'calendar') renderCalendar()
      else if (step === 'form') renderForm()
      else renderDone()
    }

    function renderCalendar() {
      container.innerHTML = `
        <div class="bw-bar">
          <svg viewBox="0 0 64 96" class="bw-flame" aria-hidden="true">
            <path d="M 32 4 C 28 14, 24 22, 20 30 C 17 26, 14 22, 12 18 C 8 30, 6 44, 8 58 C 9 70, 14 80, 20 84 C 21 80, 23 78, 25 82 C 27 88, 30 92, 33 90 C 35 86, 37 80, 39 80 C 42 84, 46 86, 50 80 C 56 72, 58 58, 54 44 C 52 36, 49 28, 46 22 C 44 28, 42 32, 38 28 C 38 20, 35 12, 32 4 Z" fill="#F08819"/>
          </svg>
          <span class="bw-bar-title">prenota_call.ts</span>
          <span class="bw-bar-sub">15 min · gratis</span>
        </div>
        <div class="bw-body">
          <div class="bw-section-label">SCEGLI UN GIORNO</div>
          <div class="bw-days" id="bw-days"></div>
          <div class="bw-section-label">ORARIO DISPONIBILE</div>
          <div class="bw-slots" id="bw-slots"></div>
          <button class="bw-confirm" id="bw-confirm">
            Prenota · <span id="bw-confirm-label">${formatFull(days[selDay], Slots[selSlot])}</span> →
          </button>
          <div class="bw-footer">
            <span class="bw-tick">✓</span> conferma immediata · disdici quando vuoi
          </div>
        </div>`

      renderDays()
      renderSlots()

      container.querySelector('#bw-confirm').addEventListener('click', () => {
        step = 'form'
        render()
      })
    }

    function renderDays() {
      const grid = container.querySelector('#bw-days')
      grid.innerHTML = days
        .map(
          (d, i) => `
        <button class="bw-day ${i === selDay ? 'bw-selected' : ''}" data-i="${i}" aria-pressed="${i === selDay}" aria-label="${d.dow} ${d.num} ${d.month}">
          <div class="bw-day-dow">${d.dow}</div>
          <div class="bw-day-num">${d.num}</div>
        </button>`,
        )
        .join('')

      grid.querySelectorAll('.bw-day').forEach((btn) => {
        btn.addEventListener('click', () => {
          selDay = Number(btn.dataset.i)
          updateConfirmLabel()
          renderDays()
          renderSlots()
        })
      })
    }

    function renderSlots() {
      const wrap = container.querySelector('#bw-slots')
      wrap.innerHTML = Slots.map(
        (s, i) => `
        <button class="bw-slot ${i === selSlot ? 'bw-selected' : ''}" data-i="${i}" aria-pressed="${i === selSlot}" aria-label="Slot ${s}">
          ${s}
        </button>`,
      ).join('')

      wrap.querySelectorAll('.bw-slot').forEach((btn) => {
        btn.addEventListener('click', () => {
          selSlot = Number(btn.dataset.i)
          updateConfirmLabel()
          renderSlots()
        })
      })
    }

    function updateConfirmLabel() {
      const lbl = container.querySelector('#bw-confirm-label')
      if (lbl) lbl.textContent = formatFull(days[selDay], Slots[selSlot])
    }

    function renderForm() {
      const subject = formatSubject(days[selDay], Slots[selSlot])
      container.innerHTML = `
        <div class="bw-bar">
          <svg viewBox="0 0 64 96" class="bw-flame" aria-hidden="true">
            <path d="M 32 4 C 28 14, 24 22, 20 30 C 17 26, 14 22, 12 18 C 8 30, 6 44, 8 58 C 9 70, 14 80, 20 84 C 21 80, 23 78, 25 82 C 27 88, 30 92, 33 90 C 35 86, 37 80, 39 80 C 42 84, 46 86, 50 80 C 56 72, 58 58, 54 44 C 52 36, 49 28, 46 22 C 44 28, 42 32, 38 28 C 38 20, 35 12, 32 4 Z" fill="#F08819"/>
          </svg>
          <span class="bw-bar-title">prenota_call.ts</span>
          <span class="bw-bar-sub bw-selected-slot">${formatFull(days[selDay], Slots[selSlot])}</span>
        </div>
        <div class="bw-body">
          <button class="bw-back" id="bw-back" aria-label="Torna al calendario">← cambia data/ora</button>
          <form id="bw-form" class="bw-form" method="POST" action="${formAction}" novalidate>
            <input type="hidden" name="subject" value="${subject}">
            <div class="bw-field">
              <label for="bw-name">Nome e azienda</label>
              <input id="bw-name" name="name" type="text" required placeholder="Mario Rossi — Azienda Srl" autocomplete="name">
            </div>
            <div class="bw-field">
              <label for="bw-email">Email di lavoro</label>
              <input id="bw-email" name="from" type="email" required placeholder="mario@azienda.it" autocomplete="email">
            </div>
            <div class="bw-field">
              <label for="bw-msg">Raccontaci il progetto (opzionale)</label>
              <textarea id="bw-msg" name="message" rows="3" placeholder="Due righe su cosa hai in mente…"></textarea>
            </div>
            <button type="submit" class="bw-submit" id="bw-submit">
              <span class="bw-spinner" aria-hidden="true"></span>
              Prenota la call gratuita →
            </button>
            <div id="bw-error" class="bw-error" style="display:none">
              <span class="bw-err-icon">✗</span> qualcosa è andato storto. Riprova o scrivici a <a href="mailto:info@forge.srl">info@forge.srl</a>
            </div>
          </form>
          <div class="bw-footer">
            <span class="bw-tick">✓</span> risposta entro 24h · senza impegno
          </div>
        </div>`

      container.querySelector('#bw-back').addEventListener('click', () => {
        step = 'calendar'
        render()
      })

      const form = container.querySelector('#bw-form')
      const submitBtn = container.querySelector('#bw-submit')
      const errorBox = container.querySelector('#bw-error')

      form.addEventListener('submit', (e) => {
        e.preventDefault()
        if (!form.checkValidity()) {
          form.querySelectorAll(':invalid').forEach((el) => el.reportValidity())
          return
        }
        submitBtn.disabled = true
        submitBtn.classList.add('bw-loading')
        errorBox.style.display = 'none'

        const doSubmit = (token) => {
          const fd = new FormData(form)
          if (token) fd.set('recaptcha', token)

          const xhr = new XMLHttpRequest()
          xhr.open('POST', form.action, true)
          xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 400) {
              step = 'done'
              render()
            } else {
              submitBtn.disabled = false
              submitBtn.classList.remove('bw-loading')
              errorBox.style.display = ''
            }
          }
          xhr.onerror = () => {
            submitBtn.disabled = false
            submitBtn.classList.remove('bw-loading')
            errorBox.style.display = ''
          }
          xhr.send(fd)
        }

        if (recaptchaKey && typeof grecaptcha !== 'undefined') {
          grecaptcha.ready(() => {
            grecaptcha
              .execute(recaptchaKey, {action: 'submit'})
              .then((token) => doSubmit(token))
              .catch(() => doSubmit(null))
          })
        } else {
          doSubmit(null)
        }
      })
    }

    function renderDone() {
      container.innerHTML = `
        <div class="bw-bar">
          <svg viewBox="0 0 64 96" class="bw-flame" aria-hidden="true">
            <path d="M 32 4 C 28 14, 24 22, 20 30 C 17 26, 14 22, 12 18 C 8 30, 6 44, 8 58 C 9 70, 14 80, 20 84 C 21 80, 23 78, 25 82 C 27 88, 30 92, 33 90 C 35 86, 37 80, 39 80 C 42 84, 46 86, 50 80 C 56 72, 58 58, 54 44 C 52 36, 49 28, 46 22 C 44 28, 42 32, 38 28 C 38 20, 35 12, 32 4 Z" fill="#F08819"/>
          </svg>
          <span class="bw-bar-title">prenota_call.ts</span>
          <span class="bw-bar-sub" style="color:#30A46C;">✓ confermata</span>
        </div>
        <div class="bw-body bw-done-body">
          <div class="bw-done-icon">✓</div>
          <div class="bw-done-title">prenotazione inviata.</div>
          <div class="bw-done-sub">Ti confermiamo la call per <strong>${formatFull(days[selDay], Slots[selSlot])}</strong>. Controlla la email — ti arriverà il link alla videocall.</div>
          <div class="bw-footer" style="margin-top:16px;">risposta entro 24h · disdici quando vuoi</div>
        </div>`
    }

    render()
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-booking-widget]').forEach(init)
  })
})()
