import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Icon from '../components/common/Icon'
import { useTranslation } from '../hooks/useTranslation'

const Values = () => {
  const t = useTranslation()
  const items = t.values.items

  return (
    <Section id="values" subtitle={t.values.subtitle} title={t.values.title}>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((value, i) => (
            <Card key={value.title} className={i === items.length - 1 && items.length % 3 !== 0 ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={value.icon} className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)', opacity: 0.6 }}>
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Values
