module.exports = data => `<footer>
    <div class="page-block">
        <div class="info">
            <div class="forge-logo"><img src="/img/forge-logo.jpg" alt="Forge" height="40" width="145"></div>
            <div class="social">
                <a target="_blank" rel="noopener" href="${data.forge.facebook}" aria-label="Facebook"><i class="fab fa-3x fa-facebook"></i></a>
                <a target="_blank" rel="noopener" href="${data.forge.linkedin}" aria-label="Linkedin"><i class="fab fa-3x fa-linkedin"></i></a>
            </div>
        </div>
    </div>
    <div class="page-block">
        <div class="legal-info">
            <span>Forge S.r.l. Via Cigalini 5/D 22100 Como (CO) | P.I. 03778880132<br>
            Copyright © 2019 Forge S.r.l. | All rights reserved.</span>
        </div>
    </div>
</footer>`