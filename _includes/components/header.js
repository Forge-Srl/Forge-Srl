module.exports = function (data) {
    return `<header>
    <div class="page-block">
        <div>
            <div class="forge-logo"><a href="/"><img src="/img/forge-logo.jpg" alt="Forge" height="40" width="145"></a></div>
            <div class="spacer"></div>
            <input class="mobile-menu-button" type="checkbox" id="mobile-menu-toggle">
            <label class="mobile-menu-button" for="mobile-menu-toggle">
                <i class="fa fa-bars fa-2x"></i>
                <i class="fa fa-times fa-2x"></i>
            </label>
            <nav>
                <a href="/">Home</a>
                <a href="/#what-we-do">Servizi</a>
                <a href="/#where-we-are">Dove siamo</a>
                <a href="/#contact-us">Contattaci</a>
                <a href="/lavora-con-noi">Lavora con noi</a>
            </nav>
        </div>
    </div>
</header>`
}