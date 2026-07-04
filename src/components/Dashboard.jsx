import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://bnristmagxfutjgthgpd.supabase.co',
  'sb_publishable_ifLgjBC5vTtV7BJBfCNmyA_Sm54QueW'
);

const COLORS = {
  price: '#E85D24',
  product: '#378ADD',
  category: '#D4A017'
};

function getPriceIntel(pct) {
  if (pct <= -20) return {
    strategic: "An aggressive drop of this size signals either a major clearance event or a competitive attack. They are sacrificing margin deliberately — this is not routine.",
    tactical: "Do not match immediately. Run a value-focused campaign in the next 48 hours reminding customers why your product justifies full price.",
    action: "Launch a value campaign now. Do not match their price — you will lose margin for nothing.",
    tags: ["High urgency", "Likely clearance", "Respond in 48h"]
  };
  if (pct <= -10) return {
    strategic: "A drop of this size typically signals end-of-season inventory clearance, not a permanent reprice. They need cash flow before the next collection drops.",
    tactical: "Hold your price for 14 days. If they revert, you maintained margin. If they hold the cut, reassess then — not now.",
    action: "Hold your price. Monitor for 14 days before deciding.",
    tags: ["Likely temporary", "Monitor 14 days", "Hold price"]
  };
  if (pct < 0) return {
    strategic: "A minor price adjustment — likely testing price elasticity or running a quiet promotional test. Not a signal of strategic repositioning.",
    tactical: "No action needed yet. Watch whether this spreads to other products in their catalog.",
    action: "No action needed. Watch if this spreads across their catalog.",
    tags: ["Low urgency", "Testing elasticity", "Watch only"]
  };
  return {
    strategic: "A price increase signals confidence in demand or rising costs being passed to customers. This is an opportunity for you to compete on value.",
    tactical: "If your price is now lower, highlight it. Run a targeted comparison campaign while the gap exists.",
    action: "Opportunity — their price is now higher than yours. Highlight your value immediately.",
    tags: ["Opportunity", "Compete on value", "Act now"]
  };
}

function parsePriceChange(detail) {
  if (!detail) return null;
  const match = detail.match(/From \$?([\d.]+) to \$?([\d.]+)/i);
  if (!match) return null;
  const oldPrice = parseFloat(match[1]);
  const newPrice = parseFloat(match[2]);
  const pct = ((newPrice - oldPrice) / oldPrice) * 100;
  return { oldPrice, newPrice, pct: Math.round(pct) };
}

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
    <div style={{ background: '#080808', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Mono', monospace", fontSize: '12px' }}>
      Loading your dashboard...
    </div>
  );

  const maxAllowed = isPremium ? 7 : 2;
  const pricingSignals = signals.filter(s => s.signal_type === 'pricing');
  const productSignals = signals.filter(s => s.signal_type === 'new_product');
  const categorySignals = signals.filter(s => s.signal_type === 'new_category');
  const trackedWithPrice = competitors.filter(c => c.last_snapshot && c.last_snapshot.price);

  const topPriceSignal = pricingSignals[0];
  const topPriceChange = topPriceSignal ? parsePriceChange(topPriceSignal?.detail) : null;
  const priceIntel = topPriceChange ? getPriceIntel(topPriceChange.pct) : null;

  const getCompetitorName = (id) => {
    const comp = competitors.find(c => c.id === id);
    return comp ? comp.url.replace('https://', '').replace('www.', '') : 'Unknown';
  };

  const activePriceColor = activeCounter === 'price' && topPriceChange
    ? (topPriceChange.pct < 0 ? '#E85D24' : '#00C896')
    : COLORS.price;

  const activeColor = activeCounter === 'price' ? activePriceColor : COLORS[activeCounter];

  const heroContent = {
    price: {
      label: 'Price movement detected',
      strategic: priceIntel?.strategic || "Baseline prices set. You'll be alerted the moment any price changes.",
      tactical: priceIntel?.tactical || "No action needed yet — monitoring is active.",
      action: priceIntel?.action || "Monitoring active. Alerts fire automatically when prices change.",
      tags: priceIntel?.tags || ["Monitoring active", "No changes yet"]
    },
    product: {
      label: 'New products launched',
      strategic: productSignals.length > 0
        ? "Multiple new launches suggest a planned collection drop. They are building momentum toward a campaign — this is coordinated, not ad hoc."
        : "Product catalog baselines are set. Any new product your competitors add will appear here within 24 hours of launch.",
      tactical: productSignals.length > 0
        ? "Watch their ad spend over the next 2 weeks. If paid campaigns follow, it confirms a full push — and tells you which products they are betting on."
        : "No action needed yet. You will be notified immediately when a competitor adds new products.",
      action: productSignals.length > 0
        ? "Check if any new products overlap with your catalog. Prepare a response before their ads run."
        : "Monitoring active. New product alerts fire within 24 hours of launch.",
      tags: productSignals.length > 0
        ? ["Watch closely", "Ads likely in 2 weeks", "Check overlap"]
        : ["Monitoring active", "No new products yet"]
    },
    category: {
      label: 'New categories detected',
      strategic: categorySignals.length > 0
        ? "A new category is a long-term bet on a customer segment. They have built inventory and committed budget. This is not a test — it is a strategic move into new territory."
        : "Category baselines are set across all competitors. Any new category expansion will appear here within 24 hours.",
      tactical: categorySignals.length > 0
        ? "You have a narrow window before they establish authority in this category. If it overlaps with your strengths, move now. If not, watch and learn from their approach."
        : "No action needed yet. You will be notified immediately when a competitor launches a new category.",
      action: categorySignals.length > 0
        ? "Decide fast. They just proved demand exists. The question is whether you move first or let them own it."
        : "Monitoring active. Category alerts fire within 24 hours of launch.",
      tags: categorySignals.length > 0
        ? ["Strategic move", "Narrow window", "Decide fast"]
        : ["Monitoring active", "No new categories yet"]
    }
  };

  const active = heroContent[activeCounter];

  const counterStyle = (type) => ({
    background: activeCounter === type
      ? `rgba(${type === 'price' ? '232,93,36' : type === 'product' ? '55,138,221' : '212,160,23'},0.08)`
      : '#0a0a0a',
    border: `0.5px solid ${activeCounter === type ? COLORS[type] : 'rgba(255,255,255,0.07)'}`,
    borderRadius: '8px', padding: '13px 10px', textAlign: 'center',
    cursor: 'pointer', transition: 'all 0.15s'
  });

  return (
    <div style={{ background: '#080808', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", padding: '24px 32px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        {/* Top bar */}
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
          background: `radial-gradient(ellipse at top left, ${activeColor}11, transparent 60%)`,
          border: `0.5px solid ${activeColor}44`,
          borderRadius: '14px', padding: '20px', marginBottom: '14px', transition: 'all 0.2s'
        }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: activeColor, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '9px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: activeColor }} />
            {active.label}
          </div>

          {/* Hero number with directional badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '38px', fontWeight: 800, color: activeColor, lineHeight: 1 }}>
              {activeCounter === 'price' && topPriceChange
                ? `${topPriceChange.pct > 0 ? '+' : ''}${topPriceChange.pct}%`
                : activeCounter === 'price'
                  ? trackedWithPrice[0] ? `$${trackedWithPrice[0].last_snapshot.price}` : '—'
                  : activeCounter === 'product'
                    ? productSignals.length || trackedWithPrice.length
                    : categorySignals.length
              }
            </div>
            {activeCounter === 'price' && topPriceChange && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                padding: '5px 12px', borderRadius: '6px',
                background: topPriceChange.pct < 0 ? 'rgba(232,93,36,0.12)' : 'rgba(0,200,150,0.12)',
                border: `0.5px solid ${topPriceChange.pct < 0 ? 'rgba(232,93,36,0.3)' : 'rgba(0,200,150,0.3)'}`,
                fontFamily: "'DM Mono', monospace", fontSize: '13px', fontWeight: 500,
                color: topPriceChange.pct < 0 ? '#E85D24' : '#00C896'
              }}>
                <span>{topPriceChange.pct < 0 ? '↓' : '↑'}</span>
                <span>{topPriceChange.pct < 0 ? 'Price dropped' : 'Price raised'}</span>
              </div>
            )}
          </div>

          {/* Context line */}
          <div style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.45)', fontWeight: 300, marginBottom: '14px' }}>
            {activeCounter === 'price' && topPriceChange ? (
              <><strong style={{ color: 'rgba(255,255,255,0.85)' }}>{topPriceSignal.title.replace(' price changed', '')}</strong> on {getCompetitorName(topPriceSignal.competitor_id)} — was <span style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through' }}>${topPriceChange.oldPrice}</span> → <strong style={{ color: topPriceChange.pct < 0 ? '#E85D24' : '#00C896' }}>${topPriceChange.newPrice}</strong></>
            ) : activeCounter === 'price' && trackedWithPrice[0] ? (
              <><strong style={{ color: 'rgba(255,255,255,0.85)' }}>{trackedWithPrice[0].last_snapshot.product_title}</strong> — ${trackedWithPrice[0].last_snapshot.price} tracked on {trackedWithPrice[0].url.replace('https://', '').replace('www.', '')}</>
            ) : activeCounter === 'product' ? (
              productSignals.length > 0
                ? <>{productSignals.length} new product{productSignals.length !== 1 ? 's' : ''} detected across your competitors this week</>
                : <>Monitoring <strong style={{ color: 'rgba(255,255,255,0.85)' }}>{trackedWithPrice.length} product{trackedWithPrice.length !== 1 ? 's' : ''}</strong> across your competitors. New launches appear here instantly.</>
            ) : (
              categorySignals.length > 0
                ? <><strong style={{ color: 'rgba(255,255,255,0.85)' }}>{categorySignals[0].title.replace('New category launched: ', '')}</strong> — new category detected</>
                : 'No new categories detected yet. You will be alerted when competitors expand.'
            )}
          </div>

          <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.08)', marginBottom: '14px' }} />

          {/* Strategic and tactical */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
            <div style={{ background: '#0a0a0a', border: `0.5px solid ${activeColor}33`, borderRadius: '8px', padding: '12px' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: activeColor, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>Strategic view</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, fontWeight: 300 }}>{active.strategic}</div>
            </div>
            <div style={{ background: '#0a0a0a', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>Tactical view</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, fontWeight: 300 }}>{active.tactical}</div>
            </div>
          </div>

          {/* Action */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '10px 12px', background: `rgba(${activeCounter === 'price' ? (topPriceChange?.pct < 0 ? '232,93,36' : '0,200,150') : activeCounter === 'product' ? '55,138,221' : '212,160,23'},0.08)`, border: `0.5px solid ${activeColor}33`, borderRadius: '6px', marginBottom: '12px' }}>
            <span style={{ color: activeColor, fontFamily: "'DM Mono', monospace", fontSize: '10px', flexShrink: 0, marginTop: '1px' }}>→</span>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, fontWeight: 300 }}>
              <strong style={{ color: '#fff', fontWeight: 500 }}>Action: </strong>{active.action}
            </span>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {active.tags.map((tag, i) => (
              <span key={i} style={{
                fontFamily: "'DM Mono', monospace", fontSize: '9px',
                padding: '4px 10px', borderRadius: '99px', letterSpacing: '0.04em',
                background: i === 0 ? `rgba(${activeCounter === 'price' ? (topPriceChange?.pct < 0 ? '232,93,36' : '0,200,150') : activeCounter === 'product' ? '55,138,221' : '212,160,23'},0.1)` : 'rgba(255,255,255,0.05)',
                color: i === 0 ? activeColor : 'rgba(255,255,255,0.5)',
                border: `0.5px solid ${i === 0 ? activeColor + '44' : 'rgba(255,255,255,0.1)'}`
              }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Counters */}
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
          This week, at a glance
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginBottom: '16px' }}>
          {[
            { type: 'price', num: pricingSignals.length || trackedWithPrice.length, label: 'prices tracked' },
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
          const compPriceSignals = pricingSignals.filter(s => s.competitor_id === comp.id);
          const compProductSignals = productSignals.filter(s => s.competitor_id === comp.id);
          const compCategorySignals = categorySignals.filter(s => s.competitor_id === comp.id);

          return (
            <div key={i} style={{ marginBottom: '10px', padding: '13px 14px', background: '#0a0a0a', borderRadius: '8px', border: '0.5px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '12px', fontWeight: 500, color: '#fff' }}>
                  {comp.url.replace('https://', '').replace('www.', '')}
                </span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>
                  {activeCounter === 'price'
                    ? (comp.last_snapshot?.price ? '1 price tracked' : '0 signals yet')
                    : activeCounter === 'product'
                      ? `${compProductSignals.length} new product${compProductSignals.length !== 1 ? 's' : ''}`
                      : `${compCategorySignals.length} new categor${compCategorySignals.length !== 1 ? 'ies' : 'y'}`
                  }
                </span>
              </div>

              {activeCounter === 'price' && (
                comp.last_snapshot?.price ? (
                  compPriceSignals.length > 0 ? compPriceSignals.map((sig, j) => {
                    const change = parsePriceChange(sig.detail);
                    const sigColor = change ? (change.pct < 0 ? '#E85D24' : '#00C896') : COLORS.price;
                    return (
                      <div key={j} style={{ marginBottom: j < compPriceSignals.length - 1 ? '8px' : 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '3px' }}>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: sigColor, flexShrink: 0 }} />
                          <span style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.8)', fontWeight: 300, flex: 1 }}>
                            {sig.title.replace(' price changed', '')}
                          </span>
                          {change && (
                            <span style={{
                              display: 'flex', alignItems: 'center', gap: '3px',
                              padding: '2px 7px', borderRadius: '4px',
                              background: change.pct < 0 ? 'rgba(232,93,36,0.12)' : 'rgba(0,200,150,0.12)',
                              border: `0.5px solid ${change.pct < 0 ? 'rgba(232,93,36,0.3)' : 'rgba(0,200,150,0.3)'}`,
                              fontFamily: "'DM Mono', monospace", fontSize: '10px', fontWeight: 500,
                              color: sigColor
                            }}>
                              {change.pct < 0 ? '↓' : '↑'}{Math.abs(change.pct)}%
                            </span>
                          )}
                          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>
                            {new Date(sig.detected_at).toLocaleDateString()}
                          </span>
                        </div>
                        {change && (
                          <p style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.4)', paddingLeft: '15px' }}>
                            Was <span style={{ textDecoration: 'line-through' }}>${change.oldPrice}</span> → <strong style={{ color: sigColor }}>${change.newPrice}</strong>
                          </p>
                        )}
                      </div>
                    );
                  }) : (
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '3px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: COLORS.price, flexShrink: 0 }} />
                        <span style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.8)', fontWeight: 300, flex: 1 }}>
                          {comp.last_snapshot.product_title} — <strong style={{ color: '#fff' }}>${comp.last_snapshot.price}</strong>
                        </span>
                      </div>
                      <p style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.4)', paddingLeft: '15px' }}>
                        <strong style={{ color: 'rgba(255,255,255,0.6)' }}>Baseline set.</strong> Alert fires when price changes.
                      </p>
                    </div>
                  )
                ) : (
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>No price tracked yet.</p>
                )
              )}

              {activeCounter === 'product' && (
                compProductSignals.length > 0 ? compProductSignals.map((sig, j) => (
                  <div key={j} style={{ padding: j > 0 ? '7px 0 0' : '0', borderTop: j > 0 ? '0.5px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '3px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: COLORS.product, flexShrink: 0 }} />
                      <span style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.8)', fontWeight: 300, flex: 1 }}>{sig.title}</span>
                      <span style={{ padding: '2px 7px', borderRadius: '4px', background: 'rgba(55,138,221,0.12)', border: '0.5px solid rgba(55,138,221,0.3)', fontFamily: "'DM Mono', monospace", fontSize: '9px', color: COLORS.product }}>New launch</span>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>{new Date(sig.detected_at).toLocaleDateString()}</span>
                    </div>
                    {sig.detail && <p style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.4)', paddingLeft: '15px' }}>{sig.detail}</p>}
                  </div>
                )) : (
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>No new products detected yet.</p>
                )
              )}

              {activeCounter === 'category' && (
                compCategorySignals.length > 0 ? compCategorySignals.map((sig, j) => (
                  <div key={j} style={{ padding: j > 0 ? '7px 0 0' : '0', borderTop: j > 0 ? '0.5px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '3px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: COLORS.category, flexShrink: 0 }} />
                      <span style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.8)', fontWeight: 300, flex: 1 }}>{sig.title}</span>
                      <span style={{ padding: '2px 7px', borderRadius: '4px', background: 'rgba(212,160,23,0.12)', border: '0.5px solid rgba(212,160,23,0.3)', fontFamily: "'DM Mono', monospace", fontSize: '9px', color: COLORS.category }}>New territory</span>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>{new Date(sig.detected_at).toLocaleDateString()}</span>
                    </div>
                    {sig.detail && <p style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.4)', paddingLeft: '15px' }}>{sig.detail}</p>}
                  </div>
                )) : (
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>No new categories detected yet.</p>
                )
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
