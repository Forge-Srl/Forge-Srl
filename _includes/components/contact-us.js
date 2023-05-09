const pageTitle = require('../components/pageTitle')
const formScript = require('../components/formScript')

module.exports =  async function(data) {
    return `<main>
            ${pageTitle.call(this, data)}
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 text-center mb-4">
                            <div class="title text-center">
                                <h2>${this.i18n('contactUs.howCanWeHelp.sectionTitle')}</h2>
                                <p>${this.i18n('contactUs.howCanWeHelp.firstChunk')}</p>
                                <p>${this.i18n('contactUs.howCanWeHelp.secondChunk')}</p>
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
                                    <h5 class="mb-2">${this.i18n('contactUs.contacts.address')}</h5>
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
                                    <h5 class="mb-2">${this.i18n('contactUs.contacts.phone')}</h5>
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
                                <h3>${this.i18n('contactUs.haveAProjectInMind.sectionTitle')}</h3>
                                <p>${this.i18n('contactUs.haveAProjectInMind.firstChunk')}</p>
                                <form id="contact-form" class="needs-validation" name="contactform" method="POST" action="${data.form.url.contactUs()}">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <input required id="con-name" name="name" type="text" class="form-control" placeholder="Name">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <input required id="con-email" name="from" type="email" class="form-control" placeholder="E-mail">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <input required id="con-subject" name="subject" type="text" class="form-control" placeholder="Subject">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="input-group">
                                                <textarea required id="con-message" name="message" cols="40" rows="6" class="form-control" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12 d-grid">
                                            <button class="btn btn-primary m-0" type="submit">
                                                <span class="spinner-border spinner-border-sm" style="display: none;" role="status" aria-hidden="true"></span>
                                                <span>${this.i18n('contactUs.send')}</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div id="contact-form-done" style="display: none;">
                                    <h4 class="text-center">${this.i18n('contactUs.thankYouForContactingUs')}</h4>
                                </div>
                                ${formScript.call(this, 'contact-form', 'contact-form-done', data)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>`
}