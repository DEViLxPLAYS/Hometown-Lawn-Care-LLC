"use client";

import React from "react";
import { MapPin, BadgeDollarSign, ShieldCheck, FileCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

const VALUE_PROPS = [
  { icon: MapPin, label: "Local", desc: "Crawford County, IL" },
  { icon: BadgeDollarSign, label: "Affordable", desc: "Fair, honest pricing" },
  { icon: ShieldCheck, label: "Reliable", desc: "On-time, every time" },
  { icon: FileCheck, label: "Fully Insured", desc: "100% peace of mind" },
  { icon: Users, label: "References", desc: "Highly recommended" },
];

export default function TrustBar() {
  return (
    <section className="bg-brand-light border-y border-gray-100 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 items-center justify-center divide-x-0 md:divide-x divide-gray-200"
        >
          {VALUE_PROPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.label}
                className={`flex flex-col items-center text-center px-4 ${
                  index % 2 === 0 && index === VALUE_PROPS.length - 1 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="inline-flex items-center justify-center p-2.5 bg-white rounded-full shadow-sm text-brand-green border border-gray-50 mb-3 hover:scale-105 transition-transform duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-charcoal tracking-wide uppercase leading-tight">
                  {item.label}
                </h3>
                <p className="text-[11px] font-medium text-slate-gray mt-1">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
