import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Ankara Tesisat Hizmetleri - Doğalgaz, Kombi, Klima | En-Kay Doğalgaz');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Ankara tesisat hizmetleri: Ankara doğalgaz tesisatı, Ankara kombi montajı, Ankara merkezi klima sistemi (VRF), Ankara kaskat sistemleri, Ankara sıhhi tesisat, Ankara kazan dairesi. 7/24 acil servis. 0533 641 7849' 
    });
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'Ankara tesisat, ankara tesisat hizmetleri, ankara doğalgaz tesisatı, ankara kombi montajı, ankara klima servisi, ankara sıhhi tesisat, ankara kaskat sistemleri, ankara kazan dairesi, ankara tesisat onarım, ankara tesisat kurulum, ankara tesisat bakım, ankara tesisat servisi, ankara acil tesisat, ankara tesisat firması, ankara tesisat şirketi' 
    });
    this.meta.updateTag({ property: 'og:title', content: 'Ankara Tesisat Hizmetleri - Doğalgaz, Kombi, Klima | En-Kay Doğalgaz' });
    this.meta.updateTag({ property: 'og:description', content: 'Ankara tesisat hizmetleri: Ankara doğalgaz tesisatı, Ankara kombi montajı, Ankara merkezi klima sistemi (VRF), Ankara kaskat sistemleri. 7/24 acil servis.' });
  }
  services = [
    {
      title: 'Kombi Montajı',
      slug: 'kombi',
      description: 'Kombi kurulum, bakım ve onarım hizmetleri. Acil arızalarınız için 7/24 destek.',
      features: ['Kombi Kurulum', 'Periyodik Bakım', 'Acil Arıza Servisi', 'Kombi Temizliği'],
    },
    {
      title: 'Kaskat Sistemleri',
      slug: 'kaskat',
      description: 'Kaskat montajı, bakım ve tamiri. Su sızıntısı sorunlarını çözmede uzman.',
      features: ['Kaskat Montajı', 'Bakım ve Onarım', 'Su Kaçağı Tespiti', 'Alternatif Çözümler'],
    },
    {
      title: 'Merkezi klima sistemi(VRF)',
      slug: 'klima',
      description: 'Merkezi klima sistemleri kurulum, temizliği ve onarımı. VRF sistemleri ile soğutma ve ısıtma.',
      features: ['Klima Kurulum', 'Temizlik ve Bakım', 'Onarım Hizmetleri', 'Enerji Verimliliği'],
    },
    {
      title: 'Sıhhi Tesisatı',
      slug: 'sihhi-tesisat',
      description: 'Banyolar, mutfaklar ve daha fazlası için profesyonel su tesisatı.',
      features: ['Su Tesisatı', 'Tuvalet ve Eviye', 'Bağlantı Onarımları', 'Nitelikli İşçilik'],
    },
    {
      title: 'Doğalgaz Tesisatı',
      slug: 'dogalgaz',
      description: 'Güvenli ve sertifikalı doğalgaz tesisatı ve kurulum hizmetleri.',
      features: ['Tesisatı Kurulum', 'Bakım ve Kontrol', 'Sertifikasyon', 'Güvenlik Denetimi'],
    },
    {
      title: 'Kazan Dairesi',
      slug: 'kazan-dairesi',
      description: 'Kazan kurulum, bakım ve onarım. Enerji verimliliği konsultasyonu.',
      features: ['Kazan Kurulum', 'Periyodik Bakım', 'Enerji Analizi', 'Kombi Değişimi'],
    },
  ];
}

