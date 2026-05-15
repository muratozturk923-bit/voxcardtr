function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#cfb27a]">{eyebrow}</p>
      <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">{description}</p>}
    </div>
  )
}

export default SectionHeading
