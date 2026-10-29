/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { trackCtaClick } from '../config';

interface StickyBottomBarProps {
  onCtaClick: () => void;
  isLive?: boolean;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onCtaClick, isLive = false }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offerEl = document.getElementById('offer');
      const footerEl = document.getElementById('footer');

      // Show only after scrolling past the hero (~500px)
      if (scrollY < 500) {
        setVisible(false);
        return;
      }

      // Check if offer section is in view
      if (offerEl) {
        const rect = offerEl.getBoundingClientRect();
        // If offer is mostly in viewport, hide sticky bar
        if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= window.innerHeight * 0.2) {
          setVisible(false);
          return;
        }
      }

      // Check if footer is in view
      if (footerEl) {
        const rect = footerEl.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          setVisible(false);
          return;
        }
      }

      setVisible(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFF9EF]/95 backdrop-blur-md border-t border-brand-border/80 px-4 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-lg transition-transform duration-200"
      aria-label="Quick Action"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="font-serif font-bold text-base text-brand-navy leading-none">
            $10 <span className="text-[11px] font-sans font-medium text-brand-muted">one-time</span>
          </span>
          <span className="text-[10px] text-brand-muted mt-0.5">30 Recipes + 3 Bonuses • $0.33/meal</span>
        </div>

        <button
          type="button"
          onClick={() => {
            trackCtaClick('mobile_sticky_bar_cta');
            onCtaClick();
          }}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#FFF9EF] bg-brand-navy hover:bg-[#243b4e] active:scale-[0.98] rounded-lg shadow-sm whitespace-nowrap focus-visible:outline-2 focus-visible:outline-brand-navy"
        >
          <span>Get It Now</span>
          <ArrowRight className="w-3.5 h-3.5 text-brand-orange" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
};
