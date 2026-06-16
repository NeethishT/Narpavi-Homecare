export interface Deliverable {
  icon: string;
  title: string;
  description: string;
}

export const DELIVERABLES: Deliverable[] = [
  { icon: '🛁', title: 'Personal Care & Hygiene', description: 'Bathing, grooming, dressing, toileting assistance' },
  { icon: 'ðŸ½ï¸', title: 'Nutrition & Feeding Support', description: 'Light meal prep, serving, feeding help, hydration reminders' },
  { icon: '🚶', title: 'Mobility & Safety', description: 'Safe transfers, supervised walks, repositioning, fall prevention' },
  { icon: '💓', title: 'Basic Vital Monitoring', description: 'Temp, BP, pulse, SpOâ‚‚ checks with timely alerts' },
  { icon: '🤝', title: 'Companionship & Engagement', description: 'Conversation, reading, safe activities' },
  { icon: '📱', title: 'Family Communication', description: 'Daily care logs, WhatsApp updates, incident reporting' },
  { icon: 'ðŸ ', title: 'Environment Hygiene', description: 'Light housekeeping around patient area, linen change' },
  { icon: '🚨', title: 'Emergency Preparedness', description: 'Escalation plan, nurse helpline, doctor consult if needed' },
];
