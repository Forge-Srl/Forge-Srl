module.exports = (data) => `<footer>
        <script>
        function openIubendaPreferences(){
            _iub.cs.api.openPreferences();
        }
        </script>
        <br>
        <hr>
        <div style="text-align: center;">
            <span>Siamo appassionati di Intelligenza Artificiale, ma sviluppiamo soluzioni software con un approccio umano.</span>
        </div>
        <div class="group-3 gap-4">
            <div>
                <h6>DOVE TROVARCI</h6>
                <ul>
                    <li><a href="${data.forge.contacts.maps}">${data.forge.contacts.fullAddress}</a></li>
                    <li><a href="tel:${data.forge.contacts.phone}">${data.forge.contacts.phone}</a></li>
                    <li><a href="mailto:${data.forge.contacts.info}">${data.forge.contacts.info}</a></li>
                </ul>
            </div>
            <div>
                <h6>AZIENDA</h6>
                <ul>
                    <li><a href="/contattaci/">Contattaci</a></li>
                    <li><a href="${data.forge.privacy}">Privacy Policy</a></li>
                    <li><a role="link" tabindex="0" onkeydown="openIubendaPreferences()" onclick="openIubendaPreferences()">Preferenze Cookie</a></li>
                </ul>
            </div>
            <div>
                <h6>SEGUICI</h6>
                <ul>
                    <li><a target="_blank" rel="noopener" href="${data.forge.github}">GitHub</a></li>
                    <li><a target="_blank" rel="noopener" href="${data.forge.linkedin}">LinkedIn</a></li>
                    <li><a target="_blank" rel="noopener" href="${data.forge.facebook}">Facebook</a></li>
                </ul>
            </div>
        </div>
        <hr>
        <div style="text-align: center;">
            <span>© ${new Date().getFullYear()} Forge s.r.l. | P.IVA ${data.forge.vatCode} | Tutti i diritti sono riservati.</span><span class="blink">&nbsp;</span>
        </div>
    </footer>`
