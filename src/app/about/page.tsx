import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Narpavi Homecare - professional home healthcare services in Chennai.',
  alternates: { canonical: 'https://www.narpavihomecare.com/about' },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
      <section className="section" id="about-page" style={{ marginTop: 0 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ marginBottom: '1.5rem' }}>About Narpavi Homecare</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            Narpavi Homecare was founded with a simple mission: to bring hospital-grade care to the comfort of your home. Based in Chennai, we provide nurse-supervised, doctor-overseen Basic Nursing Care services for adults who need daily living support.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            Every caregiver in our team is background-verified, medically screened, and trained in ADL support, WHO hygiene protocols, vital monitoring, and emergency escalation.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '2rem' }}>
            Whether you are a family in Chennai or an NRI arranging care from abroad, Narpavi Homecare keeps you informed with daily care logs, WhatsApp updates, and a 24x7 nurse helpline.
          </p>
          <div className="text-center">
            <Link href="/contact" className="btn btn--primary btn--lg">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}