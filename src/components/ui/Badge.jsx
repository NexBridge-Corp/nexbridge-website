const Badge = ({ children, className = '', ...props }) => {
  return (
    <span
      className={`inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
