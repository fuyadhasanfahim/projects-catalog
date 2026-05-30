/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Flame, Info, Sparkles, CheckCircle2 } from 'lucide-react';
import { MenuItem } from '../types';
import { PIZZA_ITEMS } from '../data/pizzaData';

interface MenuSectionProps {
  onAddToCart: (pizza: MenuItem) => void;
}

export default function MenuSection({ onAddToCart }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState<boolean>(false);
  const [activePizzaDetail, setActivePizzaDetail] = useState<MenuItem | null>(null);
  const [addedPopupName, setAddedPopupName] = useState<string | null>(null);

  // Categories definitions
  const categories = [
    { key: 'all', name: 'ALL SLICES' },
    { key: 'spicy', name: 'NAGA & SPICY' },
    { key: 'fusion', name: 'DHAKA FUSIONS' },
    { key: 'cheese-heavy', name: 'ROYAL CHEESE' },
    { key: 'classic', name: 'THE CLASSICS' },
  ];

  // Filter products based on active category
  const filteredPizzas = selectedCategory === 'all'
    ? PIZZA_ITEMS
    : PIZZA_ITEMS.filter((p) => p.category === selectedCategory);

  // Simulate premium shimmer skeleton load whenever category changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const handleAddToCartClick = (e: React.MouseEvent, pizza: MenuItem) => {
    e.stopPropagation(); // prevent opening details modal
    onAddToCart(pizza);
    setAddedPopupName(pizza.name);
    setTimeout(() => {
      setAddedPopupName(null);
    }, 1800);
  };

  // Render spicy flames indicators
  const renderSpicinessFlames = (level: number) => {
    return (
      <div className="flex gap-0.5 text-brand-red">
        {Array.from({ length: 3 }).map((_, i) => (
          <Flame
            key={i}
            size={13}
            className={`${
              i < level
                ? 'opacity-100 drop-shadow-[0_0_4px_#FF4D3D]'
                : 'opacity-20 text-cream'
            }`}
          />
        ))}
      </div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  };

  return (
    <section id="menu" className="py-24 bg-dark-bg text-cream relative">
      {/* Background ambient red lighting spots context */}
      <div className="absolute right-[5%] bottom-[15%] w-[400px] h-[400px] bg-brand-red/[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute left-[5%] top-[10%] w-[400px] h-[400px] bg-brand-yellow/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with absolute bold presentation spacing */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono tracking-[0.3em] uppercase text-brand-yellow"
          >
            Sourdough Craft Slices
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-6xl uppercase tracking-tight"
          >
            SIGNATURE <span className="text-brand-red text-glow-red">MENU</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-16 h-[2px] bg-brand-red mx-auto"
          />
          <p className="text-xs sm:text-sm text-cream/60 leading-relaxed font-outfit">
            Curated combos of local Bangladeshi spices, premium imported meats, and slow-leavened sourdough bakes. Freshly fired in 90 seconds.
          </p>
        </div>

        {/* Categories Tab Selector buttons */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              id={`category-tab-${cat.key}`}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-[10px] font-outfit font-extrabold uppercase tracking-widest transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-brand-red text-dark-bg shadow-glow-red font-black'
                  : 'bg-[#181411] text-cream/70 hover:text-cream border border-brand-yellow/5 hover:border-brand-yellow/15'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Static add confirmation prompt */}
        <AnimatePresence>
          {addedPopupName && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed bottom-6 left-6 z-50 p-4 bg-[#14100e] border border-brand-yellow text-brand-yellow rounded-xl shadow-glow-yellow flex items-center gap-3 font-outfit"
            >
              <CheckCircle2 size={18} className="text-brand-yellow animate-ping" />
              <div className="text-xs">
                <span className="font-bold text-cream">{addedPopupName}</span> added to your late-night cart!
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Shimmer loading list vs actual menu listing */}
        {loading ? (
          /* Dark elegant Shimmer Skelton mockup elements */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-dark-card border border-[#2e2621]/20 rounded-2xl overflow-hidden h-96 relative animate-pulse flex flex-col justify-between p-6"
              >
                <div className="space-y-4">
                  {/* Photo area skeleton */}
                  <div className="w-full h-44 bg-neutral-900 rounded-xl" />
                  {/* Title skeleton */}
                  <div className="h-6 bg-neutral-800 rounded w-2/3" />
                  {/* Description skeleton */}
                  <div className="space-y-2">
                    <div className="h-4 bg-neutral-900 rounded w-full" />
                    <div className="h-4 bg-neutral-900 rounded w-5/6" />
                  </div>
                </div>
                {/* Footer skeleton */}
                <div className="flex justify-between items-center pt-4 border-t border-neutral-900">
                  <div className="h-5 bg-neutral-800 rounded w-16" />
                  <div className="h-9 bg-neutral-800 rounded w-24" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Staggered cards reveal using child variants and whileInView trigger */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPizzas.map((pizza) => (
              <motion.div
                key={pizza.id}
                variants={cardVariants}
                onClick={() => setActivePizzaDetail(pizza)}
                className="group bg-dark-card border border-[#25201B] hover:border-brand-red/30 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-glow-red hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Image and relative tags indicators */}
                <div className="relative h-48 overflow-hidden bg-black/40">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Black mesh mask inside image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent opacity-60" />

                  {/* Hot tags */}
                  {pizza.tag && (
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red text-dark-bg font-outfit text-[9px] font-extrabold uppercase tracking-widest shadow-glow-red">
                      <Sparkles size={9} />
                      {pizza.tag}
                    </span>
                  )}

                  {/* Spiciness indicator inside the element */}
                  {pizza.spiciness > 0 && (
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-[#2a2018]">
                      <span className="text-[9px] font-mono tracking-widest text-[#8e847c] uppercase">Spicy:</span>
                      {renderSpicinessFlames(pizza.spiciness)}
                    </div>
                  )}
                </div>

                {/* Info Text Detail Block */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-outfit text-lg font-bold text-cream group-hover:text-brand-red transition-colors">
                          {pizza.name}
                        </h3>
                        {pizza.banglishName && (
                          <span className="block text-[10px] font-mono text-[#8e847c] font-medium tracking-wide">
                            {pizza.banglishName}
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-[#8e847c] text-[10px] border border-[#2e2621] px-2 py-0.5 rounded uppercase">
                        {pizza.category}
                      </span>
                    </div>

                    <p className="text-xs text-cream/60 leading-relaxed font-outfit line-clamp-3">
                      {pizza.description}
                    </p>

                    {/* Mini ingredients badges */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {pizza.ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="text-[9px] px-2 py-0.5 rounded bg-[#1e1a17] text-cream/40 border border-[#2e2621]/30 font-outfit"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Button / Pricing Row */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#25201B]">
                    <div>
                      <span className="block text-[9px] font-mono uppercase tracking-widest text-[#8e847c]">Price (BDT)</span>
                      <span className="font-mono text-xl font-bold text-brand-yellow text-glow-yellow">
                        ৳ {pizza.price}
                      </span>
                    </div>

                    <button
                      id={`add-to-cart-${pizza.id}`}
                      onClick={(e) => handleAddToCartClick(e, pizza)}
                      className="px-4 py-2.5 rounded-xl bg-brand-red text-dark-bg font-outfit text-[10px] font-extrabold uppercase tracking-widest hover:bg-brand-red/90 hover:scale-102 transition-all cursor-pointer shadow-glow-red flex items-center gap-1.5 focus:outline-none"
                    >
                      ADD TO CART ৳
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>

      {/* Dynamic Popup Closeup Details Modal */}
      <AnimatePresence>
        {activePizzaDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop screen */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePizzaDetail(null)}
              className="absolute inset-0 bg-[#000000]/80 backdrop-blur-sm"
            />

            {/* Modal display card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#14100e] border border-[#25201B] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.85)] z-10"
            >
              {/* Closeup gorgeous photo */}
              <div className="relative h-56 select-none bg-black/40">
                <img
                  src={activePizzaDetail.image}
                  alt={activePizzaDetail.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14100e] to-transparent" />
                <button
                  id="close-pizza-detail-modal"
                  onClick={() => setActivePizzaDetail(null)}
                  className="absolute top-4 right-4 p-2 bg-dark-bg/60 text-cream rounded-full hover:bg-brand-red hover:text-dark-bg transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  ✕
                </button>
              </div>

              {/* Detailed review contents */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] px-2.5 py-0.5 rounded bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 font-mono tracking-widest uppercase">
                      {activePizzaDetail.category} Craft Base
                    </span>
                    <h3 className="font-display text-2xl tracking-wide uppercase text-cream mt-2 flex items-center gap-2">
                      {activePizzaDetail.name}
                    </h3>
                    {activePizzaDetail.banglishName && (
                      <p className="text-xs font-mono text-brand-yellow">{activePizzaDetail.banglishName}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="block text-[8px] font-mono text-[#8e847c] uppercase tracking-widest">Base BDT</span>
                    <span className="font-mono text-xl font-bold text-brand-yellow">৳ {activePizzaDetail.price}</span>
                  </div>
                </div>

                <p className="text-xs text-cream/70 leading-relaxed font-outfit">
                  {activePizzaDetail.description}
                </p>

                {/* Sourdough banner snippet inside details */}
                <div className="p-3 bg-black/30 border border-[#2a211a] rounded-xl flex items-start gap-2.5">
                  <span className="text-base">🔥</span>
                  <div className="text-[10px] text-cream/60 leading-relaxed">
                    <span className="font-bold text-cream uppercase">Midnight Sourdough Guarantee:</span> Fermented for 48 hours for pristine leopard crust spots and bubbles. Never pre-baked or frozen. Hand tossed by our masters.
                  </div>
                </div>

                {/* Detailed checklist block */}
                <div className="space-y-2">
                  <span className="block text-[9px] font-mono uppercase tracking-widest text-[#8e847c]">Artisan Ingredients:</span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-cream/80">
                    {activePizzaDetail.ingredients.map((ing) => (
                      <div key={ing} className="flex items-center gap-1.5 font-outfit text-cream/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                        <span>{ing}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button inside details */}
                <div className="flex gap-4 pt-4 border-t border-[#25201B]">
                  <button
                    id="detail-modal-close"
                    onClick={() => setActivePizzaDetail(null)}
                    className="flex-1 py-3 bg-[#1e1a17] hover:bg-[#2e2621] border border-[#2e2621] text-cream/80 font-outfit text-[11px] font-extrabold uppercase tracking-widest rounded-xl transition-all cursor-pointer"
                  >
                    Go Back
                  </button>
                  <button
                    id="detail-modal-add"
                    onClick={(e) => {
                      handleAddToCartClick(e, activePizzaDetail);
                      setActivePizzaDetail(null);
                    }}
                    className="flex-1 py-3 bg-brand-red text-dark-bg font-outfit text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-brand-red/90 transition-all shadow-glow-red cursor-pointer"
                  >
                    ADD TO CART (৳{activePizzaDetail.price})
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
