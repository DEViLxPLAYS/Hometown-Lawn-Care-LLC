"use client";

import React from "react";
import { Phone, MessageSquare, MapPin, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-charcoal text-white pt-16 pb-28 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <h3 className="font-serif font-black text-xl tracking-tight text-white">
              Hometown Lawn Care
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Professional residential and commercial property maintenance. Keeping Crawford County properties manicured, healthy, and beautiful.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://facebook.com/HometownLawnLLC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Hometown Lawn Care LLC on Facebook"
                className="inline-flex items-center justify-center p-2.5 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-forest transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-slate-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "#")}
                  className="text-slate-300 hover:text-white text-sm transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "#services")}
                  className="text-slate-300 hover:text-white text-sm transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, "#about")}
                  className="text-slate-300 hover:text-white text-sm transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="text-slate-300 hover:text-white text-sm transition-colors"
                >
                  Request Estimate
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-slate-400">
              Contact Info
            </h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-forest-medium mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  1615 W Pine Street<br />
                  Robinson, IL 62454
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-forest-medium mr-3 flex-shrink-0" />
                <a href="tel:+16187077627" className="hover:text-white hover:underline transition-all">
                  (618) 707-7627
                </a>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 text-forest-medium mr-3 flex-shrink-0 mt-0.5" />
                <span>Fully Insured &amp; Family Owned</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Location Area */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-slate-400">
              Service Area
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Serving Robinson, Flat Rock, Palestine, Hutsonville, and all locations throughout Crawford County, Illinois.
            </p>
            <div className="p-4 bg-slate-800/40 rounded-lg border border-slate-700/50">
              <span className="block text-xs uppercase font-extrabold tracking-widest text-slate-400">
                Call for Free Estimates
              </span>
              <a 
                href="tel:+16187077627" 
                className="text-base font-bold text-white hover:text-forest-light transition-colors block mt-1"
              >
                (618) 707-7627
              </a>
            </div>
          </div>

        </div>

        {/* Lower Footer */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} Hometown Lawn Care LLC. All rights reserved.
          </p>
          <p className="text-center md:text-right font-medium">
            HTLC Limited Liability Company (dba) Hometown Lawn Care LLC
          </p>
        </div>
      </div>

      {/* Floating Bottom Navigation Bar for Mobile Devices */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl md:hidden px-4 py-3 flex gap-3">
        <a
          href="tel:+16187077627"
          aria-label="Call Hometown Lawn Care LLC"
          className="flex-1 inline-flex items-center justify-center py-4 bg-forest text-white rounded-xl text-base font-extrabold shadow-md hover:bg-forest-medium active:scale-[0.98] transition-all"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call Us
        </a>
        <a
          href="sms:+16187077627?body=Hi%2C%20I'd%20like%20to%20request%20a%20free%20lawn%20care%20estimate."
          aria-label="Text Hometown Lawn Care LLC"
          className="flex-1 inline-flex items-center justify-center py-4 bg-charcoal text-white rounded-xl text-base font-extrabold shadow-md hover:bg-slate-800 active:scale-[0.98] transition-all border border-slate-700"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Text Us
        </a>
      </div>
    </footer>
  );
}
