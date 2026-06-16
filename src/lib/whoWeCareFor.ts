export interface PatientCategory {
  icon: string;
  title: string;
  description: string;
}

export const WHO_WE_CARE_FOR: PatientCategory[] = [
  { icon: 'ðŸ¥', title: 'Post-Surgery Recovery', description: 'Patients recovering after surgery, orthopedic, laparoscopic or minor procedures. When they need support but no invasive nursing.' },
  { icon: 'ðŸ¦´', title: 'Injury & Ortho Rehab', description: 'Adults recovering from fractures, ligament tears or sports injuries. Ideal when mobility is limited but no clinical procedures are needed.' },
  { icon: '💊', title: 'Chronic Illness Daily Support', description: 'Structured assistance for adults managing diabetes, hypertension, asthma or other chronic conditions. Keeping daily life stable and worry-free.' },
  { icon: 'ðŸ§ ', title: 'Neurological / Disability Assistance', description: 'Compassionate ADL and mobility support for those with early stroke recovery, multiple sclerosis or mild cerebral palsy.' },
  { icon: 'ðŸ¡', title: 'Limited Mobility (Homebound)', description: "Complete assistance for adults who can't manage daily routines alone without invasive nursing procedures." },
  { icon: '🛁ï¸', title: 'Bedridden (Non-clinical)', description: 'Total daily assistance for long recovery or progressive illness, when no invasive medical procedures are required.' },
  { icon: '🕊️', title: 'Palliative Presence', description: 'Support focused on dignity and quality of life without clinical interventions.' },
  { icon: '🤝’', title: 'Short-Term Weakness / Post-Viral', description: 'Temporary daily living help after fever, viral infections or fatigue, until adults return to normal energy levels.' },
  { icon: '🌍', title: 'NRI Families Arranging Care', description: 'Trusted daily support for loved ones while you live abroad. Real-time WhatsApp updates for peace of mind.' },
];
