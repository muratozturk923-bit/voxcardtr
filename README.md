# VoxCard

Premium dijital kartvizit, NFC ve QR profil platformu için tasarlanmış kurumsal lansman web sitesi.

VoxCard; iş insanları, avukatlar, doktorlar, emlak danışmanları ve kurumsal ekipler için prestijli, güncellenebilir ve teknolojik bir dijital kimlik deneyimi sunar. Bu repo, ürünün Türkçe pazarlama (landing) sayfasını içerir.

## Marka Hissi

- Rolex'in prestijli, zamansız, elit duruşu
- Apple'ın sade, teknolojik ve premium kullanıcı deneyimi
- Siyah, koyu antrasit, şampanya altın ve cam efekti
- Minimal ama pahalı görünen tasarım dili

## Teknoloji

- **React 18** — bileşen tabanlı mimari
- **Vite** — hızlı geliştirme ve build
- **Tailwind CSS** — mobil öncelikli responsive tasarım
- Saf CSS ile premium NFC kart ve telefon mockup'ları (görsel kütüphane yok)

## Bölümler

1. Hero — "Prestijinizi Tek Dokunuşla Paylaşın"
2. Ürün Tanıtımı (özellik kartları)
3. Premium Tasarım Vurgusu — "Apple Kadar Sade, Rolex Kadar Prestijli"
4. Kullanım Senaryoları
5. Nasıl Çalışır?
6. Paketler / Fiyatlandırma (Başlangıç · Premium · Kurumsal)
7. CTA — "Kartvizitin Geleceğini Bugün Kullanın"
8. İletişim formu ve bilgi kartları

## Kurulum

```bash
npm install
npm run dev      # geliştirme sunucusu (http://localhost:5173)
npm run build    # üretim derlemesi (dist/)
npm run preview  # build önizlemesi
```

## Klasör Yapısı

```
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── NfcCard.jsx
│   ├── PhoneMockup.jsx
│   ├── Features.jsx
│   ├── PremiumDesign.jsx
│   ├── UseCases.jsx
│   ├── HowItWorks.jsx
│   ├── Pricing.jsx
│   ├── CTA.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── SectionHeading.jsx
│   └── Logo.jsx
└── styles/
    └── index.css
```

## Notlar

- Tüm metinler Türkçe'dir.
- Fiyatlar şimdilik "Teklif Alın" olarak işaretlenmiştir.
- Site SEO için `<title>`, meta description, Open Graph ve uygun başlık yapısı içerir.
- Görsel mockup'lar (NFC kart, iPhone) CSS ile premium şekilde üretilir; harici görsel yoktur.
