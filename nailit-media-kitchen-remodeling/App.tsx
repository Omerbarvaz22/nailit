
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ServiceGrid from './components/ServiceGrid';
import Advantage from './components/Advantage';
import Process from './components/Process';
import LeadForm from './components/LeadForm';
import Protection from './components/Protection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll progress or other page-level logic
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ServiceGrid />
        <Advantage />
        <Process />
        <LeadForm />
        <Protection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
