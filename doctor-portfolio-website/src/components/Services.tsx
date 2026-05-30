import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Activity, Heart, Stethoscope, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { SPECIALTIES } from '../data';
import { Skeleton } from './SkeletonLoader';

interface ServicesProps {
  isLoading: boolean;
}

export const Services: React.FC<ServicesProps> = ({ isLoading }) => {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-medical-teal" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-medical-teal" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-medical-teal" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-medical-teal" />;
      default:
        return <Activity className="w-6 h-6 text-medical-teal" />;
    }
  };

  const handleToggleDetails = (id: string) => {
    if (expandedCardId === id) {
      setExpandedCardId(null);
    } else {
      setExpandedCardId(id);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 14,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background blobs for premium aesthetic */}
      <div className="absolute top-[10%] left-[-15%] w-[35vw] h-[35vw] rounded-full bg-medical-blue glow-orb" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Elements */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-wider text-medical-blue uppercase block">
            Clinical Scope &amp; Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-medical-slate tracking-tight">
            Comprehensive Specialties Designed Around Heart Wellness
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-sans max-w-2xl mx-auto font-light leading-relaxed">
            From early screening and preventative cardiovascular diagnostics to advanced guidance on surgical interventions, Dr. Ross delivers individualized clinical excellence.
          </p>
        </div>

        {/* Clinical Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={`srv-sk-${i}`} variant="card" />
              ))
            : SPECIALTIES.map((service) => {
                const isExpanded = expandedCardId === service.id;
                return (
                  <motion.div
                    key={service.id}
                    variants={cardVariants}
                    layout="position"
                    onClick={() => handleToggleDetails(service.id)}
                    className={`p-8 bg-white border border-slate-100/90 rounded-3xl shadow-xs transition-all duration-300 hover:shadow-lg hover:shadow-medical-blue/3 flex flex-col justify-between group cursor-pointer relative overflow-hidden ${
                      isExpanded ? 'ring-2 ring-medical-blue/15 border-medical-blue/20' : ''
                    }`}
                  >
                    {/* Top Accent Stripe */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-blue/40 to-medical-teal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        {/* Styled Icon Wrapper */}
                        <div className="w-12 h-12 rounded-2xl bg-medical-teal/8 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                          {getServiceIcon(service.iconName)}
                        </div>
                        
                        {/* Interactive toggle flag */}
                        <span className="text-xs font-mono font-medium text-medical-gray flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                          {isExpanded ? 'Hide Details' : 'View Details'}
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </span>
                      </div>

                      {/* Service Info Header */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-serif font-bold text-medical-slate group-hover:text-medical-blue transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-slate-500 font-sans leading-relaxed font-light">
                          {service.description}
                        </p>
                      </div>

                      {/* Smooth Expanding Procedures List details */}
                      <motion.div
                        initial={false}
                        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                        className="overflow-hidden"
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="pt-4 border-t border-slate-50 space-y-3">
                          <h4 className="text-xs font-bold tracking-wider text-medical-slate uppercase">
                            Core Procedures &amp; Interventions:
                          </h4>
                          <ul className="grid grid-cols-1 gap-2.5">
                            {service.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-sans">
                                <CheckCircle2 className="w-4 h-4 text-medical-blue shrink-0 mt-0.5" />
                                <span className="font-light">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </div>

                    {/* Expand Trigger Button (Stylized) */}
                    <div className="mt-6 flex justify-start items-center">
                      <span className="text-xs font-semibold text-medical-blue group-hover:underline transition-all">
                        {isExpanded ? 'Collapse Clinical Summary' : 'Explore diagnostic details & procedure checklist'}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
        </motion.div>
      </div>
    </section>
  );
};
