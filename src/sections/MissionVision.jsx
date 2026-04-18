import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import { useTranslation } from '../hooks/useTranslation'

const MissionVision = () => {
  const t = useTranslation()

  return (
    <Section id="mission-vision" subtitle={t.mission.subtitle} title={t.mission.title}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-indigo-400" />
            <h3 className="text-xl font-bold mb-4 mt-2">{t.mission.mission_title}</h3>
            <p className="leading-relaxed" style={{ color: 'var(--color-text)', opacity: 0.6 }}>
              {t.mission.mission_text}
            </p>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-purple-400" />
            <h3 className="text-xl font-bold mb-4 mt-2">{t.mission.vision_title}</h3>
            <p className="leading-relaxed" style={{ color: 'var(--color-text)', opacity: 0.6 }}>
              {t.mission.vision_text}
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  )
}

export default MissionVision
