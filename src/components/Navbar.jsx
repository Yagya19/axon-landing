import React from 'react';
export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 32px',
      borderBottom: '0.5px solid rgba(255,255,255,0.08)',
      background: '#080808',
      fontFamily: "'DM Sans', sans-serif"
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
          <line x1="50" y1="6" x2="50" y2="28" stroke="#D4A017" strokeWidth="2" strokeLinecap="round"/>
          <line x1="50" y1="72" x2="50" y2="94" stroke="#D4A017" strokeWidth="2" strokeLinecap="round"/>
          <line x1="6" y1="50" x2="28" y2="50" stroke="#D4A017" strokeWidth="2" strokeLinecap="round"/>
          <line x1="72" y1="50" x2="94" y2="50" stroke="#D4A017" strokeWidth="2" strokeLinecap="round"/>
          <polygon points="50,10 57,41 50,50 43,41" fill="#D4A017"/>
          <polygon points="50,90 57,59 50,50 43,59" fill="#D4A017"/>
          <polygon points="10,50 41,43 50,50 41,57" fill="#D4A017"/>
          <polygon points="90,50 59,43 50,50 59,57" fill="#D4A017"/>
          <circle cx="50" cy="50" r="3.5" fill="#080808"/>
          <circle cx="50" cy="50" r="1.5" fill="#D4A017"/>
        </svg>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '17px',
          letterSpacing: '0.2em',
          color: '#fff'
        }}>
          AXON<span style={{ color: '#D4A017' }}>.</span>
        </span>
      </div>
      {/* Links */}
      <div style={{ display: 'flex', gap: '28px' }}>
        {['How it works', 'Results', 'Pricing'].map(link => (
          <span key={link} style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '11px',
            color: 'rgba(255,255,255,0.45)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            cursor: 'pointer'
          }}>
            {link}
          </span>
        ))}
      </div>
      {/* Sign in + CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <span 
          onClick={() => window.location.href = '/login'}
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '11px',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            cursor: 'pointer'
          }}>
          Sign in
        </span>
        <button 
          onClick={() => window.location.href = '/signup'}
          style={{
            background: '#D4A017',
            color: '#080808',
            border: 'none',
            padding: '9px 20px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif"
          }}>
          Start free trial
        </button>
      </div>
    </nav>
  );
}
