/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import ImageWithLoader from './ImageWithLoader';
import { X, Search, ChevronLeft, ChevronRight, Aperture } from 'lucide-react';

export default function Gallery() {
  const [indexLightbox, setIndexLightbox] = useState<number | null>(null);

  const transitionConfig = { duration: 0.6, ease: [0.16, 1, 0.3, 1] };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (indexLightbox !== null) {
      setIndexLightbox((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1));
    }
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (indexLightbox !== null) {
      setIndexLightbox((prev) => (prev !== null && prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section 
      id="gallery" 
      className="relative py-24 md:py-32 bg-neutral-950 text-cream overflow-hidden border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div id="gallery_header" className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-gold text-[10px] tracking-[0.6em] uppercase font-sans font-semibold mb-4 block">
            The Ambiance
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-cream">
            The Visual Poetics
          </h2>
          <div className="w-12 h-[1px] bg-gold/50 mt-6" />
        </div>

        {/* Elegant Masonry-inspired Grid Layout */}
        <div id="gallery_masonry_grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              id={`gallery_img_wrapper_${item.id}`}
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...transitionConfig, delay: index * 0.1 }}
              onClick={() => setIndexLightbox(index)}
              className={`relative overflow-hidden group cursor-pointer border border-neutral-900 bg-neutral-900 rounded-none h-full w-full ${item.colSpan || ''}`}
            >
              {/* Image element wrapped in custom skeleton container */}
              <ImageWithLoader
                src={item.image}
                alt={item.title}
                aspectRatioClassName="h-full w-full"
              />

              {/* Hover Luxury Dark Overlay */}
              <div className="absolute inset-0 bg-neutral-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-10">
                
                {/* Search magnifying cursor help indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-900/85 border border-gold/20 flex items-center justify-center translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Search className="w-3.5 h-3.5 text-gold" />
                </div>

                {/* Staggered text sliding triggers */}
                <div className="text-left">
                  <span className="text-gold text-[8px] uppercase tracking-[0.4em] font-sans font-medium mb-1 block translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    {item.category}
                  </span>
                  
                  <h3 className="font-serif text-lg text-cream font-medium tracking-tight translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.title}
                  </h3>
                  
                  <div className="w-6 h-[1.5px] bg-gold mt-2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-150" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Cinematic Fullscreen Lightbox Overlay */}
      <AnimatePresence>
        {indexLightbox !== null && (
          <motion.div
            id="gallery_lightbox_overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/98 p-4 sm:p-8 select-none"
            onClick={() => setIndexLightbox(null)}
          >
            {/* Close Button layout */}
            <button
              id="lightbox_close_btn"
              onClick={() => setIndexLightbox(null)}
              className="absolute top-6 right-6 text-cream-muted hover:text-gold transition-colors duration-300 z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Carousel trigger */}
            <button
              id="lightbox_prev_cell_btn"
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 w-12 h-12 rounded-full border border-neutral-800 hover:border-gold text-cream hover:text-gold flex items-center justify-center bg-neutral-950/80 backdrop-blur-sm z-10 transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Lightbox Inner Image Frame */}
            <motion.div
              id="lightbox_content"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] aspect-video border border-neutral-900 bg-neutral-900 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              {/* Dynamic slider list of Images */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={indexLightbox}
                  src={GALLERY_ITEMS[indexLightbox].image}
                  alt={GALLERY_ITEMS[indexLightbox].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Technical tag watermark inside */}
              <div id="lightbox_info_banner" className="absolute bottom-0 inset-x-0 bg-neutral-950/90 border-t border-neutral-900 p-4 md:px-6 flex items-center justify-between text-left">
                <div className="flex gap-3 items-center">
                  <Aperture className="w-4 h-4 text-gold shrink-0" />
                  <div>
                    <span className="text-[8.5px] uppercase tracking-widest text-gold block font-semibold">{GALLERY_ITEMS[indexLightbox].category}</span>
                    <h4 className="font-serif text-sm sm:text-base text-cream">{GALLERY_ITEMS[indexLightbox].title}</h4>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-neutral-500 tracking-wider">
                  {indexLightbox + 1} / {GALLERY_ITEMS.length}
                </span>
              </div>
            </motion.div>

            {/* Right Carousel trigger */}
            <button
              id="lightbox_next_cell_btn"
              onClick={handleNext}
              className="absolute right-4 sm:right-8 w-12 h-12 rounded-full border border-neutral-800 hover:border-gold text-cream hover:text-gold flex items-center justify-center bg-neutral-950/80 backdrop-blur-sm z-10 transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
