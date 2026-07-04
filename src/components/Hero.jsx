import React from 'react';

export default function Hero() {
  return (
    <>
      {/* HERO */}
      <div style={{
        padding: '52px 32px 44px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '36px',
        alignItems: 'center',
        position: 'relative',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {/* Amber glow */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '55%', height: '100%',
          background: 'radial-gradient(ellipse at 15% 50%, rgba(212,160,23,0.04), transparent 65%)',
          pointerEvents: 'none'
        }} />

        {/* Left */}
        <div style={{ position: 'relative' }}>
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
          background: '#0a0a0a', border: '0.5px solid rgba(255,255,255,0.07)',
          borderRadius: '12px', padding: '18px', position: 'relative'
        }}>
          {/* Amber top line */}
          <div style={{
            position: 'absolute', top: '-1px', left: '24px', right: '24px', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.35), transparent)'
          }} />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00C896' }} />
              Intelligence feed · live now
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.18)' }}>
              tentree.eu · adoredvintage.com
            </div>
          </div>

          {[
            {
              color: '#E85D24', text: <>Hero serum dropped <strong style={{ color: '#fff' }}>18%</strong></>,
              badge: '↓ Price', badgeBg: 'rgba(232,93,36,0.12)', badgeBorder: 'rgba(232,93,36,0.2)', badgeColor: '#E85D24',
              imply: <><strong style={{ color: 'rgba(255,255,255,0.55)' }}>Likely:</strong> clearing inventory before a rebrand. Hold your price.</>
            },
            {
              color: '#378ADD', text: <>Launched <strong style={{ color: '#fff' }}>4 new products</strong> overnight</>,
              badge: '+ Launch', badgeBg: 'rgba(55,138,221,0.12)', badgeBorder: 'rgba(55,138,221,0.2)', badgeColor: '#378ADD',
              imply: <><strong style={{ color: 'rgba(255,255,255,0.55)' }}>Likely:</strong> collection drop incoming. Watch for ads in 2 weeks.</>
            },
            {
              color: '#D4A017', text: <>New category: <strong style={{ color: '#fff' }}>Summer Linen</strong></>,
              badge: '▸ Category', badgeBg: 'rgba(212,160,23,0.12)', badgeBorder: 'rgba(212,160,23,0.2)', badgeColor: '#D4A017',
              imply: <><strong style={{ color: 'rgba(255,255,255,0.55)' }}>Likely:</strong> betting on summer buyers. 30-day window to move first.</>
            }
          ].map((sig, i) => (
            <div key={i} style={{ padding: i === 0 ? '0 0 10px' : '10px 0', borderTop: i === 0 ? 'none' : '0.5px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '4px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: sig.color, flexShrink: 0 }} />
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', fontWeight: 300, flex: 1 }}>{sig.text}</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', padding: '2px 7px', borderRadius: '4px', background: sig.badgeBg, border: `0.5px solid ${sig.badgeBorder}`, color: sig.badgeColor, flexShrink: 0 }}>{sig.badge}</span>
              </div>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.32)', paddingLeft: '15px', lineHeight: 1.5 }}>{sig.imply}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
