import { ArrowRight, Code, Palette, Zap } from 'lucide-react'

const Services = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Migración WordPress",
      description: "Transformo sitios estáticos en potentes CMS administrables con WordPress, manteniendo el diseño y mejorando la funcionalidad."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Desarrollo ReactJS",
      description: "Desarrollo aplicaciones web modernas y rápidas con ReactJS, ofreciendo experiencias de usuario excepcionales."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Diseño UX/UI",
      description: "Creo interfaces intuitivas y funcionales combinando mi experiencia en desarrollo con formación en diseño gráfico."
    }
  ]

  return (
    <section id="services" className="section-padding bg-slate-800/50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Mi </span>
            <span className="gradient-text">Especialidad</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            <span className="text-primary-400 font-semibold">Migrar sitios estáticos a 100% administrable</span> en WordPress o con ReactJS y JavaScript.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-slate-800 p-8 rounded-xl card-hover border border-slate-700"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="text-primary-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          className="text-center bg-gradient-to-r from-primary-600/20 to-primary-400/20 rounded-2xl p-12 border border-primary-500/30"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Modernizar tu Sitio Web?
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Convierte tu sitio estático en una plataforma dinámica y administrable que impulse tu negocio al siguiente nivel.
          </p>
          <button 
            onClick={scrollToContact}
            className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
          >
            Hablemos de Tu Proyecto
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
