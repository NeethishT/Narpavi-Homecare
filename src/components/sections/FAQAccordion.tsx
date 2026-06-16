'use client';
import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import type { FAQ } from '@/lib/faqs';

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openId, setOpenId] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="faq-list" id="faq-accordion">
        {faqs.map(faq => (
          <div key={faq.id} className={`faq-item ${openId === faq.id ? 'faq-item--open' : ''}`}>
            <button
              className="faq-item__question"
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              aria-expanded={openId === faq.id}
              id={`faq-q-${faq.id}`}
            >
              <span>{faq.question}</span>
              <span className="faq-item__icon">
                {openId === faq.id ? <Minus size={17} /> : <Plus size={17} />}
              </span>
            </button>
            <div className="faq-item__answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
