import "../css/Skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "SQL",
    "Git",
    "GitHub",
    "C",
    "C++",
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>

        <p className="skills-text">
          Here are the technologies and programming languages I am currently
          working with.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;