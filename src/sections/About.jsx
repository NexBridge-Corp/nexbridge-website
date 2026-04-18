import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Badge from '../components/ui/Badge'

const About = () => {
  return (
    <Section id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <Badge>About Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Bridging the gap between{' '}
              <span className="text-primary">ideas</span> and{' '}
              <span className="text-primary">technology</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              At NexBridge, we specialize in the convergence of software and
              hardware engineering. Our multidisciplinary team designs and builds
              integrated solutions — from embedded firmware to cloud-connected
              IoT platforms — that transform concepts into tangible, reliable
              products.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you need a custom PCB, a real-time control system, or a
              complete digital platform, we bring engineering rigor and creative
              problem-solving to every project.
            </p>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-surface border border-border p-8 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                {['Firmware', 'Cloud', 'Hardware', 'Software'].map((item, i) => (
                  <div
                    key={item}
                    className={`rounded-xl border border-border p-4 text-center transition-all duration-300 hover:border-primary/50 ${
                      i === 0 ? 'bg-primary/10 border-primary/30' : 'bg-background'
                    }`}
                  >
                    <p className="text-sm font-medium text-gray-300">{item}</p>
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
