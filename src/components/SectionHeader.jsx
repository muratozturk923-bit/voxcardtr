function SectionHeader({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8be89]">{eyebrow}</p>
      <h2 className="mt-4 font-['Playfair_Display'] text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base text-[#d6d6d9] sm:text-lg">{description}</p>
    </div>
  )
}

export default SectionHeader
