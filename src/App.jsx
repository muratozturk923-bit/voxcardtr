import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductSection from './components/ProductSection'
import DesignSection from './components/DesignSection'
import UseCasesSection from './components/UseCasesSection'
import HowItWorksSection from './components/HowItWorksSection'
import PricingSection from './components/PricingSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0b0d]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_0%,rgba(207,178,122,0.12),transparent_40%),radial-gradient(circle_at_85%_22%,rgba(255,255,255,0.08),transparent_34%)]" />
      <div className="relative">
        <Header />
        <main>
          <HeroSection />
          <ProductSection />
          <DesignSection />
          <UseCasesSection />
          <HowItWorksSection />
          <PricingSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
