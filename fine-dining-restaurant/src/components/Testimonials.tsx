/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/restaurantData';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const transitionConfig = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

  return (
    <section 
      id="testimonials" 
      className="relative py-24 bg-charcoal text-cream overflow-hidden border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div id="testimonials_header" className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-gold text-[10px] tracking-[0.6em] uppercase font-sans font-semibold mb-4 block">
            The Critical Record
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-cream">
            Guest Chronicles
          </h2>
          <div className="w-12 h-[1px] bg-gold/50 mt-6" />
        </div>

        {/* 3 Column Grid layout */}
        <div id="testimonials_cards_grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              id={`testimonial_card_${t.id}`}
              key={t.id}
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ ...transitionConfig, delay: index * 0.15 }}
              className="group flex flex-col justify-between bg-neutral-950 border border-neutral-900 p-8 hover:border-gold/30 transition-all duration-500 rounded-none relative"
            >
              {/* Giant floating background quote marks */}
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Quote className="w-10 h-10 text-gold" style={{ transform: 'rotate(180deg)' }} />
              </div>

              {/* Main review content */}
              <div className="text-left relative z-10">
                {/* Rating Nodes */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star 
                      key={idx} 
                      className="w-3.5 h-3.5 text-gold fill-gold" 
                    />
                  ))}
                </div>

                {/* Actual review narrative text */}
                <p className="font-serif italic text-[#D1CAC0] text-sm leading-relaxed mb-8 tracking-wide">
                  "{t.comment}"
                </p>
              </div>

              {/* Guest / Critic Attribution panel */}
              <div className="text-left pt-6 border-t border-neutral-900 relative z-10">
                <h4 className="font-sans font-semibold text-xs tracking-widest text-cream uppercase mb-1">
                  {t.name}
                </h4>
                {t.role && (
                  <span className="text-[10px] text-neutral-500 block font-light tracking-widest uppercase mb-1">
                    {t.role}
                  </span>
                )}
                <span className="text-[8.5px] text-gold font-mono tracking-widest block font-light uppercase">
                  {t.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
