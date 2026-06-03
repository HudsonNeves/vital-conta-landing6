import { useState } from 'react'
import '../styles/sections.css'

function HubSolucao() {
  const [flipped, setFlipped] = useState(null)

  const cards = [
    {
      id: 1,
      title: 'Problema Operacional',
      problem: "Sua empresa fatura bem, mas o lucro 'escorre pelas mãos' devido a processos confusos, retrabalho e desperdício de tempo da equipe?",
      solution: 'Transformamos o caos operacional em processos previsíveis, permitindo que você pare de apagar incêndios e comece a liderar o crescimento.'
    },
    {
      id: 2,
      title: 'Impostos e Burocracia Fiscal',
      problem: 'Sinto que trabalho para pagar impostos e ainda corro o risco de ser multado por algum erro que nem entendo.',
      solution: 'Simplificamos a rotina contábil e tributária para manter sua empresa em conformidade, reduzir riscos e identificar oportunidades legais de economia.'
    },
    {
      id: 3,
      title: 'Gestão de Fluxo de Caixa',
      problem: 'As receitas entram, mas não sei para onde o dinheiro vai. Não consigo visualizar o que realmente sobra no final do mês.',
      solution: 'Implementamos clareza absoluta sobre o que entra, o que sai e o que sobra. Você assume o controle total do seu lucro com relatórios que até quem não é da área financeira consegue entender.'
    },
    {
      id: 4,
      title: 'Gestão do Tempo e Operação',
      problem: 'Gasto horas com papelada e tarefas manuais que não trazem um centavo de crescimento para o meu negócio.',
      solution: 'Reestruturamos tarefas operacionais manuais com processos inteligentes, para que seu tempo seja direcionado à estratégia e à gestão do crescimento.'
    },
    {
      id: 5,
      title: 'Segurança na Tomada de Decisão',
      problem: "Sinto que estou 'pilotando no escuro'. Tomo decisões baseadas no meu instinto porque não tenho dados confiáveis para escolher o próximo passo.",
      solution: 'Troque o "acho" pela certeza. Entregamos indicadores reais de rentabilidade e viabilidade para que cada decisão sua seja baseada em fatos, minimizando riscos e maximizando o retorno.'
    },
    {
      id: 6,
      title: 'Emissão de Notas e Faturamento',
      problem: 'Não faço ideia de como emitir uma nota fiscal e tenho medo de preencher algo errado e pagar imposto dobrado.',
      solution: 'Faturamento em poucos cliques. Você não precisa lidar com sites lentos e confusos do governo. A Vital Conta oferece um sistema simples e intuitivo, com suporte total da nossa equipe para configurar tudo.'
    },
    {
      id: 7,
      title: 'Abertura e Formalização',
      problem: 'Quero formalizar meu negócio e abrir minha empresa, mas tenho medo de cometer erros, pagar multas ou ficar preso em papeladas que eu não entendo.',
      solution: 'Tiramos sua ideia do papel com segurança. Cuidamos de todo o processo de abertura e formalização, explicando cada passo de um jeito simples para você começar do jeito certo.'
    },
    {
      id: 8,
      title: 'Dilema do Crescimento',
      problem: 'Minha empresa cresceu, desenquadrei do MEI (ou Simples) e agora não sei o que fazer. Tenho medo de perder todo o meu lucro com novos impostos e burocracia.',
      solution: 'Cresça sem traumas. Cuidamos de toda a transição de regime tributário e analisamos o melhor caminho para sua empresa continuar expandindo com segurança jurídica e pagando o menor imposto possível dentro da nova categoria.'
    },
    {
      id: 9,
      title: 'Autonomia da Operação',
      problem: 'Sinto que a empresa só funciona se eu estiver olhando. Se eu me afasto por um dia, as tarefas param, os prazos vencem e a equipe fica perdida.',
      solution: 'Estruturamos a documentação operacional da sua empresa. Mapeamos processos, responsáveis e padrões de execução para que a rotina funcione com mais autonomia.'
    },
    {
      id: 10,
      title: 'Custos e Precificação',
      problem: 'Trabalho muito, fecho muitos contratos, mas parece que nunca sobra dinheiro. Tenho a sensação de que estou pagando para trabalhar ou que meu preço está errado.',
      solution: 'Lucro real no bolso. Analisamos seus custos escondidos e estruturamos uma tabela de preços estratégica para você saber exatamente quanto cobrar e garantir a margem que seu esforço merece.'
    },
    {
      id: 11,
      title: 'Comunicação e Gestão de Conflitos',
      problem: 'Minha equipe bate cabeça, as informações se perdem no caminho e o clima fica pesado por causa de fofocas ou erros de interpretação.',
      solution: 'Alinhamento total. Implementamos canais e métodos de comunicação claros, treinando sua liderança para resolver conflitos de forma profissional e manter o ambiente focado em soluções.'
    },
    {
      id: 12,
      title: 'Planejamento e Indicadores',
      problem: 'Tenho metas para crescer, mas não consigo acompanhar se a empresa está avançando na direção certa.',
      solution: 'Definimos indicadores práticos e uma rotina de acompanhamento para transformar metas em decisões mensuráveis, com visão clara de desempenho, prioridades e próximos passos.'
    }
  ]

  const toggleCard = (id) => {
    setFlipped(flipped === id ? null : id)
  }

  return (
    <section className="hub" id="hub-solucoes">
      <div className="container">
        <h2>Hub de Soluções</h2>
        <p className="solution-subtitle">
          Explore os principais desafios da gestão empresarial e veja como a Vital Conta transforma cada ponto crítico em organização, controle e crescimento.
        </p>

        <div className="hub-grid">
          {cards.map((card) => {
            const isFlipped = flipped === card.id

            return (
              <div
                key={card.id}
                className={`hub-card ${isFlipped ? 'flipped' : ''}`}
                onClick={() => toggleCard(card.id)}
                role="button"
                tabIndex={0}
                aria-label={`${isFlipped ? 'Voltar para o problema' : 'Ver solução'}: ${card.title}`}
                aria-expanded={isFlipped}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggleCard(card.id)
                  }
                }}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-face flip-card-front">
                    <div className="hub-card-title">{card.title}</div>
                    <span className="hub-card-label">O problema</span>
                    <div className="hub-card-problem">{card.problem}</div>
                    <span className="btn-small hub-card-cta">Ver solução</span>
                  </div>

                  <div className="flip-card-face flip-card-back">
                    <span className="hub-card-label hub-card-label-light">A solução</span>
                    <div className="hub-card-back-title">{card.title}</div>
                    <div className="hub-card-solution">{card.solution}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HubSolucao
