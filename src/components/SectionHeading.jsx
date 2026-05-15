export function SectionHeading({ eyebrow, title, children, align = "center" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`mx-auto flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow ? (
        <span className="mb-4 rounded-full border border-[#d9bd7a]/20 bg-[#d9bd7a]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-[#e6c77b]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children ? <p className="mt-5 text-base leading-8 text-white/62 sm:text-lg">{children}</p> : null}
    </div>
  );
}
