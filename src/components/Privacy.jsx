import React from 'react';

export default function Privacy() {
  return (
    <div style={{
      background: '#080808',
      minHeight: '100vh',
      fontFamily: "'DM Sans', sans-serif",
      padding: '48px 32px'
    }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>

        {/* Logo */}
        <div
          onClick={() => window.location.href = '/'}
          style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: '15px', letterSpacing: '0.2em',
            color: '#fff', cursor: 'pointer', marginBottom: '48px',
            display: 'inline-block'
          }}>
          AXON<span style={{ color: '#D4A017' }}>.</span>
        </div>

        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: '9px',
          color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em',
          textTransform: 'uppercase', marginBottom: '8px'
        }}>Legal</div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontSize: '28px',
          fontWeight: 800, color: '#fff', marginBottom: '8px'
        }}>Privacy Policy</h1>

        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: '10px',
          color: 'rgba(255,255,255,0.3)', marginBottom: '40px'
        }}>Last updated: July 2026</p>

        <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.06)', marginBottom: '40px' }} />

        {[
          {
            title: 'Who we are',
            content: 'AXON is a competitor intelligence platform for Shopify founders. We monitor competitor prices, product launches, and category changes and deliver that intelligence directly to your dashboard and inbox. AXON is operated as an independent product. For any privacy-related questions, contact us at yagyadeepsharma19@gmail.com.'
          },
          {
            title: 'What data we collect',
            content: 'We collect only what is necessary for the product to work. This includes your email address — used to create your account, verify your identity, and deliver competitor alerts. We also store the competitor URLs and product handles you add to your account, and the signals AXON detects from those competitors. We do not collect your name, phone number, payment details on our servers, or any information about your own store beyond what you choose to share.'
          },
          {
            title: 'Why we collect it',
            content: 'Your email is collected under legitimate interest — it is a functional necessity. Without it, you cannot log in, access your dashboard, or receive alerts. There is no other reason we hold your email. We do not use it for marketing, we do not sell it, and we do not share it with third parties.'
          },
          {
            title: 'How we use your data',
            content: 'Your email is used exclusively to authenticate your account and deliver competitor intelligence alerts when AXON detects a signal. Your competitor URLs are used to run our monitoring scripts. Signal data is stored so your dashboard can display your intelligence history. Nothing else.'
          },
          {
            title: 'Where your data is stored',
            content: 'Your data is stored in Supabase, a third-party database provider with servers based in the United States. By using AXON, you acknowledge that your data may be transferred to and stored in the US. Supabase is compliant with industry-standard security practices. You can review their privacy policy at supabase.com/privacy.'
          },
          {
            title: 'How long we keep your data',
            content: 'We keep your data for as long as your account is active. If you delete your account, your email, competitor data, and signal history will be permanently deleted within 30 days. To request account deletion, email us at yagyadeepsharma19@gmail.com.'
          },
          {
            title: 'Your rights',
            content: 'You have the right to access the data we hold about you, correct any inaccuracies, request deletion of your data, and withdraw from the service at any time. To exercise any of these rights, email us at yagyadeepsharma19@gmail.com. We will respond within 7 days.'
          },
          {
            title: 'Cookies',
            content: 'AXON does not use tracking cookies or advertising cookies. We use only functional session cookies required for authentication — these are essential for you to stay logged in. We do not use Google Analytics, Facebook Pixel, or any third-party tracking tools.'
          },
          {
            title: 'Third party services',
            content: 'AXON uses Supabase for database and authentication, and Resend for transactional email delivery. Both are used solely to operate the product. Neither is used for advertising or data monetisation. We do not share your data with any other third parties.'
          },
          {
            title: 'Changes to this policy',
            content: 'If we make material changes to this policy, we will notify you by email at least 14 days before the changes take effect. Continued use of AXON after that date constitutes acceptance of the updated policy.'
          },
          {
            title: 'Contact',
            content: 'For any privacy-related questions or requests, contact us at yagyadeepsharma19@gmail.com. We aim to respond within 7 business days.'
          }
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: '32px' }}>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontSize: '14px',
              fontWeight: 800, color: '#fff', marginBottom: '10px'
            }}>{section.title}</h2>
            <p style={{
              fontSize: '13px', color: 'rgba(255,255,255,0.5)',
              fontWeight: 300, lineHeight: 1.8
            }}>{section.content}</p>
          </div>
        ))}

        <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.06)', marginBottom: '32px' }} />

        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: '10px',
          color: 'rgba(255,255,255,0.2)', textAlign: 'center'
        }}>
          © 2026 AXON — The signal reaches you first
        </p>

      </div>
    </div>
  );
}
