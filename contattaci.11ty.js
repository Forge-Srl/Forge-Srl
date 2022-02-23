class Home {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Forge - Contattaci',
            pageDescription: 'Trasformiamo le idee di oggi nei prodotti di domani. Siamo una Software House, Marketing Agency, Digital Company.',
            eleventyNavigation: {
                key: 'contattaci',
                title: 'Contattaci'
            }
        }
    }

    render(data) {
        return `<main>
            <!-- =======================
	Banner innerpage -->
	<div class="text-center bg-overlay-dark-4" style="background:url('') no-repeat; background-size: cover; background-position: center center;">
		<div class="container">
			<div class="row all-text-white">
				<div class="col-md-12 align-self-center">
					<h6 class="display-6 fw-bold mt-9 mb-0"></h6>
					<h1 class="fw-bold display-1 mb-2 mb-md-n4">Contattaci</h1>
				</div>
			</div>
		</div>
	</div>
	<!-- =======================
	Banner innerpage -->

	<!-- =======================
	contact -->
	<section class="contact-page">
		<div class="container">
			<div class="row">
				<div class="col-12 col-lg-8 mx-auto">
					<div class="title text-center">
						
						<h2>Come possiamo aiutarti?</h2>
						<p>Il modo migliore per comprendere le tue esigenze o rispondere ai tuoi dubbi è parlarne! Mandaci una mail, chiamaci oppure compila il form qui sotto.</p>
					
					</div>
				</div>
			</div>
			<div class="row g-4">
				<div class="col-md-3">
					<div class="contact-box d-flex flex-column h-100 bg-overlay-dark-7 px-3 py-4" style="background:url('/assets/images/contattaci-forge.jpg') no-repeat; background-size: cover; background-position: center center;">
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
							<div class="fs-4"><i class="ti-panel"></i></div>
							<h5 class="mb-2">Telefono</h5>
							<p class="mb-0">${data.forge.contacts.telephone}</p>
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
						<form class="contact-form needs-validation" id="contact-form" name="contactform" method="POST" action="" novalidate>
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
										<input required id="con-email" name="email" type="email" class="form-control" placeholder="E-mail">
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
								<div class="col-md-12 d-grid"><button class="btn btn-dark m-0" type="submit">Invia</button></div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- =======================
	contact -->
        </main>`
    }
}

module.exports = Home