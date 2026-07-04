import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://bnristmagxfutjgthgpd.supabase.co',
  'sb_publishable_ifLgjBC5vTtV7BJBfCNmyA_Sm54QueW'
);

const COLORS = {
  price: '#FF0000',
  product: '#378ADD',
  category: '#D4A017'
};

export default function Dashboard() {
  const [competitors, setCompetitors] = useState([]);
  const [signals, setSignals] = useState([]);
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeCounter, setActiveCounter] = useState('price');

  useEffect(() => {
    const loadData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { window.location.href = '/login'; return; }

      const { data: profile } = await supabase
        .from('profiles').select('is_premium').eq('id', user.id).single();
      setIsPremium(profile?.is_premium || false);

      const { data: comps } = await supabase
        .from('competitors').select('*').eq('user_email', user.email);
      setCompetitors(comps || []);

      const { data: sigs } = await supabase
        .from('signals').select('*').eq('user_email', user.email)
        .order('detected_at', { ascending: false });
      setSignals(sigs || []);

      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) return (
    <div style={{
      background: '#080808', minHeight: '100vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Mono', monospace", fontSize: '12px'
    }}>Loading your dashboard...</div>
  );

  const maxAllowed = isPremium ? 7 : 2;
  const pricingSignals = signals.filter(s => s.signal_type === 'pricing');
  const productSignals = signals.filter(s => s.signal_type === 'new_product');
  const categorySignals = signals.filter(s => s.signal_type === 'new_category');
  const trackedWithPrice = competitors.filter(c => c.last_snapshot?.price);

  const heroContent = {
    price: {
      color: COLORS.price,
      label: 'Latest price tracked',
      num: trackedWithPrice[0] ? `$${trackedWithPrice[0].last_snapshot.price}` : '—',
      context: trackedWithPrice[0]
        ? <><strong style={{ color: 'rgba(255,255,255,0.75)' }}>{trackedWithPrice[0].last_snapshot.product_title}</strong> — tracked on {trackedWithPrice[0].url.replace('https://', '').replace('www.', '')}</>
        : 'No prices tracked yet.',
      action: "You'll be alerted the moment this price changes — before your customers notice."
    },
    product: {
      color: COLORS.product,
      label: 'New products detected',
      num: productSignals.length || trackedWithPrice.length,
      context: productSignals.length > 0
        ? <>{productSignals.length} new product{productSignals.length !== 1 ? 's' : ''} launched by your competitors this week.</>
        : <>Competitors have <strong style={{ color: 'rgba(255,255,255,0.75)' }}>{trackedWithPrice.length} products</strong> being monitored. New launches will appear here.</>,
      action: "Watch for paid ad spend to follow in 2 weeks — that confirms these are real launches, not tests."
    },
    category: {
      color: COLORS.category,
      label: 'New categories detected',
      num: categorySignals.length,
      context: categorySignals.length > 0
        ? <>{categorySignals.length} new categor{categorySignals.length !== 1 ? 'ies' : 'y'} detected across your competitors.</>
        : "No new categories detected yet. You'll be alerted when competitors expand.",
      action: "A new category means they just proved demand exists. Check if you can enter faster than they can establish it."
    }
  };

  const active = heroContent[activeCounter];

  const getCompSignals = (comp, type) => {
    if (type === 'price') return null;
    return signals.filter(s =>
      s.competitor_id === comp.id &&
      s.signal_type === (type === 'product' ? 'new_product' : 'new_category')
    );
  };

  const counterStyle = (type) => ({
    background: activeCounter === type ? `rgba(${type === 'price' ? '255,0,0' : type === 'product' ? '55,138,221' : '212,160,23'},0.08)` : '#0a0a0a',
    border: `0.5px solid ${activeCounter === type ? COLORS[type] : 'rgba(255,255,255,0.07)'}`,
    borderRadius: '8px', padding: '13px 10px', textAlign: 'center',
    cursor: 'pointer', transition: 'all 0.15s'
  });

  return (
    <div style={{ background: '#080808', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", padding: '24px 32px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '15px', letterSpacing: '0.15em', color: '#fff' }}>
            AXON<span style={{ color: '#D4A017' }}>.</span>
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00C896' }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: '#00C896' }}>
              Watching {competitors.length} competitor{competitors.length !== 1 ? 's' : ''} live
            </span>
          </div>
        </div>

        {/* Hero card */}
        <div style={{
          background: `radial-gradient(ellipse at top left, ${active.color}11, transparent 60%)`,
          border: `0.5px solid ${active.color}44`,
          borderRadius: '14px', padding: '20px', marginBottom: '14px', transition: 'all 0.2s'
        }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: active.color, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '9px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: active.color }} />
            {active.label}
          </div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '38px', fontWeight: 800, color: active.color, lineHeight: 1, marginBottom: '4px' }}>
            {active.num}
          </div>
          <div style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.45)', fontWeight: 300, marginBottom: '12px' }}>
            {active.context}
          </div>
          <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.08)', marginBottom: '12px' }} />
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: '#D4A017', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
            What to watch for
          </div>
          <div style={{ fontSize: '12.5px', color: '#fff', fontWeight: 500, lineHeight: 1.5 }}>
            {active.action}
          </div>
        </div>

        {/* Counters */}
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
          This week, at a glance
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginBottom: '16px' }}>
          {[
            { type: 'price', num: trackedWithPrice.length, label: 'prices tracked' },
            { type: 'product', num: productSignals.length, label: 'new products' },
            { type: 'category', num: categorySignals.length, label: 'new categories' }
          ].map(item => (
            <div key={item.type} style={counterStyle(item.type)} onClick={() => setActiveCounter(item.type)}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: 800, color: COLORS[item.type], lineHeight: 1, marginBottom: '5px' }}>
                {item.num}
              </div>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* By competitor */}
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
          By competitor
        </div>

        {competitors.map((comp, i) => {
          const compSignals = getCompSignals(comp, activeCounter);
          return (
            <div key={i} style={{ marginBottom: '10px', padding: '13px 14px', background: '#0a0a0a', borderRadius: '8px', border: '0.5px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '12px', fontWeight: 500, color: '#fff' }}>
                  {comp.url.replace('https://', '').replace('www.', '')}
                </span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>
                  {activeCounter === 'price' ? (comp.last_snapshot?.price ? '1 signal tracked' : '0 signals yet') : `${compSignals?.length || 0} signal${compSignals?.length !== 1 ? 's' : ''}`}
                </span>
              </div>

              {activeCounter === 'price' ? (
                comp.last_snapshot?.price ? (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '4px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: COLORS.price, flexShrink: 0 }} />
                      <span style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.8)', fontWeight: 300, flex: 1 }}>
                        {comp.last_snapshot.product_title} — <strong style={{ color: '#fff' }}>${comp.last_snapshot.price}</strong>
                      </span>
                    </div>
                    <p style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.4)', fontWeight: 300, paddingLeft: '15px' }}>
                      <strong style={{ color: 'rgba(255,255,255,0.6)' }}>Likely:</strong> baseline set. You'll be alerted when this price changes.
                    </p>
                  </div>
                ) : (
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>No price tracked yet.</p>
                )
              ) : compSignals?.length > 0 ? (
                compSignals.map((sig, j) => (
                  <div key={j} style={{ padding: j > 0 ? '7px 0 0' : '0', borderTop: j > 0 ? '0.5px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '4px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: COLORS[activeCounter], flexShrink: 0 }} />
                      <span style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.8)', fontWeight: 300, flex: 1 }}>
                        {sig.title}
                      </span>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>
                        {new Date(sig.detected_at).toLocaleDateString()}
                      </span>
                    </div>
                    {sig.detail && (
                      <p style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.4)', fontWeight: 300, paddingLeft: '15px' }}>
                        {sig.detail}
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>
                  No {activeCounter === 'product' ? 'new products' : 'new categories'} detected yet.
                </p>
              )}
            </div>
          );
        })}

        {!isPremium && (
          <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', background: 'rgba(212,160,23,0.06)', border: '0.5px solid rgba(212,160,23,0.25)', borderRadius: '8px' }}>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>
              Free trial — tracking <strong style={{ color: '#fff', fontWeight: 500 }}>{competitors.length} of {maxAllowed}</strong> possible competitors
            </span>
            <button style={{ background: '#D4A017', color: '#080808', border: 'none', padding: '7px 14px', borderRadius: '4px', fontSize: '11px', fontWeight: 500, fontFamily: "'DM Sans', sans-serif", cursor: 'pointer' }}>
              Upgrade
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
