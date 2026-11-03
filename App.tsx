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
import { InsideCarousel } from './components/InsideCarousel';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';

export const App: React.FC = () => {
  const isReady =
    siteConfig.isLive &&
    isValidCheckoutUrl(siteConfig.checkoutUrlBasic) &&
    isValidCheckoutUrl(siteConfig.checkoutUrlPremium);

  // Hero / FAQ / sticky bar buttons take the visitor to the two-plan comparison.
  const handleCtaAction = () => {
    const target = document.getElementById('offer-premium') || document.getElementById('offer');
    if (!target) return;
    const go = (behavior: ScrollBehavior) => {
      const top = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior });
    };
    go('smooth');
    // re-correct after lazy images load and shift the layout
    [600, 1200, 2000].forEach((ms) =>
      setTimeout(() => {
        const off = target.getBoundingClientRect().top - 64;
        if (Math.abs(off) > 12) go('smooth');
      }, ms)
    );
  };

  const handleBuy = (plan: 'basic' | 'premium') => {
    if (!isReady) return;
    const url = plan === 'premium' ? siteConfig.checkoutUrlPremium : siteConfig.checkoutUrlBasic;
    const price = plan === 'premium' ? 19 : 10;
    const fbq = (window as any).fbq;
    let redirected = false;
    const go = () => { if (redirected) return; redirected = true; window.location.href = url; };
    try {
      if (typeof fbq === 'function') {
        fbq('track', 'InitiateCheckout', {
          value: price,
          currency: 'USD',
          content_name: plan === 'premium' ? 'Protein on Standby Premium' : 'Protein on Standby Recipes',
          content_ids: [plan],
          content_type: 'product',
          num_items: 1,
        });
        setTimeout(go, 250);
        return;
      }
    } catch (e) {}
    go();
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
          onCtaClick={handleCtaAction}
          isLive={isReady}
        />

        <WhyItWorks />

        {/* Section 2: Variety Gallery — Three Appetizing Meal Examples */}
        <VarietyGallery />

        {/* Section 3: Simple Process — Three Compact Steps + Safe Cooling Note */}
        <SimpleProcess />

        {/* Section 4: Tangible Product + Included Bonuses */}
        <TangibleProduct />

        <InsideCarousel />

        {/* Section 5: Two Plans: $10 Recipes / $19 Premium */}
        <OfferSection onBuy={handleBuy} isReady={isReady} />

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
