import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://bnristmagxfutjgthgpd.supabase.co',
  'sb_publishable_ifLgjBC5vTtV7BJBfCNmyA_Sm54QueW',
);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      window.location.href = '/dashboard';
    }
    setLoading(false);
  };

  return (
    <div style={{
      background: '#080808',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'DM Sans', sans-serif"
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '40px',
        border: '0.5px solid rgba(255,255,255,0.1)',
        borderRadius: '8px',
        background: '#0a0a0a'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
          <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
            <line x1="50" y1="6" x2="50" y2="28" stroke="#D4A017" strokeWidth="2" strokeLinecap="round"/>
            <line x1="50" y1="72" x2="50" y2="94" stroke="#D4A017" strokeWidth="2" strokeLinecap="round"/>
            <line x1="6" y1="50" x2="28" y2="50" stroke="#D4A017" strokeWidth="2" strokeLinecap="round"/>
            <line x1="72" y1="50" x2="94" y2="50" stroke="#D4A017" strokeWidth="2" strokeLinecap="round"/>
            <polygon points="50,10 57,41 50,50 43,41" fill="#D4A017"/>
            <polygon points="50,90 57,59 50,50 43,59" fill="#D4A017"/>
            <polygon points="10,50 41,43 50,50 41,57" fill="#D4A017"/>
            <polygon points="90,50 59,43 50,50 59,57" fill="#D4A017"/>
            <circle cx="50" cy="50" r="3.5" fill="#080808"/>
            <circle cx="50" cy="50" r="1.5" fill="#D4A017"/>
          </svg>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: '17px',
            letterSpacing: '0.2em',
            color: '#fff'
          }}>AXON<span style={{ color: '#D4A017' }}>.</span></span>
        </div>

        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '22px',
          color: '#fff',
          marginBottom: '8px'
        }}>Welcome back</h2>
        <p style={{
          fontSize: '13px',
          color: 'rgba(255,255,255,0.45)',
          marginBottom: '28px',
          fontWeight: 300
        }}>Sign in to your AXON account.</p>

        <div style={{ marginBottom: '14px' }}>
          <label style={{
            display: 'block',
            fontFamily: "'DM Mono', monospace",
            fontSize: '9px',
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '6px'
          }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@yourstore.com"
            style={{
              width: '100%',
              background: '#080808',
              border: '0.5px solid rgba(255,255,255,0.15)',
              borderRadius: '4px',
              padding: '10px 12px',
              color: '#fff',
              fontSize: '13px',
              fontFamily: "'DM Sans', sans-serif",
              outline: 'none'
            }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{
            display: 'block',
            fontFamily: "'DM Mono', monospace",
            fontSize: '9px',
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '6px'
          }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Your password"
            style={{
              width: '100%',
              background: '#080808',
              border: '0.5px solid rgba(255,255,255,0.15)',
              borderRadius: '4px',
              padding: '10px 12px',
              color: '#fff',
              fontSize: '13px',
              fontFamily: "'DM Sans', sans-serif",
              outline: 'none'
            }}
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: '100%',
            background: '#D4A017',
            color: '#080808',
            border: 'none',
            borderRadius: '4px',
            padding: '12px',
            fontSize: '13px',
            fontWeight: 500,
            cursor: loading ? 'not-allowed' : 'pointer',
            fontFamily: "'DM Sans', sans-serif",
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>

        {message && (
          <p style={{
            marginTop: '16px',
            fontSize: '12px',
            color: '#FF0000',
            textAlign: 'center',
            fontFamily: "'DM Mono', monospace"
          }}>{message}</p>
        )}

        <p style={{
          marginTop: '20px',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.3)',
          textAlign: 'center'
        }}>
          No account?{' '}
          <span
            onClick={() => window.location.href = '/signup'}
            style={{ color: '#D4A017', cursor: 'pointer' }}
          >Start free trial</span>
        </p>
      </div>
    </div>
  );
}
