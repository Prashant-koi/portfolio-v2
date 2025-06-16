const experiences = [
  {
    company: "Optimal Answers",
    position: "Web/App Development Intern",
    location: "Gulfport, Mississippi",
    duration: "June 2025 - Present",
    logo: "/optimal-logo.jpg", 
    contributions: [
      "Collabrated the the Engineering and Marketing team to enhance the company’s Public Website and the Main Software Website.",
      "Optimized navigation time in the Software by connecting table/database Navigation button to UI",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Web Flow", "SEO", "C#"]
  },
  // Add more experiences here as needed
]

export default function Experience() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-200 mb-6">
        Experience
      </h1>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8">
            {/* Blue line on the left */}
            <div className="absolute left-0 top-0 w-1 bg-blue-500 h-full"></div>
            
            {/* Header with logo, title, location */}
            <div className="flex items-start gap-4 mb-4">
              {/* Company Logo */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-12 h-12 object-contain"
                />
              </div>
              
              {/* Title and Location */}
              <div className="flex-1">
                {/* Position - ATTENTION GRABBING BOLD */}
                <h3 className="font-attention text-white mb-1">
                  {exp.position}
                </h3>
                {/* Company and Location - SECONDARY */}
                <p className="font-secondary text-gray-300 mb-1">
                  {exp.company}, {exp.location}
                </p>
                {/* Duration - MUTED */}
                <p className="font-muted">
                  {exp.duration}
                </p>
              </div>
            </div>
            
            {/* Contributions - NORMAL */}
            <div className="mb-4">
              <ul className="space-y-2">
                {exp.contributions.map((contribution, contribIndex) => (
                  <li key={contribIndex} className="font-normal text-gray-300 leading-relaxed flex items-start">
                    <span className="text-gray-500 mr-2 mt-1">•</span>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Skills - SMALL */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => {
                  let colorClass = "bg-blue-600 border-blue-500";
                  
                  if (["HTML", "CSS", "JavaScript", "SQL Server"].includes(skill)) {
                    colorClass = "bg-green-600 border-green-500";
                  }
                  else if (["jQuery", "Bootstrap", "WebEOC"].includes(skill)) {
                    colorClass = "bg-red-600 border-red-500";
                  }
                  else if (["REST APIs"].includes(skill)) {
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
          </div>
        ))}
      </div>
    </div>
  );
}