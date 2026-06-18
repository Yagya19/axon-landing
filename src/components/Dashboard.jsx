import React from 'react';

export default function Dashboard() {
  return (
    <div style={{
      background: '#080808',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'DM Sans', sans-serif",
      color: '#fff'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '28px',
          marginBottom: '12px'
        }}>
          Welcome to <span style={{ color: '#D4A017' }}>AXON.</span>
        </div>
        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '14px'
        }}>
          Your dashboard is being set up.
        </p>
      </div>
    </div>
  );
}
