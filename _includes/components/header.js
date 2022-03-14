module.exports = function (data) {
    return `<header class="navbar-sticky navbar-transparent navbar-primary">
		<!-- Logo Nav Start -->
		<nav class="navbar navbar-expand-lg">
			<div class="container-fluid">
				<!-- Logo -->
				<a class="navbar-brand" href="/">
					<!-- Logo -->
					<img class="navbar-brand-item" src="/assets/images/forge-logo-white.png" alt="Logo Forge">
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
							<a class="nav-link" href="/#metodologia">Metodologia</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="/#servizi" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Servizi</a>
							<ul class="dropdown-menu" aria-labelledby="pagesMenu">
								<li> <a class="dropdown-item" href="/servizi-tech">Development</a></li>
								<li> <a class="dropdown-item" href="/servizi-marketing">Marketing</a> </li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link px-lg-3" href="/lavora-con-noi">Lavora con Noi</a>
						</li>
					</ul>
				</div>
				<!-- Main Menu End -->
				<!-- Header Extras Start-->
				<div class="navbar-nav">
					<!-- extra item Btn-->
					<div class="nav-item border-0 d-none d-lg-inline-block align-self-center">
						<a href="/contattaci" class="btn btn-sm btn-primary text-white mb-0">Contattaci!</a>
					</div>
				</div>
				<!-- Header Extras End-->
			</div>
		</nav>
		<!-- Logo Nav End -->
		<script type="text/javascript">
		var _iub = _iub || [];
		_iub.csConfiguration = {"ccpaAcknowledgeOnDisplay":true,"ccpaApplies":true,"consentOnContinuedBrowsing":false,"enableCcpa":true,"invalidateConsentWithoutLog":true,"perPurposeConsent":true,"siteId":1561813,"whitelabel":false,"cookiePolicyId":43091528,"lang":"it", "banner":{ "acceptButtonCaptionColor":"#FFFFFF","acceptButtonColor":"#226CE0","acceptButtonDisplay":true,"backgroundColor":"#FFFFFF","closeButtonRejects":true,"customizeButtonCaptionColor":"#4D4D4D","customizeButtonColor":"#DADADA","customizeButtonDisplay":true,"explicitWithdrawal":true,"logo":null,"position":"float-top-center","rejectButtonCaptionColor":"#FFFFFF","rejectButtonColor":"#226CE0","rejectButtonDisplay":true,"textColor":"#000000" }};
		</script>
		<script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js"></script>
		<script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>
	</header>`
}