const forgeData = {
  domain: 'https://forge.srl',
  contacts: {
    info: 'info@forge.srl',
    career: 'career@forge.srl',
    phone: '+39 3756647867',
    maps: 'https://maps.app.goo.gl/cv6aURNYbUtaYjnr8',
    address: {
      street: 'Via Ulisse Merini, 43',
      locality: 'Varese',
      postalCode: '21100',
      country: 'IT',
    },
    get fullAddress() {
      return `${this.address.street}, ${this.address.postalCode} ${this.address.locality}`
    },
  },
  vatCode: 'IT03778880132',
  facebook: 'https://www.facebook.com/forgesrl',
  linkedin: 'https://www.linkedin.com/company/forge-company',
  github: 'https://github.com/Forge-Srl',
  privacy: 'https://www.iubenda.com/privacy-policy/43091528',
}

module.exports = forgeData
