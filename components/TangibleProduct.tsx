/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, ShoppingCart, Thermometer, Map, Tags, Calendar, FileText, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config';

export const TangibleProduct: React.FC = () => {
  const rows = [
    {
      title: 'The cookbook',
      description: '30 high-protein recipes with ingredients, portions, estimated calories and macros, plus freezing and reheating notes.',
      icon: BookOpen,
    },
    {
      title: 'Bonus: Master Grocery List',
      description: 'Your shopping list for the whole month, organized by store aisle, so you shop once and never forget an ingredient.',
      icon: ShoppingCart,
    },
    {
      title: 'Bonus: Reheating Cheat Sheet',
      description: 'The best way to reheat every meal in the microwave, oven or air fryer, so frozen food tastes fresh, not dried out.',
      icon: Thermometer,
    },
    {
      title: 'First Batch Roadmap',
      description: 'Not sure where to start? A simple first-day plan with a combined shopping list.',
      icon: Map,
    },
    {
      title: 'Freezer Finder',
      description: 'Printable labels and inventory pages so you always know what is in your freezer.',
      icon: Tags,
    },
    {
      title: 'Mix Your Week',
      description: 'A rotation map that spreads your 30 meals across the whole month.',
      icon: Calendar,
    },
  ];

  const hasRealSample = Boolean(siteConfig.sampleRecipeUrl || siteConfig.sampleRecipeImage);

  return (
    <section id="product" className="py-16 sm:py-24 bg-[#FBF6EC] border-t border-brand-border/60">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-orange mb-2.5">
            What You Receive
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-normal text-brand-navy leading-tight text-balance">
            Everything you need to fill your freezer for the month.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visuals Column: Flat cover & full 3-bonus bundle */}
          <div className="lg:col-span-6 space-y-6">
            {/* Main digital cookbook cover */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-brand-border/70 shadow-xs flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}assets/aistudio/cover-protein-on-standby_fc210ad5.png`}
                alt="Protein on Standby digital PDF cookbook cover"
                className="w-full max-w-[340px] h-auto object-contain rounded-lg shadow-sm"
                loading="lazy"
                width="340"
                height="500"
              />
            </div>

            {/* Included 3 bonus guides uncropped bundle */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-brand-border/70 shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange block mb-2 text-center">
                Included Bonus Guides
              </span>
              <img
                src={`${import.meta.env.BASE_URL}assets/aistudio/bonus-bundle-protein-on-standby_9dac03d3.png`}
                alt="Three included PDF guides: First Batch Roadmap, Freezer Finder, and Mix Your Week"
                className="w-full h-auto object-contain rounded-lg"
                loading="lazy"
                width="500"
                height="333"
              />
            </div>
          </div>

          {/* Beside: Four Short Rows */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {rows.map((row, index) => {
              const Icon = row.icon;
              return (
                <div
                  key={index}
                  className="p-5 sm:p-6 bg-white rounded-2xl border border-brand-border/70 shadow-xs flex items-start gap-4 hover:border-brand-navy/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-sand flex items-center justify-center shrink-0 mt-0.5 text-brand-navy">
                    <Icon className="w-5 h-5 text-brand-orange" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-navy mb-1">
                      {row.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-brand-navy/80 leading-relaxed">
                      {row.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Render real sample ONLY if configured */}
            {hasRealSample && (
              <div className="pt-4">
                <a
                  href={siteConfig.sampleRecipeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-brand-navy bg-white border border-brand-border rounded-xl shadow-xs hover:border-brand-navy transition-all"
                >
                  <FileText className="w-4 h-4 text-brand-orange" aria-hidden="true" />
                  <span>Preview recipe sample (PDF)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-brand-muted" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
