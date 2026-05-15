import AudienceSection from './components/AudienceSection';
import CtaSection from './components/CtaSection';
import DesignSection from './components/DesignSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import ProcessSection from './components/ProcessSection';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <DesignSection />
        <AudienceSection />
        <ProcessSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
