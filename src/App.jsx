import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Proof from './components/Proof';
import Signals from './components/Signals';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CompetitorSelector from './components/CompetitorSelector';
import Privacy from './components/Privacy';

export default function App() {
  const path = window.location.pathname;

  if (path === '/signup') return <Signup />;
  if (path === '/login') return <Login />;
  if (path === '/competitors') return <CompetitorSelector />;
  if (path === '/dashboard') return <Dashboard />;
  if (path === '/privacy') return <Privacy />;

  return (
    <div style={{ background: '#080808', minHeight: '100vh' }}>
      <Navbar />
      <div id="hero" style={{ scrollMarginTop: '64px' }}><Hero /></div>
      <div id="proof" style={{ scrollMarginTop: '64px' }}><Proof /></div>
      <div id="signals" style={{ scrollMarginTop: '64px' }}><Signals /></div>
      <div id="pricing" style={{ scrollMarginTop: '64px' }}><Pricing /></div>
      <Footer />
    </div>
  );
}
