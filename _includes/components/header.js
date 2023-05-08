module.exports = async function (data) {
    return `<header class="navbar-sticky navbar-transparent navbar-primary">
		<!-- Logo Nav Start -->
		<nav class="navbar navbar-expand-lg">
			<div class="container-fluid">
				<a class="navbar-brand" href="${this.i18n('pagesUrl.homePageLink')}">
					<img width=159 height=44 class="navbar-brand-item" src="/assets/images/forge-logo-white.png" alt="Logo Forge">
				</a>
				<!-- Menu opener button -->
				<button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<!-- Main Menu Start -->
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav navbar-nav-scroll navbar-nav-scroll ms-auto">
						<li class="nav-item">
							<a class="nav-link" href="${this.i18n('pagesUrl.whoWeAreLink')}">${this.i18n('header.whoWeAre')}</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="${this.i18n('pagesUrl.homePageLink')}/#metodologia">${this.i18n('header.methodology')}</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="/#servizi" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${this.i18n('header.services')}</a>
							<ul class="dropdown-menu" aria-labelledby="pagesMenu">
								<li> <a class="dropdown-item" href="${this.i18n('pagesUrl.techServicesLink')}">Development</a></li>
								<li> <a class="dropdown-item" href="${this.i18n('pagesUrl.marketingServicesLink')}">Marketing</a> </li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link px-lg-3" href="${this.i18n('pagesUrl.innovationLink')}">${this.i18n('header.innovation')}</a>
						</li>
						<li class="nav-item">
							<a class="nav-link px-lg-3" href="${this.i18n('pagesUrl.workWithUsLink')}">${this.i18n('header.workWithUs')}</a>
						</li>
					</ul>
				</div>
				<!-- Main Menu End -->
				<!-- Header Extras Start-->
				<div class="navbar-nav">
					<!-- extra item Btn-->
					<div class="nav-item border-0 d-none d-lg-inline-block align-self-center">
						<a href="${this.i18n('pagesUrl.contactUsLink')}" class="btn btn-sm btn-primary text-white mb-0">${this.i18n('header.contactUs')}</a>
					</div>
				</div>
				<!-- Header Extras End-->
			</div>
		</nav>
		<!-- Logo Nav End -->
	</header>`
}
