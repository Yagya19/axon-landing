import React from 'react';
import Navbar from './components/Navbar';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Signup from './components/Signup';

export default function App() {
  const path = window.location.pathname;

  if (path === '/signup') {
    return <Signup />;
  }

  return (
    <div style={{ background: '#080808', minHeight: '100vh' }}>
      <Navbar />
      <Ticker />
      <Hero />
      <Metrics />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
