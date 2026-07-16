export interface SpecialtyNursingBlogPoint {
  title: string;
  desc: string;
}

export interface SpecialtyNursingBlogSection {
  id: string;
  title: string;
  body?: string[];
  points?: SpecialtyNursingBlogPoint[];
}

export interface SpecialtyNursingBlogArticle {
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
  sections: SpecialtyNursingBlogSection[];
  ctaTitle: string;
  ctaText: string;
  serviceHref: string;
  serviceLabel: string;
}

const serviceHref = '/home-nursing-care/specialty-nursing-care';
const serviceLabel = 'View Specialty Nursing Care';

export const SPECIALTY_NURSING_BLOG_ARTICLES: SpecialtyNursingBlogArticle[] = [
  {
    slug: 'tracheostomy-care-home-checklist',
    title: 'Tracheostomy Care at Home — Complete Safety Checklist',
    excerpt: 'A complete safety checklist for families managing ICU step-down airway care and sterile suctioning in Chennai.',
    metaDescription: 'Learn safe tracheostomy care at home in Chennai. Airway suction, stoma cleaning, warning signs, and ICU step-down nursing support.',
    image: '/images/specialty-nursing-care/Pik 13.jpeg',
    imageAlt: 'Medical supplies for tracheostomy care at home',
    readTime: '6 min read',
    date: '2025-04-10',
    keywords: ['tracheostomy care at home', 'trach suctioning home care', 'ICU step down nursing Chennai', 'home airway care'],
    intro: 'Recovering at home after a tracheostomy can feel overwhelming. Proper tracheostomy care is critical to prevent infection, keep the airway clear, and avoid emergency hospital visits. With the right guidance and professional nursing support, families in Chennai can safely manage this life-saving airway at home.',
    toc: [
      { id: 'why-home-care', label: 'Why home tracheostomy care matters' },
      { id: 'essential-supplies', label: 'Essential supplies checklist' },
      { id: 'daily-routine', label: 'Daily tracheostomy care routine' },
      { id: 'red-flags', label: 'Warning signs & emergency response' },
      { id: 'infection-prevention', label: 'Infection prevention tips' }
    ],
    sections: [
      {
        id: 'why-home-care',
        title: 'Why Tracheostomy Care at Home Matters',
        body: [
          'Many patients are discharged from ICU with a tracheostomy after critical illness, respiratory failure, or major surgery. Staying in the hospital longer can be expensive and increase the risk of hospital-acquired infections.',
          'Specialty nursing at home allows patients to recover comfortably in familiar surroundings while receiving hospital-level airway management. Having a trained professional ensures that sterile suctioning and cannula maintenance are performed correctly every time.'
        ]
      },
      {
        id: 'essential-supplies',
        title: 'Essential Supplies You’ll Need',
        body: [
          'Airway safety requires having all necessary tools ready and organized. We recommend keeping all supplies in a clean, designated tray or box near the patient\'s bed.'
        ],
        points: [
          { title: 'Suction Machine & Catheters', desc: 'A medical-grade suction machine and sterile suction catheters of the correct size.' },
          { title: 'Sterile Water & Saline', desc: 'Used for flushing suction tubing and cleaning around the stoma site.' },
          { title: 'PPE & Gloves', desc: 'Sterile gloves for suctioning, clean gloves for stoma care, and surgical masks.' },
          { title: 'Trach Dressing & Ties', desc: 'Pre-cut keyhole gauze dressings and secure ties or Velcro collars to hold the tube in place.' },
          { title: 'Emergency Kit', desc: 'A spare tracheostomy tube of the same size, one size smaller, and an obturator kept at the bedside.' }
        ]
      },
      {
        id: 'daily-routine',
        title: 'Daily Tracheostomy Care Routine',
        body: [
          'Consistency is key to maintaining a clear airway and healthy skin. A professional nurse ensures these procedures follow strict aseptic protocols.'
        ],
        points: [
          { title: 'WHO Hand Hygiene', desc: 'Wash hands thoroughly before and after touching any part of the tracheostomy tube.' },
          { title: 'Inspect the Stoma', desc: 'Check the skin around the tube daily for redness, swelling, skin breakdown, or foul-smelling secretions.' },
          { title: 'Clean & Dressing Change', desc: 'Gently clean the skin around the stoma using sterile saline and gauze. Apply a fresh, dry trach dressing.' },
          { title: 'Perform Suctioning', desc: 'Suction only when needed (e.g., noisy breathing, visible secretions) using a sterile, single-use catheter.' },
          { title: 'Humidification Support', desc: 'Provide continuous humidification or regular nebulisation to keep secretions thin and prevent tube blockage.' }
        ]
      },
      {
        id: 'red-flags',
        title: 'Early Warning Signs — Act Immediately',
        body: [
          'Airway emergencies can escalate quickly. If you notice any of these signs, contact your home nurse or rush the patient to the nearest hospital emergency room.'
        ],
        points: [
          { title: 'Breathing Distress', desc: 'Increased effort to breathe, rapid breathing, or noisy rattling sounds that suctioning doesn’t clear.' },
          { title: 'Low Oxygen Saturation', desc: 'SpO2 levels drop below 90% or the patient exhibits bluish lips or skin (cyanosis).' },
          { title: 'Active Bleeding', desc: 'Fresh blood coughing up from the tube or continuous bleeding from the stoma site.' },
          { title: 'Tube Dislodgement', desc: 'The tracheostomy tube is partially or completely pulled out from the neck stoma.' },
          { title: 'Infection Signs', desc: 'Fever, increased pain, redness, or thick foul-smelling green/yellow secretions.' }
        ]
      },
      {
        id: 'infection-prevention',
        title: 'Infection Prevention Tips',
        body: [
          'A tracheostomy bypasses the body\'s natural nasal filtering system, making the lungs highly vulnerable to infections.',
          'To prevent pneumonia, always use a sterile catheter for each suctioning session. Never touch the inner cannula or tube opening with bare hands. Additionally, keep the patient’s head elevated at a 30–45 degree angle when resting or receiving feeds to prevent reflux and aspiration.'
        ]
      }
    ],
    ctaTitle: 'Request Professional Airway Care at Home',
    ctaText: 'Speak to our clinical team about arranging IV-certified, tracheostomy-trained nurses and medical equipment setup in Chennai.',
    serviceHref,
    serviceLabel
  },
  {
    slug: 'managing-peg-ng-tube-feeding',
    title: 'Managing PEG & NG Tube Feeding — Practical At-Home Tips',
    excerpt: 'Practical tips for smooth nutrition, flushing, clogging prevention and aspiration safety for tube feeding at home.',
    metaDescription: 'Guidelines for safe NG and PEG tube feeding at home. Learn flushing techniques, feed positioning, blockage prevention, and safety checklists.',
    image: '/images/specialty-nursing-care/Pik 15.jpeg',
    imageAlt: 'Caregiver preparing enteral nutrition feed',
    readTime: '5 min read',
    date: '2025-04-15',
    keywords: ['PEG tube feeding at home', 'NG tube care Chennai', 'enteral nutrition guide', 'Ryles tube feeding'],
    intro: 'Feeding tubes such as Ryle’s (NG) tubes and PEG/PEJ tubes make it possible for patients with swallowing difficulties, stroke, neurological illnesses, or cancer to receive proper nutrition at home. But poor care can lead to aspiration pneumonia, infection, tube blockage, and costly re-hospitalisations. This guide helps families in Chennai care for feeding tubes safely while keeping patients comfortable.',
    toc: [
      { id: 'why-feeding-works', label: 'Why home tube feeding works' },
      { id: 'essential-supplies', label: 'Essential supplies' },
      { id: 'safe-routine', label: 'Safe feeding routine' },
      { id: 'red-flags', label: 'Red flags to watch for' },
      { id: 'infection-prevention', label: 'Infection & blockage prevention' }
    ],
    sections: [
      {
        id: 'why-feeding-works',
        title: 'Why Tube Feeding at Home Works',
        body: [
          'Enteral tube feeding allows stable patients to receive optimal nutrition, hydration, and medications in the comfort of their homes, rather than staying in a hospital ward just for feeding support.',
          'With a structured care plan, proper positioning, and trained nursing support, families can maintain the patient\'s weight, prevent muscle wasting, and support recovery with minimal complications.'
        ]
      },
      {
        id: 'essential-supplies',
        title: 'Essential Supplies to Keep Ready',
        body: [
          'To maintain hygiene, store all feeding equipment and nutrition formulas in a dedicated, clean space separate from regular household items.'
        ],
        points: [
          { title: 'Prescribed Formula', desc: 'Doctor-approved commercial formula or cleanly blended home feeds.' },
          { title: 'Enteral Syringes', desc: '60ml catheter-tip syringes for feeding and flushing.' },
          { title: 'Clean Water', desc: 'Boiled and cooled water or sterile water for flushing the tube.' },
          { title: 'PEG Dressing Kits', desc: 'Sterile gauze, cleaning solution, and split sponges for PEG site care.' },
          { title: 'Clamps & Caps', desc: 'Secure closures to keep the tube sealed between feeds and prevent stomach backup.' }
        ]
      },
      {
        id: 'safe-routine',
        title: 'Safe Feeding Routine Step-by-Step',
        body: [
          'Following a systematic checklist during every feed is the best way to prevent aspiration—a serious condition where food enters the lungs.'
        ],
        points: [
          { title: 'Upright Positioning', desc: 'Always sit the patient upright at a 30 to 45-degree angle during the feed, and maintain this position for 30–60 minutes afterward.' },
          { title: 'Check Placement & Patency', desc: 'Confirm the tube is in the correct position (by measuring tube length or checking pH) before administering any feed.' },
          { title: 'Pre-Feed Flushing', desc: 'Gently flush the tube with 30ml of clean water to ensure it is clear and open.' },
          { title: 'Administer Feed Slowly', desc: 'Pour or push the feed slowly over 20–30 minutes. Rushing feeds can cause nausea, cramps, or vomiting.' },
          { title: 'Post-Feed Flushing', desc: 'Flush with another 30ml of water immediately after the feed. This cleans the tube walls and prevents clogging.' }
        ]
      },
      {
        id: 'red-flags',
        title: 'Red Flags — Seek Help Immediately',
        body: [
          'Contact your medical team or home nursing agency immediately if the patient displays any of the following symptoms during or between feeds.'
        ],
        points: [
          { title: 'Choking & Coughing', desc: 'Coughing, spluttering, or shortness of breath during a feed, which suggests aspiration.' },
          { title: 'Tube Blockage', desc: 'Inability to flush water or feed through the tube, even under gentle pressure.' },
          { title: 'Accidental Displacement', desc: 'The tube slips out partially or completely. Never try to push an NG or PEG tube back in yourself.' },
          { title: 'PEG Site Inflammation', desc: 'Redness, severe pain, swelling, leakage of stomach contents, or foul discharge around the PEG tube skin site.' }
        ]
      },
      {
        id: 'infection-prevention',
        title: 'Infection & Blockage Prevention',
        body: [
          'To prevent bacterial growth, always wash your hands before handling the tube, clean the PEG site daily, and discard any prepared feed that has been left at room temperature for more than 4 hours.',
          'Never mix medications directly with the formula. Flush the tube before, between, and after administering each medication to avoid chemical interactions that block the line.'
        ]
      }
    ],
    ctaTitle: 'Get Expert Tube & PEG Feeding Support',
    ctaText: 'Our specialty nurses are fully trained in enteral feeding, tube site hygiene, nutrition monitoring and complication watch.',
    serviceHref,
    serviceLabel
  },
  {
    slug: 'colostomy-bag-care-tips-home',
    title: 'Colostomy Bag Care Tips You Can Follow at Home',
    excerpt: 'Learn stoma cleaning, skin protection, fitting tips and leakage prevention from specialty nurses in Chennai.',
    metaDescription: 'Essential colostomy bag care tips for families in Chennai. Learn how to clean stomas, change pouches, protect skin, and prevent odor.',
    image: '/images/specialty-nursing-care/PIk 14.jpeg',
    imageAlt: 'Ostomy care products and supplies',
    readTime: '6 min read',
    date: '2025-04-20',
    keywords: ['colostomy bag care', 'stoma care tips', 'ostomy nurse Chennai', 'ileostomy care at home'],
    intro: 'A colostomy is a surgical procedure where an opening (called a stoma) is created in the abdominal wall to divert waste into a specially designed colostomy bag. While it may seem overwhelming for patients and families initially, with the right guidance, colostomy care can become a safe and manageable part of daily life. At Narpavi Homecare, our trained nurses specialize in stoma and colostomy care at home in Chennai, helping patients manage hygiene, prevent infections, and live comfortably.',
    toc: [
      { id: 'why-home-stoma-care', label: 'Why home stoma care matters' },
      { id: 'practical-tips', label: 'Practical stoma care tips' },
      { id: 'warning-signs', label: 'Warning signs & complications' },
      { id: 'nursing-role', label: 'How professional nurses help' }
    ],
    sections: [
      {
        id: 'why-home-stoma-care',
        title: 'Why Colostomy Care at Home Matters',
        body: [
          'Proper stoma management is vital for the patient\'s physical comfort and psychological well-being. Keeping the stoma clean and correctly fitted avoids skin damage and maintains a normal quality of life.',
          'Good at-home care prevents peristomal skin irritation, avoids leakages, blocks foul odors, speeds post-surgical recovery, and minimizes the need for distressing hospital trips.'
        ]
      },
      {
        id: 'practical-tips',
        title: 'Practical Colostomy Bag Care Tips',
        body: [
          'Establishing a clean, structured routine makes ostomy management much simpler and less intimidating over time.'
        ],
        points: [
          { title: 'Maintain Proper Hygiene', desc: 'Wash hands before and after changes. Clean the stoma gently using warm water and a soft cloth; avoid harsh soaps.' },
          { title: 'Empty the Bag on Time', desc: 'Empty the pouch when it is one-third to half full. A full bag becomes heavy, pulls on the skin barrier, and is more likely to leak.' },
          { title: 'Gently Measure the Stoma', desc: 'Measure the stoma using a sizing guide before cutting a new skin barrier. An accurate fit prevents stool from touching and burning the skin.' },
          { title: 'Protect the Peristomal Skin', desc: 'Apply stoma powder or skin barrier film if the skin is slightly irritated. Allow the skin to dry completely before applying a new pouch.' },
          { title: 'Dietary Adjustments', desc: 'Introduce foods gradually. Avoid gas-producing foods (beans, carbonated drinks, cabbage) if they cause discomfort or rapid pouch bloating.' }
        ]
      },
      {
        id: 'warning-signs',
        title: 'Learn to Recognize Warning Signs',
        body: [
          'Watch the stoma and surrounding skin during every pouch change. Seek help from a stoma therapist or nurse if you notice abnormal skin changes.'
        ],
        points: [
          { title: 'Skin Breakdown', desc: 'Severe redness, raw skin, bleeding, or open sores directly under the adhesive barrier.' },
          { title: 'Stoma Color Change', desc: 'A healthy stoma is moist and pink/red. A stoma that looks pale, dark blue, purple, or black indicates poor blood flow.' },
          { title: 'Significant Stoma Swelling', desc: 'The stoma looks unusually swollen, protrudes far outward, or appears to have retracted inside the abdomen.' },
          { title: 'No Output', desc: 'No stool or gas output from the stoma for more than 4–6 hours, accompanied by abdominal pain or nausea.' }
        ]
      },
      {
        id: 'nursing-role',
        title: 'Role of Skilled Nursing in Colostomy Care',
        body: [
          'Managing a new stoma can be emotionally challenging. Narpavi Homecare\'s specialized nurses help by teaching families correct bag application, recommending stoma-friendly nutrition, monitoring healing, and offering reassurance to help patients regain their confidence and independence.'
        ]
      }
    ],
    ctaTitle: 'Need Professional Stoma Care Support?',
    ctaText: 'We arrange visits from stoma-trained nurses to assist with pouch fitting, skin protection, and caregiver training in Chennai.',
    serviceHref,
    serviceLabel
  },
  {
    slug: 'how-to-prevent-bedsores-bedridden',
    title: 'How to Prevent Bedsores in Bedridden Patients',
    excerpt: 'Essential bedsore prevention tips, pressure-relief methods, skin hygiene and home nursing solutions in Chennai.',
    metaDescription: 'Complete bedsore prevention guide for immobile patients. Learn positioning tips, hygiene standards, nutrition needs, and wound care solutions.',
    image: '/images/specialty-nursing-care/Pik 16.jpeg',
    imageAlt: 'Elderly patient resting on a pressure relief mattress',
    readTime: '5 min read',
    date: '2025-04-25',
    keywords: ['prevent bedsores at home', 'pressure ulcer care Chennai', 'wound care nursing', 'bedridden patient care'],
    intro: 'Bedsores (also called pressure ulcers or decubitus ulcers) are one of the most common complications in bedridden or immobile patients. They occur when constant pressure reduces blood flow to the skin, leading to painful wounds and infections. The good news? Bedsores are largely preventable with the right care, positioning, and nursing support. At Narpavi Homecare in Chennai, our skilled nurses specialize in bedsore prevention and wound care at home, ensuring comfort, dignity, and recovery for patients.',
    toc: [
      { id: 'what-causes-bedsores', label: 'What causes bedsores?' },
      { id: 'risk-factors', label: 'Bedsore risk factors' },
      { id: 'bedsore-prevention', label: 'Bedsore prevention checklist' },
      { id: 'narpavi-support', label: 'How professional care helps' }
    ],
    sections: [
      {
        id: 'what-causes-bedsores',
        title: 'What Causes Bedsores?',
        body: [
          'Bedsores develop when constant pressure is applied against a specific area of the body—typically bony parts like the heels, tailbone, hips, and shoulder blades.',
          'This pressure blocks blood supply to the skin and underlying tissues. Without blood flow, the tissue begins to break down, forming a painful open sore that is highly vulnerable to bacterial infection.'
        ]
      },
      {
        id: 'risk-factors',
        title: 'Bedsore Risk Factors',
        body: [
          'Immobile patients who cannot reposition themselves without help are at the highest risk. Other factors include poor nutrition (which weakens skin elasticity) and moisture from sweat or incontinence, which softens the skin and makes it tear easily.'
        ]
      },
      {
        id: 'bedsore-prevention',
        title: 'Practical Tips to Prevent Bedsores at Home',
        body: [
          'Preventing bedsores is far easier than healing them. Follow this daily checklist to protect your loved one\'s skin integrity.'
        ],
        points: [
          { title: 'Reposition Every 2 Hours', desc: 'Turn the patient regularly if they are bedridden. Change their posture slightly to shift weight off bony points.' },
          { title: 'Use Pressure-Relief Surfaces', desc: 'Use an alternating air mattress (bubble mattress) and place foam cushions under heels and ankles to float them.' },
          { title: 'Keep Skin Clean & Dry', desc: 'Clean skin promptly after incontinence. Use moisture-barrier creams to protect vulnerable skin from moisture damage.' },
          { title: 'Inspect Skin Daily', desc: 'Examine the back, tailbone, hips, and heels daily. Look for early warning signs like persistent redness that does not fade when pressed.' },
          { title: 'Optimize Nutrition', desc: 'Ensure a diet rich in protein, Vitamin C, and zinc. Keep the patient well-hydrated to keep skin cells strong and healthy.' }
        ]
      },
      {
        id: 'narpavi-support',
        title: 'How Narpavi Homecare Helps',
        body: [
          'If a bedsore has already developed (ranging from Stage 1 redness to Stage 4 deep wounds), it requires sterile management. Our nurses provide specialized wound dressings (using hydrocolloids, foam, alginates, or silver dressings), manage pain, monitor for infection, and guide the family on positioning and nutrition to speed up healing.'
        ]
      }
    ],
    ctaTitle: 'Get Professional Wound & Bedsore Care',
    ctaText: 'Arrange experienced nurses for bedsore prevention, dressing changes, and pressure-relief advice at home in Chennai.',
    serviceHref,
    serviceLabel
  }
];

export function getSpecialtyNursingBlogArticle(slug: string) {
  return SPECIALTY_NURSING_BLOG_ARTICLES.find(article => article.slug === slug);
}
