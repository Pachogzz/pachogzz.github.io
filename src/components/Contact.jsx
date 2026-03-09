import { useState } from 'react'
import { Mail, MapPin, Send, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react'
import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '' // Honeypot field
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitCount, setSubmitCount] = useState(0)
  const [lastSubmitTime, setLastSubmitTime] = useState(0)

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: t.contact.formErrors.required })
      return false
    }

    if (formData.name.trim().length < 3) {
      setFormStatus({ type: 'error', message: t.contact.formErrors.nameLength })
      return false
    }

    if (!validateEmail(formData.email)) {
      setFormStatus({ type: 'error', message: t.contact.formErrors.invalidEmail })
      return false
    }

    if (formData.message.trim().length < 10) {
      setFormStatus({ type: 'error', message: t.contact.formErrors.messageLength })
      return false
    }

    // Honeypot check - if website field is filled, it's likely a bot
    if (formData.website) {
      setFormStatus({ type: 'error', message: t.contact.formErrors.botDetected })
      return false
    }

    // Rate limiting - max 3 submissions per minute
    const now = Date.now()
    if (now - lastSubmitTime < 60000) {
      if (submitCount >= 3) {
        setFormStatus({ type: 'error', message: t.contact.formErrors.rateLimit })
        return false
      }
    } else {
      setSubmitCount(0)
    }

    return true
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear status when user starts typing
    if (formStatus.type) {
      setFormStatus({ type: '', message: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    const now = Date.now()

    try {
      // Sanitize input to prevent XSS
      const sanitizeText = (text) => {
        return text
          .trim()
          .replace(/[<>]/g, '')
          .substring(0, 500)
      }

      const sanitizedName = sanitizeText(formData.name)
      const sanitizedEmail = formData.email.toLowerCase().trim()
      const sanitizedMessage = sanitizeText(formData.message)

      // Create WhatsApp message
      const whatsappMessage = `Hola! 👋

*Nombre:* ${sanitizedName}
*Email:* ${sanitizedEmail}

*Mensaje:*
${sanitizedMessage}

Me interesa trabajar contigo en un proyecto web.`

      const encodedMessage = encodeURIComponent(whatsappMessage)
      const whatsappUrl = `https://wa.me/52?text=${encodedMessage}`

      // Open WhatsApp
      window.open(whatsappUrl, '_blank')

      // Update submit tracking
      setSubmitCount(submitCount + 1)
      setLastSubmitTime(now)

      // Show success message
      setFormStatus({ type: 'success', message: t.contact.formSuccess })

      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '', website: '' })
        setFormStatus({ type: '', message: '' })
      }, 3000)
    } catch (error) {
      setFormStatus({ type: 'error', message: t.contact.formErrors.botDetected })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t.contact.locationTitle,
      info: t.contact.locationValue,
      subinfo: t.contact.locationSubinfo
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t.contact.emailTitle,
      info: t.contact.emailValue,
      subinfo: t.contact.emailSubinfo
    }
  ]

  return (
    <section id="contact" className="section-padding bg-slate-800/50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">{t.contact.title}</span>
            <span className="gradient-text">{t.contact.titleGradient}</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div data-aos="fade-right">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-primary-400" />
                {t.contact.formTitle}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div>
                  <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    maxLength="100"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder={t.contact.namePlaceholder}
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    maxLength="120"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder={t.contact.emailPlaceholder}
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    maxLength="1000"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder={t.contact.messagePlaceholder}
                    autoComplete="off"
                  />
                </div>

                {/* Status Messages */}
                {formStatus.message && (
                  <div className={`p-4 rounded-lg flex items-start gap-3 ${
                    formStatus.type === 'error'
                      ? 'bg-red-500/20 border border-red-500/30'
                      : 'bg-green-500/20 border border-green-500/30'
                  }`}>
                    {formStatus.type === 'error' ? (
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    )}
                    <p className={formStatus.type === 'error' ? 'text-red-300 text-sm' : 'text-green-300 text-sm'}>
                      {formStatus.message}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? t.contact.submitButtonLoading : t.contact.submitButton}
                </button>
              </form>

              <div className="mt-6 p-4 bg-slate-700/50 border border-slate-600 rounded-lg">
                <p className="text-slate-400 text-sm">
                  {t.contact.formSecurityNote}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {t.contact.contactInfoTitle}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  {t.contact.contactInfoDesc}
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

              {/* Response Time */}
              <div className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-700">
                <h4 className="text-primary-400 font-semibold mb-2">{t.contact.responseTimeTitle}</h4>
                <p className="text-slate-300 text-sm">
                  {t.contact.responseTimeDesc}
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
