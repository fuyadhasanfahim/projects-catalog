import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Awards } from './components/Awards';
import { Testimonials } from './components/Testimonials';
import { AppointmentForm } from './components/AppointmentForm';
import { Footer } from './components/Footer';
import { DoctorPortfolioSkeleton } from './components/SkeletonLoader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate clinical loading state setup on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetPos = el.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-medical-blue/20 selection:text-medical-blue bg-[#FBFCFD]">
      {/* 1. Global Simulation Spinner / Banner Overlay during mount phase */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            id="initial-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="fixed inset-0 z-50 bg-[#FBFCFD] flex flex-col justify-between"
          >
            {/* Header placeholder to align layout */}
            <div className="p-6 max-w-7xl mx-auto w-full flex justify-between items-center opacity-30">
              <div className="w-12 h-12 rounded-xl bg-slate-200 animate-pulse" />
              <div className="w-32 h-6 bg-slate-200 rounded animate-pulse" />
            </div>

            {/* Simulated Load Panel showing progress indicator */}
            <div className="flex flex-col items-center justify-center space-y-6">
              {/* Spinner ring */}
              <div className="relative">
                <div className="w-14 h-14 rounded-full border-4 border-slate-100 border-t-medical-blue animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-medical-blue/10 animate-ping" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h2 className="font-serif text-lg font-bold text-medical-slate tracking-tight">
                  Evelyn Ross, MD — Cardiovascular Care
                </h2>
                <p className="text-xs text-medical-gray font-mono tracking-wider uppercase animate-pulse">
                  Verifying credential standards and loading schedules...
                </p>
              </div>
            </div>

            {/* Bottom spacer to align center */}
            <div className="p-8 text-center text-[10px] text-slate-450 font-mono tracking-wide uppercase opacity-40">
              Vanguard Health Network Secure System Client
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Portfolio Main Presentation */}
      <div className="relative z-10">
        
        {/* Navigation layout */}
        <Navbar onBookClick={() => scrollToSection('contact')} />

        <main id="portfolio-container" aria-label="Professional medical portfolio content">
          {/* Hero Section */}
          <Hero
            isLoading={isLoading}
            onBookClick={() => scrollToSection('contact')}
            onServicesClick={() => scrollToSection('services')}
          />

          {/* Core Trust Statistics Section */}
          <Stats isLoading={isLoading} />

          {/* Narrative Biographic Portrait */}
          <About isLoading={isLoading} />

          {/* Clinical Scope specialties */}
          <Services isLoading={isLoading} />

          {/* Academic Certifications list */}
          <Awards isLoading={isLoading} />

          {/* Chronological professional milestones */}
          <Experience isLoading={isLoading} />

          {/* Verified Patient Stories Carousel */}
          <Testimonials isLoading={isLoading} />

          {/* Virtual Appointment Registrar & Coordinates Map */}
          <AppointmentForm isLoading={isLoading} />
        </main>

        {/* Global credentials & parameters footer */}
        <Footer />
      </div>
    </div>
  );
}
