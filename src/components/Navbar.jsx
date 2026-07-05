import React from 'react';

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 32px',
      borderBottom: '0.5px solid rgba(255,255,255,0.06)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(8,8,8,0.92)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)'
    }}>

      {/* Logo */}
      <span
        onClick={() => window.location.href = '/'}
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '15px',
          letterSpacing: '0.2em',
          color: '#fff',
          cursor: 'pointer'
        }}>
        AXON<span style={{ color: '#D4A017' }}>.</span>
      </span>

      {/* Right side links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>

        <button
          onClick={() => scrollTo('signals')}
          style={{
            background: 'transparent', border: 'none',
            fontFamily: "'DM Mono', monospace", fontSize: '10px',
            color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em',
            textTransform: 'uppercase', cursor: 'pointer',
            padding: 0, transition: 'color 0.15s'
          }}
          onMouseEnter={e => e.target.style.color = '#fff'}
          onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
        >
          See it live
        </button>

        <button
          onClick={() => scrollTo('proof')}
          style={{
            background: 'transparent', border: 'none',
            fontFamily: "'DM Mono', monospace", fontSize: '10px',
            color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em',
            textTransform: 'uppercase', cursor: 'pointer',
            padding: 0, transition: 'color 0.15s'
          }}
          onMouseEnter={e => e.target.style.color = '#fff'}
          onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
        >
          What we detect
        </button>

        <button
          onClick={() => scrollTo('pricing')}
          style={{
            background: 'transparent', border: 'none',
            fontFamily: "'DM Mono', monospace", fontSize: '10px',
            color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em',
            textTransform: 'uppercase', cursor: 'pointer',
            padding: 0, transition: 'color 0.15s'
          }}
          onMouseEnter={e => e.target.style.color = '#fff'}
          onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
        >
          Pricing
        </button>

        <button
          onClick={() => window.location.href = '/login'}
          style={{
            background: 'transparent', border: 'none',
            fontFamily: "'DM Mono', monospace", fontSize: '10px',
            color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em',
            textTransform: 'uppercase', cursor: 'pointer',
            padding: 0, transition: 'color 0.15s'
          }}
          onMouseEnter={e => e.target.style.color = '#fff'}
          onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
        >
          Sign in
        </button>

        <button
          onClick={() => window.location.href = '/signup'}
          style={{
            background: '#D4A017', color: '#080808', border: 'none',
            padding: '9px 20px', borderRadius: '4px', fontSize: '11px',
            fontWeight: 500, fontFamily: "'DM Sans', sans-serif",
            cursor: 'pointer', letterSpacing: '0.02em', transition: 'opacity 0.15s'
          }}
          onMouseEnter={e => e.target.style.opacity = '0.85'}
          onMouseLeave={e => e.target.style.opacity = '1'}
        >
          Get early access
        </button>

      </div>
    </div>
  );
}
