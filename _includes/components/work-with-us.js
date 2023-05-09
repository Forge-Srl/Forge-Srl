const pageTitle = require('../../_includes/components/pageTitle')

module.exports = async function(data)  {
    return `<main>
            ${pageTitle.call(this, data)}
            <!-- ======================= Perché Forge -->
            <section class="pt-0">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- left -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h2 class="h1">${this.i18n('workWithUs.whyForge.sectionTitle')}</h2>
                            <h4>${this.i18n('workWithUs.whyForge.sectionSubTitle')}</h4>
                            <p>${this.i18n('workWithUs.whyForge.firstChunk')}</p>
                            <p>${this.i18n('workWithUs.whyForge.secondChunk')}</p>
                        </div>
                        <!-- right -->
                        <div class="col-md-6">
                            ${await this.image('forge-lavora-con-noi1.jpg', 'Forge team marketing', 'rounded')}
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= Perché Forge End -->

            <!-- ======================= Cit -->
            <section class="bg-grad p-4 p-sm-5 pattern-overlay-4">
                <div class="container">
                    <div class="d-block all-text-white text-center">
                        <div class="text-center">
                        <p class="blockquote">${this.i18n('workWithUs.quote')}</p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= Cit End -->

            <!-- ======================= Il lavoro in Forge -->
            <section class="approccio">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- left -->
                        <div class="col-md-6">
                            ${await this.image('forge-lavora-con-noi2.jpg', 'Forge approccio marketing', 'rounded')}
                        </div>
                        <!-- right -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h5 class="text-primary">${this.i18n('workWithUs.workingAtForge.sectionTitle')}</h5>
                            <h2 class="h1">${this.i18n('workWithUs.workingAtForge.sectionSubTitle')}</h2>
                            <p>${this.i18n('workWithUs.workingAtForge.firstChunk')}</p>
                            <p>${this.i18n('workWithUs.workingAtForge.secondChunk')}</p>
                            <ul class="list-group list-group-borderless">
                                <li class="list-group-item"><i class="fa fa-check"></i> ${this.i18n('workWithUs.workingAtForge.list.firstElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> ${this.i18n('workWithUs.workingAtForge.list.secondElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> ${this.i18n('workWithUs.workingAtForge.list.thirdElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i> ${this.i18n('workWithUs.workingAtForge.list.fourthElement')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= Il lavoro in Forge End -->                                    

           <!-- ======================= La nostra filosofia -->
            <section class="service">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-8 mx-auto">
                            <div class="title text-center">
                                <h2>${this.i18n('workWithUs.ourPhilosophy.sectionTitle')}</h2>
                                <p class="mb-0">${this.i18n('workWithUs.ourPhilosophy.sectionSubTitle')}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 mt-30">
                            <div class="feature-box f-style-2 icon-grad h-100">
                                <div class="feature-box-icon"><i class="fas fa-light fa-fire"></i></div>
                                <h3 class="feature-box-title">${this.i18n('workWithUs.ourPhilosophy.enthusiasm.title')}</h3>
                                <p class="feature-box-desc">${this.i18n('workWithUs.ourPhilosophy.enthusiasm.content')}</p>
                            </div>
                        </div>
                        <div class="col-md-4 mt-30">
                            <div class="feature-box f-style-2 icon-grad h-100">
                                <div class="feature-box-icon"><i class="fas fa-light fa-link"></i></div>
                                <h3 class="feature-box-title">${this.i18n('workWithUs.ourPhilosophy.collaboration.title')}</h3>
                                <p class="feature-box-desc">${this.i18n('workWithUs.ourPhilosophy.collaboration.content')}</p>
                            </div>
                        </div>
                        <div class="col-md-4 mt-30">
                            <div class="feature-box f-style-2 icon-grad h-100">
                                <div class="feature-box-icon"><i class="fas fa-light fa-comments"></i></div>
                                <h3 class="feature-box-title">${this.i18n('workWithUs.ourPhilosophy.openMindedness.title')}</h3>
                                <p class="feature-box-desc">${this.i18n('workWithUs.ourPhilosophy.openMindedness.content')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= La nostra filosofia End -->

            <!-- ======================= Posizioni Aperte -->
            <section id="posizioni-aperte">
                <div class="container">
                    <div class="row">
                    <!-- Job positions -->
                    <div class="col-md-8">
                        <h2 class="h1 mb-4">${this.i18n('workWithUs.openPositions.sectionTitle')}</h2>
                        
                        <div class="accordion accordion-icon-gradient" id="accordionWorkWithUs">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading4">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                                        ${this.i18n('workWithUs.openPositions.jobOpportunity.position')}
                                    </button>
                                </h2>
                                <div id="collapse4" class="accordion-collapse collapse show" aria-labelledby="heading4" data-bs-parent="#accordionWorkWithUs">
                                    <div class="accordion-body">
                                        ${this.i18n('workWithUs.openPositions.jobOpportunity.description')}. 
                                        <h6 class="mt-2 mb-2">${this.i18n('workWithUs.openPositions.jobOpportunity.location')}</h6>
                                        <a class="d-block" href="${this.i18n('pagesUrl.softwareDeveloperLink')}">${this.i18n('workWithUs.openPositions.jobOpportunity.apply')}<i class="ti-arrow-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingT6">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                        ${this.i18n('workWithUs.openPositions.jobOpportunity.spontaneousApllication')}
                                    </button>
                                </h2>
                                <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="headingT6" data-bs-parent="#accordionWorkWithUs">
                                    <div class="accordion-body">
                                        ${this.i18n('workWithUs.openPositions.jobOpportunity.noPositionFitsForYou')}
                                    <a class="d-block" href="mailto:${data.forge.contacts.career}">${this.i18n('workWithUs.openPositions.jobOpportunity.apply')}<i class="ti-arrow-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <!-- Sidebar -->
                        <div class="col-md-4 sidebar">
                        <h2 class="mb-4">${this.i18n('workWithUs.openPositions.jobOpportunity.questions.question')}</h2>
                            <div class="widget bg-light border-0 p-3 rounded">
                                <h4>${this.i18n('workWithUs.openPositions.jobOpportunity.questions.writeToUs')}</h4>
                                <p>${this.i18n('workWithUs.openPositions.jobOpportunity.questions.mail.firstChunk')}<a class="text-primary" href="mailto:${data.forge.contacts.career}">career@forge.srl</a>${this.i18n('workWithUs.openPositions.jobOpportunity.questions.mail.secondChunk')}
                            </div>
                        </div>
                        <!-- Sidebar end-->
                    </div>
                </div>
            </section>
            <!-- ======================= End Posizioni Aperte -->

            <!-- ======================= Action box -->
            <section class="bg-grad p-4 p-sm-5 pattern-overlay-4">
                <div class="container">
                    <div class="d-block all-text-white text-center">
                        <div class="text-center">
                            <h2 class="m-0">${this.i18n('workWithUs.discoverUs.doYouWanToMeetUs')}</h2>
                            <h4>${this.i18n('workWithUs.discoverUs.lookAtWhoWeAre')}</h4>
                        </div>
                        <a href="${this.i18n('pagesUrl.whoWeAreLink')}" class="btn btn-white me-3 text-center">${this.i18n('workWithUs.discoverUs.discoverUs')}</a>
                    </div>
                </div>
            </section>
            <!-- ======================= End Action box -->
        </main>`
}