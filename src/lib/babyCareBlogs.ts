export interface BabyCareBlogPoint {
  title: string;
  desc: string;
}

export interface BabyCareBlogSection {
  id: string;
  title: string;
  body?: string[];
  points?: BabyCareBlogPoint[];
}

export interface BabyCareBlogArticle {
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
  sections: BabyCareBlogSection[];
  ctaTitle: string;
  ctaText: string;
}

export const BABY_CARE_BLOG_ARTICLES: BabyCareBlogArticle[] = [
  {
    slug: 'how-to-choose-right-baby-caregiver',
    title: 'How to Choose the Right Baby Caregiver in Chennai',
    excerpt: 'Key checks for newborn caregiver training, background verification, hygiene standards, and reliable backup support.',
    metaDescription: 'Looking for a reliable newborn caregiver in Chennai? Learn key checks for safety, training, background verification, hygiene, and professional support.',
    image: '/images/baby-care/blog-baby-caregiver-illustration.png',
    imageAlt: 'Narpavi baby caregiver guiding a mother at home',
    readTime: '5 min read',
    date: '2025-03-05',
    keywords: ['baby caregiver chennai', 'newborn caregiver', 'baby care at home', 'narpavi homecare baby care'],
    intro: 'Hiring the right caregiver brings peace of mind during the most delicate weeks at home. Before you choose baby care support, look for training, verification, safety discipline, and a service team that can respond when your family needs help.',
    toc: [
      { id: 'training-certification', label: 'Training and experience' },
      { id: 'verification-reviews', label: 'Verification and references' },
      { id: 'care-protocols', label: 'Care protocols' },
      { id: 'support-backup', label: 'Support and backup' },
    ],
    sections: [
      {
        id: 'training-certification',
        title: 'Check Training and Newborn Experience',
        body: ['A good baby caregiver should understand newborn handling, safe sleep, feeding support, diaper care, colic soothing, and basic warning signs. CPR awareness and newborn-care training are especially important for night care and premature baby support.'],
        points: [
          { title: 'Newborn handling', desc: 'Gentle lifting, burping, diapering, bathing support, and safe soothing.' },
          { title: 'Feeding awareness', desc: 'Breastfeeding support, bottle preparation, sterilization, and feeding logs.' },
          { title: 'Emergency escalation', desc: 'Ability to alert the family quickly for fever, breathing discomfort, poor feeding, or unusual crying.' },
        ],
      },
      {
        id: 'verification-reviews',
        title: 'Ask About Background Verification',
        body: ['Do not skip verification. Families should ask whether ID checks, address checks, background screening, and past work references are completed before a caregiver is assigned. Transparent services will explain this clearly.'],
        points: [
          { title: 'Identity checks', desc: 'Police or ID verification should be part of the hiring process.' },
          { title: 'Past references', desc: 'Reviews and family feedback help you understand reliability and behaviour.' },
        ],
      },
      {
        id: 'care-protocols',
        title: 'Look for Pediatrician-Guided Care Protocols',
        body: ['Baby care is not only about being loving. It also needs clear hygiene rules, safe sleep discipline, feeding safety, and escalation standards. Caregivers should follow structured routines that protect both baby and mother.'],
        points: [
          { title: 'Safe sleep', desc: 'Baby should be placed on the back on a firm, flat sleep surface.' },
          { title: 'Hygiene discipline', desc: 'Hand hygiene, clean clothes, bottle sterilization, and visitor control reduce infection risk.' },
          { title: 'Daily updates', desc: 'Sleep, feed, diaper, and comfort logs keep parents informed.' },
        ],
      },
      {
        id: 'support-backup',
        title: 'Choose a Service With Backup Support',
        body: ['A dependable homecare provider should not leave families stranded. Ask how replacements, leave coverage, supervision, and family communication are handled before you book.'],
        points: [
          { title: 'Replacement support', desc: 'Backup caregivers help avoid gaps when someone is unavailable.' },
          { title: 'Clear pricing', desc: 'Transparent package details prevent confusion after care begins.' },
        ],
      },
    ],
    ctaTitle: 'Need a Safe Baby Caregiver at Home?',
    ctaText: 'Narpavi Homecare matches families with trained, screened baby caregivers for newborn routines, night care, mother recovery, and twin support.',
  },
  {
    slug: 'night-care-for-newborns',
    title: 'Night Care for Newborns: Why Parents Need Rest Too',
    excerpt: 'How overnight baby care protects newborn routines while helping exhausted parents recover and rest.',
    metaDescription: 'Learn why night care services help newborns and exhausted parents. See how trained caregivers support safe sleep, feeding, soothing, and night logs.',
    image: '/images/baby-care/blog-night-care-illustration.png',
    imageAlt: 'Narpavi night baby caregiver soothing a newborn at home',
    readTime: '5 min read',
    date: '2025-03-08',
    keywords: ['night baby care chennai', 'newborn night care', 'overnight baby caregiver', 'parents rest newborn care'],
    intro: 'Sleep deprivation is one of the hardest parts of early parenthood. Professional night baby care lets parents rest while a trained caregiver supports safe sleep, feeding, burping, soothing, and simple night logs.',
    toc: [
      { id: 'safe-sleep', label: 'Safe sleep at night' },
      { id: 'feeding-support', label: 'Feeding without stress' },
      { id: 'night-monitoring', label: 'Night monitoring' },
      { id: 'parent-wellbeing', label: 'Parents need recovery too' },
    ],
    sections: [
      {
        id: 'safe-sleep',
        title: 'Safe Sleep Comes First',
        body: ['Night care should never compromise newborn safety. A trained caregiver follows safe sleep routines, keeps the sleep area clear, and watches for discomfort during the night.'],
        points: [
          { title: 'Back sleeping', desc: 'Babies are placed on their backs unless a doctor advises otherwise.' },
          { title: 'Clear sleep space', desc: 'No pillows, loose blankets, soft toys, or unsafe sleep positions.' },
          { title: 'Calm night routine', desc: 'Dim lights and gentle soothing help babies settle without overstimulation.' },
        ],
      },
      {
        id: 'feeding-support',
        title: 'Feeding Without Stress',
        body: ['Night caregivers can assist with breastfeeding support, formula preparation, bottle sterilization, burping, and settling the baby after feeds. Parents can rest while still receiving clear updates.'],
        points: [
          { title: 'Feed logs', desc: 'Time, quantity, burping, and comfort notes help parents track patterns.' },
          { title: 'Sterilization', desc: 'Bottles and pump parts are handled with clean, safe routines.' },
        ],
      },
      {
        id: 'night-monitoring',
        title: 'Health Monitoring Through the Night',
        body: ['Trained caregivers observe feeding refusal, fever, colic symptoms, breathing discomfort, unusual crying, or lethargy and escalate concerns to the family quickly.'],
        points: [
          { title: 'Early warning signs', desc: 'Prompt attention helps families avoid delays in care.' },
          { title: 'Family updates', desc: 'Simple night summaries reduce anxiety the next morning.' },
        ],
      },
      {
        id: 'parent-wellbeing',
        title: 'Better Rest Helps Parents Recover',
        body: ['Exhaustion affects postnatal recovery, mood, milk supply, and bonding. Reliable night care gives parents a chance to sleep while knowing the baby is safe and cared for.'],
      },
    ],
    ctaTitle: 'Ready for Peaceful Nights?',
    ctaText: 'Narpavi Homecare provides professional overnight newborn support in Chennai for safe sleep, feeding routines, and parent rest.',
  },
  {
    slug: 'safe-hygiene-infection-control-newborns',
    title: 'Safe Hygiene & Infection Control for Newborns at Home',
    excerpt: 'Simple home hygiene practices for hand hygiene, feeding safety, cord care, and visitor management.',
    metaDescription: 'Protect your newborn from infections at home. Learn hygiene best practices and how trained baby caregivers keep newborns safe.',
    image: '/images/baby-care/blog-hygiene-control-illustration.png',
    imageAlt: 'Narpavi baby caregiver following hygiene before newborn care',
    readTime: '4 min read',
    date: '2025-03-12',
    keywords: ['newborn hygiene at home', 'infection control newborn', 'baby care hygiene', 'cord care at home'],
    intro: 'Newborns have delicate immune systems, so hygiene at home matters every day. Clean hands, safe feeding routines, cord care, and visitor discipline can reduce infection risk and keep babies comfortable.',
    toc: [
      { id: 'hand-hygiene', label: 'Hand hygiene first' },
      { id: 'feeding-safety', label: 'Feeding safety' },
      { id: 'bath-cord-care', label: 'Bathing and cord care' },
      { id: 'visitor-control', label: 'Limit exposure' },
    ],
    sections: [
      {
        id: 'hand-hygiene',
        title: 'Hand Hygiene Comes First',
        body: ['Everyone who touches the baby should wash or sanitize their hands first. This includes caregivers, parents, siblings, and visitors. Caregivers should also change into clean clothes when needed.'],
        points: [
          { title: 'Before every touch', desc: 'Wash hands before feeding, diaper care, bathing, and soothing.' },
          { title: 'Visitor sanitizer', desc: 'Keep sanitizer near the baby area and use it consistently.' },
        ],
      },
      {
        id: 'feeding-safety',
        title: 'Keep Feeding Items Clean',
        body: ['Bottle parts, pump parts, spoons, and feeding surfaces should be cleaned and sterilized as advised. Formula should be prepared with safe water and discarded when it is no longer suitable.'],
        points: [
          { title: 'Sterilize properly', desc: 'Clean bottles and pump parts after every use.' },
          { title: 'Safe preparation', desc: 'Use boiled and cooled water for formula when appropriate.' },
        ],
      },
      {
        id: 'bath-cord-care',
        title: 'Bathing and Cord Care',
        body: ['Newborn skin is sensitive. Use mild cleansers, avoid harsh fragrance, keep the diaper area dry, and keep the umbilical stump clean and dry until it naturally falls off.'],
      },
      {
        id: 'visitor-control',
        title: 'Limit Exposure to Illness',
        body: ['Avoid crowded places and visitors with cough, fever, cold, or infection symptoms. Family members returning from outside should wash hands and change clothes before handling the baby.'],
        points: [
          { title: 'Clean handling', desc: 'Use gloves only when appropriate, and never as a replacement for clean hands.' },
          { title: 'Early detection', desc: 'Caregivers should report fever, poor feeding, breathing discomfort, or unusual sleepiness.' },
        ],
      },
    ],
    ctaTitle: 'Want Expert Hygiene Support?',
    ctaText: 'Narpavi Homecare caregivers follow safe newborn hygiene routines, feeding safety, and infection-control discipline at home.',
  },
  {
    slug: 'twin-baby-care-at-home',
    title: 'Twin Baby Care at Home: Real Tips for Double the Joy',
    excerpt: 'Practical feeding, sleep, and support tips for families caring for twins at home.',
    metaDescription: 'Caring for twins can feel overwhelming. Discover practical tips on feeding, sleep, recovery, and professional home baby care support.',
    image: '/images/baby-care/blog-twin-baby-care-illustration.png',
    imageAlt: 'Narpavi caregiver helping parents with twin newborn care at home',
    readTime: '6 min read',
    date: '2025-03-15',
    keywords: ['twin baby care at home', 'newborn twins care', 'twin night care', 'baby care for twins chennai'],
    intro: 'Bringing home two newborns is a double blessing and a double challenge. From feeding to sleep schedules, parents of twins often feel exhausted. A few structured routines can make twin care calmer and safer at home.',
    toc: [
      { id: 'feeding-routine', label: 'Master feeding routines' },
      { id: 'sync-sleep', label: 'Sync sleep early' },
      { id: 'divide-support', label: 'Divide support' },
      { id: 'mother-recovery', label: 'Care for the mother' },
    ],
    sections: [
      {
        id: 'feeding-routine',
        title: 'Master the Feeding Game',
        body: ['Twin feeding becomes easier when each baby has a separate log for feeds, diapers, burping, and comfort. Scheduled bottle preparation and sterilization can reduce confusion during busy hours.'],
        points: [
          { title: 'Track separately', desc: 'Use separate notes for each twin so no feed or diaper change is missed.' },
          { title: 'Prepare safely', desc: 'Keep bottles, burp cloths, and sterilized supplies ready before feeding time.' },
          { title: 'Support tandem feeding', desc: 'Twin pillows and caregiver assistance can help when advised and comfortable.' },
        ],
      },
      {
        id: 'sync-sleep',
        title: 'Try to Sync Sleep Early',
        body: ['When one baby wakes for a feed, many parents gently wake the second baby too so routines slowly align. Expect some staggered naps in the beginning; consistency improves over time.'],
        points: [
          { title: 'Safe separate spaces', desc: 'Each baby needs a safe, flat sleep area.' },
          { title: 'Dim night routine', desc: 'Low light and calm handling reduce overstimulation.' },
        ],
      },
      {
        id: 'divide-support',
        title: 'Divide and Conquer',
        body: ['When possible, assign one baby per adult during busy routines like feeds, burping, bathing support, or bedtime. Professional night caregivers can help when exhaustion becomes too much.'],
      },
      {
        id: 'mother-recovery',
        title: 'Care for the Mother Too',
        body: ['Twin care often means double recovery demands, especially after C-section. Mothers need rest, hydration, nutrition, emotional reassurance, and practical help with baby routines.'],
        points: [
          { title: 'Accept help early', desc: 'Support prevents burnout before it becomes a crisis.' },
          { title: 'Use clear routines', desc: 'Shared logs help parents, grandparents, and caregivers stay coordinated.' },
        ],
      },
    ],
    ctaTitle: 'Feeling Overwhelmed With Twins?',
    ctaText: 'Narpavi Homecare provides trained caregivers for twin handling, feeding support, night care, and mother recovery at home.',
  },
];

export const BABY_CARE_BLOG_POSTS = BABY_CARE_BLOG_ARTICLES.map((article) => ({
  slug: article.slug,
  title: article.title,
  excerpt: article.excerpt,
  image: article.image,
  readTime: article.readTime,
  date: article.date,
  keywords: article.keywords,
}));

export function getBabyCareBlogArticle(slug: string) {
  return BABY_CARE_BLOG_ARTICLES.find((article) => article.slug === slug);
}
