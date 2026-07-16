'use client';

import type { CSSProperties } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ICU_AT_HOME_PACKAGES, type ICUAtHomePackage } from '@/lib/icuAtHomeData';
import SiteIcon from '@/components/ui/SiteIcon';

function packageStyle(pkg: ICUAtHomePackage) {
  return {
    '--package-color': pkg.color,
    '--package-gradient': pkg.gradient,
  } as CSSProperties;
}

export default function ICUAtHomePackageSelector() {
  const [selectedPackageId, setSelectedPackageId] = useState(ICU_AT_HOME_PACKAGES[0]?.id ?? '');
  const selectedPackage = ICU_AT_HOME_PACKAGES.find((pkg) => pkg.id === selectedPackageId) ?? ICU_AT_HOME_PACKAGES[0];

  if (!selectedPackage) return null;

  return (
    <div className="elder-packages-layout">
      <aside className="elder-sidebar" aria-label="ICU at home package navigation">
        <h3>Packages</h3>
        {ICU_AT_HOME_PACKAGES.map((pkg) => {
          const isSelected = pkg.id === selectedPackage.id;

          return (
            <button
              type="button"
              className={`elder-sidebar__link baby-package-selector__tab icu-package-selector__tab${isSelected ? ' is-active' : ''}`}
              key={pkg.id}
              style={packageStyle(pkg)}
              aria-pressed={isSelected}
              onClick={() => setSelectedPackageId(pkg.id)}
            >
              <span><SiteIcon name={pkg.icon} size={19} /></span>
              <strong>{pkg.name}</strong>
            </button>
          );
        })}
      </aside>

      <div className="elder-package-list" aria-live="polite">
        <article
          className="elder-package-card icu-package-selector-card"
          id={`package-${selectedPackage.id}`}
          key={selectedPackage.id}
          style={packageStyle(selectedPackage)}
        >
          <div className="elder-package-card__header">
            <div>
              {selectedPackage.badge && <div className="icu-package-badge">{selectedPackage.badge}</div>}
              <h3>{selectedPackage.fullTitle}</h3>
            </div>
          </div>

          <div className="elder-package-card__body">
            <div className="elder-package-card__media">
              <Image
                src={selectedPackage.image}
                alt={selectedPackage.fullTitle}
                fill
                sizes="(max-width: 992px) 100vw, 28vw"
              />
            </div>
            <div>
              <h4>Best For</h4>
              <div className="elder-tag-list">
                {selectedPackage.bestFor.map((item) => <span key={item}>{item}</span>)}
              </div>

              <h4>Scope of Service:</h4>
              <div className="elder-highlight-list">
                {selectedPackage.scope.map((item) => (
                  <div className="elder-highlight-point" key={item}>
                    <SiteIcon name="Check" size={18} />
                    <div>
                      <strong>{item}</strong>
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="icu-package-subhead">Deliverables At a Glance:</h4>
              <div className="elder-highlight-list">
                {selectedPackage.deliverables.map((item) => (
                  <div className="elder-highlight-point" key={item}>
                    <SiteIcon name="Digital report" size={18} />
                    <div>
                      <strong>{item}</strong>
                    </div>
                  </div>
                ))}
              </div>

              <p className="elder-package-card__cue">
                <strong>Cost & Benefit Cue</strong>
                <span>{selectedPackage.costCue}</span>
              </p>
              <div className="elder-package-card__actions">
                <Link href="#icu-at-home-form" className="btn btn--primary btn--sm">
                  {selectedPackage.cta}
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
