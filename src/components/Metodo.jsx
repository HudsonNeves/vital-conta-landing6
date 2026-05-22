import '../styles/sections.css'

function Metodo() {
  const etapas = [
    {
      numero: '1',
      titulo: 'Diagnóstico',
      descricao: 'Analisamos sua empresa para entender o cenário atual, identificar riscos e encontrar oportunidades.'
    },
    {
      numero: '2',
      titulo: 'Organização',
      descricao: 'Estruturamos processos contábeis, financeiros e administrativos com clareza e controle.'
    },
    {
      numero: '3',
      titulo: 'Acompanhamento',
      descricao: 'Monitoramos continuamente sua operação para garantir conformidade e evolução.'
    },
    {
      numero: '4',
      titulo: 'Evolução',
      descricao: 'Ajudamos você a tomar decisões seguras para crescer com consistência e estratégia.'
    },
    {
      numero: '5',
      titulo: 'Reenquadramento',
      descricao: 'Avaliamos o melhor regime e ajustamos sua empresa quando o crescimento exige uma nova estrutura.'
    }
  ]

  return (
    <section className="method" id="metodo">
      <div className="container">
        <h2>Passos simples para organizar sua gestão</h2>

        <p className="method-subtitle">
          Nada de jargão. Um caminho fácil para você entender o que fazer e manter seu negócio funcionando melhor.
        </p>

        <div className="method-grid">
          {etapas.map((etapa, index) => (
            <div key={index} className="method-card">
              <div className="method-number">
                {etapa.numero}
              </div>

              <h3>{etapa.titulo}</h3>

              <p>{etapa.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Metodo
