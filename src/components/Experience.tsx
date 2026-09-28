import styles from './Experience.module.css'
import {experience, isCurrent, skills} from '../data/experience'
import {profile} from '../data/profile'
import SectionHeading from './SectionHeading'
import StatusDot from './StatusDot'
import TextLink from './TextLink'

export default function Experience() {
    return (
        <section id="experience" aria-labelledby="experience-title">
            <SectionHeading id="experience-title" count={experience.length}>
                Experience
            </SectionHeading>

            <ol className={styles.list}>
                {experience.map((item) => (
                    <li key={`${item.company}-${item.role}`} className={styles.item} data-reveal>
                        <p className={styles.period}>
                            {isCurrent(item) && <StatusDot/>}
                            {item.period}
                        </p>
                        <div>
                            <h3 className={styles.role}>{item.role}</h3>
                            <p className={styles.company}>{item.company}</p>
                            <ul className={styles.highlights}>
                                {item.highlights.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>

            <div className={styles.skills} data-reveal>
                <h3 className={styles.label}>Skills</h3>
                <div>
                    <ul className={styles.skillList}>
                        {skills.map((s) => (
                            <li key={s}>{s}</li>
                        ))}
                    </ul>
                    {profile.resumeUrl && (
                        <p className={styles.resume}>
                            <TextLink href={profile.resumeUrl} newTab>
                                Full resume (PDF)
                            </TextLink>
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}
