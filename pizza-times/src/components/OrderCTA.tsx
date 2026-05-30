/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, MapPin, Sparkles, Send, CheckCircle } from 'lucide-react';
import { DHAKA_AREAS, PIZZA_ITEMS } from '../data/pizzaData';

export default function OrderCTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pizzaId: PIZZA_ITEMS[0].id,
    area: DHAKA_AREAS[0].name,
    address: '',
    note: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [ticketCode, setTicketCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) return;

    setSubmitting(true);
    // Simulate high heat transmission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTicketCode('SL-' + Math.floor(200000 + Math.random() * 800000));
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      pizzaId: PIZZA_ITEMS[0].id,
      area: DHAKA_AREAS[0].name,
      address: '',
      note: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="order-form" className="py-24 bg-dark-bg text-cream relative">
      {/* Background ambient glowing ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,77,61,0.06)_0%,transparent_70%)] pointer-events-none filter blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Full-width Glowing Banner Frame */}
        <div className="bg-[#14100e] border border-brand-red/10 rounded-3xl p-6 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden">
          
          {/* Subtle sparkles decoration */}
          <div className="absolute top-6 left-6 text-brand-yellow/35 animate-pulse">
            <Sparkles size={24} />
          </div>
          <div className="absolute bottom-6 right-6 text-brand-red/35 animate-ping">
            <Flame size={24} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Promotion headings */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 font-mono text-[9px] font-extrabold uppercase tracking-widest">
                <MapPin size={10} />
                Now Delivery Active Across Dhaka
              </span>

              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight leading-tight">
                SATISFY THE <br />
                <span className="text-brand-red text-glow-red">MIDNIGHT CRAVING.</span>
              </h2>

              <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-outfit max-w-lg">
                Hunger respects no hour. Whether you are debugging a server in Banani, completing a design slate in Dhanmondi, or hosting friends in Gulshan, we will bake and deliver pristine hot slices at lightning speed.
              </p>

              {/* Delivery coverage list with small custom bullet indicator points */}
              <div className="space-y-3 pt-4 border-t border-[#2e2621]/80">
                <p className="text-[10px] font-mono tracking-widest uppercase text-brand-yellow">
                  30-Minute Courier Radii:
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-cream/80 font-outfit">
                  {DHAKA_AREAS.map((a) => (
                    <span key={a.name} className="px-3 py-1.5 rounded-lg bg-[#1e1713] border border-[#2e231c] text-cream/90 flex items-center gap-1.5 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                      {a.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Order / Message Form (UI Only) */}
            <div className="lg:col-span-6">
              <div className="bg-[#1C1714] border border-[#2e2621] rounded-2.5xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
                
                <AnimatePresence mode="wait">
                  {submitted ? (
                    /* Order Successful Display */
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-6 space-y-4 font-outfit"
                    >
                      <div className="inline-flex p-3 bg-brand-yellow/10 text-brand-yellow rounded-full shadow-glow-yellow mb-2">
                        <CheckCircle size={36} />
                      </div>
                      <h4 className="font-display text-xl uppercase tracking-wider text-cream">ORDER DISPATCHED!</h4>
                      <p className="text-xs text-cream/70 max-w-sm mx-auto leading-relaxed">
                        Hey <span className="font-bold text-cream">{formData.name}</span>, your custom sourdough baking ticket <span className="text-brand-yellow font-mono font-bold text-glow-yellow">{ticketCode}</span> has reached the brick oven. Keep your phone handy!
                      </p>

                      <div className="py-2 border-y border-[#2e231c] font-mono text-xs text-cream/60 flex justify-between uppercase">
                        <span>Courier Goal:</span>
                        <span className="font-bold text-[#F5EFE6]">{formData.area}, Dhaka</span>
                      </div>

                      <button
                        id="reset-cta-form-btn"
                        onClick={resetForm}
                        className="w-full py-3.5 rounded-xl bg-brand-red text-dark-bg font-outfit text-xs font-black uppercase tracking-widest hover:bg-[#ff3524] shadow-glow-red transition-all cursor-pointer"
                      >
                        Order another slice
                      </button>
                    </motion.div>
                  ) : (
                    /* Main Input form fields block */
                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                      <div className="border-b border-[#2e2621] pb-3">
                        <h4 className="font-outfit text-sm font-bold text-cream uppercase tracking-wide">
                          TRANSMIT BAKERY TICKET
                        </h4>
                        <p className="text-[10px] text-[#8e847c]">Bake instantly — Payment by cash on delivery only</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase text-[#8e847c] tracking-wider mb-1.5 font-semibold">
                            Your Name (Required):
                          </label>
                          <input
                            type="text"
                            id="cta-form-name"
                            required
                            placeholder="e.g. Arif Rahman"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full text-xs font-outfit py-2.5 px-3 bg-black/30 border border-[#2e2621] focus:border-brand-red rounded-lg text-cream placeholder-cream/20 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase text-[#8e847c] tracking-wider mb-1.5 font-semibold">
                            Contact Mobile (Required):
                          </label>
                          <input
                            type="tel"
                            id="cta-form-phone"
                            required
                            placeholder="e.g. 018XXXXXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full text-xs font-mono py-2.5 px-3 bg-black/30 border border-[#2e2621] focus:border-brand-red rounded-lg text-cream placeholder-cream/20 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase text-[#8e847c] tracking-wider mb-1.5 font-semibold">
                            Select Pizza Craft:
                          </label>
                          <select
                            id="cta-form-pizza"
                            value={formData.pizzaId}
                            onChange={(e) => setFormData({ ...formData, pizzaId: e.target.value })}
                            className="w-full text-xs font-outfit py-2.5 px-3 bg-black/30 border border-[#2e2621] rounded-lg text-cream focus:outline-none focus:border-brand-red"
                          >
                            {PIZZA_ITEMS.map((p) => (
                              <option key={p.id} value={p.id}>
                                {p.name} (৳{p.price})
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase text-[#8e847c] tracking-wider mb-1.5 font-semibold">
                            Delivery Neighborhood:
                          </label>
                          <select
                            id="cta-form-area"
                            value={formData.area}
                            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                            className="w-full text-xs font-outfit py-2.5 px-3 bg-black/30 border border-[#2e2621] rounded-lg text-cream focus:outline-none"
                          >
                            {DHAKA_AREAS.map((a) => (
                              <option key={a.name} value={a.name}>
                                {a.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase text-[#8e847c] tracking-wider mb-1.5 font-semibold">
                          Detailed Dhaka Address (House, Flat, Road, Required):
                        </label>
                        <input
                          type="text"
                          id="cta-form-address"
                          required
                          placeholder="e.g. flat 4C, House 29, Road 8, Dhanmondi"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full text-xs font-outfit py-2.5 px-3 bg-black/30 border border-[#2e2621] focus:border-brand-red rounded-lg text-cream placeholder-cream/20 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase text-[#8e847c] tracking-wider mb-1.5 font-semibold">
                          Special Instructions / Late-Night Note (Optional):
                        </label>
                        <textarea
                          id="cta-form-note"
                          rows={2}
                          placeholder="e.g. Don't ring doorbell after midnight. Call when you reach."
                          value={formData.note}
                          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                          className="w-full text-xs font-outfit py-2 px-3 bg-black/30 border border-[#2e2621] focus:border-brand-red rounded-lg text-cream placeholder-cream/20 focus:outline-none resize-none"
                        />
                      </div>

                      <div className="pt-2">
                        <motion.button
                          type="submit"
                          id="cta-form-submit-btn"
                          disabled={submitting}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-4 rounded-xl bg-brand-red text-dark-bg font-outfit text-xs font-black uppercase tracking-widest hover:bg-[#ff3524] shadow-glow-red transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                          {submitting ? (
                            'FIRING UP THE OVEN...'
                          ) : (
                            <>
                              <span>ORDER COURIER DISPATCH</span>
                              <Send size={12} />
                            </>
                          )}
                        </motion.button>
                      </div>
                    </form>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
