import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Anchor, Star, Sparkles, Award, Key, Lock, Unlock, Sliders } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'legacy' | 'durability' | 'secrets'>('legacy');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isKeyAnimating, setIsKeyAnimating] = useState(false);
  const [coords, setCoords] = useState({ x: 100, y: 115 });
  const [systemAlert, setSystemAlert] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 200);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 200);
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 100, y: 115 });
  };

  const triggerUnlockCycle = () => {
    if (isKeyAnimating) return;
    setIsKeyAnimating(true);
    setSystemAlert(isUnlocked ? "RELOCKING CORE..." : "INSERTING KEY...");
    
    setTimeout(() => {
      setSystemAlert(isUnlocked ? "RESETTING LEVERS..." : "ALIGNING LEVERS...");
    }, 400);

    setTimeout(() => {
      setIsUnlocked(prev => !prev);
      setIsKeyAnimating(false);
      setSystemAlert(null);
    }, 950);
  };

  const tabsContent = {
    legacy: {
      title: "Ancient Forged Anvil Heritage",
      desc: "KP LOCKS honors a 100-year-old lineage born in Dindigul, Tamil Nadu. Known as the 'Lock City,' our regional smiths mastered security when modern machinery did not exist. Each of our locks is hammered individually on an anvil. We build physical security designed to survive generations, capturing the authentic weight of pure metal.",
      metrics: ["Individual Anvil Hand-Forged", "Dual-Shroud Shackle Guards", "Non-Symmetrical Key Profiles"]
    },
    durability: {
      title: "Heirloom Quality Materials",
      desc: "We use exclusively solid yellow brass (rich in copper) and heavy cold-rolled structural iron sheets. Unlike modern pot-metal alloy padlock shells that disintegrate under hammer blows, a Dindigul Lock contracts and absorbs kinetic force. We copper-braze our interior components for unmatched corrosion resistance.",
      metrics: ["Solid Yellow Brass Shells", "Tempered Carbon Steel Shackles", "100% Rust-Proof Copper Brazing"]
    },
    secrets: {
      title: "Complex Multi-Lever Combinations",
      desc: "The mathematical integrity of our lever layout blocks standard lockpicking tension wrenches. Each lever represents a unique mechanical height hurdle inside. In Dindigul locks, some keys require counter-intuitive puzzle-turns or hidden release latches, turning mechanical systems into unpickable masterpieces.",
      metrics: ["Up to 12 Anti-Pick Levers", "Puzzle Deficits & Hidden Keyways", "Individually Filed Brass Slots"]
    }
  };

  const specHighlights = [
    { label: "Regional Origin", value: "Dindigul, Tamil Nadu" },
    { label: "Core Composition", value: "Satin Yellow Brass & Charcoal Iron" },
    { label: "Security Tumblers", value: "8 to 12 Independent Brass Levers" },
    { label: "Shackle Hardness", value: "HRC 58 Carbon Heat-treated Steel" },
    { label: "Corrosion Grade", value: "Marine-Class Salt-Spray Certified" }
  ];

  return (
    <section 
      className="relative bg-white py-24 border-t border-zinc-200 w-full overflow-hidden select-none"
      id="about"
    >
      {/* Background glow flares */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-black/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-[#D4AF37]/4 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-8xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Visual blueprint of traditional Dindigul Lock with high-spec interactive triggers and mapping */}
          <div className="col-span-1 lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -6,
                rotateX: 2, 
                rotateY: -2,
                boxShadow: "0px 25px 55px rgba(0, 0, 0, 0.7)"
              }}
              transition={{ 
                type: "spring",
                stiffness: 280,
                damping: 24,
                mass: 0.7
              }}
              className="relative w-full max-w-[420px] p-6 sm:p-8 rounded-xl bg-neutral-950 border border-zinc-800 shadow-2xl flex flex-col items-center cursor-default select-none group"
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Gold header accent line */}
              <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
              
              <div className="w-full text-center mb-5 relative">
                {/* Micro tech label */}
                <div className="absolute -top-1 -left-2 text-[8px] font-mono text-zinc-600 tracking-wider">
                  SPEC_REV: 8.12
                </div>
                <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.25em] uppercase font-bold bg-[#D4AF37]/5 px-2.5 py-0.5 rounded border border-[#D4AF37]/15">
                  DINDIGUL BLUEPRINT
                </span>
                <h3 className="font-serif text-xl font-medium text-white mt-2.5">Artisanal Lock Layout</h3>
                <p className="text-[11px] text-zinc-500 font-mono mt-0.5 max-w-[280px] mx-auto">
                  Interactive schematic of alignment tolerances. Click keyhole layout to engage.
                </p>
              </div>

              {/* Simulated Tech Blueprint Canvas Area */}
              <div className="relative w-full h-[280px] flex items-center justify-center mb-5 bg-black rounded-lg border border-zinc-800/80 p-3 overflow-hidden shadow-inner">
                {/* Gridlines overlay background */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(212,175,55,0.02)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                
                {/* Target design reticles */}
                <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-zinc-700/50 pointer-events-none" />
                <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-zinc-700/50 pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-zinc-700/50 pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-zinc-700/50 pointer-events-none" />

                {/* Live hover tracker system variables */}
                <div className="absolute top-3.5 right-3.5 flex flex-col items-end gap-0.5 font-mono text-[9px] text-zinc-500 pointer-events-none leading-none">
                  <span>LOC: <strong className="text-[#D4AF37]">{coords.x}px</strong>, <strong className="text-[#D4AF37]">{coords.y}px</strong></span>
                  <span>STATUS: <strong className={isUnlocked ? "text-emerald-400" : "text-amber-500"}>{isUnlocked ? "OPEN" : "LOCKED"}</strong></span>
                </div>

                <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 font-mono text-[9px] text-zinc-500 pointer-events-none">
                  <span className={`w-1.5 h-1.5 rounded-full ${isUnlocked ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500 animate-pulse'}`}></span>
                  <span>SHACKLE_{isUnlocked ? 'DISENGAGED' : 'SECURED_OK'}</span>
                </div>

                {/* Animated holographic circular radar sweeping */}
                <div className="absolute w-52 h-52 border border-zinc-800/30 rounded-full pointer-events-none flex items-center justify-center">
                  <div className="w-40 h-40 border border-zinc-900/60 rounded-full" />
                </div>

                {/* Master Lock SVG */}
                <svg className="w-[190px] h-[190px] select-none z-10 relative cursor-pointer" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={triggerUnlockCycle}>
                  {/* Outer security scale ring */}
                  <circle cx="100" cy="115" r="88" stroke="rgba(212,175,55,0.03)" strokeWidth="1" />
                  <circle cx="100" cy="115" r="82" stroke="rgba(212,175,55,0.06)" strokeWidth="1.5" strokeDasharray="3 7" />
                  
                  {/* Animated heavy case-hardened shackle */}
                  <motion.g
                    animate={{ 
                      y: isUnlocked ? -26 : 0, 
                      rotate: isUnlocked ? 12 : 0,
                    }}
                    style={{ transformOrigin: "60px 115px" }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  >
                    {/* Shadow of Shackle */}
                    <path 
                      d="M 60,115 V 60 C 60,35 140,35 140,60 V 115" 
                      stroke="url(#shackleGrad)" 
                      strokeWidth="18" 
                      strokeLinecap="round" 
                    />
                    {/* Interior metal sheen core highlight */}
                    <path 
                      d="M 60,115 V 60 C 60,35 140,35 140,60 V 115" 
                      stroke="#ffffff" 
                      strokeWidth="2.5" 
                      strokeOpacity="0.15"
                      strokeLinecap="round" 
                    />
                  </motion.g>

                  {/* Lock Body Base - Traditional Dindigul Mango Profile */}
                  <g>
                    <path 
                      d="M 100,50 C 40,50 40,170 100,185 C 160,170 160,50 100,50 Z" 
                      fill="url(#bodyGrad)" 
                      stroke="#1e1e22" 
                      strokeWidth="2.5" 
                    />

                    {/* Highly precise gold face border */}
                    <path 
                      d="M 100,56 C 45,56 45,164 100,178 C 155,164 155,56 100,56 Z" 
                      stroke="#D4AF37" 
                      strokeWidth="1.2" 
                      strokeOpacity="0.45"
                    />

                    {/* Concentric glowing design rings */}
                    <circle cx="100" cy="115" r="42" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.15" />
                  </g>

                  {/* Core security steel levers that align dynamically when key is turned */}
                  <g opacity="0.9">
                    {/* Lever combo block 1 */}
                    <motion.rect 
                      x="70" 
                      y="85" 
                      width="60" 
                      height="6.5" 
                      rx="2" 
                      fill="#D4AF37" 
                      fillOpacity={isUnlocked ? "0.95" : "0.5"}
                      animate={{ x: isUnlocked ? 0 : -8 }}
                      transition={{ type: "spring", stiffness: 180, damping: 14 }}
                    />
                    
                    {/* Lever combo block 2 */}
                    <motion.rect 
                      x="66" 
                      y="96" 
                      width="68" 
                      height="6.5" 
                      rx="2" 
                      fill="#1d1d22" 
                      stroke="#D4AF37" 
                      strokeWidth="0.9"
                      strokeOpacity={isUnlocked ? "1.0" : "0.4"}
                      animate={{ x: isUnlocked ? 0 : 5 }}
                      transition={{ type: "spring", stiffness: 180, damping: 14 }}
                    />
                    
                    {/* Lever combo block 3 */}
                    <motion.rect 
                      x="70" 
                      y="107" 
                      width="60" 
                      height="6.5" 
                      rx="2" 
                      fill="#D4AF37" 
                      fillOpacity={isUnlocked ? "0.95" : "0.5"}
                      animate={{ x: isUnlocked ? 0 : -4 }}
                      transition={{ type: "spring", stiffness: 180, damping: 14 }}
                    />
                    
                    {/* Lever combo block 4 */}
                    <motion.rect 
                      x="64" 
                      y="118" 
                      width="72" 
                      height="6.5" 
                      rx="2" 
                      fill="#1d1d22" 
                      stroke="#D4AF37" 
                      strokeWidth="0.9"
                      strokeOpacity={isUnlocked ? "1.0" : "0.4"}
                      animate={{ x: isUnlocked ? 0 : 7 }}
                      transition={{ type: "spring", stiffness: 180, damping: 14 }}
                    />
                  </g>

                  {/* Rotating center key plug cylinder & rotating gold key */}
                  <g transform="translate(100, 145)">
                    <circle cx="0" cy="0" r="13" fill="#08080a" stroke="#D4AF37" strokeWidth="1.2" strokeOpacity="0.75" />
                    <path d="M -3.5,0 L -6.5,14 H 6.5 L 3.5,0 Z" fill="#08080a" stroke="#D4AF37" strokeWidth="1.2" strokeOpacity="0.75" />
                    
                    {/* Animated Solid Brass Key representation */}
                    <motion.g
                      animate={{ 
                        rotate: isUnlocked ? 180 : 0,
                        scale: isKeyAnimating ? 1.25 : 1
                      }}
                      transition={{ type: "spring", stiffness: 160, damping: 13 }}
                    >
                      {/* Master key spine */}
                      <line x1="0" y1="-8" x2="0" y2="10" stroke="#D4AF37" strokeWidth="3" />
                      {/* Round handle top */}
                      <circle cx="0" cy="-8" r="4.5" fill="none" stroke="#D4AF37" strokeWidth="2" />
                      {/* Precision cuts of a Dindigul Lever Key */}
                      <path d="M 0,2 H 5 V 5 H 0" fill="none" stroke="#D4AF37" strokeWidth="1.8" />
                      <path d="M 0,-1.5 H 4 V 1 H 0" fill="none" stroke="#D4AF37" strokeWidth="1.8" />
                    </motion.g>
                  </g>

                  {/* Glowing calibration pinpoint sensor indicators */}
                  <g opacity="0.75">
                    <circle cx="100" cy="50" r="2.5" fill="#D4AF37" />
                    <motion.circle 
                      cx="100" 
                      cy="50" 
                      r="4" 
                      stroke="#D4AF37" 
                      strokeWidth="0.75" 
                      animate={{ scale: [1, 2.5, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                    />
                  </g>

                  {/* Linear gradient elements definitions */}
                  <defs>
                    <linearGradient id="shackleGrad" x1="60" y1="40" x2="140" y2="115" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#3f3f46" />
                      <stop offset="0.3" stopColor="#a1a1aa" />
                      <stop offset="0.6" stopColor="#f4f4f5" />
                      <stop offset="1" stopColor="#18181b" />
                    </linearGradient>
                    <linearGradient id="bodyGrad" x1="100" y1="50" x2="100" y2="185" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#08080a" />
                      <stop offset="0.45" stopColor="#16161a" />
                      <stop offset="1" stopColor="#020202" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating System alerts if key is moving */}
                <AnimatePresence>
                  {systemAlert && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      className="absolute inset-x-8 bottom-6 px-3 py-1.5 rounded bg-[#D4AF37]/90 text-black font-semibold font-mono text-[9px] tracking-wider text-center flex items-center justify-center gap-1.5 shadow-lg backdrop-blur z-20"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping shrink-0" />
                      <span>{systemAlert}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Engaging interactive triggers block */}
              <div className="w-full mb-5 flex gap-2">
                <button
                  type="button"
                  onClick={triggerUnlockCycle}
                  disabled={isKeyAnimating}
                  className="w-full py-2.5 px-4 rounded bg-gradient-to-r from-zinc-900 to-zinc-950 hover:from-zinc-850 hover:to-zinc-900 border border-zinc-800 hover:border-[#D4AF37]/50 text-white font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow justify-self-stretch cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isUnlocked ? (
                    <>
                      <Lock className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
                      <span>Engage Lock Mechanism</span>
                    </>
                  ) : (
                    <>
                      <Key className="w-3.5 h-3.5 text-[#D4AF37] hover:rotate-45 transition-transform" />
                      <span>Turn Key & Unlock Spec</span>
                    </>
                  )}
                </button>
              </div>

              {/* Advanced specs table */}
              <div className="w-full space-y-2 pt-4 border-t border-zinc-900 flex-grow">
                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 pb-1 mb-1 border-b border-zinc-900">
                  <span>METROLOGICAL PROPERTY</span>
                  <span>RECORDED TOLERANCE</span>
                </div>
                {specHighlights.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center text-xs group/item hover:bg-zinc-900/35 px-1 rounded py-0.5 transition-colors">
                    <span className="text-zinc-500 font-mono text-[10px] flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#D4AF37]/45 group-hover/item:bg-[#D4AF37]" />
                      {spec.label}
                    </span>
                    <span className="text-zinc-300 font-medium font-serif">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Interactive Text with tab triggers */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
            {/* Header titles */}
            <span className="text-xs sm:text-sm font-bold text-black font-mono tracking-[0.25em] uppercase">
              ABOUT KP LOCKS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-stone-950 mt-3 leading-tight">
              Honoring Heritage,<br />
              <span className="text-black">Pioneering Security.</span>
            </h2>

            {/* Explanatory introduction */}
            <p className="mt-6 text-zinc-800 text-sm sm:text-base leading-relaxed">
              Dindigul has been famous across India for centuries for one singular thing: unpickable, heavy-duty handmade locks. 
              At <strong className="text-black">KP LOCKS</strong>, we keep this prestigious metal art alive. We make traditional solid locks 
              using precise methods passed down through families, offering strength that modern mass-production facilities simply cannot copy.
            </p>

            {/* Interactive tab triggers */}
            <div className="flex gap-2 sm:gap-4 border-b border-zinc-200 mt-8 pb-px overflow-x-auto scrollbar-none">
              {(['legacy', 'durability', 'secrets'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs sm:text-sm font-bold uppercase tracking-wider pb-3 border-b-2 transition-all duration-300 whitespace-nowrap px-1 cursor-pointer ${
                    activeTab === tab
                      ? 'border-black text-black'
                      : 'border-transparent text-zinc-400 hover:text-stone-950'
                  }`}
                  id={`tab-trigger-${tab}`}
                >
                  {tab === 'legacy' && 'Proven History'}
                  {tab === 'durability' && 'Uncompromising Build'}
                  {tab === 'secrets' && 'Lever Mechanics'}
                </button>
              ))}
            </div>

            {/* Active Tab Panel */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6"
            >
              <h4 className="font-serif text-lg font-medium text-black">
                {tabsContent[activeTab].title}
              </h4>
              <p className="mt-3 text-zinc-700 text-sm leading-relaxed">
                {tabsContent[activeTab].desc}
              </p>

              {/* Bullet details checkmarks */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tabsContent[activeTab].metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-800">
                    <ShieldCheck className="w-4.5 h-4.5 text-black shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
