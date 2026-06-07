import React from 'react';

const metrics = [
  { val: '2.4', unit: 'M', lbl: 'Signals monitored\nevery 24 hours' },
  { val: '12', unit: '', lbl: 'Simultaneous\nsignal layers' },
  { val: '$199', unit: '', lbl: 'Per month vs\n$5K consultant' },
  { val: '24', unit: 'hr', lbl: 'First insight\nguaranteed' },
];

export default function Metrics() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      margin: '0 32px',
      borderRadius: '6px',
      overflow: 'hidden',
      border: '0.5px solid rgba(255,255,255,0.06)'
    }}>
      {metrics.map((m, i) => (
        <div key={i} style={{
          background: '#080808',
          padding: '20px',
          borderRight: i < 3 ? '0.5px solid rgba(255,255,255,0.06)' : 'none'
        }}>
          <div style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '24px',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.02em',
            marginBottom: '4px'
          }}>
            {m.val}<span style={{ color: '#D4A017' }}>{m.unit}</span>
          </div>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '9px',
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            lineHeight: 1.5,
            whiteSpace: 'pre-line'
          }}>{m.lbl}</div>
        </div>
      ))}
    </div>
  );
}
