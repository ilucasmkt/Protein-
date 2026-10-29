/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { siteConfig } from '../config';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Only render configured real legal & support links (no dead '#' links)
  const hasLegalLinks = Boolean(
    siteConfig.privacyUrl || siteConfig.termsUrl || siteConfig.refundUrl || siteConfig.supportEmail
  );

  return (
    <footer id="footer" className="bg-[#FFF9EF] border-t border-brand-border/70 py-12 sm:py-16 text-brand-navy">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-brand-border/60">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img
                src={`${import.meta.env.BASE_URL}assets/aistudio/logo-protein-on-standby_a5e31f30.png`}
                alt="Protein on Standby"
                className="h-8 sm:h-9 w-auto object-contain"
                width="160"
                height="36"
              />
            </div>
            <p className="text-xs sm:text-sm text-brand-muted">
              Digital cookbook. No physical food delivery.
            </p>
          </div>

          {/* Legal / Contact links if configured */}
          {hasLegalLinks && (
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-brand-navy/80">
              {siteConfig.supportEmail && (
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="hover:text-brand-orange transition-colors"
                >
                  Support: {siteConfig.supportEmail}
                </a>
              )}
              {siteConfig.privacyUrl && (
                <a
                  href={siteConfig.privacyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-orange transition-colors"
                >
                  Privacy Policy
                </a>
              )}
              {siteConfig.termsUrl && (
                <a
                  href={siteConfig.termsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-orange transition-colors"
                >
                  Terms of Service
                </a>
              )}
              {siteConfig.refundUrl && (
                <a
                  href={siteConfig.refundUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-orange transition-colors"
                >
                  Refund Policy
                </a>
              )}
            </div>
          )}
        </div>

        {/* Private prelaunch design notice & copyright */}
        <div className="pt-8 space-y-4">
          <p className="text-[11px] sm:text-xs text-brand-muted/80 leading-relaxed max-w-4xl">
            <strong>Prelaunch Notice:</strong> The cookbook and food photography are currently in development. This page is a private prelaunch design until the owner finishes recipe validation, fulfillment, merchant details, and checkout. Generated imagery represents illustrative mockups, not proof of tested recipes.
          </p>

          <div className="text-[11px] sm:text-xs text-brand-muted/70 flex flex-wrap justify-between items-center gap-2">
            <span>
              &copy; {currentYear} {siteConfig.sellerName || 'Protein on Standby'}. All rights reserved.
            </span>
            <span>Digital PDF Product</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
