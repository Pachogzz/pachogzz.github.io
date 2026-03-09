import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'

const Projects = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const projects = [
    {
      id: 1,
      content: {
        es: {
          title: "Grupo Experto Logístico ENMA",
          description: "Sitio web corporativo personalizado para ENMA desarrollado con WordPress. Implementé Advanced Custom Fields (ACF) para crear una experiencia de administración intuitiva y flexible.",
        },
        en: {
          title: "ENMA Logistics Expert Group",
          description: "Custom corporate website for ENMA developed with WordPress. I implemented Advanced Custom Fields (ACF) to create an intuitive and flexible administration experience.",
        }
      },
      image: "images/portfolio/enma-screenshot.jpg",
      technologies: ["WordPress", "ACF Pro", "PHP", "CSS3", "JavaScript"],
      category: "WordPress Development",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      content: {
        es: {
          title: "LOCI - Logística Internacional",
          description: "Portal corporativo multilingüe para empresa de logística internacional. Desarrollado con WordPress y optimizado para múltiples idiomas y regiones.",
        },
        en: {
          title: "LOCI - International Logistics",
          description: "Multilingual corporate portal for an international logistics company. Developed with WordPress and optimized for multiple languages and regions.",
        }
      },
      image: "images/portfolio/loci-screenshot.jpg",
      technologies: ["WordPress", "Multilingual", "WooCommerce", "ACF"],
      category: "WordPress Development",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      content: {
        es: {
          title: "TCA Software Solutions",
          description: "Portal corporativo multilingüe para proveedor de soluciones de software. Diseño moderno y funcionalidades avanzadas de gestión de contenido.",
        },
        en: {
          title: "TCA Software Solutions",
          description: "Multilingual corporate portal for a software solutions provider. Modern design with advanced content management features.",
        }
      },
      image: "images/portfolio/tcass-screenshot.jpg",
      technologies: ["WordPress", "Elementor", "ACF Pro", "Multilingual"],
      category: "WordPress Development", 
      link: "#",
      github: "#"
    },
    {
      id: 4,
      content: {
        es: {
          title: "UANL - Portal Universitario",
          description: "Portal institucional para la Universidad Autónoma de Nuevo León. Desarrollo de tema personalizado con funcionalidades específicas para el sector educativo.",
        },
        en: {
          title: "UANL - University Portal",
          description: "Institutional portal for the Autonomous University of Nuevo León. Custom theme development with specific features for the educational sector.",
        }
      },
      image: "images/portfolio/uanl-screenshot.jpg",
      technologies: ["WordPress", "Custom Theme", "PHP", "MySQL"],
      category: "WordPress Development",
      link: "#",
      github: "#"
    },
    {
      id: 5,
      content: {
        es: {
          title: "Dosachi eCommerce",
          description: "Tienda en línea para productos de limpieza y desinfectantes. Implementación completa de WooCommerce con funcionalidades de pago y gestión de inventario.",
        },
        en: {
          title: "Dosachi eCommerce",
          description: "Online store for cleaning and disinfectant products. Full WooCommerce implementation including payment features and inventory management.",
        }
      },
      image: "images/portfolio/dosachi-screenshot.jpg",
      technologies: ["WordPress", "WooCommerce", "Payment Gateway", "ACF"],
      category: "eCommerce",
      link: "#",
      github: "#"
    },
    {
      id: 6,
      content: {
        es: {
          title: "Concepto Trading UI/UX",
          description: "Diseño de interfaz para plataforma de trading y fondeo de cuentas. Creado en Figma con enfoque en experiencia de usuario y funcionalidad financiera.",
        },
        en: {
          title: "Concepto Trading UI/UX",
          description: "Interface design for a trading and account funding platform. Created in Figma with a focus on user experience and financial functionality.",
        }
      },
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
            <span className="text-white">{t.projects.title}</span>
            <span className="gradient-text">{t.projects.titleGradient}</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t.projects.subtitle}
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
                  alt={project.content[language].title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.content[language].title}
                </h3>
                
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.content[language].description}
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

              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            {t.projects.cta}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
