import { Heart, Linkedin, Github, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/pachogzz',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub', 
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/pachogzz',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:pachogzz@gmail.com',
      color: 'hover:text-primary-400'
    },
    {
      name: 'WhatsApp',
      icon: <Phone className="w-5 h-5" />,
      url: 'https://wa.me/5281191846320?text=Hola%20Pacho!%20Me%20interesa%20trabajar%20contigo.',
      color: 'hover:text-green-400'
    }
  ]

  const quickLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Acerca de Mí', href: '#about' },
    { name: 'Contacto', href: '#contact' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold">
                P
              </div>
              <h3 className="text-xl font-bold text-white">
                Francisco Gonzalez
              </h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Desarrollador WordPress con más de 12 años de experiencia, especializado en migración de sitios estáticos a WordPress y desarrollo con ReactJS.
            </p>
            <div className="text-slate-400 text-sm">
              <p>📍 Monterrey, Nuevo León, México</p>
              <p>📧 pachogzz@gmail.com</p>
              <p>📱 +52 (811) 918-4632</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Conecta Conmigo</h4>
            <p className="text-slate-400 mb-4 text-sm">
              Sígueme en redes sociales y mantente al día con mis últimos proyectos.
            </p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-slate-800 rounded-lg text-slate-400 transition-all hover:bg-slate-700 transform hover:scale-105 ${social.color}`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* CTA */}
            <div className="bg-primary-600/10 border border-primary-500/30 rounded-lg p-4">
              <p className="text-primary-400 font-medium text-sm mb-2">
                ¿Listo para tu proyecto?
              </p>
              <a 
                href="#contact"
                className="text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
              >
                Hablemos ahora →
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-slate-400 text-sm text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start gap-1">
                © {currentYear} Francisco Gonzalez (Pacho). Hecho con 
                <Heart className="w-4 h-4 text-red-500 animate-pulse" /> 
                en Monterrey, México.
              </p>
            </div>

            {/* Back to Top */}
            <button 
              onClick={scrollToTop}
              className="text-slate-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-1 hover:translate-y-[-2px] transform transition-transform"
            >
              Volver arriba ↑
            </button>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400"></div>
    </footer>
  )
}

export default Footer
