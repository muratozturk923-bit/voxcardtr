import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const ref = useScrollAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="py-28 lg:py-36 relative"
      style={{ background: '#080810' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div ref={ref} className="animate-on-scroll">
            <p className="text-gold-500 text-xs font-medium tracking-widest uppercase mb-4">
              İletişim
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
              Projenizi{' '}
              <span className="text-gold-gradient">Birlikte</span>
              <br />
              Tasarlayalım
            </h2>
            <div className="h-px mb-8 w-16"
              style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />

            <p className="text-white/50 text-lg leading-relaxed mb-12">
              VoxCard hakkında bilgi almak, teklif istemek veya kurumsal çözümler için
              ekibimizle iletişime geçin.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              {[
                {
                  label: 'E-Posta',
                  value: 'info@voxcard.com.tr',
                  icon: '✉',
                },
                {
                  label: 'Telefon',
                  value: '+90 (212) 000 00 00',
                  icon: '☎',
                },
                {
                  label: 'Adres',
                  value: 'Levent, İstanbul, Türkiye',
                  icon: '◎',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-gold-400 text-sm"
                    style={{
                      background: 'rgba(201,168,76,0.08)',
                      border: '1px solid rgba(201,168,76,0.15)',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/30 text-xs tracking-widest uppercase mb-0.5">{item.label}</p>
                    <p className="text-white/70 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="animate-on-scroll glass-card rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-medium text-white mb-8">Teklif İste</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                    Adınız
                  </label>
                  <input
                    type="text"
                    placeholder="Ahmet"
                    className="w-full px-4 py-3.5 rounded-xl text-white placeholder-white/20 text-sm outline-none transition-all duration-300 focus:border-gold-500/50"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onFocus={(e) => {
                      e.target.style.border = '1px solid rgba(201,168,76,0.4)';
                      e.target.style.background = 'rgba(201,168,76,0.04)';
                    }}
                    onBlur={(e) => {
                      e.target.style.border = '1px solid rgba(255,255,255,0.08)';
                      e.target.style.background = 'rgba(255,255,255,0.04)';
                    }}
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                    Soyadınız
                  </label>
                  <input
                    type="text"
                    placeholder="Yılmaz"
                    className="w-full px-4 py-3.5 rounded-xl text-white placeholder-white/20 text-sm outline-none transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onFocus={(e) => {
                      e.target.style.border = '1px solid rgba(201,168,76,0.4)';
                      e.target.style.background = 'rgba(201,168,76,0.04)';
                    }}
                    onBlur={(e) => {
                      e.target.style.border = '1px solid rgba(255,255,255,0.08)';
                      e.target.style.background = 'rgba(255,255,255,0.04)';
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                  E-Posta
                </label>
                <input
                  type="email"
                  placeholder="ahmet@sirket.com"
                  className="w-full px-4 py-3.5 rounded-xl text-white placeholder-white/20 text-sm outline-none transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '1px solid rgba(201,168,76,0.4)';
                    e.target.style.background = 'rgba(201,168,76,0.04)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '1px solid rgba(255,255,255,0.08)';
                    e.target.style.background = 'rgba(255,255,255,0.04)';
                  }}
                />
              </div>

              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  placeholder="+90 5XX XXX XX XX"
                  className="w-full px-4 py-3.5 rounded-xl text-white placeholder-white/20 text-sm outline-none transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '1px solid rgba(201,168,76,0.4)';
                    e.target.style.background = 'rgba(201,168,76,0.04)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '1px solid rgba(255,255,255,0.08)';
                    e.target.style.background = 'rgba(255,255,255,0.04)';
                  }}
                />
              </div>

              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                  İlgilendiğiniz Paket
                </label>
                <select
                  className="w-full px-4 py-3.5 rounded-xl text-white/70 text-sm outline-none transition-all duration-300 cursor-pointer"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '1px solid rgba(201,168,76,0.4)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '1px solid rgba(255,255,255,0.08)';
                  }}
                >
                  <option value="" style={{ background: '#0D0D18' }}>Seçiniz...</option>
                  <option value="starter" style={{ background: '#0D0D18' }}>Başlangıç</option>
                  <option value="premium" style={{ background: '#0D0D18' }}>Premium</option>
                  <option value="enterprise" style={{ background: '#0D0D18' }}>Kurumsal</option>
                </select>
              </div>

              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                  Mesajınız
                </label>
                <textarea
                  rows={4}
                  placeholder="VoxCard hakkında düşündüklerinizi veya sorularınızı yazın..."
                  className="w-full px-4 py-3.5 rounded-xl text-white placeholder-white/20 text-sm outline-none transition-all duration-300 resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '1px solid rgba(201,168,76,0.4)';
                    e.target.style.background = 'rgba(201,168,76,0.04)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '1px solid rgba(255,255,255,0.08)';
                    e.target.style.background = 'rgba(255,255,255,0.04)';
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-full py-4 rounded-xl text-sm font-semibold tracking-widest uppercase"
              >
                Teklif Talebi Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
