import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Enter your store URL',
    desc: 'AXON reads your store, understands your category and price point, then suggests your top competitors automatically. Add up to 10 in under 3 minutes.',
    tag: '→ Setup time: under 3 minutes'
  },
  {
    num: '02',
    title: 'AXON watches everything',
    desc: '12 simultaneous signal layers run 24 hours a day — pricing, products, job boards, ad libraries, funding databases, news feeds, social signals and more.',
    tag: '→ Monitoring: 24 hours a day'
  },
  {
    num: '03',
    title: 'You get decisions not data',
    desc: 'Every Monday a clean digest arrives. Every urgent change triggers an instant alert — with a specific recommended action, not just a notification.',
    tag: '→ Digest: every Monday 7am'
  },
];

export default function HowItWorks() {
  return (
    <section style={{
      padding: '48px 32px',
      borderBottom: '0.5px solid rgba(255,255,255,0.05)',
      fontFamily: "'DM Sans', sans-serif"
    }}>
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '9px',
        color: '#D4A017',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span style={{ display: 'inline-block', width: '16px', height: '0.5px', background: '#D4A017' }} />
        How it works
      </div>
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: '28px',
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        marginBottom: '32px',
        color: '#fff'
      }}>
        Three steps from signup<br />to competitive advantage
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px',
        background: 'rgba(255,255,255,0.06)',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        {steps.map((step) => (
          <div key={step.num} style={{
            background: '#080808',
            padding: '24px'
          }}>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '40px',
              fontWeight: 800,
              color: 'rgba(212,160,23,0.15)',
              marginBottom: '14px',
              lineHeight: 1
            }}>{step.num}</div>
            <div style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#fff',
              marginBottom: '8px'
            }}>{step.title}</div>
            <div style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.65,
              fontWeight: 300
            }}>{step.desc}</div>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '9px',
              color: '#D4A017',
              letterSpacing: '0.06em',
              marginTop: '12px'
            }}>{step.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
