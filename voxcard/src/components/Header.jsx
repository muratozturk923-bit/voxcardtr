import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Özellikler', href: '#ozellikler' },
  { label: 'Kullanım Alanları', href: '#kullanim' },
  { label: 'Paketler', href: '#paketler' },
  { label: 'İletişim', href: '#iletisim' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-anthracite-950/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center shadow-lg">
              <span className="text-anthracite-950 font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-semibold tracking-tight">
              Vox<span className="gold-text">Card</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-anthracite-200 hover:text-gold-400 transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#paketler"
              className="px-6 py-2.5 text-sm font-medium rounded-full gold-gradient text-anthracite-950 hover:shadow-lg hover:shadow-gold-500/20 transition-all duration-300 hover:scale-105"
            >
              Teklif Al
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Menüyü aç/kapat"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-18 bg-anthracite-950/95 backdrop-blur-3xl transition-all duration-500 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 -mt-18">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-light text-white hover:text-gold-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#paketler"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-8 py-3 text-base font-medium rounded-full gold-gradient text-anthracite-950"
          >
            Teklif Al
          </a>
        </nav>
      </div>
    </header>
  )
}
