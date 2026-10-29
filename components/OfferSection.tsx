/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { siteConfig, isValidCheckoutUrl, trackCtaClick } from '../config';
import { ShieldCheck, ArrowRight, Check, Sparkles } from 'lucide-react';

interface OfferSectionProps {
  onPurchaseClick: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onPurchaseClick }) => {
  const isReady = siteConfig.isLive && isValidCheckoutUrl(siteConfig.checkoutUrl);

  const includedItems = [
    '30 high-protein lunch & dinner recipes, a full month of meals',
    'Simple portioning, cooling, freezing & reheating instructions',
    'Estimated calories, protein, carbs & fat on every recipe',
    'Bonus 1: First Batch Roadmap (starter plan & prep sequence)',
    'Bonus 2: Freezer Finder (inventory pages & printable labels)',
    'Bonus 3: Mix Your Week (reusable weekly rotation map)',
    'Instant PDF download. Yours to keep forever',
  ];

  return (
    <section id="offer" className="py-16 sm:py-24 bg-[#FFF9EF] border-t border-brand-border/60 scroll-mt-14">
      <div className="max-w-[1060px] mx-auto px-5 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange mb-2.5">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            Instant Digital Access
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[46px] font-normal text-brand-navy leading-tight mb-3 text-balance">
            Stock your freezer for the whole month.
          </h2>
          <p className="text-base sm:text-lg text-brand-navy/85 max-w-lg mx-auto">
            All 30 recipes + 3 bonus guides for one low price: $19.
          </p>
        </div>

        {/* Enhanced Offer Box with Product Mockup & Pulsing Button */}
        <div className="bg-white rounded-3xl border-2 border-brand-navy/15 p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div
            className="absolute -top-16 -right-16 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Visual Mockup Stack */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[380px] p-4 bg-brand-sand/40 rounded-2xl border border-brand-border/60 flex flex-col items-center">
                <img
                  src={`${import.meta.env.BASE_URL}assets/aistudio/hero-mockup-protein-on-standby_2cabd36a.png`}
                  alt="Protein on Standby 30 High-Protein Freezer Recipes and meals in glass containers"
                  className="w-full h-auto max-h-[260px] sm:max-h-[300px] object-contain drop-shadow-md"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <div className="mt-3 py-1.5 px-4 bg-white/90 rounded-full border border-brand-border/70 text-[11px] sm:text-xs font-bold text-brand-navy uppercase tracking-wider text-center shadow-xs">
                  All 30 Recipes + 3 Bonus Guides Included
                </div>
              </div>
            </div>

            {/* Right Column: Price, Checklist & Pulsing Purchase Button */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              {/* Price & Highlight */}
              <div className="border-b border-brand-border/60 pb-5">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-5xl sm:text-6xl font-bold text-brand-navy">
                    $19
                  </span>
                  <span className="text-sm font-semibold text-brand-muted uppercase tracking-wider">
                    USD • One-Time Payment
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-brand-navy/80 mt-1 font-medium">
                  That's about $0.63 per meal. No subscription, no hidden fees. Pay once, keep it forever.
                </p>
              </div>

              {/* Checklist */}
              <ul className="space-y-2.5">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-brand-sage-light flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-navy" aria-hidden="true" />
                    </div>
                    <span className="text-xs sm:text-sm text-brand-navy/90 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Optional Breakfast Note if enabled */}
              {siteConfig.enableBreakfastAddOn && (
                <div className="p-3 bg-brand-sand/50 rounded-xl text-xs text-brand-navy/85 border border-brand-border/70">
                  <strong className="text-brand-orange">Optional at checkout:</strong> Add Breakfast on Standby (10 additional freezer breakfast recipes) for +$7.
                </div>
              )}

              {/* Pulsing CTA Purchase Button */}
              <div className="pt-2">
                {isReady ? (
                  <button
                    type="button"
                    onClick={() => {
                      trackCtaClick('offer_pulsing_purchase_cta');
                      onPurchaseClick();
                    }}
                    className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 text-base sm:text-lg font-bold text-white bg-brand-orange hover:bg-brand-orange-hover active:scale-[0.98] rounded-xl shadow-lg transition-all animate-cta-pulse focus-visible:outline-2 focus-visible:outline-brand-orange cursor-pointer"
                  >
                    <span>Yes! Send Me All 30 Recipes — $19</span>
                    <ArrowRight className="w-5 h-5 text-white" aria-hidden="true" />
                  </button>
                ) : (
                  <div className="space-y-2">
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-8 text-base sm:text-lg font-bold text-white bg-brand-orange/90 rounded-xl shadow-md animate-cta-pulse cursor-not-allowed select-none"
                    >
                      <span>Get All 30 Recipes — $19 (Opening Soon)</span>
                      <ArrowRight className="w-5 h-5 text-white" aria-hidden="true" />
                    </button>
                    <p className="text-xs text-center text-brand-muted font-normal">
                      Purchases aren't open yet. This page is currently in private prelaunch preview.
                    </p>
                  </div>
                )}
              </div>

              {/* 14-Day Guarantee & Legal Clarification */}
              <div className="space-y-2.5 pt-2 border-t border-brand-border/60">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-xs text-brand-navy/85 leading-relaxed">
                    <strong className="font-semibold text-brand-navy">14-Day Money-Back Guarantee:</strong> Try the recipes with your real routine. If it isn't a fit for any reason, request a refund within 14 days of purchase through the support contact on your receipt. No hassle.
                  </p>
                </div>
                <p className="text-[11px] text-brand-muted leading-relaxed">
                  Digital files only. Ingredients and prepared meals are not included. Any applicable tax is shown at checkout.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
