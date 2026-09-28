import {useEffect, useRef, useState} from 'react'
import styles from './Footer.module.css'
import {profile, socials} from '../data/profile'
import SectionHeading from './SectionHeading'
import TextLink from './TextLink'
import {ArrowUpIcon, CheckIcon, CopyIcon} from './Icons'

// Email gets its own row, so only list the other profiles here.
const elsewhere = socials.filter((s) => !s.href.startsWith('mailto:'))

type CopyState = 'idle' | 'copied' | 'failed'

const copyLabels: Record<CopyState, string> = {
    idle: 'Copy',
    copied: 'Copied',
    failed: 'Couldn’t copy',
}

const copyAnnouncements: Record<CopyState, string> = {
    idle: '',
    copied: 'Email address copied to clipboard',
    failed: 'Couldn’t copy automatically. The email address is selected so you can copy it.',
}

export default function Footer() {
    const [copyState, setCopyState] = useState<CopyState>('idle')
    const emailRef = useRef<HTMLAnchorElement>(null)
    const resetTimer = useRef<number>()

    useEffect(() => () => window.clearTimeout(resetTimer.current), [])

    function showCopyState(state: CopyState) {
        setCopyState(state)
        window.clearTimeout(resetTimer.current)
        resetTimer.current = window.setTimeout(() => setCopyState('idle'), 2500)
    }

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(profile.email)
            showCopyState('copied')
        } catch {
            // Clipboard access can be blocked (permissions policy, embedded browsers).
            // Select the address instead so it can be copied by hand.
            if (emailRef.current) window.getSelection()?.selectAllChildren(emailRef.current)
            showCopyState('failed')
        }
    }

    return (
        <footer id="contact" className={styles.footer} aria-labelledby="contact-title">
            <SectionHeading id="contact-title">Get in touch</SectionHeading>

            <dl className={styles.rows}>
                <div className={styles.row}>
                    <dt className={styles.label}>Email</dt>
                    <dd className={styles.value}>
                        <a ref={emailRef} className={styles.email} href={`mailto:${profile.email}`}>
                            {profile.email}
                        </a>
                        <button type="button" className={styles.copy} data-state={copyState} onClick={copyEmail}>
                            {copyState === 'copied' ? <CheckIcon/> : <CopyIcon/>}
                            {copyLabels[copyState]}
                            <span className="sr-only"> email address</span>
                        </button>
                        <span className="sr-only" aria-live="polite">
                            {copyAnnouncements[copyState]}
                        </span>
                    </dd>
                </div>

                <div className={styles.row}>
                    <dt className={styles.label}>Elsewhere</dt>
                    <dd className={styles.value}>
                        {elsewhere.map((s) => (
                            <TextLink key={s.label} href={s.href}>
                                {s.label}
                            </TextLink>
                        ))}
                        {profile.resumeUrl && (
                            <TextLink href={profile.resumeUrl} newTab>
                                Resume
                            </TextLink>
                        )}
                    </dd>
                </div>
            </dl>

            <div className={styles.bottom}>
                <p>
                    © {new Date().getFullYear()} {profile.name}. Built with React &amp; Vite.
                </p>
                <a className={styles.top} href="#top">
                    Back to top
                    <ArrowUpIcon/>
                </a>
            </div>
        </footer>
    )
}
