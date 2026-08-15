import { useLenis } from './hooks/useLenis'
import { Preloader } from './components/Preloader'
import { Cursor } from './components/Cursor'
import { ScrollProgress } from './components/ScrollProgress'
import { Nav } from './components/Nav'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { TechUniverse } from './sections/TechUniverse'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { EngineeringFlow } from './sections/EngineeringFlow'
import { Credentials } from './sections/Credentials'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

function App() {
  useLenis()

  return (
    <>
      <Preloader />
      <Cursor />
      <ScrollProgress />
      <div className="vignette" />
      <div className="noise" />
      <Nav />
      <main>
        <Hero />
        <About />
        <TechUniverse />
        <Experience />
        <Projects />
        <EngineeringFlow />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
