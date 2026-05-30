/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Elegant incremental count simulating file asset verification
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Small pause for peak visual rhythm
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  const letterContainerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Custom refined cubic bezier
      }
    }
  };

  const brandLetters = ["L", "’", "É", "T", "O", "I", "L", "E"];

  return (
    <motion.div
      id="preloader_container"
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        opacity: 0,
        transition: { 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1] // Premium curtain pulling effect 
        } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-charcoal text-cream select-none overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing visual abstract circle */}
        <div id="loader_radial_glow" className="absolute -inset-24 bg-radial from-gold/5 via-transparent to-transparent pointer-events-none" />
        
        {/* Spinning luxury frame */}
        <motion.div
          id="loader_circle_ring"
          initial={{ rotate: 0, scale: 0.9 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="relative w-40 h-40 border border-neutral-900 border-t-gold/40 border-r-gold/20 rounded-full flex items-center justify-center mb-8"
        >
          {/* Centered star icon */}
          <div className="text-gold opacity-80 flex items-center justify-center">
            <svg id="star_svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="animate-pulse">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
            </svg>
          </div>
        </motion.div>

        {/* Elegant typography */}
        <motion.div
          id="loader_brand_title"
          variants={letterContainerVariants}
          initial="initial"
          animate="animate"
          className="flex gap-2 text-2xl md:text-3xl font-serif tracking-[0.4em] text-cream"
        >
          {brandLetters.map((char, index) => (
            <motion.span 
              key={index} 
              variants={letterVariants}
              className={char === "’" ? "-mx-2 text-gold font-light" : "font-light"}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Slogan metadata */}
        <motion.span
          id="loader_slogan"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-[9px] uppercase tracking-[0.6em] text-cream font-sans font-light mt-4"
        >
          Sartorial Gastronomy
        </motion.span>

        {/* Progress percent counter */}
        <div id="loader_percentage_box" className="mt-12 overflow-hidden h-6 flex items-center">
          <motion.span
            id="loader_pct_text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="font-mono text-[11px] tracking-widest text-[#D1CAC0]"
          >
            {percent}% PREPARING
          </motion.span>
        </div>

        {/* Fine background loading line */}
        <div id="loader_progress_bar" className="w-32 h-[1px] bg-neutral-900 mt-2 relative overflow-hidden">
          <motion.div 
            id="loader_progress_line"
            className="absolute top-0 left-0 h-full bg-gold"
            style={{ width: `${percent}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
