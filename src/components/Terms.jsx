import React from 'react';

export default function Terms() {
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
        }}>Terms of Service</h1>

        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: '10px',
          color: 'rgba(255,255,255,0.3)', marginBottom: '40px'
        }}>Last updated: July 2026</p>

        <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.06)', marginBottom: '40px' }} />

        {[
          {
            title: 'Agreement to terms',
            content: 'By accessing or using FARWATCH at farwatchsignals.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the service. These terms apply to all users including free trial users and paid subscribers.'
          },
          {
            title: 'What FARWATCH provides',
            content: 'FARWATCH is a competitor intelligence platform that monitors public Shopify store data including pricing, product launches, and category changes. All data monitored by FARWATCH is publicly available information. FARWATCH does not access any private, password-protected, or non-public data from any store.'
          },
          {
            title: 'Free trial',
            content: 'FARWATCH offers a 14-day free trial with access to 2 competitor slots and all three signal types. No credit card is required to start a free trial. At the end of the trial period, your account will remain accessible but monitoring will pause until you upgrade to a paid plan.'
          },
          {
            title: 'Paid subscriptions',
            content: 'Paid plans are billed monthly. Your subscription begins on the date of payment and renews automatically each month unless cancelled. You may cancel at any time before your next renewal date to avoid being charged for the following month. All prices are in USD.'
          },
          {
            title: 'Acceptable use',
            content: 'You may use FARWATCH only for lawful purposes and in accordance with these terms. You agree not to use FARWATCH to monitor any store without legitimate business reason, to attempt to reverse-engineer or copy the FARWATCH platform, to resell or redistribute FARWATCH intelligence data, or to use the service in any way that violates applicable laws or regulations.'
          },
          {
            title: 'Data accuracy',
            content: 'FARWATCH monitors publicly available data from Shopify stores. While we aim to provide accurate and timely intelligence, we do not guarantee the completeness, accuracy, or timeliness of any data. Signals are detected based on changes observed during our monitoring cycles and may not capture every change in real time. Business decisions made based on FARWATCH data are solely your responsibility.'
          },
          {
            title: 'Intellectual property',
            content: 'FARWATCH and all associated content, features, and functionality are owned by FARWATCH and are protected by applicable intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from any part of the FARWATCH platform without our express written permission.'
          },
          {
            title: 'Limitation of liability',
            content: 'FARWATCH is provided on an "as is" basis without warranties of any kind. To the maximum extent permitted by law, FARWATCH shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service, including but not limited to lost profits, lost revenue, or business decisions made based on FARWATCH data.'
          },
          {
            title: 'Service availability',
            content: 'We aim to maintain high availability of the FARWATCH platform but do not guarantee uninterrupted service. We may suspend or discontinue the service at any time with reasonable notice. In the event of a planned service discontinuation, we will provide at least 30 days notice by email.'
          },
          {
            title: 'Account termination',
            content: 'We reserve the right to suspend or terminate your account if you violate these terms, engage in fraudulent activity, or use the service in a way that harms other users or the platform. You may delete your account at any time by emailing yagya@farwatchsignals.com.'
          },
          {
            title: 'Changes to terms',
            content: 'We may update these terms from time to time. We will notify you of material changes by email at least 14 days before they take effect. Continued use of FARWATCH after that date constitutes acceptance of the updated terms.'
          },
          {
            title: 'Governing law',
            content: 'These terms are governed by applicable law. Any disputes arising from these terms or your use of FARWATCH shall be resolved through good faith negotiation. If negotiation fails, disputes shall be subject to binding arbitration.'
          },
          {
            title: 'Contact',
            content: 'For any questions about these terms, contact us at yagya@farwatchsignals.com. We aim to respond within 7 business days.'
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
