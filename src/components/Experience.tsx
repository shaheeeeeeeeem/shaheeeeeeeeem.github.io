import { EXPERIENCE } from '../content'

export default function Experience() {
  return (
    <section className="section" aria-labelledby="experience">
      <h2 id="experience">Experience</h2>
      <ul className="entries">
        {EXPERIENCE.map((role) => (
          <li className="entry" key={role.org}>
            <div className="entry-head">
              <h3>{role.org}</h3>
              <span className="meta">{role.period}</span>
            </div>
            <div className="entry-sub">{role.title}</div>
            <p>{role.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
