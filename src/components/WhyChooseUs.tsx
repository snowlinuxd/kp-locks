import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ShieldCheck, 
  Flame, 
  Clock, 
  Zap, 
  CheckCircle2, 
  Target, 
  LockKeyhole 
} from 'lucide-react';
import { TRUST_POINTS } from '../data/locksData';

export default function WhyChooseUs() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#D4AF37]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#D4AF37]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#D4AF37]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <LockKeyhole className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section 
      className="bg-white py-24 border-t border-zinc-200 w-full relative overflow-hidden select-none"
      id="why-choose"
    >
      {/* Background decor circular vectors */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] bg-black/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-black/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-8xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Header section with split-grid on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 pb-10 border-b border-zinc-200">
          <div className="lg:col-span-8">
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] text-black uppercase">
              REPUTED SECURITY ENGINEERING
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-stone-950 mt-4 leading-tight">
              Absolute Resistance.<br />
              <span className="text-black">Forged For Lifetime Security.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-left">
            <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed max-w-sm">
              We do not build flimsy locks with soft aluminum alloys or zinc sliders. 
              Our locks are constructed strictly with heavyweight solid brass and hard structural steel plate cylinders.
            </p>
          </div>
        </div>

        {/* Dynamic Trust Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRUST_POINTS.map((point, index) => {
            const isHovered = hoveredIdx === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative p-6 rounded bg-neutral-950 border border-zinc-850/80 hover:border-[#D4AF37]/30 shadow-xl overflow-hidden transition-all duration-300 flex gap-4"
              >
                {/* Background lighting hover aura */}
                <div 
                  className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/5 to-transparent opacity-0 transition-opacity duration-300" 
                  style={{ opacity: isHovered ? 1 : 0 }}
                />

                {/* Left decorative gold accent slider bar (Gold line hover effect) */}
                <span 
                  className="absolute left-0 top-0 bottom-0 w-[2.5px] bg-gradient-to-b from-[#D4AF37] to-transparent transition-transform duration-300 origin-center"
                  style={{ transform: isHovered ? 'scaleY(1)' : 'scaleY(0)' }}
                />

                {/* Icon box */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 transition-colors group-hover:border-[#D4AF37]">
                    {getIcon(point.iconName)}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h4 className="font-serif text-lg font-medium text-white transition-colors group-hover:text-[#D4AF37]">
                    {point.title}
                  </h4>
                  <p className="text-stone-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Beautiful full-width interactive stat feature banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-16 p-8 sm:p-12 rounded bg-neutral-950 border border-zinc-850 flex flex-col lg:flex-row items-center gap-10"
        >
          {/* Centered dial rating */}
          <div className="relative w-40 h-40 flex-shrink-0 flex items-center justify-center">
            {/* SVG dial border */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle cx="80" cy="80" r="70" stroke="rgba(255,255,255,0.03)" strokeWidth="8" fill="none" />
              <motion.circle 
                cx="80" 
                cy="80" 
                r="70" 
                stroke="#D4AF37" 
                strokeWidth="8" 
                fill="none" 
                strokeDasharray="440" 
                initial={{ strokeDashoffset: 440 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
            </svg>
            <div className="text-center">
              <span className="text-3xl font-serif text-white font-extrabold block">100%</span>
              <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase">Solid alloy</span>
            </div>
          </div>

          <div className="flex-grow">
            <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase">THE DINDIGUL BARRIER</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mt-2">Pick-Resistant Mechanical Tumbler Design</h3>
            <p className="text-stone-400 text-sm mt-3 leading-relaxed">
              Standard pin-tumbler locks rely on linear alignment lines which can be bypass-manipulated using generic lock pick rakes or picking keys. Our traditional Dindigul lever alignments are asymmetrical and cut out of hardened steel, triggering an auto-deadlock mechanism whenever a pick-tool attempts force.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
