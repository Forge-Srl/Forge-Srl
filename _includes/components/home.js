module.exports = async function(data) {
    return `<main>
            <section class="p-0 position-relative h-500 h-md-600 h-xl-900 bg-grad pattern-overlay-4 overflow-hidden">
            <div class="container d-flex h-100">
                <div class="row align-self-center w-100 z-index-9">
                    <!-- banner Content -->
                    <div class="col-md-6 mt-md-0 all-text-white position-relative">
                        <h1 class="display-4 fw-normal" style="will-change: contents; transform: translateZ(0);">
                            <span class="pt-0">${this.i18n('home.weAre')}</span>
                            <br>
                            <span class="typed" data-type-text="Software House&&Digital Factory&&Web Agency"></span>
                        </h1>
                        <h2 class="mb-4 fw-normal">${this.i18n('home.motto')}</h2>
                        <a class="btn btn-outline-light mb-0 rounded m-0 d-none d-md-inline" href="#servizi">${this.i18n('home.discoverOurServices')}</a>
                        <a class="btn btn-primary mb-0 rounded m-0 d-md-inline" href="${this.i18n(`pagesUrl.contactUsLink`)}">${this.i18n('home.contactUs')}</a>
                    </div>
                    <!-- banner image -->
                    <div class="col-md-6 d-none d-md-block p-0 position-absolute top-0 end-0 align-top align-text-top">
                        <figure class="w-100 ie-height-750">
                            <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1290 1024" style="enable-background:new 0 0 1290 1024;" xml:space="preserve">
                                <g id="XMLID_81_">
                                    <defs>
                                    <path id="XMLID_3_" d="M1290,0v1024c0,0-229.8-152.2-550-52.9C467.3,1055.7-22.5,927.6,47.8,540C120.4,139.6,17,0,17,0H1290z"/>
                                    </defs>
                                    <clipPath id="XMLID_83_">
                                    <use xlink:href="#XMLID_3_" style="overflow:visible;"/>
                                    </clipPath>
                                    <g style="clip-path:url(#XMLID_83_);">
                                        <!-- Set your 1290px X 1024px image below -->
                                        <image style="overflow:visible;" width="1290" height="1024" id="XMLID_82_" xlink:href="/assets/images/forge-banner.jpg"  transform="matrix(0.9999 0 0 0.9999 8.063897e-002 6.401104e-002)">
                                        </image>
                                    </g>
                                </g>
                            </svg>
                        </figure>
                    </div>
                </div>
            </div>
            <canvas class="position-absolute bottom-0 start-50 translate-middle-x mb-n9 z-index-0" id="waveCanvas" style="will-change: transform; transform: translateZ(0);"></canvas>
        </section>
        <!-- ======================= End Main banner -->
    
        <!-- ======================= About us  -->
        <section id="chi-siamo">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <!-- left -->
                    <div class="col-md-6">
                        <div class="row mt-4 mt-md-0">
                            <div class="col-5 offset-1 px-2 mb-3 align-self-end">
                                <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out">
                                    ${await this.image('chi-siamo1.jpg', 'Esperti Forge', 'rounded aos', [240])}
                                </div>
                            </div>
                            <div class="col-6 px-2 mb-3">
                                <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    ${await this.image('chi-siamo2.jpg', 'Il team di Forge a Varese', 'rounded aos', [290])}
                                </div>
                            </div>
                            <div class="col-12 col-md-7 px-2 mb-3">
                                <div class="rounded aos bg-grad p-2 p-sm-3 p-lg-4 p-xl-5 all-text-white" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1500">
                                    <p class="blockquote">${this.i18n('home.weLoveTalkAbout')}</p>
                                </div>
                            </div>
                            <div class="col-5 align-self-start ps-2 mb-3 d-none d-md-inline">
                                <div data-aos="fade-down" data-aos-delay="300" data-aos-duration="1500">
                                    ${await this.image('chi-siamo3.jpg', 'Forge lavoro di squadra', 'rounded aos', [240])}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- right -->
                    <div class="col-md-6 ps-lg-5">
                        <h5 class="text-primary">${this.i18n('home.whoWeAre.sectionTitle')}</h5>
                        <h3 class="h1">${this.i18n('home.whoWeAre.sectionSubTitle')}</h3>
                        <p>${this.i18n('home.whoWeAre.sectionBody.firstChunk')}</p>
                        <p>${this.i18n('home.whoWeAre.sectionBody.secondChunk')}</p>
                        <p>${this.i18n('home.whoWeAre.sectionBody.thirdChunk')}</p>
                        <a href="${this.i18n('pagesUrl.whoWeAreLink')}" class="btn btn-outline-primary me-3 text-center">${this.i18n('home.whoWeAre.meetTheTeam')}</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- ======================= End About us  -->
    
        <!-- ======================= Service -->
        <section id="servizi" class="pb-3">
            <div class="container">
                <div class="row">
                    <!-- column 1 -->
                    <div class="col-md-4">
                        <!-- title -->
                        <h5 class="text-primary">${this.i18n('home.ourServices.sectionTitle')}</h5>
                        <h3 class="h1">${this.i18n('home.ourServices.sectionSubTitle')}</h3>
                        <!-- service item -->
                        <div class="rounded bg-light p-4 p-lg-5 ">
                            <span class="display-5 icon-primary"><i class="fas fa-code"></i></span>
                            <h5>Software Development</h5>
                            <ul>
                                <li>Web Development</li>
                                <li>Back-End Development</li>
                                <li>iOS Development</li>
                                <li>Android Development</li>
                                <li>AI e Machine Learning</li>
                            </ul>
                            <div class="mt-3">
                            <a href="${this.i18n('pagesUrl.techServicesLink')}">${this.i18n('home.discoverMore')}<i class="ti-arrow-right text-primary"></i></a>
                            </div>
                        </div>
                    </div>
    
                    <!-- column 2 -->
                    <div class="col-md-4 mt-5">
                        <!-- service item -->
                        <div class="rounded bg-light p-4 p-lg-5 mb-5">
                            <span class="display-5 icon-primary"><i class="fas fa-project-diagram"></i></span>
                            <h5>Service</h5>
                            <ul>
                                <li><i>Agile</i> Working</li>
                                <li>Business Planning</li>
                                <li>Business Modelling</li>
                                <li>Digital Transformation</li>
                            </ul>
                        </div>
                        <!-- service item -->
                        <div class="rounded bg-light p-4 p-lg-5 mb-5">
                            <span class="display-5 icon-primary"><i class="fas fa-bullhorn"></i></span>
                            <h5>Marketing</h5>
                            <ul>
                                <li>${this.i18n('home.strategy')}</li>
                                <li>Branding Online</li>
                                <li>SEO</li>
                                <li>Paid Advertising</li>
                                <li>Inbound Marketing</li>
                                <li>Social Marketing</li>
                            </ul>
                            <div class="mt-3">
                                <a href="${this.i18n('pagesUrl.marketingServicesLink')}">${this.i18n('home.discoverMore')}<i class="ti-arrow-right text-primary"></i></a>
                            </div>
                        </div>
                    </div>
    
                    <!-- column 3 -->
                    <div class="col-md-4">
                        <!-- service item -->
                        <div class="rounded bg-light p-4 p-lg-5 mb-5">
                            <span class="display-5 icon-primary"><i class="fas fa-university"></i></span>
                            <h5>${this.i18n('home.trainingAndRecruiting.sectionTitle')}</h5>
                            <ul>
                                <li>${this.i18n('home.trainingAndRecruiting.firstPoint')}</li>
                                <li>Recruiting</li>
                                <li>${this.i18n('home.trainingAndRecruiting.thirdPoint')}</li>
                                <li>Coaching</li>
                            </ul>
                        </div>
                        <!-- service item -->
                        <div class="rounded bg-grad all-text-white p-4 p-lg-5 mb-5 text-center">
                            <h5>${this.i18n('home.haveAProjectInMind')}</h5>
                            <a class="btn btn-outline-light mb-0 rounded m-0" href="${this.i18n('pagesUrl.contactUsLink')}">${this.i18n('home.contactUs')}</a>
                        </div>	
                    </div>
                </div>
            </div>
        </section>
        <!-- ======================= End Service -->
    
        <!-- ======================= Process-advance -->
        <section id="metodology" class="process-advance bg-light">
            <div class="title text-center">
                <h2>${this.i18n('home.methodology.sectionTitle')}</h2>
                <h4>${this.i18n('home.methodology.sectionSubTitle')}</h4>
            </div>
            <div class="container">
                <div class="row">
                    <!-- process 1 -->
                    <div class="col-sm-6 col-lg-3 text-center mb-4">
                        <div class="process-border"><span class="process-number bg-primary border-end">01</span></div>
                        <h5 class="my-3">${this.i18n('home.methodology.firstChunk.title')}</h5>
                        <p>${this.i18n('home.methodology.firstChunk.body')}</p>
                    </div>
                    <!-- process 2 -->
                    <div class="col-sm-6 col-lg-3 text-center mb-4">
                        <div class="process-border"><span class="process-number bg-primary border-start border-end">02</span></div>
                        <h5 class="my-3">${this.i18n('home.methodology.secondChunk.title')}</h5>
                        <p>${this.i18n('home.methodology.secondChunk.body')}</p>
                    </div>
                    <!-- process 3 -->
                    <div class="col-sm-6 col-lg-3 text-center mb-4">
                        <div class="process-border"><span class="process-number bg-primary border-start border-end">03</span></div>
                        <h5 class="my-3">${this.i18n('home.methodology.thirdChunk.title')}</h5>
                        <p>${this.i18n('home.methodology.thirdChunk.body')}</p>
                    </div>
                    <!-- process 4 -->
                    <div class="col-sm-6 col-lg-3 text-center mb-4">
                        <div class="process-border"><span class="process-number bg-primary border-start">04</span></div>
                        <h5 class="my-3">${this.i18n('home.methodology.fourthChunk.title')}</h5>
                        <p>${this.i18n('home.methodology.fourthChunk.body')}</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- ======================= End Process-advance -->

        <!-- ======================= Values -->
        <section id="valori">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 text-center mb-4">
                        <h2>${this.i18n('home.ourValues.sectionTitle')}</h2>
                        <h4>${this.i18n('home.ourValues.sectionSubTitle')}</h4>
                    </div>
                    <div class="col-md-3">
                        <div class="feature-box f-style-5 h-100 icon-grad">
                            <div class="feature-box-icon"><i class="fas fa-light fa-key"></i></i></div>
                            <h3 class="feature-box-title">${this.i18n('home.ourValues.firstChunk.title')}</h3>
                            <p class="feature-box-desc">${this.i18n('home.ourValues.firstChunk.body')}</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="feature-box f-style-5 h-100 icon-grad">
                            <div class="feature-box-icon"><i class="fas fa-light fa-handshake"></i></i></div>
                            <h3 class="feature-box-title">${this.i18n('home.ourValues.secondChunk.title')}</h3>
                            <p class="feature-box-desc">${this.i18n('home.ourValues.secondChunk.body')}</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="feature-box f-style-5 h-100 icon-grad">
                            <div class="feature-box-icon"><i class="fas fa-light fa-rocket"></i></i></div>
                            <h3 class="feature-box-title">${this.i18n('home.ourValues.thirdChunk.title')}</h3>
                            <p class="feature-box-desc">${this.i18n('home.ourValues.thirdChunk.body')}</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="feature-box f-style-5 h-100 icon-grad">
                            <div class="feature-box-icon"><i class="fas fa-light fa-message"></i></i></div>
                            <h3 class="feature-box-title">${this.i18n('home.ourValues.fourthChunk.title')}</h3>
                            <p class="feature-box-desc">${this.i18n('home.ourValues.fourthChunk.body')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ======================= End Values -->
    
        <!-- ======================= Why-us -->
        <section id="lavora-con-noi" class="why-us p-0">
            <div class="container-fluid">
                <div class="row">
                    <!--why us left-->
                    <div class="col-lg-6 d-none d-lg-block bg-light p-0" style="background: url('/assets/images/forge-lavora-con-noi.jpg') no-repeat; background-size:cover;">
                    </div>
                    <!--why us right-->
                    <div class="col-lg-6 col-md-12 bg-body px-4 py-5 p-lg-5 text-white">
                        <div class="h-100">
                            <div class="title text-start p-0">
                                <h5 class="text-white">${this.i18n('home.howWeWork.sectionTitle')}</h5>
                                <h3 class="text-white">${this.i18n('home.howWeWork.sectionSubTitle')}</h3>
                                <p>${this.i18n('home.howWeWork.firstChunk')}</p>
                                <p>${this.i18n('home.howWeWork.secondChunk')}</p>
                                <h5 class="text-white">${this.i18n('home.howWeWork.doYouWantWorkWithUs')}</h5>
                                <a class="btn btn-outline-light mb-0 rounded m-0" href="${this.i18n('pagesUrl.workWithUsLink')}">${this.i18n('home.howWeWork.discoverWhatWeOffer')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Why-us =======================  -->
    
        <!-- ======================= Client -->
        <section class="client">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-8 mx-auto">
                        <h2>${this.i18n('home.ourTechnologies.sectionTitle')}</h2>
                        <h4>${this.i18n('home.ourTechnologies.sectionSubTitle')}</h4>
                    </div>
                </div>
                    <div class="row text-center justify-content-center">
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/TS-logo.png', 'Logo TypeScript', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/java-logo.png', 'Logo Java', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/algolia-logo.png', 'Logo Algolia', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/ios-logo.png', 'Logo iOS', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/android-logo.png', 'Logo Android', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/node-logo.png', 'Logo Node', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/angular-logo.png', 'Logo Angular', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/csharp-logo.png', 'Logo C#', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/aws-logo.png', 'Logo AWS', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/firebase-logo.png', 'Logo Firebase', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/googlecloud-logo.png', 'Logo Google Cloud', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/bootstrap-logo.png', 'Logo Bootstrap', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/googleads-logo.png', 'Logo Google Ads', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/googleanalytics-logo.png', 'Logo Google Analytics', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/hubspot-logo.png', 'Logo HubSpot', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/wordpress-logo.png', 'Logo WordPress', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/mailchimp-logo.png', 'Logo Mailchimp', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/facebook-logo.png', 'Logo Facebook', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/instagram-logo.png', 'Logo Instagram', '', [214], '214w')}
                        </div>
                        <div class="col-4 col-md-2 mb-5">
                            ${await this.image('technologies-logos/linkedin-logo.png', 'Logo LinkedIn', '', [214], '214w')}
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= End Client -->
    
            <!-- ======================= Action box -->
            <section class="bg-grad p-4 p-sm-5 pattern-overlay-4">
                <div class="container">
                    <div class="d-block all-text-white text-center">
                        <div class="text-center">
                            <h2 class="m-0">${this.i18n('home.cta.sectionTitle')}</h2>
                            <h4>${this.i18n('home.cta.sectionSubTitle')}</h4>
                        </div>
                        <a href="${this.i18n('pagesUrl.contactUsLink')}" class="btn btn-white me-3 text-center">${this.i18n('home.cta.letsTalk')}</a>
                    </div>
                </div>
            </section>
            <!-- ======================= End Action box -->
        </main>`
}