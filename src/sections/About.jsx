import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Badge from '../components/ui/Badge'
import { useTranslation } from '../hooks/useTranslation'

const About = () => {
  const t = useTranslation()

  return (
    <Section id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <Badge>{t.about.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              {t.about.title_1}{' '}
              <span className="text-primary">{t.about.title_2}</span>{' '}
              {t.about.title_3}{' '}
              <span className="text-primary">{t.about.title_4}</span>
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: 'var(--color-text)', opacity: 0.6 }}>
              {t.about.p1}
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--color-text)', opacity: 0.6 }}>
              {t.about.p2}
            </p>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-surface border border-border p-8 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                {t.about.stack.map((item, i) => (
                  <div
                    key={item}
                    className={`rounded-xl border border-border p-4 text-center transition-all duration-300 hover:border-primary/50 ${
                      i === 0 ? 'bg-primary/10 border-primary/30' : 'bg-background'
                    }`}
                  >
                    <p className="text-sm font-medium" style={{ color: 'var(--color-text)', opacity: 0.8 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default About
