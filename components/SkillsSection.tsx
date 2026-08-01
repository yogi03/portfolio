"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { GlassCard } from "./GlassCard";
import { SkillPill } from "./SkillPill";
import { 
  SiNextdotjs, SiReact, SiTailwindcss, 
  SiPython, SiCplusplus, SiFirebase, 
  SiGit, SiPostman, SiJavascript, SiTypescript, SiFramer,
  SiNodedotjs, SiFastapi, SiPostgresql, SiSupabase, SiTensorflow, SiLangchain, SiHuggingface, SiDocker, SiGithubactions
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { MonitorSmartphone, Server, Wrench, BrainCircuit} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <MonitorSmartphone size={24} fill="currentColor" />,
    colSpan: "md:col-span-2 lg:col-span-1",
    skills: [
      { name: "JavaScript", icon: <SiJavascript size={14} /> },
      { name: "TypeScript", icon: <SiTypescript size={14} /> },
      { name: "React.js", icon: <SiReact size={14} /> },
      { name: "Next.js", icon: <SiNextdotjs size={14} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={14} /> },
      { name: "Framer Motion", icon: <SiFramer size={14} /> },
    ]
  },
  {
    title: "Backend & Systems",
    icon: <Server size={24} fill="currentColor" />,
    colSpan: "md:col-span-2 lg:col-span-1",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs size={14} /> },
      { name: "Python", icon: <SiPython size={14} /> },
      { name: "C++", icon: <SiCplusplus size={14} /> },
      { name: "FastAPI", icon: <SiFastapi size={14} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={14} /> },
      { name: "Supabase", icon: <SiSupabase size={14} /> },
      { name: "Firebase", icon: <SiFirebase size={14} /> },
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit size={24} fill="currentColor" />,
    colSpan: "md:col-span-2 lg:col-span-1",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow size={14} /> },
      { name: "LangChain", icon: <SiLangchain size={14} /> },
      { name: "HuggingFace", icon: <SiHuggingface size={14} /> },
    ]
  },
  {
    title: "Developer Tools",
    icon: <Wrench size={24} fill="currentColor" />,
    colSpan: "md:col-span-2 lg:col-span-1",
    skills: [
      { name: "Git & GitHub", icon: <SiGit size={14} /> },
      { name: "Postman", icon: <SiPostman size={14} /> },
      { name: "Docker", icon: <SiDocker size={14} /> },
      { name: "CI/CD", icon: <SiGithubactions size={14} /> },
      { name: "Azure", icon: <VscAzure size={14} /> },
    ]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background-alt">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading title="Technical Stack" subtitle="The technologies and tools I use to build scalable products." />

        {/* 2x2 Bento Grid for 4 categories perfectly */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex"
            >
              <GlassCard className="p-8 md:p-10 w-full flex flex-col group hover:bg-transparent hover:border-foreground/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-foreground/5 border border-foreground/20 text-accent group-hover:bg-transparent group-hover:border-foreground/30 transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-foreground tracking-tight">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <SkillPill 
                      key={skill.name} 
                      label={skill.name} 
                      icon={skill.icon} 
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}