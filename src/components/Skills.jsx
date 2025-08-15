import { 
  Code2, 
  Palette, 
  Database, 
  Globe, 
  Figma, 
  Github,
  Users,
  Zap,
  Layers,
  Monitor,
  Smartphone,
  Settings
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "CMS & Desarrollo Web",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "WordPress", level: 90, icon: <Code2 className="w-5 h-5" /> },
        { name: "WooCommerce", level: 85, icon: <Settings className="w-5 h-5" /> },
        { name: "Elementor", level: 88, icon: <Layers className="w-5 h-5" /> },
        { name: "ACF Pro", level: 92, icon: <Database className="w-5 h-5" /> },
        { name: "JetEngine", level: 80, icon: <Zap className="w-5 h-5" /> },
        { name: "HubSpot", level: 75, icon: <Users className="w-5 h-5" /> },
      ]
    },
    {
      title: "Front-End",
      icon: <Monitor className="w-6 h-6" />,
      skills: [
        { name: "HTML5", level: 95, icon: <Code2 className="w-5 h-5" /> },
        { name: "CSS3", level: 90, icon: <Palette className="w-5 h-5" /> },
        { name: "JavaScript (ES6)", level: 85, icon: <Code2 className="w-5 h-5" /> },
        { name: "React", level: 82, icon: <Code2 className="w-5 h-5" /> },
        { name: "Bootstrap", level: 88, icon: <Smartphone className="w-5 h-5" /> },
        { name: "Tailwind CSS", level: 85, icon: <Palette className="w-5 h-5" /> },
      ]
    },
    {
      title: "Back-End & Herramientas",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "PHP", level: 85, icon: <Code2 className="w-5 h-5" /> },
        { name: "MySQL", level: 80, icon: <Database className="w-5 h-5" /> },
        { name: "Git", level: 85, icon: <Github className="w-5 h-5" /> },
        { name: "cPanel", level: 90, icon: <Settings className="w-5 h-5" /> },
        { name: "WP Engine", level: 88, icon: <Globe className="w-5 h-5" /> },
        { name: "Pantheon", level: 82, icon: <Globe className="w-5 h-5" /> },
      ]
    },
    {
      title: "Diseño",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Figma", level: 88, icon: <Figma className="w-5 h-5" /> },
        { name: "Adobe Illustrator", level: 85, icon: <Palette className="w-5 h-5" /> },
        { name: "Adobe Photoshop", level: 82, icon: <Palette className="w-5 h-5" /> },
        { name: "UX/UI Design", level: 80, icon: <Monitor className="w-5 h-5" /> },
      ]
    }
  ]

  const softSkills = [
    "Comunicación Efectiva",
    "Adaptabilidad", 
    "Liderazgo de Proyectos",
    "Negociación",
    "Empatía",
    "Trabajo bajo presión",
    "Autodidacta",
    "Proactivo"
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Habilidades & </span>
            <span className="gradient-text">Tecnologías</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Más de una década perfeccionando estas tecnologías para crear soluciones web excepcionales.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-slate-800 rounded-xl p-8 border border-slate-700"
              data-aos="fade-up" 
              data-aos-delay={categoryIndex * 100}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-primary-400">
                          {skill.icon}
                        </div>
                        <span className="text-slate-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-primary-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div 
          className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Habilidades Interpersonales
            </h3>
            <p className="text-slate-400">
              Competencias que complementan mi expertise técnico para proyectos exitosos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <div 
                key={index}
                className="bg-slate-900/50 rounded-lg p-4 text-center border border-slate-600 hover:border-primary-500/50 transition-colors"
                data-aos="zoom-in"
                data-aos-delay={500 + index * 50}
              >
                <div className="text-primary-400 mb-2">
                  <Users className="w-5 h-5 mx-auto" />
                </div>
                <span className="text-slate-300 text-sm font-medium">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
