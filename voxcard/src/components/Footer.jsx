export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <span className="text-[#0A0A0A] font-bold text-xs">V</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Vox<span className="text-gradient-gold">Card</span>
              </span>
            </a>
            <p className="text-sm text-white/30 leading-relaxed font-light max-w-xs">
              Premium dijital kartvizit deneyimi. NFC ve QR teknolojisiyle prestijinizi paylaşın.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs text-white/50 tracking-widest uppercase font-medium mb-4">Ürün</h4>
            <ul className="space-y-2.5">
              {['Özellikler', 'Fiyatlandırma', 'Kurumsal', 'NFC Kartlar'].map((item) => (
                <li key={item}>
                  <a href="#features" className="text-sm text-white/30 hover:text-gold transition-colors duration-300 font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-white/50 tracking-widest uppercase font-medium mb-4">Şirket</h4>
            <ul className="space-y-2.5">
              {['Hakkımızda', 'Blog', 'Kariyer', 'İletişim'].map((item) => (
                <li key={item}>
                  <a href="#contact" className="text-sm text-white/30 hover:text-gold transition-colors duration-300 font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-white/50 tracking-widest uppercase font-medium mb-4">Destek</h4>
            <ul className="space-y-2.5">
              {['Yardım Merkezi', 'Gizlilik Politikası', 'Kullanım Şartları', 'SSS'].map((item) => (
                <li key={item}>
                  <a href="#contact" className="text-sm text-white/30 hover:text-gold transition-colors duration-300 font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 font-light">
            &copy; {new Date().getFullYear()} VoxCard. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-5">
            {/* Social icons */}
            {[
              { label: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
              { label: 'Instagram', path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z' },
              { label: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
            ].map((social) => (
              <a
                key={social.label}
                href="#contact"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/30 hover:text-gold hover:bg-gold/10 transition-all duration-300"
                aria-label={social.label}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
