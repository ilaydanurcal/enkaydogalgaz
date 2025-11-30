import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

interface Service {
  title: string;
  description: string;
  href: string;
  image: string;
}

interface Feature {
  title: string;
  description: string;
  image?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Ankara Doğalgaz, Kombi, Klima ve Tesisat Servisi | En-Kay Doğalgaz');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Ankara\'da doğalgaz tesisatı, kombi montajı, klima montaj, kaskat sistemleri ve sıhhi tesisat hizmetleri. 1998\'den bu zamana kadar 27+ yıl deneyim. 7/24 acil servis. 0533 641 7849' 
    });
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'Ankara doğalgaz, Ankara kombi montajı, Ankara klima, Ankara tesisat, doğalgaz tesisatı, kombi bakım, klima montaj, kaskat sistemleri, sıhhi tesisat, ısıtma soğutma, acil servis' 
    });
    this.meta.updateTag({ property: 'og:title', content: 'Ankara Doğalgaz, Kombi, Klima ve Tesisat Servisi | En-Kay Doğalgaz' });
    this.meta.updateTag({ property: 'og:description', content: 'Ankara\'da doğalgaz tesisatı, kombi montajı, klima montaj, kaskat sistemleri ve sıhhi tesisat hizmetleri. 1998\'den bu zamana kadar 27+ yıl deneyim.' });
  }
  services: Service[] = [
    {
      title: "Kombi Montajı",
      description: "Kombi kurulum, bakım ve onarım hizmetleri. Acil arızalarınız için 7/24 destek.",
      href: "/hizmetler/kombi",
      image: "/modern-boiler-installation-technician.jpg",
    },
    {
      title: "Kaskat Sistemleri",
      description: "Kaskat montajı, bakım ve tamiri. Su sızıntısı sorunlarını çözmede uzman.",
      href: "/hizmetler/kaskat",
      image: "/water-tank-installation-professional.jpg",
    },
    {
      title: "Klima Servisi",
      description: "Klima kurulum, temizliği ve onarımı. Soğutma ve ısıtma sistemleri.",
      href: "/hizmetler/klima",
      image: "/air-conditioning-installation.jpg",
    },
    {
      title: "Sıhhi Tesisatı",
      description: "Banyolar, mutfaklar ve daha fazlası için profesyonel su tesisatı.",
      href: "/hizmetler/sihhi-tesisat",
      image: "/professional-plumbing-bathroom.jpg",
    },
    {
      title: "Doğalgaz Tesisatı",
      description: "Güvenli ve sertifikalı doğalgaz tesisatı ve kurulum hizmetleri.",
      href: "/hizmetler/dogalgaz",
      image: "/natural-gas-installation-certified.jpg",
    },
    {
      title: "Kazan Dairesi",
      description: "Kazan kurulum, bakım ve onarım. Enerji verimliliği konsultasyonu.",
      href: "/hizmetler/kazan-dairesi",
      image: "/heating-boiler-room-system.jpg",
    },
  ];

  features: Feature[] = [
    {
      title: "27+ Yıl Deneyim",
      description: "1998'den bu zamana kadar Ankara'da güvenilir ve profesyonel hizmet",
      image: "/do-algaz-tesisat--hizmet-teknisyeni.jpg",
    },
    {
      title: "7/24 Acil Destek",
      description: "Gece gündüz bize ulaşabilirsiniz",
      image: "/professional-hvac-technician-working.jpg",
    },
    {
      title: "Garantili Çalışma",
      description: "Tüm işlerinize 6 ay garanti",
      image: "/natural-gas-installation-certified.jpg",
    },
  ];

  projects = [
    { title: "Konut Kompleksi - Kaskat Sistemi", image: "/residential-complex-water-system.jpg" },
    { title: "Ofis Binası - Klima Otomasyon", image: "/office-building-air-conditioning.jpg" },
    { title: "Hastane - Kazan Dairesi Kurulumu", image: "/hospital-heating-system.jpg" },
    { title: "Ticari Merkez - Doğalgaz", image: "/commercial-center-gas-installation.jpg" },
    { title: "Villa Projesi - Kompl. Tesisat", image: "/luxury-villa-plumbing-installation.jpg" },
    { title: "Fabrika - Isıtma-Soğutma", image: "/industrial-factory-hvac-system.jpg" },
  ];

  brands = [
    { name: 'Demirdöküm', logo: '/brands/demirdokum.png' },
    { name: 'Baymak', logo: '/brands/baymak.png' },
    { name: 'Eca', logo: '/brands/eca.png' },
    { name: 'Buderus', logo: '/brands/buderus.png' },
    { name: 'Kalde', logo: '/brands/kalde.png' },
    { name: 'Ünmak', logo: '/brands/unmak.png' },
    { name: 'Termodinamik', logo: '/brands/termodinamik.png' }
  ];
}

