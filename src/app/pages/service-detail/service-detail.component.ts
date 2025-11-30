import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  slug: string = '';
  service: any = null;

  serviceDetails: any = {
    kombi: {
      title: 'Kombi Servisi',
      subtitle: 'Profesyonel Kombi Kurulum, Bakım ve Onarım Hizmetleri',
      description: 'Kombi sistemlerinizin optimum performansla çalışması için uzman teknik ekibimizle profesyonel hizmetler sunuyoruz. Yeni kurulum, periyodik bakım ve acil onarım hizmetlerimizde güvenilir ve kaliteli çözümler sağlıyoruz.',
      fullDescription: 'Kombi sistemleri, konutların ısıtılması ve sıcak su ihtiyaçlarının karşılanması açısından kritik altyapı bileşenleridir. En güncel teknolojiye sahip kombi modellerinden geleneksel sistemlere kadar geniş bir yelpazede hizmet vermekteyiz. 1998 yılından bu yana 27 yılı aşkın deneyimimiz ve sertifikalı teknisyen kadromuzla, her türlü kombi problemine hızlı, etkili ve güvenilir çözümler üretmekteyiz.',
      image: '/modern-boiler-installation-technician.jpg',
      services: [
        'Yeni Kombi Kurulum ve Bağlantı',
        'Periyodik Bakım ve Temizlik',
        'Arıza Tespit ve Onarım',
        '7/24 Acil Servis',
        'Kombi Değişim Hizmetleri',
        'Verimlilik Kontrolü ve Ayarlaması',
      ],
      benefits: [
        'Enerji verimliliği ve maliyet tasarrufu',
        'Çevre dostu düşük karbon salınımı',
        'Uzun ömürlü ve dayanıklı sistem kullanımı',
        'Acil durumlarda 7/24 teknik destek hizmeti',
      ],
    },
    kaskat: {
      title: 'Kaskat Tesisatı',
      subtitle: 'Su Deposu ve Kaskat Sistemleri Kurulum Hizmetleri',
      description: 'Konutların su ihtiyaçlarını karşılayan kaskat sistemlerinin profesyonel kurulum, bakım ve onarım hizmetlerinde uzman ekibimizle hizmet vermekteyiz.',
      fullDescription: 'Kaskat sistemleri, konutlarda su depolanması ve dağıtılması için gerekli kritik altyapı bileşenleridir. Su sızıntıları, basınç problemleri ve kuraklık durumlarında kaskat sistemleri hayati önem taşımaktadır. Ankara\'nın tüm bölgelerinde, modern teknoloji ve kaliteli malzemeler kullanarak kaskat sistemlerine yönelik kapsamlı çözümler sunmaktayız.',
      image: '/water-tank-installation-professional.jpg',
      services: [
        'Kaskat Montajı ve Kurulum',
        'Su Sızıntısı Tespiti ve Tamiri',
        'Kaskat Bakım ve Temizliği',
        'Yeni Kaskat Sistemi Tasarımı',
        'Ek Kaskat Ekleme Hizmetleri',
        'Su Kalitesi Kontrolü',
      ],
      benefits: ['Su kütlesinde optimum denge sağlama', 'Kesintisiz ve güvenilir su tedariki', 'Acil durumlar için güvenilir kaynak', 'Uzun vadede ekonomik çözümler'],
    },
    klima: {
      title: 'Klima Servisi',
      subtitle: 'Soğutma ve Isıtma Sistemleri Kurulum ve Bakım Hizmetleri',
      description: 'Modern klima sistemlerinin profesyonel kurulum, periyodik bakım ve onarım hizmetlerinde uzman ekibimizle hizmet vermekteyiz.',
      fullDescription: 'Klima sistemleri, yaşam kalitesini artıran ve konutların konforunu sağlayan kritik sistemlerdir. Yaz aylarında soğutma, kış aylarında ısıtma ihtiyaçlarını karşılarken, enerji verimliliği ve çevre dostu çözümler önceliğimizdir. En güncel teknoloji ve kanıtlanmış onarım yöntemlerini kullanarak, müşterilerimize en yüksek kalitede hizmet sunmaktayız.',
      image: '/air-conditioning-installation.jpg',
      services: [
        'Klima Kurulum ve Montajı',
        'Bakım ve Temizlik',
        'Onarım Hizmetleri',
        'Soğutucu Sıvısı Doldurma',
        'Enerji Verimliliği Kontrolü',
        'Eski Klima Söküm ve Bertaraf',
      ],
      benefits: ['Optimum oda sıcaklığı kontrolü', 'Düşük enerji tüketimi ve maliyet tasarrufu', 'Yüksek iç mekan hava kalitesi', 'Uzun ömürlü ve güvenilir cihaz kullanımı'],
    },
    'sihhi-tesisat': {
      title: 'Sıhhi Tesisatı',
      subtitle: 'Su Tesisatı Sistemleri Kurulum ve Onarım Hizmetleri',
      description: 'Banyolar, mutfaklar ve tüm su sistemleri için profesyonel tesisatçılık hizmetleri sunmaktayız.',
      fullDescription: 'Sıhhi tesisatı, konutların en kritik altyapı sistemlerinden biridir. Temiz su tedariki ve atık su yönetiminden sorumlu olan bu sistemler, sağlık ve konfor açısından büyük önem taşımaktadır. Tüm işlemlerimizde ulusal standartlara uygun, dayanıklı ve güvenilir malzemeler kullanarak, uzun ömürlü tesisat sistemleri kurmaktayız.',
      image: '/professional-plumbing-bathroom.jpg',
      services: [
        'Su Tesisatı Kurulum',
        'Tuvalet ve Eviye Montajı',
        'Bağlantı Onarımları',
        'Su Kaçağı Tespiti',
        'Borulama ve Yenileme',
        'Yağmur Suyu Sistemi Kurulumu',
      ],
      benefits: ['Güvenilir ve kaliteli su tedariki', 'Sağlık standartlarına uygun güvenli sistemler', 'Uzun ömürlü ve dayanıklı altyapı', 'Kesintisiz ve profesyonel hizmet garantisi'],
    },
    dogalgaz: {
      title: 'Doğalgaz Tesisatı',
      subtitle: 'Sertifikalı ve Güvenli Doğalgaz Kurulum Hizmetleri',
      description: 'Sertifikalı ve güvenli doğalgaz tesisatı kurulum, bakım ve onarım hizmetlerinde uzman ekibimizle hizmet vermekteyiz.',
      fullDescription: 'Doğalgaz sistemleri, güvenlik açısından en yüksek dikkat gerektiren kritik altyapı sistemleridir. Tüm işlemlerimiz resmi standartlara uygun olarak gerçekleştirilmekte ve İGDAŞ sertifikasyon süreçlerine tabi tutulmaktadır. Ankara\'da 1998 yılından bu yana güvenli, kaliteli ve sertifikalı doğalgaz tesisatı hizmetleri sunmaktayız.',
      image: '/natural-gas-installation-certified.jpg',
      services: [
        'Yeni Doğalgaz Tesisatı',
        'Sistemi Denetim ve Sertifikasyon',
        'Bakım ve Kontrol',
        'Kaçak Tespit ve Tamiri',
        'Cihaz Bağlantıları',
        'Güvenlik İncelemesi',
      ],
      benefits: ['Tam güvenlik standardı ve uyumluluk', 'Resmi sertifikasyon ve belgelendirme', 'Enerji verimliliği kontrolü ve optimizasyon', '7/24 teknik destek ve acil müdahale hizmeti'],
    },
    'kazan-dairesi': {
      title: 'Kazan Dairesi',
      subtitle: 'Merkezi Isıtma Sistemleri Kurulum ve Bakım Hizmetleri',
      description: 'Kazan kurulum, periyodik bakım ve enerji verimliliği optimizasyonu hizmetlerinde uzman ekibimizle hizmet vermekteyiz.',
      fullDescription: 'Kazan dairesi, merkezi ısıtma sistemlerinin kalbini oluşturan kritik altyapı bileşenidir. Kış aylarında konutların ısıtılmasında hayati rol oynamaktadır. Enerji tasarrufu sağlayan modern kazan sistemlerine geçiş süreçlerinde, mühendislik danışmanlığı ve profesyonel uygulama hizmetleri sunmaktayız.',
      image: '/heating-boiler-room-system.jpg',
      services: [
        'Kazan Kurulum ve Montajı',
        'Periyodik Bakım',
        'Enerji Analizi ve Optimizasyon',
        'Kombi Sistemine Dönüştürme',
        'Radyatör Montajı',
        'Enerji Belgesi Hazırlanması',
      ],
      benefits: ['Merkezi ısıtma sistemi avantajları', 'Enerji verimliliği ve maliyet tasarrufu', 'Yaşam konforunu artıran çözümler', 'Uzun ömürlü ve güvenilir sistem garantisi'],
    },
    'isitma-sogutma': {
      title: 'Isıtma-Soğutma Sistemleri',
      subtitle: 'Entegre İklim Kontrolü Çözümleri',
      description: 'Yaz ve kış aylarında optimum iklim kontrolü için entegre sistem çözümleri sunmaktayız.',
      fullDescription: 'Modern konutlarda ısıtma ve soğutma sistemlerinin başarılı bir şekilde entegre edilmesi gerekmektedir. Tüm yıl boyunca konforlu yaşam koşulları sağlamak için, enerji verimli teknolojileri birleştirerek kapsamlı sistem çözümleri geliştirmekteyiz.',
      image: '/industrial-factory-hvac-system.jpg',
      services: [
        'Sistem Tasarımı ve Planlaması',
        'Klima ve Kazan Kurulumu',
        'Otomation Sistemleri',
        'Bakım ve Onarım',
        'Enerji Yönetim Sistemi',
        'Uzman Danışmanlık',
      ],
      benefits: ['Tüm yıl boyunca optimum konfor sağlama', 'Enerji verimliliği ve maliyet optimizasyonu', 'Akıllı otomatik kontrol sistemleri', 'Sağlıklı ve kaliteli iç ortam havası'],
    },
  };

  brands = [
    { name: 'Demirdöküm', logo: '/brands/demirdokum.png' },
    { name: 'Baymak', logo: '/brands/baymak.png' },
    { name: 'Eca', logo: '/brands/eca.png' },
    { name: 'Buderus', logo: '/brands/buderus.png' },
    { name: 'Kalde', logo: '/brands/kalde.png' },
    { name: 'Ünmak', logo: '/brands/unmak.png' },
    { name: 'Termodinamik', logo: '/brands/termodinamik.png' }
  ];

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.service = this.serviceDetails[this.slug as keyof typeof this.serviceDetails];
      
      if (this.service) {
        this.updateSEO();
      }
    });
  }

  updateSEO() {
    const serviceKeywords: { [key: string]: string } = {
      kombi: 'kombi servisi, kombi bakım, kombi montaj, kombi onarım, Ankara kombi, kombi kurulum',
      kaskat: 'kaskat tesisatı, kaskat montaj, kaskat bakım, su deposu, kaskat onarım, Ankara kaskat',
      klima: 'klima servisi, klima montaj, klima bakım, klima onarım, Ankara klima, klima kurulum, split klima',
      'sihhi-tesisat': 'sıhhi tesisat, su tesisatı, banyo tesisatı, mutfak tesisatı, tesisat onarım, Ankara tesisat',
      dogalgaz: 'doğalgaz tesisatı, doğalgaz montaj, doğalgaz kurulum, İGDAŞ, doğalgaz açımı, Ankara doğalgaz',
      'kazan-dairesi': 'kazan dairesi, kazan kurulum, kazan bakım, merkezi ısıtma, kazan onarım, Ankara kazan'
    };

    const title = `${this.service.title} - Ankara | En-Kay Doğalgaz & Tesisat`;
    const description = `${this.service.subtitle}. Ankara'da 1998'den beri 27+ yıl deneyim. Profesyonel ve güvenilir hizmet. 7/24 acil servis. 0533 641 7849`;
    const keywords = serviceKeywords[this.slug] || 'Ankara tesisat, profesyonel hizmet';

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
  }

  getOtherServices(): Array<{slug: string, svc: any}> {
    if (!this.slug) {
      return [];
    }
    return Object.entries(this.serviceDetails)
      .filter(([key]) => key !== this.slug)
      .map(([slug, svc]) => ({ slug, svc }));
  }

  trackBySlug(index: number, item: {slug: string, svc: any}): string {
    return item?.slug || index.toString();
  }
}

