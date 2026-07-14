import React from 'react';

export default function Signals() {
  return (
    <div id="signals" style={{ background: '#080808' }}>
      <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.05)', margin: '0 32px' }} />

      <div style={{ padding: '48px 32px', maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: '9px',
          color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em',
          textTransform: 'uppercase', marginBottom: '8px'
        }}>What FARWATCH detects</div>

        <div style={{
          fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 800,
          color: '#fff', marginBottom: '6px', lineHeight: 1.2
        }}>
          Three signals.<br />
          <span style={{ color: '#D4A017' }}>Complete intelligence.</span>
        </div>

        <p style={{
          fontSize: '13px', color: 'rgba(255,255,255,0.35)', fontWeight: 300,
          marginBottom: '32px', maxWidth: '480px', lineHeight: 1.7
        }}>
          Every signal comes with a fact, an interpretation, and a recommended action. Not just data — intelligence.
        </p>

        {/* Signal cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>

          {/* Pricing */}
          <div style={{
            background: '#0a0a0a',
            border: '0.5px solid rgba(255,255,255,0.06)',
            borderRadius: '10px',
            padding: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, #E85D24, transparent 70%)'
            }} />
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '8px',
              color: '#E85D24', letterSpacing: '0.1em',
              textTransform: 'uppercase', marginBottom: '12px',
              display: 'flex', alignItems: 'center', gap: '6px'
            }}>
              <span>↓</span> Pricing intelligence
            </div>
            <div style={{
              fontSize: '13px', color: '#fff', fontWeight: 500, marginBottom: '8px', lineHeight: 1.4
            }}>
              Competitor dropped hero product 18%
            </div>
            <div style={{
              fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontWeight: 300,
              lineHeight: 1.7, marginBottom: '14px'
            }}>
              Likely clearing inventory before a rebrand — not a permanent cut. Hold your price for 14 days before deciding.
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: '8px',
                color: '#E85D24', border: '0.5px solid rgba(232,93,36,0.3)',
                background: 'rgba(232,93,36,0.08)', padding: '3px 8px', borderRadius: '4px'
              }}>Likely temporary</span>
            </div>
          </div>

          {/* Products */}
          <div style={{
            background: '#0a0a0a',
            border: '0.5px solid rgba(255,255,255,0.06)',
            borderRadius: '10px',
            padding: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, #378ADD, transparent 70%)'
            }} />
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '8px',
              color: '#378ADD', letterSpacing: '0.1em',
              textTransform: 'uppercase', marginBottom: '12px',
              display: 'flex', alignItems: 'center', gap: '6px'
            }}>
              <span>+</span> Product intelligence
            </div>
            <div style={{
              fontSize: '13px', color: '#fff', fontWeight: 500, marginBottom: '8px', lineHeight: 1.4
            }}>
              4 new products launched overnight
            </div>
            <div style={{
              fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontWeight: 300,
              lineHeight: 1.7, marginBottom: '14px'
            }}>
              Coordinated launch signals a collection drop. Watch for paid ads in 2 weeks — that confirms the real push is coming.
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: '8px',
                color: '#378ADD', border: '0.5px solid rgba(55,138,221,0.3)',
                background: 'rgba(55,138,221,0.08)', padding: '3px 8px', borderRadius: '4px'
              }}>Watch closely</span>
            </div>
          </div>

          {/* Categories */}
          <div style={{
            background: '#0a0a0a',
            border: '0.5px solid rgba(255,255,255,0.06)',
            borderRadius: '10px',
            padding: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, #D4A017, transparent 70%)'
            }} />
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '8px',
              color: '#D4A017', letterSpacing: '0.1em',
              textTransform: 'uppercase', marginBottom: '12px',
              display: 'flex', alignItems: 'center', gap: '6px'
            }}>
              <span>▸</span> Category intelligence
            </div>
            <div style={{
              fontSize: '13px', color: '#fff', fontWeight: 500, marginBottom: '8px', lineHeight: 1.4
            }}>
              Competitor entered Summer Linen
            </div>
            <div style={{
              fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontWeight: 300,
              lineHeight: 1.7, marginBottom: '14px'
            }}>
              A new category is a long-term strategic bet. You have 30 days before they establish authority. Move first or cede it.
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: '8px',
                color: '#D4A017', border: '0.5px solid rgba(212,160,23,0.3)',
                background: 'rgba(212,160,23,0.08)', padding: '3px 8px', borderRadius: '4px'
              }}>30-day window</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
