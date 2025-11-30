import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'iletisim',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'hizmetler',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'hizmetler/:slug',
    loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent)
  },
  {
    path: 'ankara',
    loadComponent: () => import('./pages/ankara/ankara.component').then(m => m.AnkaraComponent)
  },
  {
    path: 'ankara/:slug',
    loadComponent: () => import('./pages/district-detail/district-detail.component').then(m => m.DistrictDetailComponent)
  },
  {
    path: 'gizlilik',
    loadComponent: () => import('./pages/privacy/privacy.component').then(m => m.PrivacyComponent)
  },
  {
    path: 'kosullar',
    loadComponent: () => import('./pages/terms/terms.component').then(m => m.TermsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

