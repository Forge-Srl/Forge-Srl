const pageTitle = require('../../_includes/components/pageTitle')
const formScript = require('../../_includes/components/formScript')

module.exports = async function(data) {
    return `<main>
            ${pageTitle.call(this, data)}
            <!-- ======================= careers -->
            <section>
                <div class="container">
                    <div class="row">
                        <!-- Job positions -->
                        <div class="col-md-8">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item active">
                                        <a href="${this.i18n('pagesUrl.workWithUsLink')}"><i class="ti-arrow-circle-left"></i>${this.i18n('softwareDeveloper.backToOpenPositions')}</a>
                                    </li>
                                </ol>
                            </nav>
                            <h2 class="mb-4">Job description</h2>
                            <p>${this.i18n('softwareDeveloper.job.description.firstChunk')}</p>
                            
                            <p>${this.i18n('softwareDeveloper.job.description.secondChunk')}</p>
                            
                            <p>${this.i18n('softwareDeveloper.job.description.thirdChunk')}</p>
                            
                            <p>${this.i18n('softwareDeveloper.job.description.fourthChunk')}</p>
                            
                            <p>${this.i18n('softwareDeveloper.job.description.fifthChunk')}</p>
                            
                            <p>${this.i18n('softwareDeveloper.job.description.sixthChunk')}</p>

                            <h2 class="mt-4 mb-4">${this.i18n('softwareDeveloper.job.whatYouWillDoWithUs.sectionTitle')}</h2>
                            <ul class="list-group list-group-borderless list-group-icon-primary-bg mb-4">
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.whatYouWillDoWithUs.list.firstElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.whatYouWillDoWithUs.list.secondElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.whatYouWillDoWithUs.list.thirdElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.whatYouWillDoWithUs.list.fourthElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.whatYouWillDoWithUs.list.fifthElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.whatYouWillDoWithUs.list.sixthElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.whatYouWillDoWithUs.list.seventhElement')}</li>
                            </ul>

                            <h2 class="mt-4 mb-4">${this.i18n('softwareDeveloper.job.whoWeAreLookingFor.sectionTitle')}</h2>
                            <p>${this.i18n('softwareDeveloper.job.whoWeAreLookingFor.sectionSubtitle')}</p>
                            <ul class="list-group list-group-borderless mb-4">
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.whoWeAreLookingFor.list.firstElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.whoWeAreLookingFor.list.secondElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.whoWeAreLookingFor.list.thirdElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.whoWeAreLookingFor.list.fourthElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.whoWeAreLookingFor.list.fifthElement')}</li>
                            </ul>

                            <h2 class="mt-4 mb-4">${this.i18n('softwareDeveloper.job.whatWeOffer.sectionTitle')}</h2>
                            <p>${this.i18n('softwareDeveloper.job.whatWeOffer.sectionSubTitle')}</p>
                            <ul class="list-group list-group-borderless mb-4">
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.whatWeOffer.list.firstElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.whatWeOffer.list.secondElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.whatWeOffer.list.thirdElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.whatWeOffer.list.fourthElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.whatWeOffer.list.fifthElement')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.whatWeOffer.list.sixthElement')}</li>
                            </ul>

                            <h2 class="mt-4 mb-4">${this.i18n('softwareDeveloper.job.howTheSelectionProcessWorks.sectionTitle')}</h2>
                            <ul class="list-group list-group-borderless mb-4">
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.howTheSelectionProcessWorks.firstChunk')}</li>
                                <li class="list-group-item"><i class="fa fa-check"></i>${this.i18n('softwareDeveloper.job.howTheSelectionProcessWorks.secondChunk')}</li> 
                            </ul>

                            <h2 class="mt-4 mb-4">${this.i18n('softwareDeveloper.job.note.sectionTitle')}</h2>
                            <p>${this.i18n('softwareDeveloper.job.note.firstChunk')}</p>

                            <div class="mt-5 col-md-12">
                                <h2 class="mb-3">${this.i18n('softwareDeveloper.job.applyYourself.sectionTitle')}</h2>
                            </div>
                            <form id="application-form" class="needs-validation" name="applicationform" method="POST" action="${data.form.url.applyForJob()}">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <input required type="text" name="name" class="form-control" placeholder="${this.i18n('softwareDeveloper.job.applyYourself.nameAndSurname')}">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <input required type="email" name="from" class="form-control" placeholder="${this.i18n('softwareDeveloper.job.applyYourself.email')}">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <input required type="text" name="phone" class="form-control" placeholder="${this.i18n('softwareDeveloper.job.applyYourself.phone')}">
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <div class="input-group">
                                            <button class="form-control mb-0 btn btn-outline-primary" onclick="document.querySelector('input[name=curriculum]').click();">
                                                <span>${this.i18n('softwareDeveloper.job.applyYourself.uploadYourCv')}</span>
                                            </button>
                                            <input required type="file" name="curriculum" style="display: none;">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="input-group">
                                            <textarea required cols="40" rows="6" name="about_you" class="form-control" placeholder="${this.i18n('softwareDeveloper.job.applyYourself.moreAboutYou')}"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12 text-center d-grid">
                                        <button class="btn btn-primary m-0" type="submit">
                                            <span class="spinner-border spinner-border-sm" style="display: none;" role="status" aria-hidden="true"></span>
                                            <span>${this.i18n('softwareDeveloper.job.applyYourself.applyNow')}</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div id="application-form-done" style="display: none;">
                                <h4 class="text-center">${this.i18n('softwareDeveloper.job.applyYourself.thanksForApplication')}</h4>
                            </div>
                            ${formScript.call(this, 'application-form', 'application-form-done', data)}
                        </div>
                        <!-- Sidebar -->
                        <div class="col-md-4 sidebar">
                            <div data-margin-top="80" data-sticky data-sticky-for="991">
                                <h2 class="mt-3 mt-md-0 mb-3">${this.i18n('softwareDeveloper.job.sidebar.details')}</h2>
                                <ul class="list-unstyled p-0">
                                    <li class="mb-3">${this.i18n('softwareDeveloper.job.sidebar.location')}</li>
                                    <li class="mb-3">${this.i18n('softwareDeveloper.job.sidebar.scope')}</li>
                                    <li class="mb-3">${this.i18n('softwareDeveloper.job.sidebar.contract')}</li>
                                    <li class="mb-3">${this.i18n('softwareDeveloper.job.sidebar.mode')}</li>
                                </ul>
                                <div class="mt-3">
                                    <a href="#application-form">${this.i18n('softwareDeveloper.job.sidebar.apply')}<i class="ti-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <!-- Sidebar end-->
                    </div>
                </div>
            </section>
            <!-- ======================= careers -->
        </main>`
}