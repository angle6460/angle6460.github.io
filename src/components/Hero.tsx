import styles from './Hero.module.css'
import {profile, socials} from '../data/profile'
import {experience, isCurrent} from '../data/experience'
import StatusDot from './StatusDot'
import TextLink from './TextLink'
import {ArrowDownIcon} from './Icons'

const currentRole = experience.find(isCurrent)

export default function Hero() {
    return (
        <section id="about" className={styles.hero} aria-labelledby="hero-title">
            {currentRole && (
                <p className={styles.status}>
                    <StatusDot pulse/>
                    Currently at {currentRole.company}
                </p>
            )}

            <h1 id="hero-title" className={styles.name}>{profile.name}</h1>
            <p className={styles.tagline}>{profile.tagline}</p>

            <div className={styles.intro}>
                <p className={styles.lead}>{profile.lead}</p>

                <div>
                    <p className={styles.bio}>{profile.bio}</p>

                    <div className={styles.actions}>
                        <a className={styles.primary} href="#projects">
                            View my work
                            <ArrowDownIcon className={styles.primaryIcon}/>
                        </a>
                        {profile.resumeUrl && (
                            <TextLink href={profile.resumeUrl} newTab>
                                Resume
                            </TextLink>
                        )}
                        {socials.map((s) => (
                            <TextLink key={s.label} href={s.href}>
                                {s.label}
                            </TextLink>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
