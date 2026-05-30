/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Star } from 'lucide-react';

interface NavbarProps {
  activeSec: string;
  setActiveSec: (sec: string) => void;
}

const NAV_LINKS = [
  { id: 'hero', label: 'Welcome' },
  { id: 'about', label: 'Story' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reserve', label: 'Reservation' },
];

export default function Navbar({ activeSec, setActiveSec }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSec(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.nav
        id="navbar_root"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-neutral-950/85 backdrop-blur-xl py-4 border-neutral-900/60 shadow-lg' 
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Elegant Logo with gold star icon */}
          <button 
            id="nav_logo_btn"
            onClick={() => handleLinkClick('hero')} 
            className="flex items-center gap-2 group cursor-pointer text-left"
          >
            <div className="relative w-8 h-8 border border-gold/30 rounded-full flex items-center justify-center bg-neutral-900 group-hover:border-gold/80 transition-all duration-300">
              <Star className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.25em] text-cream group-hover:text-gold transition-colors duration-300 font-medium">L'ÉTOILE</span>
              <span className="text-[7.5px] tracking-[0.5em] text-neutral-500 uppercase -mt-0.5">Gastronomie</span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSec === link.id;
              return (
                <button
                  id={`nav_link_${link.id}`}
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative text-[11.5px] uppercase tracking-[0.25em] font-medium font-sans cursor-pointer transition-colors duration-300 pb-1 ${
                    isActive ? 'text-gold' : 'text-cream-muted hover:text-cream'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      id={`nav_active_indicator_${link.id}`}
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Reserve Table CTA (Desktop) */}
          <div className="hidden md:block">
            <button
              id="nav_desktop_reserve_btn"
              onClick={() => handleLinkClick('reserve')}
              className="relative overflow-hidden group border border-gold/30 hover:border-gold bg-transparent text-gold text-[10.5px] uppercase tracking-[0.25em] font-sans font-medium px-5 py-2.5 rounded-none transition-all duration-500 hover:shadow-[0_0_15px_rgba(212,160,23,0.15)]"
            >
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover:text-charcoal transition-colors duration-500">Book Table</span>
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            id="nav_mobile_toggle_btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cream hover:text-gold focus:outline-none transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 animate-spin-once" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Slide in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile_menu_drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-x-0 top-0 z-30 pt-24 pb-8 px-6 bg-neutral-950 border-b border-neutral-900 shadow-2xl flex flex-col gap-6 md:hidden"
          >
            <div className="flex flex-col gap-4 text-center mt-4">
              {NAV_LINKS.map((link, index) => {
                const isActive = activeSec === link.id;
                return (
                  <motion.button
                    id={`mobile_nav_link_${link.id}`}
                    key={link.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-sm uppercase tracking-[0.3em] font-medium py-2.5 border-b border-neutral-900/50 ${
                      isActive ? 'text-gold' : 'text-cream-muted'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
            </div>

            <motion.button
              id="mobile_nav_reserve_btn"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.08 }}
              onClick={() => handleLinkClick('reserve')}
              className="w-full text-center border border-gold bg-gold/10 hover:bg-gold text-gold hover:text-charcoal text-xs uppercase tracking-[0.3em] font-semibold py-3.5 transition-all duration-300"
            >
              Order & Reservation
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .animate-spin-once {
          animation: spin 0.3s ease-out 1;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(180deg); }
        }
      `}</style>
    </>
  );
}
