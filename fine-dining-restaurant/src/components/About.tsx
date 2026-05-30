/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CHEF_INFO, RESTAURANT_INFO } from '../data/restaurantData';
import ImageWithLoader from './ImageWithLoader';
import { ShieldCheck, Award, Heart, Flame } from 'lucide-react';

export default function About() {
  const transitionConfig = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

  const pillars = [
    {
      icon: <Award className="w-5 h-5 text-gold" />,
      title: "French Heritage",
      desc: "Honoring classical Parisian architecture, stocks, and reductions while incorporating contemporary textures."
    },
    {
      icon: <Flame className="w-5 h-5 text-gold" />,
      title: "Sartorial Plating",
      desc: "Every plate is a canvas. We design dishes with structured verticality, micro-greens, and delicate temperature contrasts."
    },
    {
      icon: <Heart className="w-5 h-5 text-gold" />,
      title: "Local Extraction",
      desc: "Partnering strictly with small biodynamic farms inside Île-de-France to source unparalleled pristine crop specimens."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gold" />,
      title: "Discreteness & Care",
      desc: "A boutique dining room of only twelve tables. Attentive yet unintrusive service, designed for peace and presence."
    }
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 md:py-32 bg-charcoal overflow-hidden border-t border-neutral-900"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-950/40 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Fine Header section */}
        <div id="about_header" className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-gold text-[10px] tracking-[0.6em] uppercase font-sans font-semibold mb-4 block">
            The Golden Ratio
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-cream">
            Our Heritage & Modern Vision
          </h2>
          <div className="w-12 h-[1px] bg-gold/50 mt-6" />
        </div>

        {/* Split Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center mb-24 md:mb-32">
          
          {/* Left Side: Chef Bio & Craft text */}
          <motion.div 
            id="about_story_text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transitionConfig}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-cream italic mb-6 font-light">
              "We dress tastes to match the grandeur of your thoughts."
            </h3>
            
            <p className="text-[#D1CAC0] font-sans font-light text-sm md:text-base leading-relaxed mb-6">
              Founded in {RESTAURANT_INFO.founded} as a quiet haven for culinary purists, {RESTAURANT_INFO.name} merges classical rigor with the avant-garde. We reject the chaotic pacing of modern dining, opting instead for a deliberate, multi-sensory progression that celebrates individual ingredients.
            </p>

            <p className="text-[#D1CAC0] font-sans font-light text-sm md:text-base leading-relaxed mb-8">
              {CHEF_INFO.bio}
            </p>

            {/* Quote Plate in highlight glow box */}
            <div className="relative border-l-2 border-gold/40 pl-6 py-2 my-6 bg-neutral-900/40 rounded-r-lg">
              <span className="absolute -top-4 -left-2 text-6xl text-gold/10 font-serif pointer-events-none">“</span>
              <p className="text-gold text-xs md:text-sm font-serif italic tracking-wide font-light leading-relaxed">
                {CHEF_INFO.quote}
              </p>
              <div className="mt-4 flex flex-col">
                <span className="text-[11px] font-sans font-semibold text-cream uppercase tracking-widest">{CHEF_INFO.name}</span>
                <span className="text-[9px] font-sans text-neutral-500 uppercase tracking-widest">{CHEF_INFO.role}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Chef image wrapped in our robust ImageWithLoader */}
          <motion.div 
            id="about_chef_image_col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transitionConfig}
            className="lg:col-span-6 relative aspect-[4/3] rounded-sm overflow-hidden border border-neutral-900 p-2 bg-neutral-900/10 hover:border-gold/30 transition-colors duration-500"
          >
            {/* Fine styling borders inside */}
            <div className="absolute inset-4 border border-gold/15 pointer-events-none z-10" />
            <ImageWithLoader
              src={CHEF_INFO.image}
              alt={CHEF_INFO.name}
              aspectRatioClassName="h-full w-full"
            />
          </motion.div>
        </div>

        {/* 4 Pillars of Gastronomy Section */}
        <div id="pillars_grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {pillars.map((p, index) => (
            <motion.div
              id={`pillar_item_${index}`}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...transitionConfig, delay: index * 0.15 }}
              className="group flex flex-col p-6 bg-neutral-950 border border-neutral-900 hover:border-gold/30 transition-all duration-500 rounded-sm relative hover:shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
            >
              {/* Pillar top highlights */}
              <div className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center bg-neutral-900/60 mb-6 group-hover:bg-gold/10 group-hover:border-gold transition-all duration-500">
                {p.icon}
              </div>
              
              <h4 className="text-xl font-serif font-semibold text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                {p.title}
              </h4>
              
              <p className="text-xs text-[#D1CAC0] font-sans font-light leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
