/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { MENU_ITEMS } from '../data/restaurantData';
import ImageWithLoader from './ImageWithLoader';
import { ArrowLeft, ArrowRight, Star, Heart } from 'lucide-react';

export default function Featured() {
  const specials = MENU_ITEMS.filter(item => item.isChefSpecial);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const transitionConfig = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

  return (
    <section 
      id="featured" 
      className="relative py-24 bg-charcoal overflow-hidden border-t border-neutral-900"
    >
      {/* Visual glowing particle backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Horizontal Navigation Header */}
        <div id="featured_header" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="text-left">
            <span className="text-gold text-[10px] tracking-[0.6em] uppercase font-sans font-semibold mb-4 block">
              The Avant-Garde
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-cream">
              Chef’s Signature Masterpieces
            </h2>
            <div className="w-12 h-[1px] bg-gold/50 mt-6" />
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 items-center self-start md:self-end">
            <button
              id="specials_scroll_left_btn"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft 
                  ? 'border-gold text-gold hover:bg-gold hover:text-charcoal cursor-pointer' 
                  : 'border-neutral-800 text-neutral-700 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              id="specials_scroll_right_btn"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight 
                  ? 'border-gold text-gold hover:bg-gold hover:text-charcoal cursor-pointer' 
                  : 'border-neutral-800 text-neutral-700 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Swiping Container */}
        <div 
          id="featured_slider_track"
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-8 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {specials.map((item, index) => (
            <motion.div
              id={`featured_item_card_${item.id}`}
              key={item.id}
              initial={{ opacity: 0, scale: 0.98, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...transitionConfig, delay: index * 0.15 }}
              className="min-w-[290px] sm:min-w-[420px] max-w-[450px] bg-neutral-950 border border-neutral-900 group rounded-none snap-start relative flex flex-col justify-between overflow-hidden p-5"
            >
              {/* Subtle inner linear border styling */}
              <div className="absolute inset-3 border border-neutral-900/40 pointer-events-none transition-all duration-500 group-hover:border-gold/15" />

              <div>
                {/* Visual Cover wrapped in core high performance component */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-none mb-6">
                  <ImageWithLoader
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Luxury glowing tag marker */}
                  <div className="absolute top-3 left-3 bg-[#C8553D] text-[#F5F0E8] text-[7.5px] uppercase tracking-[0.25em] font-sans font-bold px-3 py-1 shadow-md">
                    Signature Creation
                  </div>
                </div>

                {/* Card description text */}
                <div className="text-left px-1">
                  <div className="flex gap-1.5 items-center mb-2">
                    <Star className="w-3 h-3 text-gold fill-gold" />
                    <span className="text-[8.5px] uppercase tracking-[0.3em] font-sans font-medium text-gold">Award Winning Selection</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-cream font-medium tracking-tight mb-3 group-hover:text-gold transition-colors duration-300">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#D1CAC0] font-sans font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Price Tag Details Panel */}
              <div className="flex justify-between items-center px-1 pt-4 border-t border-neutral-900">
                <div>
                  <span className="text-[8.5px] uppercase tracking-[0.3em] font-sans text-neutral-500 block">Sartorial Price</span>
                  <span className="text-base sm:text-lg text-gold font-serif font-semibold">€{item.price}</span>
                </div>

                {/* Reservation action link trigger */}
                <button
                  id={`featured_book_table_btn_${item.id}`}
                  onClick={() => {
                    const element = document.getElementById('reserve');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex items-center gap-2 group/btn border border-gold/20 hover:border-gold px-4 py-2 text-[9.5px] uppercase tracking-[0.2em] font-medium text-cream group-hover:text-gold transition-all duration-300 bg-neutral-900/30"
                >
                  Book Seat <Heart className="w-3 h-3 text-gold hover:fill-gold transition-colors" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
