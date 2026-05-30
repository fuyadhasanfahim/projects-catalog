import React from 'react';
import { Heart, Mail, Phone, MapPin, Linkedin, Twitter, ArrowUp, LucideIcon } from 'lucide-react';
import { DOCTOR_INFO, CLINIC_HOURS } from '../data';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetPos = targetElement.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer id="footer" className="bg-[#111827] text-slate-300 pt-16 pb-8 relative overflow-hidden border-t-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-12">
        
        {/* Top Segment: Brand logo & newsletter layout or contact block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleScrollToTop(); }}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-medical-blue flex items-center justify-center text-white shadow-lg">
                <Heart className="w-5.5 h-5.5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-white tracking-tight leading-none">
                  Dr. Evelyn Ross
                </span>
                <span className="text-[10px] font-sans text-slate-400 tracking-wider uppercase mt-1">
                  Cardiology &amp; Cardiovascular Care
                </span>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans font-light max-w-sm pt-2">
              Bringing state-of-the-art diagnostics, preventative guidance, and sincere listening to improve local cardiovascular outcomes across the region.
            </p>
            {/* Social credentials */}
            <div className="flex gap-2.5 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-medical-blue hover:text-white transition-colors flex items-center justify-center"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-medical-blue hover:text-white transition-colors flex items-center justify-center"
                aria-label="Twitter profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2 space-y-4 font-sans">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="hover:text-medical-blue hover:translate-x-1 inline-block transition-all"
                >
                  Meet Dr. Ross
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="hover:text-medical-blue hover:translate-x-1 inline-block transition-all"
                >
                  Clinical Specialties
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => handleLinkClick(e, '#experience')}
                  className="hover:text-medical-blue hover:translate-x-1 inline-block transition-all"
                >
                  Milestones &amp; Credentials
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleLinkClick(e, '#testimonials')}
                  className="hover:text-medical-blue hover:translate-x-1 inline-block transition-all"
                >
                  Patient Stories
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="hover:text-medical-blue hover:translate-x-1 inline-block transition-all"
                >
                  Contact Office
                </a>
              </li>
            </ul>
          </div>

          {/* Clinic hours Col */}
          <div className="lg:col-span-3 space-y-4 font-sans text-xs sm:text-sm">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase">Office hours</h4>
            <div className="space-y-2 font-light text-slate-400">
              {CLINIC_HOURS.map((hour, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-slate-800/60 pb-1.5 last:border-0 last:pb-0">
                  <span className="font-semibold text-slate-300">{hour.days}</span>
                  <span>{hour.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Contacts Col */}
          <div className="lg:col-span-3 space-y-4 font-sans text-xs sm:text-sm">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase">Contact info</h4>
            <ul className="space-y-3 font-light text-slate-400">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-medical-blue shrink-0 mt-0.5" />
                <span>{DOCTOR_INFO.address}</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-medical-blue shrink-0" />
                <span>{DOCTOR_INFO.phone}</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-medical-blue shrink-0" />
                <span>{DOCTOR_INFO.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright details & Scroll to top absolute button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-[11px] text-slate-500 font-sans leading-relaxed">
          <div className="text-left space-y-1 max-w-2xl">
            <p>&copy; {new Date().getFullYear()} Dr. Evelyn Ross, MD, FACC. All clinical copy and achievements are verified.</p>
            <p className="leading-normal font-light">
              <strong>Professional Disclaimer:</strong> This portal is a medical professional portfolio mockup demonstrating high-fidelity frontend structures. The medical materials, diagnostics parameters, and scheduler lists are intended strictly for representation and do not substitute for professional bedside examination, diagnosis, or clinical guidelines. If you are experiencing a cardiological emergency, please call 911 immediately.
            </p>
          </div>

          <button
            id="btn-footer-top"
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-medical-blue hover:text-white text-slate-400 border border-slate-700 hover:border-medical-blue transition-all flex items-center justify-center shrink-0 shadow-lg cursor-pointer animate-bounce"
            aria-label="Scroll back to top of the dashboard"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
