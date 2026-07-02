import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://bnristmagxfutjgthgpd.supabase.co',
  'sb_publishable_ifLgjBC5vTtV7BJBfCNmyA_Sm54QueW'
);

function extractStoreAndHandle(inputUrl) {
  try {
    const url = new URL(inputUrl);
    const storeUrl = `${url.protocol}//${url.hostname}`;
    const pathParts = url.pathname.split('/').filter(Boolean);
    const productsIndex = pathParts.indexOf('products');
    
    if (productsIndex !== -1 && pathParts[productsIndex + 1]) {
      const handle = pathParts[productsIndex + 1];
      return { storeUrl, handle, isProductUrl: true };
    }
    
    return { storeUrl, handle: null, isProductUrl: false };
  } catch {
    return null;
  }
}

export default function CompetitorSelector() {
  const [competitors, setCompetitors] = useState(['']);
  const [maxCompetitors, setMaxCompetitors] = useState(2);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        window.location.href = '/login';
        return;
      }
      setUser(user);

      const { data: profile } = await supabase
        .from('profiles')
        .select('is_premium')
        .eq('id', user.id)
        .single();

      if (profile?.is_premium) {
        setMaxCompetitors(7);
      }
    };
    checkUser();
  }, []);

  const addCompetitor = () => {
    if (competitors.length < maxCompetitors) {
      setCompetitors([...competitors, '']);
    }
  };

  const updateCompetitor = (index, value) => {
    const updated = [...competitors];
    updated[index] = value;
    setCompetitors(updated);
  };

  const removeCompetitor = (index) => {
    setCompetitors(competitors.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const validUrls = competitors.filter(url => url.trim() !== '');

    if (validUrls.length === 0) {
      setMessage('Please add at least one competitor product URL.');
      setLoading(false);
      return;
    }

    // Validate all URLs are product URLs
    const parsed = validUrls.map(url => extractStoreAndHandle(url));
    const invalid = parsed.findIndex(p => !p || !p.isProductUrl);
    if (invalid !== -1) {
      setMessage(`Please enter a full product page URL — e.g. https://store.com/products/product-name`);
      setLoading(false);
      return;
    }

    try {
      const { data: existing } = await supabase
        .from('competitors')
        .select('id')
        .eq('user_email', user.email);

      const currentCount = existing?.length || 0;

      if (currentCount >= maxCompetitors) {
        setMessage(`You've already reached your limit of ${maxCompetitors} competitors.`);
        setLoading(false);
        return;
      }

      const remainingSlots = maxCompetitors - currentCount;
      const urlsToAdd = parsed.slice(0, remainingSlots);

      for (const { storeUrl, handle } of urlsToAdd) {
        await supabase.from('competitors').insert({
          url: storeUrl,
          product_handle: handle,
          user_email: user.email,
          last_snapshot: null
        });
      }
      window.location.href = '/dashboard';
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
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
      fontFamily: "'DM Sans', sans-serif",
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '480px',
        padding: '40px',
        border: '0.5px solid rgba(255,255,255,0.1)',
        borderRadius: '8px',
        background: '#0a0a0a'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
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
          fontSize: '20px',
          color: '#fff',
          marginBottom: '6px'
        }}>Who are you watching?</h2>
        <p style={{
          fontSize: '12px',
          color: 'rgba(255,255,255,0.45)',
          marginBottom: '6px',
          fontWeight: 300
        }}>Paste a product page URL from your competitor's store.</p>
        <p style={{
          fontSize: '11px',
          color: 'rgba(212,160,23,0.7)',
          marginBottom: '24px',
          fontFamily: "'DM Mono', monospace"
        }}>e.g. https://allbirds.com/products/mens-tree-runner</p>

        {competitors.map((url, index) => (
          <div key={index} style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
            <input
              type="text"
              value={url}
              onChange={e => updateCompetitor(index, e.target.value)}
              placeholder="https://store.com/products/product-name"
              style={{
                flex: 1,
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
            {competitors.length > 1 && (
              <button
                onClick={() => removeCompetitor(index)}
                style={{
                  background: 'transparent',
                  border: '0.5px solid rgba(255,255,255,0.15)',
                  borderRadius: '4px',
                  color: 'rgba(255,255,255,0.5)',
                  padding: '0 12px',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}
              >×</button>
            )}
          </div>
        ))}

        {competitors.length < maxCompetitors && (
          <button
            onClick={addCompetitor}
            style={{
              background: 'transparent',
              border: '0.5px dashed rgba(212,160,23,0.4)',
              borderRadius: '4px',
              color: '#D4A017',
              padding: '8px 12px',
              cursor: 'pointer',
              fontSize: '12px',
              fontFamily: "'DM Mono', monospace",
              width: '100%',
              marginBottom: '20px'
            }}
          >+ Add another competitor</button>
        )}

        <button
          onClick={handleSubmit}
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
            opacity: loading ? 0.7 : 1,
            marginTop: '8px'
          }}
        >
          {loading ? 'Setting up monitoring...' : 'Start monitoring'}
        </button>

        {message && (
          <p style={{
            marginTop: '14px',
            fontSize: '12px',
            color: '#FF0000',
            textAlign: 'center',
            fontFamily: "'DM Mono', monospace"
          }}>{message}</p>
        )}
      </div>
    </div>
  );
}
