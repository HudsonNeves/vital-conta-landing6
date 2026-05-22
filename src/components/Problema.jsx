import '../styles/sections.css'
import complexidade from '../assets/images/ComplexidadeTributaria.png'
import lucros from '../assets/images/DecisoesEscuro.png'
import controle from '../assets/images/Faltadecontrolefinanceiro.png'
import tempo from '../assets/images/TempoPerdido.png'

function Problema() {
  const cards = [
    {
      image: complexidade,
      titulo: 'Impostos e prazos geram insegurança',
      descricao: 'Quando as obrigações se acumulam, fica difícil saber o que pagar, quando entregar e como evitar erros.'
    },
    {
      image: lucros,
      titulo: 'Clareza sobre receitas, gastos e resultados',
      descricao: 'Com controles organizados, você entende o que entra, o que sai e o que realmente sobra no negócio.'
    },
    {
      image: controle,
      titulo: 'A papelada consome tempo e energia',
      descricao: 'Documentos soltos e processos manuais travam a rotina e tiram você das decisões mais importantes.'
    },
    {
      image: tempo,
      titulo: 'Processos claros para decidir melhor',
      descricao: 'Com orientação prática, sua empresa ganha método, previsibilidade e mais segurança para avançar.'
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
                <img src={item.image} alt={item.titulo} />
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
