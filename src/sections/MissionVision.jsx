import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'

const MissionVision = () => {
  return (
    <Section id="mission-vision" subtitle="Our Purpose" title="Mission & Vision">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-indigo-400" />
            <h3 className="text-xl font-bold mb-4 mt-2">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To deliver integrated technology solutions that bridge the gap
              between software and hardware, empowering businesses to innovate
              faster, operate smarter, and scale with confidence.
            </p>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-purple-400" />
            <h3 className="text-xl font-bold mb-4 mt-2">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To become the leading partner for companies seeking to turn bold
              ideas into production-ready technological products — setting the
              standard for quality, integration, and innovation in embedded and
              IoT solutions.
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  )
}

export default MissionVision
