import { useEffect, useState } from 'react'
import Header from './components/Header'
import WhatsAppFloating from './components/WhatsAppFloating'
import Cursos from './pages/Cursos'
import Diagnostico from './pages/Diagnostico'
import Home from './pages/Home'
import { setupBehaviorTracking, trackPageView } from './utils/analytics'

function App() {
  const [route, setRoute] = useState(() => window.location.hash || '#/')
  const [pendingSection, setPendingSection] = useState(null)

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash || '#/')

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => setupBehaviorTracking(), [])

  useEffect(() => {
    trackPageView(`${window.location.pathname}${route}`)
  }, [route])

  useEffect(() => {
    if (!pendingSection || route.startsWith('#/cursos')) return

    requestAnimationFrame(() => {
      if (pendingSection === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const section = document.getElementById(pendingSection)
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY - 80
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }

      setPendingSection(null)
    })
  }, [pendingSection, route])

  const navigateHome = (sectionId = 'hero') => {
    setPendingSection(sectionId)
    if (window.location.hash !== '#/') {
      window.location.hash = '/'
    } else {
      setRoute('#/')
    }
  }

  const navigateCourses = (courseSlug = '') => {
    const nextRoute = courseSlug ? `#/cursos/${courseSlug}` : '#/cursos'
    if (window.location.hash !== nextRoute) {
      window.location.hash = nextRoute
    } else {
      setRoute(nextRoute)
    }
  }

  const navigateDiagnosis = () => {
    if (window.location.hash !== '#/diagnostico') {
      window.location.hash = '/diagnostico'
    } else {
      setRoute('#/diagnostico')
    }
  }

  const isCoursesPage = route.startsWith('#/cursos')
  const isDiagnosticPage = route.startsWith('#/diagnostico')
  const highlightedCourse = route.startsWith('#/cursos/')
    ? route.replace('#/cursos/', '')
    : ''

  return (
    <>
      <Header
        currentPage={isCoursesPage ? 'courses' : isDiagnosticPage ? 'diagnostic' : 'home'}
        navigateCourses={navigateCourses}
        navigateHome={navigateHome}
      />
      {isCoursesPage ? (
        <Cursos highlightedCourse={highlightedCourse} />
      ) : isDiagnosticPage ? (
        <Diagnostico />
      ) : (
        <Home showHeader={false} navigateDiagnosis={navigateDiagnosis} />
      )}
      <WhatsAppFloating />
    </>
  )
}

export default App
