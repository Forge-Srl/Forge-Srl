/**
 * Sezione "dove trovarci": recapiti della sede + mappa.
 * Usata in home e in chi-siamo.
 *
 * La mappa è un embed OpenStreetMap: non serve API key e non installa cookie
 * di tracciamento, quindi non va gated dietro il consenso come Google Maps.
 * L'embed non accetta un livello di zoom, si regola allargando o stringendo il bbox.
 */
const mapMarker = '45.8224998,8.8363488'
const mapBbox = '8.8318,45.8203,8.8409,45.8247'
const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${mapBbox}&amp;layer=mapnik&amp;marker=${mapMarker}`

module.exports = ({forge}) => `<section class="sec-paper" id="dove-trovarci">
  <div class="split-grid location-grid">
    <div>
      <div class="label"><span class="dim">// </span>dove trovarci</div>
      <h2>In studio o in video.</h2>
      <div class="location-list">
        <div><span class="location-arrow">→</span> <a href="${forge.contacts.maps}" target="_blank" rel="noopener">${forge.contacts.fullAddress}</a></div>
        <div><span class="location-arrow">→</span> <a href="mailto:${forge.contacts.info}">${forge.contacts.info}</a></div>
        <div><span class="location-arrow">→</span> lun–ven · 9:00–18:00</div>
      </div>
      <a class="fg-link" href="${forge.contacts.maps}" target="_blank" rel="noopener" aria-label="Apri le indicazioni per la sede Forge su Google Maps">apri_indicazioni →</a>
    </div>
    <div class="location-map">
      <iframe title="Mappa della sede Forge in ${forge.contacts.fullAddress}" src="${mapUrl}" loading="lazy" referrerpolicy="no-referrer"></iframe>
      <div class="location-credit">© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors</div>
    </div>
  </div>
</section>`
