/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { trackCtaClick } from '../config';
import { ArrowRight, Check, Sparkles, Crown } from 'lucide-react';

interface OfferSectionProps {
  onBuy: (plan: 'basic' | 'premium') => void;
  isReady: boolean;
}

const coreItems = [
  '30 high-protein lunch & dinner recipes, a full month of meals',
  'Portioning, cooling, freezing & reheating instructions',
  'Estimated calories, protein, carbs & fat on every recipe',
];

const bonuses = [
  { name: 'Master Grocery List', desc: 'The whole month, organized by store aisle' },
  { name: 'Reheating Cheat Sheet', desc: 'Microwave, oven & air fryer, so nothing dries out' },
  { name: 'First Batch Roadmap', desc: 'Starter plan & prep sequence' },
  { name: 'Freezer Finder', desc: 'Inventory pages & printable labels' },
  { name: 'Mix Your Week', desc: 'Reusable weekly rotation map' },
];

const CheckDot: React.FC<{ tone?: 'sage' | 'orange' }> = ({ tone = 'sage' }) => (
  <div
    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
      tone === 'orange' ? 'bg-brand-orange' : 'bg-brand-sage-light'
    }`}
  >
    <Check className={`w-3 h-3 ${tone === 'orange' ? 'text-white' : 'text-brand-navy'}`} aria-hidden="true" />
  </div>
);

export const OfferSection: React.FC<OfferSectionProps> = ({ onBuy, isReady }) => {
  const Button = ({ plan, label, primary, small }: { plan: 'basic' | 'premium'; label: string; primary?: boolean; small?: boolean }) => {
    const base = small
      ? 'w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 text-sm font-semibold rounded-lg transition-all focus-visible:outline-2 '
      : 'w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 text-base font-bold rounded-xl transition-all focus-visible:outline-2 ';
    const style = small
      ? 'text-brand-navy/80 bg-transparent border border-brand-border hover:border-brand-navy hover:text-brand-navy focus-visible:outline-brand-navy '
      : primary
      ? 'text-white bg-brand-orange hover:bg-brand-orange-hover shadow-lg animate-cta-pulse focus-visible:outline-brand-orange '
      : 'text-brand-navy bg-white border-2 border-brand-navy hover:bg-brand-navy hover:text-white focus-visible:outline-brand-navy ';
    if (!isReady) {
      return (
        <button
          type="button"
          disabled
          aria-disabled="true"
          className={base + style + 'opacity-90 cursor-not-allowed select-none'}
        >
          <span>{label} (Opening Soon)</span>
        </button>
      );
    }
    return (
      <button
        type="button"
        onClick={() => {
          trackCtaClick(`offer_${plan}_cta`);
          onBuy(plan);
        }}
        className={base + style + 'active:scale-[0.98] cursor-pointer'}
      >
        <span>{label}</span>
        {!small && <ArrowRight className="w-5 h-5" aria-hidden="true" />}
      </button>
    );
  };

  return (
    <section id="offer" className="py-16 sm:py-24 bg-[#FFF9EF] border-t border-brand-border/60 scroll-mt-14">
      <div className="max-w-[1060px] mx-auto px-5 sm:px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange mb-2.5">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            Instant Digital Access
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[46px] font-normal text-brand-navy leading-tight mb-3 text-balance">
            Stock your freezer for the whole month.
          </h2>
          <p className="text-base sm:text-lg text-brand-navy/85 max-w-lg mx-auto">
            One-time payment. Instant PDF download. Yours to keep forever.
          </p>
        </div>

        <div className="relative bg-white rounded-3xl border-[3px] border-brand-orange shadow-xl overflow-hidden">
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 right-0 z-10 bg-brand-orange text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl inline-flex items-center gap-1.5">
            <Crown className="w-3.5 h-3.5" aria-hidden="true" />
            Best Value
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-10 lg:p-12">
            {/* LEFT: the product */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="rounded-2xl bg-brand-sand/50 border border-brand-border/60 p-4 sm:p-6 flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}assets/aistudio/hero-mockup-protein-on-standby_2cabd36a.png`}
                  alt="Protein on Standby cookbook on tablet and phone with meals in glass containers"
                  className="w-full h-auto max-h-[340px] object-contain drop-shadow-lg"
                  loading="lazy"
                  width="600"
                  height="450"
                />
              </div>

              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-brand-orange mb-2.5 text-center lg:text-left">
                  + 5 Premium Bonus Guides
                </div>
                <div className="grid grid-cols-5 gap-2 sm:gap-3">
                  {bonuses.map((b, i) => (
                    <div key={b.name} className="flex flex-col items-center text-center gap-1.5">
                      <img
                        src={`${import.meta.env.BASE_URL}assets/bonus-covers/b${i + 1}-1.jpg`}
                        alt={`Bonus ${i + 1}: ${b.name}`}
                        className="w-full h-auto rounded-md shadow-md border border-brand-border/70"
                        width="400"
                        height="518"
                      />
                      <span className="text-[10px] sm:text-[11px] font-semibold text-brand-navy leading-tight">{b.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: price, list, buttons */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-2">Premium Bundle</div>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-navy leading-tight">30 Recipes + 5 Bonus Guides</h3>
              <div className="flex items-baseline gap-2 mt-3">
                <span className="font-serif text-5xl sm:text-6xl font-bold text-brand-navy">$19</span>
                <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">USD • One-time</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-navy/80 mt-1 font-medium">
                The complete system. About $0.63 per meal.
              </p>

              <ul className="space-y-2.5 mt-6">
                {coreItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckDot />
                    <span className="text-sm text-brand-navy/90 leading-snug">{item}</span>
                  </li>
                ))}
                {bonuses.map((b) => (
                  <li key={b.name} className="flex items-start gap-2.5">
                    <CheckDot tone="orange" />
                    <span className="text-sm text-brand-navy/90 leading-snug">
                      <strong className="text-brand-navy">{b.name}:</strong> {b.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 space-y-3">
                <Button plan="premium" label="Get the Premium Bundle — $19" primary />
                <Button plan="basic" label="Get just the recipes for $9" small />
              </div>
            </div>
          </div>
        </div>

        {!isReady && (
          <p className="text-xs text-center text-brand-muted mt-6">
            Purchases aren't open yet. This page is currently in private prelaunch preview.
          </p>
        )}
        <p className="text-[11px] text-center text-brand-muted leading-relaxed mt-5">
          Digital files only. Ingredients and prepared meals are not included. Any applicable tax is shown at checkout.
        </p>
      </div>
    </section>
  );
};
