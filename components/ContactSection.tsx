"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { toast } from "sonner";
import { GlassCard } from "./GlassCard";
import { Button } from "./Button";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column - Typography & Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Let's work <br className="hidden md:block" />
              <span className="text-accent">together.</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-10 max-w-md leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="flex items-center gap-4">
              <Link 
                href="mailto:yogendrachaurasiya30@gmail.com" 
                className="p-4 border border-foreground/20 hover:bg-foreground/10 active:scale-[0.98] transition-all duration-300 text-foreground"
                aria-label="Email"
              >
                <Mail size={24} />
              </Link>
              <Link 
                href="https://github.com/notyogi" 
                target="_blank"
                className="p-4 border border-foreground/20 hover:bg-foreground/10 active:scale-[0.98] transition-all duration-300 text-foreground"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/yogendra30" 
                target="_blank"
                className="p-4 border border-foreground/20 hover:bg-foreground/10 active:scale-[0.98] transition-all duration-300 text-foreground"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link 
                href="https://x.com/notyogi_" 
                target="_blank"
                className="p-4 border border-foreground/20 hover:bg-foreground/10 active:scale-[0.98] transition-all duration-300 text-foreground"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={24} />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border border-foreground/20 rounded-none px-5 py-4 text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    suppressHydrationWarning
                    className="w-full bg-transparent border border-foreground/20 rounded-none px-5 py-4 text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border border-foreground/20 rounded-none px-5 py-4 text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full justify-center py-4 mt-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send size={18} />
                    </span>
                  )}
                </Button>
              </form>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}