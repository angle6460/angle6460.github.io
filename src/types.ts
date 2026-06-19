export interface Project {
    title: string
    description: string
    tech: string[]
    repo?: string
    live?: string
    /** Optional screenshot path (place files in /public/images). */
    image?: string
}

export interface ExperienceItem {
    role: string
    company: string
    period: string
    highlights: string[]
}

export interface SocialLink {
    label: string
    href: string
}
