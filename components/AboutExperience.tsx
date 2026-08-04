"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { GlassCard } from "./GlassCard";
import { GraduationCap, Briefcase } from "lucide-react";
import DownloadIcon from "@/components/icons/download-icon";

const timeline = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Binari Intelligence System",
    date: "06/2024 – 08/2024",
    type: "work",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "TrustRoots Network",
    date: "12/2023 – 05/2024",
    type: "work",
  },
  {
    id: 3,
    role: "BS Computer Science",
    company: "University of Delhi",
    date: "2022 – 2026",
    cgpa: "CGPA 8.52",
    type: "education",
  },
];

export function AboutExperience() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background-alt">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1.5fr] gap-16 mt-4">
          
          {/* About Bio */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-6xl md:text-7xl font-bold font-heading text-foreground mb-10 tracking-tight">
                About
              </h2>
              
              <div className="text-foreground/70 space-y-6 text-lg leading-relaxed mb-10 max-w-lg">
                <p>
                  Computer Science graduate passionate about building <strong className="text-foreground">scalable web applications</strong>, <strong className="text-foreground">AI-powered products</strong>, and software that solves real-world problems. 
                </p>
                <p>
                  I enjoy working across the <strong className="text-foreground">full stack</strong>—from crafting intuitive user experiences to designing <strong className="text-foreground">robust backend systems</strong>—and turning ambitious ideas into <strong className="text-foreground">products people love to use</strong>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button variant="primary" href="/yogendra_resume.pdf" target="_blank" rel="noopener noreferrer">
                <DownloadIcon className="mr-2" size={18} />
                Download Resume
              </Button>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <div className="relative border-l border-accent/20 pl-8 ml-4 lg:ml-0">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mb-10 last:mb-0 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-6 w-5 h-5 bg-background border-2 border-accent flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent" />
                </div>
                
                <GlassCard className="p-6 md:p-8 hover:bg-transparent hover:border-foreground/30 transition-all duration-300 cursor-default">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                    <div className="flex items-start gap-3 text-accent">
                      <div className="mt-1">
                        {item.type === "education" ? <GraduationCap size={24} fill="currentColor" /> : <Briefcase size={24} fill="currentColor" />}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground leading-tight">{item.role}</h4>
                        <div className="text-foreground/80 font-medium mt-1">
                          {item.company}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium text-foreground/60 border border-white/10 px-3 py-1 whitespace-nowrap uppercase tracking-wider">
                      {item.date}
                    </span>
                  </div>
                  
                  {item.cgpa && (
                    <div className="text-sm text-foreground/60 ml-9">
                      {item.cgpa}
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}