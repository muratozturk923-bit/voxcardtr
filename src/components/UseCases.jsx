import React from 'react';
import SectionHeading from './SectionHeading.jsx';

const useCases = [
  {
    title: 'İş İnsanları',
    desc: 'Toplantılarda bir saniyede güçlü bir ilk izlenim bırakın.',
  },
  {
    title: 'Avukatlar',
    desc: 'Hukuk büronuzun ciddiyetine yakışan dijital kimlik.',
  },
  {
    title: 'Doktorlar',
    desc: 'Hastalarınızla profesyonel ve güvenilir iletişim kurun.',
  },
  {
    title: 'Emlak Danışmanları',
    desc: 'Portföylerinizi tek profille zarifçe sergileyin.',
  },
  {
    title: 'Ajanslar',
    desc: 'Markanızı yansıtan butik bir kurumsal kart deneyimi.',
  },
  {
    title: 'Satış Ekipleri',
    desc: 'Tüm ekip için merkezi yönetim, tutarlı bir marka.',
  },
  {
    title: 'Etkinlik & Fuar',
    desc: 'Yüzlerce kişiyle hızlı ve hatasız bağlantı kurun.',
  },
  {
    title: 'Kurumsal Şirketler',
    desc: 'Çalışanlarınız için ölçeklenebilir prestijli kimlik.',
  },
];

export default function UseCases() {
  return (
    <section id="kullanim-alanlari" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Kullanım Senaryoları"
          title={<>Kimler <span className="gold-text">İçin</span>?</>}
          subtitle="VoxCard; prestiji, hızı ve etkili iletişimi merkezine alan her profesyonelin yanında."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {useCases.map((u, i) => (
            <article
              key={u.title}
              className="card-glass group relative overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
                style={{
                  background:
                    'radial-gradient(closest-side, rgba(220,184,106,0.5), transparent)',
                }}
              />
              <p className="font-mono text-xs text-champagne-200/60">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-display text-lg text-white">{u.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{u.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
