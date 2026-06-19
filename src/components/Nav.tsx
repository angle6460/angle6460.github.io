import styles from './Nav.module.css'
import {profile} from '../data/profile'

const links = [
    {href: '#about', label: 'About'},
    {href: '#projects', label: 'Projects'},
    {href: '#experience', label: 'Experience'},
]

export default function Nav() {
    return (
        <header className={styles.nav}>
            <div className={styles.inner}>
                <a href="#about" className={styles.brand}>
                    {profile.name}
                </a>
                <nav className={styles.links}>
                    {links.map((link) => (
                        <a key={link.href} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}
