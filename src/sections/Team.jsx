import { useState } from 'react'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import { TEAM_MEMBERS } from '../utils/constants'

const Avatar = ({ member }) => {
  const [imgError, setImgError] = useState(false)

  if (member.image && !imgError) {
    return (
      <div className="w-40 h-40 mx-auto rounded-full overflow-hidden ring-2 ring-primary/30 mb-5 group-hover:ring-primary/60 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      </div>
    )
  }

  return (
    <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-indigo-400 to-purple-400 flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
      <span className="text-4xl font-bold text-background">{member.initials}</span>
    </div>
  )
}

const Team = () => {
  return (
    <Section id="team" subtitle="Who We Are" title="Our Team">
      <Container>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 -mt-8">
          We are a team of Electronic Engineers from the{' '}
          <span className="text-primary font-medium">Universidad de Antioquia</span>,
          united by our passion for building technology that matters.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map(member => (
            <a
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="text-center group cursor-pointer">
                <Avatar member={member} />

                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>

                {/* LinkedIn icon */}
                <div className="flex justify-center">
                  <span className="inline-flex items-center gap-2 text-xs text-gray-500 group-hover:text-primary transition-colors duration-200">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </span>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Team
