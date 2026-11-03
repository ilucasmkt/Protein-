/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const slides = [
  { img: 'cookbook-cover', label: 'The cookbook', tag: 'Core' },
  { img: 'cookbook-index', label: '30 recipes at a glance', tag: 'Core' },
  { img: 'recipe-burrito', label: 'Every recipe: macros, steps, freezing', tag: 'Core' },
  { img: 'recipe-chili', label: 'Portions and reheating included', tag: 'Core' },
  { img: 'recipe-bolognese', label: 'Beef, pork and pasta favorites', tag: 'Core' },
  { img: 'recipe-shrimp', label: 'Seafood and plant-powered too', tag: 'Core' },
  { img: 'b1', label: 'Master Grocery List', tag: 'Premium bonus' },
  { img: 'b2', label: 'Reheating Cheat Sheet', tag: 'Premium bonus' },
  { img: 'b3', label: 'First Batch Roadmap', tag: 'Premium bonus' },
  { img: 'b4', label: 'Freezer Finder labels', tag: 'Premium bonus' },
  { img: 'b5', label: 'Mix Your Week', tag: 'Premium bonus' },
];

export const InsideCarousel: React.FC = () => {
  const loop = [...slides, ...slides];
  return (
    <section className="py-16 md:py-20 bg-brand-sand overflow-hidden" aria-label="Look inside the guides">
      <div className="max-w-3xl mx-auto px-5 text-center mb-10">
        <p className="text-xs font-bold tracking-widest text-brand-orange uppercase mb-3">Look inside</p>
        <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-brand-navy leading-tight">
          Real pages. Real recipes. Ready to print or use on your phone.
        </h2>
        <p className="mt-4 text-brand-muted text-base md:text-lg">
          Here is what you get inside: macros, portions, freezing and reheating on every page.
        </p>
      </div>

      <div className="inside-marquee relative">
        <div className="inside-track flex gap-5 md:gap-6 w-max px-3">
          {loop.map((s, i) => (
            <figure
              key={i}
              className="w-[220px] md:w-[270px] shrink-0 bg-white rounded-2xl border border-brand-border shadow-lg overflow-hidden"
              aria-hidden={i >= slides.length}
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/peek/${s.img}.webp`}
                alt={s.label}
                loading="lazy"
                decoding="async"
                width={620}
                height={802}
                className="w-full h-auto block"
              />
              <figcaption className="px-3 py-2.5 text-left">
                <span className={`block text-[10px] font-bold uppercase tracking-wider ${s.tag === 'Core' ? 'text-brand-muted' : 'text-brand-orange'}`}>{s.tag}</span>
                <span className="block text-sm font-semibold text-brand-navy leading-snug">{s.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
