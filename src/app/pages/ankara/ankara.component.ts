import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ankara',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ankara.component.html',
  styleUrls: ['./ankara.component.css']
})
export class AnkaraComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Ankara İlçelerinde Doğalgaz, Kombi, Klima Servisi | En-Kay Doğalgaz');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Ankara\'nın tüm ilçelerinde doğalgaz tesisatı, kombi servisi, klima montaj ve tesisat hizmetleri. Keçiören, Çankaya, Mamak, Altındağ, Yenimahalle ve diğer tüm ilçelerde 7/24 hizmet.' 
    });
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'Ankara doğalgaz, Keçiören kombi servisi, Çankaya klima, Mamak tesisat, Altındağ doğalgaz, Yenimahalle kombi, Ankara ilçeleri tesisat, 7/24 acil servis Ankara' 
    });
    this.meta.updateTag({ property: 'og:title', content: 'Ankara İlçelerinde Doğalgaz, Kombi, Klima Servisi | En-Kay Doğalgaz' });
    this.meta.updateTag({ property: 'og:description', content: 'Ankara\'nın tüm ilçelerinde doğalgaz, kombi, klima ve tesisat hizmetleri. 7/24 acil servis.' });
  }
  districts = [
    { name: 'Keçiören', slug: 'keciboren', population: '950K+' },
    { name: 'Çankaya', slug: 'cankaya', population: '850K+' },
    { name: 'Mamak', slug: 'mamak', population: '600K+' },
    { name: 'Altındağ', slug: 'altindag', population: '350K+' },
    { name: 'Yenimahalle', slug: 'yenimahalle', population: '400K+' },
    { name: 'Ankara Merkezi', slug: 'ankara-merkezi', population: '250K+' },
    { name: 'Eryaman', slug: 'eryaman', population: '200K+' },
    { name: 'Polatlı', slug: 'polatli', population: '180K+' },
    { name: 'Osmangazi', slug: 'osmangazi', population: '160K+' },
    { name: 'Sincan', slug: 'sincan', population: '140K+' },
    { name: 'Pursaklar', slug: 'pursaklar', population: '120K+' },
  ];

  districtImages = [
    '/heating-boiler-room-system.jpg',
    '/office-building-air-conditioning.jpg',
    '/hospital-heating-system.jpg',
    '/commercial-center-gas-installation.jpg',
    '/luxury-villa-plumbing-installation.jpg',
    '/industrial-factory-hvac-system.jpg',
    '/residential-complex-water-system.jpg',
    '/water-tank-installation-professional.jpg',
    '/air-conditioning-installation.jpg',
    '/professional-plumbing-bathroom.jpg',
    '/modern-boiler-installation-technician.jpg',
  ];

  getDistrictImage(index: number): string {
    return this.districtImages[index % this.districtImages.length];
  }
}

