import '../styles/sections.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>VITAL CONTA</h3>
          <p>
            Gestão empresarial e assessoria contábil com foco em clareza,
            organização e crescimento sustentável.
          </p>
        </div>

        <div className="footer-contact">
          <h4>Contato</h4>
          <p>WhatsApp: (61) 99692-1053</p>
          <p>Email: vitalcontacontabilidade@gmail.com</p>
          <p>Instagram: @vital.conta_</p>
        </div>

        <div className="footer-info">
          <h4>Informações</h4>
          <p>CNPJ: 52.508.875/0001-00</p>
          <p>Atendimento em todo o Brasil</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Vital Conta. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
