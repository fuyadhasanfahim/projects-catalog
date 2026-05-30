/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const transitionConfig = { duration: 1.2, ease: [0.25, 1, 0.5, 1] };

  const handleCTA = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden pt-16"
    >
      {/* Background Image Layer with custom dark and warm overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80" 
          alt="L'Étoile Fine Dining" 
          className="w-full h-full object-cover opacity-35 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Soft, beautiful dark radial grand-gradient & gold lighting */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#0A0A0A]/80 to-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-[#0A0A0A]/60" />
        {/* Ambient Warm Tint */}
        <div className="absolute inset-0 bg-[#C8553D]/[0.02] mix-blend-color-burn" />
      </div>

      {/* Floating Light Accents */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px] pointer-events-none"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Small Elegant Supertitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitionConfig, delay: 0.4 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-[1px] w-8 bg-gold/40" />
          <span className="text-[10px] md:text-xs tracking-[0.5em] text-gold font-sans font-medium uppercase">
            A Symphony of Flavour and Light
          </span>
          <div className="h-[1px] w-8 bg-gold/40" />
        </motion.div>

        {/* Large Cinematic Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-cream tracking-tight leading-[1.05] mb-8 font-light max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionConfig, delay: 0.6 }}
            className="block italic font-light text-cream/90"
          >
            Sartorial Gastronomy
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionConfig, delay: 0.8 }}
            className="block mt-2 font-medium bg-clip-text text-transparent bg-gradient-to-r from-cream via-[#FFFFFF] to-cream-muted"
          >
            Meets Modern Luxury
          </motion.span>
        </h1>

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitionConfig, delay: 1 }}
          className="text-cream-muted font-sans font-light text-sm md:text-lg max-w-xl mb-12 tracking-wide leading-relaxed"
        >
          Welcome to Paris’s most discrete dining parlor. We craft architectural culinary narratives, sourcing organic treasures to build plates of pure theater.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitionConfig, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full max-w-md"
        >
          {/* Main CTA */}
          <button
            id="hero_reserve_btn"
            onClick={() => handleCTA('reserve')}
            className="w-full sm:w-auto relative overflow-hidden group bg-gold hover:bg-gold-hover text-charcoal font-sans font-semibold text-[11px] uppercase tracking-[0.25em] px-8 py-4.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,160,23,0.3)] select-none cursor-pointer"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Reserve a Table <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Secondary CTA */}
          <button
            id="hero_menu_btn"
            onClick={() => handleCTA('menu')}
            className="w-full sm:w-auto overflow-hidden group bg-transparent hover:bg-cream-muted/[0.04] border border-cream/20 hover:border-gold/50 text-cream text-[11px] uppercase tracking-[0.25em] font-sans font-medium px-8 py-4.5 transition-all duration-300 select-none cursor-pointer"
          >
            Explore Menu
          </button>
        </motion.div>
      </div>

      {/* Floating Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-cream-muted text-center font-light">
          Scroll to explore
        </span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-4 h-4 text-gold" />
        </motion.div>
      </motion.div>
    </div>
  );
}
