import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Calendar, ArrowRight, HeartPulse } from 'lucide-react';
import { DOCTOR_INFO } from '../data';
import { Skeleton } from './SkeletonLoader';

interface HeroProps {
  isLoading: boolean;
  onBookClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isLoading, onBookClick, onServicesClick }) => {
  // Anim standard parameters
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[92vh] md:min-h-screen pt-28 pb-12 flex items-center justify-center overflow-hidden bg-gradient-to-tr from-sky-50/40 via-white to-teal-50/20"
    >
      {/* Background Glowing Orb Shapes */}
      <div className="absolute top-[20%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-medical-blue glow-orb" />
      <div className="absolute bottom-[10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-medical-teal glow-orb" stroke-width="0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Hero Left Content Text Column */}
        <div className="lg:col-span-7 space-y-7 text-left order-2 lg:order-1">
          {isLoading ? (
            <div className="space-y-6">
              <Skeleton className="h-5 w-48 rounded" />
              <Skeleton className="h-14 w-11/12 rounded" />
              <Skeleton className="h-14 w-3/4 rounded" />
              <div className="space-y-2 pt-2">
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-11/12 rounded" />
                <Skeleton className="h-4 w-5/6 rounded" />
              </div>
              <div className="flex gap-4 pt-4">
                <Skeleton className="h-12 w-44 rounded-full" />
                <Skeleton className="h-12 w-44 rounded-full" />
              </div>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Trust Badge Indicator */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-medical-blue/8 border border-medical-blue/12 text-medical-blue"
              >
                <ShieldCheck className="w-4 h-4 text-medical-blue" />
                <span className="text-xs font-semibold tracking-wider uppercase font-sans">
                  Board Certified Cardiologist
                </span>
              </motion.div>

              {/* Heading Title */}
              <motion.div variants={itemVariants} className="space-y-2">
                <h1
                  id="hero-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-medical-slate tracking-tight leading-[1.12]"
                >
                  {DOCTOR_INFO.fullName}
                </h1>
                <p className="text-lg md:text-xl font-sans font-semibold text-medical-blue tracking-tight">
                  {DOCTOR_INFO.title}
                </p>
              </motion.div>

              {/* Tagline Pitch */}
              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-600 font-sans leading-relaxed max-w-2xl font-light"
              >
                {DOCTOR_INFO.tagline} <span className="font-normal text-medical-slate">{DOCTOR_INFO.subTagline}</span>
              </motion.p>

              {/* Quick credential list */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-x-6 gap-y-2 pt-1 pb-2 text-sm text-medical-slate/90"
              >
                <div className="flex items-center gap-2">
                  <HeartPulse className="w-4.5 h-4.5 text-medical-teal" />
                  <span className="font-medium">Direct Patient Care</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-medical-teal" />
                  <span className="font-medium">Cleveland Clinic Fellow</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4.5 h-4.5 text-medical-teal" />
                  <span className="font-medium">Board Certified 2011</span>
                </div>
              </motion.div>

              {/* Responsive CTA Controls */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-3"
              >
                <button
                  id="hero-primary-cta"
                  onClick={onBookClick}
                  className="bg-medical-blue hover:bg-medical-blue-hover text-white px-8 py-3.5 rounded-full text-base font-semibold shadow-md shadow-medical-blue/15 hover:shadow-lg hover:shadow-medical-blue/20 transform hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Visit
                </button>
                <button
                  id="hero-secondary-cta"
                  onClick={onServicesClick}
                  className="border border-slate-200 bg-white/70 hover:bg-white hover:border-slate-300 text-medical-slate px-8 py-3.5 rounded-full text-base font-semibold shadow-sm hover:shadow-md transform hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Clinical Specialties
                  <ArrowRight className="w-4 h-4 text-medical-gray group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Hero Right Picture Column (3:4 ratio as per guidelines) */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          {isLoading ? (
            <div className="w-full max-w-sm aspect-[3/4] rounded-2xl shadow-xl shimmer" />
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm aspect-[3/4]"
            >
              <div className="absolute inset-0 bg-medical-teal rounded-3xl rotate-3 opacity-15 scale-[1.02] blur-sm" />
              <div className="absolute inset-0 bg-medical-blue rounded-3xl -rotate-2 opacity-15 scale-[1.01] blur-sm" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-150">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600"
                  alt="Dr. Evelyn Ross - Senior Consultant Cardiologist"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-7200 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlapping Quick Info Tag */}
              <div className="absolute bottom-5 -left-4 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-xl p-3.5 shadow-xl max-w-[200px] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-medical-teal/15 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-medical-teal" />
                </div>
                <div>
                  <p className="text-xs font-bold text-medical-slate leading-tight">Patient Approved</p>
                  <p className="text-[10px] font-mono text-medical-gray mt-0.5">Ranked Top 1% Boston</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
