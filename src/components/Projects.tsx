import styles from './Projects.module.css'
import {projects} from '../data/projects'
import SectionHeading from './SectionHeading'
import StatusDot from './StatusDot'
import TextLink from './TextLink'

/** "https://www.example.com/path" → "example.com", so live links say where they go. */
function hostname(url: string) {
    try {
        return new URL(url).hostname.replace(/^www\./, '')
    } catch {
        return 'Live site'
    }
}

export default function Projects() {
    return (
        <section id="projects" aria-labelledby="projects-title">
            <SectionHeading id="projects-title" count={projects.length}>
                Projects
            </SectionHeading>

            <ol className={styles.list}>
                {projects.map((project, index) => (
                    <li key={project.title} className={styles.item} data-reveal>
                        <article className={styles.project}>
                            <div className={styles.meta}>
                                <span className={styles.index} aria-hidden="true">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                {project.live && (
                                    <span className={styles.live}>
                                        <StatusDot/>
                                        Live
                                    </span>
                                )}
                            </div>

                            <div>
                                <header className={styles.header}>
                                    <h3 className={styles.title}>{project.title}</h3>
                                    <div className={styles.links}>
                                        {project.live && (
                                            <TextLink href={project.live}>{hostname(project.live)}</TextLink>
                                        )}
                                        {project.repo && <TextLink href={project.repo}>Source</TextLink>}
                                    </div>
                                </header>

                                {project.image && (
                                    <img
                                        className={styles.thumb}
                                        src={project.image}
                                        alt={`Screenshot of ${project.title}`}
                                        loading="lazy"
                                    />
                                )}

                                <p className={styles.desc}>{project.description}</p>

                                <ul className={styles.tech} aria-label="Built with">
                                    {project.tech.map((t) => (
                                        <li key={t}>{t}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    </li>
                ))}
            </ol>
        </section>
    )
}
