function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl';

  return (
    <div className={alignment}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="luxury-heading mt-4 text-4xl sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
