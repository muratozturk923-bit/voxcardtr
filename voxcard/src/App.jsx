import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import PremiumDesign from './components/PremiumDesign'
import UseCases from './components/UseCases'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-anthracite-950 text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <PremiumDesign />
        <UseCases />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
