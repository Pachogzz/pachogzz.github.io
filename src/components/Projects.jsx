import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Grupo Experto Logístico ENMA",
      description: "Sitio web corporativo personalizado para ENMA desarrollado con WordPress. Implementé Advanced Custom Fields (ACF) para crear una experiencia de administración intuitiva y flexible.",
      image: "images/portfolio/enma-screenshot.jpg",
      technologies: ["WordPress", "ACF Pro", "PHP", "CSS3", "JavaScript"],
      category: "WordPress Development",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "LOCI - Logística Internacional",
      description: "Portal corporativo multilingüe para empresa de logística internacional. Desarrollado con WordPress y optimizado para múltiples idiomas y regiones.",
      image: "images/portfolio/loci-screenshot.jpg",
      technologies: ["WordPress", "Multilingual", "WooCommerce", "ACF"],
      category: "WordPress Development",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "TCA Software Solutions",
      description: "Portal corporativo multilingüe para proveedor de soluciones de software. Diseño moderno y funcionalidades avanzadas de gestión de contenido.",
      image: "images/portfolio/tcass-screenshot.jpg",
      technologies: ["WordPress", "Elementor", "ACF Pro", "Multilingual"],
      category: "WordPress Development", 
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "UANL - Portal Universitario",
      description: "Portal institucional para la Universidad Autónoma de Nuevo León. Desarrollo de tema personalizado con funcionalidades específicas para el sector educativo.",
      image: "images/portfolio/uanl-screenshot.jpg",
      technologies: ["WordPress", "Custom Theme", "PHP", "MySQL"],
      category: "WordPress Development",
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Dosachi eCommerce",
      description: "Tienda en línea para productos de limpieza y desinfectantes. Implementación completa de WooCommerce con funcionalidades de pago y gestión de inventario.",
      image: "images/portfolio/dosachi-screenshot.jpg",
      technologies: ["WordPress", "WooCommerce", "Payment Gateway", "ACF"],
      category: "eCommerce",
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Concepto Trading UI/UX",
      description: "Diseño de interfaz para plataforma de trading y fondeo de cuentas. Creado en Figma con enfoque en experiencia de usuario y funcionalidad financiera.",
      image: "images/portfolio/financial-concept-screenshot.jpg",
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      category: "UI/UX Design",
      link: "#",
      github: "#"
    }
  ]

  return (
    <section id="projects" className="section-padding bg-slate-800/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Proyectos </span>
            <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en desarrollo WordPress, eCommerce y diseño UI/UX.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 card-hover"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.link}
                      className="p-2 bg-white rounded-full text-slate-900 hover:bg-slate-200 transition-colors"
                      title="Ver proyecto"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.github}
                      className="p-2 bg-white rounded-full text-slate-900 hover:bg-slate-200 transition-colors"
                      title="Ver código"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between">
                  <a 
                    href={project.link}
                    className="text-primary-400 hover:text-primary-300 font-medium flex items-center gap-1 transition-colors"
                  >
                    Ver Proyecto
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
          <p className="text-slate-400 mb-6">
            ¿Quieres ver más proyectos o discutir una colaboración?
          </p>
          <a 
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Hablemos de Tu Proyecto
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
