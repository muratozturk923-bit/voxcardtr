const navItems = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Özellikler', href: '#ozellikler' },
  { label: 'Kullanım Alanları', href: '#kullanim' },
  { label: 'Paketler', href: '#paketler' },
  { label: 'İletişim', href: '#iletisim' },
];

const features = [
  'NFC ile Tek Dokunuş',
  'QR Kod ile Hızlı Paylaşım',
  'Güncellenebilir Profil',
  'WhatsApp, Telefon, Mail ve Web Bağlantıları',
  'Sosyal Medya Entegrasyonu',
  'IBAN ve Fatura Bilgileri',
  'Katalog / PDF / Portföy Paylaşımı',
  'Kurumsal Ekip Yönetimi',
];

const audiences = [
  'İş İnsanları',
  'Avukatlar',
  'Doktorlar',
  'Emlak Danışmanları',
  'Ajanslar',
  'Satış Ekipleri',
  'Etkinlik ve Fuar Katılımcıları',
  'Kurumsal Şirketler',
];

const steps = [
  'VoxCard profilinizi oluşturun.',
  'İletişim, sosyal medya ve kurumsal bilgilerinizi ekleyin.',
  'NFC kartınızı veya QR kodunuzu paylaşın.',
  'Karşı taraf bilgilerinize tek dokunuşla ulaşsın.',
];

const packages = [
  {
    name: 'Başlangıç',
    summary: 'Kişisel prestijini dijitalleştirmek isteyen profesyoneller için.',
    highlights: ['Premium profil sayfası', 'QR paylaşım alanı', 'Temel bağlantılar', 'Mobil öncelikli deneyim'],
  },
  {
    name: 'Premium',
    summary: 'Aktif networking yapan ve markasını güçlü sunmak isteyenler için.',
    highlights: ['NFC kart deneyimi', 'Katalog ve portföy paylaşımı', 'IBAN ve fatura bilgileri', 'Özel görünüm düzeni'],
    featured: true,
  },
  {
    name: 'Kurumsal',
    summary: 'Ekiplerini tek çatı altında yönetmek isteyen şirketler için.',
    highlights: ['Ekip profil yönetimi', 'Kurumsal kimlik uyarlaması', 'Toplu kart süreçleri', 'Öncelikli teklif akışı'],
  },
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-obsidian text-white">
      <AmbientBackground />
      <Header />
      <Hero />
      <ProductSection />
      <PrestigeSection />
      <AudienceSection />
      <HowItWorks />
      <PricingSection />
      <FinalCta />
      <Footer />
    </main>
  );
}

function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
      <div className="absolute right-[-12rem] top-80 h-[32rem] w-[32rem] rounded-full bg-champagne/10 blur-[130px]" />
      <div className="absolute bottom-0 left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-white/5 blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-obsidian/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10" aria-label="Ana navigasyon">
        <a href="#hero" className="group flex items-center gap-3" aria-label="VoxCard ana sayfa">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-gold/10 shadow-[0_0_38px_rgba(217,180,103,0.18)]">
            <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_18px_rgba(217,180,103,0.8)]" />
          </span>
          <span className="text-lg font-semibold tracking-[0.32em] text-white">VOXCARD</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/70 transition hover:text-gold">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#iletisim"
          className="hidden rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-sm font-semibold text-champagne shadow-gold-soft transition hover:-translate-y-0.5 hover:bg-gold hover:text-black md:inline-flex"
        >
          Teklif Al
        </a>
      </nav>
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 pb-4 sm:px-8 lg:hidden">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-xl transition hover:border-gold/40 hover:text-champagne"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-10 lg:pb-32">
      <div className="max-w-3xl">
        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.32em] text-champagne backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Premium NFC ve QR profil platformu
        </div>
        <h1 className="font-display text-5xl leading-[0.94] tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl">
          Prestijinizi Tek Dokunuşla Paylaşın
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
          VoxCard, NFC ve QR teknolojisiyle tasarlanmış premium dijital kartvizit deneyimidir. İş bağlantılarınızı daha hızlı, daha şık ve daha etkili şekilde kurun.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="#iletisim">VoxCard’ımı Oluştur</ButtonLink>
          <ButtonLink href="#demo" variant="secondary">
            Demo Profili Gör
          </ButtonLink>
        </div>
        <div className="mt-12 grid max-w-xl grid-cols-3 gap-3 border-t border-white/10 pt-8">
          <Metric value="NFC" label="Tek dokunuşla paylaşım" />
          <Metric value="QR" label="Her cihazda hızlı erişim" />
          <Metric value="∞" label="Güncellenebilir profil" />
        </div>
      </div>

      <HeroVisual />
    </section>
  );
}

function ButtonLink({ href, children, variant = 'primary' }) {
  const classes =
    variant === 'primary'
      ? 'border-gold/30 bg-gold-gradient text-black shadow-gold-soft hover:shadow-gold-strong'
      : 'border-white/15 bg-white/[0.06] text-white backdrop-blur-xl hover:border-gold/40 hover:text-champagne';

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border px-7 py-4 text-sm font-bold transition duration-300 hover:-translate-y-1 ${classes}`}
    >
      {children}
    </a>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <div className="font-display text-2xl text-champagne sm:text-3xl">{value}</div>
      <p className="mt-2 text-xs leading-5 text-white/50">{label}</p>
    </div>
  );
}

function HeroVisual() {
  return (
    <div id="demo" className="relative min-h-[560px] lg:min-h-[650px]" aria-label="VoxCard kart ve telefon arayüzü maketi">
      <div className="absolute inset-x-4 top-10 h-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="card-tilt absolute left-0 top-24 z-20 w-[88%] max-w-[430px] rounded-[2rem] border border-gold/40 bg-[linear-gradient(135deg,#151515,#050505_44%,#231c10)] p-6 shadow-card sm:left-6">
        <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.25),transparent_28%),linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.13)_44%,transparent_52%)]" />
        <div className="relative flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.42em] text-gold/80">VoxCard</p>
            <h2 className="mt-16 font-display text-4xl tracking-[-0.04em] text-white">Yönetici Siyahı</h2>
          </div>
          <div className="grid h-14 w-14 place-items-center rounded-2xl border border-gold/40 bg-gold/10">
            <NfcIcon />
          </div>
        </div>
        <div className="relative mt-14 flex items-end justify-between">
          <div>
            <p className="text-sm text-white/50">Premium NFC Kart</p>
            <p className="mt-1 text-xs uppercase tracking-[0.26em] text-white/30">Metal Seri</p>
          </div>
          <div className="h-16 w-16 rounded-xl border border-white/15 bg-[linear-gradient(90deg,#111_2px,transparent_2px),linear-gradient(#111_2px,transparent_2px)] bg-[size:9px_9px] opacity-90" />
        </div>
      </div>

      <div className="phone-float absolute right-0 top-0 z-10 w-[72%] max-w-[315px] rounded-[2.6rem] border border-white/15 bg-[#050505] p-3 shadow-phone sm:right-6">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#171717,#080808)] p-4">
          <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-white/20" />
          <div className="rounded-[1.5rem] border border-gold/20 bg-white/[0.055] p-5 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gold-gradient text-xl font-bold text-black">VC</div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-gold">Kurumsal Profil</p>
                <h3 className="mt-1 text-lg font-semibold text-white">Murat Öztürk</h3>
                <p className="text-sm text-white/50">Kurucu & CEO</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {['Telefon', 'WhatsApp', 'Web Sitesi', 'Konum'].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                  <span className="text-sm text-white/70">{item}</span>
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {['LinkedIn', 'PDF', 'IBAN'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] py-3 text-center text-xs text-white/50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function NfcIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path d="M9 10.5C10.8 12.2 11.8 13.7 11.8 15.1C11.8 16.5 10.8 18 9 19.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14 7.5C16.7 10.1 18.1 12.6 18.1 15.1C18.1 17.5 16.7 20 14 22.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M19 4.5C22.8 8.1 24.7 11.7 24.7 15.1C24.7 18.4 22.8 22 19 25.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ProductSection() {
  return (
    <section id="ozellikler" className="section-spacing">
      <SectionIntro
        eyebrow="Ürün Tanıtımı"
        title="Bir Karttan Daha Fazlası"
        text="VoxCard yalnızca bir kartvizit değil; kişisel markanızı, şirketinizi ve iletişim kanallarınızı tek merkezde toplayan prestijli bir dijital kimliktir."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard key={feature} title={feature} index={index + 1} />
        ))}
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.36em] text-gold">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-white sm:text-6xl">{title}</h2>
      <p className="mt-6 text-lg leading-8 text-white/60">{text}</p>
    </div>
  );
}

function FeatureCard({ title, index }) {
  return (
    <article className="glass-card group min-h-48 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/40">
      <div className="mb-9 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.26em] text-white/30">0{index}</span>
        <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/25 bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-black">
          +
        </span>
      </div>
      <h3 className="text-xl font-semibold leading-snug text-white">{title}</h3>
    </article>
  );
}

function PrestigeSection() {
  return (
    <section className="section-spacing">
      <div className="grid gap-8 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-7 shadow-luxury backdrop-blur-2xl sm:p-10 lg:grid-cols-[0.92fr_1.08fr] lg:p-14">
        <div className="relative min-h-[360px] rounded-[2rem] border border-gold/20 bg-[radial-gradient(circle_at_22%_15%,rgba(217,180,103,0.28),transparent_28%),linear-gradient(145deg,#090909,#1b1b1b)] p-6">
          <div className="absolute inset-6 rounded-[1.5rem] border border-white/10" />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-gold">İmza Deneyim</p>
              <h3 className="mt-5 max-w-xs font-display text-4xl leading-tight tracking-[-0.04em]">Sade, güçlü ve seçkin.</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-4">
                <p className="text-3xl text-champagne">01</p>
                <p className="mt-2 text-sm text-white/50">Minimal profil deneyimi</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-4">
                <p className="text-3xl text-champagne">02</p>
                <p className="mt-2 text-sm text-white/50">Lüks kurumsal sunum</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-gold">Premium Tasarım Vurgusu</p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-white sm:text-6xl">
            Apple Kadar Sade, Rolex Kadar Prestijli
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/60">
            VoxCard deneyimi, sade tasarım diliyle teknolojiyi; lüks detaylarla kurumsal prestiji birleştirir. Her profil, kullanıcının mesleki imajını güçlendirecek şekilde tasarlanır.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {['Şampanya altın detaylar', 'Cam efektli arayüz', 'Kurumsal kimlik hissi'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-white/60">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section id="kullanim" className="section-spacing">
      <SectionIntro
        eyebrow="Kullanım Senaryoları"
        title="Kimler İçin?"
        text="Networking, güven ve prestij odağında çalışan profesyoneller için tasarlanmış modern bir dijital kimlik deneyimi."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((audience) => (
          <article key={audience} className="glass-card flex items-center gap-4 p-5">
            <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_18px_rgba(217,180,103,0.65)]" />
            <h3 className="text-base font-semibold text-white/90">{audience}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section-spacing">
      <SectionIntro
        eyebrow="Nasıl Çalışır?"
        title="Dört Adımda Prestijli Paylaşım"
        text="Profilinizi hazırlayın, kartınızı ya da QR kodunuzu paylaşın; karşı taraf tüm bilgilerinize anında ulaşsın."
      />
      <div className="mt-14 grid gap-5 lg:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step} className="relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl">
            <span className="font-display text-5xl text-gold/80">0{index + 1}</span>
            <p className="mt-8 text-lg leading-7 text-white/80">{step}</p>
            {index < steps.length - 1 && <div className="absolute -right-3 top-12 hidden h-px w-6 bg-gold/40 lg:block" />}
          </article>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="paketler" className="section-spacing">
      <SectionIntro
        eyebrow="Paketler"
        title="Prestij Seviyenizi Seçin"
        text="Her paket, pahalı görünen ama hızlı açılan bir dijital deneyim sunmak için sade ve güçlü biçimde kurgulandı."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {packages.map((item) => (
          <article
            key={item.name}
            className={`relative rounded-[2.2rem] border p-7 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 ${
              item.featured
                ? 'border-gold/50 bg-[linear-gradient(160deg,rgba(217,180,103,0.18),rgba(255,255,255,0.055))] shadow-gold-soft'
                : 'border-white/10 bg-white/[0.045]'
            }`}
          >
            {item.featured && (
              <span className="absolute right-6 top-6 rounded-full bg-gold-gradient px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-black">
                Öne Çıkan
              </span>
            )}
            <h3 className="font-display text-4xl tracking-[-0.04em] text-white">{item.name}</h3>
            <p className="mt-5 min-h-16 text-sm leading-6 text-white/60">{item.summary}</p>
            <div className="mt-8 border-y border-white/10 py-7">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Fiyat</p>
              <p className="mt-2 text-3xl font-semibold text-champagne">Teklif Alın</p>
            </div>
            <ul className="mt-7 space-y-4">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm text-white/70">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  {highlight}
                </li>
              ))}
            </ul>
            <a
              href="#iletisim"
              className={`mt-9 inline-flex w-full justify-center rounded-full border px-5 py-3.5 text-sm font-bold transition hover:-translate-y-0.5 ${
                item.featured
                  ? 'border-gold/40 bg-gold-gradient text-black shadow-gold-soft'
                  : 'border-white/15 bg-white/[0.05] text-white hover:border-gold/40 hover:text-champagne'
              }`}
            >
              Teklif İste
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="iletisim" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
      <div className="relative overflow-hidden rounded-[2.7rem] border border-gold/25 bg-[radial-gradient(circle_at_20%_20%,rgba(217,180,103,0.22),transparent_32%),linear-gradient(135deg,#111,#050505)] px-6 py-16 text-center shadow-luxury sm:px-10 sm:py-24">
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-[0.36em] text-gold">VoxCard ile tanışın</p>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight tracking-[-0.04em] text-white sm:text-6xl">
          Kartvizitin Geleceğini Bugün Kullanın
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
          Kurumsal imajınızı güçlendiren, güncellenebilir ve prestijli dijital kartvizit deneyimi için teklif alın.
        </p>
        <div className="mt-10">
          <ButtonLink href="mailto:teklif@voxcard.com">VoxCard İçin Teklif Al</ButtonLink>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold tracking-[0.28em] text-white/70">VOXCARD</p>
        <p>Premium dijital kartvizit, NFC kart ve QR profil platformu.</p>
      </div>
    </footer>
  );
}

export default App;
