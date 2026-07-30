import "../css/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built using React to showcase my skills, projects and contact information.",
      tech: "React, CSS",
    },
    {
      title: "Currency Converter",
      description:
        "A currency converter that fetches live exchange rates and converts currencies instantly.",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "Weather App",
      description:
        "A weather application that displays real-time weather information using a weather API.",
      tech: "React, API",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>

        <p className="projects-text">
          Here are some of the projects I have built while learning web
          development.
        </p>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <span>{project.tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;