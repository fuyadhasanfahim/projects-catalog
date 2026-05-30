/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Pizza } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Give animation time to complete before triggering completion callback
      setTimeout(onComplete, 600);
    }, 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="global-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-bg text-cream overflow-hidden"
        >
          {/* Subtle warm amber radial glow behind */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,182,39,0.08)_0%,transparent_60%)] pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* Pulsing glow ring around the pizza */}
            <motion.div
              initial={{ opacity: 0.3, scale: 0.8 }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [0.95, 1.08, 0.95],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-36 h-36 rounded-full bg-brand-red/20 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            {/* Glowing spinning premium neon-like Pizza */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              className="relative z-10 flex items-center justify-center text-brand-red drop-shadow-[0_0_20px_rgba(255,77,61,0.7)]"
            >
              <Pizza size={96} strokeWidth={1.2} className="text-brand-red" />
              {/* Little custom details to make it feel like a real spinning stylized pizza */}
              <motion.div 
                className="absolute w-2 h-2 rounded-full bg-brand-yellow"
                style={{ top: '24px', left: '42px' }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
              />
              <motion.div 
                className="absolute w-2.5 h-2.5 rounded-full bg-cream"
                style={{ top: '64px', left: '32px' }}
                animate={{ scale: [1.3, 1, 1.3] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.5 }}
              />
              <motion.div 
                className="absolute w-1.5 h-1.5 rounded-full bg-brand-yellow"
                style={{ top: '54px', right: '30px' }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 1.2, delay: 0.8 }}
              />
            </motion.div>

            {/* Pulsing Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-wider text-cream">
                PIZZA <span className="text-brand-red text-glow-red">TIMES</span>
              </h1>
              <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="mt-2 text-xs font-outfit uppercase tracking-[0.3em] text-brand-yellow/80"
              >
                Dhaka's Late-Night Sourdough
              </motion.p>
            </motion.div>
          </div>

          {/* Quick aesthetic footer element for loader */}
          <div className="absolute bottom-10 left-10 right-10 flex justify-between text-[10px] uppercase font-mono tracking-widest text-[#4A4035]">
            <span>Est. 2026</span>
            <span>450°C Wood-Fired Sourdough</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
