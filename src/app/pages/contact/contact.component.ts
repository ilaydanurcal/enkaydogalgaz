import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('İletişim - En-Kay Doğalgaz & Tesisat | Ankara 7/24 Acil Servis');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Ankara\'da doğalgaz, kombi, klima ve tesisat hizmetleri için bize ulaşın. 7/24 acil servis. Telefon: 0533 641 7849. Ücretsiz keşif ve aynı gün randevu.' 
    });
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'Ankara tesisat telefon, ankara doğalgaz telefon, ankara kombi telefon, ankara klima telefon, ankara tesisat servisi telefon, ankara acil tesisat telefon, ankara tesisat iletişim, ankara doğalgaz iletişim, ankara kombi iletişim, ankara klima iletişim, ankara tesisat randevu, ankara tesisat keşif, 7/24 tesisat ankara, acil tesisat servisi ankara, ankara tesisat adres' 
    });
    this.meta.updateTag({ property: 'og:title', content: 'İletişim - En-Kay Doğalgaz & Tesisat | Ankara 7/24 Acil Servis' });
    this.meta.updateTag({ property: 'og:description', content: 'Ankara\'da doğalgaz, kombi, klima ve tesisat hizmetleri için bize ulaşın. 7/24 acil servis. 0533 641 7849' });
  }

  districts = [
    'Keçiören', 'Çankaya', 'Mamak', 'Altındağ', 'Yenimahalle',
    'Ankara Merkezi', 'Eryaman', 'Polatlı', 'Osmangazi', 'Sincan', 'Pursaklar'
  ];

  faqs = [
    {
      q: 'Aynı gün hizmet verebilir misiniz?',
      a: 'Evet, 7/24 acil destek hattımıza Ankara\'nın herhangi bir noktasından aynı gün hizmet vermek için hazırız.'
    },
    {
      q: 'Keşif ücretsiz mi?',
      a: 'Tamamen ücretsizdir. İlk görüşmede mühendislik hesaplamalarımızı yaparak net bir fiyat tahmini sunuyoruz.'
    },
    {
      q: 'Garanti süresi nedir?',
      a: 'Tüm işçilik ve yedek parçalara 6 ay garanti vermekteyiz. Garantili ürünler ile bu süre daha uzun olabilir.'
    },
    {
      q: 'Hafta sonu ve resmi tatillerde de çalışıyor musunuz?',
      a: 'Evet, acil durumlarda hafta sonu ve resmi tatillerinde de hizmet sunmaktayız.'
    }
  ];
}

