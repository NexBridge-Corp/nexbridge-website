import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import { SITE_NAME, SITE_SLOGAN, SITE_DESCRIPTION } from '../utils/constants'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <Container className="relative z-10 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
            Software &amp; Hardware Integration
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {SITE_NAME}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-light mb-6">
            {SITE_SLOGAN}
          </p>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {SITE_DESCRIPTION}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#services" size="lg">
              Explore Services
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
