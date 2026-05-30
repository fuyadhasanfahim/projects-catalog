/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data/pizzaData';
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote } from 'lucide-react';

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000); // rotate every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="reviews" className="py-24 bg-[#0A0705] text-cream relative">
      <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-brand-yellow/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/20 rounded-full text-brand-yellow text-xs tracking-wider font-mono"
          >
            <MessageSquare size={13} />
            <span>WORDS FROM DHAKA NIGHT OWLS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-6xl uppercase tracking-tight"
          >
            THE NIGHT-CRAVING <span className="text-brand-red text-glow-red">OATH</span>
          </motion.h2>
          <p className="text-xs sm:text-sm text-cream/60 leading-relaxed font-outfit">
            Don't trust our wood-fire temperature calculations alone. Listen to the night owls of Banani, Gulshan, and Dhanmondi.
          </p>
        </div>

        {/* Carousel slide blocks */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-8">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-dark-card border border-[#2e2621]/30 rounded-2xl p-6 sm:p-10 md:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.6)] flex flex-col md:flex-row gap-8 items-center relative"
            >
              {/* Back quote watermark signifier */}
              <Quote size={120} className="absolute right-6 top-6 text-[#251e18]/25 rotate-12 -z-0 pointer-events-none" />

              {/* Reviewer Avatar Image item */}
              <div className="relative shrink-0 z-10">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-brand-yellow shadow-glow-yellow">
                  <img
                    src={TESTIMONIALS[currentIndex].avatar}
                    alt={TESTIMONIALS[currentIndex].name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 p-1.5 bg-dark-bg border border-brand-yellow/40 rounded-full text-brand-yellow">
                  <Star size={12} fill="#FFB627" />
                </div>
              </div>

              {/* Review Content items */}
              <div className="flex-1 space-y-4 text-center md:text-left relative z-10">
                <div className="flex justify-center md:justify-start gap-1">
                  {Array.from({ length: TESTIMONIALS[currentIndex].rating }).map((_, i) => (
                    <Star key={i} size={15} className="text-brand-yellow fill-brand-yellow text-glow-yellow" />
                  ))}
                </div>

                <blockquote className="text-sm sm:text-base text-cream/90 leading-relaxed italic font-outfit">
                  "{TESTIMONIALS[currentIndex].content}"
                </blockquote>

                <div className="pt-2 border-t border-[#2e2621]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="block text-sm font-extrabold text-cream leading-none uppercase tracking-wide">
                      {TESTIMONIALS[currentIndex].name}
                    </span>
                    <span className="text-[11px] font-mono text-[#8e847c]/80 mt-1 block">
                      {TESTIMONIALS[currentIndex].role}
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] bg-brand-red/10 border border-brand-red/25 text-brand-red py-1 px-3 rounded-full uppercase tracking-wider font-extrabold">
                      {TESTIMONIALS[currentIndex].location}
                    </span>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigtional Toggles Controls buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              id="review-prev"
              onClick={handlePrev}
              className="p-3 bg-dark-card border border-[#2e2621] hover:border-brand-red text-cream hover:text-brand-red rounded-full transition-all focus:outline-none cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Slider dots indicator bars */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  id={`review-dot-${idx}`}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                    idx === currentIndex ? 'w-6 bg-brand-red shadow-glow-red' : 'w-2 bg-[#2e2621]'
                  }`}
                  aria-label={`Jump to review slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              id="review-next"
              onClick={handleNext}
              className="p-3 bg-dark-card border border-[#2e2621] hover:border-brand-red text-cream hover:text-brand-red rounded-full transition-all focus:outline-none cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
