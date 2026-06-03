import '../styles/sections.css'

function ReformaTributaria() {
  return (
    <section className="tax-reform" id="reforma-tributaria">
      <div className="container">
        <div className="tax-card">
          <div className="tax-card-intro">
            <span className="tax-badge">Destaque</span>
            <h2>Reforma tributaria: sua empresa esta preparada para essa mudanca?</h2>
            <p>
              A Vital Conta ajuda voce a entender os impactos das novas regras, revisar sua
              estrutura fiscal e planejar os proximos passos com seguranca.
            </p>
          </div>

          <div className="tax-list">
            <div>
              <strong>Impactos no negocio</strong>
              <p>Analise reflexos nos impostos, precos, contratos e fluxo de caixa.</p>
            </div>
            <div>
              <strong>Enquadramento tributario</strong>
              <p>Verifique se o regime atual ainda acompanha o momento da empresa.</p>
            </div>
            <div>
              <strong>Adequacao com seguranca</strong>
              <p>Organize a transicao para reduzir riscos, evitar multas e manter a operacao em dia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReformaTributaria
