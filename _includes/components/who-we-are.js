const pageTitle = require('./pageTitle')
module.exports = async function(data) {
    return `<main>
            ${pageTitle.call(this, data)}
            <section id="chi siamo" class="pb-0">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- left -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h2 class="h1">${this.i18n('whoWeAre.bestExtensionForYourTeam.sectionTitle')}</h2>
                            <h4>${this.i18n('whoWeAre.bestExtensionForYourTeam.sectionSubTitle')}</h4>
                            <p>${this.i18n('whoWeAre.bestExtensionForYourTeam.firstChunk')}</p>
                            <p>${this.i18n('whoWeAre.bestExtensionForYourTeam.secondChunk')}</p>
                            <p>${this.i18n('whoWeAre.bestExtensionForYourTeam.thirdChunk')}</p>
                            <a href="/#servizi" class="btn btn-outline-primary me-3 text-center">${this.i18n('home.discoverOurServices')}</a>
                        </div>
                        <!-- right -->
                        <div class="col-md-6 d-none d-sm-block">
                            ${await this.image('forge-chi-siamo.jpg', 'Chi siamo', 'rounded')}
                        </div>
                    </div>
                </div>
            </section>
            <!-- I Nostri Valori -->
            <section id="valori" class="pt-5">
            <div class="container">	
                <div class="row">
                    <div class="col-sm-12 mt-5 mb-4 text-sm-start text-md-center">
                        <h2 class="h1">${this.i18n('whoWeAre.ourValues.sectionTitle')}</h2>
                    </div>
                    <div class="col-md-4 mt-4">
                        <div class="feature-box f-style-1 h-100 icon-primary">
                            <div class="feature-box-icon"><i class="fa-solid fa-glasses"></i></div>
                            <h3 class="feature-box-title">Vision</h3>
                            <h5>${this.i18n('whoWeAre.ourValues.vision.sectionSubTitle')}</h5>
                            <p class="feature-box-desc">${this.i18n('whoWeAre.ourValues.vision.firstChunk')}</p>
                        </div>
                    </div>
                    <div class="col-md-4 mt-4">
                        <div class="feature-box f-style-1 h-100 icon-primary">
                            <div class="feature-box-icon"><i class="fa-regular fa-handshake"></i></div>
                            <h3 class="feature-box-title">Mission</h3>
                            <h5>${this.i18n('whoWeAre.ourValues.mission.sectionSubTitle')}</h5>
                            <p class="feature-box-desc">${this.i18n('whoWeAre.ourValues.mission.firstChunk')}</p>
                        </div>
                    </div>
                    <div class="col-md-4 mt-4">
                        <div class="feature-box f-style-1 h-100 icon-primary">
                            <div class="feature-box-icon"><i class="fa-regular fa-star"></i></div>
                            <h3 class="feature-box-title">North Star</h3>
                            <h5>${this.i18n('whoWeAre.ourValues.northStar.sectionSubTitle')}?</h5>
                            <p class="feature-box-desc">${this.i18n('whoWeAre.ourValues.northStar.firstChunk')}</p>
                        </div>
                    </div>
                </div>  
            </div>
            </section>
            <!-- I Nostri Valori End --> 

            <!-- ======================= Action box -->
            <section class="bg-grad p-4 p-sm-5 pattern-overlay-4">
                <div class="container">
                    <div class="d-block all-text-white text-center">
                        <div class="text-center">
                            <h2 class="m-0">${this.i18n('whoWeAre.doYouShareOurValues.sectionTitle')}?</h2>
                            <h4>${this.i18n('whoWeAre.doYouShareOurValues.firstChunk')}</h4>
                        </div>
                        <a href="/assets/documents/forge-company-profile.pdf" target="_blank" class="btn btn-white me-3 text-center">${this.i18n('whoWeAre.doYouShareOurValues.pdfLink')}</a>
                    </div>
                </div>
            </section>
            <!-- ======================= End Action box -->

            <!-- ======================= Divisione del team  -->
            <section id="team" class="pt-5 py-5">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- right -->
                        <div class="col-md-6">
                            <h5 class="text-primary">${this.i18n('whoWeAre.theTeam.sectionTitle')}</h5>
                            <h2 class="h1">${this.i18n('whoWeAre.theTeam.sectionSubTitle')}</h2>
                            <p>${this.i18n('whoWeAre.theTeam.firstChunk')}</p>
                            <p>${this.i18n('whoWeAre.theTeam.secondChunk')}</p>
                            <p>${this.i18n('whoWeAre.theTeam.thirdChunk')}</p>
                            <a href="${this.i18n('pagesUrl.innovationLink')}" class="btn btn-outline-primary me-3 text-center">${this.i18n('whoWeAre.theTeam.projectLink')}</a>
                        </div>
                        <!-- left -->
                        <div class="col-md-6">
                            ${await this.image('team-chi-siamo.jpg', 'Suddivisione del team Forge', 'rounded')}
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= Divisione del team End -->                                    

            <!-- ======================= Action box -->
            <section class="bg-grad p-4 p-sm-5 pattern-overlay-4">
                <div class="container">
                    <div class="d-block all-text-white text-center">
                        <div class="text-center">
                            <h2 class="m-0">${this.i18n('whoWeAre.weHelpYouReachYourGoals.sectionTitle')}</h2>
                            <h4>${this.i18n('whoWeAre.weHelpYouReachYourGoals.firstChunk')}</h4>
                        </div>
                    <a href="${this.i18n('pagesUrl.contactUs')}" class="btn btn-white me-3 text-center">${this.i18n('whoWeAre.weHelpYouReachYourGoals.letsTalk')}</a>
                    </div>
                </div>
            </section>
            <!-- ======================= End Action box -->
        </main>`
}