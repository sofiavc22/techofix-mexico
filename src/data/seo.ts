import { services } from './site-data';

export const SITE_URL = 'https://www.techofixmexico.site';
export const BUSINESS_ID = `${SITE_URL}/#negocio`;

const catalogServices = [
  {
    slug: 'reparacion-de-techos',
    title: 'Reparación de techos',
    description: 'Diagnóstico y reparación de goteras, filtraciones, grietas, juntas, láminas y daños en cubiertas residenciales e industriales.',
    url: `${SITE_URL}/reparacion-de-techos/`,
  },
  ...Object.values(services).map((service) => ({
    ...service,
    url: `${SITE_URL}/servicios/${service.slug}/`,
  })),
];

export const serviceCatalog = {
  '@type': 'OfferCatalog',
  name: 'Servicios de reparación e impermeabilización de techos',
  itemListElement: catalogServices.map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service.title,
      description: service.description,
      url: service.url,
      provider: { '@id': BUSINESS_ID },
    },
  })),
};

export const businessSchema = {
  '@type': ['LocalBusiness', 'RoofingContractor'],
  '@id': BUSINESS_ID,
  name: 'Techofix',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/favicon.svg`,
  image: `${SITE_URL}/og.webp`,
  telephone: '+52 55 9106 9566',
  description:
    'Reparación, instalación, mantenimiento e impermeabilización de techos residenciales e industriales en el Estado de México.',
  priceRange: '$$',
  currenciesAccepted: 'MXN',
  paymentAccepted: 'Efectivo, tarjeta y transferencia bancaria',
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  }],
  contactPoint: [{
    '@type': 'ContactPoint',
    telephone: '+52 55 9106 9566',
    contactType: 'customer service',
    availableLanguage: ['Spanish'],
    areaServed: 'MX',
  }],
  areaServed: [
    'Coacalco de Berriozábal', 'Tultitlán', 'Zumpango', 'Tultepec',
    'Cuautitlán', 'Cuautitlán Izcalli', 'Tlalnepantla de Baz',
  ].map((name) => ({ '@type': 'City', name })),
  hasOfferCatalog: serviceCatalog,
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: 'Techofix',
  inLanguage: 'es-MX',
  publisher: { '@id': BUSINESS_ID },
};

export const globalSchema = {
  '@context': 'https://schema.org',
  '@graph': [businessSchema, websiteSchema],
};
