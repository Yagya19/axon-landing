import React from 'react';

export default function Signals() {
  return (
    <>
      <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.05)', margin: '0 32px' }} />

      <div style={{ padding: '40px 32px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: '9px',
          color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em',
          textTransform: 'uppercase', marginBottom: '8px'
        }}>What AXON detects</div>

        <div style={{
          fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 800,
          color: '#fff', marginBottom: '6px', lineHeight: 1.2
        }}>
          Three signals.<br />
          <span style={{ color: '#D4A017' }}>Complete intelligence.</span>
        </div>

        <p style={{
          fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontWeight: 300,
          marginBottom: '24px', maxWidth: '400px', lineHeight: 1.6
        }}>
          Every signal comes with a fact, an interpretation, and a recommended action. Not just data — intelligence.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {[
            {
              type: 'price',
              color: '#E85D24',
              label: '↓ Pricing intelligence',
              example: 'Competitor dropped hero product 18%',
              imply: 'Likely clearing inventory before a rebrand — not a permanent cut. Hold your price for 14 days before deciding.',
              tag: 'Likely temporary'
            },
            {
              type: 'product',
              color: '#378ADD',
              label: '+ Product intelligence',
              example: '4 new products launched overnight',
              imply: 'Coordinated launch signals a collection drop. Watch for paid ads in 2 weeks — that confirms the real push is coming.',
              tag: 'Watch closely'
            },
            {
              type: 'category',
              color: '#D4A017',
              label: '▸ Category intelligence',
              example: 'Competitor entered Summer Linen',
              imply: 'A new category is a long-term strategic bet. You have 30 days before they establish authority. Move first or cede it.',
              tag: '30-day window'
            }
          ].map((sig, i) => (
            <div key={i} style={{
              background: '#0a0a0a',
              border: '0.5px solid rgba(255,255,255,0.06)',
              borderRadius: '10px',
              padding: '18px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, ${sig.color}, transparent 70%)`
              }} />
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: '8px',
                color: sig.color, letterSpacing: '0.1em',
                textTransform: 'uppercase', marginBottom: '10px'
              }}>{sig.label}</div>
              <div style={{
                fontSize: '12px', color: '#fff', fontWeight: 500,
                marginBottom: '8px', lineHeight: 1.4
              }}>{sig.example}</div>
              <div style={{
                fontSize: '11px', color: 'rgba(255,255,255,0.38)', fontWeight: 300,
                lineHeight: 1.6, marginBottom: '14px'
              }}>{sig.imply}</div>
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: '8px',
                padding: '3px 8px', borderRadius: '99px',
                background: `rgba(${sig.color === '#E85D24' ? '232,93,36' : sig.color === '#378ADD' ? '55,138,221' : '212,160,23'}, 0.08)`,
                color: sig.color,
                border: `0.5px solid ${sig.color === '#E85D24' ? 'rgba(232,93,36,0.2)' : sig.color === '#378ADD' ? 'rgba(55,138,221,0.2)' : 'rgba(212,160,23,0.2)'}`
              }}>{sig.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
