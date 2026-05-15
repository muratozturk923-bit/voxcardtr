import React from 'react';
import Logo from './Logo.jsx';

const cols = [
  {
    title: 'Ürün',
    links: [
      { label: 'Özellikler', href: '#ozellikler' },
      { label: 'Kullanım Alanları', href: '#kullanim-alanlari' },
      { label: 'Paketler', href: '#paketler' },
      { label: 'Nasıl Çalışır', href: '#nasil-calisir' },
    ],
  },
  {
    title: 'Şirket',
    links: [
      { label: 'Hakkımızda', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Kariyer', href: '#' },
      { label: 'Basın Kiti', href: '#' },
    ],
  },
  {
    title: 'Destek',
    links: [
      { label: 'İletişim', href: '#iletisim' },
      { label: 'SSS', href: '#' },
      { label: 'Yardım Merkezi', href: '#' },
      { label: 'Durum', href: '#' },
    ],
  },
  {
    title: 'Yasal',
    links: [
      { label: 'Gizlilik Politikası', href: '#' },
      { label: 'KVKK', href: '#' },
      { label: 'Kullanım Şartları', href: '#' },
      { label: 'Çerez Politikası', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-20">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.5fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              VoxCard; NFC ve QR teknolojisiyle çalışan, prestijinizi temsil eden
              premium dijital kartvizit platformudur.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {['in', 'X', 'IG', 'YT'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs text-white/60 transition hover:border-champagne-300/50 hover:text-champagne-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {cols.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] uppercase tracking-luxury text-champagne-200/80">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-white/60 transition hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 hairline" />

        <div className="flex flex-col items-start justify-between gap-3 py-8 md:flex-row md:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} VoxCard. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-white/40">
            İstanbul ·{' '}
            <span className="gold-text">Crafted for premium professionals.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
