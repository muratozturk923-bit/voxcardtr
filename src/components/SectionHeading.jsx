import React from 'react';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment =
    align === 'left' ? 'items-start text-left' : 'items-center text-center';
  return (
    <div className={`flex flex-col ${alignment}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="h-display mt-4 max-w-3xl text-3xl text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 divider-gold ${align === 'left' ? '' : 'mx-auto'}`} />
    </div>
  );
}
