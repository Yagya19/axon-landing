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

export default function App() {
  const path = window.location.pathname;

  if (path === '/signup') return <Signup />;
  if (path === '/login') return <Login />;
  if (path === '/competitors') return <CompetitorSelector />;
  if (path === '/dashboard') return <Dashboard />;

  return (
    <div style={{ background: '#080808', minHeight: '100vh' }}>
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="proof"><Proof /></div>
      <div id="signals"><Signals /></div>
      <div id="pricing"><Pricing /></div>
      <Footer />
    </div>
  );
}
