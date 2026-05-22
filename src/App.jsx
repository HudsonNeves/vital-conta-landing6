import { useEffect, useState } from 'react'
import Header from './components/Header'
import Cursos from './pages/Cursos'
import Home from './pages/Home'

function App() {
  const [route, setRoute] = useState(() => window.location.hash || '#/')
  const [pendingSection, setPendingSection] = useState(null)

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash || '#/')

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

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

  const isCoursesPage = route.startsWith('#/cursos')
  const highlightedCourse = route.startsWith('#/cursos/')
    ? route.replace('#/cursos/', '')
    : ''

  return (
    <>
      <Header
        currentPage={isCoursesPage ? 'courses' : 'home'}
        navigateCourses={navigateCourses}
        navigateHome={navigateHome}
      />
      {isCoursesPage ? <Cursos highlightedCourse={highlightedCourse} /> : <Home showHeader={false} />}
    </>
  )
}

export default App
