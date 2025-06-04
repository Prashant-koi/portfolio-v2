import '../app/globals.css'

const projects = [
  {
    title: "Song Review App",
    description: "An App for song lovers where you can review songs and see the ranking of songs according to their genre, along with a top ranking.",
    skills: ["MySql", "Express.js", "React.js", "Node.js"]
  },
  {
    title: "Chell- A Shell Made In C",
    description: "An Unix like Shell Made using C programming langauge compatable with both Linux and Windows.",
    skills: ["C", "Memory Allocation", "Shell", "Operating System"]
  },
  {
    title: "Prep AI",
    description: "Study helper website for exam preparation and schedule management. Features: schedule building, flash card generator, and quiz generation.",
    skills: ["React.js", "Tailwind", "Spring Boot", "Node.js"]
  },
  {
    title: "P's Market",
    description: "P's Market is a website that will enable you to see and analyze stocks of hundreds and possibly thousands of stock markets and exchanges.P's Market has a protected login feature made possible by using JWT. We are using Nodejs as the backend and MongoDB for the database server, where all your information is kept encrypted and safe.",
    skills: ["React.js", "Tailwind", "Spring Boot", "Node.js"]
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects">
      <h2>🧑‍💻 Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="skills-list">
            {project.skills.map((skill, skillIndex) => (
              <span key={skillIndex} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}