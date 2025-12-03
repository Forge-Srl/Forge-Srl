const form = (id, name, action, formContent, submittedContent, data) => {
  const replacementId = `${id}-done`
  return `<form id="${id}" class="needs-validation" name="${name}" method="POST" action="${action}">
        ${formContent}
    </form>
    <div id="${replacementId}" style="display: none;">
        ${submittedContent}
    </div>
    ${formScript(id, replacementId, data)}`
}

const inputField = (id, name, type, label, placeholder = label) => {
  if (type === 'textarea') {
    return `<div class="input-wrapper">
            <label for="${id}">${label}</label>
            <textarea required id="${id}" name="${name}" class="form-control" placeholder="${placeholder}"></textarea>
        </div>`
  }

  if (type === 'file') {
    return `<div class="input-wrapper">
            <label for="${id}">${label}</label>
            <button class="form-control" style="flex-grow: 1;" type="button" onclick="document.querySelector('input[name=${name}]').click();">
                <span>${placeholder}</span>
            </button>
            <input required id="${id}" name="${name}" type="${type}" style="display: none;">
        </div>`
  }

  return `<div class="input-wrapper">
        <label for="${id}">${label}</label>
        <input required id="${id}" name="${name}" type="${type}" class="form-control" placeholder="${placeholder}">
    </div>`
}

const submitButton = (text) => {
  return `<button type="submit">
        <span class="spinner" style="display: none" role="status" aria-hidden="true"></span>
        ${text}
    </button>`
}

const formScript = (
  formId,
  formReplacementId,
  data,
) => `<script src="https://www.google.com/recaptcha/api.js?render=${data.form.recaptchaClientKey}"></script>
  <script>
  (() => {
      const form = document.getElementById('${formId}')
      const formReplacement = document.getElementById('${formReplacementId}')
      const submitButton = form.querySelector('button[type=submit]')
      const checkRecaptcha = callback => {
          grecaptcha.ready(function() {
              grecaptcha.execute('${data.form.recaptchaClientKey}', {action: 'submit'})
                  .then(token => callback(null, token))
                  .catch(error => callback(error))
          })
      }
      const lockForm = () => {
          submitButton.disabled = true
          submitButton.classList.add('disabled')
          submitButton.children[0].style.cssText = ''
      }
      const unlockForm = () => {
          submitButton.children[0].style.cssText = 'display: none;'
          submitButton.classList.remove('disabled')
          submitButton.disabled = false
      }
      const fail = () => {
          unlockForm()
          alert('L\\'invio della email è fallito')
      }
      const success = () => {
          form.reset()
          unlockForm()
          form.style.cssText = 'display: none;'
          formReplacement.style.cssText = ''
      }
      form.addEventListener('submit', (event) => {
          event.preventDefault()

          checkRecaptcha((error, token) => {
              if (error) {
                  return
              }

              const request = new XMLHttpRequest()
              const formData = new FormData(form)
              formData.set('recaptcha', token)
              request.open('POST', form.action, true)
              request.onload = function() {
                  console.log(this.status)
                  console.log(this.response)
                  if (this.status >= 200 && this.status < 400) {
                      success()
                  } else {
                      fail()
                  }
              }
              request.onerror = function() { fail() }

              lockForm()
              request.send(formData)
          })
      })
  })()
  </script>`

module.exports = {form, inputField, submitButton}
