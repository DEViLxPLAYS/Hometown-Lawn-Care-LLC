"use client";

import React, { useState } from "react";
import { Phone, MapPin, Mail, Clock, Send, CheckCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", phone: "", service: "", notes: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-brand-light relative z-20 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info Cards & Location Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-base font-bold text-forest uppercase tracking-widest block mb-3">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-charcoal tracking-tight leading-tight mb-4">
                Ready to Get Started? Request an Estimate.
              </h2>
              <p className="text-slate-gray text-base leading-relaxed">
                Contact Hometown Lawn Care LLC today. Whether you have a small residential lawn 
                or a large commercial facility, we offer consistent and dependable property maintenance.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone target card */}
              <a
                href="tel:+16187077627"
                className="flex items-start p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-forest/30 hover:shadow-md transition-all group duration-200"
              >
                <div className="inline-flex p-3 rounded-lg bg-emerald-50 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-250 mr-4">
                  <Phone className="w-6 h-6 flex-shrink-0" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-extrabold tracking-widest text-slate-gray">
                    Call or Text
                  </h3>
                  <p className="text-lg font-bold text-charcoal mt-1 group-hover:text-brand-green transition-colors">
                    (618) 707-7627
                  </p>
                  <p className="text-xs text-slate-gray mt-0.5">
                    Fast response, free estimates.
                  </p>
                </div>
              </a>

              {/* Physical Address card */}
              <div
                className="flex items-start p-5 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="inline-flex p-3 rounded-lg bg-emerald-50 text-brand-green mr-4">
                  <MapPin className="w-6 h-6 flex-shrink-0" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-extrabold tracking-widest text-slate-gray">
                    Service Office
                  </h3>
                  <p className="text-lg font-bold text-charcoal mt-1">
                    1615 W Pine Street
                  </p>
                  <p className="text-sm text-slate-gray mt-0.5">
                    Robinson, IL 62454
                  </p>
                </div>
              </div>

              {/* Hours card */}
              <div className="flex items-start p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="inline-flex p-3 rounded-lg bg-emerald-50 text-brand-green mr-4">
                  <Clock className="w-6 h-6 flex-shrink-0" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-extrabold tracking-widest text-slate-gray">
                    Office Hours
                  </h3>
                  <p className="text-lg font-bold text-charcoal mt-1">
                    Mon - Sat: 7 AM - 6 PM
                  </p>
                  <p className="text-sm text-slate-gray mt-0.5">
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Insurance Badge */}
            <div className="bg-brand-green/5 border border-brand-green/10 rounded-xl p-5 flex items-center">
              <ShieldCheck className="w-10 h-10 text-brand-green mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-charcoal text-sm">Fully Insured &amp; Certified</h4>
                <p className="text-xs text-slate-gray mt-1">
                  We carry comprehensive liability insurance to protect your property and our crew.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div id="estimate-form" className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 relative overflow-hidden"
            >
              {isSubmitted ? (
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="inline-flex p-4 bg-emerald-50 text-brand-green rounded-full shadow-inner mb-2">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-charcoal">
                    Thank You!
                  </h3>
                  <p className="text-slate-gray text-base max-w-md mx-auto">
                    Your estimate request has been received. We will review your details and contact you shortly, typically within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex px-6 py-2.5 bg-brand-green text-white hover:bg-forest-medium rounded-lg text-sm font-bold shadow-sm transition-colors duration-250"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-gray-100 pb-4 mb-6">
                    <h3 className="text-xl font-bold text-charcoal">
                      Estimate Request Form
                    </h3>
                    <p className="text-xs text-slate-gray mt-1">
                      Fill out the form below and we will contact you to discuss your landscaping needs.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-2">
                    <label 
                      htmlFor="client-name" 
                      className="block text-xs uppercase font-extrabold tracking-wider text-slate-gray"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="client-name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      aria-required="true"
                      className="block w-full px-4 py-3 rounded-lg border border-gray-200 text-charcoal placeholder-slate-gray/50 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 focus:outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label 
                      htmlFor="client-phone" 
                      className="block text-xs uppercase font-extrabold tracking-wider text-slate-gray"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="client-phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(618) 555-0199"
                      aria-required="true"
                      className="block w-full px-4 py-3 rounded-lg border border-gray-200 text-charcoal placeholder-slate-gray/50 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 focus:outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Service Needed Dropdown */}
                  <div className="space-y-2">
                    <label 
                      htmlFor="service-needed" 
                      className="block text-xs uppercase font-extrabold tracking-wider text-slate-gray"
                    >
                      Service Needed <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="service-needed"
                        name="service"
                        value={formState.service}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        className="block w-full px-4 py-3 rounded-lg border border-gray-200 text-charcoal focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 focus:outline-none bg-white transition-all duration-200"
                      >
                        <option value="" disabled>Select a Service</option>
                        <option value="Residential Mowing">Residential Mowing &amp; Maintenance</option>
                        <option value="Commercial Landscaping">Commercial Landscaping Solutions</option>
                        <option value="Spring / Fall Cleanup">Spring / Fall Yard Cleanup</option>
                        <option value="Edging / Trimming">Edging &amp; Trimming</option>
                        <option value="Other">Other / General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <label 
                      htmlFor="client-notes" 
                      className="block text-xs uppercase font-extrabold tracking-wider text-slate-gray"
                    >
                      Property Size &amp; Specific Details
                    </label>
                    <textarea
                      id="client-notes"
                      name="notes"
                      value={formState.notes}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your property size, specific lawn issues, or particular services you require..."
                      className="block w-full px-4 py-3 rounded-lg border border-gray-200 text-charcoal placeholder-slate-gray/50 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 focus:outline-none transition-all duration-200 resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center px-6 py-4 border border-transparent rounded-lg text-base font-bold text-white bg-brand-green hover:bg-forest-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-250 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending Request...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Submit Request
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
