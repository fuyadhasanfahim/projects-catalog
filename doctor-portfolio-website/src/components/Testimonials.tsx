import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { TESTIMONIALS } from '../data';

interface TestimonialsProps {
  isLoading: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ isLoading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Background radial soft glowing orb */}
      <div className="absolute top-[20%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-medical-blue glow-orb" strokeWidth={0} />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Segment */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-wider text-medical-teal uppercase bg-medical-teal/8 border border-medical-teal/10 px-3 py-1 rounded-full inline-block">
            Verified Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-medical-slate tracking-tight">
            Patient Stories &amp; Direct Experiences
          </h2>
          <p className="text-sm text-slate-500 font-sans max-w-md mx-auto font-light">
            Read direct personal reflections of recovery, preventative transitions, and compassionate heart wellness guidance.
          </p>
        </div>

        {/* Carousel Slide Wrapper */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FBFCFD] border border-slate-100 rounded-[2rem] p-8 sm:p-12 shadow-[0_4px_25px_rgba(30,41,59,0.015)] relative min-h-[300px] flex flex-col justify-between"
            >
              {/* Huge Quote Graphic */}
              <Quote className="absolute top-8 right-8 sm:right-12 w-20 h-20 text-medical-blue/4 pointer-events-none" />

              <div className="space-y-6">
                {/* Stars and Rating */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: currentTestimonial.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-medical-teal text-medical-teal" />
                  ))}
                  <span className="text-xs font-mono font-bold text-slate-450 ml-1">
                    5.0 / 5.0 Rating
                  </span>
                </div>

                {/* Testimonial Copy */}
                <p id={`test-quote-${currentTestimonial.id}`} className="text-base sm:text-lg lg:text-xl font-serif italic text-medical-slate leading-relaxed">
                  "{currentTestimonial.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t border-slate-100/80">
                <div className="flex items-center gap-3.5">
                  {/* Monogram Initials Frame */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-medical-blue to-teal-500 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-medical-blue/8">
                    {currentTestimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-medical-slate">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-xs text-medical-gray flex items-center gap-1 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-medical-teal" />
                      {currentTestimonial.condition}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <p className="text-[10px] font-mono text-slate-400 font-medium">Verify Care Date</p>
                    <p className="text-xs text-medical-slate font-medium">{currentTestimonial.date}</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left/Right Control Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 lg:-left-16">
            <button
              id="test-prev-btn"
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-white border border-slate-100 hover:border-slate-200 text-medical-slate hover:text-medical-blue shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] transition-all flex items-center justify-center cursor-pointer"
              aria-label="Previous patient story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 lg:-right-16">
            <button
              id="test-next-btn"
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-white border border-slate-100 hover:border-slate-200 text-medical-slate hover:text-medical-blue shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] transition-all flex items-center justify-center cursor-pointer"
              aria-label="Next patient story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Dot Indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {TESTIMONIALS.map((test, index) => (
            <button
              key={test.id}
              onClick={() => handleDotClick(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index ? 'w-8 bg-medical-blue' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
