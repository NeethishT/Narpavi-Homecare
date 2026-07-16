import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck, CheckCircle2, Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import CTAForm from '@/components/ui/CTAForm';
import FAQAccordion from '@/components/sections/FAQAccordion';
import SiteIcon from '@/components/ui/SiteIcon';
import StructuredDataScript from '@/components/seo/StructuredDataScript';
import homeStyles from '../home.module.css';
import processStyles from './enrollment-process.module.css';
import polishStyles from './page-polish.module.css';
import { getFaqSchema, getServiceSchema, getWebPageSchema } from '@/lib/seo';
import {
  HNC_HERO_BANNERS,
  HNC_DEFINITION_HEADING,
  HNC_DEFINITION_PARAGRAPHS,
  HNC_DEFINITION_IMAGE,
  HNC_BENEFITS_HEADING,
  HNC_BENEFITS_IMAGE,
  HNC_BENEFITS,
  HNC_CATALOGUE_HEADING,
  HNC_CATALOGUE_INTRO,
  HNC_CATALOGUE_FOOTER,
  HNC_SERVICES,
  HNC_STEPS_HEADING,
  HNC_STEPS,
  HNC_TRUST_HEADING,
  HNC_TRUST_INTRO,
  HNC_TRUST_FOOTER,
  HNC_TRUST_PILLARS,
  HNC_AUDIENCE_HEADING,
  HNC_AUDIENCE_INTRO,
  HNC_AUDIENCE_FOOTER,
  HNC_AUDIENCES,
  HNC_DELIVERABLES_HEADING,
  HNC_DELIVERABLES_INTRO,
  HNC_DELIVERABLES_FOOTER,
  HNC_DELIVERABLES_IMAGE,
  HNC_DELIVERABLES,
  HNC_COMPREHENSIVE_HEADING,
  HNC_COMPREHENSIVE_PARAGRAPHS,
  HNC_COMPREHENSIVE_IMAGES,
  HNC_ENROLLMENT_HEADING,
  HNC_ENROLLMENT_INTRO,
  HNC_ENROLLMENT_FOOTER,
  HNC_ENROLLMENT_STEPS,
  HNC_STATS,
  HNC_TESTIMONIAL_INTRO,
  HNC_TESTIMONIALS,
  HNC_RESOURCES,
  HNC_CTA_HEADING,
  HNC_CTA_SCENARIOS,
  HNC_FAQS,
} from '@/lib/homeNursingCareData';

const HNC_CAROUSEL_BANNERS = [
  {
    kicker: 'Gentle newborn support at home',
    heading: 'Baby',
    highlight: 'Care',
    copy: 'Trained caregivers support newborn routines and help mothers recover with calm, hygienic and family-centred care at home.',
    image: HNC_HERO_BANNERS[0],
    alt: 'Baby care nurse in a pink uniform caring for a newborn at home',
    usps: ['Mother & Baby Support', 'Hygiene-Focused Care', 'Trained Caregivers'],
    metric: 'Comforting support for mother and newborn',
    accent: '#e36f99',
    accentRgb: '227, 111, 153',
    accentSoft: '#fff0f5',
  },
  {
    kicker: 'Everyday clinical support at home',
    heading: 'Basic Nursing',
    highlight: 'Care',
    copy: 'Professional nurses assist with vital checks, medication support, wound care and daily recovery needs in the comfort of home.',
    image: HNC_HERO_BANNERS[1],
    alt: 'Home nurse checking an elderly patient with family support',
    usps: ['Vital Monitoring', 'Medication Support', 'One-to-One Attention'],
    metric: 'Reliable nursing for everyday care needs',
    accent: '#009a9f',
    accentRgb: '0, 154, 159',
    accentSoft: '#e6f8f8',
  },
  {
    kicker: 'Advanced recovery beyond hospital',
    heading: 'Advance Nursing',
    highlight: 'Care',
    copy: 'Skilled nurses coordinate post-operative recovery, IV support and advanced procedures through structured clinical care at home.',
    image: HNC_HERO_BANNERS[2],
    alt: 'Nurse providing advanced post-operative care in a home-care room',
    usps: ['Advanced Procedures', 'Clinical Supervision', 'Recovery Monitoring'],
    metric: 'Structured advanced care with continuous oversight',
    accent: '#4763b8',
    accentRgb: '71, 99, 184',
    accentSoft: '#eef2ff',
  },
  {
    kicker: 'Condition-specific clinical expertise',
    heading: 'Specialty Nursing',
    highlight: 'Care',
    copy: 'Specially trained nurses provide focused care for complex conditions, rehabilitation needs and long-term clinical support at home.',
    image: HNC_HERO_BANNERS[3],
    alt: 'Specialty nursing care for a patient at home',
    usps: ['Specialist Nurses', 'Condition-Based Care', 'Family Education'],
    metric: 'Focused expertise for complex care requirements',
    accent: '#8f5aae',
    accentRgb: '143, 90, 174',
    accentSoft: '#f6effb',
  },
  {
    kicker: 'Critical care brought safely home',
    heading: 'ICU at',
    highlight: 'Home',
    copy: 'Critical-care teams deliver hospital-grade monitoring, equipment coordination and high-dependency nursing within the patient’s home.',
    image: HNC_HERO_BANNERS[4],
    alt: 'ICU at home nursing and monitoring setup',
    usps: ['Critical-Care Nurses', '24/7 Monitoring', 'Hospital-Grade Setup'],
    metric: 'ICU-level support coordinated at home',
    accent: '#e05b4f',
    accentRgb: '224, 91, 79',
    accentSoft: '#fff0ed',
  },
  {
    kicker: 'Recovery, mobility and independence',
    heading: 'Elder',
    highlight: 'Care',
    copy: 'Compassionate caregivers help older adults with mobility, routines, companionship and recovery while preserving dignity and independence.',
    image: HNC_HERO_BANNERS[5],
    alt: 'Care professional supporting an elderly patient during mobility training',
    usps: ['Mobility Assistance', 'Companionship', 'Family Communication'],
    metric: 'Dignified support for safer independent living',
    accent: '#3a8e55',
    accentRgb: '58, 142, 85',
    accentSoft: '#edf8ef',
  },
];

export const metadata: Metadata = {
  title: 'Nursing Care at Home in Chennai — Narpavi Homecare',
  description: 'Professional home nursing in Chennai — Basic, Advanced, Specialty & ICU-at-Home care. Trusted by families for post-surgery, elderly, baby, and industrial health support.',
  keywords: [
    'home nursing care Chennai',
    'ICU at home Chennai',
    'advanced nursing care Chennai',
    'post-surgical nursing',
    'elderly care nursing Chennai',
    'baby care nurse Chennai',
    'industrial nurse Chennai',
  ],
  alternates: { canonical: '/home-nursing-care' },
  openGraph: {
    title: 'Nursing Care Services in Chennai — Narpavi Homecare',
    description: 'Complete spectrum of home nursing — from basic support to ICU-level care, baby & elder care, and industrial health services.',
  },
};

export default function HomeNursingCareHub() {
  const pageSchemas = [
    getWebPageSchema({
      title: 'Nursing Care at Home in Chennai',
      description: 'Professional home nursing in Chennai — Basic, Advanced, Specialty & ICU-at-Home care. Trusted by families for post-surgery, elderly, baby, and industrial health support.',
      path: '/home-nursing-care',
    }),
    getServiceSchema({
      name: 'Home Nursing Care Services',
      description: 'Nurse-supervised home nursing care for recovery, chronic illness support, advanced procedures, and ICU-level home care.',
      path: '/home-nursing-care',
      serviceType: 'Home healthcare service',
    }),
    getFaqSchema(HNC_FAQS),
  ];

  return (
    <>
      <StructuredDataScript data={pageSchemas} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Home Nursing Care' }]} />

      {/* ═══════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════ */}
      <main className={`basic-care-v2 ${polishStyles.page}`}>
      <section className={homeStyles.hero} id="hnc-hero" style={{ marginTop: 0 }}>
        <div className={homeStyles.heroGlow} aria-hidden="true" />
        <div className={`container ${homeStyles.heroCarousel}`} aria-label="Home nursing care service banners">
          {HNC_CAROUSEL_BANNERS.map((banner, index) => (
            <article
              className={`${homeStyles.heroSlide} hnc-carousel-slide`}
              key={banner.heading}
              style={{
                '--slide-delay': `${(index - HNC_CAROUSEL_BANNERS.length) * 5}s`,
                '--banner-accent': banner.accent,
                '--banner-accent-rgb': banner.accentRgb,
                '--banner-soft': banner.accentSoft,
                animationDuration: `${HNC_CAROUSEL_BANNERS.length * 5}s`,
              } as CSSProperties}
            >
              <div className={homeStyles.heroContent}>
                <span className={homeStyles.heroEyebrow}><Sparkles size={16} />{banner.kicker}</span>
                <h1>{banner.heading} <span>{banner.highlight}</span></h1>
                <p className={homeStyles.heroLead}>{banner.copy}</p>
                <ul className={homeStyles.heroUsps} aria-label={`${banner.heading} benefits`}>
                  {banner.usps.map((usp) => (
                    <li key={usp}><span className={homeStyles.heroUspIcon}><CheckCircle2 size={18} /></span><span>{usp}</span></li>
                  ))}
                </ul>
              </div>
              <div className={homeStyles.heroVisual}>
                <div className={homeStyles.heroImage}>
                  <Image src={banner.image} alt={banner.alt} fill priority={index === 0} sizes="(max-width: 900px) 100vw, 50vw" />
                  <div className={homeStyles.heroImageBadge}><BadgeCheck size={18} /><span>{banner.metric}</span></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: WHAT IS HOME NURSING CARE (SUMMARY LAYOUT)
          ═══════════════════════════════════════════ */}
      <section className="section">
        <div className="container baby-summary">
          <div className="baby-image-panel">
            <Image src={HNC_DEFINITION_IMAGE} alt="What is home nursing care" fill style={{ objectFit: 'cover' }} sizes="(max-width: 992px) 100vw, 38vw" />
          </div>
          <div>
            <h2>{HNC_DEFINITION_HEADING}</h2>
            {HNC_DEFINITION_PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Link href="#hnc-cta" className="btn btn--primary btn--lg">Book Home Nursing Care <SiteIcon name="Arrow" size={18} /></Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: BENEFITS (DELIVERABLES MODEL LAYOUT)
          ═══════════════════════════════════════════ */}
      <section className="section section--alt basic-care-v2__deliverables basic-care-v2__deliverables-model" id="hnc-benefits">
        <div className="container">
          <div className="basic-care-v2__deliverables-model-shell">
            <div className="basic-care-v2__deliverables-model-title">
              <h2>{HNC_BENEFITS_HEADING}</h2>
            </div>
            
            <div className="basic-care-v2__who-model-intro">
              <div className="basic-care-v2__who-model-copy" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ textAlign: 'center', margin: 0 }}>
                  Healing at home under the care of professional nurses provides critical advantages for patients and families. Here are the key benefits of home-based nursing care.
                </p>
              </div>
              <div className="basic-care-v2__who-model-image">
                <Image src={HNC_BENEFITS_IMAGE} alt="How home nursing care benefits families" fill sizes="(max-width: 768px) 100vw, 240px" style={{ objectFit: 'cover' }} />
              </div>
            </div>

            <div className="basic-care-v2__deliverables-model-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
              {HNC_BENEFITS.map((item, idx) => (
                <article className="basic-care-v2__deliverables-model-card" key={idx} style={{ display: 'flex', flexDirection: 'column', minHeight: '160px' }}>
                  <span className="basic-care-v2__deliverables-model-icon">
                    <SiteIcon name={item.icon || item.title} size={22} />
                  </span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, margin: '0.5rem 0 0.25rem 0' }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.description}</p>
                </article>
              ))}
            </div>
            
            <div className="basic-care-v2__deliverables-model-action" style={{ marginTop: '2.5rem' }}>
              <Link href="#hnc-cta" className="btn btn--primary btn--lg">Book Home Nursing Care</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: SERVICE CATALOGUE
          ═══════════════════════════════════════════ */}
      <section className="section" id="hnc-catalogue">
        <div className="container">
          <div className="section__header">
            <h2>{HNC_CATALOGUE_HEADING}</h2>
            <p>{HNC_CATALOGUE_INTRO}</p>
          </div>
          <div className="hnc-v2__catalogue-grid">
            {HNC_SERVICES.map((s, i) => (
              <Link key={i} href={s.href} className="hnc-v2__catalogue-card" style={{ textDecoration: 'none' }}>
                <div className="hnc-v2__catalogue-card-img">
                  <Image src={s.image} alt={s.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 640px) 100vw, (max-width: 992px) 50vw, 33vw" />
                </div>
                <div className="hnc-v2__catalogue-overlay">
                  <h3>{s.label}</h3>
                  <span className="btn">More Details <SiteIcon name="Arrow" size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '2rem', lineHeight: 1.7 }}>
            {HNC_CATALOGUE_FOOTER}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: 4 SMART STEPS
          ═══════════════════════════════════════════ */}
      <section className="section section--alt" id="hnc-steps">
        <div className="container">
          <div className="section__header">
            <h2>{HNC_STEPS_HEADING}</h2>
          </div>
          <div className="hnc-v2__steps-grid">
            {HNC_STEPS.map((s, i) => (
              <div key={i} className="hnc-v2__step-card">
                <div className="hnc-v2__step-num">{s.step}</div>
                <h4>{s.title}</h4>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/contact" className="btn btn--secondary btn--lg">Book for a Free Expert Consultation</Link>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6: WHY CHOOSE US — TRUST PILLARS
          ═══════════════════════════════════════════ */}
      <section className="section" id="hnc-trust">
        <div className="container">
          <div className="section__header">
            <h2>{HNC_TRUST_HEADING}</h2>
            <p>{HNC_TRUST_INTRO}</p>
          </div>
          <div className="basic-care-v2__deliverables-model-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {HNC_TRUST_PILLARS.map((t, i) => (
              <article className="basic-care-v2__deliverables-model-card" key={i} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '120px' }}>
                <span className="basic-care-v2__deliverables-model-icon">
                  <SiteIcon name={t.icon || t.title} size={22} />
                </span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: '0.5rem 0 0 0' }}>{t.title}</h3>
              </article>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '2rem', fontStyle: 'italic', lineHeight: 1.7 }}>
            {HNC_TRUST_FOOTER}
          </p>
          <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <Link href="/contact" className="btn btn--secondary btn--lg">Book Now for a Free Consultation</Link>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7: WHO WE CARE FOR (WHO MODEL LAYOUT)
          ═══════════════════════════════════════════ */}
      <section className="section section--alt basic-care-v2__who basic-care-v2__who-model" id="hnc-audience">
        <div className="container">
          <div className="basic-care-v2__who-model-title">
            <h2>{HNC_AUDIENCE_HEADING}</h2>
          </div>
          <div className="basic-care-v2__who-model-intro">
            <div className="basic-care-v2__who-model-copy">
              <p>{HNC_AUDIENCE_INTRO}</p>
            </div>
            <div className="basic-care-v2__who-model-image">
              <Image src="/images/home-nursing-care/Pik 13.png" alt="Who we care for at home" fill sizes="(max-width: 768px) 100vw, 240px" style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="basic-care-v2__who-model-grid">
            {HNC_AUDIENCES.map((person) => (
              <article className="basic-care-v2__who-model-card" key={person.title} style={{ minHeight: '140px', padding: '1.25rem 1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span className="basic-care-v2__who-model-icon" style={{ marginBottom: '0.5rem' }}><SiteIcon name={person.title} size={21} /></span>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 'bold', lineHeight: '1.4', margin: '0' }}>{person.title}</h3>
              </article>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '2rem', lineHeight: 1.7 }}>
            {HNC_AUDIENCE_FOOTER}
          </p>
          <div className="basic-care-v2__who-model-action" style={{ marginTop: '1.5rem' }}>
            <Link href="/contact" className="btn btn--primary btn--lg">Book Now for a Free Consultation</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8: DELIVERABLES CATEGORIES (DELIVERABLES MODEL LAYOUT)
          ═══════════════════════════════════════════ */}
      <section className="section basic-care-v2__deliverables basic-care-v2__deliverables-model" id="hnc-deliverables">
        <div className="container">
          <div className="basic-care-v2__deliverables-model-shell">
            <div className="basic-care-v2__deliverables-model-title">
              <h2>{HNC_DELIVERABLES_HEADING}</h2>
            </div>
            
            <div className="basic-care-v2__who-model-intro">
              <div className="basic-care-v2__who-model-copy" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ textAlign: 'center', margin: 0 }}>
                  {HNC_DELIVERABLES_INTRO}
                </p>
              </div>
              <div className="basic-care-v2__who-model-image">
                <Image src={HNC_DELIVERABLES_IMAGE} alt="Nursing care deliverables" fill sizes="(max-width: 768px) 100vw, 240px" style={{ objectFit: 'cover' }} />
              </div>
            </div>

            <div className="basic-care-v2__deliverables-model-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
              {HNC_DELIVERABLES.map((item, idx) => (
                <article className="basic-care-v2__deliverables-model-card" key={idx} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '120px' }}>
                  <span className="basic-care-v2__deliverables-model-icon">
                    <SiteIcon name={item.icon || item.title} size={22} />
                  </span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: '0.5rem 0 0 0' }}>{item.title}</h3>
                </article>
              ))}
            </div>

            <p className="basic-care-v2__deliverables-model-note" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              {HNC_DELIVERABLES_FOOTER}
            </p>
            
            <div className="basic-care-v2__deliverables-model-action" style={{ marginTop: '2rem' }}>
              <Link href="/contact" className="btn btn--primary btn--lg">Book Home Nursing Care</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 9: COMPREHENSIVE NURSING
          ═══════════════════════════════════════════ */}
      <section className="section section--alt" id="hnc-comprehensive">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>{HNC_COMPREHENSIVE_HEADING}</h2>
          <div className="hnc-v2__comprehensive">
            <div className="hnc-v2__comprehensive-row hnc-v2__comprehensive-row--top">
              <div className="hnc-v2__comprehensive-copy">
                {HNC_COMPREHENSIVE_PARAGRAPHS.slice(0, 4).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="hnc-v2__comprehensive-img">
                <Image src={HNC_COMPREHENSIVE_IMAGES[0]} alt="Comprehensive nursing care" fill style={{ objectFit: 'cover' }} sizes="(max-width: 992px) 100vw, 300px" />
              </div>
            </div>
            <div className="hnc-v2__comprehensive-row hnc-v2__comprehensive-row--bottom">
              <div className="hnc-v2__comprehensive-img">
                <Image src={HNC_COMPREHENSIVE_IMAGES[1]} alt="Compassionate nursing care at home" fill style={{ objectFit: 'cover' }} sizes="(max-width: 992px) 100vw, 300px" />
              </div>
              <div className="hnc-v2__comprehensive-copy">
                {HNC_COMPREHENSIVE_PARAGRAPHS.slice(4).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 10: ENROLLMENT PROCESS
          ═══════════════════════════════════════════ */}
      <section className={`section ${processStyles.scope}`} id="hnc-enrollment">
        <div className="container">
          <div className="section__header">
            <h2>{HNC_ENROLLMENT_HEADING}</h2>
            <p>{HNC_ENROLLMENT_INTRO}</p>
          </div>
          <div className="hnc-v2__process-flow" aria-label="Narpavi ten-step enrollment process">
            <div className="hnc-v2__process-row hnc-v2__process-row--forward">
              {HNC_ENROLLMENT_STEPS.slice(0, 4).map((step, index) => (
                <div className={`hnc-v2__process-item hnc-v2__process-item--${index < 3 ? 'blue' : 'yellow'}`} key={step.title}>
                  <h4>{step.title}</h4>
                  {index < 3 && <span className="hnc-v2__process-arrow hnc-v2__process-arrow--right" aria-hidden="true" />}
                </div>
              ))}
            </div>

            <div className="hnc-v2__process-down hnc-v2__process-down--right" aria-hidden="true" />

            <div className="hnc-v2__process-row hnc-v2__process-row--reverse">
              {HNC_ENROLLMENT_STEPS.slice(4, 8).reverse().map((step, index) => (
                <div className="hnc-v2__process-item hnc-v2__process-item--yellow" key={step.title}>
                  <h4>{step.title}</h4>
                  {index < 3 && <span className="hnc-v2__process-arrow hnc-v2__process-arrow--left" aria-hidden="true" />}
                </div>
              ))}
            </div>

            <div className="hnc-v2__process-down hnc-v2__process-down--left" aria-hidden="true" />

            <div className="hnc-v2__process-row hnc-v2__process-row--final">
              {HNC_ENROLLMENT_STEPS.slice(8).map((step, index) => (
                <div className="hnc-v2__process-item hnc-v2__process-item--green" key={step.title}>
                  <h4>{step.title}</h4>
                  {index === 0 && <span className="hnc-v2__process-arrow hnc-v2__process-arrow--right" aria-hidden="true" />}
                </div>
              ))}
            </div>
          </div>
          <p className="hnc-v2__process-footer">
            {HNC_ENROLLMENT_FOOTER}
          </p>
          <p className="hnc-v2__process-cta">
            <Link href="/contact" className="btn btn--secondary btn--lg">Book Your Free Home Nursing Assessment</Link>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 11: STATS
          ═══════════════════════════════════════════ */}
      <section className="section section--alt" id="hnc-stats">
        <div className="container">
          <div className="section__header">
            <h2>Our Performance &amp; Impact</h2>
          </div>
          <div className="hnc-v2__stats-grid">
            {HNC_STATS.map((s, i) => (
              <div key={i} className="hnc-v2__stat-card">
                <span className="hnc-v2__stat-value">{s.value}</span>
                <h4>{s.metric}</h4>
                <p>{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 12: CTA WITH SCENARIOS
          ═══════════════════════════════════════════ */}
      <section className="section hnc-v2__testimonials" id="hnc-testimonials">
        <div className="container">
          <div className="section__header">
            <h2>Testimonials - Families &amp; Partners Who Trust Narpavi Homecare</h2>
            <p>{HNC_TESTIMONIAL_INTRO}</p>
          </div>
          <div className="hnc-v2__testimonial-grid">
            {HNC_TESTIMONIALS.map((item) => (
              <article className="hnc-v2__testimonial" key={item.name}>
                <div className="hnc-v2__quote-mark" aria-hidden="true">“</div>
                <p>{item.quote}</p>
                <footer><strong>{item.name}</strong><span>{item.location}</span></footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="hnc-cta">
        <div className="container">
          <div className="hnc-v2__cta-split">
            <div className="hnc-v2__cta-scenarios">
              <h3>{HNC_CTA_HEADING}</h3>
              <ul className="hnc-v2__cta-list">
                {HNC_CTA_SCENARIOS.map((s, i) => (
                  <li key={i}>
                    <SiteIcon name="Check" size={18} />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <CTAForm title="Book Your Free Nursing Assessment" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 13: FAQs
          ═══════════════════════════════════════════ */}
      <section className="section section--alt" id="hnc-faqs">
        <div className="container">
          <div className="section__header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <FAQAccordion faqs={HNC_FAQS} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA STRIP (SPLIT GRID LAYOUT)
          ═══════════════════════════════════════════ */}
      <section className="section hnc-v2__resources" id="hnc-resources">
        <div className="container">
          <div className="section__header">
            <h2>Blogs - Resources &amp; Learning Hub</h2>
          </div>
          <div className="hnc-v2__resource-grid">
            {HNC_RESOURCES.map((resource, index) => (
              <Link className={`hnc-v2__resource-card${index === 0 ? ' hnc-v2__resource-card--featured' : ''}`} href={resource.href} key={resource.title}>
                <Image src={resource.image} alt={resource.title} fill sizes={index === 0 ? '(max-width: 768px) 100vw, 55vw' : '(max-width: 768px) 100vw, 25vw'} />
                <div className="hnc-v2__resource-shade" />
                <div className="hnc-v2__resource-copy"><span>Read article</span><h3>{resource.title}</h3></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip baby-final-cta">
        <div className="container baby-final-cta__grid">
          <div>
            <h2>Ready to Start Safe, Reliable Home Nursing Care?</h2>
            <p>Your recovery or daily care doesn&apos;t need to be complicated. Narpavi Homecare makes it easy to begin safe, personalized Home Nursing Care in Chennai — with trained caregivers, nurse supervision, and real-time updates.</p>
            <p>Book a free expert assessment for Fast onboarding | Verified caregivers | 24×7 emergency support | Transparent pricing</p>
            <div className="cta-strip__badges">
              <span className="cta-strip__badge"><SiteIcon name="Check" size={16} /> Fast onboarding</span>
              <span className="cta-strip__badge"><SiteIcon name="Check" size={16} /> Verified caregivers</span>
              <span className="cta-strip__badge"><SiteIcon name="Check" size={16} /> 24×7 emergency support</span>
              <span className="cta-strip__badge"><SiteIcon name="Check" size={16} /> Transparent pricing</span>
            </div>
          </div>
          <CTAForm title="Book Your Free Assessment" />
        </div>
      </section>
      </main>
    </>
  );
}
