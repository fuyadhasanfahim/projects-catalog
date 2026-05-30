/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, CheckCircle, MapPin, Sparkles, ShoppingBag } from 'lucide-react';
import { MenuItem, Topping } from '../types';
import { TOPPINGS, DHAKA_AREAS } from '../data/pizzaData';

export interface CartItem {
  id: string; // generated uniquely per item + extra customization combo
  pizza: MenuItem;
  quantity: number;
  addedToppings: Topping[];
  note?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onUpdateToppings: (id: string, toppings: Topping[]) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onUpdateToppings,
  onClearCart,
}: CartDrawerProps) {
  const [selectedArea, setSelectedArea] = useState(DHAKA_AREAS[0]);
  const [typedPhone, setTypedPhone] = useState('');
  const [typedAddress, setTypedAddress] = useState('');
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderFinalized, setOrderFinalized] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Subtotal calculated with core item price + added toppings per individual item
  const calculateItemPrice = (item: CartItem) => {
    const toppingsTotal = item.addedToppings.reduce((acc, t) => acc + t.price, 0);
    return (item.pizza.price + toppingsTotal) * item.quantity;
  };

  const subtotal = cartItems.reduce((acc, item) => acc + calculateItemPrice(item), 0);
  const vatAndSd = Math.round(subtotal * 0.10); // 10% Vat & Service Charge in BD restaurants
  const deliveryFee = cartItems.length > 0 ? selectedArea.cost : 0;
  const grandTotal = subtotal + vatAndSd + deliveryFee;

  const handleToppingToggle = (item: CartItem, topping: Topping) => {
    const isAlreadyAdded = item.addedToppings.some((t) => t.name === topping.name);
    let newToppings: Topping[];
    if (isAlreadyAdded) {
      newToppings = item.addedToppings.filter((t) => t.name !== topping.name);
    } else {
      newToppings = [...item.addedToppings, topping];
    }
    onUpdateToppings(item.id, newToppings);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedPhone || !typedAddress || cartItems.length === 0) return;

    setIsOrdering(true);
    // Simulate high-contrast late-night cook order generation
    setTimeout(() => {
      setIsOrdering(false);
      setOrderFinalized(true);
      setOrderNumber('PT-' + Math.floor(100000 + Math.random() * 900000));
    }, 1800);
  };

  const resetAllAfterOrder = () => {
    onClearCart();
    setOrderFinalized(false);
    setTypedAddress('');
    setTypedPhone('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#000000]/80 backdrop-blur-sm"
          />

          {/* Drawer content pane */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md sm:max-w-lg bg-dark-bg border-l border-brand-red/10 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.85)]"
          >
            {/* Header */}
            <div className="p-5 border-b border-[#25201B] flex items-center justify-between bg-[#191512]">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-brand-red size-5 text-glow-red" />
                <h3 className="font-display text-lg tracking-wider text-cream uppercase">
                  YOUR LATE-NIGHT CART
                </h3>
              </div>
              <button
                id="cart-drawer-close"
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/5 text-cream/70 hover:text-cream transition-colors cursor-pointer"
                aria-label="Close Cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Core Body switcher - success vs active list */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              {orderFinalized ? (
                /* Success Animated Ticket */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-8 px-4"
                >
                  <div className="inline-flex items-center justify-center p-4 bg-brand-yellow/10 text-brand-yellow rounded-full shadow-glow-yellow mb-2 animate-bounce">
                    <CheckCircle size={48} className="stroke-[1.5]" />
                  </div>
                  <h4 className="font-display text-2xl tracking-wide uppercase text-cream">
                    CRAVING UNLOCKED!
                  </h4>
                  <p className="text-sm text-cream/80 leading-relaxed">
                    Our wood-fire masters have received your order. Baking at <span className="text-brand-yellow font-extrabold">450°C</span> has initiated. Your pepperoni is already curling.
                  </p>

                  <div className="p-4 bg-[#1a1410] border border-brand-yellow/20 rounded-xl space-y-3 font-mono text-left text-xs text-cream/90">
                    <div className="flex justify-between border-b border-brand-yellow/10 pb-2">
                      <span className="text-[#8e847c]">ORDER CODE:</span>
                      <span className="font-bold text-brand-yellow">{orderNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>EST. ARRIVAL:</span>
                      <span className="font-bold text-cream">35 - 45 Minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>LOCATION:</span>
                      <span className="font-bold text-cream text-right">{selectedArea.name}, Dhaka</span>
                    </div>
                    <div className="flex justify-between font-outfit border-t border-brand-yellow/10 pt-2 text-sm text-brand-yellow font-bold">
                      <span>TOTAL PAYABLE (Cash on Delivery):</span>
                      <span>৳ {grandTotal}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      id="close-success-cart-btn"
                      onClick={resetAllAfterOrder}
                      className="w-full py-3.5 rounded-xl bg-brand-red text-dark-bg font-outfit text-xs font-bold uppercase tracking-widest hover:bg-[#ff3524] shadow-glow-red transition-colors cursor-pointer"
                    >
                      Bake Another Pizza / Close
                    </button>
                    <p className="mt-3 text-[10px] font-outfit text-[#8e847c] tracking-wider uppercase">
                      WE ONLY CHARGE CASH ON MIDNIGHT DELIVERY
                    </p>
                  </div>
                </motion.div>
              ) : cartItems.length === 0 ? (
                /* Empty statement */
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                  <div className="p-4 bg-[#1e1a17] rounded-full border border-brand-red/10 text-[#5e5349]">
                    <ShoppingBag size={48} className="stroke-[1]" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg uppercase tracking-wider text-cream">YOUR BASKET IS SLEEPING</h4>
                    <p className="text-xs text-cream/50 max-w-xs mx-auto mt-1 leading-relaxed">
                      Sourdough takes 48 hours to ferment, but adding our pizza to your cart takes exactly 1 second. Try Naga Inferno!
                    </p>
                  </div>
                  <button
                    id="cart-drawer-explore-btn"
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-full border border-brand-red text-brand-red hover:bg-brand-red hover:text-dark-bg transition-all font-outfit text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Browse Midnight Menu
                  </button>
                </div>
              ) : (
                /* Core active cart List */
                <div className="space-y-6">
                  {/* Cart Item Loop */}
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 bg-[#1e1a17] rounded-xl border border-[#2e2621]/40 flex flex-col gap-3"
                      >
                        {/* Upper row: pic, title, price, remover */}
                        <div className="flex gap-3">
                          <img
                            src={item.pizza.image}
                            alt={item.pizza.name}
                            referrerPolicy="no-referrer"
                            className="w-16 h-16 rounded-lg object-cover border border-[#2e2621]"
                          />
                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] bg-brand-red/10 text-brand-red border border-brand-red/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold">
                              {item.pizza.category}
                            </span>
                            <h4 className="font-outfit text-sm font-semibold text-cream truncate mt-1">
                              {item.pizza.name}
                            </h4>
                            <p className="text-xs text-[#8e847c]">৳ {item.pizza.price} base</p>
                          </div>
                          <div className="text-right flex flex-col justify-between items-end">
                            <button
                              id={`remove-item-${item.id}`}
                              onClick={() => onRemoveItem(item.id)}
                              className="p-1.5 text-[#5e5349] hover:text-brand-red transition-colors cursor-pointer"
                              aria-label="Delete item"
                            >
                              <Trash2 size={15} />
                            </button>
                            <span className="text-xs font-bold text-brand-yellow font-mono">
                              ৳ {calculateItemPrice(item)}
                            </span>
                          </div>
                        </div>

                        {/* Middle row: Quantity adjustments */}
                        <div className="flex justify-between items-center bg-black/30 rounded-lg p-2 border border-[#25201B]">
                          <span className="text-[11px] font-outfit text-cream/60">Servings</span>
                          <div className="flex items-center gap-3">
                            <button
                              id={`qty-minus-${item.id}`}
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-1 rounded bg-[#2a221d] hover:bg-brand-red hover:text-dark-bg text-cream/80 transition-colors pointer-events-auto cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-xs font-mono font-bold text-cream w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              id={`qty-plus-${item.id}`}
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1 rounded bg-[#2a221d] hover:bg-brand-red hover:text-dark-bg text-cream/80 transition-colors pointer-events-auto cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>

                        {/* Lower row: Extra toppings selections with micro items */}
                        <div className="space-y-2">
                          <p className="text-[10px] font-outfit text-[#8e847c] uppercase tracking-wider">
                            + CUSTOM EXTRA TOPPINGS (TAP TO ADD):
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {TOPPINGS.map((top) => {
                              const isActive = item.addedToppings.some((t) => t.name === top.name);
                              return (
                                <button
                                  key={top.name}
                                  id={`topping-${item.id}-${top.name.replace(/\s+/g, '-')}`}
                                  onClick={() => handleToppingToggle(item, top)}
                                  className={`text-[10px] px-2 py-1 rounded-md border font-outfit transition-all cursor-pointer ${
                                    isActive
                                      ? 'bg-brand-yellow/10 border-brand-yellow text-brand-yellow font-medium shadow-[0_0_10px_rgba(255,182,39,0.15)]'
                                      : 'bg-black/20 border-[#3a3026] text-cream/40 hover:border-cream/20 hover:text-cream/70'
                                  }`}
                                >
                                  {top.name} (+৳{top.price})
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Delivery Info Section */}
                  <div className="p-4 bg-[#13100e] border border-brand-yellow/10 rounded-xl space-y-4">
                    <div className="flex items-center gap-2 border-b border-[#25201B] pb-2">
                      <MapPin size={15} className="text-brand-yellow" />
                      <h5 className="font-outfit text-xs font-bold uppercase tracking-wider text-cream/90">
                        DHAKA LATE NIGHT DELIVERY DETAILS
                      </h5>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-[10px] text-[#8e847c] uppercase tracking-wider mb-1.5">
                          Select Delivery Neighborhood:
                        </label>
                        <select
                          id="cart-delivery-area"
                          value={selectedArea.name}
                          onChange={(e) => {
                            const found = DHAKA_AREAS.find((a) => a.name === e.target.value);
                            if (found) setSelectedArea(found);
                          }}
                          className="w-full text-xs font-outfit py-2.5 px-3 bg-black/40 border border-[#3a3026] rounded-lg text-cream focus:outline-none focus:border-brand-red"
                        >
                          {DHAKA_AREAS.map((area) => (
                            <option key={area.name} value={area.name}>
                              {area.name} (Late-Night Ride: ৳{area.cost})
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Required Interactive address inputs */}
                      <form onSubmit={handlePlaceOrder} className="space-y-3">
                        <div>
                          <label className="block text-[10px] text-[#8e847c] uppercase tracking-wider mb-1">
                            Contact Phone (Required):
                          </label>
                          <input
                            type="tel"
                            id="cart-phone"
                            required
                            placeholder="e.g. 01712XXXXXX"
                            value={typedPhone}
                            onChange={(e) => setTypedPhone(e.target.value)}
                            className="w-full text-xs font-mono py-2 px-3 bg-black/40 border border-[#3a3026] rounded-lg text-cream focus:outline-none focus:border-brand-red placeholder-cream/20"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] text-[#8e847c] uppercase tracking-wider mb-1">
                            Detailed Dhaka Address (House, Flat, Road, Required):
                          </label>
                          <textarea
                            id="cart-address"
                            required
                            rows={2}
                            placeholder="e.g. Flat 3B, House 14, Road 11, Banani"
                            value={typedAddress}
                            onChange={(e) => setTypedAddress(e.target.value)}
                            className="w-full text-xs font-outfit py-2 px-3 bg-black/40 border border-[#3a3026] rounded-lg text-cream focus:outline-none focus:border-brand-red placeholder-cream/20 resize-none"
                          />
                        </div>

                        {/* Hidden submit trigger inside the main button outside */}
                        <button type="submit" className="hidden" id="cart-hidden-submit" />
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sticky summary and action block at bottom */}
            {!orderFinalized && cartItems.length > 0 && (
              <div className="p-5 border-t border-[#25201B] bg-[#14100e] space-y-4">
                <div className="space-y-2 font-outfit text-xs">
                  <div className="flex justify-between text-cream/70">
                    <span>Base Pizzas:</span>
                    <span>৳ {subtotal}</span>
                  </div>
                  <div className="flex justify-between text-cream/70 items-center">
                    <span className="flex items-center gap-1">
                      VAT & SD (10%): <Sparkles size={11} className="text-brand-yellow" />
                    </span>
                    <span>৳ {vatAndSd}</span>
                  </div>
                  <div className="flex justify-between text-cream/70">
                    <span>{selectedArea.name} Courier Charge:</span>
                    <span>৳ {deliveryFee}</span>
                  </div>
                  <hr className="border-[#2a2018] my-1" />
                  <div className="flex justify-between text-sm font-bold text-cream uppercase tracking-wide">
                    <span>Total Cash-on-Delivery:</span>
                    <span className="text-brand-yellow font-mono font-black text-base text-glow-yellow">৳ {grandTotal}</span>
                  </div>
                </div>

                <div className="pt-1">
                  <motion.button
                    id="place-order-drawer-btn"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isOrdering || !typedPhone || !typedAddress}
                    onClick={() => {
                      document.getElementById('cart-hidden-submit')?.click();
                    }}
                    className={`w-full py-4 rounded-xl font-outfit text-xs font-extrabold uppercase tracking-widest transition-all cursor-pointer ${
                      !typedPhone || !typedAddress
                        ? 'bg-[#2a231d] text-cream/30 border border-[#3a3026] cursor-not-allowed'
                        : 'bg-brand-red text-dark-bg hover:bg-brand-red/90 shadow-glow-red'
                    }`}
                  >
                    {isOrdering ? 'TRANSMITTING CRAVING...' : 'CONFIRM LATE-NIGHT ORDER'}
                  </motion.button>
                  <p className="text-center text-[9px] font-mono tracking-widest text-[#5e5349] mt-2 uppercase">
                    Delivery Active Till 4:00 AM • CASH ON DELIVERY ONLY
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
