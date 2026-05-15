import React from 'react';

export default function NfcCard({ className = '' }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      {/* Card body */}
      <div
        className="relative h-56 w-[22rem] max-w-full overflow-hidden rounded-2xl border border-white/10 sm:h-64 sm:w-[26rem]"
        style={{
          background:
            'linear-gradient(140deg, #0e0e12 0%, #1a1a22 45%, #0a0a0c 100%)',
          boxShadow:
            '0 30px 80px -30px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.04) inset, 0 1px 0 rgba(255,255,255,0.07) inset',
        }}
      >
        {/* Gold sheen */}
        <div
          className="pointer-events-none absolute -inset-1 opacity-40"
          style={{
            background:
              'radial-gradient(120% 60% at 0% 0%, rgba(220,184,106,0.25), transparent 60%), radial-gradient(80% 60% at 100% 100%, rgba(244,232,200,0.12), transparent 60%)',
          }}
        />
        {/* Engraved hairline border */}
        <div className="pointer-events-none absolute inset-3 rounded-xl border border-champagne-300/15" />

        {/* Brand */}
        <div className="absolute left-6 top-6 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-champagne-300/40 bg-black/40">
            <span className="font-display text-base font-bold gold-text">V</span>
          </div>
          <div className="leading-tight">
            <p className="font-display text-base font-semibold text-white">
              Vox<span className="gold-text">Card</span>
            </p>
            <p className="text-[9px] uppercase tracking-luxury text-white/40">
              Premium Member
            </p>
          </div>
        </div>

        {/* NFC wave icon */}
        <div className="absolute right-6 top-6">
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#gold-g)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="opacity-90"
          >
            <defs>
              <linearGradient id="gold-g" x1="0" y1="0" x2="24" y2="24">
                <stop offset="0" stopColor="#f4e8c8" />
                <stop offset="0.6" stopColor="#dcb86a" />
                <stop offset="1" stopColor="#a06f24" />
              </linearGradient>
            </defs>
            <path d="M6 8c2.5 2 2.5 6 0 8" />
            <path d="M10 5c4.5 3 4.5 11 0 14" />
            <path d="M14 2c6.5 4.5 6.5 15.5 0 20" />
          </svg>
        </div>

        {/* Chip */}
        <div className="absolute bottom-20 left-6 sm:bottom-24">
          <div
            className="relative h-10 w-14 rounded-md"
            style={{
              background:
                'linear-gradient(135deg, #f4e8c8 0%, #dcb86a 50%, #a06f24 100%)',
              boxShadow:
                'inset 0 0 0 1px rgba(0,0,0,0.25), 0 4px 14px rgba(207,161,74,0.35)',
            }}
          >
            <div className="absolute inset-1 grid grid-cols-3 grid-rows-2 gap-px opacity-50">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="bg-black/30" />
              ))}
            </div>
          </div>
        </div>

        {/* Holder name */}
        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-luxury text-white/40">
              Cardholder
            </p>
            <p className="mt-1 font-display text-lg text-white">A. Demir</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-luxury text-white/40">
              Member
            </p>
            <p className="mt-1 font-mono text-sm gold-text">VX • 0001</p>
          </div>
        </div>

        {/* Diagonal shimmer */}
        <div
          className="pointer-events-none absolute -inset-y-10 -left-10 w-32 -rotate-12 opacity-30"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
          }}
        />
      </div>
    </div>
  );
}
