"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import XIcon from "@/components/icons/x-icon";
import { motion, AnimatePresence } from "framer-motion";
import { LogoIcon } from "./LogoIcon";


const navLinks = [
  { id: "home", name: "Home", href: "#" },
  { id: "about", name: "About", href: "#about" },
  { id: "projects", name: "Projects", href: "#projects" },
  { id: "services", name: "Services", href: "#services" },
  { id: "skills", name: "Skills", href: "#skills" },
  { id: "contact", name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ["home", "about", "projects", "services", "skills", "contact"];
      let current = "home";
      
      for (const section of sections) {
        const element = document.getElementById(section === "home" ? "hero" : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-white/5 py-4" : "py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-3 text-xl font-heading font-bold text-foreground z-10 hover:opacity-80 transition-opacity uppercase tracking-widest"
            aria-label="Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <LogoIcon className="w-7 h-7" />
            Yogi.
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.id} 
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-accent"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}

          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center gap-4 z-10 -mr-2">
            <button 
              className="text-foreground hover:text-accent transition-colors p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <XIcon size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center pt-16"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-3xl font-heading font-bold uppercase tracking-widest transition-colors ${
                    activeSection === link.id 
                      ? "text-accent" 
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}