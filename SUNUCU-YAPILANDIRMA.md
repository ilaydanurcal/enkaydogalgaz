# Sunucu Yapılandırması - Sitemap ve Robots.txt

## Sorun
Angular SPA (Single Page Application) yapısı nedeniyle, `sitemap.xml` ve `robots.txt` dosyaları HTML olarak serve ediliyor. Bu dosyaların doğru şekilde (XML ve TXT formatında) serve edilmesi için sunucu yapılandırması gereklidir.

## Çözüm

### Apache Sunucular İçin (.htaccess)

1. `public/.htaccess` dosyası zaten oluşturuldu
2. Bu dosya build sonrası `dist/enkay-dogalgaz/browser/` klasörüne kopyalanacak
3. Apache'de `mod_rewrite` modülünün aktif olduğundan emin olun

**Kontrol:**
```bash
# Apache modüllerini kontrol edin
apache2ctl -M | grep rewrite
```

**Eğer aktif değilse:**
```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```

### Nginx Sunucular İçin

1. `nginx.conf.example` dosyasını referans alın
2. Nginx yapılandırmanızda şu kuralları ekleyin:

```nginx
# Sitemap.xml için özel location
location = /sitemap.xml {
    add_header Content-Type "text/xml; charset=utf-8";
    try_files $uri =404;
}

# Robots.txt için özel location
location = /robots.txt {
    add_header Content-Type "text/plain; charset=utf-8";
    try_files $uri =404;
}
```

### Build Sonrası Kontrol

Build aldıktan sonra şu dosyaların `dist/enkay-dogalgaz/browser/` klasöründe olduğundan emin olun:
- ✅ `sitemap.xml`
- ✅ `robots.txt`
- ✅ `.htaccess` (Apache için)

### Test

Build sonrası test edin:

```bash
# Sitemap test
curl -I https://enkaydogalgaz.com/sitemap.xml
# Content-Type: text/xml; charset=utf-8 olmalı

# Robots test
curl -I https://enkaydogalgaz.com/robots.txt
# Content-Type: text/plain; charset=utf-8 olmalı
```

### Google Search Console'da Yeniden Gönderme

1. Google Search Console'a giriş yapın
2. Site Haritaları bölümüne gidin
3. Eski sitemap'i silin
4. Yeni sitemap'i ekleyin: `https://enkaydogalgaz.com/sitemap.xml`
5. Birkaç gün bekleyin ve tekrar kontrol edin

## Önemli Notlar

- Build sonrası `.htaccess` dosyasının kopyalandığından emin olun
- Sunucu yapılandırmasını değiştirdikten sonra sunucuyu yeniden başlatın
- Dosyaların doğru Content-Type ile serve edildiğini test edin

