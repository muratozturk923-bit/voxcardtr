import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductIntro } from "./components/ProductIntro";
import { PremiumDesign } from "./components/PremiumDesign";
import { UseCases } from "./components/UseCases";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { CtaBand } from "./components/CtaBand";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-void">
      <Header />
      <main>
        <Hero />
        <ProductIntro />
        <PremiumDesign />
        <UseCases />
        <HowItWorks />
        <Pricing />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
