/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Pizza, ShoppingBag, Menu, X, Flame } from 'lucide-react';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
  scrollToSection: (id: string) => void;
  activeSection: string;
}

export default function Navbar({
  cartItemsCount,
  onCartClick,
  scrollToSection,
  activeSection,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Midnight Hero', id: 'hero' },
    { name: 'Signature Menu', id: 'menu' },
    { name: 'Our Craft', id: 'craft' },
    { name: 'Bestsellers', id: 'bestsellers' },
    { name: 'Testimonials', id: 'reviews' },
  ];

  const handleLinkClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-bg/80 backdrop-blur-md border-b border-brand-red/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <button
            id="nav-logo-btn"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="p-1.5 rounded-lg bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-dark-bg transition-all duration-300 shadow-glow-red">
              <Pizza size={24} className="stroke-[1.5]" />
            </div>
            <div className="text-left">
              <span className="font-display text-lg sm:text-xl tracking-wider text-cream flex items-center gap-1">
                PIZZA <span className="text-brand-red">TIMES</span>
                <Flame size={14} className="text-brand-yellow animate-pulse" />
              </span>
              <p className="hidden sm:block text-[9px] font-mono tracking-widest text-brand-yellow uppercase -mt-1">
                Slow Crafted After Dark
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`relative font-outfit text-xs uppercase tracking-widest transition-colors duration-200 cursor-pointer focus:outline-none ${
                  activeSection === link.id
                    ? 'text-brand-red font-medium'
                    : 'text-cream/70 hover:text-cream'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-red"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Action Buttons: Cart & Order Now */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Interactive Cart trigger */}
            <motion.button
              id="navbar-cart-trigger"
              onClick={onCartClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2.5 rounded-full bg-[#1e1a17] hover:bg-[#2e2621] border border-brand-yellow/10 text-brand-yellow transition-colors cursor-pointer focus:outline-none"
              aria-label="Open Cart"
            >
              <ShoppingBag size={18} />
              {cartItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-[10px] font-bold text-dark-bg"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </motion.button>

            {/* Glowing Order Now CTA */}
            <motion.button
              id="navbar-order-cta"
              onClick={() => handleLinkClick('order-form')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-red text-dark-bg font-outfit text-xs font-extrabold uppercase tracking-widest cursor-pointer shadow-glow-red hover:bg-brand-red/90 transition-all focus:outline-none"
            >
              Order Now BDT ৳
            </motion.button>

            {/* Mobile Hamburger menu */}
            <button
              id="navbar-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-cream hover:text-brand-red transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[58px] left-0 right-0 z-30 md:hidden bg-dark-bg/95 border-b border-brand-red/10 backdrop-blur-lg overflow-hidden py-6"
          >
            <nav className="flex flex-col items-center gap-6 px-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-center py-2 font-outfit text-sm uppercase tracking-widest transition-colors ${
                    activeSection === link.id
                      ? 'text-brand-red font-bold'
                      : 'text-cream/80 hover:text-cream'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <hr className="w-full border-brand-red/10 my-1" />
              <button
                id="mobile-nav-order-cta"
                onClick={() => handleLinkClick('order-form')}
                className="w-full py-3 rounded-full bg-brand-red text-dark-bg font-outfit font-extrabold uppercase tracking-widest shadow-glow-red text-xs hover:bg-[#ff3524] transition-all"
              >
                Order Late-Night Pizza ৳
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
