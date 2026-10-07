export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <article className="project-card" key={project.id}>
          <header className="project-head">
            <h3>{project.name}</h3>
            <span className="project-year">{project.year}</span>
          </header>
          <p>{project.description}</p>
          <div className="project-tech">
            {project.tech.map((tech) => (
              <span className="tech-chip" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
