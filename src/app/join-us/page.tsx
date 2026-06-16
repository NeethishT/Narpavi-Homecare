import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Join Us as a Caregiver in Chennai — Narpavi Homecare',
  description: 'Apply for home caregiver jobs in Chennai. Join Narpavi Homecare as a trained nurse or patient assistant. We offer fair wages, nurse training and flexible shifts.',
  alternates: { canonical: 'https://www.narpavihomecare.com/join-us' },
};

export default function JoinUsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Join Us' }]} />
      <section className="section" style={{ marginTop: 0 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ marginBottom: '1.5rem' }}>Join Our Caregiver Team</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            At Narpavi Homecare, we believe that taking care of our caregivers is the first step to taking care of our patients. If you are a compassionate nurse, nursing student, or trained patient care assistant in Chennai, we want to hear from you.
          </p>

          <h3 style={{ marginBottom: '1rem' }}>Why Work with Narpavi?</h3>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', marginBottom: '2.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ listStyle: 'disc' }}><strong style={{ color: 'var(--text-primary)' }}>Fair Wages & Incentives:</strong> We offer competitive compensation and performance bonuses.</li>
            <li style={{ listStyle: 'disc' }}><strong style={{ color: 'var(--text-primary)' }}>Nurse & Doctor Training:</strong> Receive regular training in infection control, hygiene, and emergency care.</li>
            <li style={{ listStyle: 'disc' }}><strong style={{ color: 'var(--text-primary)' }}>Flexible Timings:</strong> Choose from 4-hour, 8-hour, 12-hour, or live-in assignments.</li>
            <li style={{ listStyle: 'disc' }}><strong style={{ color: 'var(--text-primary)' }}>Supportive Oversight:</strong> Our supervisor nurses are on-call 24x7 to support you during tasks.</li>
          </ul>

          <div style={{ background: 'var(--bg-light)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(0,0,0,0.05)' }}>
            <h3 style={{ marginBottom: '1.25rem', textAlign: 'center' }}>Submit Caregiver Application</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.35rem', fontWeight: 500, fontSize: '0.9rem' }}>Full Name</label>
                <input type="text" required placeholder="Enter your full name" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #D1D5DB' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.35rem', fontWeight: 500, fontSize: '0.9rem' }}>Phone Number</label>
                <input type="tel" required placeholder="Enter your phone number" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #D1D5DB' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.35rem', fontWeight: 500, fontSize: '0.9rem' }}>Experience / Qualification</label>
                <select style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #D1D5DB', background: 'white' }}>
                  <option>Trained Caregiver / Assistant</option>
                  <option>ANM / GNM Nurse</option>
                  <option>B.Sc Nursing Graduate</option>
                  <option>Fresh / Interested in Training</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.35rem', fontWeight: 500, fontSize: '0.9rem' }}>Chennai Area / Location</label>
                <input type="text" required placeholder="e.g. Velachery, Adyar" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #D1D5DB' }} />
              </div>
              <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>Submit Application</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
