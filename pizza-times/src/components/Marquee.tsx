/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function Marquee() {
  const items = [
    '48-HOUR SOURDOUGH DOUGH',
    'WOOD-FIRED AT 450°C',
    '30 MIN LATE-NIGHT DELIVERY',
    '৳ BEST CRAFT IN DHAKA',
    'REAL SYLHETI NAGA INFERNO',
    '100% ARTISANAL MOZZARELLA',
    'NO MOCK INGREDIENTS',
  ];

  return (
    <div className="relative py-4 bg-[#0A0806] border-y border-[#2A2018] overflow-hidden select-none">
      {/* Absolute left & right soft gradients to make are borders vanish nicely */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0806] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0806] to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap">
        {/* Double repetition to guarantee seamless wrapping scroll */}
        <div className="animate-marquee flex gap-12 items-center">
          {items.map((item, index) => (
            <div key={`marquee-1-${index}`} className="flex items-center gap-4 text-sm sm:text-base font-outfit uppercase tracking-widest text-[#F5EFE6]">
              <span className="font-bold">{item}</span>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
            </div>
          ))}
        </div>
        <div className="animate-marquee flex gap-12 items-center" aria-hidden="true">
          {items.map((item, index) => (
            <div key={`marquee-2-${index}`} className="flex items-center gap-4 text-sm sm:text-base font-outfit uppercase tracking-widest text-[#F5EFE6]">
              <span className="font-bold">{item}</span>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
