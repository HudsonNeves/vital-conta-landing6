import '../styles/sections.css'

function ReformaTributaria() {
  return (
    <section className="tax-reform" id="reforma-tributaria">
      <div className="container">
        <div className="tax-card">
          <div className="tax-card-intro">
            <span className="tax-badge">Destaque</span>
            <h2>Reforma Tributária: sua empresa está preparada para essa mudança?</h2>
            <p>
              A Vital Conta acompanha continuamente as alterações da legislação tributária e
              auxilia sua empresa na adaptação às novas regras com segurança, planejamento e
              redução de riscos.
            </p>
          </div>

          <div className="tax-list">
            <div>
              <strong>Impactos no negócio</strong>
              <p>Analise os reflexos nos impostos, preços, contratos e fluxo de caixa.</p>
            </div>
            <div>
              <strong>Enquadramento tributário</strong>
              <p>Verifique se o regime atual ainda acompanha o momento da empresa.</p>
            </div>
            <div>
              <strong>Adequação com segurança</strong>
              <p>Organize a transição para reduzir riscos, evitar multas e manter a operação em dia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReformaTributaria
