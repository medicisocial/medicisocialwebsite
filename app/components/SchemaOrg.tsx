export default function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.medicisocial.com/#localbusiness',
    name: 'Medici Social',
    url: 'https://www.medicisocial.com',
    logo: 'https://www.medicisocial.com/images/logo.png',
    image: 'https://www.medicisocial.com/images/logo.png',
    description:
      'A data-driven social media marketing and short-form video agency based in Fulshear, TX. We specialize in social media management, content creation, website design, SEO, and AI-powered strategy.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fulshear',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.6900,
      longitude: -95.8997,
    },
    foundingLocation: {
      '@type': 'Place',
      name: 'Fulshear, TX',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 29.6900,
        longitude: -95.8997,
      },
      geoRadius: '50000',
    },
    sameAs: [
      'https://www.instagram.com/medicisocial',
      'https://www.facebook.com/medicisocial',
      'https://www.linkedin.com/company/medicisocial',
      'https://twitter.com/medicisocial',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: 'https://www.medicisocial.com/contact',
    },
    knowsAbout: [
      'Social Media Marketing',
      'Short-Form Video Production',
      'Content Creation',
      'Website Design',
      'Search Engine Optimization',
      'AI Marketing Integrations',
      'Brand Strategy',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
