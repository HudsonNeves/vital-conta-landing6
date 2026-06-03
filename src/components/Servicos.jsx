import '../styles/sections.css'

function Servicos() {
  const categorias = [
    {
      titulo: 'Eu não sei se minhas contas estão certas',
      descricao: 'Serviços que deixam sua rotina administrativa mais clara e fácil de acompanhar.',
      itens: [
        'Contabilidade explicada passo a passo',
        'Organização simples do financeiro',
        'Apoio para suas decisões diárias'
      ]
    },
    {
      titulo: 'Eu perco muito tempo com impostos e obrigações digitais',
      descricao: 'Recursos práticos para simplificar rotinas fiscais, acessos e entregas obrigatórias.',
      itens: [
        'Controle simples de notas fiscais',
        'Orientação para uso do certificado digital'
      ]
    },
    {
      titulo: 'Eu quero crescer sem perder o controle',
      descricao: 'Acompanhamento para que seu negócio se organize e cresça no ritmo certo.',
      itens: [
        'Ajuda com equipe e rotina de trabalho',
        'Treinamentos práticos para seu time'
      ]
    }
  ]

  return (
    <section className="services" id="servicos">
      <div className="container">
        <h2>Serviços para sua empresa ficar mais simples e segura</h2>

        <p className="services-subtitle">
          Fazemos o básico funcionar bem e mostramos caminhos claros para melhorar sem complicação.
        </p>

        <div className="services-grid">
          {categorias.map((categoria, index) => (
            <div key={index} className="service-card">
              <h3>{categoria.titulo}</h3>

              <p className="service-description">
                {categoria.descricao}
              </p>

              <ul>
                {categoria.itens.map((item, i) => (
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicos
