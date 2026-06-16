import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Guided Living Care Plan — Narpavi Homecare',
  description: 'Steady daily care for adults managing chronic illnesses and special needs in Chennai. Structured routines, vitals checking, and daily care logs.',
  alternates: { canonical: 'https://www.narpavihomecare.com/services/guided-living' },
};

export default function GuidedLivingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Home Nursing Care', href: '/home-nursing-care' }, { label: 'Guided Living' }]} />
      <section className="section" style={{ marginTop: 0 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1>Guided Living</h1>
          <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Steady Care for Everyday Life</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            The Guided Living package is designed to provide structured, daily routines for adults living with chronic illnesses or mild neurological conditions. It ensures medications are managed correctly, vitals are tracked systematically, and daily living routines are kept safe.
          </p>

          <h3 style={{ marginBottom: '1rem' }}>Best For:</h3>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <li style={{ listStyle: 'disc' }}>Adults with chronic illnesses (diabetes, hypertension, asthma) needing safe routine care</li>
            <li style={{ listStyle: 'disc' }}>Early neurological conditions (Parkinson&apos;s, mild stroke recovery, MS)</li>
            <li style={{ listStyle: 'disc' }}>Adults with special needs requiring structured daily support</li>
          </ul>

          <h3 style={{ marginBottom: '1.25rem' }}>Scope of Service:</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { t: 'Activities of Daily Living (ADLs)', d: 'Full ADL assistance including toileting and mobility.' },
              { t: 'Medication management', d: 'Structured reminders and scheduled routine check-ins.' },
              { t: 'Daily Vitals Tracking', d: 'Daily logging of vitals (BP, SpO2, temp) with supervisor review.' },
              { t: 'Family Updates', d: 'Daily updates and WhatsApp logs for families.' },
              { t: 'Post-Hospital Care', d: 'Structured post-discharge routine implementation.' },
              { t: 'Emergency backup', d: '24x7 nurse helpline access for immediate escalations.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '1.25rem' }}>
                <h4 style={{ color: 'var(--primary-dark)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{item.t}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.d}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--primary-light)', padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Start Guided Living Care?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Reliable support to avoid hospital readmissions and manage chronic symptoms safely. Book today.</p>
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
