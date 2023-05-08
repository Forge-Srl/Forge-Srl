const pageTitle = require('../components/pageTitle')

module.exports = async function(data) {
    return `<main>
            ${pageTitle.call(this, data)}
            <section class="service">
                <div class="container">
                    <div class="title text-center">
                        <h2>${this.i18n('marketingServices.ourMarketingServices.sectionTitle')}</h2>
                        <p>${this.i18n('marketingServices.ourMarketingServices.sectionSubtitle')}</p>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fas fa-light fa-chess"></i></div>
                                <h3 class="feature-box-title">${this.i18n('marketingServices.strategy.title')}</h3>
                                <p class="feature-box-desc">${this.i18n('marketingServices.strategy.description')}</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fas fa-light fa-tags"></i></div>
                                <h3 class="feature-box-title">Branding Online</h3>
                                <p class="feature-box-desc">${this.i18n('marketingServices.brandingOnline.description')}</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fas fa-light fa-filter"></i></div>
                                <h3 class="feature-box-title">Inbound Marketing</h3>
                                <p class="feature-box-desc">${this.i18n('marketingServices.inboundMarketing.description')}</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fa-brands fa-safari"></i></div>
                                <h3 class="feature-box-title">SEO</h3>
                                <p class="feature-box-desc">${this.i18n('marketingServices.SEO.description')}</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fas fa-light fa-bullhorn"></i></div>
                                <h3 class="feature-box-title">Paid Advertising</h3>
                                <p class="feature-box-desc">${this.i18n('marketingServices.paidAdvertising.description')}</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="feature-box h-100 icon-grad">
                                <div class="feature-box-icon"><i class="fas fa-light fa-thumbs-up"></i></div>
                                <h3 class="feature-box-title">Social Marketing</h3>
                                <p class="feature-box-desc">${this.i18n('marketingServices.socialMarketing.description')}</p>
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
                            <h2 class="m-0">${this.i18n('marketingServices.haveWeIntriguedYou.sectionTitle')}</h2>
                            <h4>${this.i18n('marketingServices.haveWeIntriguedYou.sectionSubtitle')}</h4>
                        </div>
                        <a href="/assets/documents/forge-presentazione-marketing.pdf" target="_blank" class="btn btn-white me-3 text-center">${this.i18n('marketingServices.downloadThePresentation')}</a>
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
                            ${await this.image('forge-marketing2.jpg', 'Forge approccio marketing', 'rounded')}
                        </div>
                        <!-- right -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h5 class="text-primary">${this.i18n('marketingServices.ourApproach.sectionTitle')}</h5>
                            <h2 class="h1">${this.i18n('marketingServices.ourApproach.sectionSubtitle')}</h2>
                            <p>${this.i18n('marketingServices.ourApproach.firstChunk')}</p>
                            <p>${this.i18n('marketingServices.ourApproach.secondChunk')}</p>
                            <ul class="list-group list-group-borderless list-group-icon-primary-bg mb-4">
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('marketingServices.ourApproach.list.firstElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('marketingServices.ourApproach.list.secondElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('marketingServices.ourApproach.list.thirdElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('marketingServices.ourApproach.list.fourthElement')}</li>
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
                            <h2 class="h1">${this.i18n('marketingServices.whyChooseUs.sectionTitle')}</h2>
                            <h4>${this.i18n('marketingServices.whyChooseUs.sectionSubtitle')}</h4>
                            <ul class="list-group list-group-borderless">
                                <li class="list-group-item"><i class="fa fa-check"></i> ${this.i18n('marketingServices.whyChooseUs.list.firstElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> V${this.i18n('marketingServices.whyChooseUs.list.secondElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> ${this.i18n('marketingServices.whyChooseUs.list.thirdElement')}/li>
                            </ul>
                        </div>
                        <!-- right -->
                        <div class="col-md-6">
                            ${await this.image('forge-marketing.jpg', 'Forge team marketing', 'rounded')}
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
                            <h2 class="m-0">${this.i18n('marketingServices.weHelpYouReachYourGoals.sectionTitle')}</h2>
                            <h4>${this.i18n('marketingServices.weHelpYouReachYourGoals.sectionSubtitle')}</h4>
                        </div>
                    <a href="${this.i18n('pagesUrl.contactUsLink')}" class="btn btn-white me-3 text-center">${this.i18n('marketingServices.weHelpYouReachYourGoals.letsTalk')}</a>
                    </div>
                </div>
            </section>
            <!-- ======================= End Action box -->

        </main>`
}
