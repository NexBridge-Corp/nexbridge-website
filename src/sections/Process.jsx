import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import { PROCESS_STEPS } from '../utils/constants'

const Process = () => {
  return (
    <Section id="process" subtitle="How We Work" title="Our Process">
      <Container>
        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {PROCESS_STEPS.map(({ step, title, description }) => (
              <div key={step} className="relative text-center group">
                {/* Step circle */}
                <div className="w-16 h-16 mx-auto rounded-full bg-surface border-2 border-border flex items-center justify-center mb-4 relative z-10 group-hover:border-primary transition-colors duration-300">
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {step}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Process
