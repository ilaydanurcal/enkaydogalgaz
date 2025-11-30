## Ölçümleme Rehberi

### 1. GA4 Kurulumu
- Google Analytics hesabında yeni GA4 mülk oluştur
- Web stream: https://enkaydogalgaz.com
- Gtag veya Google Tag Manager (GTM-TX86PVTP) üzerinden GA4 yapılandırması
- Özel boyutlar:
  - `service_category` (event parametresi)
  - `lead_source` (form parametresi)
- Dönüşüm olayları:
  - `call_click`
  - `whatsapp_click`
  - `form_submit`
  - `quote_request`

### 2. Search Console
- Mülk doğrulaması: DNS veya GA4 bağlantısı
- Site haritası: /sitemap.xml gönder
- Üst sorgular: “Ankara doğalgaz”, “kombi montajı”, “ısıtma soğutma sistemleri”
- URL Denetimi: kritik hizmet sayfaları indekslenme takibi

### 3. Event Tanımları
- **call_click**: Telefon CTA’ları (header, footer, iletişim sayfası) – `click` trigger, link içerir `tel:`
- **whatsapp_click**: WhatsApp butonu (https://wa.me/905336417849) – `click` trigger
- **map_direction**: Google Maps yönlendirme linki (GOOGLE_MAPS_PLACE_URL) – `click` trigger
- **form_submit**: İletişim formu gönderimi – form submission trigger, `form_id` parametresi
- **quote_request**: Teklif formu veya kampanya landing formu için özel event

### 4. GTM Uygulama Adımları
1. GTM’de GA4 Configuration Tag oluştur
2. Her event için GA4 Event Tag + uygun trigger
3. Test mode (Preview) ile event akışını kontrol et
4. GA4 DebugView’da doğrula, sonra publish et

### 5. Aylık SEO Performans Raporu
- **Trafik & Erişim**
  - Organik oturumlar (GA4)
  - Search Console tıklama ve gösterim
  - Google Business çağrı, rota, web site tıklaması
- **Dönüşümler**
  - call_click
  - whatsapp_click
  - form_submit
  - map_direction
- **Backlink Gelişimi**
  - Yeni backlink sayısı
  - DA ortalaması
  - Anchor dağılımı (ANCHOR-PLAN.csv referansı)
- **İçerik Performansı**
  - Blog sayfası görüntülenmeleri
  - Ortalama okuma süresi
  - Top landing pages
- **Teknik İzleme**
  - Core Web Vitals (PageSpeed Insights)
  - Index coverage raporu
  - Schema doğrulama sonucu

### 6. Raporlama Formatı (Aylık)
```
1. Özet (KPIs)
2. Organik Trafik Analizi
3. Dönüşüm Analizi
4. Google Business Insights
5. Backlink & PR Çalışmaları
6. İçerik Performansı
7. Aksiyon Planı (sonraki ay için)
```

