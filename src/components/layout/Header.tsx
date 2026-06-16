'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Mail, MapPin, Menu, MessageCircle, X } from 'lucide-react';
import { BRAND, NAV_ITEMS } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMobileSection(null);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`} id="site-header">
        <div className="header__top">
          <div className="container header__top-inner">
            <span className="header__top-location"><MapPin size={15} /> Chennai</span>
            <div className="header__top-actions">
              <a href={`mailto:${BRAND.email}`}><Mail size={15} /> Email</a>
              <a href={BRAND.whatsapp} target="_blank" rel="noopener"><MessageCircle size={15} /> WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="container header__main">
          <Link href="/" className="header__logo" id="logo">
            Narpavi<span>Homecare</span>
          </Link>
          <nav className="nav" id="main-nav">
            {NAV_ITEMS.map((item, i) => (
              <div key={i} className={`nav__item ${('children' in item && item.children) ? 'nav__item--has-children' : ''}`}>
                <Link href={item.href}>
                  {item.label}
                  {('children' in item && item.children) && <ChevronDown className="nav__chevron" size={14} />}
                </Link>
                {('children' in item && item.children) && (
                  <div className={`nav__dropdown ${item.children.length > 7 ? 'nav__dropdown--grid' : ''}`}>
                    {item.children.map((child, j) => (
                      <Link key={j} href={child.href} className={('highlight' in child && child.highlight) ? 'highlight' : ''}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <Link href="/contact" className="btn btn--primary btn--sm header__cta-desktop" id="header-cta">
            Book Free Assessment
          </Link>
          <button className="mobile-toggle" onClick={() => setMobileOpen(true)} aria-label="Open menu" id="mobile-menu-toggle">
            <Menu size={26} />
          </button>
        </div>
      </header>

      {mobileOpen && <div className="mobile-nav__overlay mobile-nav__overlay--open" onClick={closeMobileMenu} />}
      <div className={`mobile-nav ${mobileOpen ? 'mobile-nav--open' : ''}`} id="mobile-nav">
        <div className="mobile-nav__header">
          <Link href="/" className="mobile-nav__logo" onClick={closeMobileMenu}>Narpavi<span>Homecare</span></Link>
          <button className="mobile-nav__close" onClick={closeMobileMenu} aria-label="Close menu"><X size={21} /></button>
        </div>
        <div className="mobile-nav__links">
          {NAV_ITEMS.map((item, i) => (
            <div key={i} className="mobile-nav__group">
              {('children' in item && item.children) ? (
                <>
                  <div className="mobile-nav__row">
                    <Link href={item.href} onClick={closeMobileMenu}>{item.label}</Link>
                    <button
                      className="mobile-nav__sub-toggle"
                      onClick={() => setOpenMobileSection(openMobileSection === item.label ? null : item.label)}
                      aria-expanded={openMobileSection === item.label}
                      aria-label={`Toggle ${item.label} menu`}
                    >
                      <ChevronDown size={18} />
                    </button>
                  </div>
                  <div className={`mobile-nav__sub ${openMobileSection === item.label ? 'mobile-nav__sub--open' : ''}`}>
                  {item.children.map((child, j) => (
                    <Link key={j} href={child.href} onClick={closeMobileMenu}>
                      {child.label}
                    </Link>
                  ))}
                  </div>
                </>
              ) : (
                <Link href={item.href} onClick={closeMobileMenu}>{item.label}</Link>
              )}
            </div>
          ))}
          <div className="mobile-nav__cta">
            <Link href="/contact" className="btn btn--primary" onClick={closeMobileMenu}>
              Book Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
