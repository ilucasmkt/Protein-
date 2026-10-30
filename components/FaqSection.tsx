/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { siteConfig, isValidCheckoutUrl, trackCtaClick } from '../config';

interface FaqSectionProps {
  onCtaClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onCtaClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isReady = siteConfig.isLive && isValidCheckoutUrl(siteConfig.checkoutUrl);

  const faqs = [
    {
      q: 'Will this really cover a whole month?',
      a: 'Yes. With 30 recipes and the Mix Your Week rotation map, you can spread your meals across the month. Cook in batches, freeze, and pull a meal out whenever you need it.',
    },
    {
      q: 'Are the recipes really high in protein?',
      a: 'Every recipe is built around a protein-rich main ingredient, and each one lists estimated protein per serving so you can see exactly what you are eating.',
    },
    {
      q: 'Is this food delivery?',
      a: "No. It's a digital cookbook with 30 recipes. You buy the ingredients and prepare the food at home.",
    },
    {
      q: 'Do I have to make all 30 recipes at once?',
      a: 'No. Start with a few and build your collection over time.',
    },
    {
      q: 'Is nutrition information included?',
      a: 'Each finished recipe will include estimated calories, protein, carbohydrates, and fat per serving. Actual values vary with brands, portions, and substitutions.',
    },
    {
      q: 'What equipment do I need?',
      a: 'A basic home kitchen and suitable freezer-safe containers. Individual recipes specify their equipment and reheating options.',
    },
    {
      q: 'How do I get access?',
      a: 'After successful payment, download links appear on the confirmation page and are sent by email.',
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FBF6EC] border-t border-brand-border/60">
      <div className="max-w-[780px] mx-auto px-5 sm:px-6">
        
        {/* FAQ Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-orange mb-2.5">
            Answers to Common Questions
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-navy leading-tight text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        {/* 6 Concise FAQ Items */}
        <div className="space-y-3 mb-16 sm:mb-20">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-panel-${index}`;
            const headerId = `faq-btn-${index}`;

            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-brand-border/70 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  id={headerId}
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-serif text-lg font-medium text-brand-navy hover:text-brand-orange transition-colors focus-visible:outline-2 focus-visible:outline-brand-navy"
                >
                  <span className="text-balance">{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-brand-sand/70 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-brand-navy text-white' : 'text-brand-navy'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 sm:px-6 pb-5 pt-1 text-brand-navy/85 text-sm sm:text-[15px] leading-relaxed border-t border-brand-sand/50"
                  >
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final CTA Area */}
        <div className="bg-brand-navy text-[#FFF9EF] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-lg">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-orange/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative z-10 space-y-4 max-w-lg mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#FFF9EF] leading-tight text-balance">
              Your busiest nights, covered for the whole month.
            </h3>
            <p className="text-sm sm:text-base text-[#FFF9EF]/80 font-normal">
              30 high-protein recipes from $9. Go Premium for $19 and add 5 bonus guides.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  trackCtaClick('final_section_cta');
                  onCtaClick();
                }}
                className="w-full sm:w-auto min-w-[260px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 text-base font-semibold text-brand-navy bg-[#FFF9EF] hover:bg-white active:scale-[0.99] rounded-xl shadow-md transition-all focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
              >
                <span>See Plans — From $9</span>
                <ArrowRight className="w-4 h-4 text-brand-orange" aria-hidden="true" />
              </button>
            </div>
            
            <p className="text-[11px] sm:text-xs text-[#FFF9EF]/70 pt-1">
              Instant PDF download • One-time payment
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
