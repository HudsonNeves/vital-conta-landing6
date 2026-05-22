import '../styles/sections.css'
import equipeFoto from '../assets/images/equipe.png'

function QuemSomos() {
  const valores = [
    {
      titulo: 'Clareza sempre',
      texto: 'Explicamos seus números e obrigações de forma simples.'
    },
    {
      titulo: 'Apoio prático',
      texto: 'Estamos ao seu lado para resolver o dia a dia do negócio.'
    },
    {
      titulo: 'Crescimento seguro',
      texto: 'Ajuda para você avançar sem perder o controle.'
    }
  ]

  return (
    <section className="about" id="quem-somos">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="about-kicker">Quem somos</span>
            <h2>Ajudamos quem não é especialista a cuidar do negócio.</h2>
            <p>
              Na VITAL CONTA, falamos de forma simples e caminhamos com você
              passo a passo. Nossa prioridade é que você entenda a sua empresa
              e ganhe mais tranquilidade.
            </p>
            <p>
              Aqui sua empresa recebe organização, controle e orientação
              prática para crescer sem risco.
            </p>

            <div className="founders-note">
              <span>Fundadoras</span>
              <strong>Alessandra Pereira e Patrícia Barbosa</strong>
            </div>
          </div>

          <div className="about-image">
            <img src={equipeFoto} alt="Equipe Vital Conta" />
          </div>
        </div>

        <div className="about-values">
          {valores.map((valor) => (
            <div className="value-card" key={valor.titulo}>
              <strong>{valor.titulo}</strong>
              <p>{valor.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuemSomos
