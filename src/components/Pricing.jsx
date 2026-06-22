import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$59',
    sub: '/month founding price',
    founding: 'Standard $99 — save 40% forever',
    featured: false,
    features: [
      '3 competitors tracked',
      'Weekly Monday digest',
      'Pricing and product monitoring',
      'Email alerts',
      '14-day free trial'
    ]
  },
  {
    name: 'Growth',
    price: '$119',
    sub: '/month founding price',
    founding: 'Standard $199 — save 40% forever',
    featured: true,
    features: [
      '7 competitors tracked',
      'Real-time instant alerts',
      'Full 12-layer signal monitoring',
      'AI insight and action engine',
      'Shareable PDF reports'
    ]
  },
  {
    name: 'Pro',
    price: '$239',
    sub: '/month founding price',
    founding: 'Standard $399 — save 40% forever',
    featured: false,
    features: [
      '15 competitors tracked',
      'Ad creative monitoring',
      '12-month history timeline',
      'White-label reports',
      'Priority support'
    ]
  },
];

export default function Pricing() {
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
        Pricing
      </div>
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: '28px',
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        marginBottom: '24px',
        color: '#fff'
      }}>
        Simple pricing.<br />Extraordinary intelligence.
      </h2>

      {/* Founding bar */}
      <div style={{
        border: '0.5px solid rgba(212,160,23,0.2)',
        background: 'rgba(212,160,23,0.05)',
        borderRadius: '6px',
        padding: '14px 16px',
        marginBottom: '20px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px'
        }}>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px',
            color: '#D4A017',
            letterSpacing: '0.06em',
            textTransform: 'uppercase'
          }}>Founding member spots</span>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px',
            color: 'rgba(255,255,255,0.4)'
          }}>73 of 100 taken — 27 remaining</span>
        </div>
        <div style={{
          height: '3px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            width: '73%',
            background: '#D4A017',
            borderRadius: '2px'
          }} />
        </div>
      </div>

      {/* Plans */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px'
      }}>
        {plans.map((plan) => (
          <div key={plan.name} style={{
            border: plan.featured ? '0.5px solid #D4A017' : '0.5px solid rgba(255,255,255,0.08)',
            borderRadius: '8px',
            padding: '20px',
            background: plan.featured ? '#0d0d0d' : '#0a0a0a'
          }}>
            {plan.featured && (
              <div style={{
                display: 'inline-block',
                background: '#D4A017',
                color: '#080808',
                fontFamily: "'DM Mono', monospace",
                fontSize: '8px',
                fontWeight: 500,
                padding: '3px 10px',
                borderRadius: '2px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}>Most popular</div>
            )}
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '16px',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '4px'
            }}>{plan.name}</div>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '32px',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1,
              marginBottom: '4px'
            }}>{plan.price}</div>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '9px',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.06em',
              marginBottom: '8px'
            }}>{plan.sub}</div>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '9px',
              color: '#D4A017',
              letterSpacing: '0.04em',
              marginBottom: '14px'
            }}>{plan.founding}</div>
            <div style={{
              height: '0.5px',
              background: 'rgba(255,255,255,0.08)',
              marginBottom: '12px'
            }} />
            {plan.features.map(f => (
              <div key={f} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                fontSize: '11px',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '7px',
                fontWeight: 300
              }}>
                <span style={{ color: '#00C896', fontFamily: "'DM Mono', monospace", fontSize: '10px' }}>✓</span>
                {f}
              </div>
            ))}
            <button 
              onClick={() => window.location.href = '/signup'}
              style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 500,
              cursor: 'pointer',
              marginTop: '14px',
              fontFamily: "'DM Sans', sans-serif",
              border: 'none',
              background: plan.featured ? '#D4A017' : 'rgba(255,255,255,0.05)',
              color: plan.featured ? '#080808' : 'rgba(255,255,255,0.6)'
            }}>
              {plan.featured ? 'Start free trial' : 'Get started free'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
