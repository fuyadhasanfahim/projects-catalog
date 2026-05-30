/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CRAFT_STEPS } from '../data/pizzaData';
import { ArrowRight, Flame, Hourglass, Award } from 'lucide-react';

export default function CraftSection() {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (id: string) => {
    switch (id) {
      case '01':
        return <Hourglass size={18} className="text-brand-yellow" />;
      case '02':
        return <Award size={18} className="text-brand-red animate-pulse" />;
      case '03':
        return <Flame size={18} className="text-brand-red text-glow-red" />;
      default:
        return null;
    }
  };

  return (
    <section id="craft" className="py-24 bg-[#0A0705] text-cream relative overflow-hidden">
      {/* Absolute giant background radial ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-glow opacity-55 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono tracking-[0.3em] uppercase text-brand-red"
          >
            Behind the Glow
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-6xl uppercase tracking-tight"
          >
            OUR WOOD-FIRED <span className="text-brand-yellow text-glow-yellow">CRAFT</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-16 h-[2px] bg-brand-yellow mx-auto"
          />
          <p className="text-xs sm:text-sm text-cream/60 leading-relaxed font-outfit">
            A pizza is only as great as the rules it respects. From flour selection to thermal oven kinetics, here is our three-step oath.
          </p>
        </div>

        {/* Step tab controls with active animated indicator slider */}
        <div className="max-w-4xl mx-auto bg-dark-bg/60 border border-[#2e2621]/30 rounded-2xl p-2.5 flex flex-col md:flex-row gap-2.5 mb-16 relative z-20">
          {CRAFT_STEPS.map((step, index) => {
            const isActive = index === activeStep;
            return (
              <button
                key={step.id}
                id={`craft-step-tab-${step.id}`}
                onClick={() => setActiveStep(index)}
                className={`flex-1 flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all border text-left focus:outline-none ${
                  isActive
                    ? 'bg-[#1a130f] border-brand-red/30 text-cream shadow-glow-red font-bold'
                    : 'bg-transparent border-transparent text-cream/50 hover:bg-white/[0.02] hover:text-cream/90'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-xs ${isActive ? 'text-brand-red' : 'text-cream/30'}`}>
                    {step.id}
                  </span>
                  <div>
                    <span className="block font-outfit text-xs font-semibold uppercase tracking-wider">
                      {step.title}
                    </span>
                    <span className="block text-[10px] font-mono text-[#8e847c] font-light mt-0.5">
                      {step.banglish}
                    </span>
                  </div>
                </div>
                <div className="p-1.5 rounded-lg bg-[#2e231c]/40">
                  {getStepIcon(step.id)}
                </div>
              </button>
            );
          })}
        </div>

        {/* Display Active Step contents with beautiful sliding animation details */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              
              {/* Left Column Text details */}
              <div className="lg:col-span-6 space-y-6 flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="font-display text-4xl sm:text-5xl text-brand-red text-glow-red">
                    {CRAFT_STEPS[activeStep].id}
                  </span>
                  <div className="w-10 h-[1.5px] bg-brand-yellow/30" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-brand-yellow bg-brand-yellow/10 px-2.5 py-1 rounded border border-brand-yellow/10">
                    Active Master Stage
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-2xl sm:text-3.5xl uppercase leading-none tracking-wide text-white">
                    {CRAFT_STEPS[activeStep].title}
                  </h3>
                  <p className="font-mono text-xs text-brand-yellow/85 uppercase tracking-wide">
                    {CRAFT_STEPS[activeStep].banglish}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-cream/75 leading-relaxed font-outfit">
                  {CRAFT_STEPS[activeStep].description}
                </p>

                {/* Craft highlight info parameters */}
                <div className="pt-4 border-t border-[#2e2621]/40 flex gap-6">
                  {activeStep === 0 && (
                    <>
                      <div>
                        <span className="block text-[11px] font-mono text-[#8e847c] uppercase">Hydration Rate</span>
                        <span className="font-mono text-base font-bold text-cream">72% Wet Poolish</span>
                      </div>
                      <div>
                        <span className="block text-[11px] font-mono text-[#8e847c] uppercase">Flour Grade</span>
                        <span className="font-mono text-base font-bold text-cream">Italian Type 00</span>
                      </div>
                    </>
                  )}
                  {activeStep === 1 && (
                    <>
                      <div>
                        <span className="block text-[11px] font-mono text-[#8e847c] uppercase">Tomato Origin</span>
                        <span className="font-mono text-base font-bold text-cream">San Marzano D.O.C</span>
                      </div>
                      <div>
                        <span className="block text-[11px] font-mono text-[#8e847c] uppercase">Cheese Source</span>
                        <span className="font-mono text-base font-bold text-cream">Local Buffalo Milk</span>
                      </div>
                    </>
                  )}
                  {activeStep === 2 && (
                    <>
                      <div>
                        <span className="block text-[11px] font-mono text-[#8e847c] uppercase">Thermal Point</span>
                        <span className="font-mono text-base font-bold text-brand-red">450°C Radiance</span>
                      </div>
                      <div>
                        <span className="block text-[11px] font-mono text-[#8e847c] uppercase">Bake Period</span>
                        <span className="font-mono text-base font-bold text-cream">Exactly 90 Seconds</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    id="craft-next-step-btn"
                    onClick={() => setActiveStep((prev) => (prev + 1) % CRAFT_STEPS.length)}
                    className="inline-flex items-center gap-2 group text-xs font-outfit uppercase tracking-widest text-[#F5EFE6] hover:text-brand-yellow transition-colors cursor-pointer"
                  >
                    <span>Inspect next master rule</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column visual illustration photograph */}
              <div className="lg:col-span-6 relative flex justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,182,39,0.1)_0%,transparent_60%)]" />
                <div className="w-full h-64 sm:h-80 md:h-[340px] rounded-2xl overflow-hidden border border-[#2e2621]/80 shadow-[0_15px_45px_rgba(0,0,0,0.7)] group">
                  <img
                    src={CRAFT_STEPS[activeStep].image}
                    alt={CRAFT_STEPS[activeStep].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Fire glowing rim overlay on thermal step */}
                  {activeStep === 2 && (
                    <div className="absolute inset-0 border border-brand-red/30 animate-pulse rounded-2xl pointer-events-none" />
                  )}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
