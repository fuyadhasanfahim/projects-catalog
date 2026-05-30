import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';
import { DOCTOR_INFO, CLINIC_HOURS, SPECIALTIES } from '../data';
import { ContactFormData } from '../types';
import { MapPlaceholder } from './MapPlaceholder';

interface AppointmentFormProps {
  isLoading: boolean;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ isLoading }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'morning',
    service: SPECIALTIES[0]?.title || '',
    notes: '',
  });

  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name as listed on your health card.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter a valid telephone number.');
      return;
    }
    if (!formData.preferredDate) {
      setErrorMessage('Please select a preferred medical care date.');
      return;
    }

    // Simulate clinical dispatch processing
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitSuccessful(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: 'morning',
      service: SPECIALTIES[0]?.title || '',
      notes: '',
    });
    setIsSubmitSuccessful(false);
  };

  return (
    <section id="contact" className="py-20 bg-[#FBFCFD] relative overflow-hidden">
      {/* Visual glowing medical sphere background */}
      <div className="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-medical-blue glow-orb" strokeWidth={0} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Divided layout: Left contacts & hours, Right Scheduler form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Clinic Specs (Address, Hours, Map) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-wider text-medical-blue uppercase bg-medical-blue/8 border border-medical-blue/10 px-3 py-1 rounded-full inline-block">
                Location &amp; Scheduling
              </span>
              <h2 className="text-3xl font-serif font-semibold text-medical-slate tracking-tight">
                Vanguard Heart &amp; Vascular Care Clinic
              </h2>
              <p className="text-sm text-slate-500 font-sans leading-relaxed font-light">
                Consultations are coordinated in our state-of-the-art office located at the Vanguard Health Plaza. Virtual telehealth options are supported on request.
              </p>
            </div>

            {/* Quick contact list */}
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-medical-blue/8 text-medical-blue flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wide text-medical-slate uppercase">Clinic Location</h4>
                  <p className="text-sm text-slate-600 font-sans mt-0.5 leading-relaxed font-light">
                    {DOCTOR_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-medical-blue/8 text-medical-blue flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wide text-medical-slate uppercase">Telephone / Dispatch</h4>
                  <p className="text-sm text-slate-600 font-sans mt-0.5 font-light">
                    {DOCTOR_INFO.phone}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-medical-blue/8 text-medical-blue flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wide text-medical-slate uppercase">Secure Medical Mail</h4>
                  <p className="text-sm text-slate-600 font-sans mt-0.5 font-light">
                    {DOCTOR_INFO.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Checklist */}
            <div className="p-6 bg-slate-50 border border-slate-100/80 rounded-2xl space-y-4 shadow-3xs">
              <h4 className="text-xs font-bold tracking-wider text-medical-slate uppercase flex items-center gap-2">
                <Clock className="w-4.5 h-4.5 text-medical-teal" />
                Clinical Practice Hours:
              </h4>
              <div className="space-y-2.5">
                {CLINIC_HOURS.map((hour, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs text-slate-600 font-sans border-b border-white pb-1.5 last:border-0 last:pb-0">
                    <span className="font-semibold text-medical-slate">{hour.days}</span>
                    <span className="font-light">{hour.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinic map visualization placeholder widget */}
            <MapPlaceholder />
          </div>

          {/* Column 2: Appointment Scheduler Cards */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-100 rounded-[2.2rem] p-8 sm:p-10 shadow-[0_8px_40px_rgba(30,41,59,0.02)] min-h-[450px] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-medical-blue to-medical-teal" />
              
              <AnimatePresence mode="wait">
                {!isSubmitSuccessful ? (
                  <motion.div
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {/* Header */}
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-medical-slate">
                        Book a Medical Consultation
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-sans mt-1 font-light">
                        Please provide basic diagnostic choices. All scheduling requests are reviewed internally within 2 hours.
                      </p>
                    </div>

                    {/* Alert message if any */}
                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs sm:text-sm flex items-start gap-2"
                      >
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <span className="font-medium">{errorMessage}</span>
                      </motion.div>
                    )}

                    {/* Form Controls */}
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div className="space-y-1">
                          <label htmlFor="fullName" className="text-xs font-bold text-medical-slate/90 uppercase tracking-wider">
                            Patient Full Name *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="John Carter"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue text-sm transition-all"
                            required
                          />
                        </div>

                        {/* Specialty Selector */}
                        <div className="space-y-1">
                          <label htmlFor="service" className="text-xs font-bold text-medical-slate/90 uppercase tracking-wider">
                            Specialty / Scope *
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue text-sm bg-white transition-all"
                          >
                            {SPECIALTIES.map((spec) => (
                              <option key={spec.id} value={spec.title}>
                                {spec.title}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Email */}
                        <div className="space-y-1">
                          <label htmlFor="email" className="text-xs font-bold text-medical-slate/90 uppercase tracking-wider">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john.carter@gmail.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue text-sm transition-all"
                            required
                          />
                        </div>

                        {/* Telephone */}
                        <div className="space-y-1">
                          <label htmlFor="phone" className="text-xs font-bold text-medical-slate/90 uppercase tracking-wider">
                            Contact Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 732-0000"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue text-sm transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Care Date */}
                        <div className="space-y-1">
                          <label htmlFor="preferredDate" className="text-xs font-bold text-medical-slate/90 uppercase tracking-wider">
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]} // Block historical dates
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue text-sm transition-all"
                            required
                          />
                        </div>

                        {/* Prefered Slot */}
                        <div className="space-y-1">
                          <label htmlFor="preferredTime" className="text-xs font-bold text-medical-slate/90 uppercase tracking-wider">
                            Preferred Time Window *
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              id="btn-time-morning"
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, preferredTime: 'morning' }))}
                              className={`py-3 px-3 rounded-xl border text-xs font-semibold uppercase tracking-wider text-center transition-all cursor-pointer ${
                                formData.preferredTime === 'morning'
                                  ? 'bg-medical-blue/6 text-medical-blue border-medical-blue font-bold shadow-3xs'
                                  : 'border-slate-200 hover:bg-slate-50 text-slate-500'
                              }`}
                            >
                              Morning Slot
                            </button>
                            <button
                              id="btn-time-afternoon"
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, preferredTime: 'afternoon' }))}
                              className={`py-3 px-3 rounded-xl border text-xs font-semibold uppercase tracking-wider text-center transition-all cursor-pointer ${
                                formData.preferredTime === 'afternoon'
                                  ? 'bg-medical-blue/6 text-medical-blue border-medical-blue font-bold shadow-3xs'
                                  : 'border-slate-200 hover:bg-slate-50 text-slate-500'
                              }`}
                            >
                              Afternoon Slot
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Additional notes / symptoms descript */}
                      <div className="space-y-1">
                        <label htmlFor="notes" className="text-xs font-bold text-medical-slate/90 uppercase tracking-wider">
                          Medical Notes &amp; Clinical Background (Optional)
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
                          rows={3}
                          placeholder="Please note any ongoing symptoms, past procedural history, or specific questions..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue text-sm transition-all resize-none"
                        />
                      </div>

                      <div className="pt-3">
                        <button
                          id="btn-submit-appointment"
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-medical-blue hover:bg-medical-blue-hover disabled:bg-slate-200 text-white py-4 rounded-2xl text-base font-semibold shadow-md shadow-medical-blue/15 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                        >
                          {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <>
                              Submit Request
                              <ChevronRight className="w-5 h-5" />
                            </>
                          )}
                        </button>
                        <span className="text-[10px] font-sans text-medical-gray block text-center mt-3 font-light leading-normal">
                          By clicking submit, you confirm that you agree to clinical scheduling protocols. Dr. Ross's booking coordinator will reach out to confirm clinical slots.
                        </span>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-6 text-center space-y-6 flex flex-col items-center justify-center"
                  >
                    {/* Animated clinical check ring */}
                    <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-medical-teal relative">
                      <div className="absolute w-24 h-24 rounded-full bg-teal-50 animate-ping opacity-20" />
                      <ShieldCheck className="w-10 h-10 stroke-[2.5]" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif font-bold text-medical-slate">
                        Appointment Requested Successfully!
                      </h3>
                      <p className="text-sm text-slate-500 font-sans max-w-md leading-relaxed font-light">
                        Dr. Evelyn Ross's clinical intake team has registered your request. An official coordinator will contact you shortly to confirm the diagnostic slot.
                      </p>
                    </div>

                    {/* Booking summary card */}
                    <div className="w-full bg-slate-50 border border-slate-100/80 p-5 rounded-2xl text-left space-y-3.5 shadow-3xs max-w-lg">
                      <h4 className="text-xs font-bold text-medical-slate uppercase tracking-wider pb-2 border-b border-white">
                        Appointment Core Details:
                      </h4>
                      <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs font-sans">
                        <div>
                          <span className="text-slate-400 font-medium font-mono">PATIENT NAME</span>
                          <p className="font-bold text-medical-slate mt-0.5">{formData.fullName}</p>
                        </div>
                        <div>
                          <span className="text-slate-400 font-medium font-mono">SPECIALTY AREA</span>
                          <p className="font-bold text-medical-slate mt-0.5">{formData.service}</p>
                        </div>
                        <div>
                          <span className="text-slate-400 font-medium font-mono">REQUESTED DATE</span>
                          <p className="font-bold text-medical-slate mt-0.5">{formData.preferredDate}</p>
                        </div>
                        <div>
                          <span className="text-slate-400 font-medium font-mono">TIME PREFERENCE</span>
                          <p className="font-bold text-medical-slate mt-0.5 capitalize">{formData.preferredTime} Window</p>
                        </div>
                      </div>
                    </div>

                    {/* Interactive security explanation banner */}
                    <div className="p-4 bg-medical-blue/6 border border-medical-blue/10 rounded-2xl text-left max-w-lg">
                      <p className="text-xs text-medical-blue font-sans leading-relaxed flex items-start gap-2.5">
                        <CheckCircle2 className="w-4.5 h-4.5 text-medical-blue shrink-0 mt-0.5" />
                        <span>
                          <strong>Simulated Environment Safe:</strong> This website operates as a high-fidelity static portfolio mockup. Consequently, no real medical records have been stored or transmitted, maintaining client confidentiality standards.
                        </span>
                      </p>
                    </div>

                    <button
                      id="btn-return-booking"
                      onClick={handleResetForm}
                      className="px-6 py-2.5 border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold font-mono tracking-wider text-medical-slate rounded-xl transition-all shadow-3xs cursor-pointer"
                    >
                      SUBMIT NEW REQUEST
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
