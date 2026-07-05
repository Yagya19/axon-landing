import React from 'react';

export default function Proof() {
  const testimonials = [
    {
      quote: "I have been in this business for 40 years. I thought I knew my competitors better than anyone. Then AXON showed me a price drop on a product I sell — one I had been pricing higher for three months without knowing. Three months of lost sales. Three months of customers choosing them over me for a reason I could not see. The moment I saw that signal, I understood. I was not losing because my product was worse. I was losing because I was blind. I am not blind anymore.",
      author: "Shopify founder",
      detail: "Ethnic clothing · 40 years in the business",
      highlight: "Three months of lost sales.",
      color: '#E85D24'
    },
    {
      quote: "My biggest competitor dropped their bestselling hoodie by 22% on a Friday night. By Monday morning they had taken the weekend's sales that should have been mine. I found out on Tuesday — when a customer messaged asking why I was so much more expensive. That Tuesday feeling — that is what I was trying to avoid. AXON tells me on Friday night. Now I am the one making moves on the weekend, not finding out about them on Tuesday.",
      author: "Shopify founder",
      detail: "Streetwear · London",
      highlight: "That Tuesday feeling.",
      color: '#378ADD'
    },
    {
      quote: "She launched a vitamin C serum in the same week I was planning my launch. Same price point. Same claims. I had no idea it was coming. By the time I launched, she already had 200 reviews and owned the category in my customers' minds. I spent six months building back authority she established in 30 days. AXON would have shown me the launch the day it happened. That six months of rebuilding — that is what AXON costs you if you do not have it.",
      author: "Shopify founder",
      detail: "Skincare · Sydney",
      highlight: "Six months rebuilding.",
      color: '#D4A017'
    },
    {
      quote: "I built my entire store around sustainable home goods. It was my niche — nobody else was doing it the way I was. Then one morning I searched my category and found three competitors had launched sustainable collections in the same month. AXON watches them so I do not have to. Last month it flagged a competitor entering my exact niche two weeks before their launch campaign hit. Two weeks. That is enough time to be ready.",
      author: "Shopify founder",
      detail: "Sustainable home goods · Toronto",
      highlight: "Two weeks. Enough time to be ready.",
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
