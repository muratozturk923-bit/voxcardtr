import React from 'react';

function ProfileIcon({ children }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-champagne-300/30 bg-white/5 text-champagne-200">
      {children}
    </div>
  );
}

export default function PhoneMockup({ className = '' }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <div
        className="relative h-[520px] w-[260px] rounded-[3rem] border border-white/10 p-2 shadow-2xl"
        style={{
          background:
            'linear-gradient(160deg, #1a1a22 0%, #0a0a0c 60%, #16161c 100%)',
          boxShadow:
            '0 50px 100px -30px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.05) inset',
        }}
      >
        {/* Side buttons */}
        <span className="absolute -left-[3px] top-24 h-10 w-[3px] rounded-l-sm bg-ink-700" />
        <span className="absolute -left-[3px] top-40 h-14 w-[3px] rounded-l-sm bg-ink-700" />
        <span className="absolute -right-[3px] top-32 h-16 w-[3px] rounded-r-sm bg-ink-700" />

        {/* Screen */}
        <div
          className="relative h-full w-full overflow-hidden rounded-[2.6rem]"
          style={{
            background:
              'linear-gradient(180deg, #0a0a0c 0%, #101014 100%)',
          }}
        >
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-3 z-20 h-7 w-24 -translate-x-1/2 rounded-full bg-black" />

          {/* Status bar */}
          <div className="relative z-10 flex items-center justify-between px-6 pt-4 text-[10px] text-white/80">
            <span>09:41</span>
            <div className="flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-champagne-300" />
              <span className="inline-block h-2 w-1.5 rounded-sm bg-white/70" />
              <span className="inline-block h-1.5 w-3 rounded-sm border border-white/50" />
            </div>
          </div>

          {/* Profile content */}
          <div className="relative z-10 px-5 pt-12">
            {/* Avatar */}
            <div className="mx-auto h-20 w-20 rounded-full p-[2px] bg-gold-gradient">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-ink-900 font-display text-2xl gold-text">
                AD
              </div>
            </div>
            <div className="mt-3 text-center">
              <p className="font-display text-lg text-white">Ahmet Demir</p>
              <p className="text-[11px] uppercase tracking-luxury text-champagne-200/80">
                Yönetici Ortak · Demir &amp; Partners
              </p>
            </div>

            {/* Card */}
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md">
              <div className="grid grid-cols-4 gap-2">
                <ProfileIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.1a1 1 0 0 1 1 .75c.2.85.5 1.67.86 2.45a1 1 0 0 1-.22 1.1L7.2 8.8a16 16 0 0 0 8 8l1.5-1.55a1 1 0 0 1 1.1-.22c.78.36 1.6.65 2.45.86a1 1 0 0 1 .75 1Z"/>
                  </svg>
                </ProfileIcon>
                <ProfileIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="5" width="18" height="14" rx="2"/>
                    <path d="m3 7 9 6 9-6"/>
                  </svg>
                </ProfileIcon>
                <ProfileIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 11.5a8.5 8.5 0 1 1-15.6 4.6L3 21l5-1.4a8.5 8.5 0 0 0 12-8.1Z"/>
                  </svg>
                </ProfileIcon>
                <ProfileIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>
                  </svg>
                </ProfileIcon>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-4 space-y-2">
              {[
                { label: 'WhatsApp ile Yaz', sub: '+90 532 000 00 00' },
                { label: 'E-posta Gönder', sub: 'ahmet@demirpartners.com' },
                { label: 'Konumu Aç', sub: 'Levent · İstanbul' },
              ].map((it) => (
                <div
                  key={it.label}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2.5"
                >
                  <div className="leading-tight">
                    <p className="text-[12px] font-medium text-white">{it.label}</p>
                    <p className="text-[10px] text-white/40">{it.sub}</p>
                  </div>
                  <span className="text-[18px] gold-text">›</span>
                </div>
              ))}
            </div>

            {/* Save contact */}
            <div className="mt-4 flex justify-center">
              <span className="rounded-full bg-gold-gradient px-5 py-2 text-[11px] font-semibold text-ink-900">
                Kişilere Kaydet
              </span>
            </div>
          </div>

          {/* Ambient glow */}
          <div
            className="pointer-events-none absolute -top-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                'radial-gradient(closest-side, rgba(220,184,106,0.35), transparent)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
