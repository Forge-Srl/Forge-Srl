const contactUsTranslations = require('./contact-us.js');
const homeTranslations = require('./home.js');
const innovationTranslations = require('./innovation.js');
const marketingServicesTranslations = require('./marketing-services.js');
const pagesUrl = require('./pages-url.js');
const techServicesTranslations = require('./tech-services.js');
const whoWeAreTranslations = require('./who-we-are.js');
const workWithUsTranslations = require('./work-with-us.js');
const headerTranslations = require('./header');
const footerTranslations = require('./footer');
const pageNotFoundTranslations = require("./pageNotFound");
const softwareDeveloperTranslations = require('./software-developer')

module.exports = {
    contactUs: contactUsTranslations,
    footer: footerTranslations,
    header: headerTranslations,
    home: homeTranslations,
    innovation: innovationTranslations,
    marketingServices: marketingServicesTranslations,
    pageNotFound: pageNotFoundTranslations,
    pagesUrl: pagesUrl,
    softwareDeveloper: softwareDeveloperTranslations,
    techServices: techServicesTranslations,
    whoWeAre: whoWeAreTranslations,
    workWithUs: workWithUsTranslations
}
