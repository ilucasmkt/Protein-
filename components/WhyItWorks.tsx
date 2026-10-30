/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Dumbbell, Wallet, Clock, X, Check } from 'lucide-react';

export const WhyItWorks: React.FC = () => {
  const benefits = [
    {
      title: 'Protein in every meal',
      description: 'Every recipe is built around real, lean protein so you stay full and on track, with estimated macros on every page.',
      icon: Dumbbell,
    },
    {
      title: 'From $0.30 a meal',
      description: 'The whole cookbook starts at $9. Cook in bulk at home and stop paying delivery prices for dinner.',
      icon: Wallet,
    },
    {
      title: 'Zero weeknight stress',
      description: 'Spend a little time prepping, then grab a meal from the freezer. Hot, healthy dinner in minutes.',
      icon: Clock,
    },
  ];

  const without = [
    'Last-minute takeout when you are too tired to cook',
    'Wasted groceries and a fridge full of “maybe tonight”',
    'Guessing at protein and portions',
    'Cooking from scratch every single night',
  ];
  const withUs = [
    'A ready-made meal in your freezer every night',
    'Shopping lists and a plan so nothing goes to waste',
    'Protein, calories and macros listed per serving',
    'Cook ahead once, eat well for the whole month',
  ];

  return (
    <section id="why" className="py-16 sm:py-24 bg-[#FFF9EF] border-t border-brand-border/60">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-orange mb-2.5">
            Why Freezer Meal Prep
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-normal text-brand-navy leading-tight text-balance">
            Eat high-protein all month without cooking every night.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="bg-white rounded-2xl p-6 border border-brand-border/70 shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-orange" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-navy mb-2">{b.title}</h3>
                <p className="text-sm sm:text-[15px] text-brand-navy/80 leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          <div className="rounded-2xl p-6 sm:p-7 bg-white border border-brand-border/70">
            <h3 className="font-serif text-xl font-bold text-brand-navy/70 mb-4">Busy weeknights, today</h3>
            <ul className="space-y-3">
              {without.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-brand-navy/80">
                  <X className="w-4 h-4 text-brand-muted shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-6 sm:p-7 bg-brand-navy text-[#FFF9EF] shadow-lg">
            <h3 className="font-serif text-xl font-bold mb-4">With Protein on Standby</h3>
            <ul className="space-y-3">
              {withUs.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm">
                  <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
