import styles from './Experience.module.css'
import {experience, skills} from '../data/experience'
import {profile} from '../data/profile'

export default function Experience() {
    return (
        <section id="experience">
            <h2 className={styles.heading}>
                <span className={styles.index}>02.</span> Experience
            </h2>

            <ol className={styles.timeline}>
                {experience.map((item) => (
                    <li key={`${item.company}-${item.role}`} className={styles.item}>
                        <div className={styles.period}>{item.period}</div>
                        <div className={styles.body}>
                            <h3 className={styles.role}>
                                {item.role} <span className={styles.company}>@ {item.company}</span>
                            </h3>
                            <ul className={styles.highlights}>
                                {item.highlights.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>

            <div className={styles.skillsWrap}>
                <h3 className={styles.skillsHeading}>Skills</h3>
                <ul className={styles.skills}>
                    {skills.map((s) => (
                        <li key={s}>{s}</li>
                    ))}
                </ul>
            </div>

            {profile.resumeUrl && (
                <a className={styles.resume} href={profile.resumeUrl} target="_blank" rel="noreferrer">
                    Download full resume →
                </a>
            )}
        </section>
    )
}
