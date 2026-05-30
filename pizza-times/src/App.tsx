/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import BentoBestsellers from './components/BentoBestsellers';
import MenuSection from './components/MenuSection';
import CraftSection from './components/CraftSection';
import ReviewsCarousel from './components/ReviewsCarousel';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import CartDrawer, { CartItem } from './components/CartDrawer';
import { MenuItem } from './types';

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Load cart from client-side localStorage as premium persistence
  useEffect(() => {
    const savedCart = localStorage.getItem('pizza_times_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error reading cached local pizza basket", e);
      }
    }
  }, []);

  const saveCartToStorage = (updatedItems: CartItem[]) => {
    setCartItems(updatedItems);
    localStorage.setItem('pizza_times_cart', JSON.stringify(updatedItems));
  };

  // Add pizza item to cart with lazy initialization and customization defaults
  const handleAddToCart = (pizza: MenuItem) => {
    const uniqueId = `${pizza.id}-plain`;
    const existingIndex = cartItems.findIndex((item) => item.id === uniqueId);

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      saveCartToStorage(updated);
    } else {
      const newItem: CartItem = {
        id: uniqueId,
        pizza,
        quantity: 1,
        addedToppings: [],
      };
      saveCartToStorage([...cartItems, newItem]);
    }
  };

  // Update item quantity (cannot drop below 1)
  const handleUpdateQuantity = (id: string, delta: number) => {
    const updated = cartItems
      .map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: Math.max(1, newQty) };
        }
        return item;
      });
    saveCartToStorage(updated);
  };

  // Remove pizza line item entirely
  const handleRemoveItem = (id: string) => {
    const filtered = cartItems.filter((item) => item.id !== id);
    saveCartToStorage(filtered);
  };

  // Update the added gourmet premium extra toppings array on any given slice
  const handleUpdateToppings = (id: string, toppings: any[]) => {
    const updated = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, addedToppings: toppings };
      }
      return item;
    });
    saveCartToStorage(updated);
  };

  // Clear total basket list
  const handleClearCart = () => {
    saveCartToStorage([]);
  };

  // Handle high-precision section scroll navigators
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Find offset to respect top navigation bars constraints and offset it slightly
      const yOffset = -75; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Track standard scroll ticks to glow the corresponding navbar link tab
  useEffect(() => {
    const handleScrollTracking = () => {
      const sections = ['hero', 'menu', 'craft', 'bestsellers', 'reviews', 'order-form'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollTracking);
    return () => window.removeEventListener('scroll', handleScrollTracking);
  }, []);

  const totalPizzasCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-dark-bg text-cream font-sans relative flex flex-col justify-between selection:bg-brand-red selection:text-dark-bg">
      
      {/* 1. Spin Pizza Loader on entrance */}
      <Loader onComplete={() => setAppReady(true)} />

      {/* Atmospheric Background Ambient Radiant Glow layers */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-brand-red opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[300px] left-[-100px] w-[400px] h-[400px] bg-brand-yellow opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* Render core components as soon as app flips appReady flag */}
      {appReady && (
        <div className="flex flex-col justify-between min-h-screen w-full">
          
          {/* Glassy responsive navigation bar */}
          <Navbar
            cartItemsCount={totalPizzasCount}
            onCartClick={() => setIsCartOpen(true)}
            scrollToSection={scrollToSection}
            activeSection={activeSection}
          />

          {/* Main sections container */}
          <main className="flex-1 w-full bg-transparent">
            {/* 1. Cinematic Hero */}
            <Hero
              onExploreMenu={() => scrollToSection('menu')}
              onInstantOrder={() => scrollToSection('order-form')}
            />

            {/* 2. Scrolling horizontal marquee ribbon tape */}
            <Marquee />

            {/* 3. Bento Bestsellers grid */}
            <BentoBestsellers onAddToCart={handleAddToCart} />

            {/* 4. Signature Slices Menu catalog with detailed categories filters */}
            <MenuSection onAddToCart={handleAddToCart} />

            {/* 5. Our Woodfired sourdough Craft rules guidelines */}
            <CraftSection />

            {/* 6. Review carousel */}
            <ReviewsCarousel />

            {/* 7. Live Builder & Pricing Estimator form */}
            <OrderForm />
          </main>

          {/* Fully styled copyright and operational hubs footer */}
          <Footer />

          {/* Side slider shopping cart list drawer */}
          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onUpdateToppings={handleUpdateToppings}
            onClearCart={handleClearCart}
          />
          
        </div>
      )}

    </div>
  );
}
