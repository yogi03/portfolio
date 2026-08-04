"use client";

import { useState, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ExternalLinkIcon from "@/components/icons/external-link-icon";
import { FaGithub } from "react-icons/fa";
import { SectionHeading } from "./SectionHeading";
import { SkillPill } from "./SkillPill";
import projectsData from "@/content/projects.json";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge?: string;
  solution?: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

function ProjectCard({ project, colSpan, isExpanded, toggleExpand }: { project: Project, colSpan: string, isExpanded: boolean, toggleExpand: (id: string) => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(arrowRef.current, { rotate: isExpanded ? -90 : 0, duration: 0.3 });
    if (isExpanded) {
      gsap.to(detailsRef.current, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(detailsRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
    }
  }, [isExpanded]);

  return (
    <div
      ref={cardRef}
      className={`project-card ${colSpan} flex flex-col group p-8 rounded-none bg-foreground/[0.02] border border-foreground/10 hover:bg-foreground/[0.04] hover:border-foreground/20 hover:-translate-y-2 active:scale-[0.98] transition-all duration-300`}
    >
      <div className="flex gap-5 items-start mb-8 w-full justify-between">
        <div className="flex gap-4 items-center cursor-pointer" onClick={() => toggleExpand(project.id)}>
          <div className="relative w-16 h-16 rounded-none overflow-hidden bg-background border border-foreground/10 flex-shrink-0 flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              sizes="64px"
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-accent text-xs font-mono tracking-wider uppercase mb-1">
              {project.category}
            </p>
            <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground group-hover:text-foreground/80 transition-colors">
              {project.title}
            </h3>
          </div>
        </div>
        <div className="flex gap-3 pt-2">
          {project.githubUrl && project.githubUrl !== "#" && (
            <Link href={project.githubUrl} target="_blank" className="text-foreground/40 hover:text-foreground transition-colors">
              <FaGithub size={20} />
            </Link>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <Link href={project.liveUrl} target="_blank" className="text-foreground/40 hover:text-foreground transition-colors">
              <ExternalLinkIcon size={20} />
            </Link>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <p className="text-foreground/60 mb-6 flex-grow leading-relaxed text-lg max-w-xl">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <SkillPill key={tag} label={tag} delay={0} />
          ))}
        </div>

        <div ref={detailsRef} className="overflow-hidden h-0 opacity-0">
          <div className="pt-6 pb-2 border-t border-foreground/10 mt-2 mb-6">
            {project.challenge && (
              <div className="mb-6">
                <h4 className="text-xl font-bold font-heading mb-3 text-foreground">The Challenge</h4>
                <p className="text-foreground/70 text-base leading-relaxed">{project.challenge}</p>
              </div>
            )}
            {project.solution && (
              <div className="mb-8">
                <h4 className="text-xl font-bold font-heading mb-3 text-foreground">The Solution</h4>
                <p className="text-foreground/70 text-base leading-relaxed">{project.solution}</p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {project.liveUrl && project.liveUrl !== "#" && (
                <Link href={project.liveUrl} target="_blank" className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 py-3 px-6 bg-foreground text-background font-medium hover:bg-foreground/90 active:scale-[0.98] transition-all">
                  <ExternalLinkIcon size={18} /> Live Demo
                </Link>
              )}
              {project.githubUrl && project.githubUrl !== "#" && (
                <Link href={project.githubUrl} target="_blank" className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 py-3 px-6 bg-transparent hover:bg-foreground/5 border border-foreground/20 font-medium active:scale-[0.98] transition-all">
                  <FaGithub size={18} /> Source Code
                </Link>
              )}
            </div>
          </div>
        </div>

        <button 
          onClick={() => toggleExpand(project.id)}
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors mt-auto w-fit pt-4"
        >
          {isExpanded ? "Close Case Study" : "Read Case Study"} 
          <div ref={arrowRef}><ArrowRight size={16} /></div>
        </button>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });

  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    projectsData.forEach(p => categories.add(p.category));
    return ["All", ...Array.from(categories)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projectsData;
    return projectsData.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  useGSAP(() => {
    gsap.fromTo(".project-card", 
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: container });

  const handleFilterClick = contextSafe((category: string) => {
    if (category === activeFilter || isAnimating) return;
    setIsAnimating(true);
    
    gsap.to(".project-card", {
      opacity: 0,
      scale: 0.95,
      y: 20,
      duration: 0.3,
      stagger: 0.05,
      onComplete: () => {
        setActiveFilter(category);
        setExpandedProjectId(null);
      }
    });
  });

  useGSAP(() => {
    if (isAnimating) {
      gsap.fromTo(".project-card",
        { opacity: 0, scale: 0.95, y: 20 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 0.4, 
          stagger: 0.05, 
          ease: "power3.out",
          onComplete: () => setIsAnimating(false)
        }
      );
    }
  }, { dependencies: [filteredProjects], scope: container });

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section ref={container} id="projects" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading title="Projects" subtitle="A showcase of recent engineering projects." />

        <div className="flex flex-nowrap overflow-x-auto items-center gap-6 mt-16 mb-16 border-b border-foreground/10 pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterClick(category)}
              className={`whitespace-nowrap flex-shrink-0 text-sm font-mono tracking-wider uppercase transition-colors relative ${
                activeFilter === category 
                  ? "text-accent font-bold" 
                  : "text-foreground/40 hover:text-foreground/80"
              }`}
            >
              {category}
              {activeFilter === category && (
                <div 
                  className={`absolute -bottom-[25px] left-0 right-0 h-[2px] bg-accent`}
                />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 gap-x-12">
          {filteredProjects.map((project, index) => {
            let colSpan = "md:col-span-6"; 
            if (activeFilter === "All") {
              if (index % 4 === 0) colSpan = "md:col-span-12 lg:col-span-7";
              else if (index % 4 === 1) colSpan = "md:col-span-12 lg:col-span-5";
              else if (index % 4 === 2) colSpan = "md:col-span-12 lg:col-span-5";
              else if (index % 4 === 3) colSpan = "md:col-span-12 lg:col-span-7";
            }

            return (
              <ProjectCard 
                key={project.id}
                project={project}
                colSpan={colSpan}
                isExpanded={expandedProjectId === project.id}
                toggleExpand={toggleExpand}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
