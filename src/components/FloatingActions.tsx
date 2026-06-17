import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, ShieldAlert } from 'lucide-react';
import { CONTACT_NUMBERS } from '../data/locksData';

export default function FloatingActions() {
  const primaryPhone = CONTACT_NUMBERS[0].phone;
  // WhatsApp link format for direct chat with automated custom message
  const whatsappUrl = `https://wa.me/91${primaryPhone}?text=Hello%20KP%20LOCKS,%20I%20am%20viewing%20your%20landing%20page%20and%20need%20assistance%20regarding%20lock%20services/manufacturing.`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5 select-none font-mono">
      {/* 1. Floating WhatsApp Button (Green-gold themed for luxury style) */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, translateY: -3 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full bg-emerald-600 border border-emerald-500 flex items-center justify-center text-white shadow-[0_4px_16px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_20px_rgba(16,185,129,0.55)] transition-all relative group"
        title="Chat on WhatsApp"
        id="floater-whatsapp"
      >
        <MessageSquare className="w-5.5 h-5.5" />
        {/* Tooltip bubble on hover */}
        <span className="absolute right-14 bg-black border border-zinc-800 text-[#D4AF37] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          WhatsApp Chat
        </span>
      </motion.a>

      {/* 2. Floating Click-to-Call Button (Gold themed) */}
      <motion.a
        href={`tel:${primaryPhone}`}
        whileHover={{ scale: 1.1, translateY: -3 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full bg-[#D4AF37] border border-[#ffdb65]/30 flex items-center justify-center text-black shadow-[0_4px_16px_rgba(212,175,55,0.45)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.65)] transition-all relative group"
        title="Call KP Locks Live"
        id="floater-call"
      >
        <Phone className="w-5.5 h-5.5 fill-black stroke-black" />
        {/* Tooltip bubble on hover */}
        <span className="absolute right-14 bg-black border border-[#D4AF37]/25 text-[#D4AF37] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap font-bold">
          Call 24/7 Hotline
        </span>
      </motion.a>
    </div>
  );
}
