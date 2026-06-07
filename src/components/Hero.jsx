import React from 'react';

const signals = [
  {
    type: 'urgent',
    label: 'Urgent signal',
    labelColor: '#FF0000',
    border: 'rgba(255,0,0,0.25)',
    bg: 'rgba(255,0,0,0.04)',
    title: 'Competitor dropped hero product price 20%',
    conf: '98%',
    confColor: '#FF0000',
    desc: 'Pricing page change detected 14 mins ago. Simultaneous homepage copy shift detected.',
    action: '→ Do not match price. Strengthen your positioning now.'
  },
  {
    type: 'live',
    label: 'Live signal',
    labelColor: '#00C896',
    border: 'rgba(0,200,150,0.25)',
    bg: 'rgba(0,200,150,0.04)',
    title: 'Competitor hiring 3 paid ads roles simultaneously',
    conf: '91%',
    confColor: '#00C896',
    desc: 'Senior Paid Ads Manager, Performance Lead, Creative Strategist. All urgent listings.',
    action: '→ Accelerate SEO and email capture now.'
  },
  {
    type: 'strategic',
    label: 'Strategic movement',
    labelColor: '#D4A017',
    border: 'rgba(212,160,23,0.2)',
    bg: 'rgba(212,160,23,0.03)',
    title: 'New subscription bundle — testing recurring revenue',
    conf: '87%',
    confColor: '#D4A017',
    desc: '3-product kit launched. Early test. Monitor 30 days before responding.',
    action: null
  },
];

export default function Hero() {
  return (
    <section style={{
      padding: '56px 32px 48px',
      position: 'relative',
      borderBottom: '0.5px solid rgba(255,255,255,0.05)',
      background: 'radial-gradient(ellipse at 30% 0%, rgba(212,160,23,0.08), transparent 60%)',
      fontFamily: "'DM Sans', sans-serif"
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'center'
      }}>

        {/* Left — Copy */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            border: '0.5px solid rgba(212,160,23,0.25)',
            background: 'rgba(212,160,23,0.06)',
            borderRadius: '2px',
            padding: '6px 12px',
            marginBottom: '24px'
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00C896' }} />
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '9px',
              color: '#D4A017',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              12 signal layers active — 1,247 events today
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: '38px',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            marginBottom: '16px',
            color: '#fff'
          }}>
            Right now your biggest<br />
            competitor just made<br />
            a move.{' '}
            <em style={{ color: '#D4A017', fontStyle: 'normal' }}>
              Did you see it?
            </em>
          </h1>

          <p style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.75,
            marginBottom: '28px',
            fontWeight: 300,
            maxWidth: '440px'
          }}>
            AXON monitors your competitors across 12 simultaneous signal layers — pricing, products, ads, hiring, funding — and tells you exactly what it means and what to do about it.
          </p>

          <div style={{ display: 'flex', gap: '10px', marginBottom: '32px', flexWrap: 'wrap' }}>
            <button style={{
              background: '#D4A017',
              color: '#080808',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '4px',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif"
            }}>
              Start free 14-day trial — no card needed
            </button>
            <button style={{
              background: 'transparent',
              color: 'rgba(255,255,255,0.7)',
              border: '0.5px solid rgba(255,255,255,0.15)',
              padding: '12px 24px',
              borderRadius: '4px',
              fontSize: '13px',
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif"
            }}>
              Watch a live demo
            </button>
          </div>

          <div style={{ display: 'flex', gap: '32px' }}>
            {[
              { val: '2.4M+', lbl: 'Signals per day' },
              { val: '38s', lbl: 'Detection time' },
              { val: '93%', lbl: 'Accuracy rate' },
            ].map(stat => (
              <div key={stat.lbl}>
                <div style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '20px',
                  fontWeight: 800,
                  color: '#fff'
                }}>{stat.val}</div>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '9px',
                  color: 'rgba(255,255,255,0.35)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase'
                }}>{stat.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Terminal */}
        <div style={{
          background: '#0a0a0a',
          border: '0.5px solid rgba(255,255,255,0.1)',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 14px',
            borderBottom: '0.5px solid rgba(255,255,255,0.08)',
            background: '#060606'
          }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              {['#FF0000', '#D4A017', '#00C896'].map(c => (
                <div key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c, opacity: 0.8 }} />
              ))}
            </div>
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '9px',
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>AXON Intelligence Terminal</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00C896' }} />
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '9px',
                color: '#00C896',
                letterSpacing: '0.06em'
              }}>Live</span>
            </div>
          </div>

          <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {signals.map((sig, i) => (
              <div key={i} style={{
                border: `0.5px solid ${sig.border}`,
                background: sig.bg,
                borderRadius: '6px',
                padding: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <div>
                    <div style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '8px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: sig.labelColor,
                      marginBottom: '3px'
                    }}>{sig.label}</div>
                    <div style={{ fontSize: '12px', fontWeight: 500, color: '#fff' }}>{sig.title}</div>
                  </div>
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '14px',
                    fontWeight: 500,
                    color: sig.confColor
                  }}>{sig.conf}</span>
                </div>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '10px',
                  color: 'rgba(255,255,255,0.4)',
                  lineHeight: 1.5
                }}>{sig.desc}</div>
                {sig.action && (
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginTop: '6px',
                    background: 'rgba(212,160,23,0.1)',
                    border: '0.5px solid rgba(212,160,23,0.2)',
                    borderRadius: '2px',
                    padding: '3px 8px'
                  }}>
                    <span style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '9px',
                      color: '#D4A017',
                      letterSpacing: '0.04em'
                    }}>{sig.action}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
