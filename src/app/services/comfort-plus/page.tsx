import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Comfort Plus Care Plan — Narpavi Homecare',
  description: 'Complete non-clinical bedside care for bedridden patients in Chennai. Palliative presence, pressure sore prevention, and daily supervisor audits.',
  alternates: { canonical: 'https://www.narpavihomecare.com/services/comfort-plus' },
};

export default function ComfortPlusPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Home Nursing Care', href: '/home-nursing-care' }, { label: 'Comfort Plus' }]} />
      <section className="section" style={{ marginTop: 0 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1>Comfort Plus</h1>
          <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Complete Care for Bedridden Patients</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            The Comfort Plus package provides total bedside assistance for patients who are bedbound due to progressive illness, chronic neurological conditions, or post-ICU recovery. It prioritizes skin integrity, nutritional intake, and absolute safety, with oversight from clinical supervisors.
          </p>

          <h3 style={{ marginBottom: '1rem' }}>Best For:</h3>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <li style={{ listStyle: 'disc' }}>Bedridden adults with long-term illness not needing invasive clinical nursing</li>
            <li style={{ listStyle: 'disc' }}>Non-clinical palliative comfort and hospice presence</li>
            <li style={{ listStyle: 'disc' }}>Post-ICU discharge adults requiring total daily living support</li>
          </ul>

          <h3 style={{ marginBottom: '1.25rem' }}>Scope of Service:</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { t: 'Complete Bedside Hygiene', d: 'Daily bed bathing, sponge cleaning, skin lubrication, and dressing.' },
              { t: 'Pressure Sore Prevention', d: 'Regular positional changes, air mattress checks, and skin inspection.' },
              { t: 'Bedside Feeding Assistance', d: 'Gentle spoon feeding, hydration tracking, and comfort meal serving.' },
              { t: 'Strict Vitals Logging', d: 'Scheduled Temp, BP, Pulse, SpO2 monitoring with supervisor audits.' },
              { t: 'Dignified Comfort Presence', desc: 'Bedside companionship and emotional comfort support.' },
              { t: 'Clinical Supervisor Review', d: 'Care plans reviewed regularly by nurse supervisors.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '1.25rem' }}>
                <h4 style={{ color: 'var(--primary-dark)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{item.t}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.d}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--primary-light)', padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Arrange Comfort Plus Care?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Provide maximum comfort and medical oversight for your loved one. Let&apos;s schedule a nurse assessment.</p>
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
