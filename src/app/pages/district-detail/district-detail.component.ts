import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-district-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './district-detail.component.html',
  styleUrls: ['./district-detail.component.css']
})
export class DistrictDetailComponent implements OnInit {
  slug: string = '';
  district: any = null;

  districtInfo: any = {
    keciboren: {
      name: 'Keçiören',
      fullName: 'Ankara Keçiören İlçesi',
      population: '950.000+',
      description: 'Ankara\'nın en kalabalık ilçesi Keçiören\'de doğalgaz, kombi, kaskat, klima ve sıhhi tesisat hizmetleri sunuyoruz.',
    },
    cankaya: {
      name: 'Çankaya',
      fullName: 'Ankara Çankaya İlçesi',
      population: '850.000+',
      description: 'Ankara\'nın merkezi ilçesi Çankaya\'da 1998\'den bu zamana kadar 27+ yıl deneyimimiz ile hizmet veriyoruz.',
    },
    mamak: {
      name: 'Mamak',
      fullName: 'Ankara Mamak İlçesi',
      population: '600.000+',
      description: 'Mamak ilçesinde güvenilir ve hızlı doğalgaz tesisatı hizmetleri sağlıyoruz.',
    },
    altindag: {
      name: 'Altındağ',
      fullName: 'Ankara Altındağ İlçesi',
      population: '350.000+',
      description: 'Ankara\'nın eski ilçelerinden Altındağ\'da profesyonel tesisat hizmetleri.',
    },
    yenimahalle: {
      name: 'Yenimahalle',
      fullName: 'Ankara Yenimahalle İlçesi',
      population: '400.000+',
      description: 'Yenimahalle bölgesinde kombi bakım, onarım ve doğalgaz tesisatı hizmetleri.',
    },
    'ankara-merkezi': {
      name: 'Ankara Merkezi',
      fullName: 'Ankara Merkez İlçesi',
      population: '250.000+',
      description: 'Ankara merkez\'de hızlı ve güvenilir hizmet sunuyoruz.',
    },
    eryaman: {
      name: 'Eryaman',
      fullName: 'Ankara Eryaman Mahallesi',
      population: '200.000+',
      description: 'Eryaman\'da yaşayan müşterilerimiz için 7/24 acil destek sunuyoruz.',
    },
    polatli: {
      name: 'Polatlı',
      fullName: 'Ankara Polatlı İlçesi',
      population: '180.000+',
      description: 'Polatlı ilçesinde doğalgaz, kombi ve klima hizmetleri.',
    },
    osmangazi: {
      name: 'Osmangazi',
      fullName: 'Ankara Osmangazi Bölgesi',
      population: '160.000+',
      description: 'Osmangazi bölgesinde profesyonel tesisat hizmetleri.',
    },
    sincan: {
      name: 'Sincan',
      fullName: 'Ankara Sincan İlçesi',
      population: '140.000+',
      description: 'Sincan\'da güvenilir doğalgaz ve kombi hizmetleri.',
    },
    pursaklar: {
      name: 'Pursaklar',
      fullName: 'Ankara Pursaklar İlçesi',
      population: '120.000+',
      description: 'Pursaklar ilçesinde hizmet veren En-Kay Doğalgaz & Tesisat.',
    },
  };

  servicesList = [
    'Doğalgaz Tesisatı',
    'Kombi Kurulum ve Bakımı',
    'Kaskat Montajı',
    'Merkezi klima sistemi(VRF)',
    'Sıhhi Tesisatı',
    'Kazan Dairesi',
    'Acil Arıza Servisi',
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.district = this.districtInfo[this.slug as keyof typeof this.districtInfo];
    });
  }
}

