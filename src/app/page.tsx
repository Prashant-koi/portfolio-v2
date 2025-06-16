import IntroSidebar from "@/components/IntroSidebar";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - 40% - Fixed */}
      <div className="w-[40%] fixed left-0 top-0 h-screen overflow-hidden">
        <IntroSidebar />
      </div>
      
      {/* Right side - 60% - Scrollable with left margin to account for fixed sidebar */}
      <div className="w-full ml-[40%] overflow-y-auto">
        <div className="p-8">
          <AboutMe />
          <Skills />
          <Experience />
          <Projects />
          <Education />
        </div>
        
        {/* Divider - positioned absolutely */}
        <div className="fixed left-[40%] top-0 w-[1px]  h-screen pointer-events-none"></div>
      </div>
    </div>
  );
}
