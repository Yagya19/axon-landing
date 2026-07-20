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

const DashboardBackground = () => (
  <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
    <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="focalAmber" cx="28%" cy="50%" r="45%">
          <stop offset="0%" stopColor="rgba(212,160,23,0.09)" />
          <stop offset="60%" stopColor="rgba(40,80,220,0.03)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="blueRight" cx="78%" cy="38%" r="38%">
          <stop offset="0%" stopColor="rgba(40,80,220,0.07)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="1400" height="900" fill="url(#focalAmber)" />
      <rect width="1400" height="900" fill="url(#blueRight)" />
      <path d="M-40 860 Q180 848 360 854 Q540 860 720 850 Q900 840 1080 846 Q1240 851 1440 847" stroke="rgba(40,80,220,0.1)" strokeWidth="0.7" fill="none" />
      <path d="M-40 830 Q160 817 338 823 Q515 829 692 818 Q868 807 1044 813 Q1210 818 1440 813" stroke="rgba(40,80,220,0.12)" strokeWidth="0.7" fill="none" />
      <path d="M-40 798 Q148 784 322 791 Q495 798 668 786 Q840 774 1012 780 Q1180 786 1440 780" stroke="rgba(40,80,220,0.14)" strokeWidth="0.7" fill="none" />
      <path d="M-40 764 Q140 749 310 756 Q478 763 646 750 Q812 737 978 744 Q1148 751 1440 744" stroke="rgba(40,80,220,0.16)" strokeWidth="0.7" fill="none" />
      <path d="M-40 728 Q132 712 298 719 Q463 726 628 712 Q792 698 956 706 Q1128 713 1440 706" stroke="rgba(40,80,220,0.18)" strokeWidth="0.8" fill="none" />
      <path d="M-40 690 Q124 673 286 681 Q447 689 608 674 Q768 659 928 667 Q1102 675 1440 667" stroke="rgba(40,80,220,0.2)" strokeWidth="0.8" fill="none" />
      <path d="M-40 650 Q116 632 274 640 Q431 648 588 632 Q744 616 900 625 Q1076 633 1440 625" stroke="rgba(40,80,220,0.2)" strokeWidth="0.8" fill="none" />
      <path d="M-40 608 Q108 589 262 597 Q415 605 568 588 Q720 571 872 580 Q1050 589 1440 580" stroke="rgba(40,80,220,0.18)" strokeWidth="0.7" fill="none" />
      <path d="M-40 564 Q100 544 250 552 Q399 560 548 542 Q696 524 844 534 Q1024 543 1440 534" stroke="rgba(40,80,220,0.16)" strokeWidth="0.7" fill="none" />
      <path d="M-40 518 Q92 497 238 505 Q383 513 528 494 Q672 475 816 486 Q998 496 1440 486" stroke="rgba(40,80,220,0.14)" strokeWidth="0.7" fill="none" />
      <path d="M-40 470 Q84 448 226 456 Q367 464 508 444 Q648 424 788 435 Q972 446 1440 435" stroke="rgba(40,80,220,0.12)" strokeWidth="0.6" fill="none" />
      <path d="M-40 420 Q76 397 214 406 Q351 415 488 394 Q624 373 760 384 Q946 396 1440 384" stroke="rgba(40,80,220,0.1)" strokeWidth="0.6" fill="none" />
      <path d="M-40 368 Q68 344 202 353 Q335 362 468 340 Q600 318 732 330 Q920 343 1440 330" stroke="rgba(40,80,220,0.08)" strokeWidth="0.6" fill="none" />
      <path d="M-40 314 Q60 289 190 298 Q319 307 448 284 Q576 261 704 274 Q894 288 1440 274" stroke="rgba(40,80,220,0.07)" strokeWidth="0.5" fill="none" />
      <path d="M-40 258 Q52 232 178 241 Q303 250 428 226 Q552 202 676 216 Q868 231 1440 216" stroke="rgba(40,80,220,0.06)" strokeWidth="0.5" fill="none" />
      <path d="M-40 200 Q44 173 166 182 Q287 191 408 166 Q528 141 648 156 Q842 172 1440 156" stroke="rgba(40,80,220,0.05)" strokeWidth="0.5" fill="none" />
      <path d="M-40 140 Q36 113 154 122 Q271 131 388 106 Q504 81 620 96 Q816 113 1440 96" stroke="rgba(40,80,220,0.04)" strokeWidth="0.5" fill="none" />
      <path d="M1100 900 Q1160 878 1220 862 Q1270 849 1320 838 Q1370 827 1440 820" stroke="rgba(40,80,220,0.22)" strokeWidth="0.7" fill="none" />
      <path d="M1120 900 Q1178 880 1236 864 Q1284 851 1333 840 Q1382 829 1440 823" stroke="rgba(40,80,220,0.18)" strokeWidth="0.7" fill="none" />
      <path d="M1140 900 Q1196 881 1252 866 Q1299 853 1347 842 Q1394 831 1440 826" stroke="rgba(40,80,220,0.14)" strokeWidth="0.6" fill="none" />
      <path d="M1160 900 Q1214 883 1268 868 Q1314 856 1361 845 Q1406 834 1440 829" stroke="rgba(40,80,220,0.1)" strokeWidth="0.6" fill="none" />
      <circle cx="1150" cy="340" r="6" fill="#E85D24" opacity="0.9" />
      <circle cx="1150" cy="340" r="16" fill="rgba(232,93,36,0.14)" />
      <circle cx="1150" cy="340" r="28" fill="rgba(232,93,36,0.05)" />
      <circle cx="1060" cy="520" r="5.5" fill="#378ADD" opacity="0.9" />
      <circle cx="1060" cy="520" r="14" fill="rgba(55,138,221,0.14)" />
      <circle cx="1060" cy="520" r="25" fill="rgba(55,138,221,0.05)" />
      <circle cx="1240" cy="440" r="5.5" fill="#D4A017" opacity="0.9" />
      <circle cx="1240" cy="440" r="14" fill="rgba(212,160,23,0.14)" />
      <circle cx="1240" cy="440" r="25" fill="rgba(212,160,23,0.05)" />
    </svg>
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
  const [activeNav, setActiveNav] = useState('overview');
  const [userEmail, setUserEmail] = useState('');
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { window.location.href = '/login'; return; }
      setUserEmail(user.email || '');
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

  const scrollToSection = (id) => {
    setActiveNav(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (loading) return (
    <div style={{ background: '#080808', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Mono', monospace", fontSize: '12px' }}>
      Loading your dashboard...
    </div>
  );

  const maxAllowed = isPremium ? 10 : 2;
  const pricingSignals = signals.filter(s => s.signal_type === 'pricing');
  const productSignals = signals.filter(s => s.signal_type === 'new_product');
  const categorySignals = signals.filter(s => s.signal_type === 'new_category');
  const trackedWithPrice = competitors.filter(c => c.last_snapshot && c.last_snapshot.price);

  const getCompName = (url) => url ? url.replace('https://', '').replace('www.', '') : '';
  const getCompById = (id) => competitors.find(c => c.id === id);

  const focusedPriceComp = activeCounter === 'price' && focusedId ? trackedWithPrice.find(c => c.id === focusedId) || trackedWithPrice[0] : trackedWithPrice[0];
  const focusedPriceSignal = activeCounter === 'price' && focusedId ? pricingSignals.find(s => s.competitor_id === focusedId) || pricingSignals[0] : pricingSignals[0];
  const focusedProductSignal = activeCounter === 'product' && focusedId && focusType === 'signal' ? productSignals.find(s => s.id === focusedId) : productSignals[0];
  const focusedCategorySignal = activeCounter === 'category' && focusedId && focusType === 'signal' ? categorySignals.find(s => s.id === focusedId) : categorySignals[0];

  const topPriceChange = focusedPriceSignal ? parsePriceChange(focusedPriceSignal.detail) : null;
  const priceIntel = topPriceChange ? getPriceIntel(topPriceChange.pct) : null;

  const focusedProductComp = focusedProductSignal ? getCompById(focusedProductSignal.competitor_id) : null;
  const compProductCount = focusedProductComp ? productSignals.filter(s => s.competitor_id === focusedProductComp.id).length : productSignals.length;
  const productIntel = getProductIntel(compProductCount);

  const focusedCategoryComp = focusedCategorySignal ? getCompById(focusedCategorySignal.competitor_id) : null;
  const compCategoryCount = focusedCategoryComp ? categorySignals.filter(s => s.competitor_id === focusedCategoryComp.id).length : categorySignals.length;
  const categoryIntel = getCategoryIntel(compCategoryCount);

  const activePriceColor = activeCounter === 'price' && topPriceChange ? (topPriceChange.pct < 0 ? '#E85D24' : '#00C896') : COLORS.price;
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
    background: activeCounter === type ? `rgba(${type === 'price' ? '232,93,36' : type === 'product' ? '55,138,221' : '212,160,23'},0.08)` : 'rgba(8,8,8,0.7)',
    border: `0.5px solid ${activeCounter === type ? COLORS[type] : 'rgba(255,255,255,0.07)'}`,
    borderRadius: '8px', padding: '13px 10px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.15s', backdropFilter: 'blur(8px)'
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
  const heroStrategicNote = activeCounter === 'price' ? (priceIntel?.strategicNote || "FARWATCH monitors price changes and alerts you within 24 hours.") : activeCounter === 'product' ? productIntel.strategicNote : categoryIntel.strategicNote;
  const heroTactical = activeCounter === 'price' ? (priceIntel?.tactical || "No action needed yet — monitoring is active.") : activeCounter === 'product' ? productIntel.tactical : categoryIntel.tactical;
  const heroTacticalNote = activeCounter === 'price' ? (priceIntel?.tacticalNote || "Price baselines refreshed every 24 hours.") : activeCounter === 'product' ? productIntel.tacticalNote : categoryIntel.tacticalNote;
  const heroAction = activeCounter === 'price' ? (priceIntel?.action || "Monitoring active. Alerts fire automatically.") : activeCounter === 'product' ? productIntel.action : categoryIntel.action;
  const heroTags = activeCounter === 'price' ? (priceIntel?.tags || ["Monitoring active", "No changes yet"]) : activeCounter === 'product' ? productIntel.tags : categoryIntel.tags;

  const navItem = (id, label, badge = null) => {
    const isActive = activeNav === id;
    const isLocked = badge !== null;
    return (
      <div
        key={id}
        onClick={() => !isLocked && scrollToSection(id)}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '7px 8px', borderRadius: '6px',
          cursor: isLocked ? 'default' : 'pointer',
          background: isActive ? 'rgba(212,160,23,0.08)' : 'transparent',
          border: isActive ? '0.5px solid rgba(212,160,23,0.2)' : '0.5px solid transparent',
          transition: 'all 0.15s', marginBottom: '1px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '4px', height: '4px', borderRadius: '50%',
            background: isActive ? '#D4A017' : isLocked ? 'transparent' : 'rgba(255,255,255,0.2)',
            border: isLocked ? '0.5px solid rgba(255,255,255,0.15)' : 'none',
            flexShrink: 0
          }} />
          <span style={{
            fontSize: '11px',
            color: isActive ? '#D4A017' : isLocked ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.55)',
            fontWeight: isActive ? 500 : 300
          }}>{label}</span>
        </div>
        {badge && (
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: '6px',
            color: badge === 'Building' ? 'rgba(232,93,36,0.7)' : badge === 'Premium' ? 'rgba(212,160,23,0.7)' : 'rgba(212,160,23,0.7)',
            border: `0.5px solid ${badge === 'Building' ? 'rgba(232,93,36,0.25)' : 'rgba(212,160,23,0.25)'}`,
            padding: '1px 5px', borderRadius: '3px', flexShrink: 0, whiteSpace: 'nowrap'
          }}>{badge}</span>
        )}
      </div>
    );
  };

  const userInitial = userEmail ? userEmail[0].toUpperCase() : 'U';
  const userName = userEmail ? userEmail.split('@')[0] : 'User';

  return (
    <div style={{ background: '#080808', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", display: 'flex', position: 'relative' }}>

      <DashboardBackground />

      {/* UPGRADE MODAL */}
      {showUpgradeModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setShowUpgradeModal(false)}>
          <div style={{ background: '#0a0a0a', border: '0.5px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '28px', maxWidth: '400px', width: '90%' }}
            onClick={e => e.stopPropagation()}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Your plan</div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '18px', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>
              {isPremium ? 'You are on Commander' : 'You are on Scout — Free forever'}
            </div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontWeight: 300, marginBottom: '20px', lineHeight: 1.6 }}>
              {isPremium ? 'You have full access to all FARWATCH features.' : `Tracking ${competitors.length} of ${maxAllowed} competitors. Upgrade to watch more and unlock the full intelligence layer.`}
            </div>
            <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.06)', marginBottom: '20px' }} />
            {!isPremium && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
                <div style={{ background: '#0f0f0f', border: '0.5px solid rgba(0,200,150,0.25)', borderRadius: '8px', padding: '14px' }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: '#00C896', textTransform: 'uppercase', marginBottom: '6px' }}>Operator</div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>$49<span style={{ fontSize: '11px', fontWeight: 300, color: 'rgba(255,255,255,0.3)' }}>/mo</span></div>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: '12px' }}>5 competitors · all signals · email alerts · intelligence layer</div>
                  <button onClick={() => window.location.href = 'mailto:yagya@farwatchsignals.com?subject=Upgrade to Operator'} style={{ width: '100%', background: 'transparent', border: '0.5px solid rgba(0,200,150,0.4)', color: '#00C896', padding: '7px', borderRadius: '4px', fontSize: '10px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Get Operator</button>
                </div>
                <div style={{ background: 'rgba(232,93,36,0.04)', border: '0.5px solid rgba(232,93,36,0.3)', borderRadius: '8px', padding: '14px' }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: '#E85D24', textTransform: 'uppercase', marginBottom: '6px' }}>Commander</div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>$119<span style={{ fontSize: '11px', fontWeight: 300, color: 'rgba(255,255,255,0.3)' }}>/mo</span></div>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: '12px' }}>10 competitors · priority alerts · weekly briefing</div>
                  <button onClick={() => window.location.href = 'mailto:yagya@farwatchsignals.com?subject=Upgrade to Commander'} style={{ width: '100%', background: '#E85D24', border: 'none', color: '#fff', padding: '7px', borderRadius: '4px', fontSize: '10px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>Get Commander</button>
                </div>
              </div>
            )}
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>Questions? yagya@farwatchsignals.com</div>
          </div>
        </div>
      )}

      {/* LEFT SIDEBAR */}
      <div style={{
        width: '175px', flexShrink: 0, borderRight: '0.5px solid rgba(255,255,255,0.07)',
        display: 'flex', flexDirection: 'column', position: 'fixed',
        top: 0, left: 0, bottom: 0, zIndex: 10,
        background: 'rgba(8,8,8,0.85)', backdropFilter: 'blur(12px)'
      }}>
        {/* Brand */}
        <div style={{ padding: '18px 14px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '4px' }}>
            <span style={{ color: '#D4A017', fontSize: '8px', lineHeight: 1 }}>▲</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em' }}>FARWATCH</span>
          </div>
          <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.06)' }} />
        </div>

        {/* Nav */}
        <div style={{ flex: 1, padding: '0 8px', overflowY: 'auto' }}>
          {navItem('overview', 'Overview')}
          {navItem('price', 'Price monitor')}
          {navItem('product', 'New products')}
          {navItem('category', 'Categories')}

          <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.06)', margin: '8px 0' }} />

          {navItem('intelligence', 'Intelligence', 'Building')}
          {navItem('reports', 'Reports', isPremium ? null : 'Premium')}

          <div style={{ padding: '10px 8px 4px' }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '7px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>More signals</div>
          </div>
          {navItem('website', 'Website monitor', 'Coming Soon')}
          {navItem('promotions', 'Promotions', 'Coming Soon')}
          {navItem('customer', 'Customer intel', 'Coming Soon')}
          {navItem('advertising', 'Advertising intel', 'Coming Soon')}

          <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.06)', margin: '8px 0' }} />
          {navItem('alerts', 'Alerts')}
          {navItem('settings', 'Settings')}
        </div>

        {/* User bottom */}
        <div
          onClick={() => setShowUpgradeModal(true)}
          style={{ padding: '12px 14px', borderTop: '0.5px solid rgba(255,255,255,0.06)', cursor: 'pointer' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(212,160,23,0.15)', border: '0.5px solid rgba(212,160,23,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '10px', fontWeight: 800, color: '#D4A017' }}>{userInitial}</span>
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', fontWeight: 500, lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{userName}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: isPremium ? '#E85D24' : 'rgba(255,255,255,0.25)', marginTop: '2px' }}>
                {isPremium ? 'Commander' : 'Scout — Free forever'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ marginLeft: '175px', flex: 1, padding: '24px 28px', position: 'relative', zIndex: 1, minHeight: '100vh' }}>

        {/* OVERVIEW SECTION */}
        <div id="overview" style={{ scrollMarginTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '16px', color: '#fff', lineHeight: 1 }}>Overview</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: 'rgba(255,255,255,0.3)', marginTop: '4px' }}>Intelligence summary · all signals</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00C896' }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: '#00C896' }}>
                Watching {competitors.length} competitor{competitors.length !== 1 ? 's' : ''} live
              </span>
            </div>
          </div>

          {/* Hero card */}
          <div style={{ background: `radial-gradient(ellipse at top left, ${activeColor}11, transparent 60%)`, border: `0.5px solid ${activeColor}44`, borderRadius: '14px', padding: '20px', marginBottom: '14px', transition: 'all 0.2s', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
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
              <div style={{ background: 'rgba(8,8,8,0.6)', border: `0.5px solid ${activeColor}33`, borderRadius: '8px', padding: '12px', backdropFilter: 'blur(8px)' }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: activeColor, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>Strategic view</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, fontWeight: 300 }}>{heroStrategic}</div>
                <NoteBox text={heroStrategicNote} color={activeColor} />
              </div>
              <div style={{ background: 'rgba(8,8,8,0.6)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', backdropFilter: 'blur(8px)' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginBottom: '32px' }}>
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
        </div>

        {/* PRICE SECTION */}
        <div id="price" style={{ scrollMarginTop: '20px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E85D24' }} />
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Price monitor</div>
          </div>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.2)', marginBottom: '10px' }}>Tap a competitor to focus it in the hero card</p>
          {competitors.map((comp, i) => {
            const compPriceSignals = pricingSignals.filter(s => s.competitor_id === comp.id);
            const isSelected = focusedId === comp.id;
            return (
              <div key={i} onClick={() => handlePriceCompClick(comp)} style={{ marginBottom: '10px', padding: '13px 14px', background: isSelected ? 'rgba(232,93,36,0.04)' : 'rgba(8,8,8,0.7)', borderRadius: '8px', border: `0.5px solid ${isSelected ? 'rgba(232,93,36,0.55)' : 'rgba(255,255,255,0.06)'}`, cursor: 'pointer', transition: 'all 0.15s', backdropFilter: 'blur(8px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 500, color: '#fff', display: 'flex', alignItems: 'center', gap: '7px' }}>
                    {getCompName(comp.url)}
                    {isSelected && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: '#E85D24', border: '0.5px solid rgba(232,93,36,0.44)', padding: '2px 6px', borderRadius: '99px' }}>focused</span>}
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
        </div>

        {/* PRODUCTS SECTION */}
        <div id="product" style={{ scrollMarginTop: '20px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#378ADD' }} />
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>New products</div>
          </div>
          {productGroups.map((group, i) => (
            <div key={i} style={{ marginBottom: '10px', background: 'rgba(8,8,8,0.7)', borderRadius: '8px', border: '0.5px solid rgba(255,255,255,0.06)', overflow: 'hidden', backdropFilter: 'blur(8px)' }}>
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
        </div>

        {/* CATEGORIES SECTION */}
        <div id="category" style={{ scrollMarginTop: '20px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D4A017' }} />
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Categories</div>
          </div>
          {categoryGroups.map((group, i) => (
            <div key={i} style={{ marginBottom: '10px', background: 'rgba(8,8,8,0.7)', borderRadius: '8px', border: '0.5px solid rgba(255,255,255,0.06)', overflow: 'hidden', backdropFilter: 'blur(8px)' }}>
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
        </div>

        {/* INTELLIGENCE SECTION */}
        <div id="intelligence" style={{ scrollMarginTop: '20px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(232,93,36,0.6)' }} />
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Intelligence</div>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '7px', color: 'rgba(232,93,36,0.7)', border: '0.5px solid rgba(232,93,36,0.25)', padding: '1px 6px', borderRadius: '3px' }}>Building</span>
          </div>

          <div style={{ background: 'rgba(8,8,8,0.7)', border: '0.5px solid rgba(232,93,36,0.15)', borderRadius: '10px', padding: '28px', backdropFilter: 'blur(8px)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, rgba(232,93,36,0.4), transparent 70%)', borderRadius: '10px 10px 0 0' }} />

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(232,93,36,0.08)', border: '0.5px solid rgba(232,93,36,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '18px' }}>🔭</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '14px', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
                  Deep Intelligence Workspace
                </div>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: 300, lineHeight: 1.8, marginBottom: '16px' }}>
                  We are building something significant here. Pattern detection across all your competitors. Competitive pressure scores. Predicted moves based on historical signals. Weekly synthesis of everything your market did and what it means for your store.
                </p>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', fontWeight: 300, lineHeight: 1.7, marginBottom: '20px' }}>
                  Every signal you generate right now is building the data foundation for this workspace. By the time it opens, your intelligence will already be weeks deep.
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['Pattern detection', 'Competitive pressure score', 'Predicted moves', 'Weekly market synthesis'].map((f, i) => (
                    <span key={i} style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: 'rgba(232,93,36,0.6)', border: '0.5px solid rgba(232,93,36,0.2)', background: 'rgba(232,93,36,0.05)', padding: '3px 8px', borderRadius: '4px' }}>{f}</span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.06)', margin: '20px 0' }} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#E85D24', opacity: 0.6 }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>
                  Available first to Commander members when launched
                </span>
              </div>
              <button
                onClick={() => setShowUpgradeModal(true)}
                style={{ background: 'transparent', border: '0.5px solid rgba(232,93,36,0.35)', color: 'rgba(232,93,36,0.8)', padding: '6px 14px', borderRadius: '4px', fontSize: '10px', fontFamily: "'DM Sans', sans-serif", cursor: 'pointer' }}>
                Get early access — Commander
              </button>
            </div>
          </div>
        </div>

        {/* REPORTS SECTION */}
        <div id="reports" style={{ scrollMarginTop: '20px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Reports</div>
          </div>
          {isPremium ? (
            <div style={{ background: 'rgba(8,8,8,0.7)', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '24px', backdropFilter: 'blur(8px)', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '14px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Weekly Intelligence Report</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontWeight: 300, lineHeight: 1.7, marginBottom: '12px' }}>Your weekly competitive intelligence report will be delivered every Monday to {userEmail}.</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(0,200,150,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00C896' }} />
                Active — next report Monday
              </div>
            </div>
          ) : (
            <div style={{ background: 'rgba(8,8,8,0.7)', border: '0.5px solid rgba(212,160,23,0.2)', borderRadius: '10px', padding: '24px', backdropFilter: 'blur(8px)' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: 'rgba(212,160,23,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Commander feature</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '14px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Weekly Intelligence Reports</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontWeight: 300, lineHeight: 1.7, marginBottom: '16px' }}>Every Monday, receive a full competitive intelligence briefing — price movements, new launches, category expansions, and strategic recommendations across all your competitors.</div>
              <button onClick={() => setShowUpgradeModal(true)} style={{ background: '#E85D24', color: '#fff', border: 'none', padding: '9px 20px', borderRadius: '4px', fontSize: '11px', fontWeight: 500, fontFamily: "'DM Sans', sans-serif", cursor: 'pointer' }}>
                Upgrade to Commander — $119/month
              </button>
            </div>
          )}
        </div>

       {/* ALERTS SECTION */}
        <div id="alerts" style={{ scrollMarginTop: '20px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Alerts</div>
            </div>
            <div style={{ background: 'rgba(8,8,8,0.7)', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '20px', backdropFilter: 'blur(8px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#fff', fontWeight: 500, marginBottom: '4px' }}>Email alerts</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>{userEmail}</div>
                </div>
                <div
                  onClick={() => isPremium && setAlertsEnabled(!alertsEnabled)}
                  style={{
                    width: '36px', height: '20px', borderRadius: '10px',
                    background: alertsEnabled && isPremium ? '#00C896' : 'rgba(255,255,255,0.1)',
                    border: `0.5px solid ${alertsEnabled && isPremium ? '#00C896' : 'rgba(255,255,255,0.15)'}`,
                    cursor: isPremium ? 'pointer' : 'not-allowed',
                    opacity: isPremium ? 1 : 0.5,
                    position: 'relative', transition: 'all 0.2s', flexShrink: 0
                  }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#fff', position: 'absolute', top: '2px', left: alertsEnabled && isPremium ? '19px' : '3px', transition: 'left 0.2s' }} />
                </div>
              </div>
              <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.06)', marginBottom: '14px' }} />
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 300, lineHeight: 1.7 }}>
                {!isPremium
                  ? 'Email alerts are part of Operator and Commander. Upgrade to get notified the moment a signal fires.'
                  : alertsEnabled
                    ? 'You will receive an email alert within 24 hours of any signal being detected across your tracked competitors.'
                    : 'Email alerts are currently disabled. Signals will still appear in your dashboard but you will not receive email notifications.'}
              </div>
            </div>
          </div>

        {/* SETTINGS SECTION */}
        <div id="settings" style={{ scrollMarginTop: '20px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Settings</div>
          </div>
          <div style={{ background: 'rgba(8,8,8,0.7)', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '20px', backdropFilter: 'blur(8px)' }}>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>Account email</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>{userEmail}</div>
            </div>
            <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.06)', marginBottom: '16px' }} />
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>Plan</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>{isPremium ? 'Commander — $119/month' : 'Scout — Free forever'}</div>
                {!isPremium && (
                  <button onClick={() => setShowUpgradeModal(true)} style={{ background: 'transparent', border: '0.5px solid rgba(0,200,150,0.4)', color: '#00C896', padding: '5px 12px', borderRadius: '4px', fontSize: '10px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Upgrade</button>
                )}
              </div>
            </div>
            <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.06)', marginBottom: '16px' }} />
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>Change password</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 300, marginBottom: '8px' }}>An email with a password reset link will be sent to your account email.</div>
              <button
                onClick={async () => {
                  await supabase.auth.resetPasswordForEmail(userEmail);
                  alert('Password reset email sent to ' + userEmail);
                }}
                style={{ background: 'transparent', border: '0.5px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)', padding: '7px 14px', borderRadius: '4px', fontSize: '11px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                Send reset email
              </button>
            </div>
            <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.06)', marginBottom: '16px' }} />
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>Delete account</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 300, marginBottom: '8px' }}>To delete your account and all associated data, email us at yagya@farwatchsignals.com with the subject line "Delete Account".</div>
              <a href="mailto:yagya@farwatchsignals.com?subject=Delete Account" style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(232,93,36,0.6)', textDecoration: 'none' }}>
                yagya@farwatchsignals.com →
              </a>
            </div>
          </div>
        </div>

        {/* Upgrade bar */}
        {!isPremium && (
          <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', background: 'rgba(0,200,150,0.05)', border: '0.5px solid rgba(0,200,150,0.2)', borderRadius: '8px', backdropFilter: 'blur(8px)' }}>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>
              Scout — tracking <strong style={{ color: '#fff', fontWeight: 500 }}>{competitors.length} of {maxAllowed}</strong> competitors. Upgrade to watch more.
            </span>
            <button onClick={() => setShowUpgradeModal(true)} style={{ background: '#00C896', color: '#080808', border: 'none', padding: '7px 14px', borderRadius: '4px', fontSize: '11px', fontWeight: 500, fontFamily: "'DM Sans', sans-serif", cursor: 'pointer' }}>
              Upgrade to Operator
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
