"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Users, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";

const VALUES = [
  {
    icon: Heart,
    title: "Family Owned",
    description: "Proudly independent, keeping local Crawford County properties beautiful.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description: "Complete liability coverage, ensuring safety and compliance.",
  },
  {
    icon: Users,
    title: "References Available",
    description: "Dozens of satisfied residential and commercial clients.",
  },
  {
    icon: Award,
    title: "We Don't Cut Corners",
    description: "We cut grass. Our focus is on absolute precision and quality.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with details overlay */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <Image
                src="/about-mower.png"
                alt="Hometown Lawn Care professional equipment on green manicured lawn"
                width={800}
                height={600}
                className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent pointer-events-none" />
            </motion.div>
            
            {/* Absolute badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 hidden sm:flex flex-col items-center justify-center bg-brand-gold text-charcoal font-bold p-6 rounded-2xl shadow-xl border-4 border-white z-10 w-44"
            >
              <span className="text-3xl font-black font-serif">100%</span>
              <span className="text-[10px] uppercase tracking-widest text-center mt-1">
                Satisfaction Guaranteed
              </span>
            </motion.div>
          </div>

          {/* Right Column: About Details */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-base font-bold text-forest uppercase tracking-widest block mb-3">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-charcoal tracking-tight leading-tight mb-4">
                Local. Dependable. Built on Trust.
              </h2>
              <p className="text-slate-gray text-base leading-relaxed">
                Hometown Lawn Care LLC is Crawford County&apos;s premier property maintenance provider. 
                Founded on the promise of reliability and meticulous attention to detail, we deliver 
                consistent commercial groundskeeping and residential mowing services.
              </p>
              <p className="text-slate-gray text-base leading-relaxed mt-4">
                We believe that a beautiful lawn is the foundation of a welcoming property. That&apos;s why 
                our crew treats every client like a neighbor, showing up on schedule and ensuring that no 
                clipping is left behind.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {VALUES.map((val) => {
                const Icon = val.icon;
                return (
                  <div key={val.title} className="flex gap-4 items-start">
                    <div className="p-2 rounded-lg bg-brand-green/5 text-brand-green mt-1">
                      <Icon className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal text-sm leading-none">
                        {val.title}
                      </h4>
                      <p className="text-xs text-slate-gray mt-1.5 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
