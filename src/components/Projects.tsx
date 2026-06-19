import styles from './Projects.module.css'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects">
      <h2 className={styles.heading}>
        <span className={styles.index}>01.</span> Projects
      </h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.card}>
            {project.image && (
              <img className={styles.thumb} src={project.image} alt={project.title} loading="lazy" />
            )}
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.desc}>{project.description}</p>

            <ul className={styles.tech}>
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <div className={styles.links}>
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer">
                  Code
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
