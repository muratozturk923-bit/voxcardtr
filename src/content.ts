type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Özellikler", href: "#urun" },
  { label: "Kullanım Alanları", href: "#kimler" },
  { label: "Paketler", href: "#paketler" },
  { label: "İletişim", href: "#iletisim" },
];

export const FEATURES = [
  "NFC ile Tek Dokunuş",
  "QR Kod ile Hızlı Paylaşım",
  "Güncellenebilir Profil",
  "WhatsApp, Telefon, Mail ve Web Bağlantıları",
  "Sosyal Medya Entegrasyonu",
  "IBAN ve Fatura Bilgileri",
  "Katalog / PDF / Portföy Paylaşımı",
  "Kurumsal Ekip Yönetimi",
];

export const PERSONAS = [
  "İş İnsanları",
  "Avukatlar",
  "Doktorlar",
  "Emlak Danışmanları",
  "Ajanslar",
  "Satış Ekipleri",
  "Etkinlik ve Fuar Katılımcıları",
  "Kurumsal Şirketler",
];

export const STEPS = [
  "VoxCard profilinizi oluşturun.",
  "İletişim, sosyal medya ve kurumsal bilgilerinizi ekleyin.",
  "NFC kartınızı veya QR kodunuzu paylaşın.",
  "Karşı taraf bilgilerinize tek dokunuşla ulaşsın.",
];

export const PACKAGES = [
  {
    name: "Başlangıç",
    tagline: "Bireysel profesyoneller için zarif giriş.",
    highlights: ["Tek profil", "QR + NFC paylaşım", "Temel analitik"],
    featured: false,
  },
  {
    name: "Premium",
    tagline: "Prestij odaklı markalar ve serbest meslekler.",
    highlights: ["Gelişmiş özelleştirme", "Öncelikli destek", "Marka uyumu"],
    featured: true,
  },
  {
    name: "Kurumsal",
    tagline: "Ekipler ve markalar için ölçeklenebilir kimlik.",
    highlights: ["Çoklu kullanıcı", "Yönetim paneli", "Özel entegrasyonlar"],
    featured: false,
  },
] as const;
