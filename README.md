# VoxCard – Premium Dijital Kartvizit Platformu

VoxCard, NFC ve QR teknolojisiyle çalışan premium dijital kartvizit deneyimi için hazırlanmış kurumsal lansman sitesidir.

## Teknoloji Yığını

- **React 19** – UI bileşen yapısı
- **Vite** – Hızlı geliştirme ve build aracı
- **Tailwind CSS 3** – Utility-first styling
- **Google Fonts** – Inter & Playfair Display

## Kurulum

```bash
cd voxcard
npm install
npm run dev
```

## Build

```bash
cd voxcard
npm run build
npm run preview
```

## Proje Yapısı

```
voxcard/
├── public/
│   └── voxcard-icon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Sticky navigasyon
│   │   ├── Hero.jsx            # Ana hero bölümü + mockuplar
│   │   ├── Features.jsx        # Özellik kartları
│   │   ├── PremiumSection.jsx  # Tasarım felsefesi
│   │   ├── UseCases.jsx        # Kullanım senaryoları
│   │   ├── HowItWorks.jsx      # Nasıl çalışır?
│   │   ├── Testimonials.jsx    # Müşteri görüşleri
│   │   ├── Pricing.jsx         # Fiyatlandırma paketleri
│   │   ├── CTA.jsx             # Call-to-action bölümü
│   │   ├── Contact.jsx         # İletişim formu
│   │   └── Footer.jsx          # Alt bölüm
│   ├── hooks/
│   │   └── useScrollAnimation.js  # IntersectionObserver hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Global styles + Tailwind
├── index.html                  # SEO meta etiketleri
├── tailwind.config.js
└── vite.config.js
```

## Tasarım Sistemi

- **Renkler:** Siyah (#080810), Antrasit (#1C1C1E), Şampanya Altın (#C9A84C), Beyaz
- **Fontlar:** Inter (sans-serif), Playfair Display (serif başlıklar)
- **Efektler:** Glassmorphism kartlar, gold gradient butonlar, scroll animasyonları, float animasyonu
