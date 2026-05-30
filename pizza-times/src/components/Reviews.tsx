/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data/pizzaData';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="reviews" className="py-24 bg-[#0A0705] text-cream relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-brand-red/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-brand-yellow/[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono tracking-[0.3em] uppercase text-brand-red"
          >
            Dhaka's Feedback
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-6xl uppercase tracking-tight"
          >
            NIGHT OWL <span className="text-brand-yellow text-glow-yellow">REVIEWS</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-16 h-[2px] bg-brand-yellow mx-auto"
          />
          <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-outfit">
            Hear from our loyal fans who fuel their code sprints and midnight video edits with the finest sourdough pizzas in Dhaka.
          </p>
        </div>

        {/* Testimonial Active Display box with smooth sliding container */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          
          <div className="relative bg-[#130F0C] border border-[#2e2621]/80 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.5)]">
            {/* Absolute quote indicator */}
            <Quote size={56} className="absolute top-8 right-8 text-white/[0.03] rotate-180 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6 text-left"
              >
                
                {/* Visual stars indicators */}
                <div className="flex gap-1 text-brand-yellow">
                  {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                    <Star key={i} size={15} className="fill-brand-yellow stroke-[1]" />
                  ))}
                </div>

                {/* Custom review quote */}
                <p className="font-outfit text-sm sm:text-base leading-relaxed md:text-md italic text-cream/90 font-light">
                  "{TESTIMONIALS[current].content}"
                </p>

                {/* Profile row */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#2a211a]">
                  <img
                    src={TESTIMONIALS[current].avatar}
                    alt={TESTIMONIALS[current].name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-brand-yellow/20"
                  />
                  <div>
                    <h4 className="font-outfit text-sm font-bold text-cream">
                      {TESTIMONIALS[current].name}
                    </h4>
                    <span className="block text-[10px] font-mono uppercase text-brand-yellow tracking-wider mt-0.5">
                      {TESTIMONIALS[current].role} • {TESTIMONIALS[current].location}
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Custom Interactive Next/Prev arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 hidden sm:block">
              <button
                id="review-prev"
                onClick={handlePrev}
                className="p-3 rounded-full bg-[#1e1a17] hover:bg-[#2e2621] border border-[#2e2621]/80 text-cream/80 hover:text-brand-yellow transition-all shadow-md focus:outline-none cursor-pointer"
                aria-label="Previous review"
              >
                <ArrowLeft size={16} />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 hidden sm:block">
              <button
                id="review-next"
                onClick={handleNext}
                className="p-3 rounded-full bg-[#1e1a17] hover:bg-[#2e2621] border border-[#2e2621]/80 text-cream/80 hover:text-brand-yellow transition-all shadow-md focus:outline-none cursor-pointer"
                aria-label="Next review"
              >
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

          {/* Dot pagination indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                id={`review-dot-${index}`}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  index === current ? 'w-8 bg-brand-yellow' : 'w-2 bg-[#2a211a]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile swipe/click indicators */}
          <div className="flex sm:hidden justify-center gap-4 mt-4">
            <button
              id="review-prev-mobile"
              onClick={handlePrev}
              className="px-4 py-2 rounded-full bg-[#1e1a17] text-cream text-[10px] uppercase font-outfit font-black tracking-widest border border-[#2a211a] cursor-pointer"
            >
              PREV
            </button>
            <button
              id="review-next-mobile"
              onClick={handleNext}
              className="px-4 py-2 rounded-full bg-[#1e1a17] text-cream text-[10px] uppercase font-outfit font-black tracking-widest border border-[#2a211a] cursor-pointer"
            >
              NEXT
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
