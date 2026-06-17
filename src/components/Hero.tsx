import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX, Play, Pause, RefreshCw } from 'lucide-react';

const AMBER_EMBERS = [
  { left: '12%', duration: '4.2s', delay: '0.5s', drift: '30px', size: '2px', bg: 'bg-orange-500' },
  { left: '28%', duration: '5.8s', delay: '1.2s', drift: '-20px', size: '3px', bg: 'bg-amber-500' },
  { left: '42%', duration: '3.6s', delay: '0.5s', drift: '45px', size: '2.5px', bg: 'bg-yellow-500' },
  { left: '55%', duration: '6.2s', delay: '2.5s', drift: '-35px', size: '4px', bg: 'bg-[#D4AF37]' },
  { left: '68%', duration: '4.8s', delay: '1.8s', drift: '25px', size: '3px', bg: 'bg-orange-600' },
  { left: '85%', duration: '5.2s', delay: '0.8s', drift: '-40px', size: '2px', bg: 'bg-amber-400' },
  { left: '18%', duration: '6.5s', delay: '3.2s', drift: '15px', size: '3px', bg: 'bg-yellow-600' },
  { left: '35%', duration: '4.0s', delay: '2.1s', drift: '-10px', size: '2px', bg: 'bg-[#D4AF37]' },
  { left: '50%', duration: '5.0s', delay: '4.0s', drift: '35px', size: '3.5px', bg: 'bg-orange-500' },
  { left: '76%', duration: '4.5s', delay: '1.5s', drift: '-25px', size: '4px', bg: 'bg-amber-500' },
  { left: '92%', duration: '6.0s', delay: '0.2s', drift: '20px', size: '2px', bg: 'bg-[#D4AF37]' },
  { left: '8%', duration: '5.5s', delay: '2.8s', drift: '-15px', size: '3px', bg: 'bg-orange-400' },
  { left: '64%', duration: '3.8s', delay: '3.5s', drift: '50px', size: '2px', bg: 'bg-[#D4AF37]' },
  { left: '80%', duration: '5.9s', delay: '4.8s', drift: '-30px', size: '3px', bg: 'bg-amber-600' },
  { left: '22%', duration: '4.7s', delay: '0.9s', drift: '40px', size: '4px', bg: 'bg-yellow-500' }
];

const VIDEO_SOURCES = [
  "/video.mp4",
  "https://vjs.zencdn.net/v/oceans.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-fire-and-sparks-of-a-metal-forging-machine-42416-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-welding-sparks-falling-in-slow-motion-41221-large.mp4"
];

const POSTER_IMAGE = "https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?auto=format&fit=crop&w=1920&q=80";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [videoSrcIndex, setVideoSrcIndex] = useState(0);

  const activeVideoSrc = VIDEO_SOURCES[videoSrcIndex];

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleVideoError = () => {
    console.warn(`Video source index ${videoSrcIndex} failed to load. Trying next available source if any.`);
    if (videoSrcIndex < VIDEO_SOURCES.length - 1) {
      setVideoSrcIndex(prev => prev + 1);
    } else {
      console.error("All fallback video sources failed to load. Falling back to ambient blacksmith graphics.");
      setHasVideoError(true);
    }
  };

  useEffect(() => {
    // Force muted and attempt to safely play the video on source change
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasVideoError(false);
        })
        .catch((err) => {
          console.log("Video playback or autoplay was delayed or prevented:", err);
        });
    }
  }, [activeVideoSrc]);

  return (
    <section 
      className="relative w-full aspect-video md:min-h-[85vh] lg:min-h-screen bg-black flex items-center justify-center overflow-hidden z-20"
      id="hero"
    >
      {/* Cinematic Fullscreen Background Video & Art Fallback */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden select-none bg-[#0a0604]">
        {/* Blacksmith Forge Glow Fallback (Always active behind, or if video is blocked) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Subtle hot embers furnace ambient glow */}
          <div className="absolute -bottom-1/4 left-1/4 right-1/4 h-[80%] rounded-full bg-gradient-to-t from-amber-950/40 via-orange-950/20 to-transparent blur-[120px] animate-forge-glow" />
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black via-zinc-950/35 to-transparent" />
          
          {/* 15 floating brass/gold embers rising up */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            {AMBER_EMBERS.map((ember, index) => (
              <span
                key={index}
                className={`absolute bottom-[-10px] ${ember.bg} rounded-full animate-ember`}
                style={{
                  left: ember.left,
                  width: ember.size,
                  height: ember.size,
                  boxShadow: `0 0 12px 1.5px ${ember.bg.includes('orange') ? '#ea580c' : ember.bg.includes('amber') ? '#d97706' : '#d4af37'}`,
                  '--ember-duration': ember.duration,
                  '--ember-drift': ember.drift,
                  animationDelay: ember.delay,
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>

        <video
          ref={videoRef}
          src={activeVideoSrc}
          autoPlay
          muted
          loop
          playsInline
          onPlay={() => {
            setHasVideoError(false);
            setIsPlaying(true);
          }}
          onError={handleVideoError}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${hasVideoError ? 'opacity-30' : 'opacity-100'}`}
          id="hero-bg-video"
        />
        {/* Subtle cinematic header shadow vignette to ensure top navigation remains visible */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10" />
      </div>

      {/* Clean Minimalist Playback Controls HUD */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 bg-black/75 border border-zinc-800/80 px-6 py-3.5 rounded-full backdrop-blur-md shadow-2xl">
        <button
          onClick={togglePlay}
          className="flex items-center justify-center p-2 rounded-full text-zinc-300 hover:text-[#D4AF37] hover:bg-zinc-800/55 transition-all cursor-pointer"
          title={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-[#D4AF37]/10" />}
        </button>

        <span className="w-px h-5 bg-zinc-800" />

        <button
          onClick={toggleMute}
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-full text-[#D4AF37] hover:text-white hover:bg-zinc-800/55 transition-all cursor-pointer text-xs font-mono font-bold uppercase tracking-widest"
          title={isMuted ? "Unmute Sound" : "Mute Sound"}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-5 h-5 text-red-400" />
              <span className="text-red-400">Click to Unmute Sound</span>
            </>
          ) : (
            <>
              <Volume2 className="w-5 h-5 animate-pulse" />
              <span className="text-emerald-400">Audio Playing</span>
            </>
          )}
        </button>

        <span className="w-px h-5 bg-zinc-800" />

        <button
          onClick={handleRestart}
          className="flex items-center justify-center p-2 rounded-full text-zinc-300 hover:text-[#D4AF37] hover:bg-zinc-800/55 transition-all cursor-pointer"
          title="Restart Video from Beginning"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
