const languages = ["JavaScript", "Python", "C++", "C#", "Java", "TypeScript", "C"]

const frameworks = ["React.js", "Next.js", "Express.js", "Spring Boot", "Tailwind CSS", "Node.js"]

const databases = ["MySQL", "MongoDB", "PostgreSQL", "SQLite"]

const technologies = ["Git", "Docker", "AWS", "Linux", "Shell Scripting", "JWT", "REST APIs"]

export default function Skills() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-200  mb-6">
        Skills
      </h1>
      
      {/* Languages */}
      <div className="mb-6">
        {/* Category Header - SECONDARY */}
        <h3 className="font-secondary text-gray-200 mb-3">
          Languages
        </h3>
        <div className="flex flex-wrap gap-2">
          {languages.map((language, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-green-600 text-white font-small font-medium rounded-full "
            >
              {language}
            </span>
          ))}
        </div>
      </div>

      {/* Frameworks */}
      <div className="mb-6">
        <h3 className="font-secondary text-gray-200 mb-3">
          Frameworks
        </h3>
        <div className="flex flex-wrap gap-2">
          {frameworks.map((framework, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-red-600 text-white font-small font-medium rounded-full "
            >
              {framework}
            </span>
          ))}
        </div>
      </div>

      {/* Databases */}
      <div className="mb-6">
        <h3 className="font-secondary text-gray-200 mb-3">
          Databases
        </h3>
        <div className="flex flex-wrap gap-2">
          {databases.map((database, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-yellow-600 text-white font-small font-medium rounded-full "
            >
              {database}
            </span>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <h3 className="font-secondary text-gray-200 mb-3">
          Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((technology, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-600 text-white font-small font-medium rounded-full "
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}