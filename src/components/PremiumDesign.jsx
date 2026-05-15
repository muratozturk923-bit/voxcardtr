import React from 'react';
import NfcCard from './NfcCard.jsx';

export default function PremiumDesign() {
  return (
    <section className="relative py-24 md:py-32">
      {/* ambient frame */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[480px] -translate-y-1/2"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 50%, rgba(207,161,74,0.12), transparent 70%)',
        }}
      />

      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto w-fit">
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 rounded-[40%] opacity-60 blur-3xl"
              style={{
                background:
                  'radial-gradient(closest-side, rgba(220,184,106,0.25), transparent)',
              }}
            />
            <div className="rotate-[-6deg]">
              <NfcCard />
            </div>
            <div className="absolute -bottom-8 right-0 rotate-[8deg]">
              <NfcCard />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow">Premium Tasarım Vurgusu</p>
          <h2 className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl">
            Apple Kadar <span className="gold-text">Sade</span>,
            <br className="hidden md:block" /> Rolex Kadar{' '}
            <span className="gold-text">Prestijli</span>.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
            VoxCard deneyimi, sade tasarım diliyle teknolojiyi; lüks detaylarla
            kurumsal prestiji birleştirir. Her profil, kullanıcının mesleki imajını
            güçlendirecek şekilde, milimetrik hassasiyetle tasarlanır.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              'Cam efektli, soft shadow ve şampanya altın detay vurguları',
              'Mobil önceliklendirilmiş, akıcı ve zarif kullanıcı deneyimi',
              'Kurumsal kimliğinize özel renk, font ve logo bütünlüğü',
              'Hızlı yüklenen profil — ortalama 0,9 sn açılış süresi',
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-gradient"
                />
                <span className="text-white/75">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
