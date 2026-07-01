"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3"
          : "bg-white py-4 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Typography Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, "#")}
              className="flex flex-col group focus:outline-none"
            >
              <span className="font-serif font-black text-xl tracking-tight text-brand-green leading-none">
                Hometown Lawn Care
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-gray mt-1 leading-none group-hover:text-brand-green transition-colors">
                LLC • Crawford County
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans font-semibold text-sm text-slate-gray hover:text-brand-green hover:underline decoration-2 underline-offset-4 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+16187077627"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-brand-green rounded-md shadow-sm hover:bg-forest-medium transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 mr-2" />
              (618) 707-7627
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-gray hover:text-brand-green hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-green"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 h-6" /> : <Menu className="h-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-inner w-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-3 py-2.5 rounded-md text-base font-semibold text-slate-gray hover:text-brand-green hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="tel:+16187077627"
                  className="flex w-full items-center justify-center px-4 py-3 text-base font-bold text-white bg-brand-green rounded-md shadow-sm hover:bg-forest-medium"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (618) 707-7627
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
