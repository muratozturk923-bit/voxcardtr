function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <span className="inline-flex items-center rounded-full border border-[var(--border-soft)] bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]/90">
        {eyebrow}
      </span>
      <h2 className="mt-6 font-display text-4xl leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-white/68 sm:text-lg">
        {description}
      </p>
    </div>
  )
}

export default SectionTitle
