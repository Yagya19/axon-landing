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
    <div style={{
      width: '16px', height: '16px', borderRadius: '50%',
      border: `0.5px solid ${color ? color + '44' : 'rgba(255,255,255,0.2)'}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0, marginTop: '1px'
    }}>
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
      strategicNote: priceIntel?.strategicNote || "AXON monitors price changes across all tracked products and alerts you within 24 hours of any movement.",
      tactical: priceIntel?.tactical || "No action needed yet — monitoring is active.",
      tacticalNote: priceIntel?.tacticalNote || "Price baselines are refreshed every 24 hours. First change detected will appear here immediately.",
      action: priceIntel?.action || "Monitoring active. Alerts fire automatically when prices change.",
      tags: priceIntel?.tags || ["Monitoring active", "No changes yet"]
    },
    product: {
      label: 'New products launched',
      strategic: productSignals.length > 0
        ? "Multiple new launches suggest a planned collection drop. They are building momentum toward a campaign — this is coordinated, not ad hoc."
        : "Product catalog baselines are set. Any new product your competitors add will appear here within 24 hours of launch.",
      strategicNote: productSignals.length > 0
        ? "Coordinated multi-product launches typically precede paid ad campaigns by 10–14 days. Watch for ad spend to follow."
        : "AXON scans each competitor's full product catalog daily and detects new handles the moment they appear.",
      tactical: productSignals.length > 0
        ? "Watch their ad spend over the next 2 weeks. If paid campaigns follow, it confirms a full push — and tells you which products they are betting on."
        : "No action needed yet. You will be notified immediately when a competitor adds new products.",
      tacticalNote: productSignals.length > 0
        ? "New products without immediate ad support are usually tests. Products backed by ads within 14 days are real strategic bets."
        : "Catalog scans run every 24 hours. New product alerts fire the same day they are detected.",
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
      strategicNote: categorySignals.length > 0
        ? "New category launches require inventory investment and catalog restructuring — a signal of deliberate strategic commitment, not experimentation."
        : "AXON tracks all collection pages across competitor stores and detects new categories the day they appear.",
      tactical: categorySignals.length > 0
        ? "You have a narrow window before they establish authority in this category. If it overlaps with your strengths, move now."
        : "No action needed yet. You will be notified immediately when a competitor launches a new category.",
      tacticalNote: categorySignals.length > 0
        ? "Category authority is typically established within 60–90 days of launch. Acting in the first 30 days maximises your competitive position."
        : "Category scans run every 24 hours. New category alerts fire the same day they are detected.",
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

        <div style={{
          background: `radial-gradient(ellipse at top left, ${activeColor}11, transparent 60%)`,
          border: `0.5px solid ${activeColor}44`,
          borderRadius: '14px', padding: '20px', marginBottom: '14px', transition: 'all 0.2s'
        }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: activeColor, letterSpacing:
