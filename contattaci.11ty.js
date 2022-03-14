const pageTitle = require('./_includes/components/pageTitle')

class Home {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Forge - Contattaci',
            pageDescription: 'Contattaci se sei interessato, vuoi informazioni o vuoi farci sapere la tua opinione. Un nostro incaricato ti risponderà al più presto!',
            eleventyNavigation: {
                key: 'contattaci',
                title: 'Contattaci'
            }
        }
    }

    render(data) {
        const recaptchaClientKey = '6Lc06DAbAAAAAO87U0h1atSDthKftgqo8p1bPOyl'
        const contactFormUrl = 'https://us-central1-forge-srl.cloudfunctions.net/contactUs'
        // For local test:
        // contactFormUrl = 'http://localhost:5001/forge-srl/us-central1/contactUs'

        return `<main>
            ${pageTitle.call(this, data)}
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-8 mx-auto">
                            <div class="title text-center">
                                <h2>Come possiamo aiutarti?</h2>
                                <p>Il modo migliore per comprendere le tue esigenze o rispondere ai tuoi dubbi è 
                                parlarne! Mandaci una mail, chiamaci oppure compila il form qui sotto.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row g-4">
                        <div class="col-md-3">
                            <div class="contact-box d-flex flex-column h-100 bg-overlay-dark-7 px-3 py-4" 
                                 style="background:url('/assets/images/contattaci-forge.jpg') no-repeat; background-size: cover; background-position: center center;">
                                <!-- Phone -->
                                <div class="all-text-white mb-4">
                                    <div class="fs-4"><i class="ti-map-alt"></i></div>
                                    <h5 class="mb-2">Indirizzo</h5>
                                    <p>${data.forge.contacts.address}</p>
                                </div>
                                <!-- Email -->
                                <div class="all-text-white mb-4">
                                    <div class="fs-4"><i class="ti-email"></i></div>
                                    <h5 class="mb-2">E-mail</h5>
                                    <p>${data.forge.contacts.info}</p>
                                </div>
                                <!-- Phone -->
                                <div class="all-text-white">
                                    <div class="fs-4"><i class="ti-headphone-alt"></i></div>
                                    <h5 class="mb-2">Telefono</h5>
                                    <p class="mb-0">${data.forge.contacts.phone}</p>
                                </div>
                            </div>
                        </div>
                        <!-- google map -->
                        <div class="col-md-3">
                            <div class="h-100">
                                <iframe class="w-100 h-100 grayscale rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.4928366116674!2d8.821423081725039!3d45.821414609655335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47867e2f70fdb84f%3A0x67415f1109c8090e!2sVia%20Sempione%2C%2014%2C%2021100%20Varese%20VA!5e0!3m2!1sen!2sit!4v1645632353632!5m2!1sen!2sit" style="border:0;" aria-hidden="false" tabindex="0"></iframe>	
                            </div>
                        </div>
                        <!-- contact form -->
                        <div class="col-md-6">
                            <div class="h-100">
                                <h3>Hai un progetto in mente?</br>Realizziamolo insieme!</h3>
                                <p>Mettiti in contatto con noi per capire, senza alcun impegno, come possiamo esserti d'aiuto nello sviluppo del tuo progetto</p>
                                <form class="contact-form needs-validation" id="contact-form" name="contactform" method="POST" action="${contactFormUrl}">
                                    <!-- Main form -->
                                    <div class="row">
                                        <div class="col-md-6">
                                            <!-- name -->
                                            <div class="mb-3 position-relative">
                                                <input required id="con-name" name="name" type="text" class="form-control" placeholder="Name">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <!-- email -->
                                            <div class="mb-3 position-relative">
                                                <input required id="con-email" name="from" type="email" class="form-control" placeholder="E-mail">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <!-- Subject -->
                                            <div class="mb-3 position-relative">
                                                <input required id="con-subject" name="subject" type="text" class="form-control" placeholder="Subject">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <!-- Message -->
                                            <div class="mb-3 position-relative">
                                                <textarea required id="con-message" name="message" cols="40" rows="6" class="form-control" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <!-- submit button -->
                                        <div class="col-md-12 d-grid">
                                            <button class="btn btn-dark m-0" type="submit">
                                                <span class="spinner-border spinner-border-sm" style="display: none;" role="status" aria-hidden="true"></span>
                                                <span>Invia</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <script src="https://www.google.com/recaptcha/api.js?render=${recaptchaClientKey}"></script>
                                <script>
                                    const form = document.getElementById('contact-form')
                                    const submitButton = form.getElementsByTagName('button')[0]
                                    const checkRecaptcha = callback => {
                                        grecaptcha.ready(function() {
                                            grecaptcha.execute('${recaptchaClientKey}', {action: 'submit'})
                                                .then(token => callback(null, token))
                                                .catch(error => callback(error))
                                        })
                                    }
                                    const lockForm = () => {
                                        submitButton.classList.add('disabled')
                                        submitButton.children[0].style = ''
                                    }
                                    const unlockForm = () => {
                                        submitButton.children[0].style = 'display: none;'
                                        submitButton.classList.remove('disabled')
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
                                            const fail = () => {
                                                unlockForm()
                                                alert('L\\'invio della email è fallito')
                                            }
                                            const success = () => {
                                                form.reset()
                                                unlockForm()
                                            }
                                        
                                            request.open('POST', form.action, true)
                                            request.onload = function() {
                                                if (this.status >= 200 && this.status < 400) {
                                                    success()
                                                } else {
                                                    fail()
                                                }
                                            }
                                            request.onerror = function() { fail() }
                                            
                                            lockForm()
                                            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
                                            request.send(new URLSearchParams(formData))
                                        })
                                    })
                                </script>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>`
    }
}

module.exports = Home