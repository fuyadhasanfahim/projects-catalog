/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';
import ImageWithLoader from './ImageWithLoader';
import { Sparkles, Info, X, MapPin, Wine } from 'lucide-react';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<'starters' | 'mains' | 'desserts' | 'drinks'>('starters');
  const [isLoading, setIsLoading] = useState(false);
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);

  // Trigger simulated skeleton loading phase on tab change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 650); // custom premium speed
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const filteredItems = MENU_ITEMS.filter(item => item.category === selectedCategory);

  const categories = [
    { id: 'starters', label: 'Starters' },
    { id: 'mains', label: 'Mains' },
    { id: 'desserts', label: 'Pâtisserie' },
    { id: 'drinks', label: 'Mixology' }
  ] as const;

  const transitionConfig = { duration: 0.6, ease: [0.16, 1, 0.3, 1] };

  // Generate simulated wine pairings and sources based on names
  const getSommelierPairing = (name: string) => {
    if (name.includes("Wagyu")) return { wine: "2015 Château Mouton Rothschild, Pauillac", origin: "Miyazaki Prefecture, Japan", prep: "Slow-seared over organic binchotan charcoal" };
    if (name.includes("Carpaccio")) return { wine: "2018 Gevrey-Chambertin, Burgundy", origin: "Angus Valley, Ireland", prep: "Chilled dry-aging for 28 days" };
    if (name.includes("Seabass")) return { wine: "2020 Estate Chardonnay, Sonoma Coast", origin: "Deep pristine Chilean oceanic shelves", prep: "Steamed inside parchment papillote envelope" };
    if (name.includes("Duck")) return { wine: "2019 Pinot Noir Reserve, Alsace", origin: "Heirloom Bresse farms, France", prep: "Glazed in forest wild thyme and orange gastrique" };
    if (name.includes("Oysters")) return { wine: "Mumm Grand Cordon Brut Champagne", origin: "Pacific Sound cold beds", prep: "Pernod flambé cooked on raw stone salt grains" };
    if (name.includes("Tomato")) return { wine: "2021 Sauvignon Blanc, Marlborough", origin: "Biodynamic soil organic crops, Puglia", prep: "Muddled with cold-infused extra virgin basil oils" };
    if (name.includes("Risotto")) return { wine: "2017 Barolo Docg, Piedmont", origin: "Acquerello aged grain fields, Italy", prep: "Simmered continuously in saffron mushroom dashi" };
    if (name.includes("Foie Gras")) return { wine: "2016 Sauternes, Chateau d'Yquem", origin: "Loire Valley pastures", prep: "Cold-rendered terrine under gold honey wax" };
    if (name.includes("Sphere")) return { wine: "24-Year Rare Tawny Port Wine", origin: "Valrhona craft chocolaterie, France", prep: "Table-side warm chocolate melting service" };
    if (name.includes("Soufflé")) return { wine: "Ice Wine Selection Grand Cru", origin: "Tahiti bean organic orchids", prep: "Precision baked to order [Requires 15 mins]" };
    if (name.includes("Mille-Feuille")) return { wine: "Tokaji Aszú 5 Puttonyos", origin: "Persian wild orchards", prep: "Fine hand-wrapping of crisp butter-layers" };
    if (name.includes("Rosemary")) return { wine: "Bourbon Barrel-Aged Porter", origin: "Stave barrels of Kentucky oak", prep: "Sealed Rosemary cloche cold-smoking" };
    if (name.includes("French 75")) return { wine: "Dom Pérignon Vintage 2012", origin: "Champagne Hillsides, France", prep: "Infused with standard 24k gold leaf particles" };
    return { wine: "Sommelier Guest Selection", origin: "Local biodynamic micro-farm", prep: "Crafted artisanal temperature extraction" };
  };

  return (
    <section 
      id="menu" 
      className="relative py-24 md:py-32 bg-neutral-950 text-cream overflow-hidden border-t border-neutral-900"
    >
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-terracotta/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div id="menu_header" className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-gold text-[10px] tracking-[0.6em] uppercase font-sans font-semibold mb-4 block">
            Curation of Taste
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-cream">
            The Culinary Composition
          </h2>
          <p className="text-xs text-neutral-400 font-sans font-light mt-4 max-w-lg tracking-wide uppercase">
            Click on any gourmand plate to summon sourcing details & sommelier pairing recommendations.
          </p>
          <div className="w-12 h-[1px] bg-gold/50 mt-6" />
        </div>

        {/* Category Tabs Section */}
        <div id="menu_categories" className="flex justify-center items-center mb-12 md:mb-16">
          <div className="inline-flex border-b border-neutral-800 p-1 relative gap-2 sm:gap-6">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  id={`menu_cat_tab_${cat.id}`}
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-4 py-3 text-xs sm:text-sm tracking-[0.2em] uppercase font-sans font-medium cursor-pointer transition-colors duration-300 ${
                    isSelected ? 'text-gold' : 'text-cream-muted hover:text-cream'
                  }`}
                >
                  <span className="relative z-10">{cat.label}</span>
                  {isSelected && (
                    <motion.div
                      id={`menu_cat_active_line_${cat.id}`}
                      layoutId="activeCategoryLine"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Menu Grid (Showing Loaded state OR skeleton placeholders) */}
        <div id="menu_grid_container" className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {isLoading ? (
              /* High-fidelity shimmer skeleton loading block cards */
              <motion.div
                key="skeleton_grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12"
              >
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-4 sm:gap-6 bg-neutral-900/30 border border-neutral-900 p-4 rounded-sm animate-pulse">
                    <div className="w-24 sm:w-32 aspect-square bg-neutral-900 rounded-sm relative overflow-hidden shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-800/10 to-transparent animate-shimmer-skeleton" style={{ backgroundSize: '200% 100%' }} />
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div>
                        <div className="h-4 bg-neutral-900 rounded-sm w-3/4 mb-3 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-800/10 to-transparent animate-shimmer-skeleton" style={{ backgroundSize: '200% 100%' }} />
                        </div>
                        <div className="h-3 bg-neutral-900 rounded-sm w-5/6 mb-2 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-800/10 to-transparent animate-shimmer-skeleton" style={{ backgroundSize: '200% 100%' }} />
                        </div>
                        <div className="h-3 bg-neutral-900 rounded-sm w-2/3 mb-2 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-800/10 to-transparent animate-shimmer-skeleton" style={{ backgroundSize: '200% 100%' }} />
                        </div>
                      </div>
                      <div className="h-4 bg-neutral-900 rounded-sm w-12 mt-2 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-800/10 to-transparent animate-shimmer-skeleton" style={{ backgroundSize: '200% 100%' }} />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              /* Elegant, fully populated menu plates with details trigger link */
              <motion.div
                key="populated_grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={transitionConfig}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12"
              >
                {filteredItems.map((item, index) => (
                  <motion.div
                    id={`menu_card_${item.id}`}
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...transitionConfig, delay: index * 0.08 }}
                    onClick={() => setActiveItem(item)}
                    className="group flex gap-4 sm:gap-6 bg-neutral-950 border border-neutral-900 hover:border-gold/35 focus-within:border-gold p-4.5 rounded-sm relative overflow-hidden transition-all duration-500 hover:shadow-[0_12px_24px_rgba(0,0,0,0.5)] cursor-pointer"
                  >
                    {/* Item Image wrapped in custom container */}
                    <div className="w-24 sm:w-32 aspect-square rounded-sm overflow-hidden bg-neutral-900 relative shrink-0">
                      <ImageWithLoader
                        src={item.image}
                        alt={item.name}
                        aspectRatioClassName="w-full h-full"
                      />
                      {item.isChefSpecial && (
                        <div className="absolute top-1.5 left-1.5 bg-gold text-charcoal text-[7px] font-sans uppercase font-bold tracking-[0.2em] px-2 py-0.5 rounded-none z-10">
                          Specialty
                        </div>
                      )}
                    </div>

                    {/* Meta info column */}
                    <div className="flex-grow flex flex-col justify-between py-0.5 text-left">
                      <div>
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <h3 className="font-serif text-base sm:text-lg text-cream font-medium tracking-tight group-hover:text-gold transition-colors duration-300">
                            {item.name}
                          </h3>
                          <span className="font-serif text-gold text-base sm:text-lg font-semibold tracking-wide">
                            €{item.price}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 font-sans font-light leading-relaxed line-clamp-2 md:line-clamp-3 mb-2">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        {/* Tags list */}
                        <div className="flex gap-2 flex-wrap max-w-[70%]">
                          {item.tags?.map((t, idx) => (
                            <span key={idx} className="text-[7.5px] uppercase tracking-widest font-sans font-medium text-cream-muted border border-neutral-900/80 bg-neutral-900/50 px-1.5 py-0.5">
                              {t}
                            </span>
                          ))}
                        </div>
                        {/* Interactive Detail trigger indicator */}
                        <span className="text-[9px] uppercase tracking-widest font-sans font-semibold text-neutral-500 group-hover:text-gold flex items-center gap-1 transition-colors duration-300">
                          Details <Info className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Gourmet Detail Dialog Modal Overlay */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            id="gourmet_detail_modal_overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/95 backdrop-blur-md"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              id="gourmet_detail_modal_inner"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-neutral-950 border border-gold/25 p-6 sm:p-8 rounded-sm shadow-[0_20px_50px_rgba(212,160,23,0.1)] overflow-hidden"
            >
              {/* Close Button */}
              <button
                id="modal_close_btn"
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 text-cream-muted hover:text-gold focus:outline-none transition-colors duration-300 z-20 cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mt-4 relative z-10">
                
                {/* Plate Presentation Left Column */}
                <div className="md:col-span-5 relative aspect-square rounded-sm overflow-hidden border border-neutral-900 bg-neutral-900">
                  <ImageWithLoader
                    src={activeItem.image}
                    alt={activeItem.name}
                    aspectRatioClassName="w-full h-full"
                  />
                  {activeItem.isChefSpecial && (
                    <div className="absolute bottom-2 left-2 bg-gold text-charcoal text-[8px] font-sans uppercase font-bold tracking-[0.2em] px-2.5 py-1">
                      Chef Special
                    </div>
                  )}
                </div>

                {/* Sourcing & Somm Details Right Column */}
                <div className="md:col-span-7 flex flex-col justify-between text-left">
                  <div>
                    <span className="text-gold text-[8.5px] uppercase tracking-[0.4em] font-sans font-medium mb-1.5 block">
                      Plate Architecture
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-cream font-medium tracking-tight mb-2 flex items-center gap-2">
                      {activeItem.name}
                    </h3>
                    <p className="font-serif text-gold text-lg font-semibold tracking-wide mb-4">
                      €{activeItem.price}
                    </p>
                    <p className="text-xs text-[#D1CAC0] font-sans font-light leading-relaxed mb-6 border-b border-neutral-900 pb-4">
                      {activeItem.description}
                    </p>

                    {/* Detailed info panels */}
                    <div className="flex flex-col gap-4">
                      {/* Source */}
                      <div className="flex gap-3 items-start">
                        <div className="p-1.5 rounded-full bg-neutral-900 border border-neutral-800">
                          <MapPin className="w-3.5 h-3.5 text-gold" />
                        </div>
                        <div>
                          <span className="text-[9px] uppercase tracking-widest text-neutral-500 block font-semibold">Gourmet Sourcing</span>
                          <span className="text-xs text-cream font-medium font-sans">
                            {getSommelierPairing(activeItem.name).origin}
                          </span>
                        </div>
                      </div>

                      {/* Prep Technique */}
                      <div className="flex gap-3 items-start">
                        <div className="p-1.5 rounded-full bg-neutral-900 border border-neutral-800">
                          <Sparkles className="w-3.5 h-3.5 text-gold" />
                        </div>
                        <div>
                          <span className="text-[9px] uppercase tracking-widest text-neutral-500 block font-semibold">Preparation Ritual</span>
                          <span className="text-xs text-cream font-medium font-sans">
                            {getSommelierPairing(activeItem.name).prep}
                          </span>
                        </div>
                      </div>

                      {/* Sommelier Pairing */}
                      <div className="flex gap-3 items-start">
                        <div className="p-1.5 rounded-full bg-neutral-900 border border-neutral-800">
                          <Wine className="w-3.5 h-3.5 text-gold" />
                        </div>
                        <div>
                          <span className="text-[9px] uppercase tracking-widest text-neutral-500 block font-semibold">Wine Cellar Recommendation</span>
                          <span className="text-xs text-gold font-serif italic tracking-wide">
                            {getSommelierPairing(activeItem.name).wine}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Booking CTA trigger inside modal */}
                  <div className="mt-8 pt-4 border-t border-neutral-900 flex justify-end">
                    <button
                      id="modal_reserve_table_trigger"
                      onClick={() => {
                        setActiveItem(null);
                        const element = document.getElementById('reserve');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.2em] border-b border-gold text-gold hover:text-cream hover:border-cream transition-colors duration-300 pb-1 cursor-pointer"
                    >
                      Book a table for this dish
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes shimmer-skeleton {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer-skeleton {
          animation: shimmer-skeleton 1.5s infinite linear;
        }
      `}</style>
    </section>
  );
}
