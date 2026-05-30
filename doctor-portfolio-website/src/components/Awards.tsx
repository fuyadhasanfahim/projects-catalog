import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, FileCheck2, Medal, Check } from 'lucide-react';
import { AWARDS_ITEMS } from '../data';

interface AwardsProps {
  isLoading: boolean;
}

export const Awards: React.FC<AwardsProps> = ({ isLoading }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'award' | 'certification'>('all');

  const filteredItems = AWARDS_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="awards" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-medical-teal glow-orb" strokeWidth={0} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Core Layout split: Left Header/Controls, Right Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Header Info & Filters */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-wider text-medical-blue uppercase block">
                Accreditations
              </span>
              <h2 className="text-3xl font-serif font-semibold text-medical-slate tracking-tight">
                Recognitions &amp; Certifications
              </h2>
              <p className="text-sm text-slate-500 font-sans leading-relaxed font-light">
                Verifiable standards of practice and external professional validations received from state, national, and international cardiorespiratory boards.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2 pt-2">
              <button
                id="filter-btn-all"
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-left transition-all flex items-center justify-between cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-white text-medical-blue border-l-4 border-medical-blue shadow-xs font-bold'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-medical-slate'
                }`}
              >
                <span>Show All Standards</span>
                {activeFilter === 'all' && <Check className="w-4 h-4 text-medical-blue" />}
              </button>
              <button
                id="filter-btn-certifications"
                onClick={() => setActiveFilter('certification')}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-left transition-all flex items-center justify-between cursor-pointer ${
                  activeFilter === 'certification'
                    ? 'bg-white text-medical-blue border-l-4 border-medical-blue shadow-xs font-bold'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-medical-slate'
                }`}
              >
                <span>Board Credentials</span>
                {activeFilter === 'certification' && <Check className="w-4 h-4 text-medical-blue" />}
              </button>
              <button
                id="filter-btn-awards"
                onClick={() => setActiveFilter('award')}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-left transition-all flex items-center justify-between cursor-pointer ${
                  activeFilter === 'award'
                    ? 'bg-white text-medical-blue border-l-4 border-medical-blue shadow-xs font-bold'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-medical-slate'
                }`}
              >
                <span>Academic Awards</span>
                {activeFilter === 'award' && <Check className="w-4 h-4 text-medical-blue" />}
              </button>
            </div>
          </div>

          {/* Column 2: Badge Cards Grid */}
          <div className="lg:col-span-8">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {filteredItems.map((item) => {
                const isCert = item.category === 'certification';
                
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="p-6 bg-white border border-slate-100 rounded-2xl shadow-[0_2px_10px_rgba(30,41,59,0.015)] hover:shadow-md hover:border-slate-200 transition-all group flex gap-4 items-start relative overflow-hidden"
                  >
                    {/* Badge side glow */}
                    <div className={`absolute top-0 bottom-0 left-0 w-1 ${
                      isCert ? 'bg-medical-blue' : 'bg-medical-teal'
                    }`} />

                    {/* Icon frame */}
                    <div className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center ${
                      isCert 
                        ? 'bg-medical-blue/6 text-medical-blue' 
                        : 'bg-medical-teal/6 text-medical-teal'
                    } group-hover:scale-105 transition-transform duration-300`}>
                      {isCert ? (
                        <FileCheck2 className="w-6 h-6 stroke-2" />
                      ) : (
                        <Award className="w-6 h-6 stroke-2" />
                      )}
                    </div>

                    {/* Text Specifications */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono tracking-wider font-semibold text-slate-400">
                          {item.year}
                        </span>
                        <span className={`text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded ${
                          isCert 
                            ? 'bg-medical-blue/6 text-medical-blue' 
                            : 'bg-medical-teal/8 text-medical-teal'
                        }`}>
                          {item.category}
                        </span>
                      </div>
                      <h4 className="text-sm font-serif font-bold text-medical-slate leading-snug group-hover:text-medical-blue transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-medical-gray font-sans font-light">
                        {item.issuer}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
