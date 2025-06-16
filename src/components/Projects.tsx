'use client'

import { useState } from 'react'
import Image from 'next/image'

const projects = [
    {
        title: "Personal Status- App made using C++",
        description: "C++ desktop widget for live portfolio status , sharing your thoughts & active apps in real-time.",
        logo: "/personalstatus-logo.png", 
        contributions: [
            "Built real-time desktop monitoring system using C++ and Windows API that tracks development activity and pushes status updates to portfolio website via secure REST API",
            "Developed cross-platform web integration with threaded architecture, local HTTP server, and Vercel API endpoint featuring API key authentication and JSON data exchange",
            "Publically released the app, used by a few people!"
        ],
        skills: ["C++", "CMake", "Bash", "Linux", "Memory Management"],
        links: {
            github: "https://github.com/Prashant-koi/PersonalStatus",
            release: "https://github.com/Prashant-koi/PersonalStatus/releases"
        }
    },
    {
        title: "Song Review App",
        description: "An App for song lovers where you can review songs and see the ranking of songs according to their genre, along with a top ranking.",
        logo: "/song-app-logo.png",
        contributions: [
            "An App for song lovers where you can review songs and see the ranking of songs according to their genre, along with a top ranking.",
            "Built with modern web technologies for optimal performance",
            "Implemented user authentication and review management system"
        ],
        skills: ["MySQL", "Express.js", "React.js", "Node.js"],
        links: {
            github: "https://github.com/Prashant-koi/song-review-app",
            demo: null
        }
    },
    {
        title: "Chell- A Shell Made In C",
        description: "An Unix like Shell Made using C programming language compatible with both Linux and Windows.",
        logo: "/shell-logo.png",
        contributions: [
            "An Unix like Shell Made using C programming language compatible with both Linux and Windows.",
            "Implemented core shell functionality including command parsing and execution",
            "Cross-platform compatibility with memory management optimization"
        ],
        skills: ["C", "Memory Allocation", "Shell", "Operating System"],
        links: {
            github: "https://github.com/Prashant-koi/chell-shell",
            demo: null
        }
    },
    {
        title: "Prep AI",
        description: "Study helper website for exam preparation and schedule management. Features: schedule building, flash card generator, and quiz generation.",
        logo: "/prep-ai-logo.png",
        contributions: [
            "Study helper website for exam preparation and schedule management",
            "Features include schedule building, flash card generator, and quiz generation",
            "Built with modern framework for responsive user experience"
        ],
        skills: ["React.js", "Tailwind", "Spring Boot", "Node.js"],
        links: {
            github: "https://github.com/Prashant-koi/prep-ai",
            demo: null
        }
    },
    {
        title: "P's Market",
        description: "P's Market is a website that will enable you to see and analyze stocks of hundreds and possibly thousands of stock markets and exchanges.",
        logo: "/ps-market-logo.png",
        contributions: [
            "P's Market is a website that will enable you to see and analyze stocks of hundreds and possibly thousands of stock markets and exchanges",
            "P's Market has a protected login feature made possible by using JWT",
            "Using Node.js as the backend and MongoDB for the database server, where all your information is kept encrypted and safe"
        ],
        skills: ["React.js", "Tailwind", "Spring Boot", "Node.js"],
        links: {
            github: "https://github.com/Prashant-koi/ps-market",
            demo: null
        }
    }
]

export default function Projects() {
    return (
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-200  mb-6">
                Projects
            </h1>
            
            <div className="space-y-8">
                {projects.map((project, index) => (
                    <div key={index} className="relative pl-8">
                        {/* Blue line on the left */}
                        <div className="absolute left-0 top-0 w-1 bg-blue-500 h-full"></div>
                        
                        {/* Header with logo, title */}
                        <div className="flex items-start gap-4 mb-4">
                            {/* Project Logo */}
                            <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-gray-600 overflow-hidden">
                                <Image 
                                    src={project.logo} 
                                    alt={`${project.title} logo`}
                                    width={64}
                                    height={64}
                                    className="object-cover"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                                        if (nextSibling) {
                                            nextSibling.style.display = 'block';
                                        }
                                    }}
                                />
                                <span className="text-white font-small font-bold hidden">
                                    {project.title.split(' ')[0].charAt(0)}
                                </span>
                            </div>
                            
                            {/* Title and Description */}
                            <div className="flex-1">
                                {/* Project Title - ATTENTION GRABBING BOLD */}
                                <h3 className="font-attention text-white mb-2">
                                    {project.title}
                                </h3>
                                {/* Description - SECONDARY */}
                                <p className="font-muted text-gray-300 mb-3">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                        
                        {/* Contributions - NORMAL */}
                        <div className="mb-4">
                            <ul className="space-y-2">
                                {project.contributions.map((contribution, contribIndex) => (
                                    <li key={contribIndex} className="font-normal text-gray-300 leading-relaxed flex items-start">
                                        <span className="text-gray-500 mr-2 mt-1">•</span>
                                        <span>{contribution}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Skills - SMALL */}
                        <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill, skillIndex) => {
                                    let colorClass = "bg-blue-600 border-blue-500";
                                    
                                    if (["C", "JavaScript", "C++"].includes(skill)) {
                                        colorClass = "bg-green-600 border-green-500";
                                    }
                                    else if (["React.js", "Express.js", "Node.js", "Spring Boot", "React Native", "Expo"].includes(skill)) {
                                        colorClass = "bg-red-600 border-red-500";
                                    }
                                    else if (["MySQL", "MongoDB", "Supabase"].includes(skill)) {
                                        colorClass = "bg-yellow-600 border-yellow-500";
                                    }
                                    
                                    return (
                                        <span 
                                            key={skillIndex} 
                                            className={`px-2 py-1 text-white font-small font-medium rounded-full border-2 ${colorClass}`}
                                        >
                                            {skill}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                        
                        {/* Action Links - SMALL */}
                        <div className="flex gap-4">
                            {project.links.github && (
                                <a 
                                    href={project.links.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-small"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    View Code
                                </a>
                            )}
                            {(project.links.demo || project.links.release) && (
                                <a
                                    href={project.links.demo || project.links.release}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-small"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/>
                                    </svg>
                                    {project.links.demo ? "Live Demo" : "Releases"}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}