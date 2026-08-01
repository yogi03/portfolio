"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Server, BrainCircuit, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ServiceInquiryModal } from "./ServiceInquiryModal";

const services = [
  {
    title: "Full Stack Web Apps",
    description: "End-to-end SaaS products, dashboards and admin panels. I own the full stack — schema to UI — and ship clean, maintainable code.",
    tags: ["REACT", "NEXT.JS", "NODE.JS", "POSTGRESQL", "FIREBASE"],
    icon: <Code className="w-6 h-6" fill="currentColor" />,
    delay: 0.1,
    highlight: false,
  },
  {
    title: "AI & ML Platforms",
    description: "Intelligent applications powered by RAG pipelines, LangChain, and advanced LLMs. I build AI tools that solve real business problems.",
    tags: ["PYTHON", "LANGCHAIN", "TENSORFLOW", "FASTAPI", "RAG"],
    icon: <BrainCircuit className="w-6 h-6" fill="currentColor" />,
    delay: 0.2,
    highlight: false,
  },
  {
    title: "APIs & Backend Systems",
    description: "Scalable REST/GraphQL APIs, microservice architectures, database design and secure cloud deployment on modern infrastructure.",
    tags: ["PYTHON", "TYPESCRIPT", "SUPABASE", "SQL", "DOCKER"],
    icon: <Server className="w-6 h-6" fill="currentColor" />,
    delay: 0.3,
    highlight: false,
  },
];

export function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (title: string) => {
    setSelectedService(title);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-background-alt">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading title="Services" subtitle="Technical expertise I bring to product teams." />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: service.delay, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col p-8 md:p-10 border transition-all duration-300 ${
                service.highlight 
                  ? "bg-foreground text-background border-foreground" 
                  : "bg-foreground/5 text-foreground border-foreground/10 hover:bg-foreground/[0.07]"
              }`}
            >
              {/* Icon Box */}
              <div className={`w-14 h-14 flex items-center justify-center mb-8 border ${
                service.highlight 
                  ? "bg-background/10 border-background/20 text-background" 
                  : "bg-foreground/5 border-foreground/10 text-accent"
              }`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold font-heading mb-4 tracking-tight">
                {service.title}
              </h3>
              
              <p className={`leading-relaxed mb-10 ${
                service.highlight ? "text-background/80" : "text-foreground/70"
              }`}>
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-12">
                {service.tags.map(tag => (
                  <span 
                    key={tag} 
                    className={`inline-flex items-center px-3 py-1.5 border text-xs font-mono font-medium transition-colors ${
                      service.highlight
                        ? "border-background/20 text-background hover:bg-background/10"
                        : "border-foreground/20 text-foreground hover:bg-foreground/10"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>


            </motion.div>
          ))}
        </div>

        {/* Huge text below grid */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight leading-tight">
            Transform Your <br/> Digital Experience
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-10">
            Every product has room to grow. Get a clear view of what works, what holds you back, and how to move toward a setup that feels faster, lighter, and easier to manage.
          </p>

          <div className="flex gap-4">
            <div className="w-10 h-10 border border-foreground/10 rounded-none overflow-hidden flex-shrink-0 bg-foreground/5 relative">
               <Image src="/my_image.jpg" alt="Avatar" fill sizes="48px" className="object-cover grayscale opacity-90" priority />
            </div>
            <div className="flex flex-col gap-2 items-start relative min-h-[110px]">
              {/* Typing Indicator 1 */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.9] }}
                viewport={{ once: true }}
                transition={{ times: [0, 0.1, 0.8, 1], duration: 2, delay: 0.2 }}
                className="absolute top-0 left-0 bg-foreground/5 border border-foreground/10 px-5 py-3 text-sm rounded-none flex gap-1.5 items-center h-[42px] pointer-events-none"
                style={{ transformOrigin: "left center" }}
              >
                <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
              </motion.div>

              {/* Message 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 2.0, duration: 0.3 }}
                className="bg-foreground/5 border border-foreground/10 px-5 py-2.5 text-sm text-foreground/80 rounded-none w-max h-[42px] flex items-center"
              >
                Have something in mind?
              </motion.div>

              {/* Typing Indicator 2 */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.9] }}
                viewport={{ once: true }}
                transition={{ times: [0, 0.1, 0.8, 1], duration: 2, delay: 2.2 }}
                className="absolute top-[50px] left-0 bg-foreground/5 border border-foreground/10 px-5 py-3 text-sm rounded-none flex gap-1.5 items-center h-[42px] pointer-events-none"
                style={{ transformOrigin: "left center" }}
              >
                <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
              </motion.div>

              {/* Message 2 (Button) */}
              <motion.button 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 4.0, duration: 0.3 }}
                onClick={() => openModal("General Inquiry")}
                className="bg-accent text-accent-foreground border border-accent px-5 py-2.5 text-sm font-bold rounded-none hover:bg-transparent hover:text-accent active:scale-[0.98] cursor-pointer w-max h-[42px] flex items-center justify-center"
              >
                Let's Talk
              </motion.button>
            </div>
          </div>
          </div>

          {/* Right side abstract graphic */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-accent/5 translate-x-4 translate-y-4 border border-accent/20" />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-background border border-foreground/20 p-8 font-mono text-sm leading-relaxed"
            >
              <div className="flex gap-2 mb-6 border-b border-foreground/10 pb-4">
                <div className="w-3 h-3 bg-foreground/20" />
                <div className="w-3 h-3 bg-foreground/20" />
                <div className="w-3 h-3 bg-foreground/20" />
              </div>
              <div className="text-foreground/70">
                <p><span className="text-accent">{">"}</span> <span className="text-foreground">analyze_architecture()</span></p>
                <p className="mt-2 text-foreground/50">Analyzing current state...</p>
                <p className="text-foreground/50">Identifying bottlenecks <span className="text-accent">[||||||||||]</span> 100%</p>
                
                <p className="mt-6"><span className="text-accent">{">"}</span> <span className="text-foreground">optimize_performance()</span></p>
                <ul className="mt-2 space-y-1 text-foreground/50 ml-4 border-l border-foreground/10 pl-4">
                  <li>+ Implement Edge Caching</li>
                  <li>+ Optimize Database Queries</li>
                  <li>+ Reduce Bundle Size</li>
                  <li>+ Modernize Tech Stack</li>
                </ul>

                <p className="mt-6 text-accent font-bold">✓ System optimized successfully.</p>
                <p className="text-foreground/80">Performance increased by 300%</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <ServiceInquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle={selectedService} 
      />
    </section>
  );
}
