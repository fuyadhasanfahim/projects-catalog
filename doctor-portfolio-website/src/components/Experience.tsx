import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, CheckCircle2, Hospital } from 'lucide-react';
import { TIMELINE_ITEMS } from '../data';
import { Skeleton } from './SkeletonLoader';

interface ExperienceProps {
  isLoading: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isLoading }) => {
  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'position':
        return <Hospital className="w-5 h-5 text-white" />;
      case 'fellowship':
        return <Award className="w-5 h-5 text-white" />;
      case 'education':
        return <GraduationCap className="w-5 h-5 text-white" />;
      default:
        return <Briefcase className="w-5 h-5 text-white" />;
    }
  };

  const getTimelineIconBg = (type: string) => {
    switch (type) {
      case 'position':
        return 'bg-medical-blue shadow-md shadow-medical-blue/20';
      case 'fellowship':
        return 'bg-medical-teal shadow-md shadow-medical-teal/25';
      case 'education':
        return 'bg-blue-900 shadow-md shadow-blue-950/20';
      default:
        return 'bg-slate-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'position':
        return 'Clinical Appointment';
      case 'fellowship':
        return 'Fellowship Training';
      case 'education':
        return 'Medical Education';
      default:
        return 'Employment';
    }
  };

  return (
    <section id="experience" className="py-20 bg-[#1E293B] text-white relative overflow-hidden">
      {/* Subtle top decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-20">
          <span className="text-xs font-bold tracking-wider text-medical-teal uppercase block">
            Credentials &amp; Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white tracking-tight">
            Academic Foundation &amp; Clinical Excellence
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans max-w-xl mx-auto font-light leading-relaxed">
            Detailed chronological record of medical schooling, prestigious residency fellowships, and leadership tenures.
          </p>
        </div>

        {/* Dynamic Vertical Timeline Container */}
        {isLoading ? (
          <div className="space-y-12 max-w-4xl mx-auto">
            <Skeleton className="h-16 w-full rounded-2xl" />
            <Skeleton className="h-16 w-full rounded-2xl" />
            <Skeleton className="h-16 w-full rounded-2xl" />
          </div>
        ) : (
          <div className="relative max-w-5xl mx-auto">
            
            {/* Core Center Strand Line (Hidden on tiny screens, aligned left on mobile, centered on desktop) */}
            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-700 -translate-x-1/2" />

            <div className="space-y-12">
              {TIMELINE_ITEMS.map((item, idx) => {
                const isEven = idx % 2 === 0;
                
                return (
                  <motion.div
                    key={item.id}
                    id={item.id}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, delay: idx * 0.1, ease: 'easeOut' }}
                    className={`relative flex flex-col md:flex-row items-stretch ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* 1. Timeline Center node (Anchor Point) */}
                    <div className="absolute left-8 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getTimelineIconBg(item.type)} border-4 border-[#1E293B] transition-transform scale-100 hover:scale-110 duration-200`}>
                        {getTimelineIcon(item.type)}
                      </div>
                    </div>

                    {/* 2. Timeline Card Container (Alternates left or right) */}
                    <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12 flex flex-col items-stretch">
                      
                      {/* Interactive Card */}
                      <div className="p-6 sm:p-8 bg-[#243049] border border-slate-800 rounded-3xl hover:border-slate-750 shadow-md transition-all duration-300 relative group flex-1">
                        
                        {/* Little connector triangle for visual refinement (Visible on desktop) */}
                        <div className={`hidden md:block absolute top-[28px] w-3 h-3 bg-[#243049] border-t border-l border-slate-800 rotate-45 ${
                          isEven ? 'right-[-7px] border-t border-r border-slate-800 rotate-[45deg]' : 'left-[-7px] rotate-[-135deg]'
                        }`} />

                        {/* Event Metadata (Year / Role type) */}
                        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 mb-4 border-b border-slate-800">
                          <span className="text-xs font-bold font-mono tracking-wider text-medical-teal px-3 py-1 bg-medical-teal/10 border border-medical-teal/15 rounded-full">
                            {item.year}
                          </span>
                          <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-slate-400">
                            {getTypeLabel(item.type)}
                          </span>
                        </div>

                        {/* Title Specifications */}
                        <div className="space-y-1.5 mb-3.5">
                          <h3 className="text-lg font-serif font-bold text-white leading-snug group-hover:text-medical-teal transition-colors">
                            {item.role}
                          </h3>
                          <p className="text-sm font-medium font-sans text-slate-300">
                            {item.organization}
                          </p>
                        </div>

                        {/* Descriptive Copy */}
                        <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed font-light">
                          {item.description}
                        </p>

                        {/* Optional sub bullets for heavy items */}
                        {item.details && item.details.length > 0 && (
                          <div className="mt-4 pt-3 border-t border-slate-800 space-y-2">
                            <h4 className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                              Key Highlights:
                            </h4>
                            <ul className="space-y-1.5">
                              {item.details.map((bullet, bulletIdx) => (
                                <li key={bulletIdx} className="flex items-start gap-2 text-xs text-slate-400 font-sans">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-medical-teal shrink-0 mt-0.5" />
                                  <span className="font-light">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* 3. Empty padding side to visually balance coordinates on desktop */}
                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
