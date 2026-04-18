import Logo from '../common/Logo'
import Container from '../ui/Container'
import { NAV_LINKS, SITE_SLOGAN } from '../../utils/constants'

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-400 text-sm max-w-xs">{SITE_SLOGAN}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>contact@nexbridge.com</li>
              <li>Built with precision.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} NexBridge. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
