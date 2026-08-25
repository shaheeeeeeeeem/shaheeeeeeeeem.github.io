import { PROJECTS } from '../content'

export default function Projects() {
  return (
    <section className="section" aria-labelledby="projects">
      <h2 id="projects">Projects</h2>
      <ul className="entries">
        {PROJECTS.map((project) => (
          <li className="entry" key={project.name}>
            <div className="entry-head">
              <h3>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <span className="meta">{project.language}</span>
            </div>
            <p>{project.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
