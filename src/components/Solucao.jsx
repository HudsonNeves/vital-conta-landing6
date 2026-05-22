import '../styles/sections.css'

const solutionIcons = {
  finance: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="21" cy="21" r="11" />
      <path d="M29 29L39 39" />
      <path d="M16 22L20 26L27 16" />
    </svg>
  ),
  tax: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 6L38 11V22C38 31 32 38 24 42C16 38 10 31 10 22V11L24 6Z" />
      <path d="M18 24L22 28L31 18" />
    </svg>
  ),
  process: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M16 6H32L38 12V40C38 41.1 37.1 42 36 42H12C10.9 42 10 41.1 10 40V8C10 6.9 10.9 6 12 6H16Z" />
      <path d="M31 6V13H38" />
      <path d="M17 21H31" />
      <path d="M17 28H31" />
      <path d="M17 35H25" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M15 25L21 31C23 33 26 33 28 31L40 19C42 17 42 14 40 12C38 10 35 10 33 12L24 21" />
      <path d="M33 25L27 31C25 33 22 33 20 31L8 19C6 17 6 14 8 12C10 10 13 10 15 12L24 21" />
    </svg>
  )
}

function Solucao() {
  const solucoes = [
    {
      icon: 'finance',
      titulo: 'Entenda suas finanças sem mistério',
      descricao: 'Veja de forma clara como estão as receitas, os custos e os resultados.'
    },
    {
      icon: 'tax',
      titulo: 'Fique seguro em relação aos impostos',
      descricao: 'Saiba o que precisa ser feito para não perder prazos e evitar riscos.'
    },
    {
      icon: 'process',
      titulo: 'Organize os processos do dia a dia',
      descricao: 'Deixe sua rotina mais fácil, com documentos e tarefas sob controle.'
    },
    {
      icon: 'support',
      titulo: 'Tenha apoio real para suas decisões',
      descricao: 'Acompanhamos você para fazer escolhas mais confiantes.'
    }
  ]

  return (
    <section className="solution" id="solucao">
      <div className="container">
        <h2>
          O que fazemos para deixar tudo mais simples
        </h2>

        <p className="solution-subtitle">
          Ajudamos você a organizar o dia a dia da empresa sem precisar entender termos difíceis.
        </p>

        <div className="solution-grid">
          {solucoes.map((item) => (
            <div key={item.icon} className="solution-card">
              <div className="solution-icon">{solutionIcons[item.icon]}</div>
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solucao
