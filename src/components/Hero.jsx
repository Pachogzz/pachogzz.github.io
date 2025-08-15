import { ChevronDown } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
            <span className="text-white">Francisco</span>{' '}
            <span className="gradient-text">Gonzalez</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-slate-300 mb-8">
            Desarrollador WordPress & ReactJS
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
            Desarrollador WordPress con más de <span className="text-primary-400 font-semibold">12 años de experiencia</span> en el ciclo completo de desarrollo web y más de <span className="text-primary-400 font-semibold">8 años de especialización en WordPress</span>. Experto en el desarrollo de temas y soluciones a la medida, combinando una sólida formación en Diseño Gráfico para crear experiencias de usuario (UX) intuitivas y funcionales.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToContact}
            className="btn-primary text-lg px-8 py-4"
          >
            Transforma Tu Sitio Estático
          </button>
          <a 
            href="#services" 
            className="btn-secondary text-lg px-8 py-4"
          >
            Ver Servicios
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
