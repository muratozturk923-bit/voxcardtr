import React from 'react';
import SectionHeading from './SectionHeading.jsx';

const steps = [
  {
    n: '01',
    title: 'Profilinizi Oluşturun',
    desc: 'Birkaç dakika içinde kurumsal kimliğinizi VoxCard panelinde tasarlayın.',
  },
  {
    n: '02',
    title: 'Bilgilerinizi Ekleyin',
    desc: 'İletişim, sosyal medya, IBAN ve kurumsal bilgilerinizi düzenleyin.',
  },
  {
    n: '03',
    title: 'NFC veya QR ile Paylaşın',
    desc: 'Premium NFC kartınızı veya QR kodunuzu paylaşıma hazır hale getirin.',
  },
  {
    n: '04',
    title: 'Anında Bağlantı',
    desc: 'Karşı taraf, tek dokunuşla tüm bilgilerinize prestijli bir profilde ulaşsın.',
  },
];

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Nasıl Çalışır?"
          title={<>Dört Adımda <span className="gold-text">Premium</span> Dijital Kimlik</>}
          subtitle="VoxCard, kurulumdan paylaşıma kadar zarif ve hızlı bir kullanıcı deneyimi sunar."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px md:block"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(220,184,106,0.45), transparent)',
            }}
          />
          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="card-glass relative flex flex-col items-start"
              >
                <span
                  className="font-display text-3xl gold-text"
                  aria-hidden
                >
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-lg text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
