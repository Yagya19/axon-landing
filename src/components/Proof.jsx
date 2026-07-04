import React from 'react';

export default function Proof() {
  return (
    <>
      <div style={{
        height: '0.5px', background: 'rgba(255,255,255,0.05)', margin: '0 32px'
      }} />

      <div style={{
        padding: '32px 32px',
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {/* Quote */}
        <div style={{
          flex: 1,
          fontSize: '13px',
          color: 'rgba(255,255,255,0.45)',
          fontWeight: 300,
          lineHeight: 1.8,
          fontStyle: 'italic',
          borderLeft: '2px solid rgba(212,160,23,0.4)',
          paddingLeft: '18px'
        }}>
          "I used to check my competitors manually every few days and still felt like I was always a step behind. AXON told me about a price drop before I would have noticed it myself —{' '}
          <strong style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 400, fontStyle: 'normal' }}>
            and told me exactly what to do about it.
          </strong>"
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '9px',
            color: 'rgba(255,255,255,0.22)',
            marginTop: '10px',
            fontStyle: 'normal',
            letterSpacing: '0.03em'
          }}>
            — Shopify founder · ethnic clothing · 40 years in the business
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '32px', flexShrink: 0 }}>
          {[
            { num: '24h', label: 'monitoring cycle' },
            { num: '3', label: 'live signals' },
            { num: '$0', label: 'to start' }
          ].map((stat, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '22px',
                fontWeight: 800,
                color: '#D4A017',
                marginBottom: '3px'
              }}>{stat.num}</div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '9px',
                color: 'rgba(255,255,255,0.25)',
                letterSpacing: '0.04em'
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
