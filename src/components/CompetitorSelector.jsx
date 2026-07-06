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
      if (!user) { window.location.href = '/login'; return; }
      setUser(user);
      const { data: profile } = await supabase
        .from('profiles')
        .select('is_premium')
        .eq('id', user.id)
        .single();
      if (profile?.is_premium) setMaxCompetitors(7);
    };
    checkUser();
  }, []);

  const addCompetitor = () => {
    if (competitors.length < maxCompetitors) setCompetitors([...competitors, '']);
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
    const parsed = validUrls.map(url => extractStoreAndHandle(url));
    const invalid = parsed.findIndex(p => !p || !p.isProductUrl);
    if (invalid !== -1) {
      setMessage('Please enter a full product page URL — e.g. https://store.com/products/product-name');
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
        setMessage(`You have reached your limit of ${maxCompetitors} competitors.`);
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
    } catch {
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

        {/* Logo */}
        <div style={{ marginBottom: '24px' }}>
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
          fontSize: '20px',
          color: '#fff',
          marginBottom: '6px'
        }}>Who are you watching?</h2>

        <p style={{
          fontSize: '12px',
          color: 'rgba(255,255,255,0.45)',
          marginBottom: '6px',
          fontWeight: 300
        }}>Paste a product page URL from your competitor's Shopify store.</p>

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
                outline: 'none',
                boxSizing: 'border-box'
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

        <p style={{
          marginTop: '20px',
          fontSize: '11px',
          color: 'rgba(255,255,255,0.2)',
          textAlign: 'center',
          fontFamily: "'DM Mono', monospace",
          lineHeight: 1.6
        }}>
          FARWATCH monitors publicly available Shopify store data only.
        </p>

      </div>
    </div>
  );
}
