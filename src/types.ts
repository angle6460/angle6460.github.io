export interface Project {
  title: string
  description: string
  tech: string[]
  /** Optional link to the source repository. */
  repo?: string
  /** Optional link to a live/demo deployment. */
  live?: string
  /** Optional screenshot path (place files in /public/images). */
  image?: string
}

export interface ExperienceItem {
  role: string
  company: string
  /** Free-form date range, e.g. "2023 — Present". */
  period: string
  /** Bullet points describing the role. */
  highlights: string[]
}

export interface SocialLink {
  label: string
  href: string
}
