import type { BabyCareBlogArticle } from './babyCareBlogs';

const commonDate = '2026-07-19';

export const HOME_NURSING_BLOG_ARTICLES: BabyCareBlogArticle[] = [
  {
    slug: 'newborn-mother-care-at-home', title: 'Newborn & Mother Care at Home — NICU-Level Safety and Support',
    excerpt: 'A practical guide to safe newborn routines, mother recovery, monitoring, hygiene, and clinical escalation at home.',
    metaDescription: 'Learn how professional newborn and mother care at home supports feeding, hygiene, recovery, monitoring, and clinical escalation.',
    image: '/images/home-nursing-care/Pik 24.png', imageAlt: 'Nurse supporting a newborn and mother at home', readTime: '7 min read', date: commonDate,
    keywords: ['newborn care at home Chennai', 'mother care after delivery', 'NICU baby care at home'],
    intro: 'The first weeks after delivery require equal attention to the baby and the mother. Structured home nursing combines safe daily routines with observation, documentation, and clear escalation when clinical help is needed.',
    toc: [{ id: 'profile', label: 'Who needs support' }, { id: 'baby', label: 'Newborn support' }, { id: 'mother', label: 'Mother recovery' }, { id: 'safety', label: 'Safety and escalation' }],
    sections: [
      { id: 'profile', title: 'Who May Need Newborn and Mother Care?', body: ['Support can help after a C-section, difficult delivery, premature birth, NICU discharge, feeding difficulty, newborn jaundice monitoring, or when parents need reliable night assistance. Care intensity must match the baby’s condition and the mother’s recovery stage.'] },
      { id: 'baby', title: 'Structured Support for the Newborn', points: [{ title: 'Feeding observation', desc: 'Support for feeding, burping, sterilisation, and clear feed records.' }, { title: 'Hygiene and comfort', desc: 'Safe diapering, bathing support, cord-care precautions, and infection control.' }, { title: 'Clinical observation', desc: 'Watch temperature, breathing, feeding, activity, and jaundice changes.' }] },
      { id: 'mother', title: 'Recovery Support for the Mother', body: ['A trained nurse can support medication routines, incision observation, mobility, hydration, rest, and warning-sign awareness while helping the family maintain a calm recovery environment.'] },
      { id: 'safety', title: 'Safety, Documentation, and Escalation', body: ['Care should follow an individual plan, daily documentation, hand-hygiene standards, and defined escalation protocols. Fever, breathing difficulty, reduced feeding, unusual drowsiness, bleeding, severe pain, or wound changes require prompt clinical advice.'] },
    ], ctaTitle: 'Need Newborn and Mother Care at Home?', ctaText: 'Book a free consultation to discuss the baby’s needs, the mother’s recovery stage, and the appropriate nursing support.',
  },
  {
    slug: 'elderly-parents-home-nursing-guide', title: 'Caring for Elderly Parents at Home — Mobility, Dementia & End-of-Life Support',
    excerpt: 'How families can select safe, dignified support for mobility limitations, chronic illness, dementia, and comfort care.',
    metaDescription: 'A family guide to elderly home nursing for mobility, dementia, chronic illness, medication support, and end-of-life comfort.',
    image: '/images/home-nursing-care/Pik 23.png', imageAlt: 'Professional nurse assisting an elderly patient at home', readTime: '8 min read', date: commonDate,
    keywords: ['elderly nursing care at home Chennai', 'dementia home care', 'palliative care at home'],
    intro: 'Elder care at home works best when clinical needs, everyday safety, dignity, and family communication are managed together. The correct plan depends on diagnosis, dependency, mobility, and stage of illness.',
    toc: [{ id: 'assessment', label: 'Assessment' }, { id: 'daily', label: 'Daily support' }, { id: 'risks', label: 'Dementia and mobility' }, { id: 'comfort', label: 'Comfort care' }],
    sections: [
      { id: 'assessment', title: 'Begin With a Clinical and Functional Assessment', body: ['Review diagnoses, discharge advice, medications, fall risk, cognition, nutrition, skin condition, mobility, and medical devices. This defines whether scheduled visits, shift nursing, or continuous care is appropriate.'] },
      { id: 'daily', title: 'Build a Predictable Daily Care Plan', points: [{ title: 'Clinical routines', desc: 'Vitals, medication administration, wound or device care, and condition-specific monitoring.' }, { title: 'Personal support', desc: 'Hygiene, nutrition, positioning, mobility, and toileting assistance delivered with dignity.' }, { title: 'Family updates', desc: 'Documented observations help families make timely decisions.' }] },
      { id: 'risks', title: 'Manage Dementia and Mobility Risks Carefully', body: ['Consistent routines, fall prevention, pressure-injury prevention, gentle communication, and supervised movement reduce avoidable distress and complications.'] },
      { id: 'comfort', title: 'Plan Comfort and End-of-Life Support', body: ['Palliative nursing focuses on comfort, symptom observation, dignity, family participation, and coordination with the treating clinician. Scope and escalation should be agreed before care begins.'] },
    ], ctaTitle: 'Unsure What Level of Elder Care Is Appropriate?', ctaText: 'A free consultation can help identify the correct care category, deliverables, and schedule.',
  },
  {
    slug: 'icu-care-at-home-chennai-setup-guide', title: 'How to Safely Set Up ICU-Level Care at Home in Chennai',
    excerpt: 'A guide to clinical readiness, equipment, trained nurses, monitoring, infection control, and emergency planning.',
    metaDescription: 'Learn the requirements for safe ICU care at home in Chennai, including assessment, equipment, ICU nurses, and emergency escalation.',
    image: '/images/home-nursing-care/Pik 21.png', imageAlt: 'ICU-trained home nurse monitoring a patient', readTime: '9 min read', date: commonDate,
    keywords: ['ICU at home Chennai', 'critical care nurse at home', 'ventilator care at home'],
    intro: 'ICU-level home care is suitable only when the patient is clinically appropriate and the house, team, equipment, monitoring, and escalation plan are ready before discharge.',
    toc: [{ id: 'readiness', label: 'Clinical readiness' }, { id: 'team', label: 'Clinical team' }, { id: 'equipment', label: 'Equipment' }, { id: 'monitoring', label: 'Monitoring and emergencies' }],
    sections: [
      { id: 'readiness', title: 'Confirm Clinical Readiness Before Transfer', body: ['The treating doctor and homecare team should review stability, airway and oxygen needs, medication, feeding, mobility, infection risk, required procedures, and likely emergencies.'] },
      { id: 'team', title: 'Assign the Right Clinical Team', points: [{ title: 'ICU-trained nurses', desc: 'Competency must match ventilator, tracheostomy, suction, infusion, catheter, or feeding-tube needs.' }, { title: 'Clinical governance', desc: 'Defined protocols, supervision, handovers, documentation, and review protect continuity.' }, { title: 'Family orientation', desc: 'Families should understand alarms, warning signs, boundaries, and contacts.' }] },
      { id: 'equipment', title: 'Prepare Equipment and the Home Environment', body: ['The plan may include a hospital cot, oxygen, suction, monitors, pumps, pressure-relief mattress, backup power, consumables, and a clean care area. Equipment must be tested before arrival.'] },
      { id: 'monitoring', title: 'Define Monitoring and Emergency Escalation', body: ['Set observation frequency, clinician reviews, equipment backup, ambulance access, and thresholds for hospital transfer. ICU at home does not remove the need for emergency readiness.'] },
    ], ctaTitle: 'Planning an ICU Setup at Home?', ctaText: 'Speak with our clinical team about patient needs, staffing, equipment, and home readiness.',
  },
  {
    slug: 'choose-right-home-nursing-care-level', title: 'Choosing the Right Level of Nursing Care at Home — Basic, Advanced, Specialty or ICU?',
    excerpt: 'A clear comparison to match the patient’s condition and deliverables to the correct care category.',
    metaDescription: 'Compare basic, advanced, specialty, and ICU home nursing care to identify the appropriate support for your loved one.',
    image: '/images/home-nursing-care/Pik 20.png', imageAlt: 'Family consulting a nurse about home nursing options', readTime: '7 min read', date: commonDate,
    keywords: ['home nursing care types', 'choose nursing care package', 'home nurse Chennai'],
    intro: 'The right service is chosen by clinical need—not by package name alone. Start with the patient profile, define required deliverables, and select the category and schedule that safely covers them.',
    toc: [{ id: 'basic', label: 'Basic care' }, { id: 'advanced', label: 'Advanced care' }, { id: 'specialty', label: 'Specialty care' }, { id: 'icu', label: 'ICU care' }, { id: 'decision', label: 'How to decide' }],
    sections: [
      { id: 'basic', title: 'Basic Nursing Care', body: ['For stable patients needing routine monitoring, medication support, hygiene, mobility assistance, recovery observation, and daily-care help under a defined plan.'] },
      { id: 'advanced', title: 'Advanced Nursing Care', body: ['For procedures such as injections, IV therapy, complex wound care, catheter management, oxygen monitoring, or closer post-operative observation.'] },
      { id: 'specialty', title: 'Specialty Nursing Care', body: ['For condition-specific needs such as tracheostomy, tube feeding, stoma, palliative, dementia, or other specialised protocols.'] },
      { id: 'icu', title: 'ICU-Level Care at Home', body: ['For clinically appropriate high-dependency patients needing continuous skilled observation, critical-care equipment, ICU-trained staff, and emergency escalation.'] },
      { id: 'decision', title: 'Use Four Steps to Decide', points: [{ title: 'Choose the care type', desc: 'Start with the category closest to the current condition.' }, { title: 'Match the patient profile', desc: 'Compare diagnosis, recovery stage, dependency, and risk.' }, { title: 'Define deliverables', desc: 'List procedures, monitoring, personal support, and communication.' }, { title: 'Select the package', desc: 'Confirm the scope covers the profile and deliverables.' }] },
    ], ctaTitle: 'Still Not Sure Which Care Level You Need?', ctaText: 'Book a free expert consultation to review the patient profile and required deliverables.',
  },
];

export function getHomeNursingBlogArticle(slug: string) {
  return HOME_NURSING_BLOG_ARTICLES.find((article) => article.slug === slug);
}
