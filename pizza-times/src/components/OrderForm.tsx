/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PIZZA_ITEMS, TOPPINGS, DHAKA_AREAS } from '../data/pizzaData';
import { ShoppingBag, Star, Sparkles, MapPin, CheckCircle, Clock } from 'lucide-react';

export default function OrderForm() {
  const [selectedPizza, setSelectedPizza] = useState(PIZZA_ITEMS[0].id);
  const [selectedArea, setSelectedArea] = useState(DHAKA_AREAS[0]);
  const [extraToppings, setExtraToppings] = useState<string[]>([]);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketData, setTicketData] = useState<any | null>(null);

  // Late-night live countdown timer
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 22, seconds: 45 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 4, minutes: 0, seconds: 0 }; // Loop it for late-night vibes!
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pizzaObj = PIZZA_ITEMS.find((p) => p.id === selectedPizza) || PIZZA_ITEMS[0];
  const toppingsTotal = extraToppings.reduce((acc, name) => {
    const found = TOPPINGS.find((t) => t.name === name);
    return acc + (found ? found.price : 0);
  }, 0);

  const subtotal = pizzaObj.price + toppingsTotal;
  const vatAndSd = Math.round(subtotal * 0.10); // 10% Vat & Service charge
  const deliveryCost = selectedArea.cost;
  const grandTotal = subtotal + vatAndSd + deliveryCost;

  const handleToppingToggle = (name: string) => {
    if (extraToppings.includes(name)) {
      setExtraToppings(extraToppings.filter((t) => t !== name));
    } else {
      setExtraToppings([...extraToppings, name]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerAddress || !customerPhone || !customerName) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setTicketData({
        code: 'PT-LATE-' + Math.floor(100000 + Math.random() * 900000),
        pizza: pizzaObj.name,
        extraToppings: extraToppings,
        total: grandTotal,
        area: selectedArea.name,
        name: customerName,
      });

      // Clear state
      setCustomerAddress('');
      setCustomerPhone('');
      setCustomerName('');
      setExtraToppings([]);
    }, 1500);
  };

  return (
    <section id="order-form" className="py-24 bg-dark-bg text-cream relative">
      <div className="absolute right-1/4 top-1/3 w-[300px] h-[300px] bg-brand-red/[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main layout card */}
        <div className="bg-[#16120e] border border-[#2e2621]/80 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left block Column (Form Info + Live cost estimator) */}
          <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 space-y-6 text-left">
            <div>
              <span className="text-[10px] bg-brand-red/10 border border-brand-red/20 text-brand-red px-3 py-1 rounded-full font-mono tracking-widest uppercase">
                450°C wood-fired builder
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-cream uppercase mt-3 leading-none">
                BUILD YOUR <span className="text-brand-red">NIGHT CRAVING</span>
              </h2>
              <p className="text-xs text-cream/60 font-outfit mt-2">
                Custom-create your perfect artisan slice. Mix local heat levels with imported mozzarella. Freshly hand-stretched.
              </p>
            </div>

            {/* Simulated Live Ticket Output popup container */}
            <AnimatePresence>
              {ticketData && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-5 bg-brand-yellow/5 border border-brand-yellow/30 text-cream rounded-xl space-y-3 font-mono text-xs text-left"
                >
                  <div className="flex justify-between items-center bg-brand-yellow/10 p-2.5 rounded border border-brand-yellow/20 text-brand-yellow font-extrabold uppercase">
                    <span className="flex items-center gap-1.5 leading-none">
                      <Star size={12} className="animate-pulse" />
                      ORDER TRANSMITTED!
                    </span>
                    <span>{ticketData.code}</span>
                  </div>

                  <p className="text-cream/90 leading-relaxed font-outfit text-xs">
                    Shubho Ratri, <span className="font-bold text-cream">{ticketData.name}</span>! Our wood-fired masters are stretching the {ticketData.pizza} sourdough. Prepare cash on delivery.
                  </p>

                  <div className="space-y-1 bg-black/40 p-3 rounded border border-white/5 text-[11px] font-mono">
                    <div className="flex justify-between text-cream/70">
                      <span>Artisan Pizza:</span>
                      <span className="text-cream font-bold">{ticketData.pizza}</span>
                    </div>
                    {ticketData.extraToppings.length > 0 && (
                      <div className="flex justify-between text-cream/70">
                        <span>Extra Toppings:</span>
                        <span className="text-brand-yellow font-bold text-right">{ticketData.extraToppings.join(', ')}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-cream/70">
                      <span>Dhaka Hub Destination:</span>
                      <span className="text-cream font-bold">{ticketData.area}</span>
                    </div>
                    <div className="flex justify-between text-brand-yellow text-sm font-bold font-outfit border-t border-white/5 pt-2 mt-2">
                      <span>COD Grand Total payable:</span>
                      <span>৳ {ticketData.total}</span>
                    </div>
                  </div>

                  <button
                    id="dismiss-customizer-ticket"
                    onClick={() => setTicketData(null)}
                    className="w-full text-center py-2 border-dashed border border-brand-yellow/20 text-brand-yellow hover:border-brand-yellow hover:bg-brand-yellow/5 rounded transition-all cursor-pointer font-bold uppercase tracking-wider text-[10px]"
                  >
                    Build Another Pizza
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Core customization input forms */}
            {!ticketData && (
              <form onSubmit={handleSubmit} className="space-y-5 font-outfit">
                
                {/* 1. Pizza select */}
                <div>
                  <label className="block text-[10px] text-[#8e847c] uppercase tracking-wider font-extrabold mb-2">
                    Step 1: Choose wood-fired base pizza (৳ Base price)
                  </label>
                  <select
                    id="estimator-pizza-select"
                    value={selectedPizza}
                    onChange={(e) => setSelectedPizza(e.target.value)}
                    className="w-full bg-black/40 border border-[#3e342a] focus:border-brand-red focus:ring-0 rounded-xl px-4 py-3.5 text-xs text-cream uppercase tracking-wide focus:outline-none"
                  >
                    {PIZZA_ITEMS.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name} (৳{item.price})
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Extra toppings checklist list */}
                <div>
                  <label className="block text-[10px] text-[#8e847c] uppercase tracking-wider font-extrabold mb-3">
                    Step 2: Add gourmet premium extras (৳ addon)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {TOPPINGS.map((top) => {
                      const active = extraToppings.includes(top.name);
                      return (
                        <button
                          key={top.name}
                          type="button"
                          id={`form-topping-${top.name.replace(/\s+/g, '-')}`}
                          onClick={() => handleToppingToggle(top.name)}
                          className={`text-left p-2.5 rounded-xl border text-[11px] flex justify-between items-center transition-all cursor-pointer ${
                            active
                              ? 'bg-brand-yellow/10 border-brand-yellow text-brand-yellow font-bold shadow-[0_0_12px_rgba(255,182,39,0.12)]'
                              : 'bg-black/20 border-white/5 text-cream/50 hover:border-white/10'
                          }`}
                        >
                          <span>{top.name}</span>
                          <span className={`${active ? 'text-brand-yellow' : 'text-cream/30'}`}>+৳{top.price}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Dhaka Neighborhood selection */}
                <div>
                  <label className="block text-[10px] text-[#8e847c] uppercase tracking-wider font-extrabold mb-2">
                    Step 3: Select Dhaka Neighborhood Hub (Couriers ride cost)
                  </label>
                  <select
                    id="estimator-area-select"
                    value={selectedArea.name}
                    onChange={(e) => {
                      const found = DHAKA_AREAS.find((a) => a.name === e.target.value);
                      if (found) setSelectedArea(found);
                    }}
                    className="w-full bg-black/40 border border-[#3e342a] focus:border-brand-red focus:ring-0 rounded-xl px-4 py-3.5 text-xs text-cream uppercase tracking-wide focus:outline-none"
                  >
                    {DHAKA_AREAS.map((area) => (
                      <option key={area.name} value={area.name}>
                        {area.name} (Late Courier ride +৳{area.cost})
                      </option>
                    ))}
                  </select>
                </div>

                <hr className="border-white/5 my-2" />

                {/* 4. Contact Details required */}
                <div className="space-y-3">
                  <label className="block text-[10px] text-[#8e847c] uppercase tracking-wider font-extrabold">
                    Step 4: Who is receiving these midnight slices?
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      id="estimator-customer-name"
                      required
                      placeholder="Your Full Name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-black/40 border border-[#3e342a] focus:border-brand-red focus:ring-0 rounded-xl px-4 py-3 text-xs text-cream focus:outline-none placeholder-cream/20"
                    />
                    <input
                      type="tel"
                      id="estimator-customer-phone"
                      required
                      placeholder="Dhaka Phone e.g. 0171XXXXXXX"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-black/40 border border-[#3e342a] focus:border-brand-red focus:ring-0 rounded-xl px-4 py-3 text-xs text-cream focus:outline-none font-mono placeholder-cream/20"
                    />
                  </div>

                  <input
                    type="text"
                    id="estimator-customer-address"
                    required
                    placeholder="Full Delivery Address e.g. Flat 4B, House 12, Banani Road 11"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full bg-black/40 border border-[#3e342a] focus:border-brand-red focus:ring-0 rounded-xl px-4 py-3 text-xs text-cream focus:outline-none placeholder-cream/20"
                  />
                </div>

                {/* Submission CTA button */}
                <motion.button
                  id="estimator-submit-btn"
                  type="submit"
                  disabled={isSubmitting || !customerName || !customerPhone || !customerAddress}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-outfit text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                    !customerName || !customerPhone || !customerAddress
                      ? 'bg-white/5 text-cream/20 border border-white/5 cursor-not-allowed'
                      : 'bg-brand-red text-dark-bg shadow-glow-red hover:bg-[#ff3524]'
                  }`}
                >
                  {isSubmitting ? 'TRANSMITTING CRAVING...' : 'TRANSMIT LATE NIGHT COD ORDER'}
                </motion.button>
              </form>
            )}
          </div>

          {/* Right block Column (Visual Estimator summary + Hours tracker) */}
          <div className="lg:col-span-5 bg-black/45 border-l border-white/5 p-6 sm:p-10 md:p-12 flex flex-col justify-between space-y-8 select-none">
            
            {/* Live Countdowns widget */}
            <div className="p-4 bg-brand-red/5 border border-brand-red/10 rounded-2xl relative overflow-hidden flex flex-col gap-2 items-center text-center">
              <div className="absolute top-1/2 right-4 -translate-y-1/2 text-brand-red/10 pointer-events-none">
                <Clock size={72} />
              </div>
              
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
                <span className="text-[9px] font-mono tracking-widest text-[#8e847c] uppercase">LIVE DELIVERY ENDS IN</span>
              </div>

              {/* Countdown metrics */}
              <div className="flex gap-2 font-mono text-xl sm:text-2xl font-black text-brand-red text-glow-red select-none">
                <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
                <span className="animate-pulse">:</span>
                <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
                <span className="animate-pulse">:</span>
                <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
              </div>

              <span className="text-[8px] font-outfit text-[#8e847c]/70 tracking-widest uppercase">
                Ondemand brick oven is firing till 4:00 AM
              </span>
            </div>

            {/* Calculations summaries */}
            <div className="space-y-4">
              <h4 className="font-outfit text-[#8e847c] text-[10px] font-black uppercase tracking-widest">
                LATE NIGHT BILL OF MATERIALS (BDT)
              </h4>

              <div className="space-y-2 font-outfit text-xs text-cream/75">
                <div className="flex justify-between">
                  <span className="capitalize">{pizzaObj.name} Base:</span>
                  <span>৳ {pizzaObj.price}</span>
                </div>
                {extraToppings.length > 0 && (
                  <div className="flex justify-between text-brand-yellow/90">
                    <span>Added Extra Toppings:</span>
                    <span>+৳ {toppingsTotal}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>VAT & Restaurant Svc (10%):</span>
                  <span>৳ {vatAndSd}</span>
                </div>
                <div className="flex justify-between">
                  <span>{selectedArea.name} Rider Courier:</span>
                  <span>৳ {deliveryCost}</span>
                </div>

                <hr className="border-white/5 my-2" />
                
                <div className="flex justify-between text-sm font-bold text-cream uppercase tracking-wide">
                  <span>Payable (Cash on Delivery):</span>
                  <span className="text-brand-yellow font-mono text-lg font-black text-glow-yellow">
                    ৳ {grandTotal}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick trust metrics */}
            <div className="text-left font-outfit space-y-3 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2 text-[10px] text-[#8e847c] uppercase">
                <MapPin size={11} className="text-brand-red" />
                <span>Midnight Courier active throughout Dhaka</span>
              </div>
              <p className="text-[10px] text-cream/45 leading-relaxed">
                *Couriers collect payments exclusively via Cash on Delivery (COD) once physical pizza box handover verifies heat level. Always inspect steam signature.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
