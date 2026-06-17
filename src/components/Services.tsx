import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, 
  Key, 
  DoorClosed, 
  Zap, 
  Settings, 
  Wrench, 
  ChevronRight, 
  CalendarClock, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { SERVICES, CONTACT_NUMBERS } from '../data/locksData';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Icon mapping dictionary
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lock':
        return <Lock className="w-6 h-6 text-[#D4AF37]" />;
      case 'Key':
        return <Key className="w-6 h-6 text-[#D4AF37]" />;
      case 'DoorClosed':
        return <DoorClosed className="w-6 h-6 text-[#D4AF37]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#D4AF37]" />;
      case 'Settings':
        return <Settings className="w-6 h-6 text-[#D4AF37]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Lock className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  const handleInquireClick = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      const offset = 80;
      const elementPosition = contactElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="bg-black py-24 border-t border-zinc-900/60 w-full relative select-none"
      id="services"
    >
      {/* Background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.035),transparent_50%)] pointer-events-none" />

      <div className="max-w-8xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-[#D4AF37] font-bold uppercase py-1 px-3 bg-[#D4AF37]/5 border border-[#D4AF37]/15 rounded-full inline-block">
            Professional Locksmith Core
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-white mt-4">
            Uncompromising Security Services
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base">
            From the deep furnace forging of traditional high-safety lever padlocks to emergency 
            non-destructive lock opening post lost keys, our expertise covers all aspects.
          </p>
        </div>

        {/* Services Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const isLatest = selectedServiceId === service.id;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative flex flex-col justify-between h-full p-6 sm:p-8 rounded bg-zinc-900/40 border border-zinc-800/80 hover:border-[#D4AF37]/50 shadow-2xl transition-all duration-300 group"
                style={{
                  background: isHovered 
                    ? 'linear-gradient(145deg, #121215 0%, #16161c 100%)' 
                    : 'rgba(18, 18, 20, 0.4)'
                }}
              >
                {/* Upper card lighting */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div>
                  {/* Icon with orbital ring */}
                  <div className="relative w-12 h-12 flex items-center justify-center rounded bg-zinc-800/60 border border-zinc-700/50 group-hover:border-[#D4AF37]/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300">
                    {getIcon(service.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-medium text-white mt-6 group-hover:text-[#FFEAB5] transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-stone-400 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Technical Specifications checklist */}
                  <div className="mt-6 space-y-2.5 pt-6 border-t border-zinc-800/60">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="font-sans text-zinc-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Block */}
                <div className="mt-8 pt-4 flex items-center justify-between border-t border-zinc-800/45">
                  <a 
                    href={`tel:${CONTACT_NUMBERS[0].phone}`} 
                    className="text-xs font-mono font-bold tracking-widest text-zinc-400 hover:text-[#D4AF37] flex items-center gap-1.5 uppercase transition-colors"
                    id={`btn-call-service-${service.id}`}
                  >
                    <Zap className="w-3 h-3 text-[#D4AF37]" />
                    Call locksmith
                  </a>
                  <button
                    onClick={handleInquireClick}
                    className="text-xs font-bold font-sans tracking-wide text-[#D4AF37] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                    id={`btn-inquire-${service.id}`}
                  >
                    <span>Inquire Now</span>
                    <ChevronRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 24/7 Global Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-6 sm:p-8 rounded bg-gradient-to-r from-zinc-950 via-[#121215] to-[#1a1408] border border-[#D4AF37]/20 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20">
              <CalendarClock className="w-5 h-5 text-[#D4AF37] animate-pulse" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium text-white">Emergency Door Lock Opening &amp; Services</h4>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">Struggling with a lost key? Our professional team operates 24/7 anywhere around Dindigul.</p>
            </div>
          </div>
          
          <a
            href={`tel:${CONTACT_NUMBERS[1].phone}`}
            className="px-6 py-3 rounded text-xs font-mono tracking-widest uppercase font-extrabold text-black bg-[#D4AF37] hover:bg-[#b08e24] shadow-lg transition-transform duration-200 active:scale-95 shrink-0"
            id="emergency-247-btn"
          >
            Emergency call: {CONTACT_NUMBERS[1].phone}
          </a>
        </motion.div>

      </div>
    </section>
  );
}
