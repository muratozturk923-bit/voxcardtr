import React from 'react';

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <div
          className="relative overflow-hidden rounded-3xl border border-champagne-300/20 p-10 md:p-16"
          style={{
            background:
              'linear-gradient(140deg, #0e0e12 0%, #16161c 50%, #0a0a0c 100%)',
          }}
        >
          {/* gold glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                'radial-gradient(closest-side, rgba(220,184,106,0.6), transparent)',
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full opacity-25 blur-3xl"
            style={{
              background:
                'radial-gradient(closest-side, rgba(244,232,200,0.55), transparent)',
            }}
          />

          <div className="relative grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="eyebrow">Hazır Mısınız?</p>
              <h2 className="h-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl">
                Kartvizitin Geleceğini{' '}
                <span className="gold-text">Bugün</span> Kullanın
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                Prestijinizi yansıtan, kurumsal ve güncellenebilir bir dijital
                kimliği VoxCard ile saniyeler içinde edinin.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <a href="#iletisim" className="btn-gold w-full md:w-auto">
                VoxCard İçin Teklif Al
                <span aria-hidden>→</span>
              </a>
              <a href="#paketler" className="btn-ghost w-full md:w-auto">
                Paketleri İncele
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
