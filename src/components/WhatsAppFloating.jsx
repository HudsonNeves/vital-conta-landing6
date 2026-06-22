import '../styles/whatsapp-floating.css'
import { trackEvent } from '../utils/analytics'

function WhatsAppFloating() {
  const whatsappNumber = '5561996921053'
  const message = encodeURIComponent('Olá, quero falar com um consultor da Vital Conta.')
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`

  return (
    <a
      className="whatsapp-floating"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Vital Conta pelo WhatsApp"
      title="Falar pelo WhatsApp"
      onClick={() => trackEvent('whatsapp_click', { location: 'floating_button' })}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a9.7 9.7 0 0 0-8.4 14.6L2.3 22l5.5-1.3A9.8 9.8 0 1 0 12 2Z" />
        <path d="M8.2 7.4c.2-.5.5-.5.8-.5h.6c.2 0 .4.1.5.4l.8 2c.1.3.1.5-.1.7l-.6.8c-.2.2-.2.4 0 .7.5.9 1.2 1.7 2 2.3.9.7 1.7 1 2.1 1.2.3.1.5.1.7-.1l.9-1.1c.2-.3.5-.3.8-.2l2 .9c.3.1.5.2.5.4.1.2.1 1-.2 1.8-.3.8-1.6 1.5-2.3 1.6-.6.1-1.4.2-3.7-.8a13 13 0 0 1-4.5-2.8A10.4 10.4 0 0 1 5.7 11c-.9-1.6 0-3.1.3-3.5.4-.4.8-.6 1.2-.6h.4" />
      </svg>
    </a>
  )
}

export default WhatsAppFloating
