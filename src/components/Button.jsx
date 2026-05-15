export function Button({ children, href = "#", variant = "primary", className = "" }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9bd7a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506]";
  const styles = {
    primary:
      "bg-[linear-gradient(135deg,#f7e7b5_0%,#c89d42_48%,#8b651d_100%)] text-[#090805] shadow-[0_18px_50px_rgba(216,178,91,0.25)] hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(216,178,91,0.35)]",
    secondary:
      "border border-white/15 bg-white/[0.04] text-white backdrop-blur-xl hover:-translate-y-0.5 hover:border-[#d9bd7a]/60 hover:bg-white/[0.08]",
  };

  return (
    <a className={`${base} ${styles[variant]} ${className}`} href={href}>
      {children}
    </a>
  );
}
