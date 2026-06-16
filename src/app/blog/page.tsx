import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { BLOG_POSTS } from '@/lib/blogs';

export const metadata: Metadata = {
  title: 'Blog — Home Care Guides',
  description: 'Expert articles on home nursing care, post-surgery recovery, palliative care and caregiver guides.',
  alternates: { canonical: 'https://www.narpavihomecare.com/blog' },
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
      <section className="section" id="blog-listing" style={{ marginTop: 0 }}>
        <div className="container">
          <div className="section__header">
            <h1>Expert Care Guides</h1>
            <p>Insights from our team to help you make informed care decisions.</p>
          </div>
          <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {BLOG_POSTS.map(post => (
              <Link key={post.slug} href={'/blog/' + post.slug} className="blog-card">
                <div className="blog-card__image">
                  <Image src={post.image} alt={post.title} width={450} height={250} style={{ objectFit: 'cover' }} />
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">{post.readTime}</div>
                  <h2 className="blog-card__title" style={{ fontSize: '1.15rem' }}>{post.title}</h2>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}