# En-Kay Doğalgaz & Tesisat - Angular Uygulaması

Ankara'da doğalgaz, kombi, klima ve tesisat hizmetleri sunan En-Kay Doğalgaz & Tesisat web sitesi - Angular versiyonu.

## Özellikler

- ✅ Standalone Angular Components
- ✅ Dynamic Routing (`/hizmetler/:slug`, `/ankara/:slug`)
- ✅ Responsive Tasarım
- ✅ Tailwind CSS
- ✅ SVG Icons (ek kütüphane gerekmez)
- ✅ Form Handling
- ✅ SEO Optimizasyonu (JSON-LD)

## Gereksinimler

- Node.js 18+ 
- npm veya yarn

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm start
```

3. Tarayıcıda açın: `http://localhost:4200`

## Build

Production build için:
```bash
npm run build
```

Build çıktısı `dist/enkay-dogalgaz` klasöründe olacaktır.

## Proje Yapısı

```
src/
├── app/                    # Ana uygulama
│   ├── app.component.*     # Root component
│   ├── app.config.ts       # Angular config
│   ├── app.routes.ts       # Routing tanımları
│   └── pages/              # Sayfa componentleri
│       ├── home/           # Ana sayfa
│       ├── about/          # Hakkımızda
│       ├── contact/        # İletişim
│       ├── services/        # Hizmetler listesi
│       ├── service-detail/ # Hizmet detay
│       ├── ankara/         # Ankara bölgeleri
│       └── district-detail/# Bölge detay
├── components/             # Paylaşılan componentler
│   ├── header.component.*  # Header
│   ├── footer.component.*  # Footer
│   └── json-ld.component.ts # SEO Schema
├── index.html              # Ana HTML
├── main.ts                 # Bootstrap
└── styles.css              # Global stiller
```

## Teknolojiler

- Angular 18
- TypeScript
- Tailwind CSS
- Standalone Components

## Lisans

Özel proje - Tüm hakları saklıdır.

