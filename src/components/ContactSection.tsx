import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, Mail, MessageSquare, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { WORKSHOP_LOCATION, CONTACT_NUMBERS, WORKING_HOURS } from '../data/locksData';
import Logo from './Logo';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'lock-manufacturing',
    detail: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: !formState.name.trim() ? 'Name is required' : '',
      email: !formState.email.trim() 
        ? 'Email is required' 
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email) 
          ? 'Enter a valid email address' 
          : '',
      phone: !formState.phone.trim() 
        ? 'Phone number is required' 
        : !/^\+?[0-9\s-]{8,15}$/.test(formState.phone)
          ? 'Enter a valid phone number (8-15 digits)'
          : ''
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(err => err !== '');
    if (hasErrors) return;

    setIsSubmitting(true);
    // Simulate high-security server submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', phone: '', service: 'lock-manufacturing', detail: '' });
      }, 5000);
    }, 1800);
  };

  return (
    <section 
      className="bg-black py-24 border-t border-zinc-900/60 w-full relative select-none"
      id="contact"
    >
      {/* Dynamic ambient lights */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-[#D4AF37]/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-8xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-[#D4AF37] font-bold uppercase py-1 px-3 bg-[#D4AF37]/5 border border-[#D4AF37]/15 rounded-full inline-block">
            CONNECT WITH EXPERTS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-white mt-4">
            Instant Lock Solutions
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base">
            Request manual lock manufacturing orders, schedule emergency locksmith house calls, 
            or inquire about custom Dindigul lock designs 24/7.
          </p>
        </div>

        {/* Contact Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT: Contact details & Map Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 h-full">
            <div className="p-6 sm:p-8 rounded bg-zinc-950/35 border border-zinc-800 shadow-xl flex flex-col gap-6">
              
              <h3 className="font-serif text-xl font-medium text-white pb-3 border-b border-zinc-800">
                KP Locks Workshop
              </h3>

              {/* Physical Address */}
              <div className="flex items-start gap-4 text-zinc-300">
                <div className="w-10 h-10 rounded bg-[#D4AF37]/5 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                  <MapPin className="w-4.5 h-4.5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-bold">WORKSHOP ADDRESS</h4>
                  <p className="text-sm text-stone-300 mt-1 font-sans leading-relaxed">
                    {WORKSHOP_LOCATION.address},<br />
                    {WORKSHOP_LOCATION.city} – {WORKSHOP_LOCATION.pincode},<br />
                    {WORKSHOP_LOCATION.state}
                  </p>
                </div>
              </div>

              {/* Contact numbers mapping */}
              <div className="flex items-start gap-4 text-zinc-300">
                <div className="w-10 h-10 rounded bg-[#D4AF37]/5 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                  <Phone className="w-4.5 h-4.5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-bold">Security Hotline</h4>
                  <div className="mt-2 space-y-1">
                    {CONTACT_NUMBERS.map((num, i) => (
                      <a 
                        key={i} 
                        href={`tel:${num.phone}`}
                        className="block text-sm text-[#FFEAB5] hover:text-white font-mono font-bold transition-colors"
                      >
                        {num.label}: +91 {num.phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Working hours */}
              <div className="flex items-start gap-4 text-zinc-300">
                <div className="w-10 h-10 rounded bg-[#D4AF37]/5 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                  <Clock className="w-4.5 h-4.5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-bold">WORKING HOURS</h4>
                  <p className="text-sm text-stone-300 mt-1 font-sans leading-relaxed font-bold">
                    {WORKING_HOURS}
                  </p>
                  <p className="text-xs text-zinc-500 font-serif italic mt-0.5">Yes, we operate 365 days a year including holidays.</p>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-4 text-zinc-300">
                <div className="w-10 h-10 rounded bg-[#D4AF37]/5 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                  <Mail className="w-4.5 h-4.5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-bold">EMAIL ADDRESS</h4>
                  <a 
                    href="mailto:snowlinuxd@gmail.com" 
                    className="block text-sm text-[#FFEAB5] hover:text-white font-mono font-bold transition-colors mt-1"
                  >
                    snowlinuxd@gmail.com
                  </a>
                  <p className="text-xs text-zinc-500 font-serif italic mt-0.5">Direct response and custom quote delivery.</p>
                </div>
              </div>

            </div>

            {/* Google Map Embedded Iframe Card */}
            <div className="relative rounded overflow-hidden shadow-2xl h-[240px] border border-zinc-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.5802525791783!2d77.97334707474415!3d10.375389489750518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00ab4358bb11c1%3s0x3b00ab1451f2af87!2sKuyavar%20Street%2C%20Nagal%20Nagar%2C%20Dindigul%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1718430000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0 filter invert-[90%] hue-rotate-[180deg] grayscale-[40%] contrast-[110%]"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer"
                title="KP LOCKS Dindigul Location Maps"
              ></iframe>
              <div className="absolute bottom-2 left-2 bg-black/85 border border-[#D4AF37]/35 rounded px-2.5 py-1 text-[10px] font-mono text-[#D4AF37] z-10 flex items-center gap-1.5 backdrop-blur-sm pointer-events-none">
                <MapPin className="w-3.5 h-3.5" />
                <span>Nagal Nagar, Dindigul, TN</span>
              </div>
            </div>

          </div>

          {/* RIGHT: High security contact inquiry form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded bg-zinc-950/40 border border-zinc-800 shadow-2xl h-full flex flex-col justify-between">
              
              <div>
                <span className="text-[10px] font-mono tracking-[0.2em] font-extrabold uppercase text-[#D4AF37]">SECURED SECURE CHANNEL</span>
                <h3 className="font-serif text-2xl font-medium text-white mt-1 mb-6">Send a Service Request</h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name cell */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Your Full Name *</label>
                      <input 
                        type="text" 
                        value={formState.name}
                        onChange={(e) => {
                          setFormState({...formState, name: e.target.value});
                          if (errors.name) setErrors({...errors, name: ''});
                        }}
                        placeholder="e.g. Anand Kumar" 
                        className={`px-4 py-3 bg-zinc-950/60 border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800/80 focus:border-[#D4AF37]'} rounded text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-all outline-none`}
                        id="input-name"
                      />
                      {errors.name && (
                        <span className="text-[11px] font-mono text-red-400 mt-0.5">{errors.name}</span>
                      )}
                    </div>

                    {/* Phone Number cell */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Phone Number *</label>
                      <input 
                        type="tel" 
                        value={formState.phone}
                        onChange={(e) => {
                          setFormState({...formState, phone: e.target.value});
                          if (errors.phone) setErrors({...errors, phone: ''});
                        }}
                        placeholder="e.g. 7373895801" 
                        className={`px-4 py-3 bg-zinc-950/60 border ${errors.phone ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800/80 focus:border-[#D4AF37]'} rounded text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-all font-mono outline-none`}
                        id="input-phone"
                      />
                      {errors.phone && (
                        <span className="text-[11px] font-mono text-red-400 mt-0.5">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* Email Cell */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Your Email Address *</label>
                    <input 
                      type="email" 
                      value={formState.email}
                      onChange={(e) => {
                        setFormState({...formState, email: e.target.value});
                        if (errors.email) setErrors({...errors, email: ''});
                      }}
                      placeholder="e.g. customer@example.com" 
                      className={`px-4 py-3 bg-zinc-950/60 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800/80 focus:border-[#D4AF37]'} rounded text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-all outline-none`}
                      id="input-email"
                    />
                    {errors.email && (
                      <span className="text-[11px] font-mono text-red-400 mt-0.5">{errors.email}</span>
                    )}
                  </div>

                  {/* Service selector */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Service Required</label>
                    <div className="relative">
                      <select 
                        value={formState.service}
                        onChange={(e) => setFormState({...formState, service: e.target.value})}
                        className="w-full px-4 py-3 bg-zinc-950/60 border border-zinc-800/80 rounded text-sm text-zinc-100 focus:outline-none focus:border-[#D4AF37] transition-all appearance-none cursor-pointer outline-none"
                        id="select-service"
                      >
                        <option value="lock-manufacturing">Handmade Dindigul Lock Manufacturing</option>
                        <option value="door-opening">Door Lock Missing/Opening Service</option>
                        <option value="all-kind-services">All Kind of Lock Services</option>
                        <option value="emergency-service">Emergency 24/7 Lockout Support</option>
                        <option value="custom-solutions">Custom Master Key Suite Orders</option>
                        <option value="repair-maintenance">Repair &amp; Antique Lock Restoration</option>
                      </select>
                      {/* Custom dropdown arrow */}
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none text-xs">▼</span>
                    </div>
                  </div>

                  {/* Messaging Details */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Inquiry details / message</label>
                    <textarea 
                      rows={4}
                      value={formState.detail}
                      onChange={(e) => setFormState({...formState, detail: e.target.value})}
                      placeholder="e.g. I need to order a custom 10-lever traditional brass mango padlock with extra length keys. / Urgent lockout." 
                      className="px-4 py-3 bg-zinc-950/60 border border-zinc-800/80 rounded text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] transition-all resize-none outline-none"
                      id="input-msg"
                    ></textarea>
                  </div>

                  {/* Form Submission status indicators */}
                  <AnimatePresence mode="wait">
                    {submitted && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 rounded border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs sm:text-sm flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                        <div>
                          <strong>Secure Transmission Complete!</strong> Your inquiry has been validated and dispatched to <strong>snowlinuxd@gmail.com</strong>. Our master builders will phone you within 15 minutes.
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit button with golden glowing interaction */}
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(212,175,55,0.35)' }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting || submitted}
                    type="submit"
                    className="w-full py-4 rounded text-xs font-mono font-extrabold tracking-widest uppercase text-black bg-[#D4AF37] hover:bg-[#c6a02b] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed"
                    id="btn-form-submit"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4.5 h-4.5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                        Connecting Safe Lever...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 fill-black" />
                        Transmit Sealed Inquiry
                      </>
                    )}
                  </motion.button>

                </form>
              </div>

              {/* Security shield notice */}
              <div className="mt-8 pt-6 border-t border-zinc-800/60 flex items-center gap-3.5 text-zinc-500 text-[11px] leading-normal font-mono">
                <ShieldAlert className="w-5 h-5 text-[#D4AF37]/50 shrink-0" />
                <p>
                  Secure Inquiry Protection. Your details are private, transmitted purely for on-site services or custom security locksmithing order confirmation.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Global Footer Credits */}
        <div className="mt-24 pt-10 border-t border-zinc-900 flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="h-8 select-none flex items-center justify-center">
              <Logo light={true} className="scale-50 translate-y-0" />
            </div>
            <p className="text-xs text-zinc-500 font-mono">
              &copy; 2026 KP LOCKS (KP Lock &amp; Unlock). All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
