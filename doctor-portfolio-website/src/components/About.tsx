import React from 'react';
import { motion } from 'motion/react';
import { Quote, BookOpen, Compass, HeartHandshake } from 'lucide-react';
import { DOCTOR_INFO } from '../data';
import { Skeleton } from './SkeletonLoader';

interface AboutProps {
  isLoading: boolean;
}

export const About: React.FC<AboutProps> = ({ isLoading }) => {
  return (
    <section id="about" className="py-20 bg-[#FBFCFD] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-[40%] right-[-15%] w-[40vw] h-[40vw] rounded-full bg-medical-teal glow-orb" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Image / Vision visual */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="w-full aspect-[4/5] rounded-3xl" />
                <Skeleton className="h-6 w-3/4 rounded" />
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-medical-blue rounded-[2.5rem] rotate-2 opacity-10 scale-[1.01] blur-xs" />
                
                {/* Clean white frame around a high quality clinical image */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-50">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
                    alt="Dr. Ross delivering clinical consultation"
                    className="w-full h-full object-cover aspect-[4/5] hover:scale-103 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-slate/40 via-transparent to-transparent" />
                </div>

                {/* Overlapping Trust Stat Panel */}
                <div className="absolute -bottom-6 right-4 sm:-right-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-xl max-w-[240px] space-y-2">
                  <HeartHandshake className="w-6 h-6 text-medical-teal" />
                  <p className="font-serif text-sm italic text-medical-slate">
                    "Every heart has a unique story; my responsibility is to understand it and provide a clear solution."
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Column 2: Biography & Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            {isLoading ? (
              <div className="space-y-6">
                <Skeleton className="h-8 w-1/3" />
                <Skeleton className="h-4 w-1/4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-11/12" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
                <Skeleton className="h-32 w-full rounded-2xl" />
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Header info */}
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-wider text-medical-blue uppercase block">
                    Meet the Cardiologist
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-medical-slate tracking-tight">
                    Dedicated to Exceptional Cardiovascular Health
                  </h2>
                </div>

                {/* Biographic Text */}
                <div className="space-y-4 text-slate-600 font-sans leading-relaxed text-base font-light">
                  <p>{DOCTOR_INFO.bioParagraph1}</p>
                  <p>{DOCTOR_INFO.bioParagraph2}</p>
                </div>

                {/* Styled Philosophy of Care Quote Callout Box */}
                <div className="p-6 bg-slate-50 border-l-4 border-medical-blue rounded-r-2xl shadow-xs relative">
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-medical-blue/8 pointer-events-none" />
                  <h4 className="text-sm font-semibold tracking-wide text-medical-blue uppercase flex items-center gap-2 mb-2">
                    <Compass className="w-4 h-4 text-medical-blue" strokeWidth={2.5} />
                    Philosophy of Care
                  </h4>
                  <p className="text-sm md:text-base text-medical-slate font-sans leading-relaxed italic">
                    {DOCTOR_INFO.philosophy}
                  </p>
                </div>

                {/* Value Checkpoints Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-medical-blue/8 flex items-center justify-center text-medical-blue shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-medical-slate">Evidence-Based Treatment</h4>
                      <p className="text-xs text-medical-gray mt-0.5 font-light">Guidelines derived from clinical cardiology studies.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-medical-teal/10 flex items-center justify-center text-medical-teal shrink-0">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-medical-slate">Patient-Centered Focus</h4>
                      <p className="text-xs text-medical-gray mt-0.5 font-light">Custom therapeutic plans centering your wellness goals.</p>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
