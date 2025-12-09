import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  currentDate = new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Gizlilik Politikası - En-Kay Doğalgaz & Tesisat | Ankara');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'En-Kay Doğalgaz & Tesisat gizlilik politikası. Ankara tesisat hizmetleri veren firmamızın kişisel veri koruma ve gizlilik politikası.' 
    });
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'gizlilik politikası, kişisel veri koruma, ankara tesisat gizlilik, enkay doğalgaz gizlilik, veri güvenliği' 
    });
  }
}

