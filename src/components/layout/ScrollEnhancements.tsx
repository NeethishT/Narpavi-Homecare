'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUp } from 'lucide-react';

const REVEAL_SELECTOR = [
  '.section',
  '.route-visual',
  '.trust-ribbon',
  '.home-service-strip',
  '.card',
  '.trust-card',
  '.service-image-card',
  '.blog-card',
  '.cta-strip',
  '.stats > div',
  '.equipment-panel',
  '.equipment-catalog-card',
  '.equipment-process-card',
  '.equipment-related-card',
  '.premium-footer__cta',
  '.premium-footer__col',
].join(',');

export default function ScrollEnhancements() {
  const pathname = usePathname();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = reduceMotion || !('IntersectionObserver' in window)
      ? null
      : new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('scroll-reveal--visible');
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      );

    const applyReveal = () => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
      elements.forEach((element, index) => {
        element.classList.add('scroll-reveal');
        element.style.setProperty('--reveal-delay', `${Math.min(index % 8, 6) * 55}ms`);

        const rect = element.getBoundingClientRect();
        const isAlreadyVisible = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
        if (reduceMotion || !observer || isAlreadyVisible) {
          element.classList.add('scroll-reveal--visible');
          return;
        }

        observer.observe(element);
      });
    };

    applyReveal();
    const delayedPass = window.setTimeout(applyReveal, 250);

    return () => {
      window.clearTimeout(delayedPass);
      observer?.disconnect();
    };
  }, [pathname]);

  return (
    <button
      type="button"
      className={`scroll-top ${showTop ? 'scroll-top--show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <ArrowUp size={21} />
    </button>
  );
}
