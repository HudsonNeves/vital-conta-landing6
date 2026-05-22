import { useEffect } from 'react'
import Footer from '../components/Footer'
import { courses } from '../data/courses'
import '../styles/courses.css'

function Cursos({ highlightedCourse }) {
  const whatsappNumber = '5561996921053'

  const openCourseWhatsApp = (courseTitle = 'Cursos e Treinamentos') => {
    const message = encodeURIComponent(`Olá, tenho interesse em saber mais sobre: ${courseTitle}.`)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  useEffect(() => {
    if (!highlightedCourse) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const courseCard = document.getElementById(`curso-${highlightedCourse}`)
    if (courseCard) {
      courseCard.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [highlightedCourse])

  return (
    <>
      <main className="courses-page">
        <section className="courses-hero">
          <div className="container courses-hero-grid">
            <div className="courses-hero-content">
              <span className="courses-kicker">Cursos e treinamentos</span>
              <h1>Desenvolvimento prático para equipes e negócios mais organizados.</h1>
              <p>
                Trilhas pensadas para empresas que precisam melhorar gestão, atendimento,
                controles financeiros e desempenho comercial com linguagem simples e aplicável.
              </p>
              <button type="button" className="courses-primary" onClick={() => openCourseWhatsApp()}>
                Falar sobre treinamentos
              </button>
            </div>

            <div className="courses-panel" aria-label="Resumo dos treinamentos">
              <div>
                <strong>11</strong>
                <span>temas disponíveis</span>
              </div>
              <div>
                <strong>4</strong>
                <span>frentes de desenvolvimento</span>
              </div>
              <div>
                <strong>sob medida</strong>
                <span>para equipes e lideranças</span>
              </div>
            </div>
          </div>
        </section>

        <section className="courses-list-section">
          <div className="container">
            <div className="courses-section-heading">
              <span>Catálogo</span>
              <h2>Escolha o tema mais aderente ao momento da sua empresa</h2>
            </div>

            <div className="courses-grid">
              {courses.map((course) => (
                <article
                  className={`course-card ${highlightedCourse === course.slug ? 'is-highlighted' : ''}`}
                  id={`curso-${course.slug}`}
                  key={course.slug}
                >
                  <span className="course-category">{course.category}</span>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <ul>
                    {course.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                  <button type="button" onClick={() => openCourseWhatsApp(course.title)}>
                    Tenho interesse
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Cursos
