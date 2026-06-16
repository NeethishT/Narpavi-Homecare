import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import FAQAccordion from '@/components/sections/FAQAccordion';
import CTAForm from '@/components/ui/CTAForm';
import SiteIcon from '@/components/ui/SiteIcon';

export const metadata: Metadata = {
  title: 'Elder Care Services in Chennai — Narpavi Homecare',
  description: 'Trained elderly care and companion services in Chennai. We provide geriatric ADL support, dementia companionship, safe mobility and nurse oversight.',
  keywords: ['elder care chennai', 'home care for seniors chennai', 'dementia care seniors', 'geriatric nursing home care'],
  alternates: { canonical: 'https://www.narpavihomecare.com/elder-care' },
};

const ELDER_FAQS = [
  { id: 1, question: 'What is included in home Elder Care?', answer: 'Elder Care covers non-medical support for daily living (bathing, dressing, grooming, feeding), mobility assistance to prevent falls, medication reminders, companionship, and daily updates to families.' },
  { id: 2, question: 'Can the caregiver stay 24/7?', answer: "Yes, we provide 8-hour, 12-hour, and 24-hour live-in options depending on the senior's needs." },
];

export default function ElderCarePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Elder Care' }]} />
      <section className="hero" style={{ marginTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="hero__badge"><SiteIcon name="Elder Care" size={16} /> Dignified Care for Seniors</div>
              <h1 className="hero__title">
                Professional <span>Elder Care Services</span> in Chennai
              </h1>
              <p className="hero__subtitle">
                Keep your elderly parents safe, healthy, and happy in the comfort of their home with trained, nurse-supervised caregivers.
              </p>
              <div className="hero__cta-group">
                <a href={BRAND.phoneHref} className="btn btn--secondary btn--lg"><SiteIcon name="Phone" size={18} /> Call {BRAND.phone}</a>
                <Link href="/contact" className="btn btn--primary btn--lg">Book Assessment</Link>
              </div>
            </div>
            <CTAForm title="Book Senior Care Assessment" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2>Helping Seniors Lead Independent Lives</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            As our parents age, daily routines can become risk factors for falls or medication errors. Our Senior Care program focuses on safety and independence, providing trained companion caregivers supervised by nurses, which is ideal for NRI families looking for reliable care for parents in Chennai.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { title: 'Geriatric Daily Living (ADLs) Assistance', desc: 'Bathing support, dressing, grooming, and safe toileting hygiene with complete respect.' },
              { title: 'Active Fall Prevention & Mobility Support', desc: 'Supervised indoor walks, physical exercises, and safe transfers from bed to chair.' },
              { title: 'Medication Tracking & Reminders', desc: 'Strict tracking of medical dosage timing, logging vitals, and doctor update reporting.' },
              { title: 'Dementia & Cognitive Companion Support', desc: 'Patient companion care to keep seniors mentally active, reducing anxiety and loneliness.' },
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

          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Elder Care FAQs</h3>
            <FAQAccordion faqs={ELDER_FAQS} />
          </div>

          <div style={{ background: 'var(--primary-light)', padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Arrange Care for Your Parents?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>We provide real-time daily WhatsApp updates to keep you informed, wherever you are.</p>
            <Link href="/contact" className="btn btn--primary">Get Free Assessment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
