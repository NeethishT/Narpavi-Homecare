export interface AdvanceNursingBlogPoint {
  title: string;
  desc: string;
}

export interface AdvanceNursingBlogSection {
  id: string;
  title: string;
  body?: string[];
  points?: AdvanceNursingBlogPoint[];
}

export interface AdvanceNursingBlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  readTime: string;
  date: string;
  keywords: string[];
  intro: string;
  toc: Array<{ id: string; label: string }>;
  sections: AdvanceNursingBlogSection[];
  ctaTitle: string;
  ctaText: string;
  serviceHref: string;
  serviceLabel: string;
}

const serviceHref = '/home-nursing-care/advance-nursing-care';
const serviceLabel = 'View Advanced Nursing Care';

export const ADVANCE_NURSING_BLOG_ARTICLES: AdvanceNursingBlogArticle[] = [
  {
    slug: 'complete-guide-iv-therapy-at-home-chennai',
    title: 'Complete Guide to IV Therapy at Home in Chennai',
    excerpt: 'Safety, cost, eligibility and family updates for doctor-prescribed IV therapy at home.',
    metaDescription: 'Learn how IV therapy at home works in Chennai, including safety checks, eligible patients, cost benefits, nurse monitoring and family updates.',
    image: '/images/advance-nursing-care/Pik 11.jpg',
    imageAlt: 'Nurse monitoring IV therapy at home',
    readTime: '6 min read',
    date: '2025-04-05',
    keywords: ['IV therapy at home Chennai', 'advanced nursing care Chennai', 'home infusion nurse', 'IV fluids at home'],
    intro: 'Many medically stable patients can continue doctor-prescribed IV fluids, antibiotics, pain medication or infusion support at home. With trained nurses, strict hygiene and clear escalation rules, families can reduce hospital visits while keeping care visible and organized.',
    toc: [
      { id: 'why-home-iv-care', label: 'Why families choose home IV care' },
      { id: 'what-is-included', label: 'What IV therapy includes' },
      { id: 'who-benefits', label: 'Who can benefit' },
      { id: 'safety-cost', label: 'Safety and cost' },
    ],
    sections: [
      {
        id: 'why-home-iv-care',
        title: 'Why Families Are Moving IV Care Home',
        body: ['Hospital stays can be costly, stressful and inconvenient for stable patients who only need planned IV care. At-home IV therapy helps families avoid repeated hospital travel while keeping the patient in a calmer setting.', 'This is especially useful for post-surgery recovery, longer infection treatment plans, hydration support and NRI families who need reliable daily updates.'],
      },
      {
        id: 'what-is-included',
        title: 'What IV Therapy at Home Includes',
        body: ['Advanced Nursing Care is more than inserting a cannula. The nurse follows the prescription, prepares the setup cleanly, observes the patient during therapy and documents the visit for the family.'],
        points: [
          { title: 'Prescribed IV medication', desc: 'IV antibiotics, pain medication, hydration or electrolytes are given only as ordered by the treating doctor.' },
          { title: 'Line and site care', desc: 'Peripheral line setup, flushing, dressing checks and infection-watch routines are handled with aseptic technique.' },
          { title: 'Vitals and reporting', desc: 'BP, SpO2, pulse, temperature, comfort level and reaction signs are recorded and shared with the family.' },
        ],
      },
      {
        id: 'who-benefits',
        title: 'Who Can Benefit From Home IV Therapy',
        body: ['Home IV support can help people recovering from surgery, dehydration, severe infections, weakness, chronic illness flare-ups, cancer-supportive care, neurology recovery or cardiac recovery when the doctor confirms home care is suitable.'],
      },
      {
        id: 'safety-cost',
        title: 'Safety and Cost Advantages',
        body: ['Safe home IV care needs verified nurses, strict hand hygiene, sterile supplies, clear escalation pathways and documented observations. For suitable patients, it can also reduce avoidable hospital costs and infection exposure.'],
        points: [
          { title: 'Clinical escalation', desc: 'Fever, rash, swelling, breathlessness, sudden weakness or abnormal vitals should be escalated quickly.' },
          { title: 'Upgrade path', desc: 'If the patient later needs tracheostomy, ventilator, feeding tube or ICU-level care, the plan should shift to Specialty Care or ICU at Home.' },
        ],
      },
    ],
    ctaTitle: 'Need IV Therapy at Home in Chennai?',
    ctaText: 'Narpavi Homecare plans doctor-prescribed IV therapy, infusion support, vitals monitoring and family updates with trained nursing professionals.',
    serviceHref,
    serviceLabel,
  },
  {
    slug: 'dehydration-heat-stroke-iv-drips-at-home',
    title: 'Dehydration & Heat Stroke Recovery: Why IV Drips at Home Help',
    excerpt: 'When doctor-prescribed IV hydration at home can support safer recovery during Chennai heat.',
    metaDescription: 'Understand how doctor-prescribed IV hydration at home can help dehydration and heat exhaustion recovery in Chennai with nurse monitoring and escalation.',
    image: '/images/advance-nursing-care/Pik 13.jpeg',
    imageAlt: 'Patient receiving monitored IV hydration at home',
    readTime: '4 min read',
    date: '2025-04-09',
    keywords: ['dehydration IV drip at home', 'heat stroke recovery Chennai', 'IV fluids at home Chennai', 'home nurse hydration'],
    intro: 'Chennai heat and humidity can worsen dehydration risk, especially for older adults, people with chronic illness and patients recovering from fever or weakness. When a doctor prescribes fluids, trained home nurses can support IV hydration safely at home for suitable patients.',
    toc: [
      { id: 'risk', label: 'Dehydration risk' },
      { id: 'coverage', label: 'What IV hydration covers' },
      { id: 'benefits', label: 'Benefits over hospital visits' },
      { id: 'safety', label: 'Safety protocol' },
    ],
    sections: [
      {
        id: 'risk',
        title: 'Why Dehydration Needs Quick Attention',
        body: ['Dehydration can cause weakness, dizziness, confusion, low urine output and low blood pressure. In severe heat exposure, delayed care may increase the risk of heat exhaustion or organ strain.', 'Home IV hydration is not for emergencies, but it can help medically stable patients when the doctor decides IV fluids are appropriate.'],
      },
      {
        id: 'coverage',
        title: 'What IV Hydration at Home Covers',
        points: [
          { title: 'Doctor-prescribed fluids', desc: 'Normal saline, Ringer lactate or electrolytes are used only according to the treatment plan.' },
          { title: 'Vitals observation', desc: 'The nurse monitors BP, temperature, pulse and SpO2 before and during the visit.' },
          { title: 'Fluid tolerance watch', desc: 'The nurse observes comfort, swelling, breathlessness, fever and other warning signs.' },
        ],
      },
      {
        id: 'benefits',
        title: 'Benefits for Suitable Patients',
        body: ['For stable patients, home IV hydration can reduce waiting time, avoid unnecessary travel, lower infection exposure and allow the patient to rest with family nearby. It can also be more cost-effective than an avoidable admission.'],
      },
      {
        id: 'safety',
        title: 'Safety Protocol Families Should Expect',
        body: ['Families should expect an IV-certified nurse, clean setup, hand hygiene, single-use consumables where needed and a clear plan for escalation if the patient worsens. Any severe confusion, fainting, chest pain, breathing difficulty or uncontrolled fever needs urgent medical care.'],
      },
    ],
    ctaTitle: 'Planning IV Hydration Support?',
    ctaText: 'Narpavi Homecare helps families arrange safe, doctor-prescribed hydration support with trained nurses and fast escalation guidance.',
    serviceHref,
    serviceLabel,
  },
  {
    slug: 'nri-families-reliable-iv-care-chennai',
    title: 'How NRI Families Can Arrange Reliable IV Care in Chennai',
    excerpt: 'A practical guide for overseas families arranging verified nursing, daily logs and escalation support.',
    metaDescription: 'NRI families can arrange reliable IV care in Chennai with verified nurses, doctor oversight, digital logs, WhatsApp updates and transparent billing.',
    image: '/images/advance-nursing-care/Pik 12.png',
    imageAlt: 'Narpavi nurses supporting a patient during advanced nursing care',
    readTime: '5 min read',
    date: '2025-04-12',
    keywords: ['NRI home nursing Chennai', 'IV care for parents Chennai', 'advanced nursing care NRI', 'WhatsApp nursing updates'],
    intro: 'For families living outside Chennai or abroad, arranging post-hospital IV care for parents can feel stressful. The right homecare partner should provide verified nurses, clear supervision, daily documentation and simple communication channels.',
    toc: [
      { id: 'challenge', label: 'The NRI challenge' },
      { id: 'model', label: 'NRI-friendly care model' },
      { id: 'services', label: 'Common requests' },
      { id: 'coordination', label: 'How coordination works' },
    ],
    sections: [
      {
        id: 'challenge',
        title: 'The NRI Challenge',
        body: ['Families abroad often worry about delayed updates, unverified caregivers, missed medicines, unclear bills and what happens if the patient condition changes. Advanced Nursing Care should reduce that uncertainty with documentation and escalation support.'],
      },
      {
        id: 'model',
        title: 'What an NRI-Friendly Care Model Should Include',
        points: [
          { title: 'Verified nurses', desc: 'The assigned nurse should be trained for IV or infusion support and background checked before deployment.' },
          { title: 'Digital daily logs', desc: 'Vitals, medication timing, observations and concerns should be shared in a simple format.' },
          { title: 'Escalation plan', desc: 'The family should know when the team will alert the doctor, coordinator or emergency service.' },
        ],
      },
      {
        id: 'services',
        title: 'Services NRIs Commonly Request',
        body: ['Common requests include post-surgery IV antibiotics, hydration support after viral fever or heat illness, long-term infusion care, palliative comfort infusions and monitoring during recovery from chronic illness.'],
      },
      {
        id: 'coordination',
        title: 'How Coordination Becomes Easier',
        body: ['A single coordinator, WhatsApp updates, transparent estimates and upgrade options make it easier for overseas families to stay involved without micromanaging every visit.'],
      },
    ],
    ctaTitle: 'Arranging Care From Outside Chennai?',
    ctaText: 'Narpavi Homecare supports NRI families with verified nurses, digital logs, WhatsApp updates and transparent Advanced Nursing Care planning.',
    serviceHref,
    serviceLabel,
  },
  {
    slug: 'iv-antibiotics-at-home-family-guide',
    title: 'IV Antibiotics at Home: How It Works & What Families Should Know',
    excerpt: 'What to expect from prescription review, sterile setup, dose monitoring and family reporting.',
    metaDescription: 'Learn how IV antibiotics at home work, including doctor prescription review, nurse setup, monitoring, safety signs and when to upgrade care.',
    image: '/images/advance-nursing-care/Pik 10.jpg',
    imageAlt: 'Patient receiving IV medication with nurse monitoring',
    readTime: '5 min read',
    date: '2025-04-16',
    keywords: ['IV antibiotics at home Chennai', 'home antibiotic infusion nurse', 'post surgery IV antibiotics', 'advanced nursing care'],
    intro: 'IV antibiotics do not always require a prolonged hospital stay. For many stable patients with a clear doctor prescription, trained nurses can administer doses at home while monitoring for reactions and keeping families informed.',
    toc: [
      { id: 'why-common', label: 'Why home antibiotics are common' },
      { id: 'process', label: 'How the process works' },
      { id: 'safety-signs', label: 'Safety signs' },
      { id: 'upgrade-care', label: 'When to upgrade care' },
    ],
    sections: [
      {
        id: 'why-common',
        title: 'Why Home IV Antibiotics Are Becoming Common',
        body: ['Bone and joint infections, urinary infections, post-surgical infections and some pneumonia recovery plans may require IV antibiotics beyond the hospital stay. If the patient is stable, home support can reduce cost, travel and infection exposure.'],
      },
      {
        id: 'process',
        title: 'How Home IV Antibiotics Work',
        points: [
          { title: 'Prescription review', desc: 'The treating doctor decides the antibiotic, dose, route and schedule before home care starts.' },
          { title: 'Nurse setup', desc: 'The nurse inserts or checks the peripheral IV line, prepares supplies and follows sterile technique.' },
          { title: 'Dose monitoring', desc: 'The nurse observes vitals, comfort, rash, swelling, fever or other reaction signs during and after the dose.' },
          { title: 'Documentation', desc: 'Dose time, observations and concerns are recorded for the family and care team.' },
        ],
      },
      {
        id: 'safety-signs',
        title: 'Safety Measures Families Should Expect',
        body: ['Families should expect an IV-trained nurse, sterile dressing care, sharps safety, infection-control discipline and emergency backup guidance. Report rash, breathing difficulty, swelling, fever spike, line-site redness or sudden weakness immediately.'],
      },
      {
        id: 'upgrade-care',
        title: 'When to Upgrade to Higher-Level Care',
        body: ['If the patient needs a central line, PICC care, ventilator support, tracheostomy, PEG feeding, TPN or unstable monitoring, Advanced Nursing Care may not be enough. The plan should move to Specialty Care or ICU at Home based on clinical advice.'],
      },
    ],
    ctaTitle: 'Need Safe IV Antibiotic Support at Home?',
    ctaText: 'Narpavi Homecare arranges doctor-prescribed IV antibiotic administration, vitals observation, documentation and family updates across Chennai.',
    serviceHref,
    serviceLabel,
  },
];

export const ADVANCE_NURSING_BLOG_POSTS = ADVANCE_NURSING_BLOG_ARTICLES.map((article) => ({
  slug: article.slug,
  title: article.title,
  excerpt: article.excerpt,
  image: article.image,
  readTime: article.readTime,
  date: article.date,
  keywords: article.keywords,
}));

export function getAdvanceNursingBlogArticle(slug: string) {
  return ADVANCE_NURSING_BLOG_ARTICLES.find((article) => article.slug === slug);
}
