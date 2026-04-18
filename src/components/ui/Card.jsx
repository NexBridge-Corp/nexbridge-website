const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <div
      className={`bg-surface border border-border rounded-2xl p-6 ${hover ? 'hover:border-primary/50 hover:-translate-y-1 transition-all duration-300' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
