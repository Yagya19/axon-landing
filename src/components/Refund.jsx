import React from 'react';

export default function Refund() {
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
          style={{ cursor: 'pointer', marginBottom: '48px', display: 'inline-block' }}>
          <div style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: '15px', letterSpacing: '0.2em',
            color: '#fff', lineHeight: 1
          }}>
            FARWATCH<span style={{ color: '#D4A017' }}>.</span>
          </div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: '8px',
            color: 'rgba(0,200,150,0.7)', letterSpacing: '0.07em',
            marginTop: '4px'
          }}>
            See further. Move first.
          </div>
        </div>

        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: '9px',
          color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em',
          textTransform: 'uppercase', marginBottom: '8px'
        }}>Legal</div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontSize: '28px',
          fontWeight: 800, color: '#fff', marginBottom: '8px'
        }}>Refund Policy</h1>

        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: '10px',
          color: 'rgba(255,255,255,0.3)', marginBottom: '40px'
        }}>Last updated: July 2026</p>

        <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.06)', marginBottom: '40px' }} />

        {[
          {
            title: 'Our refund commitment',
            content: 'We want every FARWATCH customer to feel confident in their purchase. If FARWATCH does not deliver value for your business, we want to make it right. This policy explains when and how refunds are provided.'
          },
          {
            title: 'Free trial',
            content: 'FARWATCH offers a 14-day free trial with no credit card required. We strongly encourage you to use the full trial period to evaluate whether FARWATCH is right for your business before purchasing a paid plan. Because we offer a free trial, refunds are not automatically provided simply because you did not use the service during your paid period.'
          },
          {
            title: '7-day money back guarantee',
            content: 'If you upgrade to a paid plan and are not satisfied within the first 7 days of your first payment, you are entitled to a full refund. No questions asked. Simply email yagya@farwatchsignals.com within 7 days of your first payment with the subject line "Refund Request" and we will process your refund within 5 business days.'
          },
          {
            title: 'Refunds after 7 days',
            content: 'After the first 7 days of a paid subscription, refunds are handled on a case-by-case basis. We will consider refunds in situations where FARWATCH experienced significant technical failures that prevented you from accessing the service, where signals were consistently inaccurate due to a platform error on our side, or where you were charged incorrectly. We do not provide refunds for change of mind, failure to cancel before renewal, or dissatisfaction with publicly available competitor data that FARWATCH accurately reported.'
          },
          {
            title: 'Renewal charges',
            content: 'Your subscription renews automatically each month. If you wish to cancel, you must do so before your renewal date. If you are charged for a renewal you did not intend, contact us at yagya@farwatchsignals.com within 48 hours of the charge and we will review your case. We aim to be fair — if you genuinely forgot to cancel, we will work with you.'
          },
          {
            title: 'How to request a refund',
            content: 'Email yagya@farwatchsignals.com with the subject line "Refund Request". Include your account email address and the reason for your request. We will respond within 2 business days and process approved refunds within 5 business days. Refunds are returned to the original payment method.'
          },
          {
            title: 'Contact',
            content: 'For any questions about refunds, contact us at yagya@farwatchsignals.com. We genuinely want you to be happy with FARWATCH and will always try to find a fair resolution.'
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
          © 2026 FARWATCH — See further. Move first.
        </p>

      </div>
    </div>
  );
}
