import React from 'react';

export default function Pricing() {
  return (
    <>
      <div id="pricing" style={{ height: '0.5px', background: 'rgba(255,255,255,0.05)', margin: '0 32px' }} />

      <div style={{ padding: '40px 32px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: '9px',
          color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em',
          textTransform: 'uppercase', marginBottom: '8px'
        }}>Pricing</div>

        <div style={{
          fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 800,
          color: '#fff', marginBottom: '24px', lineHeight: 1.2
        }}>
          No commitment.<br />
          <span style={{ color: '#D4A017' }}>Full intelligence.</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', maxWidth: '820px' }}>
          {[
            {
              name: 'Free trial',
              price: '$0',
              period: '/14 days',
              desc: 'See if FARWATCH works for your store — no card, no commitment.',
              features: [
                '2 competitors tracked',
                'All 3 signals active',
                'Email alerts',
                'Full dashboard access'
              ],
              btnText: 'Start free trial',
              btnStyle: { background: 'transparent', border: '0.5px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)' },
              featured: false,
              badge: null
            },
            {
              name: 'Growth',
              price: '$49',
              period: '/month',
              desc: 'For founders ready to watch more competitors and move faster.',
              features: [
                '5 competitors tracked',
                'All 3 signals active',
                'Email alerts',
                'Full dashboard access'
              ],
              btnText: 'Get started',
              btnStyle: { background: 'transparent', border: '0.5px solid rgba(212,160,23,0.4)', color: '#D4A017' },
              featured: false,
              badge: 'Most popular'
            },
            {
              name: 'Premium',
              price: '$119',
              period: '/month',
              desc: 'For serious founders who need the full competitive picture.',
              features: [
                '7 competitors tracked',
                'All signals including coming soon',
                'Full dashboard + weekly report',
                'Priority alerts'
              ],
              btnText: 'Upgrade to Premium',
              btnStyle: { background: '#D4A017', color: '#080808' },
              featured: true,
              badge: null
            }
          ].map((plan, i) => (
            <div key={i} style={{
              background: plan.featured ? 'rgba(212,160,23,0.02)' : '#0a0a0a',
              border: `0.5px solid ${plan.featured ? 'rgba(212,160,23,0.3)' : plan.name === 'Growth' ? 'rgba(212,160,23,0.15)' : 'rgba(255,255,255,0.07)'}`,
              borderRadius: '10px',
              padding: '20px',
              position: 'relative'
            }}>
              {plan.badge && (
                <div style={{
                  fontFamily: "'DM Mono', monospace", fontSize: '8px',
                  color: '#D4A017', border: '0.5px solid rgba(212,160,23,0.3)',
                  background: 'rgba(212,160,23,0.08)', padding: '2px 8px',
                  borderRadius: '99px', display: 'inline-block', marginBottom: '10px'
                }}>{plan.badge}</div>
              )}
              {!plan.badge && <div style={{ height: '22px', marginBottom: '10px' }} />}

              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: '9px',
                color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em',
                textTransform: 'uppercase', marginBottom: '6px'
              }}>{plan.name}</div>

              <div style={{
                fontFamily: "'Syne', sans-serif", fontSize: '26px',
                fontWeight: 800, color: '#fff', marginBottom: '3px'
              }}>
                {plan.price}
                <span style={{ fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.3)' }}>{plan.period}</span>
              </div>

              <div style={{
                fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginBottom: '14px',
                fontWeight: 300, lineHeight: 1.5
              }}>{plan.desc}</div>

              {plan.features.map((f, j) => (
                <div key={j} style={{
                  fontSize: '11px', color: 'rgba(255,255,255,0.55)', fontWeight: 300,
                  marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '7px'
                }}>
                  <div style={{
                    width: '3px', height: '3px', borderRadius: '50%', flexShrink: 0,
                    background: plan.featured ? 'rgba(212,160,23,0.5)' : 'rgba(255,255,255,0.25)'
                  }} />
                  {f}
                </div>
              ))}

              <button
                onClick={() => window.location.href = plan.name === 'Free trial' ? '/signup' : '/signup'}
                style={{
                  width: '100%', padding: '10px', borderRadius: '4px',
                  fontSize: '11px', fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500, border: 'none', marginTop: '14px',
                  cursor: 'pointer', ...plan.btnStyle
                }}>{plan.btnText}</button>
            </div>
          ))}
        </div>

        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: '9px',
          color: 'rgba(255,255,255,0.2)', marginTop: '16px', maxWidth: '820px'
        }}>
          All plans include full dashboard access and email alerts. Upgrade or cancel anytime — no contracts, no hidden fees.
        </p>

      </div>
    </>
  );
}
