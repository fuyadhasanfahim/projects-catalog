/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShoppingBag, Flame, TrendingUp } from 'lucide-react';
import { MenuItem } from '../types';
import { PIZZA_ITEMS } from '../data/pizzaData';

interface BentoBestsellersProps {
  onAddToCart: (pizza: MenuItem) => void;
}

export default function BentoBestsellers({ onAddToCart }: BentoBestsellersProps) {
  // Get our elements
  const nagaInferno = PIZZA_ITEMS.find((p) => p.id === 'naga-inferno') || PIZZA_ITEMS[0];
  const oldTownSeekh = PIZZA_ITEMS.find((p) => p.id === 'old-town-seekh') || PIZZA_ITEMS[1];
  const sultanCheese = PIZZA_ITEMS.find((p) => p.id === 'sultans-cheese') || PIZZA_ITEMS[2];

  return (
    <section id="bestsellers" className="py-24 bg-dark-bg text-cream relative">
      {/* Background glow layers */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-[#FF4D3D] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-[#FFB627] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/25 rounded-full text-brand-red text-xs uppercase tracking-widest font-mono"
          >
            <TrendingUp size={12} />
            <span>Dhaka's Midnight Favorites</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-6xl uppercase tracking-tight"
          >
            MIDNIGHT <span className="text-brand-yellow text-glow-yellow">BESTSELLERS</span>
          </motion.h2>
          
          <p className="text-xs sm:text-sm text-cream/60 leading-relaxed font-outfit">
            These are the slices driving Dhaka's late-night state of mind. Intense spicy heat, heavy artisan cheeses, and unapologetic local fusions.
          </p>
        </div>

        {/* Dynamic Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[550px]">
          
          {/* Main Giant Showcase Card (col-span-7) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative group overflow-hidden bg-dark-card border border-white/5 rounded-2xl flex flex-col justify-end p-8 min-h-[400px] lg:min-h-0"
          >
            {/* Absolute background picture */}
            <div className="absolute inset-0 z-0">
              <img
                src={nagaInferno.image}
                alt={nagaInferno.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Complex dual gradient glass masks */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent opacity-95 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-dark-bg/80 to-transparent" />
            </div>

            {/* Glowing floating pizza wireframe circle behind overlay */}
            <div className="absolute top-1/2 right-12 -translate-y-1/2 w-48 h-48 rounded-full border border-brand-red/20 pointer-events-none animate-pulse hidden xl:block" />

            {/* Content box over backgrounds */}
            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="px-3 py-1 bg-brand-red text-dark-bg font-outfit text-[10px] font-black uppercase tracking-wider rounded-md shadow-glow-red flex items-center gap-1">
                  <Flame size={10} />
                  HOT SELLER
                </span>
                <span className="px-2 py-0.5 border border-brand-yellow/30 bg-brand-yellow/5 text-brand-yellow font-outfit text-[9px] uppercase tracking-wider rounded">
                  48H SOURDOUGH DOUGH
                </span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl text-cream uppercase leading-none">
                  {nagaInferno.name}
                </h3>
                {nagaInferno.banglishName && (
                  <p className="text-xs font-mono text-[#8e847c] mt-1">{nagaInferno.banglishName}</p>
                )}
              </div>

              <p className="text-xs sm:text-sm text-cream/75 max-w-lg leading-relaxed font-outfit">
                {nagaInferno.description}
              </p>

              {/* Special ingredients summary taglists */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {nagaInferno.ingredients.map((ing) => (
                  <span key={ing} className="bg-black/40 border border-brand-red/10 text-cream/60 py-0.5 px-2 rounded-full text-[10px] font-outfit">
                    {ing}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#2e2621]/40">
                <div>
                  <span className="block text-[9px] text-[#8e847c] uppercase tracking-wider font-mono">Special price</span>
                  <span className="text-xl sm:text-2xl font-mono font-black text-brand-yellow text-glow-yellow">৳ {nagaInferno.price}</span>
                </div>

                <motion.button
                  id="bento-add-main"
                  onClick={() => onAddToCart(nagaInferno)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[#FF4D3D] hover:bg-[#ff3524] text-black font-extrabold uppercase font-outfit text-xs tracking-widest rounded-xl transition-all shadow-glow-red flex items-center gap-2 cursor-pointer"
                >
                  <ShoppingBag size={14} />
                  SECURE SOURDOUGH ৳
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Two Bento Cards (Stacked in col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Old Town fusion card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="group relative overflow-hidden bg-[#1A1410] border border-white/5 rounded-2xl p-6 flex flex-col justify-between flex-1 min-h-[220px]"
            >
              {/* Back ambient shadows */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent pointer-events-none" />
              <img
                src={oldTownSeekh.image}
                alt={oldTownSeekh.name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-45 transition-opacity"
              />

              <div className="relative z-10 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] px-2 py-0.5 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow rounded font-mono font-semibold uppercase">
                    Puran Dhaka Special
                  </span>
                  <span className="text-[10px] text-cream/40 font-mono">৳ {oldTownSeekh.price} BDT</span>
                </div>

                <div>
                  <h4 className="font-outfit text-lg font-extrabold text-cream group-hover:text-brand-yellow transition-colors leading-tight uppercase">
                    {oldTownSeekh.name}
                  </h4>
                  <p className="text-[10px] font-mono text-[#8e847c]">{oldTownSeekh.banglishName}</p>
                </div>

                <p className="text-xs text-cream/65 line-clamp-2 max-w-md font-outfit">
                  {oldTownSeekh.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 flex gap-2 justify-between items-center border-t border-[#2e2621]/30 mt-4">
                <span className="text-xs font-mono text-brand-yellow font-bold">৳ {oldTownSeekh.price}</span>
                <button
                  id={`bento-add-seekh`}
                  onClick={() => onAddToCart(oldTownSeekh)}
                  className="px-4 py-2 bg-transparent text-cream border border-brand-yellow/20 hover:border-brand-yellow hover:bg-brand-yellow/10 font-outfit text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer"
                >
                  ADD TO BASKET ৳
                </button>
              </div>
            </motion.div>

            {/* Sultans Cheese Feast Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="group relative overflow-hidden bg-[#1A1410] border border-white/5 rounded-2xl p-6 flex flex-col justify-between flex-1 min-h-[220px]"
            >
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent pointer-events-none" />
              <img
                src={sultanCheese.image}
                alt={sultanCheese.name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-45 transition-opacity"
              />

              <div className="relative z-10 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] px-2 py-0.5 bg-brand-red/10 border border-brand-red/20 text-brand-red rounded font-mono font-semibold uppercase">
                    Cheese-Heavy Royal
                  </span>
                  <span className="text-[10px] text-cream/40 font-mono">৳ {sultanCheese.price} BDT</span>
                </div>

                <div>
                  <h4 className="font-outfit text-lg font-extrabold text-cream group-hover:text-brand-yellow transition-colors leading-tight uppercase">
                    {sultanCheese.name}
                  </h4>
                  <p className="text-[10px] font-mono text-[#8e847c]">{sultanCheese.banglishName}</p>
                </div>

                <p className="text-xs text-cream/65 line-clamp-2 max-w-md font-outfit">
                  {sultanCheese.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 flex gap-2 justify-between items-center border-t border-[#2e2621]/30 mt-4">
                <span className="text-xs font-mono text-brand-yellow font-bold">৳ {sultanCheese.price}</span>
                <button
                  id={`bento-add-cheese`}
                  onClick={() => onAddToCart(sultanCheese)}
                  className="px-4 py-2 bg-transparent text-cream border border-brand-red/25 hover:border-brand-red hover:bg-brand-red/10 font-outfit text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer"
                >
                  ADD TO BASKET ৳
                </button>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
