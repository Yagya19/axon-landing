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

      {/* Founder contact section */}
      <div style={{
        padding: '44px 48px',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '0.5px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 20% 50%, rgba(212,160,23,0.07), transparent 55%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 85% 50%, rgba(40,80,220,0.04), transparent 50%)',
          pointerEvents: 'none'
        }} />

        <div style={{
          position: 'relative', zIndex: 1,
          maxWidth: '680px', margin: '0 auto',
          display: 'flex', alignItems: 'flex-start', gap: '24px'
        }}>

          {/* Avatar */}
          <div style={{ flexShrink: 0, marginTop: '4px' }}>
            <div style={{
              width: '54px', height: '54px', borderRadius: '50%',
              background: 'rgba(212,160,23,0.1)',
              border: '1px solid rgba(212,160,23,0.35)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <span style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 800,
                fontSize: '20px', color: '#D4A017'
              }}>Y</span>
            </div>
          </div>

          {/* Content */}
          <div style={{ flex: 1 }}>

            {/* Name */}
            <div style={{
              fontFamily: "'Syne', sans-serif", fontSize: '15px',
              fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: '4px'
            }}>Yagya</div>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '8px',
              color: 'rgba(0,200,150,0.7)', letterSpacing: '0.08em', marginBottom: '20px'
            }}>Founder, FARWATCH</div>

            {/* Headline */}
            <div style={{
              fontFamily: "'Syne', sans-serif", fontSize: '16px',
              fontWeight: 800, color: '#ffffff', lineHeight: 1.35, marginBottom: '14px'
            }}>
              I built FARWATCH so you never find out from a customer.
            </div>

            {/* Body */}
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: '12.5px',
              color: 'rgba(255,255,255,0.75)', fontWeight: 300,
              lineHeight: 1.9, marginBottom: '20px'
            }}>
              My name is Yagya. I am a solo builder and this product is deeply personal to me. Every signal FARWATCH sends you is something I wish founders had access to years ago. If you have a question, a thought, or just want to talk about your store write to me. I read everything and I write back personally.
            </p>

            {/* Divider */}
            <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.07)', marginBottom: '16px' }} />

            {/* Email + reply promise */}
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px'
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: '11px',
                color: '#D4A017', background: 'rgba(212,160,23,0.07)',
                border: '0.5px solid rgba(212,160,23,0.28)',
                padding: '10px 16px', borderRadius: '6px', letterSpacing: '0.04em'
              }}>
                yagya@farwatchsignals.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <div style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: '#00C896', flexShrink: 0
                }} />
                <span style={{
                  fontFamily: "'DM Mono', monospace", fontSize: '9px',
                  color: 'rgba(0,200,150,0.7)'
                }}>Writing back personally · always within 24 hours</span>
              </div>
            </div>

          </div>
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
              color: 'rgba(255,255,255,0.18)', cursor: 'pointer'
            }}
            onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.18)'}
          >Privacy</span>

          <span
            onClick={() => window.location.href = '/terms'}
            style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.18)', cursor: 'pointer'
            }}
            onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.18)'}
          >Terms</span>

          <span
            onClick={() => window.location.href = '/refund'}
            style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.18)', cursor: 'pointer'
            }}
            onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.18)'}
          >Refund Policy</span>

        </div>
      </div>
    </>
  );
}
