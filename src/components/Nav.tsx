import styles from './Nav.module.css'
import {profile} from '../data/profile'
import {useScrollSpy} from '../hooks/useScrollSpy'

const links = [
    {id: 'projects', label: 'Projects'},
    {id: 'experience', label: 'Experience'},
    {id: 'contact', label: 'Contact'},
]

const sectionIds = links.map((link) => link.id)

export default function Nav() {
    const {activeId, isScrolled} = useScrollSpy(sectionIds)

    return (
        <header className={styles.nav} data-scrolled={isScrolled || undefined}>
            <div className={styles.inner}>
                {/* "#top" scrolls to the start of the document without needing a target element. */}
                <a href="#top" className={styles.brand}>
                    <span className={styles.mark} aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor"
                             strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3.5 13.5 8 2.5l4.5 11M5.25 9.5h5.5"/>
                        </svg>
                    </span>
                    <span className={styles.name}>{profile.name}</span>
                </a>

                <nav aria-label="Sections">
                    <ul className={styles.links}>
                        {links.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`} aria-current={activeId === link.id ? 'true' : undefined}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
