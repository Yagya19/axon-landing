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
                'Competitor price drops and increases — instant detection',
                'New product launches — before their ads run',
                'New category expansions — 30 days to move first',
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
                'What every signal means — strategic view',
                'Exactly what to do — tactical view',
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
                { text: 'Competitor price drops and increases — instant detection', highlight: false },
                { text: 'New product launches — before their ads run', highlight: false },
                { text: 'New category expansions — 30 days to move first', highlight: false },
                { text: 'Email alerts within 24h', highlight: true },
                { text: 'What every signal means — strategic view', highlight: true },
                { text: 'Exactly what to do — tactical view', highlight: true },
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

          {/* COMMANDER — Orange */}
          <div style={{
            background: 'rgba(232,93,36,0.03)',
            border: '0.5px solid rgba(232,93,36,0.35)',
            borderRadius: '10px', padding: '22px',
            position: 'relative', display: 'flex', flexDirection: 'column'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, #E85D24, transparent 80%)',
              borderRadius: '10px 10px 0 0'
            }} />

            <div style={{ height: '22px', marginBottom: '10px' }} />

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: '#E85D24', letterSpacing: '0.08em',
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
            }}>"Nothing gets past you"</div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              {[
                { text: '10 competitors tracked', highlight: false },
                { text: 'Competitor price drops and increases — instant detection', highlight: false },
                { text: 'New product launches — before their ads run', highlight: false },
                { text: 'New category expansions — 30 days to move first', highlight: false },
                { text: 'Priority alerts within 6 hours', highlight: true },
                { text: 'What every signal means — strategic view', highlight: false },
                { text: 'Exactly what to do — tactical view', highlight: false },
                { text: 'Weekly Monday intelligence briefing', highlight: true },
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                  <span style={{ color: '#E85D24', fontSize: '8px', marginTop: '3px', flexShrink: 0 }}>●</span>
                  <span style={{
                    fontSize: '11px',
                    color: f.highlight ? '#fff' : 'rgba(255,255,255,0.65)',
                    fontWeight: f.highlight ? 400 : 300,
                    lineHeight: 1.4
                  }}>{f.text}</span>
                </div>
              ))}

              {/* Coming soon — combined */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                <span style={{ color: '#E85D24', fontSize: '8px', marginTop: '3px', flexShrink: 0 }}>●</span>
                <span style={{ fontSize: '11px', color: '#fff', fontWeight: 400, lineHeight: 1.4, flex: 1 }}>
                  Website changes · Promotions · Customer intel · Advertising intel — first access
                </span>
                <span style={{
                  fontFamily: "'DM Mono', monospace", fontSize: '6px',
                  color: 'rgba(212,160,23,0.7)', border: '0.5px solid rgba(212,160,23,0.25)',
                  padding: '1px 4px', borderRadius: '3px', flexShrink: 0,
                  whiteSpace: 'nowrap', marginTop: '3px'
                }}>Coming Soon</span>
              </div>
            </div>

            <button
              onClick={() => window.location.href = '/signup'}
              style={{
                width: '100%', padding: '10px', borderRadius: '4px',
                fontSize: '11px', fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500, cursor: 'pointer',
                background: '#E85D24',
                border: 'none',
                color: '#fff'
              }}>
              Get full intelligence — $119/month
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
          Scout is free forever — no card, no commitment, no expiry. Upgrade to Operator or Commander when you are ready. Cancel anytime.
        </p>

      </div>
    </>
  );
}
