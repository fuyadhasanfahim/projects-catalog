import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart, Phone } from 'lucide-react';
import { DOCTOR_INFO } from '../data';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active tab indicator check on scroll
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveTab(link.id);
            break;
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveTab('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetPos = targetElement.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo & Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveTab('home');
            }}
            className="flex items-center gap-2.5 group"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-medical-blue flex items-center justify-center text-white shadow-md shadow-medical-blue/20 group-hover:scale-105 transition-transform">
              <Heart className="w-5.5 h-5.5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-medical-slate tracking-tight leading-6 group-hover:text-medical-blue transition-colors">
                Dr. Evelyn Ross
              </span>
              <span className="text-xs font-sans text-medical-gray tracking-wide font-medium">
                Cardiovascular Specialist
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.id)}
                className={`relative py-1.5 text-sm font-medium transition-colors hover:text-medical-blue ${
                  activeTab === link.id ? 'text-medical-blue' : 'text-medical-slate/80'
                }`}
                id={`nav-link-${link.id}`}
              >
                {link.label}
                {activeTab === link.id && (
                  <motion.div
                    layoutId="navTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-medical-blue rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Nav Right CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-xs font-mono text-medical-gray flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-medical-teal animate-pulse" />
              Accepting Patients
            </span>
            <button
              id="nav-cta-btn"
              onClick={onBookClick}
              className="bg-medical-blue hover:bg-medical-blue-hover text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md hover:shadow-medical-blue/10 flex items-center gap-1.5 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-medical-slate hover:text-medical-blue transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-0 w-full bg-white z-40 border-b border-slate-100 shadow-xl md:hidden overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.id)}
                  className={`text-base font-semibold py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${
                    activeTab === link.id
                      ? 'text-medical-blue bg-medical-blue/5'
                      : 'text-medical-slate/90'
                  }`}
                  id={`mobile-link-${link.id}`}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-slate-100 my-1" />
              <div className="flex flex-col gap-3 px-3 py-1">
                <div className="text-xs text-medical-gray flex items-center gap-1.5 leading-none">
                  <span className="w-2 h-2 rounded-full bg-medical-teal animate-pulse" />
                  Accepting Patients — In-person & Telehealth
                </div>
                <button
                  id="mobile-nav-cta-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full bg-medical-blue hover:bg-medical-blue-hover text-white py-3 rounded-xl text-sm font-semibold transition-all shadow-md shadow-medical-blue/10 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
