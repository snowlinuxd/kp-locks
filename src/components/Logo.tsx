import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = '', light = false }: LogoProps) {
  const textColor = light ? 'text-white' : 'text-zinc-900';
  const subTextColor = light ? 'text-zinc-400' : 'text-zinc-600';
  const boxColor = light ? 'border-zinc-700' : 'border-zinc-300';

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* KP Header Letters */}
      <div className="flex items-baseline justify-center relative translate-y-1">
        {/* Customized Logo "K" */}
        <svg
          className="h-16 w-16"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stem: Thin vertical line on left, thicker vertical bar on right */}
          <rect x="24" y="20" width="3" height="60" fill={light ? '#ffffff' : '#000000'} />
          <rect x="31" y="20" width="9" height="60" fill={light ? '#ffffff' : '#000000'} />
          
          {/* Upper right diagonal: Black / White */}
          <path
            d="M 40,46 C 45,46 45,46 65,24 L 75,24 L 48,50 Z"
            fill={light ? '#ffffff' : '#000000'}
          />
          
          {/* Lower right diagonal: Antique Gold */}
          <path
            d="M 40,51 L 48,50 L 73,76 L 63,76 Z"
            fill="#D4AF37"
          />
        </svg>

        {/* Customized Logo "P" */}
        <svg
          className="h-16 w-16 -ml-4"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="30" y="20" width="10" height="60" fill={light ? '#ffffff' : '#000000'} />
          <path
            d="M 30,20 H 60 C 72,20 78,28 78,38 C 78,48 72,56 60,56 H 40 V 56 H 30 Z"
            fill={light ? '#ffffff' : '#000000'}
          />
          {/* Inner negative space for P */}
          <path
            d="M 40,30 H 58 C 64,30 68,33 68,38 C 68,43 64,46 58,46 H 40 Z"
            fill={light ? '#121214' : '#ffffff'}
          />
        </svg>
      </div>

      {/* Frame Box and Text */}
      <div className="w-full max-w-[340px] px-3 relative mt-1">
        {/* Outer frame: thin black border with gaps top and bottom */}
        <div className="relative border-x border-b border-t pt-2 pb-3 px-4 rounded-sm flex flex-col items-center" 
          style={{ 
            borderColor: light ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.8)',
            borderTopColor: 'transparent' // Allow space open at the top
          }}
        >
          {/* Top gap lines that frame the KP */}
          <div className="absolute top-0 left-0 w-20 border-t" style={{ borderColor: light ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)' }}></div>
          <div className="absolute top-0 right-0 w-24 border-t" style={{ borderColor: light ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)' }}></div>

          {/* LOCKS & UNLOCKS label */}
          <div className="flex items-center justify-between w-full tracking-[0.25em] text-xs font-bold text-center select-none uppercase mt-1">
            <span className={textColor}>L</span>
            {/* O with Locked Lock Icon */}
            <span className="inline-flex items-center justify-center mx-0.5 relative -top-[1px]">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="11" width="14" height="11" rx="2" ry="2" fill={light ? '#ffffff' : '#000000'} stroke={light ? '#ffffff' : '#000000'} />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                <circle cx="12" cy="16" r="1.5" fill={light ? '#121214' : '#ffffff'} stroke="none" />
              </svg>
            </span>
            <span className={textColor}>C K S</span>
            <span className="mx-2 text-[#D4AF37] font-semibold">&amp;</span>
            <span className={textColor}>U N L</span>
            {/* O with Unlocked Lock Icon */}
            <span className="inline-flex items-center justify-center mx-0.5 relative -top-[2px]">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="11" width="14" height="11" rx="2" ry="2" fill={light ? '#ffffff' : '#000000'} stroke={light ? '#ffffff' : '#000000'} />
                <path d="M7 11V7a5 5 0 0 1 9.5-2.2" /> {/* Open shackle shape */}
                <circle cx="12" cy="16" r="1.5" fill={light ? '#121214' : '#ffffff'} stroke="none" />
              </svg>
            </span>
            <span className={textColor}>C K S</span>
          </div>

          {/* Tagline section at bottom of box */}
          <div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 flex items-center justify-center w-full px-2">
            <div className="h-[2px] w-5 bg-[#D4AF37]"></div>
            <p className="px-2 text-[9px] whitespace-nowrap font-medium tracking-normal text-zinc-400 select-none bg-[#121214] text-[#D4AF37] border border-zinc-800 rounded px-1.5 py-0.5">
              Trust is the key that opens every lock
            </p>
            <div className="h-[2px] w-5 bg-[#D4AF37]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
