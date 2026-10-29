/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChefHat, Snowflake, Flame, ShieldAlert } from 'lucide-react';

export const SimpleProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Cook your favorites.',
      description: 'Pick a few recipes and follow the instructions.',
      icon: ChefHat,
    },
    {
      num: '02',
      title: 'Portion and freeze.',
      description: 'Follow the cooling, storage, and labeling guidance.',
      icon: Snowflake,
    },
    {
      num: '03',
      title: 'Reheat when needed.',
      description: 'Use the directions for that recipe.',
      icon: Flame,
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#FFF9EF] border-t border-brand-border/60">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-orange mb-2.5">
            How It Works
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-normal text-brand-navy leading-tight text-balance">
            Cook a batch. Keep your options open.
          </h2>
        </div>

        {/* 3 Compact Visual Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-brand-border/70 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-bold text-brand-orange">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-sand/70 flex items-center justify-center text-brand-navy">
                      <Icon className="w-5 h-5 text-brand-navy" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-brand-navy/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explicit safe cooling instructions */}
        <div className="mt-10 p-4 sm:p-5 bg-brand-sage-light/60 rounded-xl border border-brand-sage/50 max-w-2xl mx-auto flex items-start gap-3.5">
          <ShieldAlert className="w-5 h-5 text-brand-navy/80 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-brand-navy/85 leading-relaxed">
            <strong className="font-semibold text-brand-navy">Safe cooling guidance:</strong> Follow safe cooling instructions before sealing and freezing meals. Never leave warm cooked food sitting at room temperature.
          </p>
        </div>

      </div>
    </section>
  );
};
