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
                <a onclick="resetMobileMenuButton()" href="/">Home</a>
                <a onclick="resetMobileMenuButton()" href="/#what-we-do">Servizi</a>
                <a onclick="resetMobileMenuButton()" href="/#where-we-are">Dove siamo</a>
                <a onclick="resetMobileMenuButton()" href="/#contact-us">Contattaci</a>
                <a onclick="resetMobileMenuButton()" href="/lavora-con-noi">Lavora con noi</a>
            </nav>
            <script>function resetMobileMenuButton() {
                document.getElementById('mobile-menu-toggle').checked = false
            }</script>
        </div>
    </div>
</header>`
}