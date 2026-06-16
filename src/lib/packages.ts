export interface ServiceScope {
  category: string;
  detail: string;
}

export interface CarePackage {
  id: string;
  name: string;
  tagline: string;
  image: string;
  color: string;
  bestFor: string[];
  scope: ServiceScope[];
  costCue: string;
  href: string;
}

export const CARE_PACKAGES: CarePackage[] = [
  {
    id: 'active-assist',
    name: 'Active Assist',
    tagline: 'Gentle Support for Faster Recovery',
    image: '/images/pik-7.png',
    color: '#10B981',
    bestFor: [
      'Post-surgery recovery (orthopedic, laparoscopic, minor procedures)',
      'Young adults with temporary mobility issues (fractures, sports injuries)',
      'New mothers needing light postpartum help',
    ],
    scope: [
      { category: 'Activities of Daily Living', detail: 'Light help with bathing, dressing, grooming' },
      { category: 'Mobility Support', detail: 'Short supervised walks and transfers' },
      { category: 'Nutrition Support', detail: 'Feeding assist' },
      { category: 'Medication Support', detail: 'Reminders only' },
      { category: 'Basic Vital Monitoring', detail: 'Temp / BP / Pulse / SpO2, Daily vitals and reporting' },
      { category: 'Safety and Fall Prevention', detail: 'Home safety tips and checks' },
      { category: 'Companionship', detail: 'Conversation and light activities' },
      { category: 'Family Communication', detail: 'Daily care log updates' },
      { category: 'Post-Hospital Care', detail: 'Light recovery help' },
      { category: 'Emergency Backup', detail: 'Escalation contact' },
    ],
    costCue: 'Affordable short-term help — recover safely at home without expensive hospital stay.',
    href: '/services/active-assist',
  },
  {
    id: 'guided-living',
    name: 'Guided Living',
    tagline: 'Steady Care for Everyday Life',
    image: '/images/pik-8.png',
    color: '#3B82F6',
    bestFor: [
      'Adults with chronic illnesses (diabetes, hypertension, asthma)',
      'Early neurological conditions (Parkinsons, mild stroke recovery, MS)',
      'Adults with special needs requiring structured daily support',
    ],
    scope: [
      { category: 'Activities of Daily Living', detail: 'Full ADL help incl. toileting and mobility' },
      { category: 'Mobility Support', detail: 'Routine mobility + safety checks' },
      { category: 'Nutrition Support', detail: 'Hydration reminders' },
      { category: 'Medication Support', detail: 'Structured reminders and routine check-ins' },
      { category: 'Basic Vital Monitoring', detail: 'Daily vitals and reporting' },
      { category: 'Safety and Fall Prevention', detail: 'Daily environment safety checks' },
      { category: 'Companionship', detail: 'Companionship + emotional reassurance' },
      { category: 'Family Communication', detail: 'Daily log + quick phone/WhatsApp updates' },
      { category: 'Post-Hospital Care', detail: 'Structured post-discharge routine' },
      { category: 'Emergency Backup', detail: '24x7 nurse helpline' },
    ],
    costCue: 'Reliable, structured home support — keep chronic illness under control and avoid readmissions.',
    href: '/services/guided-living',
  },
  {
    id: 'caring-hands',
    name: 'Caring Hands',
    tagline: 'Dependable Support for Mobility Needs',
    image: '/images/pik-9.png',
    color: '#8B5CF6',
    bestFor: [
      'Stroke recovery after initial rehabilitation',
      'Long recovery after accident or trauma',
      'Adults with long-term disabilities needing hands-on ADL help',
    ],
    scope: [
      { category: 'Activities of Daily Living', detail: 'Full ADL + assisted transfers and repositioning' },
      { category: 'Mobility Support', detail: 'Repositioning and fall prevention' },
      { category: 'Nutrition Support', detail: 'Full feeding support and meal planning with family' },
      { category: 'Medication Support', detail: 'Strict reminder schedule and safety reporting' },
      { category: 'Basic Vital Monitoring', detail: 'Daily vitals + escalation if abnormal' },
      { category: 'Safety and Fall Prevention', detail: 'Active fall prevention and transfer support' },
      { category: 'Companionship', detail: 'Ongoing companionship and engagement' },
      { category: 'Family Communication', detail: 'Daily log + weekly supervisor call' },
      { category: 'Post-Hospital Care', detail: 'Intensive mobility and ADL support' },
      { category: 'Palliative Support', detail: 'Comfort routines and presence' },
      { category: 'Emergency Backup', detail: '24x7 backup and nurse guidance' },
    ],
    costCue: 'Comprehensive mobility care — safer, dignified living at home without clinical cost burden.',
    href: '/services/caring-hands',
  },
  {
    id: 'comfort-plus',
    name: 'Comfort Plus',
    tagline: 'Complete Care for Bedridden Patients',
    image: '/images/pik-10.png',
    color: '#EC4899',
    bestFor: [
      'Bedridden adults with long-term illness (cancer, neurological disorders)',
      'Non-clinical palliative comfort care',
      'Post-ICU discharge adults requiring total daily support',
    ],
    scope: [
      { category: 'Activities of Daily Living', detail: 'Complete ADL and bedside hygiene' },
      { category: 'Mobility Support', detail: 'Full repositioning and pressure sore prevention' },
      { category: 'Nutrition Support', detail: 'Complete feeding assistance and comfort meals' },
      { category: 'Medication Support', detail: 'Strict reminders and full documentation' },
      { category: 'Basic Vital Monitoring', detail: 'Continuous vitals logging and supervisor review' },
      { category: 'Safety and Fall Prevention', detail: 'Full safety support incl. bed rails and positioning' },
      { category: 'Companionship', detail: 'Comfort presence and emotional support' },
      { category: 'Family Communication', detail: 'Daily logs + frequent family updates and escalation plan' },
      { category: 'Post-Hospital Care', detail: 'Full long-term comfort care' },
      { category: 'Palliative Support', detail: 'Dedicated bedside palliative presence' },
      { category: 'Emergency Backup', detail: '24x7 backup and escalation + supervisor oversight' },
    ],
    costCue: 'Round-the-clock comfort and support — high-touch care at a fraction of clinical cost.',
    href: '/services/comfort-plus',
  },
];
