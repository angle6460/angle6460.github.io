import styles from './SectionHeading.module.css'

interface Props {
    id: string
    children: string
    /** Number of items in the section, shown as a small superscript like "03". */
    count?: number
}

export default function SectionHeading({id, children, count}: Props) {
    return (
        <h2 id={id} className={styles.heading}>
            {children}
            {count !== undefined && (
                <sup className={styles.count} aria-hidden="true">
                    {String(count).padStart(2, '0')}
                </sup>
            )}
        </h2>
    )
}
