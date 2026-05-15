import Card from './components/Card'
import Header from './components/Header'
import HeroVisual from './components/HeroVisual'
import SectionTitle from './components/SectionTitle'
import {
  features,
  heroStats,
  navItems,
  packages,
  premiumPoints,
  steps,
  useCases,
} from './content'

const iconMap = {
  tap: (
    <path
      d="M12 4v8m0 0 3-3m-3 3-3-3M6 15.5V18a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.5M8 12.5 6.5 11A2.5 2.5 0 0 1 10 7.5l2 2 2-2a2.5 2.5 0 0 1 3.5 3.5L16 12.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  qr: (
    <>
      <path d="M5 5h5v5H5zM14 5h5v5h-5zM5 14h5v5H5z" strokeLinejoin="round" />
      <path d="M16.5 14H19v2.5M14 16.5h2.5V19M16.5 16.5H19V19" strokeLinecap="round" />
    </>
  ),
  refresh: (
    <path
      d="M19 7v4h-4M5 17v-4h4m10-2a7 7 0 0 0-12-3m-2 5a7 7 0 0 0 12 3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  contact: (
    <>
      <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 16.5z" />
      <path d="M8 10.5h8M8 14h5" strokeLinecap="round" />
    </>
  ),
  social: (
    <path
      d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.75 11.25l6.5 3.5M15.25 9.25 9 11.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  finance: (
    <path
      d="M7 7h10M7 12h10M7 17h6M5 5.5A1.5 1.5 0 0 1 6.5 4h11A1.5 1.5 0 0 1 19 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18.5z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  portfolio: (
    <path
      d="M8 7V5.75A1.75 1.75 0 0 1 9.75 4h4.5A1.75 1.75 0 0 1 16 5.75V7m-11 2h14v8.25A1.75 1.75 0 0 1 17.25 19h-10.5A1.75 1.75 0 0 1 5 17.25zM10 12h4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  teams: (
    <path
      d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 1.5a2.5 2.5 0 1 0 0-5M4.5 18a4.5 4.5 0 0 1 9 0m1.5 0a3.5 3.5 0 0 1 5 0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
}

function FeatureIcon({ name }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border-gold)] bg-[linear-gradient(145deg,rgba(214,184,141,0.18),rgba(255,255,255,0.04))] text-[var(--gold)] shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-5 w-5"
        aria-hidden="true"
      >
        {iconMap[name]}
      </svg>
    </span>
  )
}

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,184,141,0.12),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(255,255,255,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />

      <Header navItems={navItems} />

      <main>
        <section id="ana-sayfa" className="px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-[var(--border-gold)] bg-[rgba(214,184,141,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)] shadow-[0_10px_30px_rgba(214,184,141,0.08)]">
                Premium Dijital Kimlik Deneyimi
              </span>

              <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[1.04] text-white sm:text-6xl lg:text-7xl">
                Prestijinizi{' '}
                <span className="bg-[linear-gradient(135deg,#f5e2bc,#d6b88d,#8a6a3e)] bg-clip-text text-transparent">
                  Tek Dokunuşla
                </span>{' '}
                Paylaşın
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                VoxCard, NFC ve QR teknolojisiyle tasarlanmış premium dijital kartvizit deneyimidir.
                İş bağlantılarınızı daha hızlı, daha şık ve daha etkili şekilde kurun.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#iletisim"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border-gold)] bg-[linear-gradient(135deg,#d8bf98,#89693d)] px-7 py-4 text-sm font-semibold text-[#111] shadow-[0_18px_46px_rgba(214,184,141,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(214,184,141,0.32)]"
                >
                  VoxCard&apos;ımı Oluştur
                </a>
                <a
                  href="#demo-profil"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:border-white/18 hover:bg-white/[0.07]"
                >
                  Demo Profili Gör
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <Card key={item.label} className="rounded-[24px] p-5">
                    <p className="text-sm font-semibold tracking-[0.16em] text-[var(--gold)] uppercase">
                      {item.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/68">{item.label}</p>
                  </Card>
                ))}
              </div>
            </div>

            <HeroVisual />
          </div>
        </section>

        <section id="ozellikler" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Ürün Tanıtımı"
              title="Bir Karttan Daha Fazlası"
              description="VoxCard yalnızca bir kartvizit değil; kişisel markanızı, şirketinizi ve iletişim kanallarınızı tek merkezde toplayan prestijli bir dijital kimliktir."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => (
                <Card key={feature.title} className="group min-h-full transition duration-300 hover:-translate-y-1.5 hover:border-[var(--border-gold)] hover:bg-white/[0.07]">
                  <FeatureIcon name={feature.icon} />
                  <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/66">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="demo-profil" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <SectionTitle
                eyebrow="Premium Tasarım"
                title="Apple Kadar Sade, Rolex Kadar Prestijli"
                description="VoxCard deneyimi, sade tasarım diliyle teknolojiyi; lüks detaylarla kurumsal prestiji birleştirir. Her profil, kullanıcının mesleki imajını güçlendirecek şekilde tasarlanır."
              />

              <div className="mt-8 space-y-4">
                {premiumPoints.map((point) => (
                  <Card key={point} className="rounded-[24px] px-5 py-4">
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-[var(--border-gold)] bg-[rgba(214,184,141,0.08)] text-sm text-[var(--gold)]">
                        +
                      </span>
                      <p className="text-sm leading-7 text-white/74">{point}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,184,141,0.65),transparent)]" />

              <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,20,22,0.95),rgba(12,12,13,0.92))] p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-white/38">Demo Profil</p>
                      <h3 className="mt-3 font-display text-3xl text-white">Selin Kaya</h3>
                      <p className="mt-2 text-sm text-white/62">Kurumsal Gayrimenkul Danışmanı</p>
                    </div>
                    <span className="rounded-full border border-[var(--border-gold)] px-3 py-1 text-xs text-[var(--gold)]">
                      Premium
                    </span>
                  </div>

                  <div className="mt-8 grid gap-3">
                    {[
                      'Kurumsal portföy sunumu',
                      'Konum ve rota bağlantısı',
                      'WhatsApp ile anında iletişim',
                      'IBAN ve fatura bilgileri',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3"
                      >
                        <span className="text-sm text-white/78">{item}</span>
                        <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                          Aç
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5">
                  <div className="rounded-[28px] border border-[var(--border-gold)] bg-[linear-gradient(145deg,rgba(214,184,141,0.12),rgba(255,255,255,0.04))] p-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/40">Kurumsal Kimlik</p>
                    <p className="mt-4 text-4xl font-display text-white">Tek Merkez</p>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      Tüm bağlantılar, kataloglar ve önemli bilgiler tek bir lüks profil katmanında sunulur.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/38">NFC</p>
                      <p className="mt-4 font-display text-3xl text-[var(--gold)]">01</p>
                      <p className="mt-2 text-sm text-white/62">Yaklaştır, paylaş, bağ kur.</p>
                    </div>
                    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/38">QR</p>
                      <div className="mt-4 grid h-20 w-20 grid-cols-4 gap-1 rounded-2xl bg-white p-2">
                        {Array.from({ length: 16 }).map((_, index) => (
                          <span
                            key={index}
                            className={`rounded-[3px] ${
                              [0, 1, 3, 4, 6, 9, 10, 12, 15].includes(index)
                                ? 'bg-[#111]'
                                : 'bg-[#d6b88d]'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="kullanim-alanlari" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Kullanım Senaryoları"
              title="Kimler İçin?"
              description="VoxCard; networking, satış, danışmanlık ve kurumsal temsil gücünü dijitalde yükseltmek isteyen profesyoneller için tasarlanır."
              align="center"
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {useCases.map((item, index) => (
                <Card
                  key={item}
                  className="group min-h-full transition duration-300 hover:-translate-y-1 hover:border-[var(--border-gold)]"
                >
                  <span className="inline-flex rounded-full border border-[var(--border-gold)] bg-[rgba(214,184,141,0.08)] px-3 py-1 text-xs uppercase tracking-[0.26em] text-[var(--gold)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-6 text-2xl font-display text-white">{item}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/66">
                    Prestijli ilk izlenim, hızlı bağlantı ve güncel dijital kimlik avantajı sunar.
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Akış"
              title="Nasıl Çalışır?"
              description="VoxCard deneyimi birkaç net adımla başlar ve her karşılaşmayı daha rafine bir iletişim anına dönüştürür."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-4">
              {steps.map((step, index) => (
                <Card key={step} className="relative overflow-hidden p-6">
                  <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,184,141,0.65),transparent)]" />
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border-gold)] bg-[rgba(214,184,141,0.08)] font-display text-2xl text-[var(--gold)]">
                    {index + 1}
                  </span>
                  <p className="mt-6 text-lg leading-8 text-white/78">{step}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="paketler" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Paketler"
              title="İhtiyacınıza Uygun Seçkin Paketler"
              description="Her pakette aynı lüks tasarım yaklaşımı korunur; fark, ölçek ve kurumsal derinlik seviyesindedir."
              align="center"
            />

            <div className="mt-12 grid gap-6 xl:grid-cols-3">
              {packages.map((plan) => (
                <Card
                  key={plan.name}
                  className={`flex h-full flex-col rounded-[32px] p-7 ${
                    plan.featured
                      ? 'border-[var(--border-gold)] bg-[linear-gradient(180deg,rgba(214,184,141,0.12),rgba(255,255,255,0.05))]'
                      : ''
                  }`}
                >
                  <span className="inline-flex self-start rounded-full border border-[var(--border-soft)] bg-white/[0.04] px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
                    {plan.accent}
                  </span>
                  <h3 className="mt-6 font-display text-4xl text-white">{plan.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/66">{plan.description}</p>

                  <div className="mt-8 rounded-[24px] border border-white/10 bg-black/20 px-5 py-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/36">Fiyatlandırma</p>
                    <p className="mt-3 font-display text-3xl text-[var(--gold)]">Teklif Alın</p>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-7 text-white/72">
                        <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[var(--border-gold)] text-[var(--gold)]">
                          +
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#iletisim"
                    className={`mt-10 inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-semibold transition duration-300 ${
                      plan.featured
                        ? 'border border-[var(--border-gold)] bg-[linear-gradient(135deg,#d8bf98,#89693d)] text-[#111] shadow-[0_18px_48px_rgba(214,184,141,0.24)] hover:-translate-y-1'
                        : 'border border-white/10 bg-white/[0.04] text-white hover:border-white/16 hover:bg-white/[0.07]'
                    }`}
                  >
                    Teklif Alın
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="iletisim" className="px-4 pb-24 pt-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-28">
          <div className="mx-auto max-w-7xl">
            <Card className="relative overflow-hidden rounded-[36px] border-[var(--border-gold)] bg-[linear-gradient(135deg,rgba(214,184,141,0.16),rgba(255,255,255,0.04),rgba(0,0,0,0.18))] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
              <div className="absolute -left-16 top-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(214,184,141,0.24),rgba(214,184,141,0))] blur-3xl" />
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),rgba(255,255,255,0))] blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <span className="inline-flex rounded-full border border-white/12 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
                    Son Adım
                  </span>
                  <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">
                    Kartvizitin Geleceğini Bugün Kullanın
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                    İş dünyasında ilk izlenim artık yalnızca kağıtla değil, deneyimle ölçülüyor.
                    VoxCard ile markanızı daha güçlü, daha çağdaş ve daha prestijli bir şekilde
                    sunun.
                  </p>
                </div>

                <a
                  href="mailto:hello@voxcard.co"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border-gold)] bg-[linear-gradient(135deg,#d8bf98,#89693d)] px-8 py-4 text-sm font-semibold text-[#111] shadow-[0_18px_48px_rgba(214,184,141,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(214,184,141,0.32)]"
                >
                  VoxCard İçin Teklif Al
                </a>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VoxCard. Premium dijital kartvizit deneyimi.</p>
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white/82">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
