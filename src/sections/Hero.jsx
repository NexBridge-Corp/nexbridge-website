import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import { useTranslation } from '../hooks/useTranslation'
import { SITE_NAME } from '../utils/constants'

const Hero = () => {
  const t = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <Container className="relative z-10 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
            {t.hero.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {SITE_NAME}
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-light mb-6" style={{ color: 'var(--color-text)', opacity: 0.7 }}>
            {t.hero.slogan}
          </p>

          <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--color-text)', opacity: 0.55 }}>
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#services" size="lg">
              {t.hero.cta_services}
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              {t.hero.cta_contact}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
