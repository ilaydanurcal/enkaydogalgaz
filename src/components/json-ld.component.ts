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
        name: 'En-Kay Doğalgaz & Tesisat',
        description: 'Ankara\'da 1998\'den bu zamana kadar doğalgaz tesisatı, kombi montajı, kaskat sistemleri, klima montaj ve sıhhi tesisat hizmetleri. 27+ yıl deneyim. 7/24 acil servis.',
        url: 'https://enkay.com',
        telephone: '+905336417849',
        email: 'enkaydogalgaz@gmail.com',
        foundingDate: '1998',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Ankara',
          addressLocality: 'Ankara',
          addressCountry: 'TR',
        },
        areaServed: [
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

