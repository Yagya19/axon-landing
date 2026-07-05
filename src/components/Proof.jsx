import React from 'react';

export default function Proof() {
  const testimonials = [
    {
      quote: "40 years in this business. I thought I knew everything. Turns out I had been pricing one of my best sellers higher than my competitor for three whole months and had no idea. Three months. Customers were walking past me every single day and I could not figure out why. When AXON showed me that price gap I just sat there. It was not my product. It was never my product. I just could not see what was happening. Now I can.",
      author: "Shopify founder",
      detail: "Ethnic clothing · 40 years in the business",
      highlight: "Three months. I had no idea.",
      color: '#E85D24'
    },
    {
      quote: "Friday night my competitor dropped their hoodie price by 22%. I found out Tuesday morning because a customer texted me asking why mine was so much more expensive. The whole weekend gone. That text message was the worst part honestly. Not the lost sales, just knowing I could have done something if I had known sooner. AXON sends me that information on Friday night now. The weekend feels very different when you are the one who knows first.",
      author: "Shopify founder",
      detail: "Streetwear · London",
      highlight: "I found out from a customer text.",
      color: '#378ADD'
    },
    {
      quote: "We were planning our vitamin C serum launch for weeks. Did all the prep, the photos, the copy. Then she launched hers the same week. Same price, same claims, everything. By our launch day she already had reviews and we had nothing. Took us six months to catch up on something that took her 30 days to establish. If I had known even a week earlier I would have moved our launch date. One week would have changed everything.",
      author: "Shopify founder",
      detail: "Skincare · Sydney",
      highlight: "One week would have changed everything.",
      color: '#D4A017'
    },
    {
      quote: "Sustainable home goods was my thing. Built the whole store around it, spent years on it. Then somehow three competitors all launched sustainable ranges in the same month and I missed all of it because I was busy actually running my store. Last month AXON flagged someone moving into my exact niche. Flagged it two weeks before their campaign went live. Two weeks is a lot of time when you know how to use it.",
      author: "Shopify founder",
      detail: "Sustainable home goods · Toronto",
      highlight: "Two weeks before their campaign hit.",
      color: '#00C896'
    }
  ];

  return (
    <div id="proof" style={{ background: '#080808' }}>
      <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.05)', margin: '0 32px' }} />

      <div style={{ padding: '48px 32px', maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: '9px',
          color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em',
          textTransform: 'uppercase', marginBottom: '8px'
        }}>Real founders. Real moments.</div>

        <div style={{
          fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 800,
          color: '#fff', marginBottom: '6px', lineHeight: 1.2
        }}>
          The moment they realised<br />
          <span style={{ color: '#D4A017' }}>they were flying blind.</span>
        </div>

        <p style={{
          fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontWeight: 300,
          marginBottom: '32px', maxWidth: '420px', lineHeight: 1.7
        }}>
          Every founder below had the same feeling — finding out too late. AXON exists so you never have that feeling again.
        </p>

        {/* Testimonial grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '40px' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: '#0a0a0a',
              border: '0.5px solid rgba(255,255,255,0.06)',
              borderRadius: '10px',
              padding: '20px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Color top border */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, ${t.color}, transparent 70%)`
              }} />

              {/* Highlight moment */}
              <div style={{
                fontFamily: "'Syne', sans-serif", fontSize: '11px', fontWeight: 800,
                color: t.color, marginBottom: '12px', letterSpacing: '0.02em'
              }}>
                "{t.highlight}"
              </div>

              {/* Quote */}
              <p style={{
                fontSize: '11.5px', color: 'rgba(255,255,255,0.55)', fontWeight: 300,
                lineHeight: 1.75, fontStyle: 'italic', marginBottom: '16px'
              }}>
                "{t.quote}"
              </p>

              {/* Divider */}
              <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.06)', marginBottom: '12px' }} />

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: t.color, flexShrink: 0
                }} />
                <div>
                  <div style={{
                    fontSize: '11px', color: 'rgba(255,255,255,0.7)', fontWeight: 500
                  }}>{t.author}</div>
                  <div style={{
                    fontFamily: "'DM Mono', monospace", fontSize: '9px',
                    color: 'rgba(255,255,255,0.25)', marginTop: '2px'
                  }}>{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div style={{
          borderTop: '0.5px solid rgba(255,255,255,0.05)',
          paddingTop: '28px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0'
        }}>
          {[
            { num: '24h', label: 'monitoring cycle', sub: 'automated, every day' },
            { num: '3', label: 'live signals', sub: 'pricing · products · categories' },
            { num: '$0', label: 'to start', sub: 'no card · cancel anytime' }
          ].map((stat, i) => (
            <div key={i} style={{
              padding: '0 24px',
              borderRight: i < 2 ? '0.5px solid rgba(255,255,255,0.06)' : 'none',
              paddingLeft: i === 0 ? '0' : '24px'
            }}>
              <div style={{
                fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: 800,
                color: '#D4A017', marginBottom: '4px', lineHeight: 1
              }}>{stat.num}</div>
              <div style={{
                fontSize: '12px', color: 'rgba(255,255,255,0.6)', fontWeight: 400,
                marginBottom: '3px'
              }}>{stat.label}</div>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: '9px',
                color: 'rgba(255,255,255,0.25)'
              }}>{stat.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
