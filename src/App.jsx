import { Audiences } from "./components/Audiences.jsx";
import { CTA } from "./components/CTA.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { HowItWorks } from "./components/HowItWorks.jsx";
import { PremiumDesign } from "./components/PremiumDesign.jsx";
import { Pricing } from "./components/Pricing.jsx";
import { ProductIntro } from "./components/ProductIntro.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050506] text-white">
      <Header />
      <main>
        <Hero />
        <ProductIntro />
        <PremiumDesign />
        <Audiences />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
