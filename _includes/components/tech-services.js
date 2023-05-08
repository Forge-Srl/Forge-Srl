const pageTitle = require('../components/pageTitle')

module.exports = async function(data) {
    return `<main>
            ${pageTitle.call(this, data)}
            <section class="service">
                <div class="container">
                    <div class="title text-center">
                        <h2> ${this.i18n('techServices.mainTitle')}</h2>
                        <p>${this.i18n('techServices.mainSubTitle')}</p>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fas fa-light fa-laptop-code"></i></div>
                                <h3 class="feature-box-title">Web</h3>
                                <p class="feature-box-desc">${this.i18n('techServices.web.description')}</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fa-solid fa-mobile-screen-button"></i></div>
                                <h3 class="feature-box-title">Mobile</h3>
                                <p class="feature-box-desc">${this.i18n('techServices.mobile.description')}</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fa-solid fa-terminal"></i></div>
                                <h3 class="feature-box-title">Back-End</h3>
                                <p class="feature-box-desc">${this.i18n('techServices.backend.description')}</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fa-solid fa-wrench"></i></div>
                                <h3 class="feature-box-title">Software Engineering</h3>
                                <p class="feature-box-desc">${this.i18n('techServices.softwareEngineering.description')}</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fas fa-solid fa-brain"></i></div>
                                <h3 class="feature-box-title">${this.i18n('techServices.innovationAndResearch.title')}</h3>
                                <p class="feature-box-desc">${this.i18n('techServices.innovationAndResearch.description')}</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fa-solid fa-code-pull-request"></i></div>
                                <h3 class="feature-box-title">Open Source</h3>
                                <p class="feature-box-desc">${this.i18n('techServices.openSource.description')}</p>
                            </div>
                        </div>		
                    </div>
                    </div>
                </div>
	        </section>

            <!-- ======================= Action box -->
            <section class="bg-grad p-4 p-sm-5 pattern-overlay-4">
                <div class="container">
                    <div class="d-block all-text-white text-center">
                        <div class="text-center">
                        <p class="blockquote">${this.i18n('techServices.quote')}</p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= End Action box -->

            <!-- ======================= Il nostro approccio -->
            <section class="approccio">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- left -->
                        <div class="col-md-6">
                            ${await this.image('approccio-tech-forge.jpg', 'Forge approccio coding', 'rounded')}
                        </div>
                        <!-- right -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h5 class="text-primary">${this.i18n('techServices.ourApproach.sectionTitle')}</h5>
                            <h2 class="h1">${this.i18n('techServices.ourApproach.sectionSubtitle')}</h2>
                            <p>${this.i18n('techServices.ourApproach.firstChunk')}</p>
                            <p>${this.i18n('techServices.ourApproach.secondChunk')}</p>
                            <p>${this.i18n('techServices.ourApproach.thirdChunk')}</p>
                            <ul class="list-group list-group-borderless list-group-icon-primary-bg mb-4">
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('techServices.ourApproach.list.firstElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('techServices.ourApproach.list.secondElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('techServices.ourApproach.list.thirdElement')}o</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('techServices.ourApproach.list.fourthElement')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= Il nostro approccio End -->                                    

            <!-- ======================= Perché Sceglierci -->
            <section class="pt-0">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- left -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h2 class="h1">${this.i18n('techServices.whyChooseUs.sectionTitle')}</h2>
                            <h4>${this.i18n('techServices.whyChooseUs.sectionSubtitle')}</h4>
                            <ul class="list-group list-group-borderless">
                                <li class="list-group-item"><i class="fa fa-check"></i> ${this.i18n('techServices.whyChooseUs.list.firstElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> ${this.i18n('techServices.whyChooseUs.list.secondElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> ${this.i18n('techServices.whyChooseUs.list.thirdElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> ${this.i18n('techServices.whyChooseUs.list.fourthElement')}</li>
                            </ul>
                        </div>
                        <!-- right -->
                        <div class="col-md-6">
                            ${await this.image('code-tech-forge.jpg', 'Forge Team Tech Coding', 'rounded')}
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= Perché Sceglierci End -->

            <!-- ======================= Action box -->
            <section class="bg-grad p-4 p-sm-5 pattern-overlay-4">
                <div class="container">
                    <div class="d-block all-text-white text-center">
                        <div class="text-center">
                            <h2 class="m-0">${this.i18n('techServices.weHelpYouReachYourGoals.sectionTitle')}</h2>
                            <h4>${this.i18n('techServices.weHelpYouReachYourGoals.sectionSubtitle')}</h4>
                        </div>
                    <a href="${this.i18n('pagesUrl.contactUsLink')}" class="btn btn-white me-3 text-center">${this.i18n('techServices.weHelpYouReachYourGoals.letsTalk')}</a>
                    </div>
                </div>
            </section>
            <!-- ======================= End Action box -->
        </main>`
}