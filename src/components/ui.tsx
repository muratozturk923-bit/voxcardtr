import { type ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/[0.07] bg-white/[0.035] backdrop-blur-2xl shadow-glass",
        "transition-all duration-500 ease-out",
        hover ? "hover:border-champagne/25 hover:bg-white/[0.05] hover:shadow-gold" : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

type GoldButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "ghost";
  className?: string;
  onClick?: () => void;
};

export function GoldButton({
  children,
  href = "#",
  variant = "solid",
  className = "",
  onClick,
}: GoldButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne/60";

  const styles =
    variant === "solid"
      ? "bg-gold-shine text-void shadow-gold hover:brightness-110 hover:shadow-[0_0_48px_rgba(201,169,98,0.25)] active:scale-[0.98]"
      : "border border-champagne/35 bg-transparent text-champagne-light hover:border-champagne/55 hover:bg-champagne/5";

  const cls = `${base} ${styles} ${className}`;

  if (onClick) {
    return (
      <button type="button" className={cls} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignCls} mb-14 md:mb-20`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-champagne/80">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className="font-display text-3xl font-semibold leading-tight text-pearl md:text-4xl lg:text-[2.75rem] text-balance"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-mist md:text-lg text-balance">{description}</p>
      ) : null}
    </div>
  );
}
