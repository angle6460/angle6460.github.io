import type {ReactNode} from 'react'
import styles from './TextLink.module.css'
import {ArrowUpRightIcon} from './Icons'

interface Props {
    href: string
    children: ReactNode
    /** Open in a new tab. Defaults to true for http(s) links. */
    newTab?: boolean
    className?: string
}

/** Quiet tertiary link. Links that open a new tab get an arrow and a screen-reader hint. */
export default function TextLink({href, children, newTab = /^https?:\/\//.test(href), className}: Props) {
    return (
        <a
            className={className ? `${styles.link} ${className}` : styles.link}
            href={href}
            target={newTab ? '_blank' : undefined}
            rel={newTab ? 'noreferrer' : undefined}
        >
            {children}
            {newTab && (
                <>
                    <ArrowUpRightIcon className={styles.icon}/>
                    <span className="sr-only"> (opens in a new tab)</span>
                </>
            )}
        </a>
    )
}
