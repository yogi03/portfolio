import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import dynamic from "next/dynamic";

const AboutExperience = dynamic(() => import("@/components/AboutExperience").then(mod => mod.AboutExperience));
const ServicesSection = dynamic(() => import("@/components/ServicesSection").then(mod => mod.ServicesSection));
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection").then(mod => mod.ProjectsSection));
const SkillsSection = dynamic(() => import("@/components/SkillsSection").then(mod => mod.SkillsSection));
const ContactSection = dynamic(() => import("@/components/ContactSection").then(mod => mod.ContactSection));

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <AboutExperience />
      <ProjectsSection />
      <ServicesSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
