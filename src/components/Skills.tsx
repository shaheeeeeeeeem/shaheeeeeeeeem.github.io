import { SKILLS } from '../content'

export default function Skills() {
  return (
    <section className="section" aria-labelledby="skills">
      <h2 id="skills">Skills</h2>
      <ul className="skills">
        {SKILLS.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}
