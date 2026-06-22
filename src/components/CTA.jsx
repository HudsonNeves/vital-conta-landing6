import '../styles/sections.css'
import { trackEvent } from '../utils/analytics'

function CTA() {
  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', { location: 'final_cta' })
    window.open('https://wa.me/5561996921053', '_blank')
  }

  return (
    <section className="cta" id="cta-final">
      <div className="container">
        <h2>Quer deixar sua empresa mais organizada hoje?</h2>

        <p className="cta-text">
          Converse com quem fala sua língua e monta um plano simples para você seguir sem complicação.
        </p>

        <button className="cta-button" onClick={handleWhatsApp}>
          Falar no WhatsApp agora
        </button>
      </div>
    </section>
  )
}

export default CTA
