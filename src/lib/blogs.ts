import { BABY_CARE_BLOG_POSTS } from '@/lib/babyCareBlogs';
import { ADVANCE_NURSING_BLOG_POSTS } from '@/lib/advanceNursingCareBlogs';
import { SPECIALTY_NURSING_BLOG_ARTICLES } from '@/lib/specialtyNursingCareBlogs';
import { HOME_NURSING_BLOG_ARTICLES } from '@/lib/homeNursingCareBlogs';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  date: string;
  keywords: string[];
}

export const SPECIALTY_NURSING_BLOG_POSTS: BlogPost[] = SPECIALTY_NURSING_BLOG_ARTICLES.map(article => ({
  slug: article.slug,
  title: article.title,
  excerpt: article.excerpt,
  image: article.image,
  readTime: article.readTime,
  date: article.date,
  keywords: article.keywords,
}));

export const HOME_NURSING_BLOG_POSTS: BlogPost[] = HOME_NURSING_BLOG_ARTICLES.map(article => ({
  slug: article.slug,
  title: article.title,
  excerpt: article.excerpt,
  image: article.image,
  readTime: article.readTime,
  date: article.date,
  keywords: article.keywords,
}));

export const BASIC_NURSING_CARE_BLOG_POSTS: BlogPost[] = [
  {
    slug: 'palliative-care-at-home',
    title: 'Palliative Care at Home — Comfort & Dignity for Loved Ones',
    excerpt: 'Facing a life-limiting illness can be overwhelming — for the person and the family. Palliative care at home focuses on comfort, dignity, and emotional well-being rather than aggressive hospital treatment.',
    image: '/images/pik-14.png',
    readTime: '6 min read',
    date: '2025-01-15',
    keywords: ['palliative care at home chennai', 'home palliative care'],
  },
  {
    slug: 'post-hospital-recovery-at-home',
    title: 'Post-Hospital Recovery at Home – How a Caregiver Can Help',
    excerpt: 'Recovering from surgery or illness is often faster and more comfortable at home. A professional caregiver can play a vital role in making recovery smoother.',
    image: '/images/pik-15.png',
    readTime: '5 min read',
    date: '2025-01-20',
    keywords: ['post hospital recovery at home', 'home recovery care'],
  },
  {
    slug: 'post-surgery-recovery-at-home',
    title: 'Post-Surgery Recovery for Adults at Home — Safety & Comfort Tips',
    excerpt: 'Recovering after surgery doesn’t have to mean a long hospital stay. With the right Basic Nursing Care at home, you can heal faster, reduce infection risk, and stay comfortable.',
    image: '/images/pik-12.png',
    readTime: '7 min read',
    date: '2025-02-01',
    keywords: ['post surgery recovery at home', 'caregiver after surgery'],
  },
  {
    slug: 'what-does-a-basic-nursing-care-caregiver-do',
    title: 'What Does a Patient Care Assistant Do A Complete Guide for Families',
    excerpt: 'When a loved one needs extra support at home, a Basic Nursing Care Caregiver (BNC) can make all the difference.',
    image: '/images/pik-13.jpeg',
    readTime: '5 min read',
    date: '2025-02-10',
    keywords: ['patient care assistant', 'basic nursing care caregiver'],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  ...BASIC_NURSING_CARE_BLOG_POSTS,
  ...ADVANCE_NURSING_BLOG_POSTS,
  ...BABY_CARE_BLOG_POSTS,
  ...SPECIALTY_NURSING_BLOG_POSTS,
  ...HOME_NURSING_BLOG_POSTS,
];
