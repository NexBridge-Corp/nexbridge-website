import { useState, useEffect } from 'react'
import Logo from '../common/Logo'
import Icon from '../common/Icon'
import { useTheme } from '../../contexts/ThemeContext'
import { useLang } from '../../contexts/LanguageContext'
import { useTranslation } from '../../hooks/useTranslation'

const SunIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
)

const MoonIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle: toggleTheme } = useTheme()
  const { lang, toggle: toggleLang } = useLang()
  const t = useTranslation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.team, href: '#team' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.contact, href: '#contact' },
  ]

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
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-border text-gray-400 hover:text-primary hover:border-primary/40 transition-all duration-200"
              aria-label="Toggle language"
            >
              {lang === 'en' ? '🇺🇸 EN' : '🇨🇴 ES'}
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="hidden lg:flex items-center justify-center w-9 h-9 rounded-lg border border-border text-gray-400 hover:text-primary hover:border-primary/40 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white"
              aria-label="Toggle menu"
            >
              <Icon name={isOpen ? 'x' : 'menu'} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-surface/95 backdrop-blur-md border-b border-border">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-400 hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            {/* Mobile controls */}
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-border text-gray-400 hover:text-primary hover:border-primary/40 transition-all duration-200"
              >
                {lang === 'en' ? '🇺🇸 EN' : '🇨🇴 ES'}
              </button>
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-border text-gray-400 hover:text-primary hover:border-primary/40 transition-all duration-200"
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
