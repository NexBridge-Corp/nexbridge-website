const Logo = ({ className = '' }) => {
  return (
    <a href="#" className={`flex items-center gap-3 group hover:opacity-90 transition-opacity ${className}`}>
      <img
        src="/favicon.svg"
        alt="NexBridge Logo"
        className="h-10 w-auto object-contain drop-shadow-sm"
      />
    </a>
  )
}

export default Logo
