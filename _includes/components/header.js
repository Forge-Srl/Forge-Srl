module.exports = async function (data) {
    const locale = data.locale ? data.locale.slice(0, 2) : 'it';
    return `<header class="navbar-sticky navbar-transparent navbar-primary">
		<!-- Logo Nav Start -->
		<nav class="navbar navbar-expand-lg">
			<div class="container-fluid">
				<a class="navbar-brand" href="${this.i18n('pagesUrl.homePageLink', {}, locale)}">
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
							<a class="nav-link" href="${this.i18n('pagesUrl.whoWeAreLink', {}, locale)}">${this.i18n('header.whoWeAre', {}, locale)}</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="${this.i18n('pagesUrl.homePageLink', {}, locale)}/#metodology">${this.i18n('header.methodology', {}, locale)}</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="/#servizi" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${this.i18n('header.services', {}, locale)}</a>
							<ul class="dropdown-menu" aria-labelledby="pagesMenu">
								<li> <a class="dropdown-item" href="${this.i18n('pagesUrl.techServicesLink', {}, locale)}">Development</a></li>
								<li> <a class="dropdown-item" href="${this.i18n('pagesUrl.marketingServicesLink', {}, locale)}">Marketing</a> </li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link px-lg-3" href="${this.i18n('pagesUrl.innovationLink', {}, locale)}">${this.i18n('header.innovation', {}, locale)}</a>
						</li>
						<li class="nav-item">
							<a class="nav-link px-lg-3" href="${this.i18n('pagesUrl.workWithUsLink', {}, locale)}">${this.i18n('header.workWithUs', {}, locale)}</a>
						</li>
					</ul>
				</div>
				<!-- Main Menu End -->
				<!-- Header Extras Start-->
				<div class="navbar-nav">
                     
                  <!-- Language Switch -->
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">${this.i18n('pagesUrl.languageSwitch.label', {}, locale)}</a>
                        <ul class="dropdown-menu dropdown-language">
                              <li>
                                    <a href="${this.i18n('pagesUrl.languageSwitch.otherLanguageUrl', {}, locale)}" class="dropdown-item">${this.i18n('pagesUrl.languageSwitch.otherLanguageLabel', {}, locale)}</a>                  
                              </li>
                        </ul>
                    </div>
					<!-- extra item Btn-->
					<div class="nav-item border-0 d-none d-lg-inline-block align-self-center">
						<a href="${this.i18n('pagesUrl.contactUsLink', {}, locale)}" class="btn btn-sm btn-primary text-white mb-0">${this.i18n('header.contactUs', {}, locale)}</a>
					</div>
				</div>
				<!-- Header Extras End-->
			</div>
		</nav>
		<!-- Logo Nav End -->
	</header>`
}
