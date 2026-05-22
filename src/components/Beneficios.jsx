import '../styles/sections.css'

const benefitIcons = {
  finance: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M10 36V20" />
      <path d="M20 36V12" />
      <path d="M30 36V25" />
      <path d="M40 36V16" />
      <path d="M7 36H42" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 6L38 11V22C38 31 32 38 24 42C16 38 10 31 10 22V11L24 6Z" />
      <path d="M18 24L22 28L31 18" />
    </svg>
  ),
  time: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M14 7H34" />
      <path d="M14 41H34" />
      <path d="M17 7C17 15 31 17 31 24C31 31 17 33 17 41" />
      <path d="M31 7C31 15 17 17 17 24C17 31 31 33 31 41" />
    </svg>
  ),
  decision: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M8 36L18 26L26 31L40 14" />
      <path d="M40 14V24" />
      <path d="M40 14H30" />
      <path d="M8 40H40" />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M10 34L24 8L38 34" />
      <path d="M17 28H31" />
      <path d="M14 40H34" />
      <path d="M24 8V40" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M14 27L20 33C22 35 25 35 27 33L40 20C42 18 42 15 40 13C38 11 35 11 33 13L24 22" />
      <path d="M34 27L28 33C26 35 23 35 21 33L8 20C6 18 6 15 8 13C10 11 13 11 15 13L24 22" />
    </svg>
  )
}

function Beneficios() {
  const beneficios = [
    {
      icon: 'finance',
      titulo: 'Mais controle financeiro',
      descricao: 'Você passa a ter visão clara de receitas, despesas e resultados.'
    },
    {
      icon: 'shield',
      titulo: 'Menos riscos fiscais',
      descricao: 'Sua empresa opera com segurança e conformidade.'
    },
    {
      icon: 'time',
      titulo: 'Mais tempo para o negócio',
      descricao: 'Reduza a burocracia e foque no que realmente importa.'
    },
    {
      icon: 'decision',
      titulo: 'Decisões mais seguras',
      descricao: 'Baseie suas escolhas em dados e análises confiáveis.'
    },
    {
      icon: 'growth',
      titulo: 'Crescimento estruturado',
      descricao: 'Evolua com planejamento e consistência.'
    },
    {
      icon: 'support',
      titulo: 'Acompanhamento contínuo',
      descricao: 'Tenha suporte estratégico em todas as fases do seu negócio.'
    }
  ]

  return (
    <section className="benefits" id="beneficios">
      <div className="container">
        <h2>O que muda na prática para sua empresa</h2>

        <p className="benefits-subtitle">
          Resultados reais que impactam diretamente o crescimento e a segurança do seu negócio.
        </p>

        <div className="benefits-grid">
          {beneficios.map((item) => (
            <div key={item.icon} className="benefit-card">
              <div className="benefit-icon">{benefitIcons[item.icon]}</div>

              <h3>{item.titulo}</h3>

              <p>{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Beneficios
