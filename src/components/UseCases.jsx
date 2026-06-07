import React from 'react';

const cases = [
  {
    industry: 'Skincare',
    tagColor: '#FF0000',
    tagBg: 'rgba(255,0,0,0.1)',
    tagBorder: 'rgba(255,0,0,0.2)',
    tag: 'Pricing signal',
    title: 'Competitor cleared inventory with a 20% price drop — 6 weeks before their rebrand',
    story: 'A founder was about to match the discount. AXON detected the simultaneous homepage copy change and hiring signal — and flagged it as a repositioning move, not a promotional discount. She held her price and captured the competitor\'s confused customers during the rebrand.',
    result: 'Saved from a margin-destroying price war. Captured 340 new customers in 30 days.'
  },
  {
    industry: 'Apparel',
    tagColor: '#D4A017',
    tagBg: 'rgba(212,160,23,0.1)',
    tagBorder: 'rgba(212,160,23,0.2)',
    tag: 'Hiring signal',
    title: 'Three senior paid ads hires detected — 45 days before the campaign hit',
    story: 'AXON detected simultaneous hiring of a Paid Ads Manager, Performance Lead, and Creative Strategist at a direct competitor. The founder had 45 days to build organic presence and email list before the competitor\'s ads arrived.',
    result: 'Built 12,000 email subscribers before the competitor\'s ads launched.'
  },
  {
    industry: 'Supplements',
    tagColor: '#00C896',
    tagBg: 'rgba(0,200,150,0.1)',
    tagBorder: 'rgba(0,200,150,0.2)',
    tag: 'Product signal',
    title: 'Competitor\'s new product line detected from job postings — 8 weeks pre-launch',
    story: 'Job postings for a formulation chemist and regulatory specialist, combined with increased supplier activity, told AXON a new product line was coming. The founder launched a competing product two weeks before the competitor\'s announcement.',
    result: 'First mover advantage. $47,000 in sales before competitor launched.'
  },
  {
    industry: 'Home goods',
    tagColor: 'rgba(255,255,255,0.5)',
    tagBg: 'rgba(255,255,255,0.05)',
    tagBorder: 'rgba(255,255,255,0.1)',
    tag: 'Funding signal',
    title: 'Competitor\'s Series A detected — strategic pivot identified before press release',
    story: 'AXON detected legal filings, new board member LinkedIn updates, and office expansion job postings three weeks before the funding announcement. The founder repositioned into a niche the well-funded competitor would likely abandon.',
    result: 'Repositioned before the announcement. Avoided a fight with a $12M funded competitor.'
  },
];

export default function UseCases() {
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
        Real results
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
        What AXON finds<br />before you do
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px'
      }}>
        {cases.map((c, i) => (
          <div key={i} style={{
            border: i === 0 ? '0.5px solid rgba(212,160,23,0.3)' : '0.5px solid rgba(255,255,255,0.08)',
            borderRadius: '8px',
            padding: '24px',
            background: i === 0 ? '#0c0c0c' : '#0a0a0a',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              fontFamily: "'DM Mono', monospace",
              fontSize: '9px',
              color: 'rgba(255,255,255,0.2)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase'
            }}>{c.industry}</div>
            <div style={{
              display: 'inline-block',
              background: c.tagBg,
              border: `0.5px solid ${c.tagBorder}`,
              borderRadius: '2px',
              padding: '3px 10px',
              fontFamily: "'DM Mono', monospace",
              fontSize: '9px',
              color: c.tagColor,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>{c.tag}</div>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '15px',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '10px',
              lineHeight: 1.3
            }}>{c.title}</div>
            <div style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.7,
              fontWeight: 300,
              marginBottom: '12px'
            }}>{c.story}</div>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              background: 'rgba(212,160,23,0.06)',
              border: '0.5px solid rgba(212,160,23,0.15)',
              borderRadius: '4px',
              padding: '10px 12px'
            }}>
              <span style={{ color: '#D4A017', fontFamily: "'DM Mono', monospace", fontSize: '12px', flexShrink: 0 }}>→</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#D4A017', lineHeight: 1.5 }}>{c.result}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
