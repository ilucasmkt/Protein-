/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const VarietyGallery: React.FC = () => {
  const meals = [
    {
      title: 'Chicken & rice',
      caption: 'Sliced grilled chicken with brown rice and roasted broccoli.',
      image: `${import.meta.env.BASE_URL}assets/images/meal_chicken_rice_veggies_1793304574742.jpg`,
      alt: 'Portioned chicken and brown rice with roasted broccoli in a glass container',
    },
    {
      title: 'Turkey chili',
      caption: 'Slow-simmered ground turkey chili with black beans and peppers.',
      image: `${import.meta.env.BASE_URL}assets/images/meal_turkey_bean_chili_1793304576161.jpg`,
      alt: 'Hearty turkey and black bean chili in a freezer meal prep glass dish',
    },
    {
      title: 'Beef pasta',
      caption: 'Penne pasta tossed in savory lean ground beef bolognese sauce.',
      image: `${import.meta.env.BASE_URL}assets/images/meal_beef_penne_pasta_1793304576284.jpg`,
      alt: 'Penne pasta with lean ground beef bolognese sauce in a glass meal prep container',
    },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FBF6EC] border-t border-brand-border/60">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-orange mb-2.5">
            Illustrative Recipe Examples
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-normal text-brand-navy leading-tight text-balance">
            30 recipes your whole family will actually eat.
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-brand-navy/80 font-normal">
            Chicken, turkey, beef and more, from comfort-food classics to fresh lean bowls. A month of variety, so you never get bored.
          </p>
        </div>

        {/* 3 Appetizing Food Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {meals.map((meal, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-brand-border/70 shadow-xs hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-brand-sand relative">
                <img
                  src={meal.image}
                  alt={meal.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-navy mb-1.5">
                    {meal.title}
                  </h3>
                  <p className="text-sm text-brand-navy/80 leading-relaxed">
                    {meal.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
