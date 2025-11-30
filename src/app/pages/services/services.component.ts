import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
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
      title: 'Klima Servisi',
      slug: 'klima',
      description: 'Klima kurulum, temizliği ve onarımı. Soğutma ve ısıtma sistemleri.',
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

