import React from 'react';
import NfcCard from './NfcCard.jsx';
import PhoneMockup from './PhoneMockup.jsx';

export default function Hero() {
  return (
    <section className="relative isolate pt-32 md:pt-40 lg:pt-44">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(207,161,74,0.18), transparent 70%)',
        }}
      />

      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="animate-fade-up max-w-2xl">
          <p className="eyebrow">
            <span>NFC · QR · Premium Dijital Kimlik</span>
          </p>

          <h1 className="h-display mt-5 text-4xl text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Prestijinizi{' '}
            <span className="gold-shimmer-text">Tek Dokunuşla</span> Paylaşın
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
            VoxCard, NFC ve QR teknolojisiyle tasarlanmış premium dijital kartvizit
            deneyimidir. İş bağlantılarınızı daha hızlı, daha şık ve daha etkili
            şekilde kurun.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#iletisim" className="btn-gold">
              VoxCard'ımı Oluştur
              <span aria-hidden>→</span>
            </a>
            <a href="#nasil-calisir" className="btn-ghost">
              Demo Profili Gör
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/5 pt-6">
            {[
              { n: '10K+', l: 'Aktif Profil' },
              { n: '%99,9', l: 'Çalışma Süresi' },
              { n: '120+', l: 'Şehir' },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-2xl gold-text">{s.n}</p>
                <p className="mt-1 text-[11px] uppercase tracking-luxury text-white/40">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative">
            {/* Glow */}
            <div
              aria-hidden
              className="absolute -inset-16 -z-10 rounded-[40%] opacity-60 blur-3xl"
              style={{
                background:
                  'radial-gradient(closest-side, rgba(220,184,106,0.25), transparent 70%)',
              }}
            />

            <div className="animate-float-slow">
              <PhoneMockup />
            </div>

            <div className="absolute -bottom-10 -left-12 hidden rotate-[-8deg] sm:block md:-left-20">
              <div className="animate-fade-in">
                <NfcCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="container-x mt-20 md:mt-28">
        <div className="hairline" />
      </div>
    </section>
  );
}
