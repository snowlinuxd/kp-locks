import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, 
  ShieldAlert, 
  Sparkles, 
  Settings, 
  Wrench, 
  Maximize2, 
  X, 
  CheckCircle2, 
  ArrowRight,
  Info,
  Layers,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { CONTACT_NUMBERS } from '../data/locksData';

interface Product {
  id: string;
  name: string;
  category: 'traditional' | 'heavy-duty' | 'bespoke';
  rating: string;
  weight: string;
  level: number; // Security rating out of 10
  levers: number; // Number of levers
  materials: string[];
  shortDesc: string;
  longDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  keyType: string;
  historicalNote: string;
  image: string;
}

export default function LocksShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'traditional' | 'heavy-duty' | 'bespoke'>('all');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const products: Product[] = [
    {
      id: "manga-double",
      name: "KP Premium Brass Aldrop Lock",
      category: "traditional",
      rating: "9.9/10",
      weight: "1.8 kg",
      level: 10,
      levers: 12,
      materials: ["100% Solid Brass"],
      shortDesc: "Premium handcrafted brass aldrop lock designed for residential and commercial doors.",
      longDesc: "The KP Premium Brass Aldrop Lock is manufactured using high-grade solid brass for maximum durability and corrosion resistance.",
      icon: Lock,
      keyType: "Hand-milled Symmetrical Brass Keys (Pair)",
      historicalNote: "Invented in the early 20th century to protect temple vaults and sovereign treasuries across southern India.",
      image: "/KP Premium Brass Aldrop Lock.png"
    },
    {
      id: "shackle-fortress",
      name: "KP Stainless Steel Mortise Lock",
      category: "traditional",
      rating: "10/10",
      weight: "2.2 kg",
      level: 10,
      levers: 10,
      materials: ["SS 304 Stainless Steel"],
      shortDesc: "Premium stainless steel mortise lock for modern residential and commercial applications.",
      longDesc: "The KP Stainless Steel Mortise Lock is engineered for superior performance and durability. Manufactured from SS 304 stainless steel, it offers excellent resistance against rust, moisture, and wear.",
      icon: ShieldCheck,
      keyType: "Laser-Cut Security Dimple Keys",
      historicalNote: "Commonly deployed in remote railway junction facilities and heavy industrial cargo lockers.",
      image: "/KP Stainless Steel Mortise Lock.png"
    },
    {
      id: "decoy-puzzle",
      name: "KP Traditional Dindigul Box Lock",
      category: "traditional",
      rating: "9.5/10",
      weight: "3.5 kg",
      level: 9,
      levers: 8,
      materials: ["Solid Brass Body with Steel Internal Mechanism"], 
      shortDesc: "Authentic handcrafted Dindigul lock built using traditional locking technology.",
      longDesc: "Inspired by the world-famous Dindigul lock-making tradition, this lock is handcrafted by skilled artisans using time-tested manufacturing techniques.",
      icon: Sparkles,
      keyType: "Double-profile Fluted Barrel Key",
      historicalNote: "Handcrafted primarily for storing traditional heirloom jewelry and ancestral document chests.",
      image: "/KP Traditional Dindigul Box Lock.png"
    },
    {
      id: "sada-square-iron",
      name: "KP Fortress Door Lock System",
      category: "heavy-duty",
      rating: "9.7/10",
      weight: "5.0 kg",
      level: 9,
      levers: 9,
      materials: ["Hardened Steel & Stainless Steel"], 
      shortDesc: "Industrial-grade lock system designed for maximum protection.",
      longDesc: "The KP Fortress Door Lock System is built for environments where security is critical. Manufactured using hardened steel and stainless steel components, this lock delivers exceptional resistance against forced entry, tampering, and harsh environmental conditions.",
      icon: Lock,
      keyType: "Extra-long 6-inch Heavy Gauge Lever Key",
      historicalNote: "Initially constructed to secure royal storehouses and grain reserves against monsoon weather and heavy impacts.",
      image: "/KP Fortress Door Lock System.png"
    },
    {
      id: "bell-alarm-lock",
      name: "KP Secure Cash Safe Locker",
      category: "bespoke",
      rating: "9.6/10",
      weight: "18kg",
      level: 9,
      levers: 8,
      materials: ["Heavy-Gauge Mild Steel with Powder-Coated Finish"],
      shortDesc: "Secure storage solution for cash, documents, jewelry, and valuables.",
      longDesc: "The KP Secure Cash Safe Locker combines strength, durability, and reliability. Constructed from reinforced mild steel with a premium powder-coated finish, it protects valuable assets from theft and unauthorized access.",
      icon: ShieldAlert,
      keyType: "Bespoke Dual-Pin Axial Key",
      historicalNote: "A 19th-century luxury design rediscovered in modern estate safety restorations.",
      image: "/KP Secure Cash Safe Locker.png"
    },
    {
      id: "smart-brass-mortise",
      name: "KP Classic Iron Padlock",
      category: "traditional",
      rating: "9.8/10",
      weight: "1.2 kg",
      level: 10,
      levers: 10,
      materials: ["Hardened Iron & Steel"],
      shortDesc: "Heavy-duty traditional padlock designed for everyday security needs.",
      longDesc: "The KP Classic Iron Padlock features a robust iron body with hardened steel locking components. Designed to withstand tampering and harsh outdoor conditions, it provides dependable security for gates, shutters, storage units, warehouses, and industrial facilities.",
      icon: Settings,
      keyType: "Symmetric Triple-Channel Dimple Key",
      historicalNote: "Specially designed for luxury heritage resorts and high-end residential doors.",
      image: "/KP Classic Iron Padlock.png"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section 
      className="bg-white py-24 border-t border-zinc-200 w-full relative select-none overflow-hidden"
      id="products-showcase"
    >
      {/* Background glow flares */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-black/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-8xl mx-auto px-6 sm:px-12 lg:px-16 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-black font-bold uppercase py-1 px-3 bg-black/5 border border-black/15 rounded-full inline-block">
            SECURITY MASTERPIECES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-stone-950 mt-4">
            The Artisan <span className="text-black italic font-normal">Collection</span>
          </h2>
          <div className="h-[1.5px] w-24 bg-gradient-to-r from-transparent via-black to-transparent mx-auto mt-4 mb-4"></div>
          <p className="text-sm sm:text-base text-zinc-700 font-sans">
            A comprehensive catalog of our legendary products. Every single item represents hours of manual anvil forging, case temperings, and hand-filed key tolerances.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-4 mb-12">
          {([
            { id: 'all', label: 'All Artifacts' },
            { id: 'traditional', label: 'Traditional Masterpieces' },
            { id: 'heavy-duty', label: 'Heavy-Duty Security' },
            { id: 'bespoke', label: 'Bespoke & Puzzle Locks' }
          ] as const).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 sm:px-6 py-2.5 rounded text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-black text-white border-black shadow-[0_4px_15px_rgba(0,0,0,0.3)]'
                  : 'bg-zinc-100 text-zinc-700 border-zinc-200/85 hover:border-black hover:text-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p, idx) => {
                const IconComp = p.icon;
                return (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ 
                      y: -12, 
                      scale: 1.035,
                      rotateY: 8,
                      boxShadow: "0 25px 50px -12px rgba(82, 57, 39, 0.65), 0 0 25px rgba(212, 175, 55, 0.15)",
                    }}
                    transition={{ 
                      layout: { type: "spring", stiffness: 300, damping: 25 },
                      scale: { type: "spring", stiffness: 300, damping: 20 },
                      y: { type: "spring", stiffness: 300, damping: 20 },
                      rotateY: { type: "spring", stiffness: 300, damping: 20 },
                      duration: 0.35,
                      delay: idx * 0.05
                    }}
                    className="relative p-6 rounded bg-neutral-950 border border-zinc-850 hover:border-[#D4AF37]/50 shadow-xl overflow-hidden cursor-pointer flex flex-col justify-between group"
                    style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                  >
                    {/* Decorative faint glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div>
                      {/* Top Status Indicators */}
                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="text-[10px] font-mono uppercase bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-0.5 rounded border border-[#D4AF37]/20">
                          {p.category}
                        </span>
                        <span className="text-xs font-mono font-bold text-zinc-400 flex items-center gap-1">
                          Weight: <span className="text-white font-sans">{p.weight}</span>
                        </span>
                      </div>

                      {/* Lock Image Display */}
                      <div className="relative w-full h-64 overflow-hidden rounded bg-black/60 border border-zinc-800/80 mb-4.5 group-hover:border-[#D4AF37]/35 transition-all flex items-center justify-center">
                        {imageErrors[p.id] ? (
                          <div className="absolute inset-0 bg-gradient-to-br from-[#1c140d]/80 via-[#0d0a08] to-stone-950 flex flex-col items-center justify-center text-center p-4">
                            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-2 group-hover:bg-[#D4AF37]/20 group-hover:scale-110 transition-all duration-300">
                              <IconComp className="w-5.5 h-5.5" />
                            </div>
                            <span className="text-[11px] font-mono tracking-wider text-amber-500/85 uppercase font-semibold">Artisan Forge Masterpiece</span>
                            <span className="text-[9px] font-mono text-zinc-500/80 uppercase mt-1">KP Forge Registered</span>
                          </div>
                        ) : (
                          <>
                            <img 
                              src={p.image} 
                              alt={p.name} 
                              referrerPolicy="no-referrer"
                              onError={() => setImageErrors(prev => ({ ...prev, [p.id]: true }))}
                              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                              id={`lock-img-${p.id}`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                          </>
                        )}
                      </div>

                      {/* Product Icon & Title */}
                      <div className="flex items-center gap-3.5 mb-4 group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                        <div className="w-10 h-10 rounded bg-zinc-900/60 border border-zinc-800 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37]/50 transition-colors shrink-0">
                          <IconComp className="w-4.5 h-4.5" />
                        </div>
                        <h3 className="font-serif text-[15px] sm:text-base font-medium text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                          {p.name}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-6">
                        {p.shortDesc}
                      </p>
                    </div>

                    <div>
                      {/* Action button */}
                      <button
                        onClick={() => setModalProduct(p)}
                        className="w-full py-2.5 rounded bg-zinc-900/60 border border-zinc-800 hover:border-[#D4AF37]/35 text-[#D4AF37] text-[11px] font-mono uppercase font-bold tracking-wider hover:bg-zinc-800/60 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Show Technical Specs</span>
                        <Maximize2 className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>


      </div>

      {/* TECHNICAL OVERLAY MODAL */}
      <AnimatePresence>
        {modalProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalProduct(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-black border border-[#D4AF37]/30 rounded-lg p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto z-10"
            >
              {/* Gold Top Borders */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

              {/* Close Button */}
              <button 
                onClick={() => setModalProduct(null)}
                className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white rounded bg-zinc-900 border border-zinc-800"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Info */}
              <div className="mb-6">
                <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.2em] uppercase font-bold">
                  ARTISAN SECURE BLUEPRINT SPEC
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mt-1">
                  {modalProduct.name}
                </h3>
                <p className="text-xs text-zinc-500 font-mono mt-0.5 uppercase">
                  Class: {modalProduct.category} | Handcrafted Series
                </p>
              </div>

              {/* Detailed Technical Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-800">
                {/* Column 1: Material and specifications */}
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Material Infrastructure
                  </h4>
                  <ul className="space-y-2.5">
                    {modalProduct.materials.map((m, i) => (
                      <li key={i} className="text-xs sm:text-sm text-zinc-200 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 bg-black border border-zinc-800 p-4 rounded">
                    <h5 className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">Key Specification</h5>
                    <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                      {modalProduct.keyType}
                    </p>
                  </div>
                </div>

                {/* Column 2: Mechanics & History */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-[#D4AF37]" />
                      Chamber Integration
                    </h4>
                    <div className="space-y-2 text-xs sm:text-sm text-zinc-300">
                      <div className="flex justify-between py-1.5 border-b border-zinc-800/40">
                        <span className="text-zinc-500">Heirloom Weight:</span>
                        <span className="font-bold text-white">{modalProduct.weight}</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-zinc-800/40">
                        <span className="text-zinc-500">Security Levers:</span>
                        <span className="font-bold text-[#D4AF37]">{modalProduct.levers} Levers</span>
                      </div>
                      <div className="flex justify-between py-1.5">
                        <span className="text-zinc-500">Bypass Resilience:</span>
                        <span className="font-bold text-emerald-400">Class A Impervious</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 border-l-2 border-[#D4AF37]/50 pl-3.5 italic text-xs text-zinc-400">
                    <span className="font-sans font-bold text-[#D4AF37] block not-italic text-[10px] uppercase tracking-wider mb-1">
                      Historical Legacy:
                    </span>
                    &ldquo;{modalProduct.historicalNote}&rdquo;
                  </div>
                </div>
              </div>

              {/* Long Description */}
              <div className="mt-6 pt-5 border-t border-zinc-800">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Internal Mechanics Overview</h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {modalProduct.longDesc}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-5 border-t border-zinc-800 flex flex-col sm:flex-row gap-3.5 items-center justify-between">
                <p className="text-[11px] text-zinc-500 font-mono">
                  Refer: KP LOCKS TRADITIONAL series
                </p>
                <a 
                  href={`tel:${CONTACT_NUMBERS[0].phone}`}
                  className="w-full sm:w-auto px-6 py-2.5 rounded bg-[#D4AF37] hover:bg-[#b58920] text-black text-xs font-mono font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
                >
                  <span>Request Dynamic Catalog Call</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
