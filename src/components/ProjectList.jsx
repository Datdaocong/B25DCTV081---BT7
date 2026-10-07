export default function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((p) => (
        <div className="project" key={p.name}>
          <h3>
            {p.name} ({p.year})
          </h3>
          <p>{p.description}</p>
          <p className="tech">{p.tech.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
