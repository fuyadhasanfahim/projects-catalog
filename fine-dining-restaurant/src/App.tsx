/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Featured from './components/Featured';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

export default function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [activeLayoutSection, setActiveLayoutSection] = useState('hero');

  // Set up an intersection observer to track which portion of L'Étoile is active in view
  useEffect(() => {
    if (isAppLoading) return;

    const sections = ['hero', 'about', 'menu', 'gallery', 'reserve'];
    const observers: IntersectionObserver[] = [];

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // focused in center view
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLayoutSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [isAppLoading]);

  return (
    <div className="relative min-h-screen bg-charcoal text-cream selection:bg-gold/25 selection:text-gold overflow-x-hidden antialiased">
      <AnimatePresence mode="wait">
        {isAppLoading ? (
          <motion.div key="app_preloader" className="w-full h-full">
            <Loader onComplete={() => setIsAppLoading(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="app_main_content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen"
          >
            {/* Sticky blurred navigation bar */}
            <Navbar activeSec={activeLayoutSection} setActiveSec={setActiveLayoutSection} />

            {/* Core sections */}
            <main className="flex-grow">
              {/* Full creen cinematic landing entry */}
              <Hero onNavigate={setActiveLayoutSection} />

              {/* Chef story and heritage split display */}
              <About />

              {/* Categorized interactive menu sheets with custom simulated skeletons */}
              <Menu />

              {/* Selected Chef specialties horizontal slider */}
              <Featured />

              {/* Multi-ratio elegant photography list with Lightbox overlay */}
              <Gallery />

              {/* Food critic quotes carousel columns */}
              <Testimonials />

              {/* Blueprint seat reservation UI form */}
              <Reservation />
            </main>

            {/* Structured operating hours coordinates block */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
