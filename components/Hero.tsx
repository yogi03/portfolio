"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

import { Button } from "./Button";
import Image from "next/image";
import MapPinIcon from "@/components/icons/map-pin-icon";
import { getCalApi } from "@calcom/embed-react";
import DecryptedText from "./DecryptedText";

export function Hero() {
  

  useEffect(() => {
    let mounted = true;
    const init = async () => {
      const cal = await getCalApi();
      if (!mounted) return;
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-bg": "#FFFFFF" },
          dark:  { "cal-bg": "#18181A" }
        },
        styles: { branding: { brandColor: "#FFFF22" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    };
    
    // Defer initialization to avoid blocking initial render, but ensure it's ready before click
    const timer = setTimeout(init, 2500);
    
    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">
        
        {/* Main Content */}
        <div className="flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-foreground/60 mb-6 uppercase tracking-wider text-xs font-mono"
          >
            <MapPinIcon size={14} className="text-accent" />
            <span>New Delhi, India</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-[1.1] tracking-tight cursor-default"
          >
            <DecryptedText text="Yogendra" animateOn="view" revealDirection="start" sequential speed={100} maxIterations={10} />
            <br />
            <DecryptedText text="Chaurasiya." animateOn="view" revealDirection="start" sequential speed={100} maxIterations={10} />
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-foreground/70 max-w-md mb-10 leading-relaxed"
          >
            Full Stack Developer engineering fast, resilient, and beautifully designed digital products.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button variant="primary" href="#projects">
              See Projects
            </Button>
            <Button variant="ghost" data-cal-link="notyogi">
              Get in touch
            </Button>
          </motion.div>
        </div>

        {/* Hero Asset */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
          className="relative w-full h-[50vh] md:h-[70vh] rounded-none overflow-hidden bg-black/5 border border-foreground/20"
        >
          <Image 
            src="/my_image.jpg" 
            alt="Yogendra Chaurasiya" 
            fill 
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
            priority
            fetchPriority="high"
          />
        </motion.div>

      </div>
    </section>
  );
}