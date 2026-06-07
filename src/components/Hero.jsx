import React from 'react';

const signals = [
  {
    type: 'urgent',
    label: 'Urgent signal',
    labelColor: '#FF0000',
    border: 'rgba(255,0,0,0.25)',
    bg: 'rgba(255,0,0,0.04)',
    title: 'Competitor dropped hero product price 20%',
    conf: '98%',
    confColor: '#FF0000',
    desc: 'Pricing page change detected 14 mins ago. Simultaneous homepage copy shift detected.',
    action: '→ Do not match price. Strengthen your positioning now.'
  },
  {
    type: 'live',
    label: 'Live signal',
    labelColor: '#00C896',
    border: 'rgba(0,200,150,0.25)',
    bg: 'rgba(0,200,150,0.04)',
    title: 'Competitor hiring 3 paid ads roles simultaneously',
    conf: '91%',
    confColor: '#00C896',
    desc: 'Senior Paid Ads Manager, Performance Lead, Creative Strategist. All urgent listings.',
    action: '→ Accelerate SEO and email capture now.'
  },
  {
    type: 'strategic',
    label: 'Strategic movement',
    labelColor: '#D4A017',
    border: 'rgba(212,160,23,0.2)',
    bg: 'rgba(212,160,23,0.03)',
    title: 'New subscription bundle — testing recurring revenue',
    conf: '87%',
    confColor: '#D4A017',
    desc: '3-product kit launched. Early test. Monitor 30 days before responding.',
    action: null
  },
];

export default function Hero() {
  return (
    <section style={{
      padding: '56px 32px 48px',
      position: 'relative',
      borderBottom: '0.5px solid rgba
