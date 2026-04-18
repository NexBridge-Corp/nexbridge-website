import { useState, useEffect } from 'react'
import Logo from '../common/Logo'
import Icon from '../common/Icon'
import { NAV_LINKS } from '../../utils/constants'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            <Icon name={isOpen ? 'x' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-surface/95 backdrop-blur-md border-b border-border">
          <div className="px-6 py-4 space-y-3">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
