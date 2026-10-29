/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AppConfig {
  /**
   * Set to true when real payments and checkout are ready.
   * Default: false (private preview mode).
   */
  isLive: boolean;

  /**
   * External checkout URL (e.g. Gumroad, Lemon Squeezy, Stripe Checkout).
   * Leave empty until supplied by merchant.
   */
  checkoutUrl: string;

  /**
   * Optional Breakfast on Standby companion product ($7).
   * Keep false until the merchant confirms it is ready and configured in checkout.
   */
  enableBreakfastAddOn: boolean;

  /**
   * Sample recipe PDF URL or image path.
   * Keep empty until real files are supplied.
   */
  sampleRecipeUrl: string;
  sampleRecipeImage: string;

  /**
   * Merchant and legal settings.
   * Only rendered in footer/contact when non-empty.
   */
  supportEmail: string;
  sellerName: string;
  privacyUrl: string;
  termsUrl: string;
  refundUrl: string;
}

export const siteConfig: AppConfig = {
  isLive: false,
  checkoutUrl: '',
  enableBreakfastAddOn: false,
  sampleRecipeUrl: '',
  sampleRecipeImage: '',
  supportEmail: '',
  sellerName: '',
  privacyUrl: '',
  termsUrl: '',
  refundUrl: '',
};

/**
 * Local typed analytics/event tracker for CTA clicks.
 * Does not transmit to external servers by default.
 */
export function trackCtaClick(action: string, metadata?: Record<string, unknown>): void {
  // Safe local logging for debugging or future integration
  if (typeof window !== 'undefined' && (window as unknown as { __DEBUG_CTA__?: boolean }).__DEBUG_CTA__) {
    console.info(`[Protein on Standby CTA] ${action}`, metadata || {});
  }
}

export function isValidCheckoutUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:';
  } catch {
    return false;
  }
}
