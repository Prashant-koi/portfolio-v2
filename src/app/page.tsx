import Header from "@/components/Header";
import PersonalStatusMonitor from "@/components/PersonalStatusMonitor";
import ProjectsSection from "@/components/ProjectsSection";
import GitHubProjects from "@/components/GitHubProjects";
import SkillsSection from "@/components/SkillsSection";
import HonorsSection from "@/components/HonorsSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <PersonalStatusMonitor />
      <ProjectsSection />
      <GitHubProjects />
      <SkillsSection />
      <HonorsSection />
      <EducationSection />
      <Footer />
    </>
  );
}
