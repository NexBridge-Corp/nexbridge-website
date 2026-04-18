export const cn = (...classes) => classes.filter(Boolean).join(' ')

export const scrollToSection = id => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
