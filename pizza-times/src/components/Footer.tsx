/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Pizza, Send, Flame, Heart } from 'lucide-react';

export default function Footer() {
  const [newsEmail, setNewsEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    setSuccess(true);
    setNewsEmail('');
    setTimeout(() => setSuccess(false), 3000);
  };

  const socialLinks = [
    { name: 'Instagram', url: '#' },
    { name: 'Facebook', url: '#' },
    { name: 'YouTube', url: '#' },
    { name: 'TikTok', url: '#' }
  ];

  return (
    <footer className="bg-[#050403] text-cream border-t border-[#2e2621]/30 py-16 font-outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info (col-span-4) */}
          <div className="col-span-1 md:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-lg bg-brand-red/10 text-brand-red">
                <Pizza size={22} className="stroke-[1.5]" />
              </div>
              <span className="font-display text-lg sm:text-xl tracking-wider text-cream uppercase">
                PIZZA <span className="text-brand-red">TIMES</span>
              </span>
            </div>
            <p className="text-xs text-cream/50 leading-relaxed max-w-sm">
              We started Pizza Times Dhaka in 2026 to answer a single question: Why must great wood-fired sourdough pizzas only be available during dinner? Dhaka night owls deserve perfect local heat levels.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  className="text-xs text-[#8e847c] hover:text-[#fff] transition-colors"
                >
                  {soc.name}
                </a>
              ))}
            </div>
          </div>

          {/* Location & Hubs (col-span-3) */}
          <div className="col-span-1 md:col-span-3 text-left space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8e847c] font-black">
              DHAKA DELIVERY HUBS
            </h4>
            <ul className="text-xs text-[#fff]/80 space-y-2 font-light">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Banani Hub (Main Oven):</span>
                <span className="font-mono text-brand-yellow">Active</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Dhanmondi Hub (Satmasjid Road):</span>
                <span className="font-mono text-brand-yellow">Active</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Uttara Hub (Sector 11):</span>
                <span className="font-mono text-[#8e847c]">At 9 PM Only</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Gulshan Hub (Circle 2):</span>
                <span className="font-mono text-brand-yellow">Active</span>
              </li>
            </ul>
          </div>

          {/* Operational Hours (col-span-2) */}
          <div className="col-span-1 md:col-span-2 text-left space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8e847c] font-black">
              MIDNIGHT HOURS
            </h4>
            <div className="text-xs text-cream/70 space-y-1">
              <p className="font-bold text-cream">Every Single Night:</p>
              <p className="font-mono">8:00 PM - 4:00 AM</p>
              <p className="text-[10.5px] text-[#8e847c] leading-relaxed pt-2">
                *Oven preheating commences at 7:30 PM. Last order placed by 3:45 AM.
              </p>
            </div>
          </div>

          {/* Midnight Mailing / Newsletter (col-span-3) */}
          <div className="col-span-1 md:col-span-3 text-left space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8e847c] font-black">
              CRAVINGS NEWSLETTER
            </h4>
            <p className="text-xs text-cream/60">
              Get secret promotional coupon codes direct to your inbox at exactly midnight. No spam, only dough.
            </p>

            <form onSubmit={handleNewsSubmit} className="flex gap-2 relative">
              <input
                type="email"
                id="newsletter-email"
                required
                placeholder="e.g. nightowl@gmail.com"
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                className="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-brand-red placeholder-cream/20"
              />
              <button
                id="newsletter-submit-btn"
                type="submit"
                className="p-2.5 rounded-lg bg-brand-red text-dark-bg hover:bg-[#ff3524] transition-colors focus:outline-none cursor-pointer"
                aria-label="Subscribe"
              >
                <Send size={14} />
              </button>
            </form>

            <AnimatePresence>
              {success && (
                <p className="text-[10px] text-brand-yellow font-mono animate-pulse">
                  ✓ Sourdough newsletter unlocked! Check inbox soon.
                </p>
              )}
            </AnimatePresence>
          </div>

        </div>

        <hr className="border-[#2e2621]/20 my-10" />

        {/* Brand Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#8e847c] uppercase tracking-wider gap-4">
          <div className="flex items-center gap-1.5 justify-center">
            <span>© 2026 PIZZA TIMES DHAKA. BAKED FRESH AFTER DARK WITH</span>
            <Heart size={10} className="text-brand-red animate-pulse" />
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cream">Allergens Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-cream">Sourdough Care Guide</a>
            <span>•</span>
            <a href="#" className="hover:text-cream">Privacy Guidelines</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
