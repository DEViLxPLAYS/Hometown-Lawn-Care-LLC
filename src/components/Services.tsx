"use client";

import React from "react";
import { Leaf, Briefcase, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "residential",
    icon: Leaf,
    title: "Residential Mowing & Maintenance",
    tagline: "A Cut Above the Rest",
    description: "Keep your home's lawn healthy, sharp, and immaculate. Our team provides precise, scheduled yard care that enhances your property's curb appeal week after week.",
    features: [
      "Weekly & Bi-Weekly Mowing",
      "Edging & Trimming (Walkways & Mulch Beds)",
      "Spring & Fall Yard Cleanup",
      "Leaf & Debris Removal",
      "Grass Clippings Cleanup (Blowing)",
      "Aeration & Fertilization Scheduling"
    ],
    cta: "Request Residential Estimate",
    bgPattern: "bg-gradient-to-br from-emerald-50/50 to-white"
  },
  {
    id: "commercial",
    icon: Briefcase,
    title: "Commercial Landscaping Solutions",
    tagline: "Dedicated Corporate Care",
    description: "Reliable, professional, and fully insured grounds management for businesses, homeowner associations, and public properties. We ensure your business makes a premium first impression.",
    features: [
      "Scheduled Groundskeeping & Maintenance",
      "Large-Acreage Mowing",
      "Weed Control & Turf Management",
      "Pruning & Shrub Shaping",
      "Commercial Cleanup & Snow Prep",
      "Custom Contract Billing Options"
    ],
    cta: "Request Commercial Proposal",
    bgPattern: "bg-gradient-to-br from-slate-50 to-white"
  }
];

export default function Services() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    const selectEl = document.getElementById("service-needed") as HTMLSelectElement | null;
    
    // Attempt to auto-select option based on card
    const btnText = e.currentTarget.innerText.toLowerCase();
    if (selectEl) {
      if (btnText.includes("commercial")) {
        selectEl.value = "Commercial Landscaping";
      } else {
        selectEl.value = "Residential Mowing";
      }
    }
    
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute top-1/2 left-0 right-0 h-96 bg-brand-light/30 -skew-y-3 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-base font-bold text-forest uppercase tracking-widest mb-3"
          >
            Our Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-charcoal tracking-tight leading-tight"
          >
            Professional Lawn Care &amp; Landscaping
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-gray mt-4 max-w-2xl mx-auto"
          >
            We take pride in our work. Hometown Lawn Care LLC delivers high-standard, 
            reliable property maintenance so you can focus on what matters.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                className={`flex flex-col justify-between rounded-2xl border border-gray-150 p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 ${service.bgPattern} group relative overflow-hidden`}
              >
                {/* Accent Color Strip */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                  index === 0 ? "bg-forest" : "bg-brand-gold"
                }`} />

                <div>
                  {/* Card Icon & Tagline */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`inline-flex p-3.5 rounded-xl text-white ${
                      index === 0 ? "bg-forest shadow-md shadow-forest/10" : "bg-brand-gold shadow-md shadow-brand-gold/10"
                    }`}>
                      <Icon className="w-6 h-6 flex-shrink-0" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-gray">
                        {service.tagline}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-serif font-bold text-charcoal mt-0.5">
                        {service.title}
                      </h4>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-gray leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm sm:text-base text-charcoal font-medium">
                        <CheckCircle className="w-5 h-5 text-forest mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto pt-4">
                  <button
                    onClick={handleScrollToContact}
                    className={`inline-flex w-full items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                      index === 0 
                        ? "bg-forest text-white hover:bg-forest-medium shadow-md shadow-forest/5 hover:shadow-lg" 
                        : "bg-charcoal text-white hover:bg-slate-800 shadow-md shadow-charcoal/5 hover:shadow-lg"
                    }`}
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
