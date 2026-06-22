import Footer from '../components/Footer'
import '../styles/diagnostic.css'
import { trackEvent } from '../utils/analytics'

function Diagnostico() {
  const handleSubmit = () => {
    trackEvent('diagnosis_submit', { location: 'diagnostic_form' })
  }

  return (
    <>
      <main className="diagnostic-page">
        <section className="diagnostic-section">
          <div className="container diagnostic-grid">
            <div className="diagnostic-intro">
              <span className="diagnostic-kicker">Diagnóstico empresarial</span>
              <h1>Falta pouco para transformar a gestão estratégica do seu negócio.</h1>
              <p>Preencha os campos abaixo para entendermos o momento atual da sua empresa.</p>
              <p>
                Nossa equipe analisará as informações enviadas e preparará uma proposta
                personalizada ou um diagnóstico inicial, encaminhado diretamente para o e-mail
                informado.
              </p>
            </div>

            <form
              className="diagnostic-form"
              action="https://formsubmit.co/professorhnsilva@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_subject" value="Novo diagnóstico empresarial - Site Vital Conta" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="diagnostic-field">
                <label htmlFor="full-name">Nome Completo</label>
                <input id="full-name" name="nome_completo" type="text" autoComplete="name" required />
              </div>

              <div className="diagnostic-field">
                <label htmlFor="corporate-email">E-mail Corporativo</label>
                <input id="corporate-email" name="_replyto" type="email" autoComplete="email" required />
              </div>

              <div className="diagnostic-field">
                <label htmlFor="phone">Telefone / WhatsApp</label>
                <input id="phone" name="telefone_whatsapp" type="tel" autoComplete="tel" required />
              </div>

              <div className="diagnostic-field">
                <label htmlFor="company">Nome da Empresa</label>
                <input id="company" name="nome_empresa" type="text" autoComplete="organization" required />
              </div>

              <div className="diagnostic-field">
                <label htmlFor="segment">Segmento de Atuação</label>
                <input id="segment" name="segmento_atuacao" type="text" required />
              </div>

              <div className="diagnostic-field">
                <label htmlFor="revenue">Faturamento Médio Mensal</label>
                <input id="revenue" name="faturamento_medio" type="text" inputMode="decimal" placeholder="Ex.: R$ 80.000" required />
              </div>

              <div className="diagnostic-field diagnostic-field-full">
                <label htmlFor="challenge">Qual é o seu maior desafio atualmente?</label>
                <select id="challenge" name="maior_desafio" defaultValue="" required>
                  <option value="" disabled>Selecione uma opção</option>
                  <option>Organizar a contabilidade e as obrigações fiscais</option>
                  <option>Planejamento financeiro e gestão estratégica</option>
                  <option>Redução de custos e otimização tributária</option>
                  <option>Outro / Preciso de um diagnóstico completo</option>
                </select>
              </div>

              <label className="diagnostic-consent diagnostic-field-full">
                <input name="consentimento_contato" type="checkbox" value="Sim" required />
                <span>Autorizo a Vital Conta a entrar em contato pelos canais informados.</span>
              </label>

              <button className="diagnostic-submit diagnostic-field-full" type="submit">
                Receber Proposta Personalizada
              </button>

            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Diagnostico
