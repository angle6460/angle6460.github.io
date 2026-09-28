import styles from './StatusDot.module.css'

/** Small accent dot. `pulse` adds a slow radar ring for "happening right now" signals. */
export default function StatusDot({pulse = false}: {pulse?: boolean}) {
    return <span className={pulse ? `${styles.dot} ${styles.pulse}` : styles.dot} aria-hidden="true"/>
}
