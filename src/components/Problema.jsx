import '../styles/sections.css'
import complexidade from '../assets/images/ComplexidadeTributaria.png'
import lucros from '../assets/images/DecisoesEscuro.png'
import controle from '../assets/images/Faltadecontrolefinanceiro.png'
import tempo from '../assets/images/TempoPerdido.png'

function Problema() {
  const cards = [
    {
      image: complexidade,
      width: 800,
      height: 430,
      titulo: 'Impostos e prazos geram insegurança',
      descricao: 'Obrigações acumuladas deixam o fluxo confuso e tornam difícil pagar no prazo certo.'
    },
    {
      image: lucros,
      width: 800,
      height: 284,
      titulo: 'Falta de visibilidade financeira',
      descricao: 'Sem controles precisos, você não sabe onde o dinheiro entra, sai e como proteger sua margem.'
    },
    {
      image: controle,
      width: 800,
      height: 279,
      titulo: 'A burocracia drena sua rotina',
      descricao: 'Fluxos manuais e papelada desorganizada fazem você perder tempo e energia em tarefas operacionais.'
    },
    {
      image: tempo,
      width: 800,
      height: 339,
      titulo: 'Decisões mais seguras com processos',
      descricao: 'Passos claros e práticos deixam a gestão mais previsível e reduzem erros na tomada de decisão.'
    }
  ]

  return (
    <section className="problem" id="problema">
      <div className="container">
        <h2>
          Sua empresa cresce, mas você ainda sente que falta controle?
        </h2>

        <p className="problem-subtitle">
          De um lado, os desafios do dia a dia. Do outro, a organização que deixa a gestão mais simples:
        </p>

        <div className="problem-grid">
          {cards.map((item, index) => (
            <div key={index} className="problem-card">
              <div className="problem-icon">
                <img
                  src={item.image}
                  alt={item.titulo}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problema
