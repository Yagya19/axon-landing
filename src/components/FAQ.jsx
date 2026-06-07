import React, { useState } from 'react';

const faqs = [
  {
    q: 'How quickly do I see my first insight?',
    a: 'Within 24 hours of adding your first competitor — guaranteed. Most users see a meaningful insight within hours of completing the 3-minute setup.'
  },
  {
    q: 'Is monitoring competitor websites legal?',
    a: 'Yes. AXON monitors only publicly available information — the same data any person could find by visiting a website manually. We never access private systems or bypass authentication.'
  },
  {
    q: 'Can I track competitors in any industry?',
    a: 'Yes. You can track any publicly accessible company regardless of industry. AXON works for any e-commerce business watching any competitor anywhere in the world.'
  },
  {
    q: 'What happens after the 14-day free trial?',
    a: 'You choose a plan and continue. If founding spots are still available you lock in lifetime pricing at that point. No automatic charges during the trial — we ask before billing anything.'
  },
  {
    q: 'Why is founding member access limited to 100 spots?',
    a: 'The first 100 founding members get direct access to the founding team, shape the product roadmap, and lock in lifetime pricing at 40% below standard. Once 100 spots are filled the founding tier closes permanently.'
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

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
        FAQ
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
        Every question answered.
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{
            border: '0.5px solid rgba(255,255,255,0.08)',
            borderRadius: '6px',
            overflow: 'hidden',
            background: '#0a0a0a'
          }}>
            <div
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 16px',
                cursor: 'pointer'
              }}
            >
              <span style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.8)'
              }}>{faq.q}</span>
              <span style={{
                color: '#D4A017',
                fontFamily: "'DM Mono', monospace",
                fontSize: '16px',
                fontWeight: 300,
                flexShrink: 0,
                marginLeft: '12px'
              }}>{open === i ? '−' : '+'}</span>
            </div>
            {open === i && (
              <div style={{
                padding: '0 16px 14px',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.7,
                fontWeight: 300,
                borderTop: '0.5px solid rgba(255,255,255,0.05)',
                paddingTop: '12px'
              }}>{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
