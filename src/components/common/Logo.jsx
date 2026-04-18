const Logo = ({ className = '' }) => {
  return (
    <a href="#" className={`flex items-center gap-2 group ${className}`}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="8" className="fill-primary" />
        <path
          d="M8 22L16 10L24 22"
          stroke="#0A0F1C"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 18H21"
          stroke="#0A0F1C"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-xl font-bold tracking-tight">
        Nex<span className="text-primary">Bridge</span>
      </span>
    </a>
  )
}

export default Logo
