'use client';

import { ArrowRight } from 'lucide-react';

export default function CTAForm({ title = 'Book Your Free Assessment' }: { title?: string }) {
  return (
    <div className="cta-form" id="cta-form">
      <h3>{title}</h3>
      <div className="cta-form__field">
        <input type="text" placeholder="Your Name" id="form-name" aria-label="Your name" />
      </div>
      <div className="cta-form__field">
        <input type="tel" placeholder="Phone Number" id="form-phone" aria-label="Phone number" />
      </div>
      <div className="cta-form__field">
        <input type="text" placeholder="City / Location" id="form-city" aria-label="City" />
      </div>
      <button type="button" className="btn btn--primary" id="form-submit">
        Book Free Assessment <ArrowRight size={17} />
      </button>
    </div>
  );
}
