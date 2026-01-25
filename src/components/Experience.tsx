const experiences = [
  {
    company: "University of Southern Mississippi",
    position: "AI/ML Research Assistant",
    location: "Hattiesburg, Mississippi",
    duration: "Sept. 2025 - Present",
    logo: "/usm-logo.png",
    contributions: [
      "Built and trained a ModernBERT-based co-attention neural network in PyTorch for social engineering email detection, achieving 100% accuracy on a held-out test set of 158 email pairs.",
      "Engineered an email pair processing pipeline from a preprocessed dataset derived from 500,000+ corporate emails, generating 171 structured emails across 4 attacker profiles.",
      "Trained a 151M+ parameter transformer with AdamW over 20 epochs, reducing validation loss from 0.57 to 0.0009 while maintaining perfect precision, recall, F1, and AUROC",
      "Integrated the model with an upstream GNN-based anomaly detector, achieving 92% end-to-end system accuracy for social engineering detection",
    ],
    skills: ["Python", "PyTorch", "Transformers", "Research", "Machine Learning"]
  },
  {
    company: "Optimal Answers",
    position: "Web/App Development Intern",
    location: "Gulfport, Mississippi",
    duration: "June 2025 - Aug. 2025",
    logo: "/optimal-logo.jpg",
    contributions: [
      "Built backend features for internal and customer-facing web applications using C#, SQL, and REST APIs, supporting day-to-day workflows for business and operations teams.",
      "Refactored performance-critical backend logic and SQL database queries, reducing UI latency and cutting employee task time by 30% across core application flows",
      "Collaborated closely with design, QA, and data teams to deliver 5+ production features, participating in requirement discussions, testing, and rollout."
    ],
    skills: ["C#", "SQL", "REST APIs", "SEO", "JavaScript"]
  },
  // Add more experiences here as needed
];


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