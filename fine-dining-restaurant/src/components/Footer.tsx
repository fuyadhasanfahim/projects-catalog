/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, Send, Star } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => {
      setIsSubscribed(false);
    }, 4000);
  };

  return (
    <footer id="footer_root" className="bg-neutral-950 text-cream border-t border-neutral-900 pt-20 pb-8 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 items-start pb-16">
        
        {/* Brand details Column */}
        <div className="md:col-span-4 text-left space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center bg-neutral-900">
              <Star className="w-3.5 h-3.5 text-gold" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.25em] text-cream font-medium">L'ÉTOILE</span>
              <span className="text-[7px] tracking-[0.5em] text-neutral-500 uppercase -mt-0.5">Gastronomie</span>
            </div>
          </div>
          
          <p className="text-xs text-[#D1CAC0] font-sans font-light leading-relaxed max-w-sm">
            Sartorial Gastronomy in the heart of Paris. We orchestrate textures and flavors in an intimate parlor to deliver memories of absolute visual and sensory beauty.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 items-center">
            <a href="#instagram" className="w-8 h-8 rounded-full border border-neutral-900 hover:border-gold/60 text-cream-muted hover:text-gold flex items-center justify-center transition-colors bg-neutral-900/40" aria-label="Instagram Page">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="#youtube" className="w-8 h-8 rounded-full border border-neutral-900 hover:border-gold/60 text-cream-muted hover:text-gold flex items-center justify-center transition-colors bg-neutral-900/40" aria-label="Youtube Channel">
              <Youtube className="w-3.5 h-3.5" />
            </a>
            <a href="#facebook" className="w-8 h-8 rounded-full border border-neutral-900 hover:border-gold/60 text-cream-muted hover:text-gold flex items-center justify-center transition-colors bg-neutral-900/40" aria-label="Facebook Profile">
              <Facebook className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Operating Hours Column */}
        <div className="md:col-span-4 text-left">
          <h4 className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-gold mb-6">
            Opening Schedule
          </h4>
          <div className="space-y-4">
            {RESTAURANT_INFO.hours.map((item, idx) => (
              <div key={idx} className="flex justify-between text-xs font-sans pb-2.5 border-b border-neutral-900/50">
                <span className="text-cream font-medium">{item.days}</span>
                <div className="flex flex-col text-right text-cream-muted font-light gap-1">
                  <span>Lunch: {item.lunch}</span>
                  <span>Dinner: {item.dinner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coordinates AND Newsletters Column */}
        <div className="md:col-span-4 text-left space-y-6">
          <div>
            <h4 className="font-sans font-semibold text-xs uppercase tracking-[0.25em] text-gold mb-6">
              The Salon coordinates
            </h4>
            
            <div className="space-y-3.5 text-xs font-sans text-cream-muted font-light">
              <div className="flex gap-3 items-center">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>{RESTAURANT_INFO.location}</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>{RESTAURANT_INFO.phone}</span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>{RESTAURANT_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Newsletter Input Form */}
          <div className="pt-4 border-t border-neutral-900">
            <span className="text-[10px] font-sans uppercase font-bold tracking-widest text-gold block mb-2">Salon Dispatcher</span>
            <p className="text-[11px] text-neutral-500 font-sans font-light leading-relaxed mb-3">
              Subscribe to unlock discrete degustation menus & masterclass schedules.
            </p>

            <form id="newsletter_form" onSubmit={handleSubscribe} className="flex relative">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Secure your dispatch email..."
                className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold/60 focus:outline-none rounded-none py-2.5 pl-4 pr-12 text-xs font-sans text-cream"
              />
              <button
                id="newsletter_submit_btn"
                type="submit"
                className="absolute right-0 top-0 bottom-0 px-4 flex items-center justify-center bg-neutral-800 text-gold hover:bg-gold hover:text-charcoal transition-colors cursor-pointer"
                aria-label="Subscribe to newsletter"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <AnimatePresence>
              {isSubscribed && (
                <motion.span
                  id="newsletter_success_text"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 0.8, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-[9.5px] font-sans font-medium text-gold tracking-widest block mt-2"
                >
                  ✓ SECURED DISPATCH LINK IN BOX
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Footer Bottom copyright terms */}
      <div className="border-t border-neutral-900/60 max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-500 text-[10px] font-sans uppercase tracking-widest">
        <span>© 2026 L'Étoile Paris. All Rights Reserved.</span>
        
        <div className="flex gap-6">
          <a href="#terms" className="hover:text-gold transition-colors">Voucher Terms</a>
          <a href="#privacy" className="hover:text-gold transition-colors">Privacy Charter</a>
          <a href="#intellectual" className="hover:text-gold transition-colors">Michelin Guidelines</a>
        </div>
      </div>
    </footer>
  );
}
