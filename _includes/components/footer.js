module.exports = function (data) {
    return `<footer class="footer bg-light pt-6">
		<div class="footer-content pb-3">
			<div class="container">
				<div class="row">
					<!-- Footer widget 1 -->
					<div class="col-md-4">
						<div class="widget">
							<a href="/" class="footer-logo">
								<!-- footer logo Start -->
								<img class="footer-logo-item" src="/assets/images/forge-logo.png" alt="Logo Forge">
								<!-- footer logo End -->
							</a>
							<p class="mt-3">Forge offre servizi di consulenza tecnica, marketing e formazione con un approccio umano, che premia onestà, fiducia e trasparenza.</p>
						</div>
					</div>
					<!-- Footer widget 2 -->
					<div class="col-md-3 col-sm-6">
						<p class="mb-2"><b>DOVE TROVARCI</b></p>
						<div class="widget address" style="background-image: url('../assets/images/world-map.png'); background-position: 50% 20px; background-repeat: no-repeat; background-size: contain;">
							<ul class="list-group list-group-borderless">
								<li class="d-flex mb-3"><i class="me-3 display-8 ti-map-alt"></i>${data.forge.contacts.address}</li>
								<li class="d-flex mb-3"><i class="me-3 display-8 ti-headphone-alt"></i>${data.forge.contacts.phone}</li>
								<li class="d-flex mb-3"><i class="me-3 display-8 ti-email"></i>${data.forge.contacts.info}</li>
							</ul>
						</div>
					</div>
					<!-- Footer widget 3 -->
					<div class="col-md-2 col-sm-6">
						<div class="widget">
							<p class="mb-2"><b>AZIENDA</b></p>
							<ul class="nav flex-column primary-hover">
								<li class="nav-item"><a class="nav-link" href="/contattaci">Contattaci</a></li>
								<li class="nav-item"><a class="nav-link" href="${data.forge.privacy}">Privacy Policy</a></li>
							</ul>
						</div>
					</div>
					<!-- Footer widget 4 -->
					<div class="col-md-3">
						<div class="col-md-2 col-sm-6">
							<p class="mb-2"><b>SEGUICI</b></p>
							<ul class="social-icons list-group list-group-horizontal">
								<li class="social-icons-item social-facebook m-0">
									<a target="_blank" rel="noopener" href="${data.forge.github}" class="social-icons-link w-auto px-2" aria-label="GitHub"><i class="fab fa-github"></i></a>
								</li>
								<li class="social-icons-item social-instagram m-0">
									<a target="_blank" rel="noopener" href="${data.forge.linkedin}" class="social-icons-link w-auto px-2" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
								</li>
								<li class="social-icons-item social-twitter m-0">
								    <a target="_blank" rel="noopener" href="${data.forge.facebook}" class="social-icons-link w-auto ps-2" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="divider mt-3"></div>
		<!--footer copyright -->
		<div class="footer-copyright py-3">
			<div class="container">
				<div class="d-md-flex py-3 justify-content-center">
					<!-- copyright text -->
					<div class="copyright-text">© 2022 Forge s.r.l. | P.IVA IT03778880132 | Tutti i diritti sono riservati.</div>
				</div>
			</div>
		</div>
	</footer>
    <!-- Back to top -->
    <div><a href="#" class="back-top btn btn-primary"><i class="ti-angle-up"></i></a></div>`
}