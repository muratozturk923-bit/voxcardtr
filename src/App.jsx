import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import PremiumDesign from './components/PremiumDesign.jsx';
import UseCases from './components/UseCases.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Pricing from './components/Pricing.jsx';
import CTA from './components/CTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950 text-white">
      {/* Ambient global gradients */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-ink-radial opacity-90"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-60"
      />

      <Header />
      <main>
        <Hero />
        <Features />
        <PremiumDesign />
        <UseCases />
        <HowItWorks />
        <Pricing />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
