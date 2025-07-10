import IntroSidebar from "@/components/IntroSidebar";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="min-h-screen lg:flex">
      {/* 
        Left side (IntroSidebar)
        - On large screens (lg): fixed, 40% width, full height.
        - On mobile (default): part of the normal document flow.
      */}
      <div className="lg:fixed lg:w-[40%] lg:h-screen">
        <IntroSidebar />
      </div>
      
      {/* 
        Right side (Main Content)
        - On large screens (lg): has a left margin to avoid the fixed sidebar.
        - On mobile (default): full width, no margin.
      */}
      <main className="w-full lg:ml-[40%]">
        <div className="p-4 md:p-8">
          <AboutMe />
          <Skills />
          <Experience />
          <Projects />
          <Education />
        </div>
      </main>
      
      {/* Divider - only visible on large screens */}
      <div className="hidden lg:block fixed left-[40%] top-0 w-[1px] bg-gray-700 h-screen pointer-events-none"></div>
    </div>
  );
}
