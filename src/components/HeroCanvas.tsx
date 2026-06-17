import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
  decay: number;
  type: 'spark' | 'digital';
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Track mouse coordinates
    const mouse = { x: -1000, y: -1000, radius: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const particles: Particle[] = [];
    const maxParticles = 65;

    // Create a particle
    const createParticle = (type?: 'spark' | 'digital'): Particle => {
      const isSpark = type ? type === 'spark' : Math.random() > 0.4;
      const x = Math.random() * width;
      const y = isSpark ? height + 10 : Math.random() * height; // sparks rise from bottom, digital float around
      const maxLife = isSpark ? 100 + Math.random() * 150 : 300 + Math.random() * 200;

      return {
        x,
        y,
        size: isSpark ? 1.5 + Math.random() * 2.5 : 1 + Math.random() * 1.5,
        color: isSpark 
          ? `hsla(${25 + Math.random() * 20}, 100%, ${60 + Math.random() * 25}%, ${0.6 + Math.random() * 0.4})` // Warm fiery/gold colors
          : `rgba(212, 175, 55, ${0.1 + Math.random() * 0.25})`, // subtle gold digital glow
        speedX: isSpark ? (Math.random() - 0.5) * 1.5 : (Math.random() - 0.5) * 0.4,
        speedY: isSpark ? -(1 + Math.random() * 2.5) : -(0.2 + Math.random() * 0.5), // rise upwards
        life: Math.random() * 50, // initial lifespan offset
        maxLife,
        decay: isSpark ? 0.4 + Math.random() * 0.6 : 0.1 + Math.random() * 0.25,
        type: isSpark ? 'spark' : 'digital'
      };
    };

    // Instantiate initial particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle());
    }

    // Modern lock overlay gears background
    let angle = 0;

    const drawSecurityCircles = (context: CanvasRenderingContext2D) => {
      context.save();
      // Tech-grid circle in background
      context.strokeStyle = 'rgba(212, 175, 55, 0.04)';
      context.lineWidth = 1;
      
      const centerX = width * 0.8;
      const centerY = height * 0.5;

      context.beginPath();
      context.arc(centerX, centerY, 220, 0, Math.PI * 2);
      context.stroke();

      context.beginPath();
      context.arc(centerX, centerY, 140, 0, Math.PI * 2);
      context.stroke();

      // Spinning gear teeth simulation
      context.translate(centerX, centerY);
      context.rotate(angle);
      
      context.strokeStyle = 'rgba(212, 175, 55, 0.08)';
      context.setLineDash([4, 12]);
      context.beginPath();
      context.arc(0, 0, 180, 0, Math.PI * 2);
      context.stroke();

      context.setLineDash([]);
      context.restore();

      // Left-side geometric security shield lines
      context.save();
      context.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      context.beginPath();
      for (let i = 0; i < width; i += 80) {
        context.moveTo(i, 0);
        context.lineTo(i, height);
      }
      for (let j = 0; j < height; j += 80) {
        context.moveTo(0, j);
        context.lineTo(width, j);
      }
      context.stroke();
      context.restore();
    };

    // Animation Loop
    const render = () => {
      ctx.fillStyle = '#000000'; // black background
      ctx.fillRect(0, 0, width, height);

      // 1. Draw glowing digital security blueprints in background
      drawSecurityCircles(ctx);
      angle += 0.001;

      // 2. Draw & update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life += p.decay;

        // Apply mouse interaction (subtle magnetic repel / attract)
        if (mouse.x !== -1000) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Sparks jump/disperse away, digital particles align
            if (p.type === 'spark') {
              p.x += (dx / dist) * force * 3;
              p.y += (dy / dist) * force * 3;
            } else {
              p.x += (dx / dist) * force * -1;
              p.y += (dy / dist) * force * -1;
            }
          }
        }

        // Apply velocities
        p.x += p.speedX;
        p.y += p.speedY;

        // Custom wind-drift over time
        if (p.type === 'spark') {
          p.speedX += (Math.sin(p.life / 20) * 0.02);
        }

        // Check if out of bounds or dead
        if (p.life >= p.maxLife || p.y < -10 || p.x < -10 || p.x > width + 10) {
          particles[i] = createParticle(p.type);
          continue;
        }

        // Draw particle representation
        ctx.beginPath();
        if (p.type === 'spark') {
          // Draw as realistic sparks with tail
          const tailX = p.x - p.speedX * 3;
          const tailY = p.y - p.speedY * 3;
          const grad = ctx.createLinearGradient(p.x, p.y, tailX, tailY);
          grad.addColorStop(0, p.color);
          grad.addColorStop(1, 'rgba(212, 175, 55, 0)');
          
          ctx.strokeStyle = grad;
          ctx.lineWidth = p.size;
          ctx.lineCap = 'round';
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();
        } else {
          // Draw as digital dust circles with glow
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 4;
          ctx.shadowColor = '#D4AF37';
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      }

      // 3. Ambient golden spotlight on bottom edge (the forge glow)
      const gradient = ctx.createLinearGradient(width / 2, height, width / 2, height - 140);
      gradient.addColorStop(0, 'rgba(212, 175, 55, 0.07)'); // subtle antique gold glow from bottom
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, height - 140, width, 140);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block pointer-events-auto"
      style={{ zIndex: 0 }}
      id="hero-canvas"
    />
  );
}
