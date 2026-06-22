import React from 'react';

export default function Footer() {
  return (
    <>
      {/* Final CTA */}
      <div style={{
        padding: '60px 32px',
        textAlign: 'center',
        position: 'relative',
        background: 'radial-gradient(ellipse at center, rgba(212,160,23,0.08), transparent 60%)',
        fontFamily: "'DM Sans', sans-serif"
      }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '9px',
          color: '#D4A017',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '16px'
        }}>The signal reaches you first</div>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '34px',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '12px',
          color: '#fff'
        }}>
          Your competitors aren't waiting.<br />
          <em style={{ color: '#D4A017', fontStyle: 'normal' }}>Neither should you.</em>
        </h2>
        <p style={{
          fontSize: '14px',
          color: 'rgba(255,255,255,0.45)',
          marginBottom: '28px',
          fontWeight: 300
        }}>
          Join 73 founding members already watching their competitive landscape with AXON. 27 lifetime spots remaining.
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={() => window.location.href = '/signup'}
            style={{
            background: '#D4A017',
            color: '#080808',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '4px',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif"
          }}>Start your free 14-day trial</button>
          <button style={{
            background: 'transparent',
            color: 'rgba(255,255,255,0.7)',
            border: '0.5px solid rgba(255,255,255,0.15)',
            padding: '12px 24px',
            borderRadius: '4px',
            fontSize: '13px',
            cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif"
          }}>Watch a live demo first</button>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        borderTop: '0.5px solid rgba(255,255,255,0.08)',
        padding: '20px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: "'DM Sans', sans-serif"
      }}>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '13px',
          letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.4)'
        }}>
          AXON<span style={{ color: 'rgba(212,160,23,0.5)' }}>.</span>
        </span>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '9px',
          color: 'rgba(255,255,255,0.2)'
        }}>© 2026 AXON — The signal reaches you first</span>
        <div style={{ display: 'flex', gap: '20px' }}>
          {['Privacy', 'Security', 'Terms'].map(link => (
            <span key={link} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '9px',
              color: 'rgba(255,255,255,0.2)',
              cursor: 'pointer'
            }}>{link}</span>
          ))}
        </div>
      </footer>
    </>
  );
}
