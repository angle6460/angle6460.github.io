import styles from './Hero.module.css'
import {profile, socials} from '../data/profile'

export default function Hero() {
    return (
        <section id="about" className={styles.hero}>
            <p className={styles.greeting}>Welcome! My name is</p>
            <h1 className={styles.name}>{profile.name}</h1>
            <h2 className={styles.tagline}>{profile.tagline}</h2>
            <p className={styles.bio}>{profile.bio}</p>

            <div className={styles.actions}>
                <a className={styles.primary} href="#projects">
                    View my work
                </a>
                {profile.resumeUrl && (
                    <a className={styles.secondary} href={profile.resumeUrl} target="_blank" rel="noreferrer">
                        Resume
                    </a>
                )}
            </div>

            <div className={styles.socials}>
                {socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                        {s.label}
                    </a>
                ))}
            </div>
        </section>
    )
}
