import AudienceSection from './components/AudienceSection'
import CTASection from './components/CTASection'
import DesignSection from './components/DesignSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HowItWorksSection from './components/HowItWorksSection'
import PricingSection from './components/PricingSection'
import ProductSection from './components/ProductSection'
import { audienceItems, featureItems, navItems, pricingPlans, steps } from './data/siteContent'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050507] text-[#f1f1f4]">
      <div className="pointer-events-none absolute inset-x-0 top-[-30rem] h-[38rem] bg-[radial-gradient(circle,_rgba(215,185,127,0.22),_transparent_70%)]"></div>
      <Header navItems={navItems} />
      <main>
        <HeroSection />
        <ProductSection featureItems={featureItems} />
        <DesignSection />
        <AudienceSection audienceItems={audienceItems} />
        <HowItWorksSection steps={steps} />
        <PricingSection pricingPlans={pricingPlans} />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
