import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import PersonalStatusMonitor from "./PersonalStatusMonitor";

export default function IntroSidebar() {
    return (
        <div className="p-8 lg:h-full lg:overflow-y-auto flex flex-col items-center justify-center">
            {/* Profile Picture and Name Side by Side */}
            <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-center">
                {/* Profile Picture */}
                <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-gray-600 object-cover bg-gray-700"
                />
                {/* Name, Title, and Location */}
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-4xl font-bold text-white text-center md:text-left">
                        Prasant Koirala
                    </h1>
                    <span className="text-gray-400 text-lg mt-1">
                        Full Stack Developer
                    </span>
                    <p className="font-muted text-lg mt-2 text-center md:text-left">
                        Live to Build
                    </p>
                </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex flex-col sm:flex-row gap-4 my-8 w-full max-w-sm">
                {/* Resume Button */}
                <a 
                    href="/resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-950 hover:bg-blue-700 transition-colors border-2 border-blue-950 rounded-lg shadow text-white font-medium min-w-0"
                >
                    <HiOutlineDownload className="text-2xl" />
                    <span className="font-small">Resume</span>
                </a>
                {/* LinkedIn Button */}
                <a 
                    href="https://www.linkedin.com/in/prasant-koirala-6686082ab/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-950 hover:bg-blue-700 transition-colors border-2 border-blue-950 rounded-lg shadow text-white font-medium min-w-0"
                >
                    <FaLinkedin className="text-2xl" />
                    <span>LinkedIn</span>
                </a>
                {/* GitHub Button */}
                <a 
                    href="https://github.com/Prashant-koi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-950 hover:bg-blue-700 transition-colors border-2 border-blue-950 rounded-lg shadow text-white font-medium min-w-0"
                >
                    <FaGithub className="text-2xl" />
                    <span>GitHub</span>
                </a>
            </div>
            
            {/* Personal Status Monitor */}
            <div className="w-full max-w-sm">
                <PersonalStatusMonitor />
            </div>
        </div>
    );
}
