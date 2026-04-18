import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Icon from '../components/common/Icon'
import { useTranslation } from '../hooks/useTranslation'

const Services = () => {
  const t = useTranslation()

  return (
    <Section id="services" subtitle={t.services.subtitle} title={t.services.title}>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map(service => (
            <Card key={service.title} className="group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-purple-500/30 transition-all duration-300">
                <Icon name={service.icon} className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)', opacity: 0.6 }}>
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Services
