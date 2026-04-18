import Layout from '../components/layout/Layout'
import Hero from '../sections/Hero'
import About from '../sections/About'
import MissionVision from '../sections/MissionVision'
import Values from '../sections/Values'
import Services from '../sections/Services'
import Team from '../sections/Team'
import Process from '../sections/Process'
import Contact from '../sections/Contact'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <MissionVision />
      <Values />
      <Services />
      <Team />
      <Process />
      <Contact />
    </Layout>
  )
}

export default Home
