import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Icon from '../components/common/Icon'
import { VALUES } from '../utils/constants'

const Values = () => {
  return (
    <Section id="values" subtitle="What Drives Us" title="Core Values">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((value, i) => (
            <Card key={value.title} className={i === VALUES.length - 1 && VALUES.length % 3 !== 0 ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={value.icon} className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
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
