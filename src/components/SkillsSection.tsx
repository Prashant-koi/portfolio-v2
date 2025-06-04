import '../app/globals.css'
const skills = ["Programming", "Team Cooperation", "Time Management", "Communication"]

export default function SkillsSection() {
  return (
    <section id="skills">
      <h2>🛠️ Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}