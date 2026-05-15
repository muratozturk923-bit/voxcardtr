const footerLinks = {
  Ürün: ['Özellikler', 'Fiyatlandırma', 'Demo', 'Güvenlik'],
  Çözümler: ['Bireysel', 'Kurumsal', 'Ekipler', 'API'],
  Şirket: ['Hakkımızda', 'Blog', 'Basın', 'İletişim'],
  Destek: ['SSS', 'Yardım Merkezi', 'Gizlilik', 'Kullanım Şartları'],
};

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-10"
      style={{
        background: '#030305',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
                <span className="text-dark-900 font-bold text-sm">V</span>
              </div>
              <span className="font-serif text-xl font-medium tracking-widest text-white">
                VOX<span className="text-gold-500">CARD</span>
              </span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
              NFC ve QR teknolojisiyle tasarlanmış premium dijital kartvizit deneyimi.
              Prestijinizi tek dokunuşla paylaşın.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {['in', 'X', '▶', '📷'].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-gold-400 text-xs font-bold transition-all duration-300 hover:border-gold-500/30"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-white/50 text-xs font-medium tracking-widest uppercase mb-5">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/30 text-sm hover:text-white/70 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <p className="text-white/20 text-xs tracking-wide">
            © {new Date().getFullYear()} VoxCard. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            <p className="text-white/20 text-xs tracking-wide">
              Türkiye'de üretildi ve geliştirildi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
