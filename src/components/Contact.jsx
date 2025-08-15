import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create WhatsApp message
    const whatsappMessage = `Hola Pacho! 👋

*Nombre:* ${formData.name}
*Email:* ${formData.email}

*Mensaje:*
${formData.message}

Me interesa trabajar contigo en un proyecto web.`

    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/5281191846320?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      info: "Monterrey, Nuevo León",
      subinfo: "México 64370"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      info: "+52 (811) 918-4632",
      subinfo: "WhatsApp disponible"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "pachogzz@gmail.com",
      subinfo: "Respuesta en 24h"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-slate-800/50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Hablemos de Tu </span>
            <span className="gradient-text">Proyecto</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            ¿Tienes un sitio web que necesita modernizarse? ¿Quieres migrar de estático a WordPress? 
            ¡Conversemos sobre cómo puedo ayudarte!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div data-aos="fade-right">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-primary-400" />
                Envíame un Mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                    placeholder="Cuéntame sobre tu proyecto: ¿Qué tipo de sitio tienes? ¿Qué funcionalidades necesitas? ¿Cuáles son tus objetivos?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4"
                >
                  <Send className="w-5 h-5" />
                  Enviar por WhatsApp
                </button>
              </form>

              <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/30 rounded-lg">
                <p className="text-primary-400 text-sm">
                  <strong>📱 WhatsApp Directo:</strong> Al enviar el formulario, se abrirá WhatsApp con tu mensaje pre-escrito. 
                  ¡Es la forma más rápida de conectar!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Información de Contacto
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Estoy siempre disponible para discutir nuevos proyectos y oportunidades. 
                  No dudes en contactarme por cualquier canal que prefieras.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-primary-500/50 transition-colors"
                  >
                    <div className="text-primary-400 mt-1">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-slate-300 font-medium">
                        {contact.info}
                      </p>
                      <p className="text-slate-400 text-sm">
                        {contact.subinfo}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 rounded-xl p-6 border border-green-500/30">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-green-400" />
                  WhatsApp Directo
                </h4>
                <p className="text-slate-300 mb-4 text-sm">
                  ¿Prefieres ir directo al grano? Envíame un mensaje por WhatsApp.
                </p>
                <a 
                  href="https://wa.me/5281191846320?text=Hola%20Pacho!%20Me%20interesa%20trabajar%20contigo%20en%20un%20proyecto%20web."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Abrir WhatsApp
                </a>
              </div>

              {/* Response Time */}
              <div className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-700">
                <h4 className="text-primary-400 font-semibold mb-2">⚡ Tiempo de Respuesta</h4>
                <p className="text-slate-300 text-sm">
                  Respondo todos los mensajes en un máximo de <strong>24 horas</strong>.
                  WhatsApp generalmente en pocas horas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
