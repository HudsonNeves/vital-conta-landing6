import '../styles/sections.css'

function ProvaSocial() {
  const depoimentos = [
    {
      nome: 'Carlos Mendes',
      cargo: 'Empresário',
      texto: 'Hoje tenho total clareza sobre minhas finanças. Consigo tomar decisões com muito mais segurança.',
      socials: [
        { name: 'linkedin', url: 'https://www.linkedin.com/in/carlosmendes' },
        { name: 'instagram', url: 'https://www.instagram.com/carlosmendes' }
      ]
    },
    {
      nome: 'Além Mar Turismo',
      cargo: 'Agência de Turismo',
      texto: 'A organização que a Vital trouxe mudou completamente a forma como gerencio meu negócio.',
      socials: [
        { name: 'instagram', url: 'https://www.instagram.com/alemar.tur?igsh=MWRta3ZvcHowaml2MQ==' }
      ]
    }
  ]

  return (
    <section className="testimonials" id="prova-social">
      <div className="container">
        <h2>
          Empresas que buscam organização e crescimento confiam na VITAL CONTA
        </h2>

        <p className="testimonials-subtitle">
          Resultados reais de quem decidiu organizar a gestão e evoluir com estratégia.
        </p>

        <div className="testimonials-grid">
          {depoimentos.map((item, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">
                “{item.texto}”
              </p>

              <div className="testimonial-author">
                <strong>{item.nome}</strong>
                <span>{item.cargo}</span>
                <div className="testimonial-social">
                  {item.socials.map((social, socialIndex) => (
                    <a key={socialIndex} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                      {social.name === 'linkedin' ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" rx="1" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="5" />
                          <circle cx="12" cy="12" r="4" />
                          <circle cx="17.5" cy="6.5" r="1" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProvaSocial
