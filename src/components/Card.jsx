function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-[28px] border border-[var(--border-soft)] bg-white/[0.05] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
