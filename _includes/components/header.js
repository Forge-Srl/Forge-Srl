module.exports = function (data) {
    return `<header class="navbar-sticky navbar-transparent navbar-primary">
		<!-- Logo Nav Start -->
		<nav class="navbar navbar-expand-lg">
			<div class="container-fluid">
				<!-- Logo -->
				<a class="navbar-brand" href="/">
					<!-- Logo -->
					<img class="navbar-brand-item" src="assets/images/forge-logo-white.png" alt="Logo Forge">
				</a>
				<!-- Menu opener button -->
				<button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<!-- Main Menu Start -->
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav navbar-nav-scroll navbar-nav-scroll ms-auto">
						<li class="nav-item">
							<a class="nav-link" href="/#chi-siamo">Chi Siamo</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/#servizi">Servizi</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/#metodologia">Metodologia</a>
						</li>
						<li class="nav-item">
							<a class="nav-link px-lg-3" href="/#lavora-con-noi">Lavora con Noi</a>
						</li>
					</ul>
				</div>
				<!-- Main Menu End -->
				<!-- Header Extras Start-->
				<div class="navbar-nav">
					<!-- extra item Btn-->
					<div class="nav-item border-0 d-none d-lg-inline-block align-self-center">
						<a href="mailto:${data.forge.contacts.info}" class="btn btn-sm btn-primary text-white mb-0">Contattaci!</a>
					</div>
				</div>
				<!-- Header Extras End-->
			</div>
		</nav>
		<!-- Logo Nav End -->
	</header>`
}