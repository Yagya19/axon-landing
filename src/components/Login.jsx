import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://bnristmagxfutjgthgpd.supabase.co',
  'sb_publishable_ifLgjBC5vTtV7BJBfCNmyA_Sm54QueW'
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
      setLoading(false);
      return;
    }
    const { data: comps } = await supabase
      .from('competitors')
      .select('id')
      .eq('user_email', email);
    if (comps && comps.length > 0) {
      window.location.href = '/dashboard';
    } else {
      window.location.href = '/competitors';
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

        {/* Logo */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: '17px',
            letterSpacing: '0.2em',
            color: '#fff',
            lineHeight: 1
          }}>
            FARWATCH<span style={{ color: '#D4A017' }}>.</span>
          </div>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '8px',
            color: 'rgba(0,200,150,0.7)',
            letterSpacing: '0.07em',
            marginTop: '4px'
          }}>
            See further. Move first.
          </div>
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
        }}>Sign in to your FARWATCH dashboard.</p>

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
              outline: 'none',
              boxSizing: 'border-box'
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
              outline: 'none',
              boxSizing: 'border-box'
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
          Don't have an account?{' '}
          <span
            onClick={() => window.location.href = '/signup'}
            style={{ color: '#D4A017', cursor: 'pointer' }}>
            Start free trial
          </span>
        </p>

      </div>
    </div>
  );
}
