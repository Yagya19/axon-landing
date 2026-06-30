import React, { useState, useEffect } from 'react';
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
        alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)',
        fontFamily: "'DM Mono', monospace", fontSize: '12px'
      }}>Loading your dashboard...</div>
    );
  }

  const maxAllowed = isPremium ? 7 : 2;

  return (
    <div style={{ background: '#080808', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", padding: '24px' }}>
      <div style={{ maxWidth: '480px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
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

        {competitors.length === 0 ? (
          <div style={{
            background: '#0a0a0a', border: '0.5px solid rgba(255,255,255,0.08)',
            borderRadius: '10px', padding: '30px 20px', textAlign: 'center'
          }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '16px' }}>
              You haven't added any competitors yet.
            </p>
            <button
              onClick={() => window.location.href = '/competitors'}
              style={{
                background: '#D4A017', color: '#080808', border: 'none',
                padding: '10px 20px', borderRadius: '4px', fontSize: '12px',
                fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif"
              }}
            >Add competitors</button>
          </div>
        ) : (
          <>
            <div style={{
              background: '#0a0a0a', border: '0.5px solid rgba(255,255,255,0.08)',
              borderRadius: '10px', padding: '20px', marginBottom: '16px', textAlign: 'center'
            }}>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '12px', fontWeight: 300, lineHeight: 1.6 }}>
                AXON is now monitoring your competitors. New signals will appear here as they're detected — usually within 24 hours of your first scan.
              </p>
            </div>

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px'
            }}>By competitor</div>

            {competitors.map((comp, i) => (
              <div key={i} style={{
                marginBottom: '10px', padding: '13px 14px', background: '#0a0a0a',
                borderRadius: '8px', border: '0.5px solid rgba(255,255,255,0.06)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 500, color: '#fff' }}>{comp.url.replace('https://', '').replace('www.', '')}</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>
                    Added {new Date(comp.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>
                  No signals detected yet — first scan in progress.
                </p>
              </div>
            ))}

            {!isPremium && (
              <div style={{
                marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '12px 14px', background: 'rgba(212,160,23,0.06)',
                border: '0.5px solid rgba(212,160,23,0.25)', borderRadius: '8px'
              }}>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>
                  On the free trial — tracking <strong style={{ color: '#fff', fontWeight: 500 }}>{competitors.length} of {maxAllowed}</strong> possible competitors
                </span>
                <button style={{
                  background: '#D4A017', color: '#080808', border: 'none', padding: '7px 14px',
                  borderRadius: '4px', fontSize: '11px', fontWeight: 500, fontFamily: "'DM Sans', sans-serif", cursor: 'pointer'
                }}>Upgrade</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
