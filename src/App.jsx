import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { LanguageProvider } from './LanguageContext'
import Hero from './components/Hero'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function AppContent() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
