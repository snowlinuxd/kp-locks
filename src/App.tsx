/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import LocksShowcase from './components/LocksShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import ManufacturingProcess from './components/ManufacturingProcess';
import VideoSection from './components/VideoSection';
import ContactSection from './components/ContactSection';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans antialiased overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-white" id="app-root">
      <div className="w-full bg-[#000000] relative">
        {/* 1. Dedicated Header / Navbar */}
        <Header />

        {/* 2. Interactive Canvas Hero Section */}
        <Hero />

        {/* 3. About & Lock Blueprint Details */}
        <About />

        {/* 4. Core Locksmith & Manufacturing Services */}
        <Services />

        {/* 5. 8-Artifact Precision Showcase */}
        <LocksShowcase />

        {/* 6. Process Pipeline (01 - 05 step cards) */}
        <ManufacturingProcess />

        {/* 6. Why Choose Us Trust Matrix */}
        <WhyChooseUs />

        {/* 7. Showcasing Tradition & Security */}
        <VideoSection />

        {/* Animated Separator Stripe */}
        <div className="w-full h-1 bg-white overflow-hidden relative">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          />
        </div>

        {/* 8. Secured Inquiry & Map Hub */}
        <ContactSection />

        {/* 9. Floating Contact & WhatsApp Controllers */}
        <FloatingActions />
      </div>
    </div>
  );
}
