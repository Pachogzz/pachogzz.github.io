import { ChevronDown, Globe } from 'lucide-react'
import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'

const Hero = () => {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Language Selector Button */}
      <div className="absolute top-8 right-8 z-20">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:text-primary-400 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
          title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        >
          <Globe className="w-5 h-5" />
          <span className="font-semibold text-sm">{language.toUpperCase()}</span>
        </button>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className={"absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%236366f1\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"}></div>
      </div>

      <div className="section-container text-center relative z-10">
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-4xl font-bold text-white shadow-2xl shadow-primary-500/30">
              P
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">{t.hero.firstName}</span>{' '}
            <span className="gradient-text">{t.hero.lastName}</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-light text-slate-300 mb-8">
            {t.hero.title}
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
            {t.hero.description}<span className="text-primary-400 font-semibold">{t.hero.experience}</span> {t.hero.descEnd}
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="btn-primary text-lg px-8 py-4"
          >
            {t.hero.ctaMain}
          </button>
          <a
            href="#services"
            className="btn-secondary text-lg px-8 py-4"
          >
            {t.hero.ctaServices}
          </a>
        </div>

        {/* Scroll indicator */}
        <div data-aos="fade-in" data-aos-delay="800" className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-primary-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero
