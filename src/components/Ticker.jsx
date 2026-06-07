import React from 'react';

const signals = [
  { color: '#FF0000', company: 'GLOW REPUBLIC', message: 'PRICE DROP -20% DETECTED' },
  { color: '#D4A017', company: 'NOVASKIN', message: '3 SENIOR HIRES — AD PUSH IMMINENT' },
  { color: '#00C896', company: 'LUMINA', message: 'NEW SUBSCRIPTION BUNDLE LAUNCHED' },
  { color: '#FF0000', company: 'DERMACO', message: 'AD SPEND +340% THIS WEEK' },
  { color: '#D4A017', company: 'PUREGLOW', message: 'HOMEPAGE REPOSITIONING DETECTED' },
];

export default function Ticker() {
  const doubled = [...signals, ...signals];

  return (
    <div style={{
      background: '#060606',
      borderBottom: '0.5px solid rgba(212,160,23,0.15)',
      padding: '9px 0',
      overflow: 'hidden',
      fontFamily: "'DM Mono', monospace"
    }}>
      <div style={{
        display: 'flex',
        gap: '64px',
        whiteSpace: 'nowrap',
        animation: 'ticker 40s linear infinite',
      }}>
        <style>{`
          @keyframes ticker {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
        {doubled.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexShrink: 0
          }}>
            <div style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: item.color,
              flexShrink: 0
            }} />
            <span style={{
              fontSize: '10px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)'
            }}>
              {item.company}
            </span>
            <span style={{
              fontSize: '10px',
              color: 'rgba(255,255,255,0.15)',
              margin: '0 8px'
            }}>//</span>
            <span style={{
              fontSize: '10px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: item.color
            }}>
              {item.message}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
