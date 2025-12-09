import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-json-ld',
  standalone: true,
  imports: [CommonModule],
  template: ''
})
export class JsonLdComponent implements OnInit {
  ngOnInit() {
    // Check if script already exists to avoid duplicates
    if (document.querySelector('script[type="application/ld+json"]')) {
      return;
    }

    try {
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'En-Kay Doğalgaz',
        alternateName: 'Ankara Doğalgaz, Ankara Kombi, Ankara Klima',
        description: 'Ankara doğalgaz, Ankara kombi, Ankara klima hizmetleri. En-Kay Doğalgaz: Ankara\'da 1998\'den bu zamana kadar 27+ yıl deneyim. Ankara doğalgaz tesisatı, Ankara kombi montajı, Ankara merkezi klima sistemi (VRF), Ankara kaskat sistemleri. Ankara\'nın tüm ilçelerinde 7/24 acil servis.',
        url: 'https://enkaydogalgaz.com',
        telephone: '+905336417849',
        email: 'enkaydogalgaz@gmail.com',
        foundingDate: '1998',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Ankara',
          addressLocality: 'Ankara',
          addressRegion: 'Ankara',
          postalCode: '06000',
          addressCountry: 'TR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '39.9334',
          longitude: '32.8597'
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Ankara'
          },
          'Keçiören',
          'Çankaya',
          'Mamak',
          'Altındağ',
          'Yenimahalle',
          'Ankara Merkezi',
          'Eryaman',
          'Polatlı',
          'Osmangazi',
          'Sincan',
          'Pursaklar',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Ankara Doğalgaz, Kombi ve Klima Hizmetleri',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Ankara Doğalgaz Tesisatı',
                description: 'Ankara doğalgaz tesisatı kurulum, bakım ve onarım hizmetleri'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Ankara Kombi Montajı',
                description: 'Ankara kombi montajı, bakım ve onarım hizmetleri'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Ankara Klima Servisi',
                description: 'Ankara merkezi klima sistemi (VRF) kurulum, bakım ve onarım hizmetleri'
              }
            }
          ]
        },
        priceRange: '$$',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    } catch (error) {
      // Silently fail if JSON-LD cannot be added
      if (typeof console !== 'undefined' && console.error) {
        console.error('Failed to add JSON-LD schema:', error);
      }
    }
  }
}

