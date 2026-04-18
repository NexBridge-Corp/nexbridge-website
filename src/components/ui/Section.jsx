const Section = ({ children, className = '', id, title, subtitle }) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      {(title || subtitle) && (
        <div className="text-center mb-16">
          {subtitle && (
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  )
}

export default Section
