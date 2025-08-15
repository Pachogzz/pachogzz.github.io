import { Award, Clock, Heart, Target } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "12+ Años",
      description: "De experiencia en desarrollo web"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "8+ Años",
      description: "Especializándome en WordPress"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "100+",
      description: "Proyectos completados exitosamente"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Pasión",
      description: "Por crear soluciones innovadoras"
    }
  ]

  const values = [
    {
      title: "Calidad",
      description: "Cada proyecto es desarrollado con los más altos estándares de calidad y mejores prácticas de la industria."
    },
    {
      title: "Innovación", 
      description: "Siempre busco implementar las últimas tecnologías y tendencias para crear soluciones modernas."
    },
    {
      title: "Comunicación",
      description: "Mantengo una comunicación clara y constante durante todo el proceso de desarrollo."
    },
    {
      title: "Compromiso",
      description: "Me comprometo con cada proyecto como si fuera propio, asegurando resultados excepcionales."
    }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Acerca de </span>
            <span className="gradient-text">Mí</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Profesional autodidacta, motivado y con gran capacidad para adoptar nuevas tecnologías y procesos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Profile Image */}
          <div data-aos="fade-right">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 p-1">
                  <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center">
                    {/* Placeholder for profile image */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-4xl font-bold text-white">
                      PG
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-400/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold text-white mb-6">
              Francisco Gonzalez (Pacho)
            </h3>
            
            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                Soy un desarrollador WordPress con más de <span className="text-primary-400 font-semibold">12 años de experiencia</span> en el ciclo completo de desarrollo web. Durante los últimos 8 años, me he especializado profundamente en WordPress, convirtiéndome en un experto en el desarrollo de temas y soluciones personalizadas.
              </p>
              
              <p>
                Mi formación en <span className="text-primary-400 font-semibold">Diseño Gráfico</span> me permite combinar habilidades técnicas con sensibilidad visual, creando experiencias de usuario (UX) que no solo funcionan perfectamente, sino que también son intuitivas y atractivas.
              </p>
              
              <p>
                Como profesional <span className="text-primary-400 font-semibold">autodidacta</span>, estoy constantemente aprendiendo y adaptándome a las nuevas tecnologías. Esta mentalidad me ha permitido mantenerme al día con las últimas tendencias y mejores prácticas en desarrollo web.
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-4">Contacto Directo</h4>
              <div className="space-y-2">
                <p className="text-slate-400">
                  <span className="text-primary-400">📍</span> Monterrey, Nuevo León, México
                </p>
                <p className="text-slate-400">
                  <span className="text-primary-400">📧</span> pachogzz@gmail.com
                </p>
                <p className="text-slate-400">
                  <span className="text-primary-400">📱</span> +52 (811) 918-4632
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="text-center bg-slate-800 rounded-xl p-6 border border-slate-700"
              data-aos="zoom-in" 
              data-aos-delay={index * 100}
            >
              <div className="text-primary-400 mb-3 flex justify-center">
                {highlight.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">
                {highlight.title}
              </h4>
              <p className="text-slate-400 text-sm">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Mis Valores Profesionales
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600"
                data-aos="fade-up" 
                data-aos-delay={500 + index * 100}
              >
                <h4 className="text-lg font-semibold text-primary-400 mb-3">
                  {value.title}
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
