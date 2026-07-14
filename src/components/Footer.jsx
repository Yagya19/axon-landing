import React from 'react';

export default function Footer() {
  return (
    <>
      <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.05)', margin: '0 32px' }} />

      {/* Final CTA */}
      <div style={{
        padding: '52px 32px',
        textAlign: 'center',
        position: 'relative',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 60%, rgba(212,160,23,0.05), transparent 65%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: '9px',
          color: '#D4A017', letterSpacing: '0.12em',
          textTransform: 'uppercase', marginBottom: '14px'
        }}>See further. Move first.</div>
        <div style={{
          fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: 800,
          color: '#fff', lineHeight: 1.15, marginBottom: '10px'
        }}>
          Your competitors aren't waiting.<br />
          <span style={{ color: '#D4A017' }}>Neither should you.</span>
        </div>
        <p style={{
          fontSize: '13px', color: 'rgba(255,255,255,0.35)',
          fontWeight: 300, lineHeight: 1.75, maxWidth: '420px',
          margin: '0 auto 28px'
        }}>
          Every day without FARWATCH is a day your competitors could be moving without you knowing. Start watching today — free, no card needed.
        </p>
        <button
          onClick={() => window.location.href = '/signup'}
          style={{
            background: '#D4A017', color: '#080808', border: 'none',
            padding: '14px 32px', borderRadius: '4px', fontSize: '13px',
            fontWeight: 500, fontFamily: "'DM Sans', sans-serif",
            cursor: 'pointer', display: 'block', margin: '0 auto 12px'
          }}>
          Start your free 14-day trial
        </button>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: '9px',
          color: 'rgba(255,255,255,0.2)', textAlign: 'center'
        }}>
          No credit card · cancel anytime · takes 2 minutes
        </div>
      </div>

      {/* Footer bar */}
      <div style={{
        borderTop: '0.5px solid rgba(255,255,255,0.05)',
        padding: '18px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>

        {/* Logo */}
        <div
          onClick={() => window.location.href = '/'}
          style={{ cursor: 'pointer' }}>
          <div style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: '12px', letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.25)', lineHeight: 1
          }}>
            FARWATCH<span style={{ color: 'rgba(212,160,23,0.35)' }}>.</span>
          </div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: '7px',
            color: 'rgba(0,200,150,0.7)', letterSpacing: '0.06em',
            marginTop: '3px'
          }}>See further. Move first.</div>
        </div>

        {/* Copyright */}
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: '9px',
          color: 'rgba(255,255,255,0.18)'
        }}>© 2026 FARWATCH — See further. Move first.</span>

        {/* Links */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>

          <span
            onClick={() => window.location.href = '/privacy'}
            style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.18)', cursor: 'pointer',
              transition: 'color 0.15s'
            }}
            onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.18)'}
          >Privacy</span>

          <span
            onClick={() => window.location.href = '/terms'}
            style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.18)', cursor: 'pointer',
              transition: 'color 0.15s'
            }}
            onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.18)'}
          >Terms</span>

          <span
            onClick={() => window.location.href = '/refund'}
            style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.18)', cursor: 'pointer',
              transition: 'color 0.15s'
            }}
            onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.18)'}
          >Refund Policy</span>

          <span
            onClick={() => window.location.href = 'mailto:yagya@farwatchsignals.com?subject=FARWATCH%20%E2%80%94%20Question&body=Hi%20Yagya%2C%20'}
            style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.18)', cursor: 'pointer',
              transition: 'color 0.15s'
            }}
            onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.18)'}
          >Contact</span>

        </div>
      </div>
    </>
  );
}
