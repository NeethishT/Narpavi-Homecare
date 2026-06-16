import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import CTAForm from '@/components/ui/CTAForm';
import SiteIcon from '@/components/ui/SiteIcon';

export const metadata: Metadata = {
  title: 'Baby Care Services at Home in Chennai — Narpavi Homecare',
  description: 'Expert home baby care services in Chennai. Neonatal support, newborn feeding help, baby massage, and new mother postpartum assistance by trained caregivers.',
  keywords: ['baby care at home chennai', 'newborn baby care', 'postnatal mother care', 'infant care services'],
  alternates: { canonical: 'https://www.narpavihomecare.com/home-nursing-care/baby-care' },
};

export default function BabyCarePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Home Nursing Care', href: '/home-nursing-care' }, { label: 'Baby Care' }]} />
      <section className="hero" style={{ marginTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="hero__badge"><SiteIcon name="Baby Care" size={16} /> Newborn & Mother Postnatal Support</div>
              <h1 className="hero__title">
                Professional <span>Baby Care Services</span> at Home in Chennai
              </h1>
              <p className="hero__subtitle">
                Expert neonatal care and maternal support to ensure a safe, comfortable, and stress-free transition for your family.
              </p>
              <div className="hero__cta-group">
                <a href={BRAND.phoneHref} className="btn btn--secondary btn--lg"><SiteIcon name="Phone" size={18} /> Call {BRAND.phone}</a>
                <Link href="/contact" className="btn btn--primary btn--lg">Book Assessment</Link>
              </div>
            </div>
            <CTAForm title="Book Baby Care Assessment" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2>Comprehensive Baby & Mother Care</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Welcoming a newborn brings immense joy, but the first few weeks can be challenging. Our trained baby care assistants provide dedicated support for infant hygiene, feeding schedules, soothing techniques, and maternal postpartum recovery, ensuring your baby is safe and thriving.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { title: 'Newborn Feeding & Hydration Support', desc: 'Assisting with latching, bottle feeding preparation, sterilization, and burping routines.' },
              { title: 'Infant Bathing & Massage', desc: 'Safe bathing practices, cord care, gentle baby massages, and diapering hygiene.' },
              { title: 'Sleep Training & Soothing', desc: 'Establishing healthy sleep cycles, recognizing hunger cues, and soothing colicky babies.' },
              { title: 'Maternal Postnatal Support', desc: 'Light assistance for new mothers, hydration reminders, and mental companion support.' },
            ].map((item, i) => (
              <div key={i} className="trust-card">
                <div className="trust-card__icon"><SiteIcon name={item.title} /></div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--primary-light)', padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Need Baby Care Support?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Our team is ready to design a custom package for part-time visits or round-the-clock live-in support.</p>
            <Link href="/contact" className="btn btn--primary">Get Free Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
