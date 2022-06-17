module.exports = function (formId, formReplacementId, data) {
    return `<script src="https://www.google.com/recaptcha/api.js?render=${data.form.recaptchaClientKey}"></script>
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
            submitButton.classList.add('disabled')
            submitButton.children[0].style.cssText = ''
        }
        const unlockForm = () => {
            submitButton.children[0].style.cssText = 'display: none;'
            submitButton.classList.remove('disabled')
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
}