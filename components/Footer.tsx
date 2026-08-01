"use client";

import Link from "next/link";
import { Mail, Code } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { LogoIcon } from "./LogoIcon";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-24 pb-12 pt-8 px-6 md:px-12 max-w-6xl mx-auto border-t border-foreground/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <Link href="/" className="flex items-center justify-center md:justify-start gap-3 text-xl font-heading font-bold text-foreground hover:opacity-80 transition-opacity">
            <LogoIcon className="w-6 h-6" />
            YOGI.
          </Link>
          <p className="text-sm text-foreground/70 mt-2">
            © {new Date().getFullYear()} Yogendra Chaurasiya. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="https://github.com/notyogi" 
            target="_blank" 
            className="p-2 transition-colors text-foreground/60 hover:text-foreground"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/yogendra30" 
            target="_blank" 
            className="p-2 transition-colors text-foreground/60 hover:text-foreground"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </Link>
          <Link 
            href="https://x.com/notyogi_" 
            target="_blank"
            className="p-2 transition-colors text-foreground/60 hover:text-foreground"
            aria-label="X (Twitter)"
          >
            <FaXTwitter size={20} />
          </Link>
          <Link 
            href="https://leetcode.com/u/yogi30/" 
            target="_blank" 
            className="p-2 transition-colors text-foreground/60 hover:text-foreground"
            aria-label="LeetCode"
          >
            <Code size={20} />
          </Link>
          <Link 
            href="mailto:yogendrachaurasiya30@gmail.com" 
            className="p-2 transition-colors text-foreground/60 hover:text-foreground"
            aria-label="Email"
          >
            <Mail size={20} />
          </Link>
        </div>

        <button 
          onClick={scrollToTop}
          className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}