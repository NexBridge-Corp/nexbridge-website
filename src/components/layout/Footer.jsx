import Logo from '../common/Logo'
import Container from '../ui/Container'
import { useTranslation } from '../../hooks/useTranslation'
import { SITE_NAME } from '../../utils/constants'

const Footer = () => {
  const t = useTranslation()

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.team, href: '#team' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <footer className="bg-surface border-t border-border py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm max-w-xs" style={{ color: 'var(--color-text)', opacity: 0.5 }}>
              {t.hero.slogan}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--color-text)', opacity: 0.6 }}>
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                    style={{ color: 'var(--color-text)', opacity: 0.5 }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--color-text)', opacity: 0.6 }}>
              {t.footer.contact_title}
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text)', opacity: 0.5 }}>
              <li>contact@nexbridge.cloud</li>
              <li>{t.footer.built}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm" style={{ color: 'var(--color-text)', opacity: 0.4 }}>
            {t.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
