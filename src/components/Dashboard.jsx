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
    strategicNote: "Based on e-commerce patterns — drops over 20% on hero products typically precede collection changes, not permanent repositioning.",
    tactical: "Do not match immediately. Run a value-focused campaign in the next 48 hours reminding customers why your product justifies full price.",
    tacticalNote: "Matching a competitor price cut costs margin immediately. Most cuts under 25% reverse within 14 days in fashion and apparel.",
    action: "Launch a value campaign now. Do not match their price — you will lose margin for nothing.",
    tags: ["High urgency", "Likely clearance", "Respond in 48h"]
  };
  if (pct <= -10) return {
    strategic: "A drop of this size typically signals end-of-season inventory clearance, not a permanent reprice. They need cash flow before the next collection drops.",
    strategicNote: "Based on seasonal pricing patterns — mid-range drops of 10–20% most commonly occur 4–6 weeks before a new collection launch.",
    tactical: "Hold your price for 14 days. If they revert, you maintained margin. If they hold the cut, reassess then — not now.",
    tacticalNote: "Historical data shows 68% of seasonal price cuts in apparel reverse within 21 days. Patience protects margin.",
    action: "Hold your price. Monitor for 14 days before deciding.",
    tags: ["Likely temporary", "Monitor 14 days", "Hold price"]
  };
  if (pct < 0) return {
    strategic: "A minor price adjustment — likely testing price elasticity or running a quiet promotional test. Not a signal of strategic repositioning.",
    strategicNote: "Small adjustments under 10% are consistent with A/B price testing — a common practice among Shopify stores optimising conversion.",
    tactical: "No action needed yet. Watch whether this spreads to other products in their catalog.",
    tacticalNote: "Price elasticity tests rarely spread across a full catalog. If it stays isolated to one product, it is not a strategic signal.",
    action: "No action needed. Watch if this spreads across their catalog.",
    tags: ["Low urgency", "Testing elasticity", "Watch only"]
  };
  return {
    strategic: "A price increase signals confidence in demand or rising costs being passed to customers. This is an opportunity for you to compete on value.",
    strategicNote: "Price increases on established products signal brand confidence. Customers who stay despite the rise are high-loyalty — worth targeting.",
    tactical: "If your price is now lower, highlight it. Run a targeted comparison campaign while the gap exists.",
    tacticalNote: "Price gaps between competitors typically last 30–60 days before the market adjusts. Act while the window is open.",
    action: "Opportunity — their price is now higher than yours. Highlight your value immediately.",
    tags: ["Opportunity", "Compete on value", "Act now"]
  };
}

function getProductIntel(count) {
  if (count >= 3) return {
    strategic: "Multiple new launches in one week signals a coordinated collection drop — building momentum toward a paid campaign. This is deliberate, not ad hoc.",
    strategicNote: "Coordinated multi-product launches typically precede paid ad campaigns by 10–14 days. Watch for ad spend to follow.",
    tactical: "Watch their ad spend over the next 2 weeks. Multi-product drops backed by ads confirm a real strategic push.",
    tacticalNote: "New products without immediate ad support are usually tests. Products backed by ads within 14 days are real strategic bets.",
    action: "Check if any new products overlap your catalog. Prepare a response before their ads run.",
    tags: ["Watch closely", "Ads likely in 2 weeks", `${count}-product drop`]
  };
  return {
    strategic: "A single new launch suggests a targeted addition rather than a collection push. Lower urgency than a multi-product drop.",
    strategicNote: "Solo product launches are often tests of demand before committing to a full collection. Watch for follow-up launches.",
    tactical: "Monitor whether they follow with ads or more products in the next 7 days. One product alone is a test, not a commitment.",
    tacticalNote: "If no follow-up products or ads appear within 7 days, this is likely a demand test — no response needed yet.",
    action: "Watch for 7 days. If no follow-up appears, this is likely a test — no response needed yet.",
    tags: ["Low urgency", "Likely a test", "Watch 7 days"]
  };
}

function getCategoryIntel(count) {
  if (count >= 2) return {
    strategic: "Multiple new categories in one week signals a major strategic pivot. They are betting on several new customer segments simultaneously.",
    strategicNote: "Multiple category launches require significant inventory and budget commitment — a signal of aggressive expansion, not experimentation.",
    tactical: "Prioritise which category overlaps most with your strengths. You cannot respond to all of them — pick the highest threat.",
    tacticalNote: "Category authority sets within 60–90 days. Focus your response on the category where you have the strongest existing position.",
    action: "Identify which new category threatens you most. Move into it first or cede the ground entirely.",
    tags: ["High urgency", "Multiple bets", "Prioritise response"]
  };
  return {
    strategic: "A new category is a long-term bet on a customer segment. They have committed inventory and budget — this is not a test, it is a deliberate strategic move.",
    strategicNote: "New category launches require inventory investment and catalog restructuring — a signal of deliberate strategic commitment.",
    tactical: "You have a narrow window before they establish authority. Category dominance sets within 60–90 days. Acting in the first 30 days maximises your position.",
    tacticalNote: "Category authority is typically established within 60–90 days of launch. Acting in the first 30 days maximises your competitive position.",
    action: "Decide fast. They just proved demand exists. Move first or let them own it.",
    tags: ["Strategic move", "Narrow window", "30 days to act"]
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

const NoteBox = ({ text, color }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '7px 9px', background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(255,255,255,0.06)', borderRadius: '5px', marginTop: '8px' }}>
    <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: `0.5px solid ${color ? color + '44' : 'rgba(255,255,255,0.2)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: color ? color + '88' : 'rgba(255,255,255,0.3)', lineHeight: 1 }}>i</span>
    </div>
    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.5 }}>{text}</span>
  </div>
);

export default function Dashboard() {
  const [competitors, setCompetitors] = useState([]);
  const [signals, setSignals] = useState([]);
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeCounter, setActiveCounter] = useState('price');
  const [focusedId, setFocusedId] = useState(null);
  const [focusType, setFocusType] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { window.location.href = '/login'; return; }
      const { data: profile } = await supabase.from('profiles').select('is_premium').eq('id', user.id).single();
      setIsPremium(profile?.is_premium || false);
      const { data: comps } = await supabase.from('competitors').select('*').eq('user_email', user.email);
      setCompetitors(comps || []);
      const { data: sigs } = await supabase.from('signals').select('*').eq('user_email', user.email).order('detected_at', { ascending: false });
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

  const getCompName = (url) => url ? url.replace('https://', '').replace('www.', '') : '';
  const getCompById = (id) => competitors.find(c => c.id === id);

  const focusedPriceComp = activeCounter === 'price' && focusedId
    ? trackedWithPrice.find(c => c.id === focusedId) || trackedWithPrice[0]
    : trackedWithPrice[0];

  const focusedPriceSignal = activeCounter === 'price' && focusedId
    ? pricingSignals.find(s => s.competitor_id === focusedId) || pricingSignals[0]
    : pricingSignals[0];

  const focusedProductSignal = activeCounter === 'product' && focusedId && focusType === 'signal'
    ? productSignals.find(s => s.id === focusedId)
    : productSignals[0];

  const focusedCategorySignal = activeCounter === 'category' && focusedId && focusType === 'signal'
    ? categorySignals.find(s => s.id === focusedId)
    : categorySignals[0];

  const topPriceChange = focusedPriceSignal ? parsePriceChange(focusedPriceSignal.detail) : null;
  const priceIntel = topPriceChange ? getPriceIntel(topPriceChange.pct) : null;

  const focusedProductComp = focusedProductSignal ? getCompById(focusedProductSignal.competitor_id) : null;
  const compProductCount = focusedProductComp ? productSignals.filter(s => s.competitor_id === focusedProductComp.id).length : productSignals.length;
  const productIntel = getProductIntel(compProductCount);

  const focusedCategoryComp = focusedCategorySignal ? getCompById(focusedCategorySignal.competitor_id) : null;
  const compCategoryCount = focusedCategoryComp ? categorySignals.filter(s => s.competitor_id === focusedCategoryComp.id).length : categorySignals.length;
  const categoryIntel = getCategoryIntel(compCategoryCount);

  const activePriceColor = activeCounter === 'price' && topPriceChange
    ? (topPriceChange.pct < 0 ? '#E85D24' : '#00C896')
    : COLORS.price;
  const activeColor = activeCounter === 'price' ? activePriceColor : COLORS[activeCounter];

  const focusedPriceIndex = trackedWithPrice.findIndex(c => c.id === (focusedId || trackedWithPrice[0]?.id));
  const focusedProductIndex = productSignals.findIndex(s => s.id === (focusedProductSignal?.id));
  const focusedCategoryIndex = categorySignals.findIndex(s => s.id === (focusedCategorySignal?.id));

  const counterBadge = activeCounter === 'price'
    ? `${focusedPriceIndex + 1} of ${trackedWithPrice.length} tracked`
    : activeCounter === 'product'
      ? `${focusedProductIndex + 1} of ${productSignals.length} launch${productSignals.length !== 1 ? 'es' : ''}`
      : `${focusedCategoryIndex + 1} of ${categorySignals.length} categor${categorySignals.length !== 1 ? 'ies' : 'y'}`;

  const handleCounterClick = (type) => { setActiveCounter(type); setFocusedId(null); setFocusType(null); };
  const handlePriceCompClick = (comp) => { setFocusedId(focusedId === comp.id ? null : comp.id); setFocusType('competitor'); };
  const handleSignalClick = (sig) => { setFocusedId(focusedId === sig.id ? null : sig.id); setFocusType('signal'); };

  const counterStyle = (type) => ({
    background: activeCounter === type ? `rgba(${type === 'price' ? '232,93,36' : type === 'product' ? '55,138,221' : '212,160,23'},0.08)` : '#0a0a0a',
    border: `0.5px solid ${activeCounter === type ? COLORS[type] : 'rgba(255,255,255,0.07)'}`,
    borderRadius: '8px', padding: '13px 10px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.15s'
  });

  const groupByCompetitor = (sigs) => {
    const groups = {};
    competitors.forEach(c => { groups[c.id] = { comp: c, signals: [] }; });
    sigs.forEach(s => { if (groups[s.competitor_id]) groups[s.competitor_id].signals.push(s); });
    return Object.values(groups);
  };

  const productGroups = groupByCompetitor(productSignals);
  const categoryGroups = groupByCompetitor(categorySignals);

  const heroStrategic = activeCounter === 'price' ? (priceIntel?.strategic || "Baseline prices set. Alerts fire when prices change.") : activeCounter === 'product' ? productIntel.strategic : categoryIntel.strategic;
  const heroStrategicNote = activeCounter === 'price' ? (priceIntel?.strategicNote || "AXON monitors price changes and alerts you within 24 hours.") : activeCounter === 'product' ? productIntel.strategicNote : categoryIntel.strategicNote;
  const heroTactical = activeCounter === 'price' ? (priceIntel?.tactical || "No action needed yet — monitoring is active.") : activeCounter === 'product' ? productIntel.tactical : categoryIntel.tactical;
  const heroTacticalNote = activeCounter === 'price' ? (priceIntel?.tacticalNote || "Price baselines refreshed every 24 hours.") : activeCounter === 'product' ? productIntel.tacticalNote : categoryIntel.tacticalNote;
  const heroAction = activeCounter === 'price' ? (priceIntel?.action || "Monitoring active. Alerts fire automatically.") : activeCounter === 'product' ? productIntel.action : categoryIntel.action;
  const heroTags = activeCounter === 'price' ? (priceIntel?.tags || ["Monitoring active", "No changes yet"]) : activeCounter === 'product' ? productIntel.tags : categoryIntel.tags;

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
        <div style={{ background: `radial-gradient(ellipse at top left, ${activeColor}11, transparent 60%)`, border: `0.5px solid ${activeColor}44`, borderRadius: '14px', padding: '20px', marginBottom: '14px', transition: 'all 0.2s' }}>

          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: activeColor, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '9px', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: activeColor }} />
            {activeCounter === 'price' ? 'Price movement detected' : activeCounter === 'product' ? 'New launch detected' : 'New territory detected'}
            {focusedId && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: activeColor, border: `0.5px solid ${activeColor}44`, padding: '2px 6px', borderRadius: '99px' }}>focused</span>}
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ flex: 1 }}>
              {activeCounter === 'price' ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '38px', fontWeight: 800, color: activeColor, lineHeight: 1 }}>
                    {topPriceChange ? `${topPriceChange.pct > 0 ? '+' : ''}${topPriceChange.pct}%` : focusedPriceComp ? `$${focusedPriceComp.last_snapshot.price}` : '—'}
                  </div>
                  {topPriceChange && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '5px 12px', borderRadius: '6px', background: topPriceChange.pct < 0 ? 'rgba(232,93,36,0.12)' : 'rgba(0,200,150,0.12)', border: `0.5px solid ${topPriceChange.pct < 0 ? 'rgba(232,93,36,0.3)' : 'rgba(0,200,150,0.3)'}`, fontFamily: "'DM Mono', monospace", fontSize: '13px', fontWeight: 500, color: topPriceChange.pct < 0 ? '#E85D24' : '#00C896' }}>
                      <span>{topPriceChange.pct < 0 ? '↓' : '↑'}</span>
                      <span>{topPriceChange.pct < 0 ? 'Price dropped' : 'Price raised'}</span>
                    </div>
                  )}
                </div>
              ) : activeCounter === 'product' ? (
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '26px', fontWeight: 800, color: COLORS.product, lineHeight: 1.2 }}>
                  {focusedProductSignal ? focusedProductSignal.title.replace('New product launched: ', '') : '—'}
                </div>
              ) : (
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '26px', fontWeight: 800, color: COLORS.category, lineHeight: 1.2 }}>
                  {focusedCategorySignal ? focusedCategorySignal.title.replace('New category launched: ', '') : '—'}
                </div>
              )}
            </div>

            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', padding: '4px 10px', borderRadius: '6px', background: `rgba(${activeCounter === 'price' ? (topPriceChange?.pct < 0 ? '232,93,36' : activePriceColor === '#00C896' ? '0,200,150' : '232,93,36') : activeCounter === 'product' ? '55,138,221' : '212,160,23'},0.1)`, color: activeColor, border: `0.5px solid ${activeColor}25`, flexShrink: 0, marginLeft: '12px', marginTop: '4px', whiteSpace: 'nowrap' }}>
              {counterBadge}
            </div>
          </div>

          <div style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.45)', fontWeight: 300, marginBottom: '5px' }}>
            {activeCounter === 'price' && topPriceChange ? (
              <><strong style={{ color: 'rgba(255,255,255,0.85)' }}>{focusedPriceSignal.title.replace(' price changed', '')}</strong> on {getCompName(getCompById(focusedPriceSignal.competitor_id)?.url)} — was <span style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through' }}>${topPriceChange.oldPrice}</span> → <strong style={{ color: activeColor }}>${topPriceChange.newPrice}</strong></>
            ) : activeCounter === 'price' && focusedPriceComp ? (
              <><strong style={{ color: 'rgba(255,255,255,0.85)' }}>{focusedPriceComp.last_snapshot.product_title}</strong> — ${focusedPriceComp.last_snapshot.price} tracked on {getCompName(focusedPriceComp.url)}</>
            ) : activeCounter === 'product' && focusedProductSignal ? (
              <>Launched by <strong style={{ color: 'rgba(255,255,255,0.85)' }}>{getCompName(getCompById(focusedProductSignal.competitor_id)?.url)}</strong> — {compProductCount > 1 ? `part of a ${compProductCount}-product drop this week` : 'single product launch this week'}</>
            ) : activeCounter === 'category' && focusedCategorySignal ? (
              <>Launched by <strong style={{ color: 'rgba(255,255,255,0.85)' }}>{getCompName(getCompById(focusedCategorySignal.competitor_id)?.url)}</strong> — their first move into this segment</>
            ) : 'No signals detected yet — monitoring is active.'}
          </div>

          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.2)', marginBottom: '12px' }}>
            {activeCounter === 'price' ? 'Tap a competitor below to focus its price here' : activeCounter === 'product' ? 'Tap any product below to focus it here' : 'Tap any category below to focus it here'}
          </div>

          <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.08)', marginBottom: '14px' }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
            <div style={{ background: '#0a0a0a', border: `0.5px solid ${activeColor}33`, borderRadius: '8px', padding: '12px' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: activeColor, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>Strategic view</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, fontWeight: 300 }}>{heroStrategic}</div>
              <NoteBox text={heroStrategicNote} color={activeColor} />
            </div>
            <div style={{ background: '#0a0a0a', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>Tactical view</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, fontWeight: 300 }}>{heroTactical}</div>
              <NoteBox text={heroTacticalNote} color={activeColor} />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '10px 12px', background: `rgba(${activeCounter === 'price' ? (topPriceChange?.pct < 0 ? '232,93,36' : '0,200,150') : activeCounter === 'product' ? '55,138,221' : '212,160,23'},0.08)`, border: `0.5px solid ${activeColor}33`, borderRadius: '6px', marginBottom: '12px' }}>
            <span style={{ color: activeColor, fontFamily: "'DM Mono', monospace", fontSize: '10px', flexShrink: 0, marginTop: '1px' }}>→</span>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, fontWeight: 300 }}>
              <strong style={{ color: '#fff', fontWeight: 500 }}>Action: </strong>{heroAction}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {heroTags.map((tag, i) => (
              <span key={i} style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', padding: '4px 10px', borderRadius: '99px', letterSpacing: '0.04em', background: i === 0 ? `rgba(${activeCounter === 'price' ? (topPriceChange?.pct < 0 ? '232,93,36' : '0,200,150') : activeCounter === 'product' ? '55,138,221' : '212,160,23'},0.1)` : 'rgba(255,255,255,0.05)', color: i === 0 ? activeColor : 'rgba(255,255,255,0.5)', border: `0.5px solid ${i === 0 ? activeColor + '44' : 'rgba(255,255,255,0.1)'}` }}>{tag}</span>
            ))}
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
            <div key={item.type} style={counterStyle(item.type)} onClick={() => handleCounterClick(item.type)}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: 800, color: COLORS[item.type], lineHeight: 1, marginBottom: '5px' }}>{item.num}</div>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* By competitor */}
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
          By competitor
        </div>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.2)', marginBottom: '10px' }}>
          {activeCounter === 'price' ? 'Tap a competitor to focus it in the hero card' : activeCounter === 'product' ? 'Tap any product to focus it in the hero card' : 'Tap any category to focus it in the hero card'}
        </p>

        {/* PRICE VIEW */}
        {activeCounter === 'price' && competitors.map((comp, i) => {
          const compPriceSignals = pricingSignals.filter(s => s.competitor_id === comp.id);
          const isSelected = focusedId === comp.id;
          return (
            <div key={i} onClick={() => handlePriceCompClick(comp)} style={{ marginBottom: '10px', padding: '13px 14px', background: isSelected ? `rgba(${activePriceColor === '#E85D24' ? '232,93,36' : '0,200,150'},0.04)` : '#0a0a0a', borderRadius: '8px', border: `0.5px solid ${isSelected ? activeColor + '55' : 'rgba(255,255,255,0.06)'}`, cursor: 'pointer', transition: 'all 0.15s' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: 500, color: '#fff', display: 'flex', alignItems: 'center', gap: '7px' }}>
                  {getCompName(comp.url)}
                  {isSelected && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: activeColor, border: `0.5px solid ${activeColor}44`, padding: '2px 6px', borderRadius: '99px' }}>focused</span>}
                </span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>
                  {compPriceSignals.length > 0 ? `${compPriceSignals.length} price change${compPriceSignals.length !== 1 ? 's' : ''}` : comp.last_snapshot?.price ? '1 price tracked' : '0 signals yet'}
                </span>
              </div>
              {comp.last_snapshot?.price ? (
                compPriceSignals.length > 0 ? compPriceSignals.map((sig, j) => {
                  const change = parsePriceChange(sig.detail);
                  const sigColor = change ? (change.pct < 0 ? '#E85D24' : '#00C896') : COLORS.price;
                  return (
                    <div key={j} style={{ marginBottom: j < compPriceSignals.length - 1 ? '6px' : 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '3px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: sigColor, flexShrink: 0 }} />
                        <span style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.8)', fontWeight: 300, flex: 1 }}>{sig.title.replace(' price changed', '')}</span>
                        {change && <span style={{ display: 'flex', alignItems: 'center', gap: '3px', padding: '2px 7px', borderRadius: '4px', background: change.pct < 0 ? 'rgba(232,93,36,0.12)' : 'rgba(0,200,150,0.12)', border: `0.5px solid ${change.pct < 0 ? 'rgba(232,93,36,0.3)' : 'rgba(0,200,150,0.3)'}`, fontFamily: "'DM Mono', monospace", fontSize: '10px', fontWeight: 500, color: sigColor }}>{change.pct < 0 ? '↓' : '↑'}{Math.abs(change.pct)}%</span>}
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>{new Date(sig.detected_at).toLocaleDateString()}</span>
                      </div>
                      {change && <p style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.4)', paddingLeft: '15px' }}>Was <span style={{ textDecoration: 'line-through' }}>${change.oldPrice}</span> → <strong style={{ color: sigColor }}>${change.newPrice}</strong></p>}
                    </div>
                  );
                }) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: COLORS.price, flexShrink: 0 }} />
                    <span style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.8)', fontWeight: 300, flex: 1 }}>{comp.last_snapshot.product_title} — <strong style={{ color: '#fff' }}>${comp.last_snapshot.price}</strong></span>
                  </div>
                )
              ) : <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>No price tracked yet.</p>}
            </div>
          );
        })}

        {/* PRODUCT VIEW */}
        {activeCounter === 'product' && productGroups.map((group, i) => (
          <div key={i} style={{ marginBottom: '10px', background: '#0a0a0a', borderRadius: '8px', border: '0.5px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderBottom: group.signals.length > 0 ? '0.5px solid rgba(255,255,255,0.06)' : 'none' }}>
              <span style={{ fontSize: '12px', fontWeight: 500, color: '#fff' }}>{getCompName(group.comp.url)}</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>{group.signals.length > 0 ? `${group.signals.length} new product${group.signals.length !== 1 ? 's' : ''}` : 'no new products'}</span>
            </div>
            {group.signals.length > 0 ? group.signals.map((sig, j) => {
              const isSelected = focusedId === sig.id;
              return (
                <div key={j} onClick={() => handleSignalClick(sig)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 14px', cursor: 'pointer', borderBottom: j < group.signals.length - 1 ? '0.5px solid rgba(255,255,255,0.04)' : 'none', background: isSelected ? 'rgba(55,138,221,0.06)' : 'transparent', transition: 'background 0.1s' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: COLORS.product, flexShrink: 0 }} />
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', fontWeight: 300, flex: 1 }}>{sig.title.replace('New product launched: ', '')}</span>
                  {isSelected && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: COLORS.product, border: '0.5px solid rgba(55,138,221,0.3)', padding: '2px 6px', borderRadius: '99px' }}>focused</span>}
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.25)' }}>{new Date(sig.detected_at).toLocaleDateString()}</span>
                  <span style={{ fontSize: '10px', color: isSelected ? COLORS.product : 'rgba(255,255,255,0.2)' }}>{isSelected ? '←' : '›'}</span>
                </div>
              );
            }) : (
              <div style={{ padding: '9px 14px' }}>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>No new products detected yet.</p>
              </div>
            )}
          </div>
        ))}

        {/* CATEGORY VIEW */}
        {activeCounter === 'category' && categoryGroups.map((group, i) => (
          <div key={i} style={{ marginBottom: '10px', background: '#0a0a0a', borderRadius: '8px', border: '0.5px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderBottom: group.signals.length > 0 ? '0.5px solid rgba(255,255,255,0.06)' : 'none' }}>
              <span style={{ fontSize: '12px', fontWeight: 500, color: '#fff' }}>{getCompName(group.comp.url)}</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>{group.signals.length > 0 ? `${group.signals.length} new categor${group.signals.length !== 1 ? 'ies' : 'y'}` : 'no new categories'}</span>
            </div>
            {group.signals.length > 0 ? group.signals.map((sig, j) => {
              const isSelected = focusedId === sig.id;
              return (
                <div key={j} onClick={() => handleSignalClick(sig)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 14px', cursor: 'pointer', borderBottom: j < group.signals.length - 1 ? '0.5px solid rgba(255,255,255,0.04)' : 'none', background: isSelected ? 'rgba(212,160,23,0.06)' : 'transparent', transition: 'background 0.1s' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: COLORS.category, flexShrink: 0 }} />
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', fontWeight: 300, flex: 1 }}>{sig.title.replace('New category launched: ', '')}</span>
                  {isSelected && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: COLORS.category, border: '0.5px solid rgba(212,160,23,0.3)', padding: '2px 6px', borderRadius: '99px' }}>focused</span>}
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.25)' }}>{new Date(sig.detected_at).toLocaleDateString()}</span>
                  <span style={{ fontSize: '10px', color: isSelected ? COLORS.category : 'rgba(255,255,255,0.2)' }}>{isSelected ? '←' : '›'}</span>
                </div>
              );
            }) : (
              <div style={{ padding: '9px 14px' }}>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>No new categories detected yet.</p>
              </div>
            )}
          </div>
        ))}

        {/* Upgrade bar */}
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
