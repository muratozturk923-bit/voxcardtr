import React from 'react';

export default function Logo({ className = '' }) {
  return (
    <a
      href="#top"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="VoxCard ana sayfa"
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-champagne-300/40 bg-ink-900">
        <span
          aria-hidden
          className="absolute inset-0 rounded-lg opacity-50 blur-md"
          style={{
            background:
              'linear-gradient(135deg, rgba(244,232,200,0.5), rgba(160,111,36,0.3))',
          }}
        />
        <span className="relative font-display text-lg font-bold gold-text">V</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-wide text-white">
          Vox<span className="gold-text">Card</span>
        </span>
        <span className="mt-0.5 text-[9px] uppercase tracking-luxury text-white/40">
          Premium Digital ID
        </span>
      </span>
    </a>
  );
}
