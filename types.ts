/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BonusItem {
  title: string;
  description: string;
  highlight?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}