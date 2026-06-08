const languages = ["Python", "Go", "Rust", "C++", "TypeScript"]

const frameworks = ["FastAPI", "Node.js (Express)", "React", "TailwindCSS"]

const systemsInfra = ["Git", "Docker", "Redis", "Nginx", "CI/CD (GitHub Actions)", "GCP", "Prometheus", "Grafana"]

const databases = ["PostgreSQL", "MongoDB"]

const aiMl = ["PyTorch", "Pandas", "NumPy", "TensorFlow", "FAISS", "LLM APIs"]

export default function Skills() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-200  mb-6">
        Skills
      </h1>

      {/* Languages */}
      <div className="mb-6">
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

      {/* Systems & Infra */}
      <div className="mb-6">
        <h3 className="font-secondary text-gray-200 mb-3">
          Systems &amp; Infra
        </h3>
        <div className="flex flex-wrap gap-2">
          {systemsInfra.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-600 text-white font-small font-medium rounded-full "
            >
              {item}
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

      {/* AI/ML */}
      <div className="mb-6">
        <h3 className="font-secondary text-gray-200 mb-3">
          AI/ML
        </h3>
        <div className="flex flex-wrap gap-2">
          {aiMl.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-600 text-white font-small font-medium rounded-full "
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
