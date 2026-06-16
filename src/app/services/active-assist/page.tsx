import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Active Assist Care Plan — Narpavi Homecare',
  description: 'Gentle support for mobile patients recovering at home in Chennai. Ideal for post-surgery, fractures, new mothers and light daily assistance.',
  alternates: { canonical: 'https://www.narpavihomecare.com/services/active-assist' },
};

export default function ActiveAssistPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Home Nursing Care', href: '/home-nursing-care' }, { label: 'Active Assist' }]} />
      <section className="section" style={{ marginTop: 0 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1>Active Assist</h1>
          <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Gentle Support for Faster Recovery</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            The Active Assist package provides affordable, short-term daily living help for adults who are recovering from surgery or temporary injuries but remain relatively independent. It focuses on gentle assistance with mobility, medication reminders, and vital monitoring to help you heal safely at home.
          </p>

          <h3 style={{ marginBottom: '1rem' }}>Best For:</h3>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <li style={{ listStyle: 'disc' }}>Post-surgery recovery (orthopedic, laparoscopic, minor procedures)</li>
            <li style={{ listStyle: 'disc' }}>Young adults with temporary mobility issues (fractures, sports injuries)</li>
            <li style={{ listStyle: 'disc' }}>New mothers needing light postpartum help</li>
          </ul>

          <h3 style={{ marginBottom: '1.25rem' }}>Scope of Service:</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { t: 'Activities of Daily Living (ADLs)', d: 'Light help with bathing, dressing, and grooming.' },
              { t: 'Mobility Support', d: 'Short supervised walks and safe transfers.' },
              { t: 'Nutrition Support', d: 'Feeding assistance and hydration monitoring.' },
              { t: 'Medication reminders', d: 'Timely reminders for oral medications.' },
              { t: 'Basic Vital Monitoring', d: 'Daily Temp, BP, Pulse, SpO2 checks and logs.' },
              { t: 'Safety & Fall Prevention', d: 'Home environment checks to prevent slips.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '1.25rem' }}>
                <h4 style={{ color: 'var(--primary-dark)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{item.t}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.d}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--primary-light)', padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Start Active Assist Support?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Recover safely at home without expensive hospital stays. Book a free assessment today.</p>
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
