import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
  currentDate = new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Kullanım Koşulları - En-Kay Doğalgaz & Tesisat | Ankara');
    this.meta.updateTag({ 
      name: 'description', 
      content: 'En-Kay Doğalgaz & Tesisat kullanım koşulları. Ankara tesisat hizmetleri veren firmamızın hizmet şartları ve kullanım koşulları.' 
    });
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'kullanım koşulları, hizmet şartları, ankara tesisat koşulları, enkay doğalgaz koşulları, tesisat hizmet şartları' 
    });
  }
}

