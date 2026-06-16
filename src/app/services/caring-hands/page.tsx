import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Caring Hands Care Plan — Narpavi Homecare',
  description: 'Hands-on mobility and ADL care at home in Chennai. Ideal for stroke recovery, accident rehabilitation and long-term physical disabilities.',
  alternates: { canonical: 'https://www.narpavihomecare.com/services/caring-hands' },
};

export default function CaringHandsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Home Nursing Care', href: '/home-nursing-care' }, { label: 'Caring Hands' }]} />
      <section className="section" style={{ marginTop: 0 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1>Caring Hands</h1>
          <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Dependable Support for Mobility Needs</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            The Caring Hands package is specialized for individuals with severely limited mobility. It focuses heavily on safe transfers, active repositioning to prevent bed sores, and comprehensive assistance with daily living routines.
          </p>

          <h3 style={{ marginBottom: '1rem' }}>Best For:</h3>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <li style={{ listStyle: 'disc' }}>Stroke recovery after initial clinical rehabilitation</li>
            <li style={{ listStyle: 'disc' }}>Long recovery after accidents, fractures, or trauma</li>
            <li style={{ listStyle: 'disc' }}>Adults with long-term disabilities needing hands-on ADL assistance</li>
          </ul>

          <h3 style={{ marginBottom: '1.25rem' }}>Scope of Service:</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { t: 'Hands-on ADL Assistance', d: 'Full daily living care including safe bathing, dressing, and toilet transfers.' },
              { t: 'Active Repositioning', d: 'Preventing pressure sores through regular repositioning and skin checks.' },
              { t: 'Nutrition Support', d: 'Full feeding assistance and customized meal planning coordination.' },
              { t: 'Medication Safety', d: 'Strict reminder scheduling, vitals logging, and safety reporting.' },
              { t: 'Palliative Comfort', d: 'Comfort routines and peaceful companion presence.' },
              { t: 'Emergency Guidance', d: '24x7 backup and supervisor-guided nurse escalation.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '1.25rem' }}>
                <h4 style={{ color: 'var(--primary-dark)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{item.t}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.d}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--primary-light)', padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Get Caring Hands Mobility Support?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Provide dignified, safe, and professional care for your loved one. Request an assessment today.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/contact" className="btn btn--primary">Book Free Assessment</Link>
              <a href={BRAND.phoneHref} className="btn btn--outline">Call Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}