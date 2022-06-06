const pageTitle = require('./_includes/components/pageTitle')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Forge - Lavora con Noi: Sviluppatore Software',
            pageDescription: 'Come sviluppatore Software di Forge lavorerai a Varese su progetti innovativi utilizzando diverse tecnologie: Java, Javascript, Kotlin, Swift, PHP...',
            eleventyNavigation: {
                key: 'lavoro',
                title: 'Sviluppatore Software'
            }
        }
    }

    async render(data) {
        return `<main>
            ${pageTitle.call(this, data)}
            <!-- ======================= careers -->
            <section>
                <div class="container">
                    <div class="row">
                        <!-- Job positions -->
                        <div class="col-md-8">
                            <h2 class="mb-4">Job description</h2>
                            <p>Are you currently in a Team Leader role looking for a new challenge or are you an experienced Consultant looking to make the next step into leadership? Well Wizixo Business Support are recruiting and would love to hear from you if you are considering your next move.</p>

                            <p>Ideally you will be from an agency background and preferably within the business support or accounting support sector. You’ll know the ins-and-outs of the recruitment process, from talent sourcing right through to business development, and are ready to pass on your knowledge by leading a team of consultants towards bigger and better goals.</p>

                            <p>This is a billing leadership position, and as such you will be responsible for leading by example. Along with managing your own desk, you’ll provide support and coaching to the consultants within your team.</p>

                            <h6 class="mb-2">What you’ll need:</h6>
                            <ul>
                                <li>Proven results as a recruitment consultant or strong sales experience</li>
                                <li>Knowledge of the staffing industry</li>
                                <li>Previous leadership experience, personally or professionally</li>
                                <li>A strong desire to be successful and inspire people</li>
                            </ul>
                            <h6 class="mb-2 mt-3">What you’ll get in return:</h6>
                            <ul>
                                <li>A culture where success is celebrated</li>
                                <li>Uncapped earnings potential</li>
                                <li>A career where you can choose your path</li>
                                <li>Company share purchase plan</li>
                                <li>An internal rewards program</li>
                            </ul>

                            <h6 class="mt-4 mb-2">Skills</h6>
                            <ul>
                                <li>Involving The Team In Decisions That Affect Them</li>
                                <li>Displays technical or professional expertise</li>
                                <li>Communicates powerfully and prolifically</li>
                                <li>Solves problems and analyzes issues</li>
                                <li>Displays high integrity and honesty</li>
                            </ul>

                            <h6 class="mt-4 mb-2">Educational requirements</h6>
                            <ul>
                                <li>Bachelor Degree</li>
                            </ul>

                            <!-- Apply form -->
                            <div class="row mt-5">
                                <div class="col-md-12">
                                    <h2 class="mb-3">Apply for this Job</h2></div>
                                <div class="col-md-6"><span class="form-group"><input type="text" class="form-control" placeholder="Name"></span></div>
                                <div class="col-md-6"><span class="form-group"><input type="email" class="form-control" placeholder="E-mail"></span></div>
                                <div class="col-md-6"><span class="form-group"><input type="text" class="form-control" placeholder="Mobile number"></span></div>
                                <div class="col-md-6 mb-4">
                                    <div class="input-group">
                                        <input type="file" class="form-control mb-0" id="inputGroupFile01">
                                        <!-- <label class="customFile" for="inputGroupFile01">Upload your CV</label> -->
                                    </div>
                                </div>
                                <div class="col-md-12"><span class="form-group"><textarea cols="40" rows="6" class="form-control" placeholder="Message"></textarea></span></div>
                                <div class="col-md-12 text-center d-grid"><button class="btn btn-dark">Apply now</button></div>
                            </div>

                        </div>
                        <!-- Sidebar -->
                        <div class="col-md-4 sidebar">
                            <div data-sticky data-margin-top="80" data-sticky-for="991">
                                <h2 class="mt-3 mt-md-0 mb-3">Job details</h2>
                                <ul class="list-unstyled p-0">
                                    <li class="mb-3"><strong>Posted:</strong> 3 July 2018 </li>
                                    <li class="mb-3"><strong>Location:</strong> London </li>
                                    <li class="mb-3"><strong>Specialism:</strong> IT </li>
                                    <li class="mb-3"><strong>Job type:</strong> Permanent </li>
                                    <li class="mb-3"><strong>Reference number:</strong> CRR0001-18 </li>
                                    <li class="mb-3"><strong>Contact:</strong> Jessica Mores</li>
                                    <li class="mb-3"><strong>Phone:</strong> (+251) 854-6308 </li>
                                </ul>
                                <a class="d-block mt-3" href="#"><i class="fa fa-print me-2"></i> Print</a>
                            </div>
                        </div>
                        <!-- Sidebar end-->
                    </div>
                </div>
            </section>
            <!-- =======================
            careers -->


            
        </main>`
    }
}