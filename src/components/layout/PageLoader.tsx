'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

const MIN_VISIBLE_MS = 650;
const MAX_VISIBLE_MS = 5000;

function isInternalNavigation(event: MouseEvent) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return false;
  }

  const target = event.target;
  if (!(target instanceof Element)) return false;

  const anchor = target.closest<HTMLAnchorElement>('a');
  if (!anchor) return false;
  if (anchor.hasAttribute('download')) return false;
  if (anchor.target && anchor.target !== '_self') return false;

  const href = anchor.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('https://wa.me')) {
    return false;
  }

  const nextUrl = new URL(anchor.href, window.location.href);
  if (nextUrl.origin !== window.location.origin) return false;

  const currentUrl = new URL(window.location.href);
  return nextUrl.pathname !== currentUrl.pathname || nextUrl.search !== currentUrl.search;
}

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const startedAt = useRef(0);
  const previousPathname = useRef(pathname);
  const finishTimer = useRef<number | null>(null);
  const fallbackTimer = useRef<number | null>(null);

  const clearTimers = useCallback(() => {
    if (finishTimer.current) window.clearTimeout(finishTimer.current);
    if (fallbackTimer.current) window.clearTimeout(fallbackTimer.current);
    finishTimer.current = null;
    fallbackTimer.current = null;
  }, []);

  const finishLoading = useCallback(() => {
    const elapsed = Date.now() - startedAt.current;
    const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
    if (finishTimer.current) window.clearTimeout(finishTimer.current);
    finishTimer.current = window.setTimeout(() => {
      setLoading(false);
      clearTimers();
    }, remaining);
  }, [clearTimers]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!isInternalNavigation(event)) return;
      clearTimers();
      startedAt.current = Date.now();
      setLoading(true);
      fallbackTimer.current = window.setTimeout(() => setLoading(false), MAX_VISIBLE_MS);
    };

    window.addEventListener('click', handleClick, { capture: true });
    return () => {
      window.removeEventListener('click', handleClick, { capture: true });
      clearTimers();
    };
  }, [clearTimers]);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;
    if (loading) finishLoading();
  }, [pathname, loading, finishLoading]);

  if (!loading) return null;

  return (
    <div className="page-loader" role="status" aria-live="polite" aria-label="Loading next page">
      <div className="page-loader__card">
        <div className="page-loader__logo-wrap">
          <span className="page-loader__ring" />
          <Image src="/images/logo.png" alt="Narpavi Homecare" width={96} height={96} className="page-loader__logo" priority />
        </div>
        <strong>Loading care page</strong>
        <span>Please wait a moment</span>
        <div className="page-loader__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}
