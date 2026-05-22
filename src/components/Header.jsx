import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import '../styles/header.css'

function Header({ currentPage = 'home', navigateCourses, navigateHome }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  const whatsappNumber = '5561996921053'
  const clientAreaUrl = ''

  const navItems = [
    { id: 'hero', label: 'Início' },
    { id: 'hub-solucoes', label: 'Soluções', activeIds: ['solucao', 'hub-solucoes'] },
    { id: 'servicos', label: 'Serviços' }
  ]

  useEffect(() => {
    const sections = [
      'hero',
      'problema',
      'solucao',
      'hub-solucoes',
      'metodo',
      'servicos',
      'reforma-tributaria',
      'beneficios',
      'cta-final',
      'quem-somos'
    ]

    const handleScroll = () => {
      setScrolled(window.scrollY > 50 || currentPage === 'courses')

      if (currentPage === 'courses') {
        setActive('cursos')
        return
      }

      const current = sections
        .map((id) => {
          const el = document.getElementById(id)
          if (!el) return null
          return { id, top: el.offsetTop - 110 }
        })
        .filter(Boolean)
        .reverse()
        .find((section) => window.scrollY >= section.top)

      setActive(current?.id || 'hero')
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentPage])

  const scrollToSection = (id) => {
    if (currentPage !== 'home' && navigateHome) {
      navigateHome(id)
      setActive(id)
      setMenuOpen(false)
      return
    }

    const section = document.getElementById(id)
    if (!section) return

    const headerOffset = id === 'hero' ? 0 : 80
    const top = id === 'hero'
      ? 0
      : section.getBoundingClientRect().top + window.scrollY - headerOffset

    window.scrollTo({ top, behavior: 'smooth' })
    setActive(id)
    setMenuOpen(false)
  }

  const openWhatsApp = (message) => {
    const text = message ? encodeURIComponent(message) : ''
    if (whatsappNumber) {
      const url = `https://wa.me/${whatsappNumber}?text=${text}`
      window.open(url, '_blank')
    } else {
      scrollToSection('cta-final')
    }
    setMenuOpen(false)
  }

  const isActive = (item) => {
    const ids = item.activeIds || [item.id]
    return ids.includes(active)
  }

  const openCoursesPage = (courseSlug = '') => {
    if (navigateCourses) {
      navigateCourses(courseSlug)
    }
    setActive('cursos')
    setMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <button type="button" className="logo" onClick={() => scrollToSection('hero')} aria-label="Ir para o início">
          <img src={logo} alt="Vital Conta" />
        </button>

        <nav className={`nav ${menuOpen ? 'active' : ''}`} aria-label="Navegação principal">
          <ul>
            {navItems.map((item) => (
              <li key={item.id} className={isActive(item) ? 'active' : ''}>
                <button type="button" onClick={() => scrollToSection(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            <li className={active === 'cursos' ? 'active' : ''}>
              <button
                type="button"
                onClick={() => openCoursesPage()}
              >
                Cursos e Treinamentos
              </button>
            </li>

            <li className={active === 'quem-somos' ? 'active' : ''}>
              <button type="button" onClick={() => scrollToSection('quem-somos')}>
                Quem Somos
              </button>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          {clientAreaUrl && (
            <a className="area-cliente" href={clientAreaUrl}>
              Área do Cliente
            </a>
          )}
          <button type="button" onClick={() => openWhatsApp('Olá, quero falar com um consultor da Vital Conta.')}>
            Fale com Consultor
          </button>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
      </div>
    </header>
  )
}

export default Header
