const pageTitle = require('./pageTitle')

module.exports = async function(data) {
    return `<main>
            ${pageTitle.call(this, data)}
            <section id="innovare" class="pt-5 py-5 mb-4">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- left -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h2 class="h1">${this.i18n('innovation.ourFavouriteWord.sectionTitle')}</h2>
                            <p>${this.i18n('innovation.ourFavouriteWord.firstChunk')}</p>
                            <p>${this.i18n('innovation.ourFavouriteWord.secondChunk')}</p>
                        </div>
                        <!-- right -->
                        <div class="col-md-6">
                            ${await this.image('innovazione/universita-como-nexxt.jpg', 'Università e Centri di Ricerca con cui collaboriamo', 'rounded')}
                        </div>
                    </div>
                </div>
            </section>
            
            <script>                       
                function countCoffees() {
                    
                    const coffeesUntilPageCreation = 15210
                    const pageCreation = new Date(2022, 6, 1)
                    const today = new Date();
                    
                    const differenceInMillis = today.getTime() - pageCreation.getTime()
                    const differenceInDays = differenceInMillis / (1000 * 3600 * 24)                                      
                   
                    return coffeesUntilPageCreation + (differenceInDays * 0.6 * 21)                   
                }
                
                document.addEventListener("DOMContentLoaded", function() {
                    const coffeeCounter = document.getElementById('coffeeCounter')
                    coffeeCounter.setAttribute('data-purecounter-end', countCoffees())  
                });            
            </script>

            <!-- counter gradient -->
            <section class="pt-5 py-5 bg-light">
                <div class="container">
                    <div class="row">
                        <!-- count item -->
                        <div class="col-md-3 col-6 mb-4 mb-md-0">
                            <div class="text-center">
                                <i class="text-grad display-6 ti-plug"></i>
                                <h2 class="fw-bold mt-2 mb-0 purecounter" id="coffeeCounter"  data-purecounter-start="0" data-purecounter-delay="10" data-purecounter-duration="1" data-purecounter-end="15210">0</h2>
                                <p class="mb-0">${this.i18n('innovation.coffee.coffeesTurnedIntoCode')}e</p>
                            </div>
                        </div>
                        <!-- count item -->
                        <div class="col-md-3 col-6 mb-4 mb-md-0">
                            <div class="text-center">
                                <i class="text-grad display-6 ti-marker"></i>
                                <h2 class="fw-bold mt-2 mb-0 purecounter" data-purecounter-start="0" data-purecounter-delay="10" data-purecounter-duration="1" data-purecounter-end="13">0</h2>
                                <p class="mb-0">${this.i18n('innovation.coffee.thesisProjects')}</p>
                            </div>
                        </div>
                        <!-- count item -->
                        <div class="col-md-3 col-6 mb-4 mb-md-0">
                            <div class="text-center">
                                <i class="text-grad display-6 ti-ruler-alt-2"></i>
                                <h2 class="fw-bold mt-2 mb-0 purecounter" data-purecounter-start="0" data-purecounter-delay="10" data-purecounter-duration="1" data-purecounter-end="21">0</h2>
                                <p class="mb-0">${this.i18n('innovation.coffee.softwareProjects')}</p>
                            </div>
                        </div>
                        <!-- count item -->
                        <div class="col-md-3 col-6 mb-4 mb-md-0">
                            <div class="text-center">
                                <i class="text-grad display-6 ti-agenda"></i>
                                <h2 class="fw-bold mt-2 mb-0 purecounter" data-purecounter-start="0" data-purecounter-delay="10" data-purecounter-duration="1" data-purecounter-end="3">0</h2>
                                <p class="mb-0">${this.i18n('innovation.coffee.partnerUniversity')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
	        <!-- counter gradient -->

            <!-- ======================= Università -->
            <section class="università">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- left -->
                        <div class="col-md-6">
                            ${await this.image('innovazione/universita-insubria.jpg', 'Università Insubria e Bicocca', 'rounded')}
                        </div>
                        <!-- right -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h5 class="text-primary">${this.i18n('innovation.university.sectionTitle')}</h5>
                            <h2 class="h1">${this.i18n('innovation.university.sectionSubTitle')}</h2>
                            <p>${this.i18n('innovation.university.firstChunck')}</p>
                            <p>${this.i18n('innovation.university.secondChunk')}</p>
                            <a href="${this.i18n('pagesUrl.workWithUsLink')}#posizioni-aperte" class="btn btn-outline-primary me-3 text-center">${this.i18n('innovation.university.openPositions')}</a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= Università End -->    

            <!-- ======================= Progetti Open Source -->
            <section id="open-source" class="bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 text-center mb-4">
                            <h2>${this.i18n('innovation.openSource.sectionTitle')}</h2>
                            <p>${this.i18n('innovation.openSource.sectionSubTitle')}</p>
                        </div>
                        <div class="col-md-4 mt-30">
                            <div class="feature-box f-style-2 icon-grad h-100">
                                <div class="feature-box-icon"><i class="fas fa-regular fa-arrows-turn-to-dots"></i></div>
                                <h3 class="feature-box-title">BionicJS</h3>
                                <p class="feature-box-desc">${this.i18n('innovation.openSource.bionicJs')}</p>
                                <a target="_blank" rel="noopener" class="d-block pt-2" href="https://github.com/Forge-Srl/bionic-js/">${this.i18n('innovation.openSource.goToProject')} <i class="ti-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <div class="col-md-4 mt-30">
                            <div class="feature-box f-style-2 icon-grad h-100">
                                <div class="feature-box-icon"><i class="fas fa-regular fa-bridge-water"></i></div>
                                <h3 class="feature-box-title">JJBridge</h3>
                                <p class="feature-box-desc">${this.i18n('innovation.openSource.JjBridge')}</p>
                                <a target="_blank" rel="noopener" class="d-block pt-2" href="https://github.com/Forge-Srl/jjbridge-engine-v8/">${this.i18n('innovation.openSource.goToProject')} <i class="ti-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <div class="col-md-4 mt-30">
                            <div class="feature-box f-style-2 icon-grad h-100">
                                <div class="feature-box-icon"><i class="fas fa-regular fa-diagram-project"></i></div>
                                <h3 class="feature-box-title">Gushio</h3>
                                <p class="feature-box-desc">${this.i18n('innovation.openSource.gushio')}</p>
                                <a target="_blank" rel="noopener" class="d-block pt-2" href="https://github.com/Forge-Srl/gushio/">${this.i18n('innovation.openSource.goToProject')} <i class="ti-arrow-circle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- =======================  Progetti Open Source End -->

            <!-- ======================= Ricerca e Sviluppo -->
            <section class="ricerca">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <!-- left -->
                        <div class="col-md-6">
                            ${await this.image('innovazione/ricerca-sviluppo.jpg', 'Forge ricerca e sviluppo', 'rounded')}
                        </div>
                        <!-- right -->
                        <div class="col-md-6 mt-4 mt-md-0">
                            <h5 class="text-primary">${this.i18n('innovation.rAndD.sectionTitle')}</h5>
                            <h2 class="h1">${this.i18n('innovation.rAndD.sectionSubTitle')}</h2>
                            <p>${this.i18n('innovation.rAndD.firstChunk')}</p>
                            <p>${this.i18n('innovation.rAndD.secondChunk')}</p>
                                <a href="${this.i18n('pagesUrl.contactUsLink')}" class="btn btn-outline-primary me-3 text-center">${this.i18n('innovation.rAndD.getInTouch')}</a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ======================= Ricerca e Sviluppo End -->    

        

            <!-- ======================= Action box -->
            <section class="bg-grad p-4 p-sm-5 pattern-overlay-4">
                <div class="container">
                    <div class="d-block all-text-white text-center">
                        <div class="text-center">
                            <h2 class="m-0">${this.i18n('innovation.isYourFavouriteWordAlso.sectionTitle')}</h2>
                            <h4>${this.i18n('innovation.isYourFavouriteWordAlso.sectionSubTitle')}</h4>
                        </div>
                        <a href="${this.i18n('pagesUrl.contactUsLink')}" target="_blank" class="btn btn-white me-3 text-center">${this.i18n('innovation.isYourFavouriteWordAlso.letsTalk')}</a>
                    </div>
                </div>
            </section>
            <!-- ======================= End Action box -->

        </main>`
}
