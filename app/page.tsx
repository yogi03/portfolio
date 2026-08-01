import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutExperience } from "@/components/AboutExperience";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

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
