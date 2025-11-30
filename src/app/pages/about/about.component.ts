import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Hakkımızda - En-Kay Doğalgaz & Tesisat | Ankara 1998\'den Beri');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'En-Kay Doğalgaz & Tesisat, 1998\'den beri Ankara\'da doğalgaz, kombi, klima ve tesisat hizmetleri sunan güvenilir kurumsal işletme. 27+ yıl deneyim, sertifikalı teknisyenler, 7/24 acil destek.' 
    });
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'En-Kay Doğalgaz, Ankara tesisat firması, doğalgaz tesisatı Ankara, kombi servisi Ankara, klima servisi Ankara, 1998 kuruluş, 27 yıl deneyim' 
    });
    this.meta.updateTag({ property: 'og:title', content: 'Hakkımızda - En-Kay Doğalgaz & Tesisat | Ankara 1998\'den Beri' });
    this.meta.updateTag({ property: 'og:description', content: '1998\'den beri Ankara\'da doğalgaz, kombi, klima ve tesisat hizmetleri. 27+ yıl deneyim, sertifikalı teknisyenler.' });
  }
  stats = [
    { value: '27+', label: 'Yıl Deneyim', sublabel: '1998\'den beri' },
    { value: '11', label: 'Ankara İlçesi', sublabel: '7/24 hizmet' },
    { value: '6 Ay', label: 'Garanti', sublabel: 'İşçilik ve parça' },
  ];

  values = [
    {
      title: 'Güvenlik ve Sertifikasyon',
      desc: 'Tüm projelerimiz kanunen yetkilendirilmiş şekilde, İGDAŞ, Ankara Su ve Kanalizasyon kurumlarının tüm şartlarına uygun olarak yapılır.',
      image: '/natural-gas-installation-certified.jpg',
    },
    {
      title: 'Teknoloji ve İnovasyon',
      desc: 'Sistem tasarımı ve malzeme seçiminde enerji verimliliği ve işletme maliyeti minimizasyonunu hedefleriz.',
      image: '/modern-boiler-installation-technician.jpg',
    },
    {
      title: 'Müşteri Odaklılık',
      desc: 'Projekteki her adımı müşteri ile paylaşır, beklentileri yazılı sözleşmede açık tutarız.',
      image: '/professional-technician-repair-service.jpg',
    },
  ];

  expertise = [
    'Doğalgaz proje çizimi, onay ve gaz açımı',
    'Kombi kurulum, bakım ve onarım',
    'Kaskat sistemleri büyük yapılarda',
    'Kazan dairesi tasarımı ve modernizasyon',
    'Sıhhi tesisat (kurulum, onarım, kaçak tespiti)',
    'Klima keşif, BTU hesaplama, montaj',
    'Isıtma-soğutma hibrid sistemleri',
  ];

  process = [
    { num: '1', title: 'Ücretsiz Keşif & Teklif', desc: 'İlk görüşme tamamen ücretsiz. Detaylı keşif raporuyla net bir fiyat sunuyoruz.' },
    { num: '2', title: 'Yazılı Anlaşma', desc: 'Keşif sonrasında her detay sözleşmeye yazılır. Sürpriz harcama olmaz.' },
    { num: '3', title: 'Profesyonel Uygulama', desc: 'Şantiye disiplini ve güvenlik önlemleri ile titizlikle yürütülür.' },
    { num: '4', title: 'Test & Devreye Alma', desc: 'Sızdırmazlık testleri, kontroller ve 6 ay garanti yürürlüğe alınır.' },
  ];

  strengths = [
    { title: 'Belgeli ve Sertifikalı', desc: 'İGDAŞ, Ankara Su ve Kanalizasyon Kurumu onaylı çalışmalar' },
    { title: 'Hızlı Müdahale', desc: 'Aynı gün randevu ve 7/24 acil destek sistemi' },
    { title: 'Tam Garanti', desc: '6 ay işçilik ve yedek parça garantisi' },
    { title: 'Deneyimli Ekip', desc: '27+ yıllık proje tecrübesi (1998\'den beri)' },
    { title: 'Verimlilik Fokusü', desc: 'Enerji tasarrufu ve maliyet minimizasyonu' },
    { title: 'Şeffaf Fiyatlandırma', desc: 'Keşif sonrası net fiyat, gizli ücret yok' },
  ];
}

