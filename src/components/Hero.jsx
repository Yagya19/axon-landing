import React from 'react';

export default function Hero() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: '#080808' }}>

      {/* SVG Background */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="rgba(60,120,255,0.35)" />
          </pattern>
          <radialGradient id="amberGlow" cx="18%" cy="45%" r="40%">
            <stop offset="0%" stopColor="rgba(212,160,23,0.12)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="blueGlow" cx="85%" cy="30%" r="35%">
            <stop offset="0%" stopColor="rgba(40,100,255,0.14)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Dot grid */}
        <rect width="1200" height="600" fill="url(#dots)" />

        {/* Signal wave lines — bottom */}
        <path d="M0 520 Q150 480 300 520 Q450 560 600 520 Q750 480 900 520 Q1050 560 1200 520" stroke="rgba(60,120,255,0.3)" strokeWidth="1.2" fill="none" />
        <path d="M0 545 Q150 510 300 545 Q450 580 600 545 Q750 510 900 545 Q1050 580 1200 545" stroke="rgba(60,120,255,0.2)" strokeWidth="0.8" fill="none" />
        <path d="M0 500 Q150 465 300 500 Q450 535 600 500 Q750 465 900 500 Q1050 535 1200 500" stroke="rgba(212,160,23,0.15)" strokeWidth="0.8" fill="none" />
        <path d="M0 565 Q150 535 300 565 Q450 595 600 565 Q750 535 900 565 Q1050 595 1200 565" stroke="rgba(60,120,255,0.15)" strokeWidth="0.6" fill="none" />

        {/* Radar rings — right edge behind terminal */}
        <circle cx="980" cy="220" r="55" stroke="rgba(60,130,255,0.35)" strokeWidth="1" fill="none" />
        <circle cx="980" cy="220" r="100" stroke="rgba(60,130,255,0.28)" strokeWidth="1" fill="none" />
        <circle cx="980" cy="220" r="145" stroke="rgba(60,130,255,0.22)" strokeWidth="0.8" fill="none" />
        <circle cx="980" cy="220" r="190" stroke="rgba(60,130,255,0.15)" strokeWidth="0.8" fill="none" />
        <circle cx="980" cy="220" r="235" stroke="rgba(60,130,255,0.08)" strokeWidth="0.8" fill="none" />

        {/* Radar crosshairs */}
        <line x1="980" y1="0" x2="980" y2="440" stroke="rgba(60,130,255,0.2)" strokeWidth="0.5" />
        <line x1="750" y1="220" x2="1200" y2="220" stroke="rgba(60,130,255,0.2)" strokeWidth="0.5" />
        <line x1="980" y1="220" x2="1150" y2="50" stroke="rgba(60,130,255,0.12)" strokeWidth="0.5" />
        <line x1="980" y1="220" x2="1150" y2="390" stroke="rgba(60,130,255,0.12)" strokeWidth="0.5" />

        {/* Signal dots on radar */}
        <circle cx="895" cy="148" r="4" fill="#E85D24" opacity="0.9" />
        <circle cx="895" cy="148" r="12" fill="#E85D24" opacity="0.2" />
        <circle cx="895" cy="148" r="20" fill="#E85D24" opacity="0.06" />
        <circle cx="930" cy="295" r="3.5" fill="#378ADD" opacity="0.9" />
        <circle cx="930" cy="295" r="11" fill="#378ADD" opacity="0.2" />
        <circle cx="930" cy="295" r="18" fill="#378ADD" opacity="0.06" />
        <circle cx="840" cy="255" r="3.5" fill="#D4A017" opacity="0.9" />
        <circle cx="840" cy="255" r="11" fill="#D4A017" opacity="0.2" />
        <circle cx="840" cy="255" r="18" fill="#D4A017" opacity="0.06" />

        {/* Dashed connection lines */}
        <line x1="895" y1="148" x2="930" y2="295" stroke="rgba(232,93,36,0.35)" strokeWidth="0.8" strokeDasharray="3 3" />
        <line x1="930" y1="295" x2="840" y2="255" stroke="rgba(55,138,221,0.35)" strokeWidth="0.8" strokeDasharray="3 3" />
        <line x1="840" y1="255" x2="895" y2="148" stroke="rgba(212,160,23,0.35)" strokeWidth="0.8" strokeDasharray="3 3" />

        {/* Scattered blue dots */}
        <circle cx="180" cy="420" r="1.5" fill="rgba(60,120,255,0.7)" />
        <circle cx="280" cy="390" r="1" fill="rgba(60,120,255,0.6)" />
        <circle cx="380" cy="440" r="1.5" fill="rgba(60,120,255,0.65)" />
        <circle cx="480" cy="410" r="1" fill="rgba(60,120,255,0.5)" />
        <circle cx="120" cy="460" r="1" fill="rgba(60,120,255,0.45)" />
        <circle cx="220" cy="475" r="1.5" fill="rgba(60,120,255,0.6)" />
        <circle cx="330" cy="465" r="1" fill="rgba(60,120,255,0.45)" />
        <circle cx="430" cy="480" r="1.5" fill="rgba(60,120,255,0.5)" />
        <circle cx="80" cy="380" r="1" fill="rgba(60,120,255,0.4)" />
        <circle cx="550" cy="430" r="1" fill="rgba(60,120,255,0.45)" />
        <circle cx="150" cy="500" r="1" fill="rgba(60,120,255,0.4)" />
        <circle cx="350" cy="510" r="1.5" fill="rgba(60,120,255,0.45)" />
        <circle cx="250" cy="445" r="1" fill="rgba(60,120,255,0.35)" />
        <circle cx="450" cy="455" r="1.5" fill="rgba(60,120,255,0.4)" />
        <circle cx="100" cy="490" r="1" fill="rgba(60,120,255,0.35)" />

        {/* Glows */}
        <rect width="1200" height="600" fill="url(#amberGlow)" />
        <rect width="1200" height="600" fill="url(#blueGlow)" />
      </svg>

      {/* HERO CONTENT */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '36px',
        padding: '52px 32px 44px',
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        alignItems: 'center'
      }}>

        {/* Left */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            fontFamily: "'DM Mono', monospace", fontSize: '9px', color: '#00C896',
            border: '0.5px solid rgba(0,200,150,0.2)', background: 'rgba(0,200,150,0.05)',
            padding: '5px 12px', borderRadius: '99px', marginBottom: '20px'
          }}>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00C896' }} />
            Live monitoring · Shopify stores
          </div>

          <h1 style={{
            fontFamily: "'Syne', sans-serif", fontSize: '34px', fontWeight: 800,
            color: '#fff', lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: '16px'
          }}>
            Your competitor just moved.<br />
            <span style={{ color: '#D4A017' }}>Did you see it?</span>
          </h1>

          <p style={{
            fontSize: '13px', color: 'rgba(255,255,255,0.45)', fontWeight: 300,
            lineHeight: 1.8, marginBottom: '10px', maxWidth: '380px'
          }}>
            Most Shopify founders find out about competitor moves{' '}
            <strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>weeks too late</strong>
            {' '}— after their customers already noticed. AXON tells you the moment it happens.
          </p>

          <p style={{
            fontSize: '12px', color: 'rgba(255,255,255,0.28)', fontWeight: 300,
            lineHeight: 1.7, marginBottom: '28px', maxWidth: '360px', fontStyle: 'italic'
          }}>
            Price changes. New product launches. New categories.<br />
            You'll know first — and know exactly what to do.
          </p>

          <button
            onClick={() => window.location.href = '/signup'}
            style={{
              background: '#D4A017', color: '#080808', border: 'none',
              padding: '13px 26px', borderRadius: '4px', fontSize: '12px',
              fontWeight: 500, fontFamily: "'DM Sans', sans-serif",
              cursor: 'pointer', marginBottom: '14px', display: 'block'
            }}>
            Start free 14-day trial
          </button>

          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: '9px',
            color: 'rgba(255,255,255,0.2)', letterSpacing: '0.03em'
          }}>
            No credit card · 2 competitors free · cancel anytime
          </div>
        </div>

        {/* Right — Live terminal */}
        <div style={{
          background: '#0a0a0a',
          border: '0.5px solid rgba(255,255,255,0.07)',
          borderRadius: '12px',
          padding: '18px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute', top: '-1px', left: '24px', right: '24px', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.35), transparent)'
          }} />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase'
            }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00C896' }} />
              Intelligence feed · live now
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.18)' }}>
              tentree.eu · adoredvintage.com
            </div>
          </div>

          {[
            {
              color: '#E85D24',
              text: <span>Hero serum dropped <strong style={{ color: '#fff' }}>18%</strong></span>,
              badge: '↓ Price', badgeBg: 'rgba(232,93,36,0.12)', badgeBorder: 'rgba(232,93,36,0.2)', badgeColor: '#E85D24',
              imply: <span><strong style={{ color: 'rgba(255,255,255,0.55)' }}>Likely:</strong> clearing inventory before a rebrand. Hold your price.</span>
            },
            {
              color: '#378ADD',
              text: <span>Launched <strong style={{ color: '#fff' }}>4 new products</strong> overnight</span>,
              badge: '+ Launch', badgeBg: 'rgba(55,138,221,0.12)', badgeBorder: 'rgba(55,138,221,0.2)', badgeColor: '#378ADD',
              imply: <span><strong style={{ color: 'rgba(255,255,255,0.55)' }}>Likely:</strong> collection drop incoming. Watch for ads in 2 weeks.</span>
            },
            {
              color: '#D4A017',
              text: <span>New category: <strong style={{ color: '#fff' }}>Summer Linen</strong></span>,
              badge: '▸ Category', badgeBg: 'rgba(212,160,23,0.12)', badgeBorder: 'rgba(212,160,23,0.2)', badgeColor: '#D4A017',
              imply: <span><strong style={{ color: 'rgba(255,255,255,0.55)' }}>Likely:</strong> betting on summer buyers. 30-day window to move first.</span>
            }
          ].map((sig, i) => (
            <div key={i} style={{
              padding: i === 0 ? '0 0 10px' : '10px 0',
              borderTop: i === 0 ? 'none' : '0.5px solid rgba(255,255,255,0.05)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '4px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: sig.color, flexShrink: 0 }} />
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', fontWeight: 300, flex: 1 }}>{sig.text}</span>
                <span style={{
                  fontFamily: "'DM Mono', monospace", fontSize: '8px', padding: '2px 7px',
                  borderRadius: '4px', background: sig.badgeBg,
                  border: `0.5px solid ${sig.badgeBorder}`, color: sig.badgeColor, flexShrink: 0
                }}>{sig.badge}</span>
              </div>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.32)', paddingLeft: '15px', lineHeight: 1.5 }}>
                {sig.imply}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
