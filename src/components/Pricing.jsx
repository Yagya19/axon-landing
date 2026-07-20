import React from 'react';

// Renders a LIVE feature line: bright white label — muted benefit.
// Brightness = "this is live and included." Dullness is reserved exclusively
// for locked (Scout) and Coming Soon (Commander) items, which use their own
// separate render blocks below — never mix the two treatments.
function FeatureLine({ label, benefit, dotColor }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
      <span style={{ color: dotColor, fontSize: '8px', marginTop: '3px', flexShrink: 0 }}>●</span>
      <span style={{ fontSize: '11px', lineHeight: 1.4 }}>
        <span style={{ color: '#fff', fontWeight: 500 }}>{label}</span>
        {benefit && (
          <span style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}> — {benefit}</span>
        )}
      </span>
    </div>
  );
}

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
              <FeatureLine label="2 competitors tracked" dotColor="#378ADD" />
              <FeatureLine label="Price tracking" benefit="catch every move the second it happens" dotColor="#378ADD" />
              <FeatureLine label="New product launches" benefit="see them before their ads even run" dotColor="#378ADD" />
              <FeatureLine label="New category expansions" benefit="spot them 30 days before they scale" dotColor="#378ADD" />
              <FeatureLine label="Full dashboard access" dotColor="#378ADD" />

              <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.05)', margin: '2px 0' }} />

              {[
                'Email alerts within 24h',
                'Strategic & Tactical View',
                'Intelligence Dashboard',
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

            {/* NOTE: "Full intelligence dashboard" intentionally removed — not built yet,
                and Operator should only list what's live and tested today. */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              <FeatureLine label="5 competitors tracked" dotColor="#00C896" />
              <FeatureLine label="Price tracking" benefit="real-time intel, the second it shifts" dotColor="#00C896" />
              <FeatureLine label="New product launches" benefit="see them before their ads even run" dotColor="#00C896" />
              <FeatureLine label="New category expansions" benefit="move in 30 days before they scale" dotColor="#00C896" />
              <FeatureLine label="Email alerts within 24h" benefit="never miss a move" dotColor="#00C896" />
              <FeatureLine label="Strategic & Tactical View" benefit="know why it matters and exactly what to do" dotColor="#00C896" />
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
            background: 'rgba(232,93,36,0.04)',
            border: '0.5px solid rgba(232,93,36,0.45)',
            borderRadius: '10px', padding: '22px',
            position: 'relative', display: 'flex', flexDirection: 'column'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, #E85D24, transparent 80%)',
              borderRadius: '10px 10px 0 0'
            }} />

            {/* Coming Soon badge */}
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '8px',
              color: '#E85D24', border: '0.5px solid rgba(232,93,36,0.4)',
              background: 'rgba(232,93,36,0.1)', padding: '2px 8px',
              borderRadius: '99px', display: 'inline-block',
              marginBottom: '10px', alignSelf: 'flex-start'
            }}>Coming Soon</div>

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

              {/* Live now */}
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: '8px',
                color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em',
                textTransform: 'uppercase', marginBottom: '2px'
              }}>Live now</div>

              <FeatureLine label="10 competitors tracked" dotColor="#E85D24" />
              <FeatureLine label="Price tracking" benefit="real-time intel, the second it shifts" dotColor="#E85D24" />
              <FeatureLine label="New product launches" benefit="see them before their ads even run" dotColor="#E85D24" />
              <FeatureLine label="New category expansions" benefit="move in 30 days before they scale" dotColor="#E85D24" />
              <FeatureLine label="Priority email alerts within 6h" benefit="react within hours, not days" dotColor="#E85D24" />
              <FeatureLine label="Strategic & Tactical View" benefit="know why it matters and exactly what to do" dotColor="#E85D24" />

              <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.06)', margin: '6px 0 2px' }} />

              {/* Coming soon */}
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: '8px',
                color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em',
                textTransform: 'uppercase', marginBottom: '2px'
              }}>Coming soon</div>

              {[
                { label: 'Weekly Monday Intelligence Report', benefit: 'your entire competitive week, decoded every Monday morning' },
                { label: 'Dedicated Intelligence Dashboard', benefit: 'one glance, total market command' },
                { label: 'Website Watch', benefit: 'catch every redesign and message shift before your customers do' },
                { label: 'Promotion Radar', benefit: "know they're running a sale before their own list does" },
                { label: 'Customer Intelligence', benefit: "read their audience like it's your own" },
                { label: 'Ad Intelligence', benefit: "see exactly where their money's going" },
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px' }}>
                  <span style={{ color: '#E85D24', fontSize: '8px', marginTop: '3px', flexShrink: 0, opacity: 0.55 }}>●</span>
                  <span style={{ fontSize: '11px', lineHeight: 1.4, flex: 1 }}>
                    <span style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 400 }}>{f.label}</span>
                    <span style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}> — {f.benefit}</span>
                  </span>
                  <span style={{
                    fontFamily: "'DM Mono', monospace", fontSize: '7px',
                    color: 'rgba(212,160,23,0.85)', border: '0.5px solid rgba(212,160,23,0.35)',
                    background: 'rgba(212,160,23,0.08)',
                    padding: '2px 6px', borderRadius: '3px', flexShrink: 0,
                    whiteSpace: 'nowrap', marginTop: '1px'
                  }}>Coming Soon</span>
                </div>
              ))}
            </div>

            {/* Non-responsive button */}
            <div style={{
              width: '100%', padding: '10px', borderRadius: '4px',
              fontSize: '11px', fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500, textAlign: 'center',
              background: 'rgba(232,93,36,0.1)',
              border: '0.5px solid rgba(232,93,36,0.3)',
              color: 'rgba(232,93,36,0.6)',
              cursor: 'not-allowed',
              boxSizing: 'border-box'
            }}>
              Coming Soon
            </div>

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.2)', textAlign: 'center', marginTop: '8px'
            }}>Launching soon · get notified</div>
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
