import '../styles/hero.css'

function Hero() {
  const handleClick = () => {
    const section = document.getElementById('cta-final')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
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
            <button className="btn" onClick={handleClick}>
              Solicitar análise gratuita
            </button>

            <button className="btn btn-secondary">
              Falar com especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
