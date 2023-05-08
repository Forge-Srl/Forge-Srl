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

module.exports = {
    contactUs: contactUsTranslations,
    home: homeTranslations,
    innovation: innovationTranslations,
    marketingServices: marketingServicesTranslations,
    pagesUrl: pagesUrl,
    techServices: techServicesTranslations,
    whoWeAre: whoWeAreTranslations,
    workWithUs: workWithUsTranslations,
    header: headerTranslations,
    footer: footerTranslations,
    pageNotFound: pageNotFoundTranslations
}
