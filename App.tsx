/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { siteConfig, isValidCheckoutUrl } from './config';
import { Hero } from './components/Hero';
import { WhyItWorks } from './components/WhyItWorks';
import { VarietyGallery } from './components/VarietyGallery';
import { SimpleProcess } from './components/SimpleProcess';
import { TangibleProduct } from './components/TangibleProduct';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';

export const App: React.FC = () => {
  const isReady = siteConfig.isLive && isValidCheckoutUrl(siteConfig.checkoutUrl);

  const handleCtaAction = () => {
    if (isReady) {
      window.location.href = siteConfig.checkoutUrl;
    } else {
      const offerElement = document.getElementById('offer');
      if (offerElement) {
        offerElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleExploreProduct = () => {
    const productElement = document.getElementById('product') || document.getElementById('offer');
    if (productElement) {
      productElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-brand-navy font-sans antialiased selection:bg-brand-navy selection:text-[#FFF9EF]">
      {/* Main Page: Six Product-Led Sections */}
      <main id="main-content">
        {/* Section 1: Hero — Food & Product First (Headline -> Mockup -> CTA Button -> Reasons) */}
        <Hero
          onCtaClick={isReady ? handleCtaAction : handleExploreProduct}
          isLive={isReady}
        />

        <WhyItWorks />

        {/* Section 2: Variety Gallery — Three Appetizing Meal Examples */}
        <VarietyGallery />

        {/* Section 3: Simple Process — Three Compact Steps + Safe Cooling Note */}
        <SimpleProcess />

        {/* Section 4: Tangible Product + Included Bonuses */}
        <TangibleProduct />

        {/* Section 5: The $19 Offer + Guarantee */}
        <OfferSection onPurchaseClick={handleCtaAction} />

        {/* Section 6: Concise Accessible FAQ + Final CTA */}
        <FaqSection onCtaClick={handleCtaAction} />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <StickyBottomBar onCtaClick={handleCtaAction} isLive={isReady} />
    </div>
  );
};

export default App;
