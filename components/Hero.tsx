/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowDown } from 'lucide-react';
import { trackCtaClick } from '../config';

interface HeroProps {
  onCtaClick: () => void;
  isLive?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, isLive = false }) => {
  return (
    <section className="relative pt-6 sm:pt-8 pb-12 sm:pb-16 overflow-hidden bg-[#FFF9EF]">
      {/* Subtle organic warmth */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-[#CBD9C4]/30 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          {/* Brand Logo Header */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <img
              src={`${import.meta.env.BASE_URL}assets/aistudio/logo-protein-on-standby_a5e31f30.png`}
              alt="Protein on Standby"
              className="h-7 sm:h-9 w-auto object-contain"
              width="180"
              height="36"
            />
          </div>

          {/* 1. KILLER HEADLINE */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full bg-brand-orange/10 text-brand-orange text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            The Freezer Meal Prep Cookbook
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal text-brand-navy leading-[1.12] tracking-tight text-balance mb-2 sm:mb-3">
            30 High-Protein Meals to Freeze. <br className="hidden sm:inline" />
            <span className="italic font-normal text-brand-orange">Dinner Handled All Month.</span>
          </h1>
          <p className="text-base sm:text-xl text-brand-navy/85 leading-snug max-w-2xl text-balance mb-2">
            Cook once, stock your freezer, and have a healthy, protein-packed meal ready on your busiest nights. No more takeout, no more &ldquo;what&rsquo;s for dinner?&rdquo;
          </p>

          {/* 2. APPETIZING PRODUCT & FOOD MOCKUP */}
          <div className="relative w-full max-w-[580px] my-1 sm:my-2 flex justify-center items-center">
            <div
              className="absolute inset-0 m-auto w-[85%] h-[80%] bg-gradient-to-b from-[#CBD9C4]/40 to-[#CBD9C4]/15 rounded-3xl -z-10 transform scale-95"
              aria-hidden="true"
            />
            <img
              src={`${import.meta.env.BASE_URL}assets/aistudio/hero-mockup-protein-on-standby_2cabd36a.png`}
              alt="Protein on Standby digital cookbook and portioned high-protein freezer meals in glass containers"
              className="w-full h-auto max-h-[220px] sm:max-h-[310px] lg:max-h-[340px] object-contain drop-shadow-lg"
              fetchPriority="high"
              width="600"
              height="380"
            />
          </div>

          {/* 3. PURCHASE / ACTION BUTTON (In first fold) */}
          <div className="mt-3 sm:mt-4 w-full sm:w-auto flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={() => {
                trackCtaClick('hero_cta_clicked');
                onCtaClick();
              }}
              className="w-full sm:w-auto min-w-[300px] inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base sm:text-lg font-bold text-white bg-brand-orange hover:bg-brand-orange-hover active:scale-[0.98] rounded-xl shadow-lg transition-all animate-cta-pulse focus-visible:outline-2 focus-visible:outline-brand-orange cursor-pointer"
            >
              <span>Get My 30 Recipes — From $9</span>
              <ArrowDown className="w-4 h-4 text-white" aria-hidden="true" />
            </button>
          </div>

          {/* 4. SUBHEADLINE & REASONS SUPPORT */}
          <div className="mt-4 sm:mt-5 max-w-xl text-center space-y-2">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs sm:text-sm font-semibold text-brand-navy/90">
              <li>✓ 30 recipes</li>
              <li>✓ Protein &amp; macros per serving</li>
              <li>✓ Premium adds 5 bonus guides</li>
              <li>✓ From $0.30 a meal</li>
            </ul>
            <p className="pt-1 text-[11px] sm:text-xs text-brand-muted font-medium">
              One-time payment • Instant PDF download
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
