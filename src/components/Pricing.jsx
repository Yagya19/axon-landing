import React from 'react';

export default function Pricing() {
  return (
    <>
      <div id="pricing" style={{ height: '0.5px', background: 'rgba(255,255,255,0.05)', margin: '0 32px' }} />

      <div style={{ padding: '48px 32px', maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: '9px',
          color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em',
          textTransform: 'uppercase', marginBottom: '8px'
        }}>Pricing</div>

        <div style={{
          fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 800,
          color: '#fff', marginBottom: '6px', lineHeight: 1.2
        }}>
          No commitment.<br />
          <span style={{ color: '#D4A017' }}>Full intelligence.</span>
        </div>

        <p style={{
          fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontWeight: 300,
          marginBottom: '32px', maxWidth: '480px', lineHeight: 1.7
        }}>
          Start free. Upgrade when you see the value. Cancel anytime — no contracts, no hidden fees.
        </p>

        {/* Pricing cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', maxWidth: '980px' }}>

          {/* SCOUT */}
          <div style={{
            background: '#0a0a0a',
            border: '0.5px solid rgba(255,255,255,0.07)',
            borderRadius: '10px',
            padding: '22px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ height: '22px', marginBottom: '10px' }} />

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em',
              textTransform: 'uppercase', marginBottom: '4px'
            }}>Scout</div>

            <div style={{
              fontFamily: "'Syne', sans-serif", fontSize: '28px',
              fontWeight: 800, color: '#fff', marginBottom: '2px', lineHeight: 1
            }}>
              $0
              <span style={{ fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.3)' }}> /14 days</span>
            </div>

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.25)', marginBottom: '6px'
            }}>No credit card needed</div>

            <div style={{
              fontSize: '11px', color: 'rgba(255,255,255,0.35)',
              fontStyle: 'italic', marginBottom: '18px', lineHeight: 1.5, fontWeight: 300
            }}>
              "See what you have been missing"
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '20px' }}>

              {/* Active features */}
              {[
                '2 competitors tracked',
                'Competitor price drops & increases — instant detection',
                'Dashboard access',
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{
                    width: '14px', height: '14px', borderRadius: '50%', marginTop: '1px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '0.5px solid rgba(255,255,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.35)' }} />
                  </div>
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', fontWeight: 300, lineHeight: 1.4 }}>{f}</span>
                </div>
              ))}

              {/* Divider */}
              <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.05)', margin: '4px 0' }} />

              {/* Locked features */}
              {[
                'New product launches — before their ads run',
                'New category expansions — 30 days to move first',
                'Email alerts within 24h',
                'Strategic + tactical intelligence',
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', opacity: 0.4 }}>
                  <div style={{
                    width: '14px', height: '14px', borderRadius: '50%', marginTop: '1px',
                    border: '0.5px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.2)', lineHeight: 1 }}>—</span>
                  </div>
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontWeight: 300, lineHeight: 1.4, textDecoration: 'line-through' }}>{f}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => window.location.href = '/signup'}
              style={{
                width: '100%', padding: '10px', borderRadius: '4px',
                fontSize: '11px', fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500, cursor: 'pointer',
                background: 'transparent',
                border: '0.5px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.5)'
              }}>
              Start free trial
            </button>

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.18)', textAlign: 'center', marginTop: '8px'
            }}>No card · cancel anytime</div>
          </div>

          {/* OPERATOR */}
          <div style={{
            background: 'rgba(212,160,23,0.02)',
            border: '0.5px solid rgba(212,160,23,0.3)',
            borderRadius: '10px',
            padding: '22px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, #D4A017, transparent 80%)',
              borderRadius: '10px 10px 0 0'
            }} />

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '8px',
              color: '#D4A017', border: '0.5px solid rgba(212,160,23,0.3)',
              background: 'rgba(212,160,23,0.08)', padding: '2px 8px',
              borderRadius: '99px', display: 'inline-block',
              marginBottom: '10px', alignSelf: 'flex-start'
            }}>Most popular</div>

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: '#D4A017', letterSpacing: '0.08em',
              textTransform: 'uppercase', marginBottom: '4px'
            }}>Operator</div>

            <div style={{
              fontFamily: "'Syne', sans-serif", fontSize: '28px',
              fontWeight: 800, color: '#fff', marginBottom: '2px', lineHeight: 1
            }}>
              $49
              <span style={{ fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.3)' }}> /month</span>
            </div>

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.25)', marginBottom: '6px'
            }}>Cancel anytime</div>

            <div style={{
              fontSize: '11px', color: 'rgba(255,255,255,0.45)',
              fontStyle: 'italic', marginBottom: '18px', lineHeight: 1.5, fontWeight: 300
            }}>
              "Know before your customers do"
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '20px' }}>
              {[
                { text: '5 competitors tracked', highlight: false },
                { text: 'Competitor price drops & increases — instant detection', highlight: false },
                { text: 'New product launches — before their ads run', highlight: true },
                { text: 'New category expansions — 30 days to move first', highlight: true },
                { text: 'Email alerts within 24h', highlight: false },
                { text: 'Strategic view — what the signal means', highlight: false },
                { text: 'Tactical view — exactly what to do', highlight: false },
                { text: 'Full intelligence dashboard', highlight: false },
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{
                    width: '14px', height: '14px', borderRadius: '50%', marginTop: '1px',
                    background: f.highlight ? 'rgba(212,160,23,0.15)' : 'rgba(212,160,23,0.08)',
                    border: `0.5px solid ${f.highlight ? 'rgba(212,160,23,0.5)' : 'rgba(212,160,23,0.25)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#D4A017' }} />
                  </div>
                  <span style={{
                    fontSize: '11px',
                    color: f.highlight ? '#fff' : 'rgba(255,255,255,0.65)',
                    fontWeight: f.highlight ? 400 : 300,
                    lineHeight: 1.4
                  }}>{f.text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => window.location.href = '/signup'}
              style={{
                width: '100%', padding: '10px', borderRadius: '4px',
                fontSize: '11px', fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500, cursor: 'pointer',
                background: 'transparent',
                border: '0.5px solid rgba(212,160,23,0.5)',
                color: '#D4A017'
              }}>
              Start watching
            </button>

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.18)', textAlign: 'center', marginTop: '8px'
            }}>Cancel anytime · no contracts</div>
          </div>

          {/* COMMANDER */}
          <div style={{
            background: 'rgba(212,160,23,0.04)',
            border: '0.5px solid rgba(212,160,23,0.45)',
            borderRadius: '10px',
            padding: '22px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, #D4A017, rgba(212,160,23,0.2) 100%)',
              borderRadius: '10px 10px 0 0'
            }} />

            <div style={{ height: '22px', marginBottom: '10px' }} />

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: '#D4A017', letterSpacing: '0.08em',
              textTransform: 'uppercase', marginBottom: '4px'
            }}>Commander</div>

            <div style={{
              fontFamily: "'Syne', sans-serif", fontSize: '28px',
              fontWeight: 800, color: '#fff', marginBottom: '2px', lineHeight: 1
            }}>
              $119
              <span style={{ fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.3)' }}> /month</span>
            </div>

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.25)', marginBottom: '6px'
            }}>Cancel anytime</div>

            <div style={{
              fontSize: '11px', color: 'rgba(255,255,255,0.45)',
              fontStyle: 'italic', marginBottom: '18px', lineHeight: 1.5, fontWeight: 300
            }}>
              "Full competitive dominance"
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '20px' }}>
              {[
                { text: '10 competitors tracked', highlight: false, soon: false },
                { text: 'Competitor price drops & increases — instant detection', highlight: false, soon: false },
                { text: 'New product launches — before their ads run', highlight: false, soon: false },
                { text: 'New category expansions — 30 days to move first', highlight: false, soon: false },
                { text: 'Priority alerts within 6 hours', highlight: true, soon: false },
                { text: 'Strategic + tactical intelligence', highlight: false, soon: false },
                { text: 'Weekly Monday intelligence briefing', highlight: true, soon: false },
                { text: 'Website changes — first access', highlight: true, soon: true },
                { text: 'Promotions & discounts — first access', highlight: true, soon: true },
                { text: 'Customer sentiment intel — first access', highlight: true, soon: true },
                { text: 'Advertising intelligence — first access', highlight: true, soon: true },
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{
                    width: '14px', height: '14px', borderRadius: '50%', marginTop: '1px',
                    background: f.highlight ? 'rgba(212,160,23,0.2)' : 'rgba(212,160,23,0.08)',
                    border: `0.5px solid ${f.highlight ? 'rgba(212,160,23,0.6)' : 'rgba(212,160,23,0.2)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#D4A017' }} />
                  </div>
                  <span style={{
                    fontSize: '11px',
                    color: f.highlight ? '#fff' : 'rgba(255,255,255,0.65)',
                    fontWeight: f.highlight ? 400 : 300,
                    lineHeight: 1.4,
                    flex: 1
                  }}>{f.text}</span>
                  {f.soon && (
                    <span style={{
                      fontFamily: "'DM Mono', monospace", fontSize: '6px',
                      color: 'rgba(212,160,23,0.7)', border: '0.5px solid rgba(212,160,23,0.25)',
                      padding: '1px 4px', borderRadius: '3px', flexShrink: 0,
                      whiteSpace: 'nowrap', marginTop: '2px'
                    }}>Coming Soon</span>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => window.location.href = '/signup'}
              style={{
                width: '100%', padding: '10px', borderRadius: '4px',
                fontSize: '11px', fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500, cursor: 'pointer',
                background: '#D4A017',
                border: 'none',
                color: '#080808'
              }}>
              Get full intelligence
            </button>

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.18)', textAlign: 'center', marginTop: '8px'
            }}>Cancel anytime · no contracts</div>
          </div>

        </div>

        {/* Footer note */}
        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: '9px',
          color: 'rgba(255,255,255,0.2)', marginTop: '16px', maxWidth: '980px',
          lineHeight: 1.6
        }}>
          All paid plans include full dashboard access and email alerts. Upgrade or cancel anytime — no contracts, no hidden fees. Questions? yagya@farwatchsignals.com
        </p>

      </div>
    </>
  );
}
