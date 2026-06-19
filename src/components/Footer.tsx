import styles from './Footer.module.css'
import { profile, socials } from '../data/profile'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        {socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
      </div>
      <p className={styles.note}>
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Vite.
      </p>
    </footer>
  )
}
