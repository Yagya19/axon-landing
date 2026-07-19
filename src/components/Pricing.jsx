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
          <span style={{ color: '#D4A017' }}>See further. Move first.</span>
        </div>

        <p style={{
          fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontWeight: 300,
          marginBottom: '32px', maxWidth: '480px', lineHeight: 1.7
        }}>
          Start free. See real signals on real competitors. Upgrade when you see the value. No contracts, no hidden fees.
        </p>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', maxWidth: '980px' }}>

          {/* SCOUT — Blue */}
          <div style={{
            background: '#0a0a0a',
            border: '0.5px solid rgba(55,138,221,0.25)',
            borderRadius: '10px', padding: '22px',
            position: 'relative', display: 'flex', flexDirection: 'column'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, #378ADD, transparent 80%)',
              borderRadius: '10px 10px 0 0'
            }} />

            <div style={{ height: '22px', marginBottom: '10px' }} />

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: '#378ADD', letterSpacing: '0.08em',
              textTransform: 'uppercase', marginBottom: '4px'
            }}>Scout</div>

            <div style={{
              fontFamily: "'Syne', sans-serif", fontSize: '28px',
              fontWeight: 800, color: '#fff', marginBottom: '2px', lineHeight: 1
            }}>
              Free
              <span style={{ fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.3)' }}> forever</span>
            </div>

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.25)', marginBottom: '6px'
            }}>No credit card. Ever.</div>

            <div style={{
              fontSize: '11px', color: 'rgba(255,255,255,0.35)',
              fontStyle: 'italic', marginBottom: '18px', lineHeight: 1.5, fontWeight: 300
            }}>"See what you have been missing"</div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              {[
                '2 competitors tracked',
                'Competitor price drops and increases',
                'New product launches',
                'New category expansions',
                'Full dashboard access',
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                  <span style={{ color: '#378ADD', fontSize: '8px', marginTop: '3px', flexShrink: 0 }}>●</span>
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', fontWeight: 300, lineHeight: 1.4 }}>{f}</span>
                </div>
              ))}

              <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.05)', margin: '2px 0' }} />

              {[
                'Email alerts within 24h',
                'What every signal means',
                'Exactly what to do',
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                  <span style={{ fontSize: '9px', marginTop: '1px', flexShrink: 0 }}>🔒</span>
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', fontWeight: 300, lineHeight: 1.4 }}>{f}</span>
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
                border: '0.5px solid rgba(55,138,221,0.4)',
                color: '#378ADD'
              }}>
              Start free — no card ever
            </button>

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.18)', textAlign: 'center', marginTop: '8px'
            }}>Free forever · upgrade anytime</div>
          </div>

          {/* OPERATOR — Green */}
          <div style={{
            background: 'rgba(0,200,150,0.02)',
            border: '0.5px solid rgba(0,200,150,0.3)',
            borderRadius: '10px', padding: '22px',
            position: 'relative', display: 'flex', flexDirection: 'column'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, #00C896, transparent 80%)',
              borderRadius: '10px 10px 0 0'
            }} />

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '8px',
              color: '#00C896', border: '0.5px solid rgba(0,200,150,0.3)',
              background: 'rgba(0,200,150,0.08)', padding: '2px 8px',
              borderRadius: '99px', display: 'inline-block',
              marginBottom: '10px', alignSelf: 'flex-start'
            }}>Most popular</div>

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: '#00C896', letterSpacing: '0.08em',
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
            }}>"Now you know what to do"</div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              {[
                { text: '5 competitors tracked', highlight: false },
                { text: 'Competitor price drops and increases', highlight: false },
                { text: 'New product launches', highlight: false },
                { text: 'New category expansions', highlight: false },
                { text: 'Email alerts within 24 hours', highlight: true },
                { text: 'What every signal means', highlight: true },
                { text: 'Exactly what to do', highlight: true },
                { text: 'Full intelligence dashboard', highlight: false },
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                  <span style={{ color: '#00C896', fontSize: '8px', marginTop: '3px', flexShrink: 0 }}>●</span>
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
                border: '0.5px solid rgba(0,200,150,0.5)',
                color: '#00C896'
              }}>
              Start watching — $49/month
            </button>

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.18)', textAlign: 'center', marginTop: '8px'
            }}>Cancel anytime · no contracts</div>
          </div>

          {/* COMMANDER — Orange — Coming Soon */}
          <div style={{
            background: 'rgba(232,93,36,0.02)',
            border: '0.5px solid rgba(232,93,36,0.2)',
            borderRadius: '10px', padding: '22px',
            position: 'relative', display: 'flex', flexDirection: 'column',
            opacity: 0.75
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, rgba(232,93,36,0.5), transparent 80%)',
              borderRadius: '10px 10px 0 0'
            }} />

            {/* Coming Soon badge */}
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '8px',
              color: 'rgba(232,93,36,0.8)', border: '0.5px solid rgba(232,93,36,0.3)',
              background: 'rgba(232,93,36,0.08)', padding: '2px 8px',
              borderRadius: '99px', display: 'inline-block',
              marginBottom: '10px', alignSelf: 'flex-start'
            }}>Coming Soon</div>

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(232,93,36,0.7)', letterSpacing: '0.08em',
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
              fontSize: '11px', color: 'rgba(255,255,255,0.35)',
              fontStyle: 'italic', marginBottom: '18px', lineHeight: 1.5, fontWeight: 300
            }}>"Nothing gets past you"</div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              {[
                { text: '10 competitors tracked', highlight: false },
                { text: 'Competitor price drops and increases', highlight: false },
                { text: 'New product launches', highlight: false },
                { text: 'New category expansions', highlight: false },
                { text: 'Priority alerts within 6 hours', highlight: true },
                { text: 'What every signal means', highlight: false },
                { text: 'Exactly what to do', highlight: false },
                { text: 'Weekly Monday intelligence briefing', highlight: true },
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                  <span style={{ color: 'rgba(232,93,36,0.6)', fontSize: '8px', marginTop: '3px', flexShrink: 0 }}>●</span>
                  <span style={{
                    fontSize: '11px',
                    color: f.highlight ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.45)',
                    fontWeight: f.highlight ? 400 : 300,
                    lineHeight: 1.4
                  }}>{f.text}</span>
                </div>
              ))}

              {/* Coming soon signals — each on own line */}
              <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.05)', margin: '4px 0' }} />

              {[
                'Website changes',
                'Promotions and discounts',
                'Customer sentiment intel',
                'Advertising intelligence',
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ color: 'rgba(232,93,36,0.4)', fontSize: '8px', flexShrink: 0 }}>●</span>
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', fontWeight: 300, lineHeight: 1.4, flex: 1 }}>{f}</span>
                  <span style={{
                    fontFamily: "'DM Mono', monospace", fontSize: '6px',
                    color: 'rgba(212,160,23,0.6)', border: '0.5px solid rgba(212,160,23,0.2)',
                    padding: '1px 4px', borderRadius: '3px', flexShrink: 0,
                    whiteSpace: 'nowrap'
                  }}>Soon</span>
                </div>
              ))}
            </div>

            {/* Non-responsive button */}
            <div
              style={{
                width: '100%', padding: '10px', borderRadius: '4px',
                fontSize: '11px', fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500, textAlign: 'center',
                background: 'rgba(232,93,36,0.08)',
                border: '0.5px solid rgba(232,93,36,0.2)',
                color: 'rgba(232,93,36,0.4)',
                cursor: 'not-allowed',
                boxSizing: 'border-box'
              }}>
              Coming Soon
            </div>

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.15)', textAlign: 'center', marginTop: '8px'
            }}>Notify me when available</div>
          </div>

        </div>

        {/* Footer note */}
        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: '9px',
          color: 'rgba(255,255,255,0.2)', marginTop: '16px', maxWidth: '980px',
          lineHeight: 1.6
        }}>
          Scout is free forever — no card, no commitment, no expiry. Upgrade to Operator when you are ready. Commander launching soon.
        </p>

      </div>
    </>
  );
}
