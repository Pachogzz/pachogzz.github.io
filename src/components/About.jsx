import { Award, Clock, Heart, Target } from 'lucide-react'
import { useLanguage } from '../LanguageContext'
import { translations } from '../translations'

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const highlights = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: t.about.highlightYears,
      description: t.about.highlightYearsDesc
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: t.about.highlightSpecialization,
      description: t.about.highlightSpecializationDesc
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t.about.highlightProjects,
      description: t.about.highlightProjectsDesc
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t.about.highlightPassion,
      description: t.about.highlightPassionDesc
    }
  ]

  const values = [
    {
      title: t.about.valueQuality,
      description: t.about.valueQualityDesc
    },
    {
      title: t.about.valueInnovation,
      description: t.about.valueInnovationDesc
    },
    {
      title: t.about.valueCommunication,
      description: t.about.valueCommunicationDesc
    },
    {
      title: t.about.valueCommitment,
      description: t.about.valueCommitmentDesc
    }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">{t.about.title}</span>
            <span className="gradient-text">{t.about.titleGradient}</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t.about.subtitle}
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
              {t.about.name}
            </h3>

            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                {t.about.para1Start}<span className="text-primary-400 font-semibold">{t.about.para1Highlight}</span> {t.about.para1End}
              </p>

              <p>
                {t.about.para2Start}<span className="text-primary-400 font-semibold">{t.about.para2Highlight}</span> {t.about.para2End}
              </p>

              <p>
                {t.about.para3Start}<span className="text-primary-400 font-semibold">{t.about.para3Highlight}</span> {t.about.para3End}
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-4">{t.about.contactTitle}</h4>
              <div className="space-y-2">
                <p className="text-slate-400">
                  <span className="text-primary-400">📍</span> {t.about.location}
                </p>
                <p className="text-slate-400">
                  <span className="text-primary-400">📧</span> {t.about.email}
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
            {t.about.valuesTitle}
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
