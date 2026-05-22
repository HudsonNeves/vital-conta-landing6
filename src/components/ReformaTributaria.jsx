import '../styles/sections.css'

function ReformaTributaria() {
  return (
    <section className="tax-reform" id="reforma-tributaria">
      <div className="container">
        <div className="tax-card">
          <div>
            <span className="tax-badge">Destaque</span>
            <h2>Reforma tributária: sua empresa está preparada para essa mudança?</h2>
            <p>
              A Vital Conta ajuda você a entender o que muda, como ajustar sua estrutura fiscal
              e quais decisões precisam ser tomadas agora para continuar crescendo com segurança.
            </p>
          </div>

          <div className="tax-list">
            <div>
              <strong>Prepare sua empresa</strong>
              <p>Veja o impacto das novas regras nos impostos, no preço e no fluxo de caixa.</p>
            </div>
            <div>
              <strong>Faturamento acima do teto?</strong>
              <p>Parabéns. Sua empresa já exige uma estrutura fiscal mais robusta para seguir crescendo sem burocracia.</p>
            </div>
            <div>
              <strong>Adequação com segurança</strong>
              <p>Organizamos a transição para reduzir riscos, evitar multas e manter sua operação em dia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReformaTributaria
