Let's update Dashboard.jsx with all three fixes. Replace the entire file with this:
jsximport React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://bnristmagxfutjgthgpd.supabase.co',
  'sb_publishable_ifLgjBC5vTtV7BJBfCNmyA_Sm54QueW'
);

export default function Dashboard() {
  const [competitors, setCompetitors] = useState([]);
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        window.location.href = '/login';
        return;
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('is_premium')
        .eq('id', user.id)
        .single();
      setIsPremium(profile?.is_premium || false);

      const { data: comps } = await supabase
        .from('competitors')
        .select('*')
        .eq('user_email', user.email);
      setCompetitors(comps || []);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div style={{
        background: '#080808', minHeight: '100vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Mono', monospace", fontSize: '12px'
      }}>Loading your dashboard...</div>
    );
  }

  const maxAllowed = isPremium ? 7 : 2;
  const trackedWithPrice = competitors.filter(c => c.last_snapshot?.price);
  const heroComp = trackedWithPrice[0];

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
        {heroComp && (
          <div style={{
            background: 'radial-gradient(ellipse at top left, rgba(255,0,0,0.07), transparent 60%)',
            border: '0.5px solid rgba(255,0,0,0.2)', borderRadius: '14px',
            padding: '20px', marginBottom: '14px'
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px', color: '#FF0000',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '9px',
              display: 'flex', alignItems: 'center', gap: '6px'
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF0000' }} />
              Latest price tracked
            </div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '38px', fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: '4px' }}>
              ${heroComp.last_snapshot.price}
            </div>
            <div style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.45)', fontWeight: 300, marginBottom: '12px' }}>
              <strong style={{ color: 'rgba(255,255,255,0.75)' }}>{heroComp.last_snapshot.product_title}</strong> — tracked on {heroComp.url.replace('https://', '').replace('www.', '')}
            </div>
            <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.08)', marginBottom: '12px' }} />
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: '#D4A017', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
              What to watch for
            </div>
            <div style={{ fontSize: '12.5px', color: '#fff', fontWeight: 500, lineHeight: 1.5 }}>
              You'll be alerted the moment this price changes — before your customers notice.
            </div>
          </div>
        )}

        {/* Three counters */}
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
          This week, at a glance
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '16px' }}>
          {[
            { num: trackedWithPrice.length, label: 'prices tracked', color: '#FF0000' },
            { num: 0, label: 'new products', color: '#00C896' },
            { num: 0, label: 'new categories', color: '#D4A017' }
          ].map((item, i) => (
            <div key={i} style={{
              background: '#0a0a0a', border: '0.5px solid rgba(255,255,255,0.07)',
              borderRadius: '8px', padding: '13px 10px', textAlign: 'center'
            }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: 800, color: item.color, lineHeight: 1, marginBottom: '5px' }}>
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

        {competitors.length === 0 ? (
          <div style={{ background: '#0a0a0a', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '30px 20px', textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '16px' }}>No competitors added yet.</p>
            <button onClick={() => window.location.href = '/competitors'} style={{
              background: '#D4A017', color: '#080808', border: 'none',
              padding: '10px 20px', borderRadius: '4px', fontSize: '12px',
              fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif"
            }}>Add competitors</button>
          </div>
        ) : (
          competitors.map((comp, i) => (
            <div key={i} style={{
              marginBottom: '10px', padding: '13px 14px', background: '#0a0a0a',
              borderRadius: '8px', border: '0.5px solid rgba(255,255,255,0.06)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '12px', fontWeight: 500, color: '#fff' }}>
                  {comp.url.replace('https://', '').replace('www.', '')}
                </span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>
                  {comp.last_snapshot ? '1 signal tracked' : '0 signals yet'}
                </span>
              </div>

              {comp.last_snapshot ? (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '4px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF0000', flexShrink: 0 }} />
                    <span style={{ fontSize: '11.5px', color: 'rgba(255,255,255,0.8)', fontWeight: 300, flex: 1 }}>
                      {comp.last_snapshot.product_title} — <strong style={{ color: '#fff' }}>${comp.last_snapshot.price}</strong>
                    </span>
                  </div>
                  <p style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.4)', fontWeight: 300, paddingLeft: '15px' }}>
                    <strong style={{ color: 'rgba(255,255,255,0.6)' }}>Likely:</strong> baseline set. You'll be alerted when this price changes.
                  </p>
                </div>
              ) : (
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>
                  No signals detected yet — first scan in progress.
                </p>
              )}
            </div>
          ))
        )}

        {/* Upgrade bar */}
        {!isPremium && (
          <div style={{
            marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '12px 14px', background: 'rgba(212,160,23,0.06)',
            border: '0.5px solid rgba(212,160,23,0.25)', borderRadius: '8px'
          }}>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>
              Free trial — tracking <strong style={{ color: '#fff', fontWeight: 500 }}>{competitors.length} of {maxAllowed}</strong> possible competitors
            </span>
            <button style={{
              background: '#D4A017', color: '#080808', border: 'none',
              padding: '7px 14px', borderRadius: '4px', fontSize: '11px',
              fontWeight: 500, fontFamily: "'DM Sans', sans-serif", cursor: 'pointer'
            }}>Upgrade</button>
          </div>
        )}

      </div>
    </div>
  );
}
