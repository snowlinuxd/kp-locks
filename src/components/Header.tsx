import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ShieldCheck, MapPin } from 'lucide-react';
import Logo from './Logo';
import { CONTACT_NUMBERS } from '../data/locksData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-choose' },
    { label: 'Process', href: '#process' },
    { label: 'Products', href: '#products-showcase' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of sticky header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-md border-b border-zinc-800/80 shadow-lg pt-3 pb-2 sm:pt-6 sm:pb-3' 
            : 'bg-transparent pt-3 pb-2 sm:pt-8 sm:pb-5'
        }`}
        id="app-header"
      >
        <div className="max-w-8xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex items-center justify-between">
            {/* Brand Logo Wrapper */}
            <a href="#" className="flex items-center gap-3.5 group focus:outline-none" onClick={(e) => handleScrollToSection(e, '#app-root')}>
              <div className="h-10 sm:h-12 flex items-center justify-center scale-60 sm:scale-75 origin-left mt-1">
                <Logo light={true} className="scale-90" />
              </div>
              <div className="flex flex-col select-none">
                <span className="font-sans font-extrabold text-base sm:text-lg lg:text-xl tracking-wider text-white">
                  KP <span className="text-[#D4AF37]">LOCKS</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="text-sm sm:text-[14px] lg:text-[15px] font-bold text-zinc-300 hover:text-[#D4AF37] transition-all duration-300 relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Contact Actions in Header */}
            <div className="hidden sm:flex items-center gap-5">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${CONTACT_NUMBERS[0].phone}`}
                className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs sm:text-sm font-extrabold tracking-widest uppercase text-black bg-[#D4AF37] hover:bg-[#b58920] rounded shadow-[0_4px_10px_rgba(212,175,55,0.2)] transition-all duration-300"
                id="btn-call-header"
              >
                Call Now
              </motion.a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={`tel:${CONTACT_NUMBERS[0].phone}`}
                className="sm:hidden flex items-center justify-center p-2 rounded bg-zinc-950 text-[#D4AF37] border border-zinc-900/60"
                title="Call KP Locks"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800/60 focus:outline-none"
                aria-label="Toggle menu"
                id="btn-mobile-menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Slide-in overlays) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 lg:hidden flex flex-col justify-center"
          >
            <div className="absolute top-5 right-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded bg-zinc-950 border border-zinc-800 text-zinc-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="max-w-md mx-auto w-full px-8 text-center flex flex-col gap-6">
              <div className="flex flex-col items-center justify-center mb-4">
                <Logo light={true} className="scale-90 mb-4" />
                <span className="font-sans font-bold text-xl tracking-wider text-white">
                  KP <span className="text-[#D4AF37]">LOCKS</span>
                </span>
              </div>

              {/* Navigation links */}
              <div className="flex flex-col gap-4 py-4 border-y border-zinc-800/60">
                {menuItems.map((item, index) => (
                  <motion.a
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className="text-lg font-medium text-zinc-200 hover:text-[#D4AF37] transition-all py-1.5"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* Contact numbers */}
              <div className="flex flex-col items-center gap-3">
                <p className="text-xs text-zinc-400 font-serif italic">Need Immediate Assistance? 24/7 Available</p>
                {CONTACT_NUMBERS.map((num, idx) => (
                  <a
                    key={idx}
                    href={`tel:${num.phone}`}
                    className="flex items-center gap-2 text-base font-mono text-white hover:text-[#D4AF37]"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>{num.label}:</span>
                    <span className="font-bold text-[#D4AF37]">{num.phone}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
