import '../styles/sections.css'
import equipeFoto from '../assets/images/equipe.png'

function Autoridade() {
  return (
    <section className="authority" id="autoridade">
      <div className="container authority-container">

        <div className="authority-content">

          <h2>Ajudamos quem não é especialista a cuidar do negócio.</h2>

          <p className="authority-text">
            Na VITAL CONTA, falamos de forma simples e caminhamos com você passo a passo.
            Nossa prioridade é que você entenda a sua empresa e ganhe mais tranquilidade.
          </p>

          <p className="authority-text">
            Aqui sua empresa recebe organização, controle e orientação prática para crescer sem risco.
          </p>

          <div className="authority-highlight">
            <strong>Patrícia Barbosa</strong>
            <span>Especialista em ajudar empresas a organizar o dia a dia</span>
          </div>

        </div>

        <div className="authority-image">
          <img src={equipeFoto} alt="Equipe Vital Conta" />
        </div>

      </div>
    </section>
  )
}

export default Autoridade