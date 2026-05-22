import Header from '../components/Header'
import Hero from '../components/Hero'
import QuemSomos from '../components/QuemSomos'
import Problema from '../components/Problema'
import Solucao from '../components/Solucao'
import HubSolucao from '../components/HubSolucao'
import Metodo from '../components/Metodo'
import Servicos from '../components/Servicos'
import ReformaTributaria from '../components/ReformaTributaria'
import Beneficios from '../components/Beneficios'
import ProvaSocial from '../components/ProvaSocial'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

function Home({ showHeader = true }) {
  return (
    <>
      {showHeader && <Header />}
      <Hero />
      <Problema />
      <Solucao />
      <HubSolucao />
      <Metodo />
      <Servicos />
      <ReformaTributaria />
      <Beneficios />
      <ProvaSocial />
      <CTA />
      <QuemSomos />
      <Footer />
    </>
  )
}

export default Home
