/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Flame, ShieldAlert, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onInstantOrder: () => void;
}

export default function Hero({ onExploreMenu, onInstantOrder }: HeroProps) {
  // Simple Floating topping coords/effects using Framer Motion
  const floatingElements = [
    { name: '🌶️', top: '15%', left: '10%', delay: 0.2, duration: 4 },
    { name: '🍃', top: '75%', left: '15%', delay: 0.8, duration: 5 },
    { name: '🧄', top: '25%', right: '12%', delay: 1.2, duration: 6 },
    { name: '🔥', top: '70%', right: '14%', delay: 0.5, duration: 4.5 },
    { name: '🍅', top: '48%', left: '8%', delay: 1.5, duration: 5.5 },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-dark-bg text-cream flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting - soft warm glows */}
      <div className="absolute top-[20%] left-1/3 w-[30vw] h-[30vw] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-1/4 w-[35vw] h-[35vw] rounded-full bg-brand-yellow/5 blur-[140px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      {/* Floating decorative elements */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block text-2xl filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] select-none pointer-events-none z-10"
          style={{
            top: el.top,
            left: el.left,
            right: el.right,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut"
          }}
        >
          {el.name}
        </motion.div>
      ))}

      {/* Main asymmetric grid layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Column content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e1410] border border-brand-red/20 text-brand-red"
            >
              <Flame size={12} className="animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.25em] font-extrabold uppercase">
                Dhaka's Finest Midnight Slice
              </span>
            </motion.div>

            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                className="font-display text-5xl sm:text-7xl xl:text-8xl uppercase leading-[0.9] tracking-tight"
              >
                CRAFTED <br />
                <span className="text-brand-red text-glow-red">AFTER DARK.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-sm sm:text-base text-cream/70 max-w-xl font-outfit font-light leading-relaxed pt-2"
              >
                We ferment our custom sourdough base for 48 hours for extreme airy lightness. Hand-stretched, fired with wild fruitwood embers at 450°C, and rushed direct from our brick oven to your Dhaka doorstep until 4 AM.
              </motion.p>
            </div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 py-4 border-y border-[#25201B] w-full max-w-lg mt-2"
            >
              <div>
                <span className="block font-display text-2xl sm:text-3xl text-brand-yellow text-glow-yellow">48H</span>
                <span className="text-[10px] font-mono tracking-widest text-cream/50 uppercase">COLD FERMENT</span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl text-brand-red text-glow-red">450°C</span>
                <span className="text-[10px] font-mono tracking-widest text-cream/50 uppercase">WOOD FIRED COOK</span>
              </div>
              <div>
                <span className="block font-display text-2xl sm:text-3xl text-cream">30M</span>
                <span className="text-[10px] font-mono tracking-widest text-cream/50 uppercase">MIDNIGHT COURIER</span>
              </div>
            </motion.div>

            {/* CTA action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
            >
              <button
                id="hero-explore-menu-btn"
                onClick={onExploreMenu}
                className="px-8 py-4 sm:py-4.5 rounded-full bg-brand-red text-dark-bg font-outfit text-xs font-black uppercase tracking-widest cursor-pointer shadow-glow-red hover:bg-[#ff3524] transition-all focus:outline-none"
              >
                EXPLORE MENU (৳)
              </button>
              <button
                id="hero-instant-order-btn"
                onClick={onInstantOrder}
                className="px-8 py-4 sm:py-4.5 rounded-full bg-[#1a1410] hover:bg-[#251e18] border border-brand-yellow/20 text-brand-yellow font-outfit text-xs font-black uppercase tracking-widest cursor-pointer transition-all focus:outline-none"
              >
                INSTANT CHECKOUT
              </button>
            </motion.div>

          </div>

          {/* Right Block: Hero image with rich pizza radial ambient shadows */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Spinning background glow */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,77,61,0.25)_0%,transparent_70%)] pointer-events-none filter blur-xl"
            />

            {/* Glowing ring ring */}
            <motion.div 
              style={{ width: '105%', height: '105%' }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute rounded-full border border-brand-red/10 animate-pulse pointer-events-none"
            />
            
            {/* Pizza Main Focal Asset */}
            <motion.div
              initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-72 h-72 sm:w-96 sm:h-96 xl:w-[410px] xl:h-[410px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] focus:outline-none"
            >
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
                alt="Wood fired premium sourdough pizza"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full border-4 border-dark-card/60 grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              />

              {/* Glowing overlay embers elements */}
              <div className="absolute inset-0 bg-radial-gradient(circle, transparent 40%, #121212 98%) mix-blend-multiply rounded-full pointer-events-none" />

              <div className="absolute top-1/4 right-1/4 p-2 bg-[#ff4d3d]/90 backdrop-blur-md text-dark-bg text-[10px] uppercase font-mono font-extrabold tracking-widest rounded-lg ring-4 ring-dark-bg/60 shadow-glow-red animate-pulse">
                ৳ 890 ONLY
              </div>

              {/* Hover highlight circle */}
              <div className="absolute inset-0 rounded-full bg-brand-red/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Down indicating scrolling cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 cursor-pointer text-cream/40 hover:text-cream transition-colors">
        <span className="text-[9px] font-mono uppercase tracking-[0.2em]">Crave Below</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="p-1 rounded-full border border-cream/20 bg-dark-card/30"
        >
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
}
