import React from 'react';
import { motion } from 'motion/react';
import { Flame, Star, Binary, Sparkles, CheckSquare, Settings } from 'lucide-react';
import { MANUFACTURING_STEPS } from '../data/locksData';

export default function ManufacturingProcess() {
  return (
    <section 
      className="bg-black py-24 border-t border-zinc-900/60 w-full relative select-none"
      id="process"
    >
      {/* Light atmospheric spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D4AF37]/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-8xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Header content block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-[#D4AF37] font-bold uppercase py-1 px-3 bg-[#D4AF37]/5 border border-[#D4AF37]/15 rounded-full inline-block">
            Step-by-step Crafting Pipeline
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-white mt-4">
            How a KP Lock is Forged
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base">
            Witness the intricate steps as bulk raw alloys undergo heat forge treatments and 
            meticulous hand-filing, culminating in absolute security.
          </p>
        </div>

        {/* Manufacturing pipeline cards layout */}
        <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {MANUFACTURING_STEPS.map((step, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-6 rounded bg-zinc-950/45 border border-zinc-800 hover:border-[#D4AF37]/50 shadow-xl flex flex-col justify-between group h-full"
              >
                {/* Decorative gold background card number indicator */}
                <div className="absolute -top-4 -right-1 flex items-center justify-center font-serif text-6xl font-black text-[#D4AF37]/8 select-none tracking-normal pointer-events-none">
                  {step.number}
                </div>

                {/* Linking arrows or dots for desktop pipelines */}
                {index < MANUFACTURING_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3.5 -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-zinc-800 group-hover:text-[#D4AF37]/50 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M 5,12 H 19 M 13,6 L 19,12 L 13,18" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}

                {/* Inside card top content block */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-wider px-2 py-0.5 rounded bg-[#D4AF37]/5 border border-[#D4AF37]/15">
                      {step.number}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest text-[#D4AF37]/75 uppercase font-medium">
                      PHASE {index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-white group-hover:text-[#FFEAB5] transition-colors mt-4">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-stone-400 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Card technical terminology stamp footer */}
                <div className="mt-8 pt-4 border-t border-zinc-800/60 text-[10px] font-mono tracking-wider text-zinc-500 uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50 animate-pulse"></span>
                  <span>{step.technicalTerm}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic craftsmanship quote banner footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2.5 max-w-xl mx-auto px-4 py-3 rounded bg-zinc-950/90 border border-zinc-900 shadow-inner">
            <Flame className="w-4 h-4 text-[#D4AF37] animate-bounce" />
            <p className="text-[11px] sm:text-xs font-mono text-zinc-400 tracking-wide text-left">
              <strong className="text-white">Did you know?</strong> Traditional Dindigul levers are hand-filed to a tolerance of less than 0.1mm. It takes approximately 14 hours of manual labour to complete a single Mango lock mechanism.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
