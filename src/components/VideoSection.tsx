import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Sparkles, Shield, Compass, Key, Cpu } from 'lucide-react';

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
}

function SparkCanvas({ triggerBurst }: { triggerBurst: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas.parentElement || canvas);

    const colors = [
      'rgba(251, 191, 36, ',  // Amber-400
      'rgba(245, 158, 11, ',  // Amber-500
      'rgba(239, 68, 68, ',   // Red-500
      'rgba(255, 255, 255, ', // White hot
      'rgba(253, 224, 71, ',  // Yellow-300
    ];

    const createSpark = (x: number, y: number, isBurst = false): Spark => {
      const angle = isBurst
        ? Math.random() * Math.PI * 2
        : -Math.PI / 2 + (Math.random() - 0.5) * 1.5; // Upward spray
      const speed = isBurst
        ? Math.random() * 5 + 2
        : Math.random() * 2.5 + 0.8;

      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (isBurst ? 0 : 0.6),
        size: Math.random() * 2.5 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1.0,
        decay: Math.random() * 0.012 + 0.006,
      };
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Randomly spawn ambient forge sparks rising from the bottom container
      if (Math.random() < 0.35) {
        sparksRef.current.push(createSpark(Math.random() * width, height - 5, false));
      }

      const activeSparks = sparksRef.current;
      for (let i = activeSparks.length - 1; i >= 0; i--) {
        const s = activeSparks[i];
        
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.012; // Slight gravity pull downward
        s.alpha -= s.decay;

        if (s.alpha <= 0 || s.x < 0 || s.x > width || s.y < 0 || s.y > height) {
          activeSparks.splice(i, 1);
          continue;
        }

        // Draw elongated glowing trail
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 1.8, s.y - s.vy * 1.8);
        ctx.strokeStyle = `${s.color}${s.alpha})`;
        ctx.lineWidth = s.size;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, []);

  // Erupt sparks on click/lock unlock command!
  useEffect(() => {
    if (triggerBurst === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const width = canvas.width;
    const height = canvas.height;

    // Erupt from the exact center lock core coordinates (approx middle of container card)
    const centerX = width / 2;
    const centerY = height * 0.36;

    const colors = [
      'rgba(255, 230, 100, ', // Shiny golden
      'rgba(259, 115, 22, ',  // Sharp Orange
      'rgba(220, 38, 38, ',   // Hot Amber Red
      'rgba(255, 255, 255, ', // White hot metal
    ];

    const activeSparks = sparksRef.current;
    for (let i = 0; i < 55; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5.5 + 2.5;
      activeSparks.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3.2 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1.0,
        decay: Math.random() * 0.015 + 0.01,
      });
    }
  }, [triggerBurst]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

export default function VideoSection() {
  const [showBlast, setShowBlast] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [burstCounter, setBurstCounter] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle a fun interactive hover that mimics "unlocking" the traditional security core
  const handleMouseEnterUnlock = () => {
    if (!unlocked) {
      setBurstCounter(prev => prev + 1);
      setShowBlast(true);
      setUnlocked(true);
    }
  };

  const handleMouseLeaveUnlock = () => {
    setUnlocked(false);
    setShowBlast(false);
  };

  return (
    <section 
      className="bg-black py-16 border-t border-zinc-900/60 w-full relative overflow-hidden select-none"
      id="showcase"
    >
      {/* 1. Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden select-none pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onError={() => {
            console.warn("Showcase background video loading error, fallback active");
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          id="showcase-bg-video"
        >
          <source src="/video.mp4" type="video/mp4" />
          <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-welding-sparks-falling-in-slow-motion-41221-large.mp4" type="video/mp4" />
        </video>
        {/* Soft vignette to blend and keep text readable */}
        <div className="absolute inset-0 bg-black/90 z-10" />
      </div>

      {/* 2. Cybernetic grid backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.02),transparent_70%)] pointer-events-none z-10" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent pointer-events-none z-10" />

      <div className="max-w-8xl mx-auto px-6 sm:px-12 lg:px-16 relative z-20">
        
        {/* Main interactive chassis block */}
        <div className="relative rounded overflow-hidden bg-zinc-950/40 border border-zinc-800 shadow-2xl p-6 sm:p-10 lg:p-14 text-center flex flex-col items-center justify-center min-h-[300px]">
          
          {/* Spark canvas element */}
          <SparkCanvas triggerBurst={burstCounter} />
          
          {/* Subtle slow spinning digital camera overlay brackets */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-zinc-700/60 rounded-tl-sm"></div>
          <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-zinc-700/60 rounded-tr-sm"></div>
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-zinc-700/60 rounded-bl-sm"></div>
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-zinc-700/60 rounded-br-sm"></div>

          {/* Glowing lens spotlight overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient from-transparent via-transparent to-black/85 pointer-events-none z-10" />

          {/* Header context tag */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3 py-1 rounded bg-[#D4AF37]/5 border border-[#D4AF37]/20 z-20 mb-6"
          >
            <Compass className="w-3.5 h-3.5 text-[#D4AF37] animate-spin" style={{ animationDuration: '6s' }} />
            <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] font-extrabold uppercase text-[#D4AF37]">
              CINEMATIC CRAFT SHOWCASE
            </span>
          </motion.div>

          {/* Heavy central Lock core interface */}
          <div 
            className="relative w-32 h-32 flex items-center justify-center z-20 mb-8 cursor-pointer group animate-fade-in"
            onMouseEnter={handleMouseEnterUnlock}
            onMouseLeave={handleMouseLeaveUnlock}
          >
            
            {/* Spinning orbital cyber ring */}
            <motion.div 
              animate={{ rotate: unlocked ? 180 : 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-dashed border-[#D4AF37]/35 group-hover:border-[#D4AF37]/75 transition-colors"
            />
            
            {/* Locked vs Unlocked mechanical core (svg triggers) */}
            <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-inner relative z-10">
              <AnimatePresence mode="wait">
                {unlocked ? (
                  <motion.div
                    key="unlocked"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="flex flex-col items-center justify-center text-[#D4AF37]"
                  >
                    <Key className="w-8 h-8 text-[#D4AF37] stroke-[2.5]" />
                    <span className="text-[8px] font-mono tracking-widest uppercase mt-1">OPEN</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="locked"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="flex flex-col items-center justify-center text-zinc-400 group-hover:text-white transition-colors"
                  >
                    <Shield className="w-8 h-8 text-[#D4AF37] stroke-[2.5] animate-pulse" />
                    <span className="text-[8px] font-mono tracking-widest uppercase mt-1">SECURE</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Spark bursts on hover/tap */}
            {showBlast && (
              <span className="absolute inset-0 rounded-full border border-[#D4AF37]/70 animate-ping" />
            )}
          </div>

          {/* Interactive display instruction above title */}
          <p className="text-[10px] font-mono tracking-wider text-[#D4AF37]/80 uppercase z-20 mb-4 h-5">
            {unlocked ? "Hover away to Lock Mechanism" : "Hover Center to Unlock Mechanical Core"}
          </p>

          {/* Main Overlay Title */}
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-none z-20">
            Where Tradition Meets <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-white via-[#f3e5ab] to-[#D4AF37] bg-clip-text text-transparent italic font-normal">
              Modern Security
            </span>
          </h2>

          <p className="mt-6 text-stone-400 text-xs sm:text-sm max-w-xl leading-relaxed z-20">
            A harmonious integration. Dindigul lock designs maintain physical pick safety ratios, while custom key contours protect modern high-security thresholds. Secure your home with generations of craft experience.
          </p>

          {/* Action indicator row */}
          <div className="mt-10 flex items-center justify-center gap-6 z-20 flex-wrap">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-zinc-400">
              <Cpu className="w-4 h-4 text-[#D4AF37]" />
              <span>Cybernetic Alignment</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-zinc-400">
              <Key className="w-4 h-4 text-[#D4AF37]" />
              <span>Hardened Keys</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-zinc-400">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Aesthetic Brass Finish</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
