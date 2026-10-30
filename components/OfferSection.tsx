/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { trackCtaClick } from '../config';
import { ArrowRight, Check, Sparkles, Crown, Plus } from 'lucide-react';

interface OfferSectionProps {
  onBuy: (plan: 'basic' | 'premium') => void;
  isReady: boolean;
}

const coreItems = [
  '30 high-protein lunch & dinner recipes, a full month of meals',
  'Portioning, cooling, freezing & reheating instructions',
  'Estimated calories, protein, carbs & fat on every recipe',
  'Instant PDF download. Yours to keep forever',
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
  const Button = ({ plan, label, primary }: { plan: 'basic' | 'premium'; label: string; primary?: boolean }) => {
    const base =
      'w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 text-base font-bold rounded-xl transition-all focus-visible:outline-2 ';
    const style = primary
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
        <ArrowRight className="w-5 h-5" aria-hidden="true" />
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
            Choose your plan. One-time payment, instant PDF download.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">
          {/* BASIC */}
          <div className="lg:col-span-5 order-2 lg:order-1 bg-white rounded-3xl border-2 border-brand-navy/15 p-6 sm:p-8 shadow-md flex flex-col">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">The Recipes</div>
            <h3 className="font-serif text-2xl text-brand-navy leading-tight">30 Freezer Recipes</h3>
            <div className="flex items-baseline gap-2 mt-3">
              <span className="font-serif text-5xl font-bold text-brand-navy">$9</span>
              <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">USD • One-time</span>
            </div>
            <p className="text-xs text-brand-navy/75 mt-1 font-medium">About $0.30 per meal.</p>

            <ul className="space-y-2.5 mt-6 mb-6">
              {coreItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckDot />
                  <span className="text-sm text-brand-navy/90 leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto space-y-3">
              <div className="rounded-xl bg-brand-sand/50 border border-dashed border-brand-border px-3 py-2.5 text-xs text-brand-navy/70">
                Want the grocery list, reheating guide, labels and more? <strong className="text-brand-navy">Go Premium.</strong>
              </div>
              <Button plan="basic" label="Get the Recipes — $9" />
            </div>
          </div>

          {/* PREMIUM */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative bg-white rounded-3xl border-[3px] border-brand-orange p-6 sm:p-9 shadow-xl overflow-hidden flex flex-col">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="absolute top-0 right-0 bg-brand-orange text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl inline-flex items-center gap-1.5">
              <Crown className="w-3.5 h-3.5" aria-hidden="true" />
              Best Value
            </div>

            <div className="relative">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-2">Premium Bundle</div>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-navy leading-tight">30 Recipes + 5 Bonus Guides</h3>
              <div className="flex items-baseline gap-2 mt-3">
                <span className="font-serif text-5xl sm:text-6xl font-bold text-brand-navy">$19</span>
                <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">USD • One-time</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-navy/80 mt-1 font-medium">
                Just $10 more for the complete system. About $0.63 per meal.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-brand-muted mb-2.5">Everything in Recipes</div>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2.5">
                      <CheckDot />
                      <span className="text-sm text-brand-navy/90 leading-snug">All 30 recipes with macros</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckDot />
                      <span className="text-sm text-brand-navy/90 leading-snug">Freezing, storage & reheating instructions</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckDot />
                      <span className="text-sm text-brand-navy/90 leading-snug">Instant PDF download, yours forever</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-brand-orange mb-2.5 inline-flex items-center gap-1">
                    <Plus className="w-3 h-3" aria-hidden="true" />
                    5 Premium Bonuses
                  </div>
                  <ul className="space-y-2.5">
                    {bonuses.map((b) => (
                      <li key={b.name} className="flex items-start gap-2.5">
                        <CheckDot tone="orange" />
                        <span className="text-sm text-brand-navy/90 leading-snug">
                          <strong className="text-brand-navy">{b.name}</strong>
                          <span className="block text-xs text-brand-navy/70">{b.desc}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-7">
                <Button plan="premium" label="Get the Premium Bundle — $19" primary />
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
