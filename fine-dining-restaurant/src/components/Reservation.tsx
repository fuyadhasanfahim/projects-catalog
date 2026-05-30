/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, Flame, CheckCircle, Smartphone, MapPin, Wine } from 'lucide-react';

interface SelectedTable {
  id: number;
  label: string;
  capacity: number;
  area: 'parlor' | 'terrace' | 'chefs-counter';
}

const TABLES: SelectedTable[] = [
  { id: 1, label: "Table 1 (Fireplace Alcove)", capacity: 2, area: "parlor" },
  { id: 2, label: "Table 2 (Window Seat)", capacity: 2, area: "parlor" },
  { id: 3, label: "Table 3 (Grand Salon Centre)", capacity: 4, area: "parlor" },
  { id: 4, label: "Table 4 (Window Gallery)", capacity: 4, area: "parlor" },
  { id: 5, label: "Table 5 (Gourmet Suite)", capacity: 6, area: "parlor" },
  { id: 6, label: "Table 6 (Le Jardin Terrace)", capacity: 4, area: "terrace" },
  { id: 7, label: "Table 7 (Le Jardin Alcove)", capacity: 2, area: "terrace" },
  { id: 8, label: "Counter Spot A (Culinary Front)", capacity: 1, area: "chefs-counter" },
  { id: 9, label: "Counter Spot B (Culinary Front)", capacity: 1, area: "chefs-counter" },
];

export default function Reservation() {
  // Booking States
  const [guestCount, setGuestCount] = useState(2);
  const [seatingArea, setSeatingArea] = useState<'parlor' | 'terrace' | 'chefs-counter'>('parlor');
  const [selectedTableId, setSelectedTableId] = useState<number>(1);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '2026-06-15',
    time: '20:00',
    dietaryNotes: ''
  });

  const [bookingStatus, setBookingStatus] = useState<'idle' | 'processing' | 'confirmed'>('idle');
  const [bookingReference, setBookingReference] = useState('');

  const filteredTables = TABLES.filter(t => t.area === seatingArea);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const currentSelectedTable = TABLES.find(t => t.id === selectedTableId);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please specify contact details (Name, Email, Phone) to submit.");
      return;
    }

    setBookingStatus('processing');
    
    // Simulate beautiful server-side validation & table locking countdown
    setTimeout(() => {
      const randomRef = 'LET-' + Math.floor(100000 + Math.random() * 900000);
      setBookingReference(randomRef);
      setBookingStatus('confirmed');
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '2026-06-15',
      time: '20:00',
      dietaryNotes: ''
    });
    setGuestCount(2);
    setSeatingArea('parlor');
    setSelectedTableId(1);
    setBookingStatus('idle');
  };

  return (
    <section 
      id="reserve" 
      className="relative py-24 md:py-32 bg-neutral-950 text-cream overflow-hidden border-t border-neutral-900"
    >
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#C8553D]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div id="reserve_header" className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-gold text-[10px] tracking-[0.6em] uppercase font-sans font-semibold mb-4 block">
            Table Booking
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-cream">
            Secure Your Seating
          </h2>
          <div className="w-12 h-[1px] bg-gold/50 mt-6" />
        </div>

        <AnimatePresence mode="wait">
          {bookingStatus === 'idle' && (
            <motion.div
              key="booking_idle_step"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
            >
              
              {/* LEFT Side: Custom Form Fields */}
              <div className="lg:col-span-7 bg-neutral-950 border border-neutral-900 p-6 md:p-10 relative">
                {/* Subtle border element */}
                <div className="absolute inset-3 border border-neutral-900/60 pointer-events-none" />
                
                <h3 className="font-serif text-xl md:text-2xl text-cream font-medium mb-8 text-left uppercase tracking-wider flex items-center gap-2">
                  <Wine className="w-4 h-4 text-gold" /> Core Reservation parameters
                </h3>

                <form id="booking_form" onSubmit={handleSubmit} className="relative z-10 space-y-6 text-left">
                  
                  {/* Selectors row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Guests counts */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[9px] uppercase tracking-widest text-neutral-400 font-semibold flex items-center gap-1.5">
                        <Users className="w-3 h-3 text-gold" /> Guest Volume
                      </label>
                      <select
                        name="guestCount"
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))}
                        className="bg-neutral-900 border border-neutral-800 focus:border-gold/60 focus:outline-none rounded-none py-3 px-4 text-sm font-sans tracking-wide text-cream"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(v => (
                          <option key={v} value={v}>{v} {v === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>

                    {/* Date picker */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[9px] uppercase tracking-widest text-neutral-400 font-semibold flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-gold" /> Chosen Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="bg-neutral-900 border border-neutral-800 focus:border-gold/60 focus:outline-none rounded-none py-3 px-4 text-sm font-sans tracking-wide text-cream"
                      />
                    </div>

                    {/* Time slots */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[9px] uppercase tracking-widest text-neutral-400 font-semibold flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-gold" /> Chosen Hour
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="bg-neutral-900 border border-neutral-800 focus:border-gold/60 focus:outline-none rounded-none py-3 px-4 text-sm font-sans tracking-wide text-cream"
                      >
                        {["12:00", "12:30", "13:00", "13:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"].map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Seating Salon Selector Row */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-semibold">Salon Area preference</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {([
                        { id: 'parlor', title: 'Le Salon Royal', space: 'Elegant Indoor' },
                        { id: 'terrace', title: 'Le Jardin Terrace', space: 'Candlelit Patio' },
                        { id: 'chefs-counter', title: 'Chef’s Counter', space: 'Culinary Front row' }
                      ] as const).map(item => {
                        const isSelect = seatingArea === item.id;
                        return (
                          <button
                            id={`area_select_${item.id}`}
                            key={item.id}
                            type="button"
                            onClick={() => {
                              setSeatingArea(item.id);
                              // automatically select first table of the area to avoid layout faults
                              const firstOf = TABLES.find(t => t.area === item.id);
                              if (firstOf) setSelectedTableId(firstOf.id);
                            }}
                            className={`flex flex-col p-4 border text-left transition-all duration-300 rounded-none cursor-pointer ${
                              isSelect 
                                ? 'border-gold bg-gold-10/40 text-gold shadow-[0_0_12px_rgba(212,160,23,0.1)]' 
                                : 'border-neutral-900 hover:border-neutral-800 bg-neutral-900/40'
                            }`}
                          >
                            <span className="text-[11.5px] font-sans font-bold uppercase tracking-wider block">{item.title}</span>
                            <span className="text-[9px] text-neutral-500 font-sans tracking-wide block mt-1">{item.space}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact form inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2 md:col-span-1">
                      <label className="text-[9px] uppercase tracking-widest text-neutral-400 font-semibold">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Jean-Pierre"
                        required
                        className="bg-neutral-900 border border-neutral-800 focus:border-gold/60 focus:outline-none rounded-none py-3 px-4 text-sm font-sans tracking-wide text-cream"
                      />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col gap-2 md:col-span-1">
                      <label className="text-[9px] uppercase tracking-widest text-neutral-400 font-semibold">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jean@gmail.com"
                        required
                        className="bg-neutral-900 border border-neutral-800 focus:border-gold/60 focus:outline-none rounded-none py-3 px-4 text-sm font-sans tracking-wide text-cream"
                      />
                    </div>
                    {/* Phone */}
                    <div className="flex flex-col gap-2 md:col-span-1">
                      <label className="text-[9px] uppercase tracking-widest text-neutral-400 font-semibold">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+33 6 ..."
                        required
                        className="bg-neutral-900 border border-neutral-800 focus:border-gold/60 focus:outline-none rounded-none py-3 px-4 text-sm font-sans tracking-wide text-cream"
                      />
                    </div>
                  </div>

                  {/* Dietary notes */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] uppercase tracking-widest text-neutral-400 font-semibold">Special Requests & Dietary Requirements</label>
                    <textarea
                      name="dietaryNotes"
                      value={formData.dietaryNotes}
                      onChange={handleInputChange}
                      placeholder="e.g. Shellfish allergies, gluten sensitivity, or honey restrictions..."
                      rows={3}
                      className="bg-neutral-900 border border-neutral-800 focus:border-gold/60 focus:outline-none rounded-none py-3 px-4 text-sm font-sans tracking-wide text-cream resize-none"
                    />
                  </div>

                  {/* Booking Trigger CTA */}
                  <div className="pt-4 flex justify-end">
                    <button
                      id="booking_submit_btn"
                      type="submit"
                      className="relative overflow-hidden group bg-gold hover:bg-gold-hover text-charcoal font-semibold text-[11px] uppercase tracking-[0.25em] px-8 py-4 px-10 transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,160,23,0.25)] select-none cursor-pointer"
                    >
                      Verify & Confirm Seating
                    </button>
                  </div>

                </form>
              </div>

              {/* RIGHT Side: Interactive Table Selector Map layout */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                
                {/* Visual vector Blueprint map panel */}
                <div id="blueprint_container" className="bg-neutral-950 border border-neutral-900 p-6 rounded-none relative">
                  <div className="absolute inset-3 border border-neutral-900/60 pointer-events-none" />
                  
                  <span className="text-gold text-[8.5px] uppercase tracking-[0.4em] font-sans font-semibold mb-1 block text-left">
                    Live Seating Chart
                  </span>
                  <h4 className="font-serif text-lg text-cream font-medium mb-6 text-left">
                    Blueprint of L’Étoile
                  </h4>

                  {/* Map grid representation */}
                  <div className="relative border border-neutral-900/80 bg-neutral-950/80 p-4 aspect-[4/3] flex flex-col justify-between mb-6">
                    {/* Salon stage marker info labels */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-neutral-900 text-[8px] uppercase tracking-widest text-neutral-500 px-3 py-1 border border-neutral-800">
                      Kitchen Culinary Hearth
                    </div>

                    {/* Tables grid blueprint row representation */}
                    <div className="flex-grow flex items-center justify-center p-4">
                      <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-xs justify-items-center">
                        {filteredTables.map((t) => {
                          const isTableSelected = selectedTableId === t.id;
                          return (
                            <motion.button
                              id={`blueprint_table_node_${t.id}`}
                              key={t.id}
                              type="button"
                              onClick={() => setSelectedTableId(t.id)}
                              whileHover={{ scale: 1.05 }}
                              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border flex flex-col items-center justify-center cursor-pointer transition-all ${
                                isTableSelected 
                                  ? 'border-gold bg-gold-20 text-gold shadow-[0_0_15px_rgba(212,160,23,0.2)]'
                                  : 'border-neutral-800 hover:border-neutral-700 bg-neutral-900/60 text-[#D1CAC0]'
                              }`}
                            >
                              <span className="text-[10px] font-sans font-extrabold tracking-tight">T-{t.id}</span>
                              <span className="text-[7px] text-neutral-500 font-mono">Cap:{t.capacity}</span>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Salon Exit/Service mark */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-wider text-neutral-600 font-sans">
                      Main Entrance Door
                    </div>
                  </div>

                  {/* Selected table card panel detail text */}
                  {currentSelectedTable && (
                    <motion.div
                      id="selected_table_details_card"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-neutral-900/50 border border-neutral-900 p-4 rounded-sm text-left relative overflow-hidden"
                    >
                      <div className="absolute right-3 top-3">
                        <Flame className="w-5 h-5 text-gold/30 animate-pulse" />
                      </div>
                      
                      <span className="text-[8px] uppercase tracking-widest text-neutral-500 block font-semibold mb-1">Acquiring Cabin Placement</span>
                      <h5 className="font-serif text-sm sm:text-base text-cream tracking-wide font-medium">{currentSelectedTable.label}</h5>
                      
                      <div className="flex gap-4 mt-3 text-[10px] font-sans tracking-wide text-cream-muted">
                        <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-gold" /> Accommodates {currentSelectedTable.capacity} Seats</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-gold" /> {seatingArea === 'parlor' ? 'Salon Suite' : seatingArea === 'terrace' ? 'Outdoor Garden' : 'Counter Hearth'}</span>
                      </div>
                    </motion.div>
                  )}

                </div>

                {/* Info guide warning rules for fine dining */}
                <div id="booking_guidelines" className="border-l border-gold/30 pl-4 py-1 text-left">
                  <h4 className="text-[10.5px] uppercase tracking-[0.2em] font-sans font-bold text-gold inline-flex items-center gap-1.5 mb-2">
                    Booking Guidelines
                  </h4>
                  <ul className="space-y-1.5 text-[11px] text-neutral-400 font-sans font-light leading-relaxed">
                    <li>• Smart-casual dress code is strictly respected.</li>
                    <li>• Tables are kept unlocked for 15 minutes after reserved hour.</li>
                    <li>• Cancellations are appreciated 24 hours in advance.</li>
                  </ul>
                </div>

              </div>

            </motion.div>
          )}

          {bookingStatus === 'processing' && (
            /* High fidelity transition loader with technical system logging lines */
            <motion.div
              key="booking_processing_step"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.02, opacity: 0 }}
              className="max-w-2xl mx-auto bg-neutral-950 border border-neutral-900 p-12 flex flex-col items-center justify-center h-[400px] text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="w-12 h-12 border-2 border-gold/20 border-t-gold rounded-full mb-8"
              />
              <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-sans font-bold mb-3">Salons Synchronizing</span>
              <h3 className="font-serif text-xl text-cream tracking-wide font-light mb-2">Assigning Cabin Placement...</h3>
              <p className="text-xs text-neutral-500 font-sans tracking-widest uppercase">Secured parlor card locking table T-{selectedTableId}</p>
            </motion.div>
          )}

          {bookingStatus === 'confirmed' && (
            /* High Fidelity Receipt Voucher secured voucher confirmation block */
            <motion.div
              key="booking_confirmed_step"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-xl mx-auto bg-neutral-950 border border-gold/45 p-8 sm:p-12 relative overflow-hidden text-center"
            >
              {/* Outer light glow banner */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gold" />
              
              <div className="flex flex-col items-center">
                <CheckCircle className="w-12 h-12 text-gold mb-6 animate-bounce" />
                
                <span className="text-gold text-[9px] uppercase tracking-[0.5em] font-sans font-bold mb-2">Reservation Secured</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-cream font-medium tracking-tight mb-8">Table Confirmed Successfully</h3>

                <div className="w-full bg-neutral-900/50 border border-neutral-900 p-6 text-left rounded-sm space-y-4 mb-8">
                  {/* Reference ID */}
                  <div className="flex justify-between items-center pb-3 border-b border-neutral-800">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold font-sans">Reference Voucher</span>
                    <span className="text-sm font-mono text-gold font-bold tracking-widest">{bookingReference}</span>
                  </div>

                  {/* details */}
                  <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                    <div>
                      <span className="text-[9px] text-neutral-500 uppercase block tracking-wider font-semibold">Guest Name</span>
                      <span className="text-cream block font-medium mt-0.5">{formData.name}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-neutral-500 uppercase block tracking-wider font-semibold">Parlor cabin spot</span>
                      <span className="text-cream block font-semibold mt-0.5">{currentSelectedTable?.label} (T-{selectedTableId})</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-neutral-500 uppercase block tracking-wider font-semibold">Date & Time Target</span>
                      <span className="text-cream block font-medium mt-0.5">{formData.date} at {formData.time}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-neutral-500 uppercase block tracking-wider font-semibold">Volume booked</span>
                      <span className="text-cream block font-medium mt-0.5">{guestCount} {guestCount === 1 ? 'Guest' : 'Guests'}</span>
                    </div>
                  </div>

                  {/* Notes info */}
                  {formData.dietaryNotes && (
                    <div className="pt-3 border-t border-neutral-800 text-[11px] text-neutral-400 font-sans">
                      <span className="text-[8.5px] uppercase tracking-wider text-neutral-500 block font-semibold mb-0.5">Dietary details log</span>
                      "{formData.dietaryNotes}"
                    </div>
                  )}
                </div>

                {/* Simulated digital voucher helper */}
                <div className="flex gap-4 items-center justify-center p-4 border border-neutral-900 bg-neutral-950 text-left w-full rounded-sm mb-8">
                  <Smartphone className="w-8 h-8 text-gold shrink-0 opacity-85" />
                  <div>
                    <span className="text-[9.5px] font-sans uppercase font-bold tracking-wider block text-cream">Mobile QR Pass lock</span>
                    <p className="text-[10.5px] text-neutral-400 font-sans font-light leading-relaxed mt-1">
                      A visual wallet-link with mobile pass barcode has been fired to <strong className="text-gold font-medium">{formData.email}</strong>. Simply showcase this on arrival.
                    </p>
                  </div>
                </div>

                {/* Reset button to clear */}
                <button
                  id="reset_reservation_btn"
                  onClick={handleReset}
                  className="text-[10.5px] tracking-[0.25em] font-sans text-neutral-500 hover:text-gold uppercase font-bold border-b border-transparent hover:border-gold transition-colors pb-0.5 cursor-pointer"
                >
                  Book another Table
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
