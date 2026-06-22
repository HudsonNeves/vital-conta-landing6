import '../styles/hero.css'
import { trackEvent } from '../utils/analytics'

function Hero({ navigateDiagnosis }) {
  const handleClick = () => {
    trackEvent('diagnosis_cta_click', { location: 'hero' })
    if (navigateDiagnosis) {
      navigateDiagnosis()
    } else {
      window.location.hash = '/diagnostico'
    }
  }

  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', { location: 'hero' })
    window.open(
      'https://wa.me/5561996921053?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista%20da%20Vital%20Conta.',
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <span className="hero-badge">
            Gestão Empresarial e Assessoria Contábil
          </span>

          <h1>
            Gestão 360º para o seu negócio
          </h1>

          <p className="hero-subheadline">
            Ajudamos você a simplificar a burocracia com soluções integradas em gestão empresarial, finanças e contabilidade.
          </p>

          <div className="hero-buttons">
            <button className="btn" type="button" onClick={handleClick}>
              Solicitar análise gratuita
            </button>

            <button className="btn btn-secondary" type="button" onClick={handleWhatsApp}>
              Falar com especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
