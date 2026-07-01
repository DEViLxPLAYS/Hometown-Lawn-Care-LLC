"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const handleEstimateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-charcoal text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-scale duration-[10000ms] ease-out scale-105"
        style={{ backgroundImage: "url('/hero-lawn.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-transparent md:bg-gradient-to-r" />
      <div className="absolute inset-0 bg-black/40" /> {/* Extra layer for text contrast */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-10 w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/80 backdrop-blur-sm border border-forest-light/30 text-white text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Crawford County's Trusted Choice
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-[1.1] mb-6"
          >
            Professional Residential &amp; Commercial Landscaping
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-lg sm:text-xl text-gray-200 font-normal leading-relaxed mb-8 max-w-2xl"
          >
            We keep your property immaculate all season long. Delivering affordable, 
            reliable, and fully insured lawn maintenance solutions tailored to Robinson, IL 
            and the surrounding communities.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="tel:+16187077627"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-forest hover:bg-forest-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-center"
            >
              <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
              Call Now: (618) 707-7627
            </a>
            
            <button
              onClick={handleEstimateClick}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm rounded-lg hover:border-white/50 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5 mr-3 flex-shrink-0" />
              Message for an Estimate
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Shadow Arch */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
