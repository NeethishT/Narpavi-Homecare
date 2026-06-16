import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy — Narpavi Homecare',
  alternates: { canonical: 'https://www.narpavihomecare.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
      <section className="section" style={{ marginTop: 0 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ marginBottom: '1.5rem' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Narpavi Homecare respects your privacy and is committed to protecting the personal and medical data of our clients and caregivers. This policy describes how we collect, store, and utilize information during assessment bookings and care services.
          </p>
          <h3 style={{ margin: '1.5rem 0 0.75rem' }}>1. Data Collection</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1rem' }}>
            We collect contact info (name, phone, address) and health history details during assessment forms to customize home care plans.
          </p>
          <h3 style={{ margin: '1.5rem 0 0.75rem' }}>2. Data Safety</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1rem' }}>
            Daily care logs, WhatsApp reports, and supervisor records are strictly private and shared only with verified family members.
          </p>
        </div>
      </section>
    </>
  );
}